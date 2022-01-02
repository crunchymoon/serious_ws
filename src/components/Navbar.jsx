import React from 'react'
// import SearchIcon from '@mui/icons-material/Search';
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core'

const Navbar = () => {
    return (
        <div className='container'>
            <div className="wrapper">
                <div className="wrapper__left">
                    <span className="language">ENG</span>
                    <div className="searchCont">
                        <input class="wrapper__input" type="text" />
                        <Search />
                    </div>
                </div>
                <div className="wrapper__center"><h1 className='logo'>LOGO.</h1></div>
                <div className="wrapper__right">
                    <div className="wrapper__right-menuItem">REGISTER</div>
                    <div className="wrapper__right-menuItem">LOGIN</div>
                    <div className="wrapper__right-menuItem"><Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined/>
                    </Badge></div>
                </div>
            </div>

        </div>
    )
}

export default Navbar
