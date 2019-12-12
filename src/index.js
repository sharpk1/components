import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" timeAgo="Today at 4:45 PM"/>
            <CommentDetail author="Alex" timeAgo="Today at 2:00 AM"/>
            <CommentDetail author="Jane" timeAgo="Yesterday at 5:00 PM"/>
        </div>
        
    );
}

ReactDOM.render(<App/>, document.querySelector('#root'));