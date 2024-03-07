import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profCard}>
      <div className={css.profInfo}>
        <img className={css.profImg} width={250} src={image} alt={name} />
        <p className={css.profName}>{name}</p>
        <p className={css.profNickname}>@{tag}</p>
        <p className={css.profLocation}>{location}</p>
      </div>
      <ul className={css.decrBlock}>
        <li className={css.descrItem}>
          <span className={css.descrTitle}>Followers </span>
          <span className={css.descrQuantity}>{stats.followers}</span>
        </li>
        <li className={css.descrItem}>
          <span className={css.descrTitle}>Views </span>
          <span className={css.descrQuantity}>{stats.views}</span>
        </li>
        <li className={css.descrItem}>
          <span className={css.descrTitle}>Likes </span>
          <span className={css.descrQuantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;