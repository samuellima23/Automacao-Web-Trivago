import TrivagoPage from './PageObject/TrivagoHomePage';

describe('Pesquisa no Trivago', () => {
  const trivagoPage = new TrivagoPage();

  beforeEach(() => {
    trivagoPage.visit();
  });

  it('Pesquisar por Manaus e verificar os resultados', () => {
    trivagoPage.searchCity('Manaus');
    trivagoPage.sortByRating();

    trivagoPage.getFirstHotelName().then((name) => {
      cy.log(`Nome do primeiro hotel: ${name}`);
    });

    trivagoPage.getFirstHotelRating().then((rating) => {
      cy.log(`Avaliação do primeiro hotel: ${rating}`);
    });

    trivagoPage.getFirstHotelPrice().then((price) => {
      cy.log(`Preço do primeiro hotel: ${price}`);
    });
  });
});