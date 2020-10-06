Feature('Booking');

Before(({I}) => { 
    I.amOnPage('https://www.airtransat.com/');
 
  });

Scenario('Scenario 1 - Round Trip',  async ({ I, FlightSelection }) => {

   await FlightSelection.selectOriginCity("Vanc");
   await FlightSelection.selectDestinationCity("Montr");
    
    // Select From-To dates in calendar 

  FlightSelection.selectFromDate('11-05-2020');
  FlightSelection.selectToDate('12-06-2020');

  


    FlightSelection.selectAdults(2); 
    FlightSelection.selectChildren(5);

    

    pause();
});

/*

Scenario('Scenario 2 - Verify Title', async ({ I }) => {
  
    var title = await I.grabTitle();
    var assert = require('assert');
    assert.strictEqual(title, 'Cheap flights to Canada, Europe, USA and Sun destinations | Air Transat');

});*/


