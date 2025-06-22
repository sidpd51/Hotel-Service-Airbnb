'use strict';

import { QueryInterface } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface:QueryInterface) {
    await queryInterface.sequelize.query(`
      ALTER TABLE room_categories
      ADD CONSTRAINT fk_room_categories_hotel
      FOREIGN KEY (hotel_id)
      REFERENCES hotels(id)
      ON DELETE CASCADE
      ON UPDATE CASCADE;
    `);
  },

  async down (queryInterface:QueryInterface) {
     await queryInterface.sequelize.query(`
      ALTER TABLE room_categories
      DROP FOREIGN KEY fk_room_categories_hotel;
    `);
  }
};
