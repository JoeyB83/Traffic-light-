import React, { useState } from "react";

//create your first component
const Home = () => {
	const [colorselect, setcolorselect ] = useState("roja");
	return (
		<div className="poste">
			<div className="semaforo">
				<div onClick={() => setcolorselect("roja")} className={"luz roja" + (colorselect === "roja" ? " brillo" : "")}></div>
			    <div onClick={() => setcolorselect("amarilla")} className={"luz amarilla" + (colorselect === "amarilla" ? " brillo" : "")}></div>
			    <div onClick={() => setcolorselect("verde")} className={"luz verde" + (colorselect === "verde" ? " brillo" : "")}></div>			
		    </div>
		</div>
	);
};

export default Home;
