import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Home } from './Home';
import { SignUp } from './SignUp';

const App = () =>
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="sign_up" element={<SignUp />} />
	</Routes>

export default App;
