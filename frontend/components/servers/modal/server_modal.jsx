import React from 'react';
import Modal from 'react-modal';

import DefaultModal from './default_modal';
import CreateModal from './create_modal';
import JoinModal from './join_modal';

class ServerModal extends React.Component {
  constructor(props) {
    super(props); 
  }

  createServer = () => {
    $("#default-modal").addClass("slide-left");
    $("#create-modal").addClass("slide-left");
  }

  joinServer = () => {
    $("#default-modal").addClass("slide-left");
    $("#join-modal").addClass("slide-left");
  }

  defaultModal = () => {
    $("#default-modal").removeClass("slide-left");
    $("#join-modal").removeClass("slide-left");
    $("#create-modal").removeClass("slide-left");
  }

  render() {
    return (
      <Modal
        isOpen={this.props.showServerModal}
        onRequestClose={this.props.closeServerModal}
        shouldCloseOnOverlayClick={true}
        className="react-modal"
        overlayClassName="react-modal-overlay"
      >
        <DefaultModal createServer={this.createServer} joinServer={this.joinServer} />
        <CreateModal toDefault={this.defaultModal} closeModal={this.props.closeServerModal} />
        <JoinModal toDefault={this.defaultModal} closeModal={this.props.closeServerModal} />
      </Modal>
    );
  }
}

export default ServerModal;