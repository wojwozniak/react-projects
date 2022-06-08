import React from 'react'

type ButtonProps = {
    name: string;
    symbol: string;
}

const Button:React.FunctionComponent<ButtonProps> = ({name, symbol}) => {
  return (
      <button className={`btn ${name}`}><p className="btn-label">{ symbol }</p></button>
  )
}

export default Button;