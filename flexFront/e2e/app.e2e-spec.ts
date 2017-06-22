import { FlexFrontPage } from './app.po';

describe('flex-front App', function() {
  let page: FlexFrontPage;

  beforeEach(() => {
    page = new FlexFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
