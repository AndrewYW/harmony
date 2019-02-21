import React from 'react';
import { connect } from 'react-redux';
import { createServer } from '../../actions/server_actions';

class CreateModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(e) {
    e.preventDefault();
    this.setState({ name: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger;
    this.props.createServer(this.state)
  }

  render() {
    const { defaultModal } = this.props;
    return (
      <form onSubmit={this.handleSubmit} className="create-form">
        <div className="create-div">
          <h5>CREATE YOUR SERVER</h5>
          <p>By creating a server, you will have access to free voice and text chat to use amongst your friends.</p>
          <div className="create-inputs">
            <label>SERVER NAME
              <input type="text" 
              onChange={this.update} 
              value={this.state.name} 
              placeholder="Enter a server name" />
            </label>
          </div>
        </div>
        <div className="create-buttons">
          <button onClick={defaultModal}>Back</button>
          <input type="submit" value="Create" />
        </div>
      </form>   
    )
  }
}

const mdtp = dispatch => ({
  createServer: server => dispatch(createServer(server)),
});

export default connect(null, mdtp)(CreateModal);