'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert(
      'Products',
      [
        {
          productName: 'Playstation 5',
          quantity: 300,
          unityPrice: 5000,
        },
        {
          productName: 'Xbox Series X',
          quantity: 350,
          unityPrice: 4500,
        },
        {
          productName: 'Controle T4W',
          quantity: 600,
          unityPrice: 250,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  },
};
