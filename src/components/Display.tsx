import './App.css'

type DisplayProps = {
    text: string;
}

const Display: React.FunctionComponent<DisplayProps> = ({ text }) => {
    
    return (
        <p id="display">{ text }</p>
    )
}

export default Display;