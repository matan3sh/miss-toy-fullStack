import React from 'react';
import ChatBox from './ChatBox';
import { ChatBtn } from './ChatBtn';

class Chat extends React.Component {
  state = { isOpen: false };

  onToggle = () => {
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
  };

  render() {
    return (
      <div>
        {this.state.isOpen && <ChatBox onToggle={this.onToggle} />}
        <ChatBtn onToggle={this.onToggle} />
      </div>
    );
  }
}

export default Chat;
