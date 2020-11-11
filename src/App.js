import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddButton from './components/layout/AddButton';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';

function App() {
	useEffect(() => {
		//initializes materialize js

		M.AutoInit();
	});

	return (
		<Provider store={store}>
			<SearchBar />
			<div className='container'>
				<TechListModal />
				<AddButton />
				<EditLogModal />
				<AddLogModal />
				<AddTechModal />
				<Logs />
			</div>
		</Provider>
	);
}

export default App;
