import { useEffect, useState } from 'react';
import Booklist from '../Booklist';
import { api } from '../../services/api';
function BooklistContainer() {
	const [books, setbooks] = useState([]);
	const [loading, setloading] = useState(false);
	const [error, setErrror] = useState(false);

	useEffect(() => {
		const fetchBooks = async () => {
			setloading(true);
			setloading(false);
			try {
				const response = await api.get('books');
				setbooks(response.data);
			} catch (error) {
				setErrror(true);
			} finally {
				setloading(false);
			}
		};

		fetchBooks();
	}, []);
	return <>{!loading && !error && <Booklist books={books} />}</>;
}

export default BooklistContainer;
