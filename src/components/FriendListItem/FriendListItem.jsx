import css from './FriendListItem.module.css';
import clsx from 'clsx';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <img className={css.friendImg} width={48} src={avatar} alt={name} />
      <p className={css.friendName}>{name}</p>
      <p className={clsx(css.friendStatus, { [css.friendOnline]: isOnline })}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </>
  );
};

export default FriendListItem;