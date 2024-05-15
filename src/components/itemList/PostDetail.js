import React from 'react';
import {appString} from '../utils'

const PostDetails = ({ post, loading }) => {
  if (loading) {
    return <div className="post-details">{appString.loadingMessage}</div>;
  }
  if (!post) {
    return <div className="post-details">{appString.failedMessage}</div>;
  }
  return (
    <ul className="sub-list">
      <li>{`${appString.userId} ${post.userId}`}</li>
      <li>{`${appString.id} ${post.id}`}</li>
      <li>{`${appString.title} ${post.title}`}</li>
      <li>{`${appString.body} ${post.body}`}</li>
    </ul>
  );
};

export default PostDetails;