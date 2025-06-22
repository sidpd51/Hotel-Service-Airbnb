'use strict';

import { QueryInterface } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.sequelize.query(`
       ALTER TABLE rooms
       ADD CONSTRAINT fk_rooms_hotel
       FOREIGN KEY (hotel_id)
       REFERENCES hotels(id)
       ON DELETE CASCADE
       ON UPDATE CASCADE;
     `);
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.sequelize.query(`
       ALTER TABLE rooms
       DROP FOREIGN KEY fk_rooms_hotel;
     `);
  }
};
