import React, {Fragment} from 'react';
import './index.css';
import Badge from 'react-bootstrap/Badge';

let marked = require("marked");
marked.setOptions({
  breaks:true
});

const Page = (props) => {
  return(
    <Fragment>
    <h2 className="text-center prev-header"><Badge variant='dark'>Previewer</Badge></h2>
    <div
    dangerouslySetInnerHTML={{__html: marked(props.text)}}
    id = "preview"
    className = "preview"
    ></div>
    </Fragment>
  );
}

export default Page;
