export const fetchPosts = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

export const fetchPostDetails = async (url, postId) => {
  try {
    const response = await fetch(`${url}/${postId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch post details');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching post details:', error);
    throw error;
  }
};
