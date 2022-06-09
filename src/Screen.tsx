import React from 'react'

type ScreenProps = {
    display: string;
}

const Screen:React.FunctionComponent<ScreenProps> = ({display}) => {
  return (
        <div id="screen">
          <p id="screen-display">{display}</p>
      </div>
  )
}

export default Screen