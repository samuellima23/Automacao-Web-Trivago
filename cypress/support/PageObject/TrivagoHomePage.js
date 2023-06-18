class TrivagoPage {
    visit() {
        cy.visit('https://www.trivago.com.br/', { failOnStatusCode: false }); 
    }
  
    searchCity(city) {
      cy.get('[id="input-auto-complete"]').type(city);
      cy.get('[data-testid="search-button"]').click();
    }
  
    sortByRating() {
      cy.get('#ordenar-por').select('Avaliação e Sugestões');
    }

    getFirstHotelName() {
        return cy.get('.hotel').first().find('.nome-hotel').invoke('text');
      }
    
      getFirstHotelRating() {
        return cy.get('.hotel').first().find('.avaliacao').invoke('text');
      }
    
      getFirstHotelPrice() {
        return cy.get('.hotel').first().find('.preco').invoke('text');
      }
  }
  
  export default TrivagoPage;