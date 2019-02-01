import React from 'react';
import ReactModal from 'react-modal';
import JoinModalForm from './join_server_modal';
import CreateModalForm from './create_server_modal';
import DefaultModalPage from './default_modal';
class ServerModal extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      type: ""
    }
    this.defaultModal = this.defaultModal.bind(this);
    this.joinServer = this.joinServer.bind(this);
    this.createServer = this.createServer.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(e){
    e.preventDefault();
    this.setState({type: ""});
    this.props.closeServerModal();
  }

  defaultModal() {
    this.setState({type: ""})
  }
  joinServer() {
    this.setState({type: "join"})
  }
  createServer() {
    this.setState({type: "create"})
  }
  renderModal() {
    switch (this.state.type) {
      case 'join':
        return <JoinModalForm defaultModal={this.defaultModal}/>
      case 'create':
        return <CreateModalForm defaultModal={this.defaultModal}/>
      case '':
      default:
        return <DefaultModalPage createServer={this.createServer} joinServer={this.joinServer}/>
    }
  }
  render() {
    return (
      <ReactModal
        isOpen={this.props.showServerModal}
        shouldCloseOnOverlayClick={true}
        onRequestClose={this.handleClose}
        className="react-modal"
        overlayClassName="react-modal-overlay"
      >
        {this.renderModal()}
      </ReactModal>
    )
  }
}

export default ServerModal;
