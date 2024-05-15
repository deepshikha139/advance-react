import React, { useState, useEffect, useMemo, useCallback } from 'react';
import '../../App.css';
import PostDetails from './PostDetail';
import {fetchPosts, fetchPostDetails} from '../apiUtils';
import {Pagination, GET_POST_URL, appString} from '../utils'


const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [postDetails, setPostDetails] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts(GET_POST_URL).then((data) => setPosts(data))
        .catch((error) => console.error('Error:', error));
  }, []);

  const computeDetails = useMemo(() => {
    return (post) => {
      return `Computed details for post ${post.id}`;
    };
  }, []);

  const handlePostSelect = useCallback((post) => {
    setLoading(true);
    fetchPostDetails(GET_POST_URL, post.id).then((data) => 
        setPostDetails(data), setLoading(false))
        .catch((error) => console.error('Error fetching post details:', error),
        setLoading(false));
    setSelectedPost(post);
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <h1>{appString.posts}</h1>
      {posts.length && 
      <>
        <ul className="post-list">
            {currentPosts.map((post) => (
            <li key={post.id} onClick={() => handlePostSelect(post)}>
                <h3>{post.title}</h3>
                <p>{`${appString.id} ${post.id}`}</p>
                <p>{computeDetails(post)}</p>
                {selectedPost && selectedPost.id === post.id && (
                <PostDetails
                    post={postDetails}
                    loading={loading}
                />
                )}
            </li>
            ))}
        </ul>
        <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            currentPage={currentPage}
            paginate={paginate}
        />
      </>}
    </div>
  );
}

export default PostList;
