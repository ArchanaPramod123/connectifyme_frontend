// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
// import Modal from "react-modal";
// import CropImage from "./crop/CropImage";
// import { Toaster, toast } from "sonner";

// const CreatePostContainer = styled.div`
//   width: 600px;
//   padding: 20px;
//   background-color: #fff;
//   border-radius: 8px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
// `;

// const TextArea = styled.textarea`
//   margin-bottom: 10px;
//   padding: 10px;
//   border-radius: 4px;
//   border: 1px solid #ccc;
//   resize: none;
// `;

// const Input = styled.input`
//   margin-bottom: 10px;
//   padding: 10px;
//   border-radius: 4px;
//   border: 1px solid #ccc;
// `;

// const Button = styled.button`
//   padding: 10px;
//   background-color: #007bff;
//   color: #fff;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
// `;

// const modalStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//     padding: "0",
//   },
//   overlay: {
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//   },
// };

// const CreatePostPage = ({ isOpen, onRequestClose, fetchPosts }) => {
//   const [body, setBody] = useState("");
//   const [image, setImage] = useState(null);
//   const [croppedImage, setCroppedImage] = useState(null);
//   const [error, setError] = useState(null);
//   const [isCropping, setIsCropping] = useState(false);
//   const navigate = useNavigate();
//   const baseURL = import.meta.env.VITE_BASE_URL;
//   useEffect(() => {
//     if (!isOpen) {
//       setBody("");
//       setImage(null);
//       setCroppedImage(null);
//       setError(null);
//       setIsCropping(false);
//     }
//   }, [isOpen]);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImage(reader.result);
//         setIsCropping(true);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("body", body);
//     if (croppedImage) {
//       const file = await blobToFile(croppedImage, "croppedImage.jpg");
//       formData.append("img", file);
//     }

//     try {
//       await axios.post(baseURL + "/post/create-post/", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${localStorage.getItem("access")}`,
//         },
//       });
//       fetchPosts();
//       toast.success("Post created successfully");
//       navigate("/user/home");
//       onRequestClose();
//     } catch (error) {
//       setError("Error creating post");
//       toast.error("Failed to create post");
//     }
//   };

//   const handleCropComplete = (croppedUrl) => {
//     setCroppedImage(croppedUrl);
//     setIsCropping(false);
//   };

//   const blobToFile = async (blobUrl, fileName) => {
//     const response = await fetch(blobUrl);
//     const blob = await response.blob();
//     return new File([blob], fileName, { type: blob.type });
//   };

//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onRequestClose}
//       style={modalStyles}
//       ariaHideApp={false}
//     >
//       {isCropping ? (
//         <CropImage
//           imgUrl={image}
//           aspectInit={1}
//           setCroppedImg={handleCropComplete}
//         />
//       ) : (
//         <CreatePostContainer>
//           <Form onSubmit={handleSubmit} encType="multipart/form-data">
//             <TextArea
//               placeholder="What's on your mind?"
//               value={body}
//               onChange={(e) => setBody(e.target.value)}
//               rows="4"
//             />
//             <div className="w-[300px] h-[300px]">
//               <img className="w-full" src={croppedImage} alt="" />
//             </div>
//             <Input type="file" onChange={handleImageChange} />
//             {error && <p>{error}</p>}
//             <Button
//               className="hover:bg-red-500 transition ease-in"
//               type="submit"
//             >
//               Create Post
//             </Button>
//           </Form>
//         </CreatePostContainer>
//       )}
//     </Modal>
//   );
// };

// export default CreatePostPage;











// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Modal from "react-modal";
// import CropImage from "./crop/CropImage";
// import { Toaster, toast } from "sonner";

// const modalStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//     padding: "0",
//   },
//   overlay: {
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//   },
// };

// const CreatePostPage = ({ isOpen, onRequestClose, fetchPosts }) => {
//   const [body, setBody] = useState("");
//   const [image, setImage] = useState(null);
//   const [croppedImage, setCroppedImage] = useState(null);
//   const [error, setError] = useState(null);
//   const [isCropping, setIsCropping] = useState(false);
//   const navigate = useNavigate();
//   const baseURL = import.meta.env.VITE_BASE_URL;

//   useEffect(() => {
//     if (!isOpen) {
//       setBody("");
//       setImage(null);
//       setCroppedImage(null);
//       setError(null);
//       setIsCropping(false);
//     }
//   }, [isOpen]);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImage(reader.result);
//         setIsCropping(true);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("body", body);
//     if (croppedImage) {
//       const file = await blobToFile(croppedImage, "croppedImage.jpg");
//       formData.append("img", file);
//     }

//     try {
//       await axios.post(baseURL + "/post/create-post/", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${localStorage.getItem("access")}`,
//         },
//       });
//       fetchPosts();
//       toast.success("Post created successfully");
//       navigate("/user/home");
//       onRequestClose();
//     } catch (error) {
//       setError("Error creating post");
//       toast.error("Failed to create post");
//     }
//   };

//   const handleCropComplete = (croppedUrl) => {
//     setCroppedImage(croppedUrl);
//     setIsCropping(false);
//   };

//   const blobToFile = async (blobUrl, fileName) => {
//     const response = await fetch(blobUrl);
//     const blob = await response.blob();
//     return new File([blob], fileName, { type: blob.type });
//   };

//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onRequestClose}
//       style={modalStyles}
//       ariaHideApp={false}
//     >
//       {isCropping ? (
//         <CropImage
//           imgUrl={image}
//           aspectInit={1}
//           setCroppedImg={handleCropComplete}
//         />
//       ) : (
//         <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
//           <form
//             onSubmit={handleSubmit}
//             encType="multipart/form-data"
//             className="flex flex-col"
//           >
//             <textarea
//               className="mb-4 p-2 border border-gray-300 rounded resize-none"
//               placeholder="What's on your mind?"
//               value={body}
//               onChange={(e) => setBody(e.target.value)}
//               rows="4"
//             />
//             <div className="w-[300px] h-[300px] mb-4">
//               <img className="w-full" src={croppedImage} alt="" />
//             </div>
//             <input
//               type="file"
//               onChange={handleImageChange}
//               className="mb-4 p-2 border border-gray-300 rounded"
//             />
//             {error && <p className="text-red-500">{error}</p>}
//             <button
//               className="p-3 bg-blue-500 text-white rounded hover:bg-red-500 transition ease-in"
//               type="submit"
//             >
//               Create Post
//             </button>
//           </form>
//         </div>
//       )}
//     </Modal>
//   );
// };

// export default CreatePostPage;










import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import CropImage from "./crop/CropImage";
import { Toaster, toast } from "sonner";

const CreatePostPage = ({ isOpen, onRequestClose, fetchPosts }) => {
  const [body, setBody] = useState("");
  const [image, setImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [error, setError] = useState(null);
  const [isCropping, setIsCropping] = useState(false);
  const navigate = useNavigate();
  const baseURL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    if (!isOpen) {
      setBody("");
      setImage(null);
      setCroppedImage(null);
      setError(null);
      setIsCropping(false);
    }
  }, [isOpen]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setIsCropping(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("body", body);
    if (croppedImage) {
      const file = await blobToFile(croppedImage, "croppedImage.jpg");
      formData.append("img", file);
    }

    try {
      await axios.post(baseURL + "/post/create-post/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
      });
      fetchPosts();
      toast.success("Post created successfully");
      navigate("/user/home");
      onRequestClose();
    } catch (error) {
      setError("Error creating post");
      toast.error("Failed to create post");
    }
  };

  const handleCropComplete = (croppedUrl) => {
    setCroppedImage(croppedUrl);
    setIsCropping(false);
  };

  const blobToFile = async (blobUrl, fileName) => {
    const response = await fetch(blobUrl);
    const blob = await response.blob();
    return new File([blob], fileName, { type: blob.type });
  };

  if (!isOpen) return null;

  return (
    <div
      className="z-50 fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      id="wrapper"
      onClick={(e) => {
        if (e.target.id === "wrapper") onRequestClose();
      }}
    >
      {isCropping ? (
        <CropImage
          imgUrl={image}
          aspectInit={1}
          setCroppedImg={handleCropComplete}
        />
      ) : (
        <div className="m-2 w-[600px] flex flex-col">
          <button
            className="text-white text-xl place-self-end"
            onClick={onRequestClose}
          >
            x
          </button>
          <div className="bg-white p-2 rounded">
            <form
              onSubmit={handleSubmit}
              encType="multipart/form-data"
              className="m-3"
            >
              <label
                htmlFor="modal"
                className="flex justify-center font-bold"
              >
                Create Post
              </label>
              <div className="mb-4">
                <textarea
                  className="w-full p-2 border border-gray-300 rounded resize-none"
                  placeholder="What's on your mind?"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  rows="4"
                />
              </div>
              {croppedImage && (
                <div className="shrink-0 flex justify-center mb-4">
                  <img
                    className="w-80 object-cover rounded-lg"
                    src={croppedImage}
                    alt="Cropped"
                  />
                </div>
              )}
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900"
                  htmlFor="file_input"
                >
                  Upload Image
                </label>
                <input
                  onChange={handleImageChange}
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                  type="file"
                  id="file_input"
                />
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <button
                type="submit"
                // className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition ease-in-out duration-150"
                className="text-gray-900 w-full p-3 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Create Post
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreatePostPage;
