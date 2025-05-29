import React, { useState, useEffect } from "react";
import "../styles/DetailScreen.css";

const API_SUGGESTED = "https://6808b855942707d722df6f0b.mockapi.io/api/v1/suggestedAccounts";
const API_LIKED_VIDEOS = "https://6808b855942707d722df6f0b.mockapi.io/api/v1/videoLikes";

const DetailScreen = () => {
  const user = {
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    name: "Kiran Glaucus",
    description: "I love a colorful life ❤️❤️❤️",
    following: 203,
    followers: 628,
    likes: 2634,
  };

  const [suggestedAccounts, setSuggestedAccounts] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(API_SUGGESTED)
      .then(res => res.json())
      .then(data => setSuggestedAccounts(data))
      .catch(console.error);

    fetch(API_LIKED_VIDEOS)
      .then(res => res.json())
      .then(data => setVideos(data))
      .catch(console.error);
  }, []);

  return (
    <div className="detail-screen">
      {/* Vùng 1 */}
      <div className="user-info">
        <img src={user.avatar} alt="avatar" className="avatar" />
        <h2>{user.name}</h2>
        <p className="desc">{user.description}</p>
        <div className="stats">
          <div><strong>{user.following}</strong><br/>Following</div>
          <div><strong>{user.followers}</strong><br/>Followers</div>
          <div><strong>{user.likes}</strong><br/>Likes</div>
        </div>
        <div className="buttons">
          <button className="btn-follow">Follow</button>
          <button className="btn-message">Message</button>
        </div>
      </div>

      {/* Vùng 2 */}
      <div className="suggested-accounts">
        <h3>Suggested accounts <span className="view-more">View more</span></h3>
        <div className="accounts-list">
          {suggestedAccounts.map(acc => (
            <div key={acc.id} className="account-item">
              <img src={acc.avatar} alt={acc.name} />
              <div>{acc.name}</div>
              <button className="btn-follow-small">Follow</button>
              <button className="btn-close">×</button>
            </div>
          ))}
        </div>
      </div>

 {/* Vùng 3 */}
<div className="video-like">
  <div className="tabs">
    <span>Videos</span>
    <span className="active">Liked</span>
  </div>
  <div className="video-grid">
    {videos.map(video => (
      <div key={video.id} className="video-item">
        <div className="video-thumb">
          <img src={video.videoUrl} alt={`Video by ${video.user}`} />
          <div className="overlay">
            <div className="left-info">
              <span className="play-icon">▶</span>
              <span>{(video.views || 150).toLocaleString()} views</span>
              
            </div>
            <button className="btn-like">♡</button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


    </div>
  );
};

export default DetailScreen;
