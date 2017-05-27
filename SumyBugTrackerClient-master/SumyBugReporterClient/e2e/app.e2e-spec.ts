import { SumyBugReporterClientPage } from './app.po';

describe('sumy-bug-reporter-client App', function() {
  let page: SumyBugReporterClientPage;

  beforeEach(() => {
    page = new SumyBugReporterClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
