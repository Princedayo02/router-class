import { useState } from "react";
import Input from "./Input.jsx";
import { BiLoader } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
function Signup() {
	const navigate = useNavigate();
	const [password, setPassword] = useState("");
	const [confirmPass, setConfirmPass] = useState("");
	const [email, setEmail] = useState("");
	const [lastname, setLastname] = useState("");
	const [firstname, setFirstname] = useState("");
	const [gender, setGender] = useState("");
	const [error, setError] = useState({ value: false, messsage: "" });

	const [loading, setLoading] = useState(false);

	const validateInput = (input) => {
		if (input.password.lenght < 3) {
			setError({ value: true, messsage: "password too short" });
			return;
		}
		if (input.email == "" || input.email == " ") {
			setError({ value: true, messsage: "Please enter email" });

			return;
		}

		if (input.firstname == "" || input.firstname == " ") {
			setError({ value: true, messsage: "please enter first name" });

			return;
		}
		console.log(input.gender != "M");
		if (input.gender != "M" && input.gender != "F") {
			setError({ value: true, messsage: "Enter a valid gender" });
			return;
		}

		if (input.password.length < 8) {
			setError({ value: true, messsage: "password must be 8 char long" });
			return;
		}
		if (input.password !== input.confirmPass) {
			setError({ value: true, messsage: "Password does not match" });
		}

		return true;
	};
	const handleSubmit = (e) => {
		setLoading(true);
		e.preventDefault();
		if (validateInput({ password, email, lastname, gender, firstname, confirmPass })) {
			console.log({ password, email, lastname, gender, firstname, confirmPass });
		}

		setTimeout(() => {
			setLoading(false);
			navigate("/login");
		}, 5000);

		//
	};

	return (
		<div className="flex flex-col justify-center align-center mx-auto w-1/2 my-10">
			<div className="text-center text-2xl font-bold my-10">Register your account</div>
			<div className="border border-grey-500 rounded-lg py-6 px-5">
				{error.value && <p className="text-sm p-1 text-red-500">{error.messsage}</p>}
				<form>
					<Input
						type={"text"}
						value={firstname}
						placeholder={"Enter Firstname"}
						onchange={(e) => {
							setFirstname(e.target.value);
							setError({ value: false, messsage: "" });
						}}
					/>
					<Input
						type={"text"}
						value={lastname}
						placeholder={"Enter Lastname"}
						onchange={(e) => {
							setError({ value: false, messsage: "" });
							setLastname(e.target.value);
						}}
					/>
					<Input
						type={"text"}
						value={gender}
						placeholder={"Gender"}
						onchange={(e) => {
							setGender(e.target.value);
							setError({ value: false, messsage: "" });
						}}
					/>
					<Input
						type={"email"}
						value={email}
						placeholder={"Enter Email"}
						onchange={(e) => {
							setEmail(e.target.value);
							setError({ value: false, messsage: "" });
						}}
					/>
					<Input
						type={"password"}
						value={password}
						placeholder={"Enter password"}
						onchange={(e) => {
							setPassword(e.target.value);
							setError({ value: false, messsage: "" });
						}}
					/>
					<Input
						type={"password"}
						value={confirmPass}
						placeholder={"Confirm Password"}
						onchange={(e) => {
							setConfirmPass(e.target.value);
							setError({ value: false, messsage: "" });
						}}
					/>
					<button
						onClick={handleSubmit}
						className="border border-blue-500 hover:bg-blue-950 bg-blue-500 hover:scale-110 transition-all text-white rounded-xl flex justify-center m-3 p-3 w-40 align-middle mx-auto">
						{loading ? "processing...." : "Signup"}
					</button>
				</form>
			</div>
		</div>
	);
}

export default Signup;
