import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { Home } from './Home';
import { SignUp } from './SignUp';
import { SignIn } from './SignIn';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../actions';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, []);
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="sign_up" element={<SignUp />} />
			<Route path="sign_in" element={<SignIn />} />
		</Routes>
	)
}

export default App;
