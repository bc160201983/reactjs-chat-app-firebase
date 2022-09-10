import React, { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

const Users = ({ data, lastMessage }) => {
  const { dispatch } = useContext(ChatContext);
  const handleSelect = (id) => {
    console.log(id.userInfo);
    dispatch({ type: "CHANGE_USER", payload: id?.userInfo });
  };
  return (
    <div>
      <div className="userChat" onClick={() => handleSelect(data)}>
        <img src={data.userInfo?.photoURL} alt="" />
        <div className="userChatInfo">
          <span>{data.userInfo?.displayName}</span>
          <p>{data.lastMessage?.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Users;
