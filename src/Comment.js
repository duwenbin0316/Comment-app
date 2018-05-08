import React from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

class Comment extends React.Component {

    constructor() {
        super();
        this.state = {
            comments: []
        }
    }

    onSubmit(item) {
        const {comments} = this.state;
        this.setState({
            comments: [
                ...comments,
                item
            ]
        })
    }

    render() {
        return (
            <div className="comment">
                <CommentInput onSubmit={this.onSubmit.bind(this)}/>
                <CommentList comments={this.state.comments}/>
            </div>
        )
    }
}

export default Comment;
