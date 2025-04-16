import logo from '../assets/logo.jpeg'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

export default function NavBar() {
    return (
        <div className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                {/* <img src={logo} alt="logo" width={50} height={50} className='mx-2 w-10' /> */}
                <h1 className='text-5xl'>J</h1><h2 className='text-4xl'>L</h2>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <FaLinkedin />
                <FaGithub />
                <FaTwitter />
                <FaInstagram />

            </div>
        </div>
    )
}
