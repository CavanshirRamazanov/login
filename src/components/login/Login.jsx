import { useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Login = () => {
	const loginRef = useRef()
	const navigate = useNavigate()
	const handleLogin = async e => {
		e.preventDefault()
		await axios
			.post('http://localhost:8000/api/register', {
				phone: loginRef.current.value,
			})
			.then(res => {
				if (res.status === 201) {
					sessionStorage.setItem('phone', loginRef.current.value)
					console.log(res.data)
					navigate('/verification')
				}
			})
	}
	return (
		<div>
			<div className='login-card'>
				<div>
					<h2>Добро пожаловать в Fooderos</h2>
					<div className='inpt-btn'>
						<p>Enter your phone number</p>
						<div className='inpt'>
							<span>+994</span>
							<input type='text' ref={loginRef} placeholder='775105005' />
						</div>
					</div>
					<button onClick={handleLogin} className='login-btn'>
						Continue
					</button>
				</div>
			</div>
		</div>
	)
}

export default Login
