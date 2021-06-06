import classes from '*.module.css'
import { AppBar, IconButton, Typography } from '@material-ui/core'
import React from 'react'
import {ShoppingCart} from "@material-ui/icons";

import logo from '../../assets/commerce.png'

const Navbar = () => {
    return (
        <div>
            <AppBar position="fixed" className={classes.appbar} color= "inherit">
                <Toolbar> 
                    <Typography variant ="h6" classname={classes.title} color = "inherit">
                        <img src={logo} alt = "Commerce.js" height="25px" className = {classes.image} /> 
                    </Typography>
                    <div className={classes.grow} >
                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color = "secondary">  
                            
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
                {renderMobileMenu}
        </div>

    )
        
}

export default Navbar