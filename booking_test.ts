Feature('Booking.com Test').config({
    //restart: false,   // Tarayıcıyı her senaryo arasında kapatmaz

});
const { I } = inject();
//const assert = require('assert');

/* Before(({I}) => {
    I.wait(3);
    const closePopup = '//button[@aria-label="Dismiss sign-in info."]';
    I.waitForClickable(closePopup);
    I.click(closePopup);
}); */

function searchAndOpenPage() {

    const yazi: string = 'booking';
    I.amOnPage('/');
    I.type(yazi);
    I.pressKey('Enter');
    I.click(yazi);
}

async function mainPage(){
    I.amOnPage('https://www.booking.com/');
    const closePopup = '//button[@aria-label="Dismiss sign-in info."]';
    I.waitForVisible(closePopup,10);
    //const seePopup = await tryTo(() => I.dontSee(closePopup));
    //console.log(seePopup);
    I.click(closePopup);
    //I.waitForClickable(closePopup,3);
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
    /*
    I.wait(2);
    I.see('properties found', 'h1'); */
    //We ensure that we complete the main page and check de hotel options page is opened.
}

async function filterSelection(){
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
}

function reservation(){
    //I.amOnPage('https://secure.booking.com/book.html?nflt=ht_id%3D204%3Bclass%3D4%3Breview_score%3D80%3Bmealplan%3D999%3Bdistance%3D3000%3Bentire_place_bedroom_count%3D2&hotel_id=4489588&aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaOQBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuAKQ39u5BsACAdICJDg5MzFmZmM0LTcwNWItNGQxYi1iZDllLWQ0NDFiMzhjYzg1M9gCBeACAQ&sid=ddb7adc1f319d75d8f3bbd7cb2437206&room1=A%2CA&error_url=%2Fhotel%2Ffr%2Fle-matissia-paris.html%3Faid%3D304142%26label%3Dgen173nr-1FCAEoggI46AdIM1gEaOQBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuAKQ39u5BsACAdICJDg5MzFmZmM0LTcwNWItNGQxYi1iZDllLWQ0NDFiMzhjYzg1M9gCBeACAQ%26sid%3Dddb7adc1f319d75d8f3bbd7cb2437206%26srpvid%3Df8b0304a49e10382%26%26&hostname=www.booking.com&stage=1&checkin=2024-11-18&interval=2&children_extrabeds=&srpvid=f8b0304a49e10382&hp_visits_num=1&rt_pos_selected=1&rt_pos_selected_within_room=1&rt_selected_block_position=1&rt_num_blocks=3&rt_num_rooms=3&rt_num_blocks_per_room=%7B%22448958801%22%3A1%2C%22448958804%22%3A1%2C%22448958802%22%3A1%7D&rt_selected_blocks_info=%7B%22448958802_338103729_0_0_0%22%3A%7B%22rt_selected_block_position_in_rt%22%3A1%2C%22rt_selected_block_position_in_room_group%22%3A0%2C%22count%22%3A1%2C%22rt_room_symmetry_category%22%3A%22one_rate%22%7D%7D&rt_relevance_metric_id=bb76a0b4-f255-4551-b020-008bf038abfc&rt_pageview_id=71f033d10b2d015a&rt_pos_final=1.1&rt_selected_total_price=448&rt_cheapest_search_price=338&rt_with_no_dimensions=1&from_source=hotel&basket_id=0887f026-9e64-47d3-adad-674b0f41aa53&nr_rooms_448958802_338103729_0_0_0=1');
    I.selectOption('//select[@data-testid="select-room-trigger"]','1');
    I.click('//button[@type="submit" and @data-tooltip-class="submit_holder_button_tooltip"]');
}

async function detailsPage(){
    //I.amOnPage('https://secure.booking.com/book.html?nflt=ht_id%3D204%3Bclass%3D4%3Breview_score%3D80%3Bmealplan%3D999%3Bdistance%3D3000%3Bentire_place_bedroom_count%3D2&hotel_id=4489588&aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaOQBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuAKQ39u5BsACAdICJDg5MzFmZmM0LTcwNWItNGQxYi1iZDllLWQ0NDFiMzhjYzg1M9gCBeACAQ&sid=ddb7adc1f319d75d8f3bbd7cb2437206&room1=A%2CA&error_url=%2Fhotel%2Ffr%2Fle-matissia-paris.html%3Faid%3D304142%26label%3Dgen173nr-1FCAEoggI46AdIM1gEaOQBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuAKQ39u5BsACAdICJDg5MzFmZmM0LTcwNWItNGQxYi1iZDllLWQ0NDFiMzhjYzg1M9gCBeACAQ%26sid%3Dddb7adc1f319d75d8f3bbd7cb2437206%26srpvid%3Df8b0304a49e10382%26%26&hostname=www.booking.com&stage=1&checkin=2024-11-18&interval=2&children_extrabeds=&srpvid=f8b0304a49e10382&hp_visits_num=1&rt_pos_selected=1&rt_pos_selected_within_room=1&rt_selected_block_position=1&rt_num_blocks=3&rt_num_rooms=3&rt_num_blocks_per_room=%7B%22448958801%22%3A1%2C%22448958804%22%3A1%2C%22448958802%22%3A1%7D&rt_selected_blocks_info=%7B%22448958802_338103729_0_0_0%22%3A%7B%22rt_selected_block_position_in_rt%22%3A1%2C%22rt_selected_block_position_in_room_group%22%3A0%2C%22count%22%3A1%2C%22rt_room_symmetry_category%22%3A%22one_rate%22%7D%7D&rt_relevance_metric_id=bb76a0b4-f255-4551-b020-008bf038abfc&rt_pageview_id=71f033d10b2d015a&rt_pos_final=1.1&rt_selected_total_price=448&rt_cheapest_search_price=338&rt_with_no_dimensions=1&from_source=hotel&basket_id=0887f026-9e64-47d3-adad-674b0f41aa53&nr_rooms_448958802_338103729_0_0_0=1');

    I.fillField('//input[@data-testid="user-details-firstname"]','Muhammed');
    I.fillField('//input[@data-testid="user-details-lastname"]','Ali');
    I.fillField('//input[@data-testid="user-details-email"]','satera9239@lineacr.com');

/*    const response = await tryTo(() => I.see('//input[@data-testid="user-details-address1"]'));
    const response2 = await tryTo(() => I.see('//legend[.id="address-details"]'));

    if(response2) {
        I.fillField('//input[@data-testid="user-details-address1"]','Central Park');
        I.fillField('//input[@data-testid="user-details-city"]','New York');
    }
    else {
    }*/

    I.selectOption('//select[@data-testid="user-details-cc1"]','United States of America');
    I.fillField('//input[@data-testid="phone-number-input"]','51615615612');
    //I.fillField('//input[@name="guest_name_448958802_338103729_0_0_16777216"]', 'Muhammed Ali');
    I.click('//button[@type="submit" and @data-popover-content-id="bp-submit-popover"]');
}

/*
Scenario('Main Page Test', async () => {
    mainPage();
});
*/
/*
Scenario('Filter Selection Test', async () => {
    //I.amOnPage('https://www.booking.com/searchresults.html?ss=Paris&ssne=Paris&ssne_untouched=Paris&efdco=1&label=gen173nr-1FCAEoggI46AdIM1gEaOQBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALzwta5BsACAdICJDI2ZDdkODg3LTIwY2MtNGRmMi05MGQ3LTRlZmQ3ZThmNDViNdgCBeACAQ&aid=304142&lang=en-us&sb=1&src_elem=sb&src=index&dest_id=-1456928&dest_type=city&checkin=2024-11-18&checkout=2024-11-20&group_adults=2&no_rooms=1&group_children=0');

  const closePopup = '//button[@aria-label="Dismiss sign-in info."]';
    I.waitForVisible(closePopup,10);
    I.click(closePopup); *//*

    filterSelection();
    I.say('Test başarıyla tamamlandı.');
});
*/
 /*
Scenario('Hotel Rezervastion Test', async () => {
    //I.amOnPage('https://www.booking.com/hotel/fr/le-matissia-paris.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaOQBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuAKQ39u5BsACAdICJDg5MzFmZmM0LTcwNWItNGQxYi1iZDllLWQ0NDFiMzhjYzg1M9gCBeACAQ&sid=b9a23bbbc338c113c87321d994dc16b5&all_sr_blocks=448958802_338103729_0_0_0&checkin=2024-11-18&checkout=2024-11-20&dest_id=-1456928&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=448958802_338103729_0_0_0&hpos=1&matching_block_id=448958802_338103729_0_0_0&nflt=ht_id%3D204%3Bclass%3D4%3Breview_score%3D80%3Bmealplan%3D999%3Bdistance%3D3000%3Bentire_place_bedroom_count%3D2&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=price&sr_pri_blocks=448958802_338103729_0_0_0__44800&srepoch=1731653533&srpvid=f8b0304a49e10382&type=total&ucfs=1&');

    I.selectOption('//select[@data-testid="select-room-trigger"]','1');
    pause();
    I.click('//button[@type="submit" and @data-tooltip-class="submit_holder_button_tooltip"]'); *//*

    reservation();
    });
*/
/*
Scenario('Filling Details Test', async () => {
    I.amOnPage('https://secure.booking.com/book.html?nflt=ht_id%3D204%3Bclass%3D4%3Breview_score%3D80%3Bmealplan%3D999%3Bdistance%3D3000%3Bentire_place_bedroom_count%3D2&hotel_id=4489588&aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaOQBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuAKQ39u5BsACAdICJDg5MzFmZmM0LTcwNWItNGQxYi1iZDllLWQ0NDFiMzhjYzg1M9gCBeACAQ&sid=ddb7adc1f319d75d8f3bbd7cb2437206&room1=A%2CA&error_url=%2Fhotel%2Ffr%2Fle-matissia-paris.html%3Faid%3D304142%26label%3Dgen173nr-1FCAEoggI46AdIM1gEaOQBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuAKQ39u5BsACAdICJDg5MzFmZmM0LTcwNWItNGQxYi1iZDllLWQ0NDFiMzhjYzg1M9gCBeACAQ%26sid%3Dddb7adc1f319d75d8f3bbd7cb2437206%26srpvid%3Df8b0304a49e10382%26%26&hostname=www.booking.com&stage=1&checkin=2024-11-18&interval=2&children_extrabeds=&srpvid=f8b0304a49e10382&hp_visits_num=1&rt_pos_selected=1&rt_pos_selected_within_room=1&rt_selected_block_position=1&rt_num_blocks=3&rt_num_rooms=3&rt_num_blocks_per_room=%7B%22448958801%22%3A1%2C%22448958804%22%3A1%2C%22448958802%22%3A1%7D&rt_selected_blocks_info=%7B%22448958802_338103729_0_0_0%22%3A%7B%22rt_selected_block_position_in_rt%22%3A1%2C%22rt_selected_block_position_in_room_group%22%3A0%2C%22count%22%3A1%2C%22rt_room_symmetry_category%22%3A%22one_rate%22%7D%7D&rt_relevance_metric_id=bb76a0b4-f255-4551-b020-008bf038abfc&rt_pageview_id=71f033d10b2d015a&rt_pos_final=1.1&rt_selected_total_price=448&rt_cheapest_search_price=338&rt_with_no_dimensions=1&from_source=hotel&basket_id=0887f026-9e64-47d3-adad-674b0f41aa53&nr_rooms_448958802_338103729_0_0_0=1');
    detailsPage();
    });
 */

Scenario('E2E Test', async () => {
    //searchAndOpenPage();
    mainPage();
    filterSelection();
    reservation();
    detailsPage();
    //I.wait(20);
});
