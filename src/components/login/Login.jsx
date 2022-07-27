import React from 'react'

const Login = () => {
	return (
		<div>
			<div className='login-card'>
				<div>
					<h2>Добро пожаловать в Fooderos</h2>
					<div className='inpt-btn'>
						<p>Enter your phone number</p>
						<div className='inpt'>
							<span>+994</span>
							<input type='text' placeholder='775105005' />
						</div>
					</div>
					<button className='login-btn'>Continue</button>
				</div>
			</div>
		</div>
	)
}

export default Login
