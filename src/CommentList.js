import React from 'react';
import CommentItem from './CommentItem';

class CommentList extends React.Component {

    static defaultProps = {
        comments: []
    }

    onDeleteCommet(index) {
        const {onDeleteComment} = this.props
        onDeleteComment(index)
    }

    render() {
        const {comments} = this.props;
        return (
            <div className="CommentList">
                {comments.map((t, i) => {
                    return (
                        <CommentItem comment={t} key={i} index={i} onDeleteCommet={this.onDeleteCommet.bind(this)}/>
                    )
                })}
            </div>
        )
    }
}

export default CommentList;
