/**
 * Created by ishi on 1/17/17.
 */
import { Link } from 'react-router'
import AddDayIcon from 'react-icons/lib/fa/calendar-plus-o'
import HomeIcon from 'react-icons/lib/fa/home'
import ListDayIcon from 'react-icons/lib/fa/table'

export const Menu= () =>
    <nav className="menu">
        <Link to="/" className="selected">
            <HomeIcon />
        </Link>
        <Link to="/add-day" className="selected">
            <AddDayIcon />
        </Link>
        <Link to="/list-days" className="selected">
            <ListDayIcon />
        </Link>
    </nav>
