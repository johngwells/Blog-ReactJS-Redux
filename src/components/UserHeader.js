import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {
  render() {
    // move to mapStateToProps
    // const user = this.props.user.find(user => user.id === this.props.userId);

    const { user } = this.props;

    if (!user) {
      return null;
    }

    return <div className='header'>{user.name}</div>
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.user.find(user => user.id === ownProps.userId) }
}

export default connect(mapStateToProps)(UserHeader);
