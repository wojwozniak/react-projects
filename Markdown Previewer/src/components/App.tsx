import Preview from "./Preview";
import Editor from "./Editor";
import { useState } from 'react';

// Parent component for preview and editor components
const App = () => {

    // Default state
    const [data, newData] = useState("");
    
    // Get data from child component, then update state
    const getData = (data: string) => {
        newData(data);
    }

    // Render child components, manage props
    return (
        <div id="main">
            <Editor passData={getData} />
            <Preview data={data} />
        </div>
    )
}

export default App;