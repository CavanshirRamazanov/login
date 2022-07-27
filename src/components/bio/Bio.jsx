import React, { useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Bio = () => {
	const bioRef = useRef()
	const navigate = useNavigate()
	const handleBio = async e => {
		e.preventDefault()
		await axios
			.post('http:/localhost:8000/api/register', {
				name: bioRef.current.value.split()[0],
				surname: bioRef.current.value.split()[1],
				phone: `+994${sessionStorage.getItem('phone')}`,
			})
			.then(res => {
				if (res.status === 201) {
					navigate('/')
				}
			})
	}

	return (
		<div>
			<div className='login-card'>
				<div>
					<h2>Добро пожаловать в Fooderos</h2>
					<div className='inpt-btn'>
						<p>Enter your Full Name</p>
						<input
							type='text'
							placeholder='Full Name'
							className='otp'
							ref={bioRef}
						/>
					</div>
					<button className='login-btn' onClick={handleBio}>
						Continue
					</button>
				</div>
			</div>
		</div>
	)
}

export default Bio
