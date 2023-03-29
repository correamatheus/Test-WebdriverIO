import HomePage from '../pages/home-page';
import allureReporter from '@wdio/allure-reporter';


describe('Home', () => {

  // before(async () => {
  //   console.log('THIS COULD BE USED FOR TEST SETUP');
  // })

  beforeEach(async () => {
    console.log('THIS RUNS BEFORE EACH TEST');

    // Open URL
    await HomePage.open();
  })

  // after(async () => {
  //   console.log('THIS COULD BE USED FOR TEST CLEANUP');
  // })

  // afterEach(async () => {
  //   console.log('THIS RUNS AFTER EACH TEST');
  // })

  it('Open URL & assert title', async () => {
    allureReporter.addSeverity("minor");

    // Assert title
    await expect(browser).toHaveTitle('Practice E-Commerce Site – Automation Bro');
  });

  it('Open About Page & Highlight', async () => {
    
    await browser.url('http://127.0.0.1:5500/index.html');
   
    
    // const origin = await $('.titulo');
    // await browser.pause(10000);
    // function highlight(origin) {
    //   origin.style.backgroundColor = 'yellow';
    // }   
    // browser.execute(highlight, origin);

    

    const element = await $('.titulo');

    const start = 0;
    const end = 2;

    await element.moveTo({start});
    await browser.buttonDown();
    await element.moveTo({end});
    await browser.buttonUp();
    await browser.pause(1000);   

    await browser.debug();
    await browser.pause(1000000);
    
  });

});