import "./User.css";

const User = ({ user }) => {
  return user ? (
    <div className="user">
      <div className="userPhoto">
        {user.account.avatar && <img src={user.account.avatar.url} />}
      </div>
      <div className="userName">{user.account.username}</div>
    </div>
  ) : (
    <></>
  );
};

export default User;
