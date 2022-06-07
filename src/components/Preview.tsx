import './css.css';
import { useEffect } from 'react';

// Remember about DOMpurify

// Type of data passed from parent component
type PreviewProps = {
  data: string;
}

const Preview: React.FunctionComponent<PreviewProps> = ({ data }) => {

  // Render preview using data from parent component
  return (
    <div id="preview-wrapper">
      <p>{ data }</p>
    </div>
  );
}

export default Preview;
