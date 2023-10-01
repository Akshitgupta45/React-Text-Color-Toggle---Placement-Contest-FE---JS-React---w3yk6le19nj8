import React, { useEffect, useState } from "react";
import "../styles/App.css";

const App = () => {
	//code here
	const [classn, setClass] = useState("redColor");
	function changeColor() {
		if (classn == "redColor") {
			setClass("blueColor");
		} else {
			setClass("redColor");
		}
	}
	return (
		<div id="main">
			<p className={classn}>Newton School</p>
			<button id="button" onClick={changeColor}>
				Change Style
			</button>
		</div>
	);
};

export default App;
