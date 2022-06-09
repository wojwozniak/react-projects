import React from 'react'

type ButtonProps = {
  name: string;
  symbol: string;
  passData: Function;
}

const Button: React.FunctionComponent<ButtonProps> = ({ name, symbol, passData }) => {

  const handleClick = () => {
    passData(name);
  }

  return (
    <button onClick={ handleClick } className={`btn ${name}`}>
      <p className="btn-label">{symbol}</p>
    </button>
  )
}

export default Button;