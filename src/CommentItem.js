import React from 'react';

class CommentItem extends React.Component{
    render() {
        const {comment: {user, content}} = this.props;
        return (
            <div className="CommentItem">
                <span className="item-user">{`${user}：`}</span>
                <span className="item-content">{content}</span>
            </div>
        )
    }
}

export default CommentItem;
