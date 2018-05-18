import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {checkForValidStore} from '../actions';

class StoreComponent extends React.Component {

  componentDidMount() {
    this.props.actions.checkForValidStore();
  }

  render() {
    return(
      <div>hello from connected component</div>
    );
  }
}

const mapStateToProps = (state,props) => {
  return { isStoreWorking: state.isStoreWorking }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({checkForValidStore}, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreComponent);
