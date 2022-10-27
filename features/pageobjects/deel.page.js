const expectchai = require('chai').expect;
class DeelPage {
  get header() {
    return $('h1');
  }

  get roleField() {
    return $('#mui-2');
  }

  get roleOptions() {
    return $$('.MuiAutocomplete-option');
  }

  get roleoptionOpen() {
    return $('.css-nxh5h1:nth-child(1)');
  }

  get countryField() {
    return $('#mui-4');
  }

  get countryOptions() {
    return $$('.MuiAutocomplete-option');
  }

  get submitBtn() {
    return $('button[type="submit"]');
  }

  get header() {
    return $('.css-11p1b4z');
  }

  async openRoleOption() {
    await this.roleoptionOpen.click();
  }

  async searchClick() {
    await (await this.submitBtn).click();
  }
  async roleSetValue(role) {
    await this.roleField.setValue(role);
  }

  async selectionRoleOption(role) {
    await this.roleField.setValue(role);
    // await (await this.roleField).click();
    // browser.pause(2000);
    // await this.roleField.setValue(role);
    // browser.pause(2000);

    for (let i = 0; i < (await this.roleOptions.length); i++) {
      const text = await items[i].getText();
      // console.log(text);
      if ((await this.roleOptions[i].getText()) == role) {
        console.log('Im here i will click');
        await this.roleOptions[i].click();
        break;
      }
    }
  }

  async selectCountry(country) {
    await this.countryField.setValue(country);
    for (let i = 0; i < (await this.countryOptions.length); i++) {
      const text = await this.countryOptions[i].getText();
      console.log(text);

      if ((await this.countryOptions[i].getText()) == country) {
        console.log('Im here i will click');
        await this.countryOptions[i].click();
        break;
      }
    }
  }

  async validateHeader(country2) {
    await this.header.scrollIntoView();
    browser.pause(5000);
    await expect(await this.header).toHaveTextContaining(country2);
  }
}

module.exports = new DeelPage();
