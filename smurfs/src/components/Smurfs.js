import React from "react";
import { connect } from 'react-redux'

const Smurfs = () => {
    if (isFetching) {
      return <h2>Fetching Smurf</h2>
    } else {
        return (
            <div>
                <h2>Smurf</h2>
            </div>
        )
    }
  }
  
  const mapStateToProps = state => {
      return {
          smurf: state.smurf,
          isFetching: state.isFetching,
          error: state.error
      }
  }
  export default connect(
      mapStateToProps,
      {}
  )(Smurfs);