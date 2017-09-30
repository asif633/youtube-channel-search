import { YoutubeChannelSearchPage } from './app.po';

describe('youtube-channel-search App', () => {
  let page: YoutubeChannelSearchPage;

  beforeEach(() => {
    page = new YoutubeChannelSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
