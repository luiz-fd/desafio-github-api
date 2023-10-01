import { NavLink } from 'react-router-dom'
import './styles.css'

export default function Header(){
    return(
        <header>
            <div className='header-content-container'>
                <NavLink to="/"><h1>Github API</h1></NavLink>                
            </div>
        </header>
    );
}