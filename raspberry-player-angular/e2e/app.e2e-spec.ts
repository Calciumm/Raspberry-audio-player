import { RaspberryPlayerAngularPage } from './app.po';

describe('raspberry-player-angular App', () => {
  let page: RaspberryPlayerAngularPage;

  beforeEach(() => {
    page = new RaspberryPlayerAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
