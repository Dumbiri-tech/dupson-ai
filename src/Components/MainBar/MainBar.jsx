import React, { useContext, useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import "./MainBar.css";
import { Context } from "../Context/Context";
const MainBar = () => {
  const {
    onSent,

    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  } = useContext(Context);

  const [name, setName] = useState("");
  const [isNameSet, setIsNameSet] = useState(false);

  useEffect(() => {
    // Check if the name is already saved in localStorage
    const savedName = localStorage.getItem("name");
    if (savedName) {
      setName(savedName);
      setIsNameSet(true);
    } else {
      // If no name is saved, prompt the user
      const userName = prompt("What is your name?");
      if (userName) {
        setName(userName);
        localStorage.setItem("name", userName); // Save the name to localStorage
      }
      setIsNameSet(true);
    }
  }, []);

  return (
    <div className="main">
      <div className="nav">
        <p>Dupson</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main-container">
        {!showResult ? (
          <>
            {" "}
            <div className="greet">
              <p>
                <span>Hello, {name ? name : "Guest"}!</span>
              </p>
              <p>How can i help you today ?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see in an upcoming trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {/* <p dangerouslySetInnerHTML={{ __html: resultData }}>
                {resultData}
              </p> */}
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}
        <div className="main-buttom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Enter a prompt here"
              value={input}
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input && (
                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
              )}
            </div>
          </div>

          <p className="buttom-info">
            Dupson may display inaccurate info,including about people,so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

// AIzaSyDYEFk2ud0wYXKHCbEwCdwGSU4t1ghqSXw

export default MainBar;
