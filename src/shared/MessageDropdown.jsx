import { Avatar } from '@material-ui/core';
import { useContext } from 'react';
import DashboardContext from '../context/DashboardContext'

function MessageDropdown() {

  const {dashboard} = useContext(DashboardContext)
  return (
    <div className="dropdown-content animate__animated animate__pulse">
        {
            dashboard.map((dashboardItem) => (
                <div className="dropdown-container animate__animated animate__headShake" key={dashboardItem.id}>
                    <div className="dropdown-container-children">
                        <div className="dropdown-avatar dropdown-box">
                            <Avatar className="dropdown-avatar" src={dashboardItem.pfileImg} alt="" style={{width:'50px', height:'50px'}} />
                        </div>
                        <div className="dropdown-text dropdown-box">
                            <h6 className="dropdown-name">{dashboardItem.pfileName}</h6>
                            <h6 className="dropdown-title">{dashboardItem.role}</h6>
                        </div>
                    </div>
                </div>
            ))
        }
     </div>
  )
}

export default MessageDropdown