import React, { useContext, useState } from "react";
import "./SideBar.css";
import { assets } from "../../assets/assets";
import { Context } from "../Context/Context";

const SideBar = () => {
  const [isExtended, setIsExtended] = useState(false);
  const { onSent, previousPrompt, setRecentPrompt, newChat } =
    useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };
  return (
    <div className="sidebar">
      <div className="top">
        <img
          className="menu"
          src={assets.menu_icon}
          alt=""
          onClick={() => setIsExtended((isex) => !isex)}
        />

        <div onClick={() => newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {isExtended && <p>New Chat </p>}
        </div>

        {isExtended && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {previousPrompt.map((item, index) => {
              return (
                <div
                  onClick={() => loadPrompt(item)}
                  className="recent-entry"
                  key={index}
                >
                  <img src={assets.message_icon} alt="" />
                  <p>{item.slice(0, 18)} ....</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="buttom">
        <div className="buttom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {isExtended && <p>Help</p>}
        </div>
        <div className="buttom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {isExtended && <p>History</p>}
        </div>
        <div className="buttom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {isExtended && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
