import PropTypes from 'prop-types';
import './friendList.css';

const FriendListItem = ({ avatar, name, isOnline }, index) => {
  const classNames = ['friend__status', isOnline];

  return (
    <li key={index} className="friend__item">
      <span className={classNames.join(' ')}>•</span>
      <img
        className="friend__avatar"
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className="friend__name">{name}</p>
    </li>
  );
};

export const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map((friend, index) => (
      <FriendListItem
        index={index}
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    ))}
  </ul>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

FriendList.propTypes = {
  friends: PropTypes.array,
};
