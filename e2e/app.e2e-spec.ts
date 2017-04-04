import { Angular2OrderingSystemPage } from './app.po';

describe('angular2-ordering-system App', () => {
  let page: Angular2OrderingSystemPage;

  beforeEach(() => {
    page = new Angular2OrderingSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
