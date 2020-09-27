import React, {Component} from 'react';
import Page from './page';
import { connect } from 'react-redux';

class Previewer extends Component{
  render(){
    return(
      <Page text = {this.props.input}/>
    );
  }
}

const mapStateToProps = state =>{
  return {input: state.handleChangeReducer};
}

export default connect(mapStateToProps)(Previewer);
