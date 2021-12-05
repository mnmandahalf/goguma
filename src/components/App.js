import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Home } from './Home';
import { SignUp } from './SignUp';
import { SignIn } from './SignIn';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="sign_up" element={<SignUp />} />
			<Route path="sign_in" element={<SignIn />} />
		</Routes>
	)
}

export default App;
