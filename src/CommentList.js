import React from 'react';
import CommentItem from './CommentItem';

class CommentList extends React.Component {

    static defaultProps = {
        comments: []
    }

    render() {
        const {comments} = this.props;
        return (
            <div className="CommentList">
                {comments.map(t => {
                    return (
                        <CommentItem comment={t}/>
                    )
                })}
            </div>
        )
    }
}

export default CommentList;
