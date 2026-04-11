import { Navigate } from "react-router-dom"

export const Protected = ({ children }) => {
    if (!localStorage.getItem("login")) {
        return <Navigate to='/' replace />
    }
    return children
}