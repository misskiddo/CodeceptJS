Feature('Booking');

Before(({I}) => { 
    I.amOnPage('https://www.airtransat.com/');
   // I.waitForVisible('.acofooter');
 
  });

Scenario('Scenario 1 - Round Trip', async ({ I }) => {
    I.say('Hello');
  
   // I.waitForElement('#origin_R_0', 20);

   var originLocator = "#departureOriginDropDown-input";
   var destinationLocator = '#departureDestinationDropDown-input';

    I.click(originLocator);

    I.fillField(originLocator, 'Calgary');
    I.pressKey('Enter');

    I.click(destinationLocator);
    I.fillField(destinationLocator,'Tor');
    
    var activeCity = await I.grabValueFrom('.location-primary.active');

    while (activeCity != 'Hamilton'){

        I.pressKey('ArrowDown');
    }

    


    
});

Scenario('Scenario 2 - Verify Title', async ({ I }) => {
  
    var title = await I.grabTitle();
    var assert = require('assert');
    assert.strictEqual(title, 'Cheap flights to Canada, Europe, USA and Sun destinations | Air Transat');

});


