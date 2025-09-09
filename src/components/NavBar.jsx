import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function NavBar() {
    return (
        <div className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <h1 className='text-5xl text-white'>J</h1><h2 className='text-4xl text-white'>L</h2>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl text-gray-300">
                <a href="https://www.linkedin.com/in/jazziel-rodriguez-lopez-9b9b362ab/" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="hover:text-blue-500 transition-colors">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/JazzoLopez" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="hover:text-white transition-colors">
                    <FaGithub />
                </a>
            </div>
        </div>
    )
}
