import React from "react";

import { Outlet } from "react-router-dom";

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
