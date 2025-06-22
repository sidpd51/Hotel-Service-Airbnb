'use strict';

import { QueryInterface } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS hotels (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      address VARCHAR(255) NOT NULL,
      location VARCHAR(255) NOT NULL,
      rating DECIMAL(2, 1) CHECK (rating >= 0 AND rating <= 5) DEFAULT 0.0 NOT NULL,
      rating_count INT DEFAULT 0 NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      deleted_at TIMESTAMP NULL DEFAULT NULL
    );
  `);
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.sequelize.query(`
      DROP TABLE IF EXISTS hotels
    `);
  }
};
