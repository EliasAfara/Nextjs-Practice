import headerStyles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        Holy<span> WonderLand</span>
      </h1>

      <p className={headerStyles.description}>
        Holy land mother of wonder and striking globin gaze!
      </p>
    </div>
  );
};

export default Header;
