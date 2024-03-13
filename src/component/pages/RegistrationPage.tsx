import { useRegistrationMutation } from "@/src/redux/api/auth";
import { useState } from "react";

const RegistrationPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [userName, setUserName] = useState("");
	const [registrationMutation] = useRegistrationMutation();

	const registrationPost = async () => {
		await registrationMutation({
			email,
			password,
			userName,
		});

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
			<input
				placeholder="userName"
				type="userName"
				value={userName}
				onChange={(e) => setUserName(e.target.value)}
			/>
			<button onClick={registrationPost}>Sing Up</button>
		</div>
	);
};

export default RegistrationPage;
