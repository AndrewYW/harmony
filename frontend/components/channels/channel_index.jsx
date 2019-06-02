import React from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

import ChannelIndexItem from './channel_index_item';
import Modal from 'react-modal';
import ChannelModal from './channel_modal';


class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      channelModalOpen: false,
    };
  }

  openModal = () => {
    this.setState({ channelModalOpen: true });
  }

  closeModal = () => {
    this.setState({ channelModalOpen: false });
  }

  componentDidMount() {
    this.props.requestChannels(this.props.match.params.serverId);
  }

  componentDidUpdate(oldProps) {
    if (this.props.match.params.serverId !== oldProps.match.params.serverId) {
      this.props.requestChannels(this.props.match.params.serverId);
    }
  }
  render() {
    const channels = Object.values(this.props.channels).map(channel => {
      return(
      <NavLink activeClassName="selected-channel" key={channel.id} to={`${channel.discord_id}`}>
        <ChannelIndexItem channel={channel} />
      </NavLink>
      )
    });

    return (
      <>
        <div className="server-channels">
          <div className="channel-category">
            <p>Channels</p> 
            <div className="create-channel-section">
              <p onClick={this.openModal}>+</p>
              <div className="create-channel-blurb">Create Channel</div>
            </div>
          </div>
          <ul className="channel-ul">
            { channels } 
          </ul>
        </div>
        <Modal
          isOpen={this.state.channelModalOpen}
          onRequestClose={this.closeModal}
          overlayClassName="modal-overlay"
          className="channel-modal"
          shouldCloseOnOverlayClick={true}
          ariaHideApp={false}
          >
            <ChannelModal closeModal={this.closeModal} />
        </Modal>
      </>
    )
  }
}

export default withRouter(ChannelIndex);