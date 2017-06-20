import { JediAcademyPage } from './app.po';

describe('jedi-academy App', () => {
  let page: JediAcademyPage;

  beforeEach(() => {
    page = new JediAcademyPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to jad!!'))
      .then(done, done.fail);
  });
});
