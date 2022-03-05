import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar } from '@material-ui/core';
import { faEnvelope, faUserCircle, faSignOut, faBell, faCoins } from '@fortawesome/free-solid-svg-icons'

function AvatarDropdown() {
  return (
      <div className="dropdown-content-avatar animate__animated animate__pulse">
       <div className="dropdown-container-avatar animate__animated animate__headShake">
            <div className="dropdown-container-children-avatar">
                <div className="dropdown-avatar-avatar dropdown-box-avatar">
                    <Avatar className="dropdown-avatar-avatar" src="" alt="" style={{width:'50px', height:'50px'}} />
                </div>
                <div className="dropdown-text-avatar dropdown-box-avatar">
                    <h6 className="dropdown-name-avatar">Emeri Chifum</h6>
                    <h6 className="dropdown-title-avatar">Adminstrator</h6>
                </div>
            </div>
        </div>
        <div className="dropdown-container-avatar animate__animated animate__headShake">
            <div className="dropdown-container-children-avatars">
                <div className="dropdown-avatar-avatars dropdown-box-avatar">
                    <div><FontAwesomeIcon className="fontAwesomeIcon" icon={faEnvelope} /></div>
                </div>
                <div className="dropdown-text-avatars dropdown-box-avatar">
                    <h6 className="dropdown-name-avatar">Incoming Mails</h6>
                </div>
            </div>
        </div>
        <div className="dropdown-container-avatar animate__animated animate__headShake">
            <div className="dropdown-container-children-avatars">
                <div className="dropdown-avatar-avatars dropdown-box-avatar">
                    <FontAwesomeIcon className="fontAwesomeIcon" icon={faUserCircle} />
                </div>
                <div className="dropdown-text-avatars dropdown-box-avatar">
                    <h6 className="dropdown-name-avatar">Profile Details</h6>
                </div>
            </div>
        </div>
        <div className="dropdown-container-avatar animate__animated animate__headShake">
            <div className="dropdown-container-children-avatars">
                <div className="dropdown-avatar-avatars dropdown-box-avatar">
                    <FontAwesomeIcon className="fontAwesomeIcon" icon={faCoins} />
                </div>
                <div className="dropdown-text-avatars dropdown-box-avatar">
                    <h6 className="dropdown-name-avatar">Billing Details</h6>
                </div>
            </div>
        </div>
        <div className="dropdown-container-avatar animate__animated animate__headShake">
            <div className="dropdown-container-children-avatars">
                <div className="dropdown-avatar-avatars dropdown-box-avatar">
                    <FontAwesomeIcon className="fontAwesomeIcon" icon={faBell} />
                </div>
                <div className="dropdown-text-avatars dropdown-box-avatar">
                    <h6 className="dropdown-name-avatar">Notifications</h6>
                </div>
            </div>
        </div>
        <div className="dropdown-container-avatar animate__animated animate__headShake">
            <div className="dropdown-container-children-avatars">
                <div className="dropdown-avatar-avatars dropdown-box-avatar">
                    <FontAwesomeIcon className="fontAwesomeIcon" icon={faSignOut} />
                </div>
                <div className="dropdown-text-avatars dropdown-box-avatar">
                    <h6 className="dropdown-name-avatar">Logout</h6>
                </div>
            </div>
        </div>
     </div>
  )
}

export default AvatarDropdown