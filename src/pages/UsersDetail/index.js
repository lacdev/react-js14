import React, { useEffect, useState } from "react";

// RR
import { useNavigate, useParams, Outlet } from "react-router-dom";
import { getUser } from "../../services/users";

// Icons
import Test from "../../Icons/Test";

// Service
import { deleteUser } from "../../services/users";

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

	const handleDelete = async () => {
		console.error("eliminado");
		await deleteUser(params.userID);
		navigate("/users");
	};

	return (
		<div className="">
			Hola soy el detalle del usuario: {user?.firstName} {user?.lastName}
			<button onClick={() => navigate(`update`)}>
				<Test />
			</button>
			<button className="btn" onClick={handleDelete}>
				Eliminar
			</button>
			<br />
			<Outlet />
		</div>
	);
}
