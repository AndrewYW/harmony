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
    this.props.createServer(this.state)
      .then(this.props.closeModal())
      .fail(res => console.log(res.responseJSON));
  }

  render() {
    const { backToDefault } = this.props;
    return (
      <div>
        <h5>CREATE YOUR SERVER</h5>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.update} value={this.state.server_name} />
          <input type="submit" value="Create" />
        </form>
        <button onClick={backToDefault}>
          Back
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createServer: server => dispatch(createServer(server)),
});

export default connect(null, mapDispatchToProps)(CreateModal);