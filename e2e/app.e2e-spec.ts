import { Ng2BootstrapPaginationPage } from './app.po';

describe('ng2-bootstrap-pagination App', () => {
  let page: Ng2BootstrapPaginationPage;

  beforeEach(() => {
    page = new Ng2BootstrapPaginationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
