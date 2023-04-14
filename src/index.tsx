import React from "react";
import ReactDOM from "react-dom";

import { App } from "./App";

const widgetDivs = document.querySelectorAll('.stats-widget');



widgetDivs.forEach(container => {
	ReactDOM.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
		container
	);
})



// ReactDOM.render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>,
// 	document.getElementById("root")
// );
