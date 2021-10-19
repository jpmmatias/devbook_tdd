describe('Devbook application', () => {
	it('Visits the devbook', () => {
		cy.visit('http://localhost:3000/');
		cy.get('h1[data-test="heading"]').contains('Devbook');
	});
	it('Shows a book list', () => {
		cy.visit('http://localhost:3000/');
		cy.get('div[data-test="book-list"]').should('exist');
		cy.get('div.book-item').should((books) => {
			expect(books).to.have.length(2);
			const titles = [...books].map(
				(book) => book.querySelector('h2').innerHTML
			);
			expect(titles).to.deep.equal(['Refactoring', 'Domain-driven Design']);
		});
	});
});
