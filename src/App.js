import "./App.css";

import { Outlet } from "react-router-dom";

// Components
import AppContainer from "./components/AppContainer";

function App() {
	return (
		<AppContainer>
			<Outlet />
		</AppContainer>
	);
}

export default App;
