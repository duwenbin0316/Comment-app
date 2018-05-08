import React from 'react';

class CommentInput extends React.Component {

  constructor() {
    super();
    this.state = {
      user: "",
      content: ""
    }
  }

  userChangeHandler(e) {
    const val = e.target.value.trim();
    this.setState({user: val})
  }

  contentChangeHandler(e) {
    const val = e.target.value.trim();
    this.setState({content: val})
  }

  submitHandle() {
    const {onSubmit} = this.props;
    const {user, content} = this.state;

    if(user.length === 0 || content.length === 0){
      return
    }

    onSubmit(this.state);

    this.setState({
      user: "",
      content: ""
    })
  }

  render() {
    return (
      <div className="CommentInput">
        <div className="comment-field">
          <label htmlFor="">用户名：</label>
          <div className="comment-input-user">
            <input type="text" value={this.state.user} onChange={this.userChangeHandler.bind(this)}/>
          </div>
        </div>
        <div className="comment-field">
          <label htmlFor="">评论内容：</label>
          <div className="comment-input-content">
            <textarea cols="30" rows="10" value={this.state.content} onChange={this.contentChangeHandler.bind(this)}></textarea>
          </div>
        </div>
        <div className="comment-button">
          <button onClick={this.submitHandle.bind(this)}>
            发布
          </button>
        </div>
      </div>
    )
  }
}

export default CommentInput;
