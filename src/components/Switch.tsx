import './App.css'
import { useState } from 'react';

type SwitchProps = {
    switcher: Function;
}

const Switch: React.FunctionComponent<SwitchProps> = ({switcher}) => {

    const [set, newSet] = useState("Heater kit");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.checked) {
            newSet("Smooth Piano Kit");
            switcher("Smooth Piano Kit");
        } else {
            newSet("Heater Kit");
            switcher("Heater Kit");
        }
    }

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