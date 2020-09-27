import React, {Fragment} from 'react';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';

function Page(props){
  return(
    <Fragment>
    <h2 className="text-center prev-header"><Badge variant='dark'>Editor</Badge></h2>
    <Form>
    <Form.Control
    as="textarea"
    value={props.text}
    onChange={props.ChangeText}
    id = "editor"
    rows="15"/>
    </Form>
    </Fragment>
  );
}

export default Page;
