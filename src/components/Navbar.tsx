import {useState} from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false)

  const clicked = () =>{
    
        setIsVisible(false)
    }
    return (
      <nav className="container mx-auto px-4  flex justify-between items-center">
      <div className="flex items-center flex-shrink-0 text-white mr-6 p-4">
         {/* <Link to='/'><img className="soju_logo" src={Logo} alt="soju logo" /></Link> */}
      </div>
      <div className="block px-5">
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
                            <Link to='/stores' onClick={clicked} className='flex place-items-center  lg:inline-block lg:mt-0
                            text-black hover:text-yellow-800'>
                                Stores
                            </Link>
                        </div>
                    </Button>
                    <Button className="nav_item p-5 m-5 ">
                        <div>
                            <Link to='/items' onClick={clicked} className='flex place-items-center  lg:inline-block lg:mt-0
                            text-black hover:text-yellow-800'>
                                Items
                            </Link>
                        </div>
                    </Button>
                    <Button className="nav_item p-5 m-5 ">
                        <div>
                            <Link to='/dashboard' onClick={clicked} className='flex place-items-center  lg:inline-block lg:mt-0
                            text-black hover:text-yellow-800'>
                                Dashboard
                            </Link>
                        </div>
                    </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar