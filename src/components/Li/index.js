import React from "react";

function Li({ text, buttonText, callback }) {
	return (
		<div>
			{text}
			<button onClick={callback}>{buttonText}</button>
		</div>
	);
}

export default Li;
