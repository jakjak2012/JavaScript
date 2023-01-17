import React, { useState } from 'react'; // imports react library and useState hook.

const Box = () => { // creates functional component called Box
    const [boxes, setBoxes] = useState([]); // uses useState hook to create state variable called boxes and function setBoxes to update
    const [color, setColor] = useState(""); // does the same thing but for colors. initial value is empty string

    const handleChange = (event) => { 
        setColor(event.target.value); // creates function that updates the 'state' of the color using setColor function 
    } 

    const handleSubmit = (event) => { 
        event.preventDefault(); // doesn't let the page refresh
        setBoxes(boxes.concat({color}));  // adds the next box to the empty array of boxes being created from line 4.
        setColor(""); // Do the same thing but with the set of strings with colors.
    }

    return (
        <div>
            <form onSubmit={handleSubmit}> {/* calls the handleSubmit function when you hit the submit button*/}
                <label>
                    Color:
                    <input type="text" value={color} onChange={handleChange} /> {/* Runs the handleChange function where it takes in*/}
                </label> {/* the color that the user types in.*/}
                <input type="submit" value="Add Box" /> 
            </form>
            <div style={{ display: "flex", flexWrap: "wrap" }}> {/* makes sure that the boxes are horizontal next to one another.*/}
                {boxes.map((box, i) => (
                    <div key={i} style={{ background: box.color, width: "100px", height: "100px", margin: "10px" }} /> 
                ))} {/* this div above ^^ makes sure that the boxes have a color and tha the boxes are separated.*/}
            </div>
        </div>
    );
}

export default Box;
