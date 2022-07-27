import React from 'react'

const Bio = () => {
	return (
		<div>
			<div className='login-card'>
				<div>
					<h2>Добро пожаловать в Fooderos</h2>
					<div className='inpt-btn'>
						<p>Enter your Full Name</p>
						<input type='text' placeholder='Full Name' className='otp' />
					</div>
					<button className='login-btn'>Continue</button>
				</div>
			</div>
		</div>
	)
}

export default Bio
