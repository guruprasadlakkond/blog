import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class Userheader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }
  render() {
    return <div>User header</div>;
  }
}

export default connect(null, { fetchUser })(Userheader);
