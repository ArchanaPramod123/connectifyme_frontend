// UserListModal.jsx
import React from "react";

const UserFollowFollowing = ({ isOpen, onClose, title, users }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <button onClick={onClose} className="absolute top-2 right-2">
          X
        </button>
        <ul>
          {users.map((user) => (
            <li key={user.id} className="flex items-center mb-4">
              <img
                src={user.profile_picture}
                alt={user.username}
                className="w-10 h-10 rounded-full mr-4"
              />
              <span>{user.username}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserFollowFollowing;
