import React from 'react';
import { connect } from 'react-redux';
import { sendMessage } from '../../store/actions/ChatActions';

class ChatBox extends React.Component {
  state = { msg: '' };

  onChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.sendMessage(this.state);
    setTimeout(() => this.props.sendMessage({ msg: 'Sure thing honey' }), 2000);
  };

  render() {
    const { chats } = this.props;
    return (
      <form className='wrapper' onSubmit={this.onSubmit}>
        <div className='chat-box'>
          <div className='chat-head'>
            <h2>Chat With Us</h2>
            <span
              style={{ float: 'right', marginTop: '5px' }}
              onClick={() => this.props.onToggle()}
            >
              <i className='fas fa-arrow-down fa-2x text-white pointer' />
            </span>
          </div>
          <div className='chat-body'>
            <div className='msg-insert'>
              <div className='msg-receive'> Hello, How Can I Help You? </div>
              {chats.map((chat, index) => (
                <div
                  key={index}
                  className={index % 2 === 0 ? 'msg-send' : 'msg-receive'}
                >
                  {chat.msg}{' '}
                </div>
              ))}
            </div>
            <div className='chat-text my-2'>
              <input
                type='text'
                placeholder='Write a Message'
                name='msg'
                value={this.state.msg}
                onChange={this.onChange}
              />
            </div>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    chats: state.chat.chats,
  };
};

const mapDispatchToProps = {
  sendMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatBox);
