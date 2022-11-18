import { Suspense } from 'react';
import './../index.scss';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPageAsync } from '../pages/aboutPage/AboutPage.lazy';
import { MainPageAsync } from '../pages/mainPage/MainPage.lazy';


const App = () => {
	return (
		<div className="app">
			<Link to="/">Main page</Link>
			<Link to="/about">About page</Link>
			<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				<Route path="/about" element={<AboutPageAsync />} />
				<Route path="/" element={<MainPageAsync />} />
			</Routes>
			</Suspense>
		</div>
	)
};

export default App;
