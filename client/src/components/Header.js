import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <div className="header">
           <nav className='nav'>
                <Link to="/about">About</Link>
                <Link to="/">Home</Link>
                <Link to="/saved">Saved Movies</Link>
            </nav> 
        </div>
    )
}