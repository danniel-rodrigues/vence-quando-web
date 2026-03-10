import Avatar from "../../assets/avatar.svg";

import Styles from "./UserProfile.module.css";

const UserProfile = ({ username, usermail }) => {
  return (
    <div className={Styles.container}>
      <img className={Styles.avatar} src={Avatar} alt="avatar" />
      <div className={Styles.detailsContainer}>
        <span className={Styles.userName}>{username}</span>
        <span className={Styles.userMail}>{usermail}</span>
      </div>
    </div>
  );
};

export default UserProfile;
