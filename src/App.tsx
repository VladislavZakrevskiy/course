import { Suspense, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { LazyAboutPage } from './pages/AboutPage/AboutPage.lazy'
import { LazyMainPage } from './pages/MainPage/MainPage.lazy'
import { useTheme } from './theme/useTheme'
import { cn } from './helpers/classNames/classNames'

const App = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={cn('app', {}, [theme])}>
			<button onClick={toggleTheme}>TOGGLE</button>
			<Link to={'/'}>Main</Link>
			<Link to={'/about'}>About</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="/about" element={<LazyAboutPage />} />
					<Route path="/" element={<LazyMainPage />} />
				</Routes>
			</Suspense>
		</div>
	)
}

export default App
