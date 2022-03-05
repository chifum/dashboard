import MenuIcon from '@material-ui/icons/Menu';
import AppsIcon from '@material-ui/icons/Apps';

const Mobile = () => {
  return (
    <nav className="mobile-menu">
        <div className="mobile-menu-left mobile-menu-box">
            <img className="mobile-menu-logo" src="images/logo.png" alt="logo" />
            <div className="mobile-menu-text">
                <a className="mobile-menu-a" href="/"><h2>Clean Admin</h2></a>
            </div>
        </div>
        <div className="mobile-menu-right mobile-menu-box">
            <div className="appsIcon">
                <AppsIcon  className="appsIcon-Icon"/>
            </div>
            <div className="menuIcon">
                <MenuIcon className="menuIcon-Icon"/>
            </div>
        </div>
    </nav>
  )
}

export default Mobile