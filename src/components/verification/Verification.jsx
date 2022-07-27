import React, { useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Verification = () => {
	const otpRef = useRef()
	const navigate = useNavigate()
	const handleOtp = async e => {
		e.preventDefault()
		await axios
			.post('http://localhost:8000/api/phone', {
				otp: otpRef.current.value,
				phone: sessionStorage.getItem('phone'),
			})
			.then(res => {
				if (res.status === 201) {
					res.data.message === 1 ? navigate('/') : navigate('/bio')
				}
			})
			.catch(e => {
				console.log(e)
			})
	}
	return (
		<div>
			<div className='login-card'>
				<div>
					<h2>Добро пожаловать в Fooderos</h2>
					<div className='inpt-btn'>
						<p>Enter your code</p>
						<input
							type='text'
							placeholder='OTP Code'
							className='otp'
							ref={otpRef}
						/>
					</div>
					<button className='login-btn' onClick={handleOtp}>
						Continue
					</button>
				</div>
			</div>
		</div>
	)
}

export default Verification
