import { Suspense, useCallback, useContext, useState } from 'react';
import '../styles/index.scss';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPageAsync } from '../pages/aboutPage/AboutPage.lazy';
import { MainPageAsync } from '../pages/mainPage/MainPage.lazy';
import { useTheme } from '../hooks/useTheme';

const App = () => {
	const { theme, toggleTheme } = useTheme();
	
	return (
		<div className={`app ${theme}`}>
			<button onClick={toggleTheme}>Toggle</button>
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
