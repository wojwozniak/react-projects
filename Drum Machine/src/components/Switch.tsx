import './App.css'
import { useState } from 'react';

type SwitchProps = {
    switcher: Function;
}

// Component switching music sets
const Switch: React.FunctionComponent<SwitchProps> = ({switcher}) => {

    // Label for button
    const [set, newSet] = useState("Heater kit");

    // Change handler
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.checked) {
            newSet("Smooth Piano Kit");
            switcher("Smooth Piano Kit");
        } else {
            newSet("Heater Kit");
            switcher("Heater Kit");
        }
    }

    // Rendering button
    return (
        <div id="switch-container">
            <p>{ set }</p>
            <label className="switch">
                <input type="checkbox" onChange={handleChange} />
                <span className="slider" />
            </label>
        </div>
    )
}

export default Switch;