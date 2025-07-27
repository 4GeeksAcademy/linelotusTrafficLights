import React, {useState} from "react";



	
	
const Home = () => {

	const [selectedColor, setSelectedColor] = useState("green");
	
    return (
        <div className="trafficL">
            <div onClick={() => setSelectedColor("red") } 

            className={"light red mb-2" + (selectedColor === "red" ? "glow" : "")}></div>

            <div onClick={() => setSelectedColor("yellow") }
            className={"light yellow " + (selectedColor === "yellow" ? "glow" : "")}></div>

            <div onClick={() => setSelectedColor("green") }
             className={"light green  mt-2" + (selectedColor === "green" ? "glow" : "") }></div>

        </div>
    ); 

};

export default Home;