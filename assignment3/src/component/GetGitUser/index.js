import React from 'react';
import './GetGitUser.css';
import GithubUser from './components/GithubUser/GithubUser';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//Redux

class GetGitUser extends React.Component {
  constructor(props) {
    super(props);

    // this.state= {
      // userName: '',
      // user: {},
    // }
  }

  onSearch = () => {
    return fetch(`https://api.github.com/users/${this.userNameRef.value}`)
      .then((response) => response.json())
      .then((userData) => {
        // this.setState({
        //   user: userData,
        // });
        this.props.dispatch({
          type: 'GET_GIT_USER',
          userData: userData,
        });
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  render() {

    return(
      <div className={'userDetailsWrapper'}>

        <h1 className={'userDetailsHeader'}>
          Get Github User Details
        </h1>

        <div className={'userDetailsContent'}>
          <span className={'userDetailsLabel'}>
            Enter Github User name :
          </span>

          <input
            ref={(node) => {
              this.userNameRef = node;
            }}
            className={'userDetailsInput'}
            placeholder={'Enter Github user name here'}
          />

          <button
            className={'userDetailsButton'}
            onClick={() => {
              // this.setState({
              //   userName: this.userNameRef.value
              // });

              this.props.dispatch({
                type: 'GET_USERNAME',
                userName: this.userNameRef.value,
              });
              this.onSearch();
            }}
          >
            Search
          </button>
        </div>

        {this.props.userName &&
        <GithubUser
          user={this.props.user}
        />}

      </div>
    );
  }
}

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(GetGitUser);

GetGitUser.propTypes = {
  userName: PropTypes.string,
  user: PropTypes.object,

};

GetGitUser.defaultProps = {
  userName: '',
  user: {},
};
