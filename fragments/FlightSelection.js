const { I } = inject();

module.exports = {

  root: '#flight0',

  // Locators
  originCityLocator : "#departureOriginDropDown-input",
  originDropdownLocator : "departureOriginDropDown-list",
  destinationCityLocator : '#departureDestinationDropDown-input',
  destinationDropdownLocator : "#departureDestinationDropDown-list",


  // insert your locators and methods here
  selectFromToCities(origin, destination){

    I.click(this.originCityLocator); 
    I.fillField(this.originCityLocator, origin);
    I.waitForText(origin, 3, originDropdownLocator);
    I.pressKey('Enter');

    pause();
    // Select Destination City

    I.fillField(this.destinationLocator, destination);
    I.waitForText(destination, 3, destinationDropdownLocator);
    I.pressKey('ArrowDown');
    I.pressKey('Enter');

  },

  selectAdults(number){
    within('#tsTravelersSelectorRtOj-adults', () => {
      for (i = 1; i < number; i++){
        I.click('.plus.TS-btn.btn-level1');
      }
     
      });
  },

  selectChildren(number){
    within('#tsTravelersSelectorRtOj-children', () => {
      for (i = 0; i < number; i++){
        I.click('.plus.TS-btn.btn-level1');
      }
     
      });
  }
}
