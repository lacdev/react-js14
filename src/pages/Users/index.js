import React from "react";

import { Link, Outlet } from "react-router-dom";

export default function Users() {
	return (
		<>
			<div className="content">
				<h1>Users screen</h1>
				<Outlet />
			</div>
			<div className="aside">
				<nav className="side-nav">
					<Link className="link" to="">
						List users
					</Link>
					<Link className="link" to="new">
						Create user
					</Link>
				</nav>
			</div>
		</>
	);
}
