// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Post from './post/PostList';
// import Navbar from './usercommon/Navbar';
// import Suggestion from './UserSuggestion';

// const HomePage = () => {
//   const [posts, setPosts] = useState([]);
//   const baseURL = import.meta.env.VITE_BASE_URL;

//   const fetchPosts = async () => {
//     try {
//       const response = await axios.get(baseURL + '/post/list-posts/', {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('access')}`,
//         },
//       });
//       setPosts(response.data);
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <div className="w-1/5">
//         <Navbar fetchPosts={fetchPosts} />
//       </div>
//       <div className="w-3/5 flex flex-col items-center">
//         {posts.map((post) => (
//           <div className="w-full max-w-lg mb-6 bg-white rounded-lg shadow-md p-6" key={post.id}>
//             <Post post={post} />
//           </div>
//         ))}
//       </div>
//       <div className="w-1/5">
//         <Suggestion />
//       </div>
//     </div>
//   );
// };

// export default HomePage;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Post from './post/PostList';
// import Navbar from './usercommon/Navbar';
// import Suggestion from './UserSuggestion';

// const HomePage = () => {
//   const [posts, setPosts] = useState([]);
//   const baseURL = import.meta.env.VITE_BASE_URL;

//   const fetchPosts = async () => {
//     try {
//       const response = await axios.get(baseURL + '/post/list-posts/', {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('access')}`,
//         },
//       });
//       setPosts(response.data);
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
//       <div className="md:w-1/5">
//         <Navbar fetchPosts={fetchPosts} />
//       </div>
//       <div className="w-full md:w-3/5 flex flex-col items-center">
//         {posts.map((post) => (
//           <div className="w-full max-w-lg mb-6 bg-white rounded-lg shadow-md p-6" key={post.id}>
//             <Post post={post} />
//           </div>
//         ))}
//       </div>
//       <div className="hidden md:block md:w-1/5">
//         <Suggestion />
//       </div>
//     </div>
//   );
// };

// export default HomePage;




import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from './post/PostList';
import Navbar from './usercommon/Navbar';
import Suggestion from './UserSuggestion';

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const baseURL = import.meta.env.VITE_BASE_URL;

  const fetchPosts = async () => {
    try {
      const response = await axios.get(baseURL + '/post/list-posts/', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access')}`,
        },
      });
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      {/* Sidebar: visible only on medium and larger screens */}
      <div className="hidden md:block md:w-1/5">
        <Navbar fetchPosts={fetchPosts} />
      </div>
      
      {/* Posts: Full width on mobile, centered on larger screens */}
      <div className="w-full md:w-3/5 flex flex-col items-center">
        {posts.map((post) => (
          <div className="w-full max-w-lg mb-6 bg-white rounded-lg shadow-md p-6" key={post.id}>
            <Post post={post} />
          </div>
        ))}
      </div>

      {/* Suggestions: only visible on larger screens */}
      <div className="hidden md:block md:w-1/5">
        <Suggestion />
      </div>
    </div>
  );
};

export default HomePage;
