import React from "react";

import { Link, Outlet } from "react-router-dom";

export default function Users() {
	return (
		<>
			<div className="content">
				<Outlet />
			</div>
			<div className="aside"></div>
		</>
	);
}
