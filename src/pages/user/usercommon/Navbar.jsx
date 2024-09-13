// import { jwtDecode } from "jwt-decode";
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import {
//   FaHome,
//   FaSearch,
//   FaBell,
//   FaEnvelope,
//   FaUserCircle,
//   FaSignOutAlt,
//   FaPlus,
//   FaCompass,
// } from "react-icons/fa";
// import UserLogout from "../UserLogout";
// import CreatePostPage from "../post/CreatePost";
// import SearchModal from "../SearchModel";
// import { useSelector } from "react-redux";
// import getNotificationApi from "../post/getNotificationsApi";
// import Notifications from "../post/Notifications";

// const SidebarContainer = styled.div`
//   width: 250px;
//   height: 100vh;
//   position: fixed;
//   top: 0;
//   left: 0;
//   background-color: #fff;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding-top: 20px;
//   box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
// `;

// const Logo = styled(Link)`
//   color: black;
//   font-size: 33px;
//   margin-bottom: 40px;
//   font-family: "Style Script", cursive;
//   text-decoration: none;
// `;

// const NavIcons = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100%;
// `;

// const LogoutButton = styled.div`
//   display: flex;
//   align-items: center;
//   color: #181818;
//   background: 0;
//   margin: 15px 0;
//   padding: 10px 20px;
//   border-radius: 15px;
//   cursor: pointer;
//   transition: background 0.3s, color 0.3s;
//   position: absolute;
//   bottom: 20px;
//   width: 80%;

//   &:hover {
//     background-color: #f0f0f0;
//     color: #000;
//   }

//   svg {
//     margin-right: 15px;
//   }
// `;

// const NavIcon = styled.div`
//   color: #181818;
//   margin: 15px 0;
//   font-size: 20px;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
//   width: 80%;
//   padding: 10px 20px;
//   border-radius: 15px;
//   transition: background 0.3s, color 0.3s;

//   &:hover {
//     background-color: #f0f0f0;
//     color: #000;
//   }

//   a {
//     text-decoration: none;
//     color: inherit;
//     display: flex;
//     align-items: center;
//     width: 100%;
//   }

//   span {
//     margin-left: 10px;
//   }
// `;

// const SidebarFooter = styled.div`
//   margin-top: auto;
//   margin-bottom: 20px;
//   width: 80%;
// `;

// const NavBar = ({ fetchPosts }) => {
//   const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useState(false);
//   const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
//   const [showNotifications, setShowNotifications] = useState(false);
//   const [notification, setNotification] = useState([]);

//   const { user_id, name } = useSelector((state) => state.auth);
//   const WEBSOCKET_BASE_URL = import.meta.env.VITE_WEBSOCKET;

//   const openSearchModal = () => setIsSearchModalOpen(true);
//   const closeSearchModal = () => setIsSearchModalOpen(false);

//   const openCreatePostModal = () => {
//     setIsCreatePostModalOpen(true);
//   };

//   const closeCreatePostModal = () => {
//     setIsCreatePostModalOpen(false);
//   };
//   // const accessToken = localStorage.getItem("access");
//   // let decoded = jwtDecode(accessToken);
//   // console.log("user decode", decoded.name);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getNotificationApi();
//         setNotification(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     if (user_id) {
//       fetchData();
//     }
//   }, [user_id]);

//   useEffect(() => {
    
//     if (user_id) {
//       const accessToken = localStorage.getItem('access');
//       // try:
//       //     UntypedToken(accessToken)
//       // except (InvalidToken, TokenError) as e:
//       //     return None

//       const websocketProtocol =
//         window.location.protocol === "https:" ? "wss://" : "ws://";
//       // const socket = new WebSocket(`${websocketProtocol}127.0.0.1:8000/ws/notification/?token=${accessToken}`);
//       console.log("the vallllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll");
      
//       console.log(`${websocketProtocol}${WEBSOCKET_BASE_URL}/ws/notification/?token=${accessToken}`);

//       // const socket = new WebSocket(
//       //   `${websocketProtocol}${WEBSOCKET_BASE_URL}/ws/notification/?token=${accessToken}`
//       // );
      
      
//       // const socket = new WebSocket(`${websocketProtocol}${WEBSOCKET_BASE_URL}/ws/notification/?token=${accessToken}`);
//       // const wsUrl = `${websocketProtocol}${WEBSOCKET_BASE_URL}/ws/notification/?token=${accessToken}`;
//       // const socket = new WebSocket(wsUrl);
//       const socket = new WebSocket(`${websocketProtocol}${WEBSOCKET_BASE_URL}/ws/notification/?token=${accessToken}`);

//       socket.onopen = () => {
//         console.log("websocket connection established");
//       };

    

//       socket.onmessage = (event) => {
//         const newNotification = JSON.parse(event.data);
//         console.log(newNotification);
//         if (newNotification.type === "notification") {
//           setNotification((prevNotifications) => [
//             ...prevNotifications,
//             newNotification.payload,
//           ]);
//         }
//       };

//       // socket.onclose = (event) => {
//       //   console.log("Websocket connection closed", event);
//       // };
//       socket.onclose = function(event) {
//         console.log("WebSocket closed with code:", event.code, "reason:", event.reason);
//     };
    
      
//       return () => {
//         socket.close();
//       };
//     }
//   }, [user_id]);

//   const removeNotification = (notificationIdToRemove) => {
//     setNotification((prevNotifications) =>
//       prevNotifications.filter(
//         (notification) => notification.id !== notificationIdToRemove
//       )
//     );
//   };

//   return (
//     <SidebarContainer>
//       <Logo to="/user/home">Connectify</Logo>
//       <NavIcons>
//         <NavIcon>
//           <Link to="/user/home">
//             <FaHome />
//             <span>Home</span>
//           </Link>
//         </NavIcon>
//         <NavIcon onClick={openSearchModal}>
//           <FaSearch />
//           <span>Search</span>
//         </NavIcon>
//         {/* <NavIcon>
//           <Link to="/user/notifications">
//             <FaBell />
//             <span>Notifications</span>
//           </Link>
//         </NavIcon> */}

//         <NavIcon onClick={() => setShowNotifications(true)}>
//           <FaBell />
//           <span>Notification</span>
//           <span
//             className={`text-xs ml-2 text-blue-700 align-top${
//               notification?.length === 0
//                 ? ""
//                 : "border border-black align-top rounded-full"
//             }`}
//           >
//             {" "}
//             {notification?.length === 0 ? "" : notification?.length}{" "}
//           </span>
//         </NavIcon>

//         <NavIcon>
//           <Link to="/user/messages">
//             <FaEnvelope />
//             <span>Messages</span>
//           </Link>
//         </NavIcon>
//         <NavIcon>
//           <Link to="/user/explore">
//             <FaCompass />
//             <span>Explore</span>
//           </Link>
//         </NavIcon>
//         <NavIcon onClick={openCreatePostModal}>
//           <FaPlus />
//           <span>Create Post</span>
//         </NavIcon>
//         {/* <NavIcon>
//           <Link to="/user/profile">
//             <FaUserCircle />
//             <span>Profile</span>
//           </Link>
//           </NavIcon> */}

//         <NavIcon>
//           <Link to="/user/profile">
//             {/* {profile_picture ? (
//       <img
//         src={`${backendUrl}${profile_picture}`}
//         alt="Profile"
//         style={{
//           width: '30px',
//           height: '30px',
//           borderRadius: '50%',
//           marginRight: '10px',
//         }}
//       />
//     ) : ( */}
//             <FaUserCircle />
//             {/* )} */}
//             <span>Profile</span>
//           </Link>
//         </NavIcon>
//         <NavIcon>
//           <FaSignOutAlt />
//           <UserLogout />
//         </NavIcon>
//       </NavIcons>
//       {/* <SidebarFooter>
//         <NavIcon>
//           <FaSignOutAlt />
//           <span>Logout</span>
//         </NavIcon>
//       </SidebarFooter> */}
//       <CreatePostPage
//         isOpen={isCreatePostModalOpen}
//         onRequestClose={closeCreatePostModal}
//         fetchPosts={fetchPosts}
//       />
//       <SearchModal isOpen={isSearchModalOpen} onClose={closeSearchModal} />
//       <Notifications
//         isVisible={showNotifications}
//         onClose={() => setShowNotifications(false)}
//         notification={notification}
//         removeNotification={removeNotification}
//       />
//     </SidebarContainer>
//   );
// };

// export default NavBar;





















// import { jwtDecode } from "jwt-decode";
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import {FaHome,FaSearch,FaBell,FaEnvelope,FaUserCircle,FaSignOutAlt,FaPlus,FaCompass,} from "react-icons/fa";
// import UserLogout from "../UserLogout";
// import CreatePostPage from "../post/CreatePost";
// import SearchModal from "../SearchModel";
// import { useSelector } from "react-redux";
// import getNotificationApi from "../post/getNotificationsApi";
// import Notifications from "../post/Notifications";
// import { FaBars, FaTimes } from "react-icons/fa";

// const NavBar = ({ fetchPosts }) => {
//   const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useState(false);
//   const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
//   const [showNotifications, setShowNotifications] = useState(false);
//   const [notification, setNotification] = useState([]);

//   const { user_id, name } = useSelector((state) => state.auth);
//   const WEBSOCKET_BASE_URL = import.meta.env.VITE_WEBSOCKET;

//   const openSearchModal = () => setIsSearchModalOpen(true);
//   const closeSearchModal = () => setIsSearchModalOpen(false);

//   const openCreatePostModal = () => {
//     setIsCreatePostModalOpen(true);
//   };

//   const closeCreatePostModal = () => {
//     setIsCreatePostModalOpen(false);
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getNotificationApi();
//         setNotification(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     if (user_id) {
//       fetchData();
//     }
//   }, [user_id]);
  

//   useEffect(() => {
//     if (user_id) {
//       const accessToken = localStorage.getItem('access');

//       const websocketProtocol =
//         window.location.protocol === "https:" ? "wss://" : "ws://";
//       const socket = new WebSocket(
//         `${websocketProtocol}${WEBSOCKET_BASE_URL}/ws/notification/?token=${accessToken}`
//       );

//       socket.onopen = () => {
//         console.log("WebSocket connection established");
//       };

//       socket.onmessage = (event) => {
//         const newNotification = JSON.parse(event.data);
//         if (newNotification.type === "notification") {
//           setNotification((prevNotifications) => [
//             ...prevNotifications,
//             newNotification.payload,
//           ]);
//         }
//       };

//       socket.onclose = (event) => {
//         console.log("WebSocket closed with code:", event.code, "reason:", event.reason);
//       };

//       return () => {
//         socket.close();
//       };
//     }
//   }, [user_id]);

//   const removeNotification = (notificationIdToRemove) => {
//     setNotification((prevNotifications) =>
//       prevNotifications.filter(
//         (notification) => notification.id !== notificationIdToRemove
//       )
//     );
//   };

//   return (
//     <div className="w-[250px] h-screen fixed top-0 left-0 bg-white flex flex-col items-center pt-5 shadow-lg">
//       <Link
//         to="/user/home"
//         className="text-black text-[33px] mb-10 font-[Style Script] no-underline"
//       >
//         Connectify
//       </Link>
//       <div className="flex flex-col items-center w-full">
//         <div className="text-gray-800 my-4 text-[20px] cursor-pointer flex items-center justify-start w-4/5 p-2.5 rounded-lg transition duration-300 hover:bg-gray-200 hover:text-black">
//           <Link to="/user/home" className="flex items-center w-full no-underline text-inherit">
//             <FaHome />
//             <span className="ml-2">Home</span>
//           </Link>
//         </div>

//         <div
//           onClick={openSearchModal}
//           className="text-gray-800 my-4 text-[20px] cursor-pointer flex items-center justify-start w-4/5 p-2.5 rounded-lg transition duration-300 hover:bg-gray-200 hover:text-black"
//         >
//           <FaSearch />
//           <span className="ml-2">Search</span>
//         </div>

//         <div
//           onClick={() => setShowNotifications(true)}
//           className="text-gray-800 my-4 text-[20px] cursor-pointer flex items-center justify-start w-4/5 p-2.5 rounded-lg transition duration-300 hover:bg-gray-200 hover:text-black"
//         >
//           <FaBell />
//           <span className="ml-2">Notification</span>
//           <span
//             className={`text-xs ml-2 text-blue-700 ${
//               notification?.length === 0
//                 ? ""
//                 : "border border-black rounded-full"
//             }`}
//           >
//             {notification?.length === 0 ? "" : notification?.length}
//           </span>
//         </div>

//         <div className="text-gray-800 my-4 text-[20px] cursor-pointer flex items-center justify-start w-4/5 p-2.5 rounded-lg transition duration-300 hover:bg-gray-200 hover:text-black">
//           <Link to="/user/messages" className="flex items-center w-full no-underline text-inherit">
//             <FaEnvelope />
//             <span className="ml-2">Messages</span>
//           </Link>
//         </div>

//         <div className="text-gray-800 my-4 text-[20px] cursor-pointer flex items-center justify-start w-4/5 p-2.5 rounded-lg transition duration-300 hover:bg-gray-200 hover:text-black">
//           <Link to="/user/explore" className="flex items-center w-full no-underline text-inherit">
//             <FaCompass />
//             <span className="ml-2">Explore</span>
//           </Link>
//         </div>

//         <div
//           onClick={openCreatePostModal}
//           className="text-gray-800 my-4 text-[20px] cursor-pointer flex items-center justify-start w-4/5 p-2.5 rounded-lg transition duration-300 hover:bg-gray-200 hover:text-black"
//         >
//           <FaPlus />
//           <span className="ml-2">Create Post</span>
//         </div>

//         <div className="text-gray-800 my-4 text-[20px] cursor-pointer flex items-center justify-start w-4/5 p-2.5 rounded-lg transition duration-300 hover:bg-gray-200 hover:text-black">
//           <Link to="/user/profile" className="flex items-center w-full no-underline text-inherit">
//             <FaUserCircle />
//             <span className="ml-2">Profile</span>
//           </Link>
//         </div>

//         <div className="text-gray-800 my-4 text-[20px] cursor-pointer flex items-center justify-start w-4/5 p-2.5 rounded-lg transition duration-300 hover:bg-gray-200 hover:text-black">
//           <FaSignOutAlt />
//           <UserLogout />
//         </div>
//       </div>

//       <CreatePostPage
//         isOpen={isCreatePostModalOpen}
//         onRequestClose={closeCreatePostModal}
//         fetchPosts={fetchPosts}
//       />
//       <SearchModal isOpen={isSearchModalOpen} onClose={closeSearchModal} />
//       <Notifications
//         isVisible={showNotifications}
//         onClose={() => setShowNotifications(false)}
//         notification={notification}
//         removeNotification={removeNotification}
//       />
//     </div>
//   );
// };

// export default NavBar;














// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaHome,
//   FaSearch,
//   FaBell,
//   FaEnvelope,
//   FaUserCircle,
//   FaSignOutAlt,
//   FaPlus,
//   FaCompass,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";
// import UserLogout from "../UserLogout";
// import CreatePostPage from "../post/CreatePost";
// import SearchModal from "../SearchModel";
// import { useSelector } from "react-redux";
// import getNotificationApi from "../post/getNotificationsApi";
// import Notifications from "../post/Notifications";

// const NavBar = ({ fetchPosts }) => {
//   const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useState(false);
//   const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
//   const [showNotifications, setShowNotifications] = useState(false);
//   const [notification, setNotification] = useState([]);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const { user_id } = useSelector((state) => state.auth);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getNotificationApi();
//         setNotification(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     if (user_id) {
//       fetchData();
//     }
//   }, [user_id]);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <>
//       {/* Mobile Navbar */}
//       <div className="flex justify-between items-center bg-white p-4 shadow-md md:hidden">
//         <Link to="/user/home" className="text-2xl font-bold">Connectify</Link>
//         <button onClick={toggleMobileMenu}>
//           {isMobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
//         </button>
//       </div>

//       {/* Sidebar for large screens */}
//       <div className={`absolute inset-0 bg-black bg-opacity-50 z-20 ${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`} onClick={toggleMobileMenu}></div>
//       <div className={`absolute left-0 top-0 w-[250px] h-screen bg-white shadow-lg z-30 transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
//         <Link to="/user/home" className="text-black text-[33px] mb-10 font-[Style Script] no-underline block text-center py-5">
//           Connectify
//         </Link>
//         <div className="flex flex-col items-center w-full space-y-4">
//           <Link to="/user/home" className="flex items-center w-4/5 text-gray-800 p-2 rounded-lg hover:bg-gray-200 transition">
//             <FaHome className="mr-2" /> Home
//           </Link>
//           <div onClick={() => setIsSearchModalOpen(true)} className="flex items-center w-4/5 text-gray-800 p-2 rounded-lg hover:bg-gray-200 transition cursor-pointer">
//             <FaSearch className="mr-2" /> Search
//           </div>
//           <div onClick={() => setShowNotifications(true)} className="flex items-center w-4/5 text-gray-800 p-2 rounded-lg hover:bg-gray-200 transition cursor-pointer">
//             <FaBell className="mr-2" /> Notification {notification.length > 0 && <span className="text-sm ml-2 bg-blue-500 text-white px-2 rounded-full">{notification.length}</span>}
//           </div>
//           <Link to="/user/messages" className="flex items-center w-4/5 text-gray-800 p-2 rounded-lg hover:bg-gray-200 transition">
//             <FaEnvelope className="mr-2" /> Messages
//           </Link>
//           <Link to="/user/explore" className="flex items-center w-4/5 text-gray-800 p-2 rounded-lg hover:bg-gray-200 transition">
//             <FaCompass className="mr-2" /> Explore
//           </Link>
//           <div onClick={() => setIsCreatePostModalOpen(true)} className="flex items-center w-4/5 text-gray-800 p-2 rounded-lg hover:bg-gray-200 transition cursor-pointer">
//             <FaPlus className="mr-2" /> Create Post
//           </div>
//           <Link to="/user/profile" className="flex items-center w-4/5 text-gray-800 p-2 rounded-lg hover:bg-gray-200 transition">
//             <FaUserCircle className="mr-2" /> Profile
//           </Link>
//           <div className="flex items-center w-4/5 text-gray-800 p-2 rounded-lg hover:bg-gray-200 transition cursor-pointer">
//             <FaSignOutAlt className="mr-2" />
//             <UserLogout />
//           </div>
//         </div>
//       </div>

//       <CreatePostPage
//         isOpen={isCreatePostModalOpen}
//         onRequestClose={() => setIsCreatePostModalOpen(false)}
//         fetchPosts={fetchPosts}
//       />
//       <SearchModal isOpen={isSearchModalOpen} onClose={() => setIsSearchModalOpen(false)} />
//       <Notifications
//         isVisible={showNotifications}
//         onClose={() => setShowNotifications(false)}
//         notification={notification}
//       />
//     </>
//   );
// };

// export default NavBar;

















import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaSearch, FaBell, FaEnvelope, FaUserCircle, FaSignOutAlt, FaPlus, FaCompass, FaBars, FaTimes } from "react-icons/fa";
import UserLogout from "../UserLogout";
import CreatePostPage from "../post/CreatePost";
import SearchModal from "../SearchModel";
import { useSelector } from "react-redux";
import getNotificationApi from "../post/getNotificationsApi";
import Notifications from "../post/Notifications";

const NavBar = ({ fetchPosts }) => {
  const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notification, setNotification] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { user_id } = useSelector((state) => state.auth);
  const location = useLocation(); // <-- to check the current route

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getNotificationApi();
        setNotification(data);
      } catch (error) {
        console.error(error);
      }
    };
    if (user_id) {
      fetchData();
    }
  }, [user_id]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Conditionally render the Navbar based on the current route
  if (location.pathname.startsWith("/user/video-call")) {
    // Hide the Navbar when on the video call page
    return null;
  }

  return (
    <>
      {/* Mobile Navbar */}
      <div className="flex justify-between items-center bg-white p-4 shadow-md md:hidden">
        <Link to="/user/home" className="text-2xl font-bold">Connectify</Link>
        <button onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
      </div>

      {/* Sidebar for large screens */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-20 ${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`} onClick={toggleMobileMenu}></div>
      <div className={`fixed left-0 top-0 w-[250px] h-screen bg-white shadow-lg z-30 transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <Link to="/user/home" className="text-black text-[33px] mb-10 font-[Style Script] no-underline block text-center py-5">
          Connectify
        </Link>
        <div className="flex flex-col items-center w-full space-y-4">
          <Link to="/user/home" className="flex items-center w-4/5 text-gray-800 p-2 rounded-lg hover:bg-gray-200 transition">
            <FaHome className="mr-2" /> Home
          </Link>
          <div onClick={() => setIsSearchModalOpen(true)} className="flex items-center w-4/5 text-gray-800 p-2 rounded-lg hover:bg-gray-200 transition cursor-pointer">
            <FaSearch className="mr-2" /> Search
          </div>
          <div onClick={() => setShowNotifications(true)} className="flex items-center w-4/5 text-gray-800 p-2 rounded-lg hover:bg-gray-200 transition cursor-pointer">
            <FaBell className="mr-2" /> Notification {notification.length > 0 && <span className="text-sm ml-2 bg-blue-500 text-white px-2 rounded-full">{notification.length}</span>}
          </div>
          <Link to="/user/messages" className="flex items-center w-4/5 text-gray-800 p-2 rounded-lg hover:bg-gray-200 transition">
            <FaEnvelope className="mr-2" /> Messages
          </Link>
          <Link to="/user/explore" className="flex items-center w-4/5 text-gray-800 p-2 rounded-lg hover:bg-gray-200 transition">
            <FaCompass className="mr-2" /> Explore
          </Link>
          <div onClick={() => setIsCreatePostModalOpen(true)} className="flex items-center w-4/5 text-gray-800 p-2 rounded-lg hover:bg-gray-200 transition cursor-pointer">
            <FaPlus className="mr-2" /> Create Post
          </div>
          <Link to="/user/profile" className="flex items-center w-4/5 text-gray-800 p-2 rounded-lg hover:bg-gray-200 transition">
            <FaUserCircle className="mr-2" /> Profile
          </Link>
          <div className="flex items-center w-4/5 text-gray-800 p-2 rounded-lg hover:bg-gray-200 transition cursor-pointer">
            <FaSignOutAlt className="mr-2" />
            <UserLogout />
          </div>
        </div>
      </div>

      <CreatePostPage
        isOpen={isCreatePostModalOpen}
        onRequestClose={() => setIsCreatePostModalOpen(false)}
        fetchPosts={fetchPosts}
      />
      <SearchModal isOpen={isSearchModalOpen} onClose={() => setIsSearchModalOpen(false)} />
      <Notifications
        isVisible={showNotifications}
        onClose={() => setShowNotifications(false)}
        notification={notification}
      />
    </>
  );
};

export default NavBar;
