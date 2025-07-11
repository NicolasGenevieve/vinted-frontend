import "./User.css";

const User = ({ user }) => {
  return user ? (
    <div className="user">
      <div className="userPhoto">
        <img src={user.account.avatar.url} />
      </div>
      <div className="userName">{user.account.username}</div>
    </div>
  ) : (
    <></>
  );
};

export default User;
