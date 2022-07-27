import React from 'react'
import axios from 'axios'
const Verification = () => {
	const handleOtp = async e => {
		e.preventDefatult()
		await axios
			.post('http://localhost:8000/api/phone')
			.then(res => {
				if (res.status === 201) {
					console.log('success')
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
						<input type='text' placeholder='OTP Code' className='otp' />
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
