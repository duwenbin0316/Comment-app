import React from 'react';

class CommentInput extends React.Component {

  constructor() {
    super();
    this.state = {
      user: "",
      content: ""
    }
  }

  componentWillMount() {
    const username = localStorage.getItem('username')
    if(username) {
      this.setState({
        user: username
      })
    }
  }

  componentDidMount() {
    this
      .input
      .focus();
  }

  userChangeHandler(e) {
    const val = e
      .target
      .value
      .trim();
    this.setState({user: val})
  } 

  userBlurHandler(e) {
    const username = e.target.value
    localStorage.setItem('username', username)
  }

  contentChangeHandler(e) {
    const val = e
      .target
      .value;
    this.setState({content: val})
  }

  submitHandle() {
    const {onSubmit} = this.props;
    const {user, content} = this.state;

    if (user.length === 0 || content.length === 0) {
      return
    }

    onSubmit({
      ...this.state,
      timeString: new Date()
    });

    this.setState({content: ""})

    this
      .textarea
      .focus();
  }

  render() {
    return (
      <div className="CommentInput">
        <div className="comment-field">
          <label htmlFor="">用户名：</label>
          <div className="comment-input-user">
            <input
              type="text"
              value={this.state.user}
              ref={input => this.input = input}
              onChange={this
              .userChangeHandler
              .bind(this)}
              onBlur={this
              .userBlurHandler
              .bind(this)}/>
          </div>
        </div>
        <div className="comment-field">
          <label htmlFor="">评论内容：</label>
          <div className="comment-input-content">
            <textarea
              cols="30"
              rows="10"
              ref={textarea => this.textarea = textarea}
              value={this.state.content}
              onChange={this
              .contentChangeHandler
              .bind(this)}></textarea>
          </div>
        </div>
        <div className="comment-button">
          <button onClick={this
            .submitHandle
            .bind(this)}>
            发布
          </button>
        </div>
      </div>
    )
  }
}

export default CommentInput;
