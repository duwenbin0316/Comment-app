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

    componentWillMount() {
        this._loadComments()
    }

    _loadComments() {
        let comments = localStorage.getItem('comments')

        if(comments) {
            comments = JSON.parse(comments)
            this.setState({comments})
        }
    }

    _saveComments(comments) {
        localStorage.setItem('comments', JSON.stringify(comments))
    }

    onSubmit(item) {
        let {comments} = this.state;

        comments = [
            ...comments,
            item
        ]

        this.setState({comments})
        this._saveComments(comments)
    }

    onDeleteComment(index) {
        const {comments} = this.state;
        const newComments = comments.filter((t, i) => i !== index)
        
        this.setState({
            comments: newComments
        })
        this._saveComments(newComments)
    }

    render() {
        return (
            <div className="comment">
                <CommentInput onSubmit={this.onSubmit.bind(this)}/>
                <CommentList comments={this.state.comments} onDeleteComment={this.onDeleteComment.bind(this)}/>
            </div>
        )
    }
}

export default Comment;
