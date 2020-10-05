Feature('Booking');

Before(({I}) => { 
    I.amOnPage('https://www.airtransat.com/');
   // I.waitForVisible('.acofooter');
 
  });

Scenario('Scenario 1 - Round Trip', async ({ I }) => {
  
  
   // I.waitForElement('#origin_R_0', 20);

   var originLocator = "#departureOriginDropDown-input";
   var destinationLocator = '#departureDestinationDropDown-input';

   
    I.click(originLocator); 
    I.fillField(originLocator, 'Vancouver');
    I.waitForText('Vancouver', 3, '#departureOriginDropDown-list');
    I.pressKey('Enter');


// DESTINATION

//    I.waitForVisible('#departureDestinationDropDown-list');
    I.fillField(destinationLocator,'Montre');
    I.waitForText('Montreal', 3, '#departureDestinationDropDown-list');
    I.pressKey('ArrowDown');
    I.pressKey('Enter');

    

    pause();


    
});

Scenario('Scenario 2 - Verify Title', async ({ I }) => {
  
    var title = await I.grabTitle();
    var assert = require('assert');
    assert.strictEqual(title, 'Cheap flights to Canada, Europe, USA and Sun destinations | Air Transat');

});


