import { api } from '../../../src/services/api';

describe('Devbook application', () => {
	before(() => {
		return api.delete('books?_cleanup=true').catch((err) => err);
	});
	beforeEach(() => {
		const books = [
			{ name: 'Refactoring', key: '1' },
			{ name: 'Domain-driven Design', key: '2' },
		];

		return books.map((item) =>
			api.post('books', item, {
				headers: { 'Content-Type': 'application/json' },
			})
		);
	});
	afterEach(() => {
		return api.delete('books?_cleanup=true').catch((err) => err);
	});
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
