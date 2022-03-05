import { createContext, useState } from "react";

const DashboardContext = createContext()

export const DashboardProvider = ({ children }) => {
    const [dashboard, setDashboard] = useState(
         [
            {
                id: 1,
                pfileName: "John Mayers",
                role: "Account Update",
                pfileImg: "avatar1.jpg",
            },
            {
                id: 2,
                pfileName: "Phil James",
                role: "Security Update",
                pfileImg: "avatar2.jpg",
            },
            {
                id: 3,
                pfileName: "Beck Simpson",
                role: "Vocation Rentals",
                pfileImg: "avatar3.jpg",
            },
            {
                id: 3,
                pfileName: "Alice Priskon",
                role: "Payment Confirmation",
                pfileImg: "avatar4.jpg",
            },
        ]
    )

    // setDashboard(dashboard.map((dashboardItem) => dashboardItem === id ? {... dashboardItem}  ))

    return <DashboardContext.Provider value={{dashboard,}} >
        {children}
    </DashboardContext.Provider>
}
export default DashboardContext