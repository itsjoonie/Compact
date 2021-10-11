'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      return queryInterface.bulkInsert('Images', [
        {
          hostingId: 1,
          pic1: 'https://a0.muscache.com/im/pictures/2319a240-7668-4ca0-9b1d-d8f202456425.jpg?im_w=1200',
          pic2: 'https://a0.muscache.com/im/pictures/fa5b1575-c852-4503-b11c-c83e2b65e4c9.jpg?im_w=1440',
          pic3: 'https://a0.muscache.com/im/pictures/5996b69b-0271-49a5-b438-49dde58cdb02.jpg?im_w=1440',

        },
        {
          hostingId: 2,
          pic1: 'https://a0.muscache.com/im/pictures/72bb6940-2bc8-4dc4-b16e-01b8a7a4859f.jpg?im_w=1200',
          pic2: 'https://a0.muscache.com/im/pictures/b296c268-3473-4651-bca6-035ff3fcd184.jpg?im_w=720',
          pic3: 'https://a0.muscache.com/im/pictures/9bd8bd34-5c27-4836-b892-5e45109ab9ff.jpg?im_w=720',
        },
        {
          hostingId: 3,
          pic1: 'https://a0.muscache.com/im/pictures/145e1eaf-c130-4e88-a5af-e53fa0a7f302.jpg?im_w=1200',
          pic2: 'https://a0.muscache.com/im/pictures/c9595d1b-4212-4261-84d1-96c9349a9eee.jpg?im_w=1200',
          pic3: 'https://a0.muscache.com/im/pictures/50262bff-7147-4153-8c09-923153eccd53.jpg?im_w=720'          
        },
        {
          hostingId: 4,
          pic1: 'https://a0.muscache.com/im/pictures/4bbcb729-0455-4ef1-b31c-d0246b1fc6aa.jpg?im_w=720',
          pic2: 'https://a0.muscache.com/im/pictures/fff9bc33-8458-4cf8-9acd-f9bbdf751af9.jpg?im_w=720',
          pic3: 'https://a0.muscache.com/im/pictures/02e94778-7d7d-430d-8347-333e9cbe411b.jpg?im_w=720'   
        },
        {
          hostingId: 5,
          pic1: 'https://daigno.ca/en/assets/images/koroc-v-2021-1949x1273.jpg',
          pic2: 'https://daigno.ca/en/assets/images/dsc0949-2-2000x1385.jpeg',
          pic3: 'https://daigno.ca/en/assets/images/dsc0936-2000x1325.jpg',
        },
        {
          hostingId: 6,
          pic1: 'https://teenyabode.com/wp-content/uploads/2020/02/TINY-HOUSE-FRANCE-13.jpg',
          pic2: 'https://teenyabode.com/wp-content/uploads/2020/02/TINY-HOUSE-FRANCE-12.jpg',
          pic3: 'https://teenyabode.com/wp-content/uploads/2020/02/TINY-HOUSE-FRANCE-7.jpg',
  
        },
        {
          hostingId: 7,
          pic1: 'https://a0.muscache.com/im/pictures/b51aeefc-384d-4484-b420-4423f3f08e04.jpg?im_w=1440',
          pic2: 'https://a0.muscache.com/im/pictures/242300d6-ee2d-4e19-8f1b-9d746bb21e78.jpg?im_w=720',
          pic3: 'https://a0.muscache.com/im/pictures/bdab4f7b-f5af-40de-a0cf-8ed4c75786e8.jpg?im_w=1200',   
        },
        {
          hostingId: 8,
          pic1: 'https://hipcamp-res.cloudinary.com/image/upload/c_fill,f_auto,g_auto,h_480,q_60,w_720/v1610486584/campground-photos/jaeemyutf6namxhepton.png',
          pic2: 'https://hipcamp-res.cloudinary.com/image/upload/c_fill,f_auto,g_auto,h_480,q_60,w_720/v1612417729/campground-photos/alr7kc68p5ggm5akoxtk.png',
          pic3: 'https://hipcamp-res.cloudinary.com/images/c_limit,f_auto,h_1200,q_60,w_1920/v1619411909/campground-photos/fnimkgbnkvbyqqysnmf1/the-enchanted-forest-retreat-enchanted-forest-retreat-tiny-house-san-francisco.jpg',   
        },
        {
          hostingId: 9,
          pic1: 'https://a0.muscache.com/im/pictures/0a66027d-4961-4dac-b69f-e318c2c10cb2.jpg?im_w=720',
          pic2: 'https://a0.muscache.com/im/pictures/016956b1-0d6a-4363-8a52-4a120ec8942a.jpg?im_w=1200',
          pic3: 'https://a0.muscache.com/im/pictures/0bc3dc58-67d4-4165-a5c4-a4b7b9e4e4ac.jpg?im_w=720',   
        },
        {
          hostingId: 10,
          pic1: 'https://www.atinyhouseresort.com/uploads/9/vista%20spring.jpg',
          pic2: 'https://www.atinyhouseresort.com/uploads/9/view%20from%20the%20vista%20fall.jpg',
          pic3: 'https://www.atinyhouseresort.com/uploads/9/winter%20at%20the%20vista.jpg',  
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Images', null, {});
  }
};
