import { IconButton, Avatar } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings'
import ChatSharpIcon from '@material-ui/icons/ChatSharp'
import Form from '../shared/Form';
import Mobile from './header/Mobile';
import MessageDropdown from '../shared/MessageDropdown';
import SettingDropdown from '../shared/SettingDropdown';
import AvatarDropdown from '../shared/AvatarDropdown';

function Header() {
  let notification = 0
  if(notification.length === 0) {
    notification = null;
  }
  else if(notification.length >= 1) {
    
  }
  return (
    <header>
        <nav>
           <div className="header-left header-box">
              <img className="header-logo" src="images/logo.png" alt="logo" />
             <div className="h2-container">
               <a className="clean-admin" href="/">Clean Admin</a>
              </div>
           </div>
           <div className="header-right header-box"> 
              <Form />
              <div className="ryt-box-ctrl">
                <div className="dropdown">
                  <IconButton className="iconButton ryt-box-ctrl">
                    <ChatSharpIcon className="topIcon" />
                    <span className="notification">12{notification}</span>
                  </IconButton>
                  <MessageDropdown />
                </div>
              </div>
              <div className="ryt-box-ctrl">
                <div className="dropdown-sett">
                  <IconButton className="ryt-box-ctrl">
                    <SettingsIcon className="settings" />
                  </IconButton>
                  <SettingDropdown />
                </div>
              </div>
               <div className="ryt-box-ctrl">
                 <div className="dropdown-avatar">
                  <Avatar src="" alt="" className="topAvatar" />
                  <AvatarDropdown />
                </div>  
               </div>
            </div>
        </nav>
        <Mobile />
    </header>
  )
}

export default Header