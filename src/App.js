import Bio from './components/bio/Bio'
import Verification from './components/verification/Verification'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Login from './components/login/Login'
function App() {
	return (
		<Routes>
			<Route element={<Home />} path={'/'} />
			<Route element={<Verification />} path={'/verification'} />
			<Route element={<Login />} path={'/login'} />
			<Route element={<Bio />} path={'/bio'} />
		</Routes>
	)
}

export default App
