import React from 'react';

class CommentItem extends React.Component{

    constructor() {
        super()
        this.state = {
            timeString: ''
        }
    }

    componentWillMount() {
        this._updateTimeString()
        this._timer = setInterval(this._updateTimeString.bind(this),5000)
    }

    _updateTimeString() {
        const {comment: {timeString}} = this.props
        const duration = (Date.now() - new Date(timeString)) / 1000

        this.setState({
            timeString: duration > 60
                ? `${Math.round(duration / 60)} 分钟前`
                : `${Math.round(Math.max(duration, 1))} 秒前`
        })
    }

    handleDelete() {
        const {index, onDeleteCommet} = this.props;
        
        onDeleteCommet(index)
        clearInterval(this._timer)
    }
 
    render() {
        const {comment: {user, content}} = this.props;
        return (
            <div className="CommentItem">
                <span className="item-user">{`${user}：`}</span>
                <span className="item-content">{content}</span>
                <span className="item-timeString">{this.state.timeString}&nbsp;|&nbsp;
                    <small className="delete" onClick={this.handleDelete.bind(this)}>删除</small>
                </span>
            </div>
        )
    }
}

export default CommentItem;
