import express from 'express';
import { serverConfig } from './config';
import { logger } from './config/logger.config';
import sequelize from './db/models/sequelize';
import { attachCorrelationIdMiddleware } from './middlewares/correlation.middleware';
import { appErrorHandler } from './middlewares/error.middleware';
import router from './routers/v1';


const app = express();
app.use(express.json());


const PORT: number = serverConfig.PORT;

app.use(attachCorrelationIdMiddleware);
app.use('/api/v1', router);
app.use(appErrorHandler);

app.listen(PORT, async () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    try {
        await sequelize.authenticate();
        logger.info('Database connection has been established successfully!');
    } catch (error) {
        logger.error("something went wrong while connecting to the database");
    }
});