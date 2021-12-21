import React, { useEffect, useState } from "react";

// RR
import { useNavigate, useParams, Outlet } from "react-router-dom";
import { getUser } from "../../services/users";

// Icons
import Test from "../../Icons/Test";

export default function UserDetail() {
	const [user, setUser] = useState({});
	const params = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		const get = async () => {
			const response = await getUser(params.userID);
			console.log(response);
			setUser(response);
		};
		get();
	}, [params.userID]);

	return (
		<div>
			Hola soy el detalle del usuario: {user?.firstName} {user?.lastName}
			<button onClick={() => navigate(`update`)}>
				<Test />
			</button>
			<br />
			<Outlet />
		</div>
	);
}
