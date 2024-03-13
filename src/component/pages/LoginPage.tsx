/* eslint-disable */
//@ts-nocheck

import { useLoginMutation } from "@/src/redux/api/auth";
import { useState } from "react";

const RegistrationPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loginMutation] = useLoginMutation();

	const loginPost = async () => {
		const response = await loginMutation({
			email,
			password,
		});
		localStorage.setItem("auth_token", response.data.token);
	};
	return (
		<div>
			<input
				placeholder="email"
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				placeholder="password"
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>

			<button onClick={loginPost}>Sing Up</button>
		</div>
	);
};

export default RegistrationPage;
