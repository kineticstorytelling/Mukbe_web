import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithPopup } from 'firebase/auth'
import { auth, Providers } from '../config/firebase'

interface Props{
    children: React.ReactNode;
}

const AuthChecker = ({children}:Props) => {
    const navigate = useNavigate();
    // This will check if user is logged in, if so return children
    // which are passed as props - whichever component is protected or not
    // otherwise it sends to login route
    useEffect(() =>{
        if(!auth.currentUser){
            navigate("../")
            signInWithPopup(auth, Providers.google)
        }
    },[])
    return (
        <>{children}</>        
    )
}

export default AuthChecker