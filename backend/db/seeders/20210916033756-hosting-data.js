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

    return queryInterface.bulkInsert('Hostings', [
      {
        userId: 16,
        title: 'Joshua Tree Harebnb',
        description: `My newly constructed tiny house is located in the heart of Joshua Tree! It’s tiny, but mighty. While the home is only 300 square feet, it’s open and airy layout can accommodate up to 4 people. It's a cozy fit, but we make it work perfectly.The home is furnished with one full-size memory foam bed in the upstairs loft, and one full-size Article sleeper sofa. (We'll let you draw straws to decide who is sleeping where—ha!) The optimal amount of guests would be 1-3 people. But we can definitely fit 4 if you're willing to squeeze! Please keep in mind, it’s a tiny house. So if space and privacy is important to you, this may not be the best fit.Inside the kitchen, you'll find all the silverware, pots, pans and plates you need to pretend like you’re going to cook yourself dinner from scratch!`,
        city: 'Joshua Tree',
        state: 'CA',
        country: 'USA',
        guest: 2,
        pet: true,
        bed: 2,
        bathroom: 1,
        price:100 
      },
      {
        userId: 16,
        title: 'THE ESCHER TINY HOME',
        description: `Welcome to The Escher Tiny House!
          The Escher at The Eyries is a remote two bed, one bath, tiny-house-on-wheels located just 10 mins from Big Basin State Park in Boulder Creek, CA. This home was thoughtfully designed down to the inch, all to elevate a new lifestyle opportunity. It’s a place to fuel inspiration and uncover new directions...or to simply take a break from the constant pull of our modern world.
          We hope you can find peace here. Relax in the heated cedar soak-tub, under a starry nights sky, and feel at home.
          Originally designed as our own mountain family home, we treasured it for years before beginning to share it with others.`,
        city:'Boulder Creek', 
        state:'CA',
        country:'USA', 
        guest: 3,
        pet: true,
        bed: 2,
        bathroom: 1, 
        price: 120
      },
      {
        userId: 19, 
        title: 'The Pavilion: A San Francisco Tiny House',
        description: `The Pavilion: A San Francisco Tiny House was completed in 2009. Tiny house living is not for everyone but the Pavilion will give you a chance to try it out. You'll find recycled and repurposed materials throughout the property, beginning with the custom gate, covering the walls of the fence and even inside on the dining/work table and wood steps. Architect David Winslow designed the space and Shirley Watts, artist and landscape designer, installed the garden and fence. The Pavilion has attracted architecture and garden tours from groups around the world and has been a frequent destination for many visiting architecture students. A rehabbed 1906 earthquake cottage, original to the property, sits adjacent but separate to the Pavilion, linked by an outdoor deck. A full time tenant shares the gate and accesses the cottage via the cobblestone path along the south side of the Pavilion. Please respect her privacy, as she will honor yours.`,
        city: 'San Francisco',
        state: 'CA',
        country: 'USA',
        guest: 2,
        pet: false,
        bed: 1,
        bathroom: 1, 
        price: 165
      },
      {
        userId: 17,
        title: 'Tiny luxury near Yosemite',
        description: `This truly luxurious tiny house is located only 8 miles to Yosemite National Park's south entrance. The tiny has two lofts, each with comfy queen beds. The kitchen has a small refrigerator, microwave, and stove. This tiny home also boasts a full sized shower and flushing toilet. Outside is a table and a grill for more cooking/dining options - all the comforts of home, just tiny. If you are planning a trip to Yosemite, we would love to be your hosts.`,
        city: 'Yosemite',
        state: 'CA',
        country: 'USA',
        guest: 2,
        pet: false,
        bed:1,
        bathroom:1, 
        price: 150
      },
      {
        userId: 17,
        title: 'Handcrafted Cedar Tiny Houseboat',
        description: `This float home is completely off-grid with a solar panel and batteries for electricity, a water pump to pull water from the lake or river for showering, a freshwater tank for drinking water, a composting toilet, a carbon filter for greywater, and a propane heater.  There are also two roof fans and plenty of windows and doors that can help keep air circulating.

        This is a beautiful build and it was fun to spend the day on the water with Richard and his business partner Özgen, touring and spending time on the pontoon boat, and even cooler to go back to his workshop at the end of the day to see where all the magic happens.  Richard really does create every part of this boat by hand and we hope you enjoyed taking a peek at another of his masterpieces!`,
        city:'Quebec' ,
        state: 'N/A',
        country: 'Canada', 
        guest: 2,
        pet: false,
        bed:1,
        bathroom:1, 
        price: 250
      },
      {
        userId: 17,
        title: 'Dream Minimalist Tiny House in France',
        description:`French couple have built their dream tiny house. Located in an idyllic rural garden on the outskirts of Nantes, France, Celia and Damien’s home may be tiny, but it’s filled with some really big design ideas. Their tiny home is beautifully constructed, with cedar and metal construction on the exterior creating a striking architectural look while the interior has been kept wonderfully open, spacious and minimalist in its design.

        The tiny house movement in France is still quite young, although it’s quickly becoming a hot spot for tiny houses in Europe as more people seek out options for affordable, alternative living.

        This couple's home has absolutely everything, a wonderful open design creates room for a great sized kitchen, office, lounge and bathroom with sleeping loft upstairs. Celia and Damien have also wonderfully future proofed their home, adding a second smaller sleeping area in the loft to ensure they have some room in the tiny house to allow their family to grow.`, 
        city: 'Paris',
        state: 'N/A',
        country: 'France',
        guest: 2,
        pet: false,
        bed: 1,
        bathroom: 1,
        price: 170
      },
      {
        userId: 18,
        title: 'Tiny House - Sand Dollar',
        description: `Sand Dollar is our Amy model's "big" sister.  She has a penthouse suite with an easy spiral staircase found privately on the other side of the bathroom.  She also has a sleeping loft above the kitchen that cantilevers over the cute front porch and a modern comfy futon that folds out to a sleeper.  The kitchen and bar area are a great place to congregate and have drinks or catch a meal.  The vaulted ceilings in the main room make her seem not so tiny in fact.  The decor makes you feel... well... like you're on vacation.  The bathroom sports a real deal flushing toilet, a corner shower stall, and a great ikea sink and wardrobe. `,
        city: 'Miami',
        state: 'FL',
        country: 'USA',
        guest: 4,
        pet: true,
        bed:2,
        bathroom: 1, 
        price: 100
      },      
      {
        userId: 18,
        title: 'Enchanted Forest Retreat Tiny House',
        description: `The Tiny House allows only one vehicle. The vehicle traffic damages the road and it is very expensive to do road works. Also increased traffic causes disturbances to the residents and neighborhood so we have to strictly limit the number of vehicles. In case you need one more car contact host for approval with extra charge. No loud music allowed any time. Quiet time 9p - 9a. Our onsite staff will go around and enforce the rules.

        The Tiny House is cozy 100sf (10x10), insulated and an indoor propane heater provided, at the prime location right at the center of the campground, steps away from the bathrooms and kitchen cottage, yet privately tucked under the redwood tree and overlooking the beautiful outdoor amphitheater.  There is a queen size bed and mattress with a water proof cover, a nightstand, and a chair. There is also a propane BBQ grill and an outdoor picnic table in the back.`,
        city: 'Redwood',
        state: 'CA',
        country: 'USA',
        guest: 3,
        pet: true,
        bed: 2,
        bathroom: 1,
        price: 180
      },
      {
        userId: 18,
        title: `The Half, A Metro-Accessible Designer Tiny House`, 
        description: `Spin some vinyl on the record player in The HALF, a charming, 415 sqft tiny house. Designed by a local architect, it has a bohemian California desert ambiance. Cactus and succulents in and around the house for a real California feel.

        A full walk-in closet is available for you to hang your clothes, and a smart TV in the bedroom for you to log in your streaming accounts. Dogs are welcome in the HALF, with an enclosed yard. ($10/day per dog added after booking)`,
        city: 'Los Angeles',
        state: 'CA',
        country: 'USA',
        guest: 4,
        pet: false,
        bed: 2,
        bathroom: 1, 
        price: 100
      },
      {
        userId: 19,
        title: `The Vista`,
        description: `The Vista is a tiny house studio, perfect for a couple with a view to take your breath away. Perched on a cliff overlooking the Catskill Creek, enjoy windows on all sides,private end tiny house with  a cozy nook, complete kitchen, full bath with tub, queen bed and dining table. Enjoy year-round comfort with both heat and a/c, a fire pit, Weber gas grill, lounge chairs and an outdoor dining table complete this wonderful little glass house. An outdoor shower (seasonal) adds to the ambiance.  A romantic spot, in true tiny house fashion.  Simply a delighful experience.`,
        city:'Catskill Creek',
        state: 'NY',
        country: 'USA',
        guest: 2,
        pet: true,
        bed: 1,
        bathroom: 1,
        price: 200
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
   return queryInterface.bulkDelete('Hostings', null, {});
  }
};
