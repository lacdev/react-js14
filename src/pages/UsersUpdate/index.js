import React, { useState, useEffect } from "react";

// Input
import Input from "../../components/Input";

// Services
import { getUser, updateUser } from "../../services/users";

// RR
import { useParams } from "react-router-dom";

function UsersUpdate() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [gender, setGender] = useState("");
	const [occupation, setOccupation] = useState("");
	const [birthdate, setBirthdate] = useState("");

	const params = useParams();

	useEffect(() => {
		const get = async () => {
			const { firstName, lastName, gender, occupation, birthdate } =
				await getUser(params.userID);
			// console.log(response);
			setFirstName(firstName);
			setLastName(lastName);
			setGender(gender);
			setOccupation(occupation);
			setBirthdate(birthdate);
		};
		get();
	}, [params.userID]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		const data = {
			firstName,
			lastName,
			gender,
			occupation,
			birthdate,
		};
		await updateUser(params.userID, data);
		console.log("holi");
	};

	return (
		<div className="">
			<h1>Actualizar usuario </h1>
			<form onSubmit={handleSubmit}>
				<Input
					id="firstName"
					label="First Name"
					value={firstName}
					setValue={setFirstName}
				/>
				<Input
					id="lastName"
					label="Last Name"
					value={lastName}
					setValue={setLastName}
				/>
				<Input id="gender" label="Gender" value={gender} setValue={setGender} />
				<Input
					id="occupation"
					label="Occupation"
					value={occupation}
					setValue={setOccupation}
				/>
				<Input
					id="birthdate"
					type="date"
					label="Birthdate"
					value={birthdate}
					setValue={setBirthdate}
				/>
				<button type="submit">Actualizar</button>
			</form>
		</div>
	);
}

export default UsersUpdate;
