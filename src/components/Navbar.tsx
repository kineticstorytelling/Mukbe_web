import {useState} from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import '../styles.css'
import { signInWithPopup, signOut } from 'firebase/auth'
import { auth, Providers } from '../config/firebase'
import Logo from '../assets/images/Jehlyologo.png'

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false)

  const clicked = () =>{
    
        setIsVisible(false)
    }
  const signInOnClick = async () => {
        const response = await signInWithPopup(auth, Providers.google);
        if (response.user){
            location.reload();
        }
    }
  const signOutOnClick = () => {
        signOut(auth)
        // This is meant to reload 
        location.reload();
    }

    return (
      <nav className="mx-auto bg-[#F4EEE0] flex justify-between items-center">
      <div className="flex items-center flex-shrink-0 text-white mr-6 p-4">
         <Link to='/'><img className="jehlyo_logo" src={Logo} alt="jehlyo logo" /></Link>
      </div>
 
        
            <div className='w-full block flex-grow items-center'>
                <div className="text-sm lg flex-grow">
                    <Button className="nav_item p-5 m-5">
                        <div>
                            <Link to='/' onClick={clicked} className='flex place-items-center  lg:inline-block lg:mt-0
                            text-black hover:text-yellow-800'>
                                Home
                            </Link>
                        </div>
                    </Button>
                    <Button className="nav_item p-5 m-5 ">
                        <div>
                            <Link to='/products' onClick={clicked} className='flex place-items-center  lg:inline-block lg:mt-0
                            text-black hover:text-yellow-800'>
                                Products
                            </Link>
                        </div>
                    </Button>
                    <Button className="nav_item p-5 m-5 ">
                        <div>
                            <Link to='/expenses' onClick={clicked} className='flex place-items-center  lg:inline-block lg:mt-0
                            text-black hover:text-yellow-800'>
                                Expenses
                            </Link>
                        </div>
                    </Button>
                    {
                        !auth.currentUser ? 

                        <Button className='nav_item p-5 m-5'>
                            <div>
                                <Link to="/" onClick={ () => {signInOnClick()}} className="flex place-items-center mt-4 lg:inline-block lg:mt-0
                                text-black hover:text-yellow-800">
                                    Log in
                                </Link>
                            </div>
                        </Button>
                        :
                        <Button className='nav_item p-5 m-5'>
                            <div>
                                <Link to="/" onClick={ () => {signOutOnClick()}} className="flex place-items-center mt-4 lg:inline-block lg:mt-0
                                text-black hover:text-yellow-800">
                                    Log Out
                                </Link>
                            </div>
                        </Button>
                    }
        </div>
      </div>
    </nav>
  )
}

export default Navbar