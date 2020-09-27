import React, {Component} from 'react';
import Page from './page';
import { connect } from 'react-redux';
import reduxHandleChange from '../../redux/actions/reduxHandleChange';

class Editor extends Component{
  constructor(props){
    super(props);
    this.onChangeText = this.onChangeText.bind(this);
  }
  onChangeText(event){
    this.props.ChangeText(event.target.value);
  }
  render(){
    return(
      <Page
      text={this.props.input}
      ChangeText = {this.onChangeText}
      />
    );
  }
}


const mapStateToProps = state =>{
  return {input: state.handleChangeReducer};
}

const mapDispatchToProps = dispatch => {
  return {
    ChangeText: text => dispatch(reduxHandleChange(text))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
