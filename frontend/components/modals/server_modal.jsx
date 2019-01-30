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
  }

  componentDidMount(){
    document.addEventListener("mousedown", this.handleOutsideClick);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleOutsideClick);
  }
  handleOutsideClick(e) {
    if(this.wrapperRef && this.wrapperRef.contains(e.target)){
      this.setState({type: "",});
      this.props.closeServerModal();
    }
  }
  setWrapperRef(node) {
    this.wrapperRef = node;
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
    debugger;
    return (
      <ReactModal
        isOpen={this.props.showServerModal}
        onRequestClose={this.props.closeServerModal}
        className="nested-react-modal"
      >
        {this.renderModal()}
      </ReactModal>
    )
  }
}

export default ServerModal;
{/* <ReactModal
  isOpen={this.props.showServerModal}
  contentLabel="Create a new Server!"
  onRequestClose={this.props.closeServerModal}
  className="create-server-modal"
>

</ReactModal> */}
