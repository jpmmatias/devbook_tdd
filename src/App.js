import { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import Booklist from './components/Booklist';
import { api } from './services/api';

function App() {
	const [books, setbooks] = useState([]);

	useEffect(() => {
		const fetchBooks = async () => {
			const response = await api.get('books');
			setbooks(response.data);
		};

		fetchBooks();
	}, []);
	return (
		<>
			<Typography varaint='h1' component='h1' data-test='heading'>
				Devbook
			</Typography>
			<Booklist books={books} />
		</>
	);
}

export default App;
