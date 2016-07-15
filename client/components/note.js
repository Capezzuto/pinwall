import React, { Component } from 'react';
import { connect} from 'react-redux';
import { Link } from 'react-router';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    if (!this.props.currentNote) {
      return <div>Loading...</div>
    }
    console.log("user:", this.props.user);
    let current = this.props.currentNote;
    //change this after merge with new routes
    let returnPath = `/${this.props.user.currentOrg}`
    return(
      <div className="container" id="note_show">
        <div className="row">
          <div className="title col-xs-12">
            <h1>{this.props.currentNote.title}</h1>
            <ul style={{display: 'inline-block', 'list-style': 'none'}}>
              <li style={{display: 'inline-block', float: 'left'}}><Link to="/">Edit</Link></li>
              <li style={{display: 'inline-block', float: 'left'}}><Link to="/">Delete</Link></li>
            </ul>
          </div>
          <div className="row">
            <div className="content col-xs-12">
              <p>{this.props.currentNote.content}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-10">
            <Link to={returnPath}>Return to Notes</Link>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {currentNote: state.currentNote, user: state.user};
}

export default connect(mapStateToProps)(Note);
