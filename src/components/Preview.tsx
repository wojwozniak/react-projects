import './css.css';
import  Markdown  from 'marked-react';

// Remember about DOMpurify

// Type of data passed from parent component
type PreviewProps = {
  data: string;
}

const Preview: React.FunctionComponent<PreviewProps> = ({ data }) => {

  // Render preview using data from parent component
  return (
    <div id="preview-wrapper">
      <div id="preview">
        <Markdown value={ data }/>
      </div>
    </div>
  );
}

export default Preview;
