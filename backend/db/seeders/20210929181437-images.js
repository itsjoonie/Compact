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
          pic4: 'https://a0.muscache.com/im/pictures/5f2d2f1e-85cb-4854-9008-ae9266d47af9.jpg?im_w=1440',
          pic5: 'https://a0.muscache.com/im/pictures/dd09af78-641f-4a3f-9a47-7113fe8bba0a.jpg?im_w=1440',
          pic6: 'https://www.airbnb.com/rooms/36315829/photos/959712358?source_impression_id=p3_1632939620_x33lM6xnI2%2FjB%2BdN&guests=1&adults=1'
        },
        {
          hostingId: 2,
          pic1: 'https://a0.muscache.com/im/pictures/72bb6940-2bc8-4dc4-b16e-01b8a7a4859f.jpg?im_w=1200',
          pic2: 'https://a0.muscache.com/im/pictures/b296c268-3473-4651-bca6-035ff3fcd184.jpg?im_w=720',
          pic3: 'https://a0.muscache.com/im/pictures/9bd8bd34-5c27-4836-b892-5e45109ab9ff.jpg?im_w=720',
          pic4: 'https://a0.muscache.com/im/pictures/a045ba00-1938-41a9-b9c1-0ad0c8427cf9.jpg?im_w=720',
          pic5: 'https://a0.muscache.com/im/pictures/51110d05-f289-45fd-96ec-c5213f1929a4.jpg?im_w=720',
          pic6: 'https://a0.muscache.com/im/pictures/b98e5f08-2c89-47f2-8a8e-ef6efc263e42.jpg?im_w=1440',
        },
        {
          hostingId: 3,
          pic1: 'https://a0.muscache.com/im/pictures/145e1eaf-c130-4e88-a5af-e53fa0a7f302.jpg?im_w=1200',
          pic2: 'https://a0.muscache.com/im/pictures/c9595d1b-4212-4261-84d1-96c9349a9eee.jpg?im_w=1200',
          pic3: 'https://a0.muscache.com/im/pictures/50262bff-7147-4153-8c09-923153eccd53.jpg?im_w=720',
          pic4: 'https://a0.muscache.com/im/pictures/1b34a65c-760b-4ef2-9c59-ae52fdc6f0a2.jpg?im_w=1200',
          pic5: 'https://a0.muscache.com/im/pictures/502d788e-d454-4d28-805c-e5cc86cc992e.jpg?im_w=720',
          pic6: 'https://a0.muscache.com/im/pictures/7b57432d-3ca2-4eba-b741-803c6e513c24.jpg?im_w=720'          
        },
        {
          hostingId: 4,
          pic1: 'https://a0.muscache.com/im/pictures/4bbcb729-0455-4ef1-b31c-d0246b1fc6aa.jpg?im_w=720',
          pic2: 'https://a0.muscache.com/im/pictures/fff9bc33-8458-4cf8-9acd-f9bbdf751af9.jpg?im_w=720',
          pic3: 'https://a0.muscache.com/im/pictures/02e94778-7d7d-430d-8347-333e9cbe411b.jpg?im_w=720',
          pic4: 'https://a0.muscache.com/im/pictures/94c9381f-1293-4e8e-afe1-0699a7f8f35b.jpg?im_w=720',
          pic5: 'https://a0.muscache.com/im/pictures/efca1419-70d9-46fe-b304-89e14613ee43.jpg?im_w=720',
          pic6: 'https://a0.muscache.com/im/pictures/99b272c2-1a9b-463d-856c-883c9039cbc1.jpg?im_w=720'    
        },
        {
          hostingId: 5,
          pic1: 'https://daigno.ca/en/assets/images/koroc-v-2021-1949x1273.jpg',
          pic2: 'https://daigno.ca/en/assets/images/dsc0949-2-2000x1385.jpeg',
          pic3: 'https://daigno.ca/en/assets/images/dsc0936-2000x1325.jpg',
          pic4: 'https://daigno.ca/en/assets/images/dsc0165-2000x3020.jpg',   
        },
        {
          hostingId: 6,
          pic1: 'https://teenyabode.com/wp-content/uploads/2020/02/TINY-HOUSE-FRANCE-13.jpg',
          pic2: 'https://teenyabode.com/wp-content/uploads/2020/02/TINY-HOUSE-FRANCE-12.jpg',
          pic3: 'https://teenyabode.com/wp-content/uploads/2020/02/TINY-HOUSE-FRANCE-7.jpg',
          pic4: 'https://teenyabode.com/wp-content/uploads/2020/02/TINY-HOUSE-FRANCE-11.jpg',
  
        },
        {
          hostingId: 7,
          pic1: 'https://a0.muscache.com/im/pictures/b51aeefc-384d-4484-b420-4423f3f08e04.jpg?im_w=1440',
          pic2: 'https://a0.muscache.com/im/pictures/242300d6-ee2d-4e19-8f1b-9d746bb21e78.jpg?im_w=720',
          pic3: 'https://a0.muscache.com/im/pictures/bdab4f7b-f5af-40de-a0cf-8ed4c75786e8.jpg?im_w=1200',
          pic4: 'https://a0.muscache.com/im/pictures/35fa8f9a-de82-40f2-90a1-28a82df0d5a7.jpg?im_w=720',
          pic5: 'https://a0.muscache.com/im/pictures/1efe11fb-d731-4c15-8fea-57acfd46be41.jpg?im_w=1200',
          pic6: 'https://a0.muscache.com/im/pictures/a4f0b4eb-e669-4d4e-8f75-23d7a6c4bf88.jpg?im_w=1440'    
        },
        {
          hostingId: 8,
          pic1: 'https://hipcamp-res.cloudinary.com/image/upload/c_fill,f_auto,g_auto,h_480,q_60,w_720/v1610486584/campground-photos/jaeemyutf6namxhepton.png',
          pic2: 'https://hipcamp-res.cloudinary.com/image/upload/c_fill,f_auto,g_auto,h_480,q_60,w_720/v1612417729/campground-photos/alr7kc68p5ggm5akoxtk.png',
          pic3: 'https://hipcamp-res.cloudinary.com/images/c_limit,f_auto,h_1200,q_60,w_1920/v1619411909/campground-photos/fnimkgbnkvbyqqysnmf1/the-enchanted-forest-retreat-enchanted-forest-retreat-tiny-house-san-francisco.jpg',
          pic4: 'https://hipcamp-res.cloudinary.com/images/c_limit,f_auto,h_1200,q_60,w_1920/v1619327252/campground-photos/xk0yja1qdyravnyo2ksc/the-enchanted-forest-retreat-enchanted-forest-retreat-tiny-house-san-francisco.jpg',
          pic5: 'https://www.hipcamp.com/california/the-enchanted-forest-retreat/enchanted-forest-retreat-tiny-house?pic=5a22979c-fa97-4632-88cb-cadb800f81e6',
          pic6: 'https://hipcamp-res.cloudinary.com/images/c_limit,f_auto,h_1200,q_60,w_1920/v1612417729/campground-photos/alr7kc68p5ggm5akoxtk/the-enchanted-forest-retreat-enchanted-forest-retreat-tiny-house-san-francisco.png'    
        }
        {
          hostingId: 9,
          pic1: 'https://a0.muscache.com/im/pictures/0a66027d-4961-4dac-b69f-e318c2c10cb2.jpg?im_w=720',
          pic2: 'https://a0.muscache.com/im/pictures/016956b1-0d6a-4363-8a52-4a120ec8942a.jpg?im_w=1200',
          pic3: 'https://a0.muscache.com/im/pictures/0bc3dc58-67d4-4165-a5c4-a4b7b9e4e4ac.jpg?im_w=720',
          pic4: 'https://a0.muscache.com/im/pictures/425d8f14-eabf-4a6b-b6dc-d9b4614c7290.jpg?im_w=720',
          pic5: 'https://a0.muscache.com/im/pictures/fdcd3022-9c5d-4a6e-a31d-595380e33866.jpg?im_w=1200',
          pic6: 'https://a0.muscache.com/im/pictures/7de70a05-d6ca-44a0-a6c9-9f4e7069c1dc.jpg?im_w=720'    
        }
        {
          hostingId: 10,
          pic1: '',
          pic2: '',
          pic3: '',
          pic4: '',
          pic5: '',
          pic6: ''    
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
  }
};
