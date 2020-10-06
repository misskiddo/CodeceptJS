const { I } = inject();

module.exports = {

  root: '#flight0',

  // Locators
  originCityLocator : '#departureOriginDropDown-input',
  originDropdownLocator : '#departureOriginDropDown-list', 
  destinationCityLocator : '#departureDestinationDropDown-input',
  destinationDropdownLocator : '#departureDestinationDropDown-list',
 // activeOriginCity : '.liItem-departureOriginDropDown.active',
 activerOriginCityDropdown : '//*[@id="departureOriginDropDown"]/child::ul[1]', 
 activerDestinationCityDropdown : '//*[@id="departureDestinationDropDown"]/child::ul[1]', 
  activeDestinationCity : '.liItem-departureDestinationDropDown.active',
   


  // insert your locators and methods here

  async selectOriginCity(origin){
    I.click(this.originCityLocator); 
    I.clearField(this.originCityLocator);
    I.fillField(this.originCityLocator, origin);
    I.waitForText(origin, 5, this.activerOriginCityDropdown);
    I.pressKey('Enter');
    
  },

  async selectDestinationCity(destination){
    I.clearField(this.destinationCityLocator);
    I.fillField(this.destinationCityLocator, destination);
    I.waitForText(destination, 5, this.activerDestinationCityDropdown);
    I.pressKey('Enter');
  },

  selectFromDate(from){
    I.fillField('#tsDatePickerFirstCalendar-input', from);
    I.pressKey('Enter');
  
  },

  selectToDate(to){
    I.fillField('#tsDatePickerSecondCalendar-input',to);
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
