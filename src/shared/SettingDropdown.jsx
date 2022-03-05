import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faClone, faFileInvoice } from '@fortawesome/free-solid-svg-icons'

function SettingDropdown() {
    return (
        <div className="dropdown-content-sett animate__animated animate__pulse">
            <div className="dropdown-content-setting animate__animated animate__headShake">
                <div className="dropdown-content-setting-container">
                    <div className="dropdown-settings-box"><FontAwesomeIcon className="fontAwesomeIcon" icon={faEdit} /></div>
                    <div className="dropdown-settings-box"><span>Profile Settings</span></div>
                </div>
            </div>
            <div className="dropdown-content-setting animate__animated animate__headShake">
                <div className="dropdown-content-setting-container">
                    <div className="dropdown-settings-box"><FontAwesomeIcon className="fontAwesomeIcon" icon={faClone} /></div>
                    <div className="dropdown-settings-box"><span>Billing Info</span></div>
                </div>
            </div>
            <div className="dropdown-content-setting animate__animated animate__headShake">
                <div className="dropdown-content-setting-container">
                    <div className="dropdown-settings-box"><FontAwesomeIcon className="fontAwesomeIcon" icon={faFileInvoice} /></div>
                    <div className="dropdown-settings-box"><span>My Invoices</span></div>
                </div>
            </div>
            <div className="dropdown-content-setting animate__animated animate__headShake">
                <div className="dropdown-content-setting-container">
                    <div className="dropdown-settings-box"><FontAwesomeIcon className="fontAwesomeIcon" icon={faTrash} /></div>
                    <div className="dropdown-settings-box"><span>Cancel Account</span></div>
                </div>
            </div>
        </div>
    )
}

export default SettingDropdown