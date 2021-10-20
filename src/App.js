import { Typography } from '@material-ui/core';
import Booklist from './components/Booklist';
import BooklistContainer from './components/BookListContainer';

function App() {
	return (
		<>
			<Typography varaint='h1' component='h1' data-test='heading'>
				Devbook
			</Typography>
			<BooklistContainer />
		</>
	);
}

export default App;
