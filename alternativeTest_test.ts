Feature('Deneme E2E Test');

Scenario('E2E Test', async ({I}) => {

    const yazi: string = 'booking';
    I.amOnPage('/');
    I.type(yazi);
    I.pressKey('Enter');
    I.click(yazi);
    //I.amOnPage('https://www.booking.com/');
    const closePopup = '//button[@aria-label="Dismiss sign-in info."]';
    I.waitForVisible(closePopup,10);
    //const seePopup = await tryTo(() => I.seeElement(closePopup));
    I.click(closePopup);
    //await tryTo(() => I.click(closePopup));
/*
    if(seePopup){
        I.click(closePopup);
    }*/

    //Open page and close the pop-up
    I.fillField('Where are you going?','Paris');
    const selectFirstOption = '#autocomplete-result-0';
    I.click(selectFirstOption);
    //Filling city/country box
    const startDate = '//td[@role="gridcell"]//span[@data-date="2024-11-22"]';
    const endDate = '//td[@role="gridcell"]//span[@data-date="2024-11-25"]';
    I.click(startDate);
    I.click(endDate);
    //Selecting date
    I.click('Search');
    //Searching for selected criterias
    //We ensure that we complete the main page and check de hotel options page is opened.

    const propertyType = ('//div[@data-testid="filters-group-label-content" and text()= "Hotels"]');
    I.click(propertyType);
    // Selecting Property Type
    const meals = '//div[@data-testid="filters-group-label-content" and text()= "Kitchen facilities"]';
    I.waitForElement(meals,5);
    I.click(meals);
    //Selecting meal facility
    const propertyRating = locate('//input[@name="class=4"]');
    I.waitForElement(propertyRating,5);
    I.click(propertyRating);
    //Selecting User review score
    const reviewScore = '//div[@data-testid="filters-group-label-content" and text()="Very Good: 8+"]';
    I.click(reviewScore);
    //Selecting distance to central
    const distanceToCentral = '//div[@data-testid="filters-group-label-content" and text()="Less than 3 km"]';
    I.click(distanceToCentral);
    //pause();
    //var bedroomCount: number;

    let odaSayisi: number = 0;
    let click: number = 2;
    let n: number = 0;

    while(n<click) {
        I.click('(//button[@type="button" and @aria-hidden="true"])[2]');
        odaSayisi++;
        n++;
    }
    I.say('Seçilen oda sayısı: ' + odaSayisi);

    /*
    const count = '//div[@data-testid="filters-group-item-stepper" and @data-filters-item="unit_config_grouped:entire_place_bedroom_count"]';
    if(await tryTo(() => I.see(count, ))){
        deneme++;
    }  */

    const siralama = ('//button[@type="button" and @data-testid="sorters-dropdown-trigger"]');
    const siralamaSecim = ('//button[@type="button" and @aria-label="Price (lowest first)"]');

    I.click(siralama);
    I.click(siralamaSecim);
    //fiyatı en düşükten en yükseğe sıralama.

    //pause();
    I.click('(//div[@data-testid="title"])[1]'); // select the first hotel we sorted on the list

    I.switchToNextTab();

    I.selectOption('//select[@data-testid="select-room-trigger"]','1');
    I.click('//button[@type="submit" and @data-tooltip-class="submit_holder_button_tooltip"]');

    I.fillField('//input[@data-testid="user-details-firstname"]','Muhammed');
    I.fillField('//input[@data-testid="user-details-lastname"]','Ali');
    I.fillField('//input[@data-testid="user-details-email"]','satera9239@lineacr.com');
    I.selectOption('//select[@data-testid="user-details-cc1"]','United States of America');
    I.fillField('//input[@data-testid="phone-number-input"]','51615615612');
    //I.fillField('//input[@name="guest_name_448958802_338103729_0_0_16777216"]', 'Muhammed Ali');
    I.click('//button[@type="submit" and @data-popover-content-id="bp-submit-popover"]');
});