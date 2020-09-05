import React, { Component } from 'react'
import styles from './Navbar.module.css';
import {NavLink,Link} from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <header className={styles.header}>
             <Link exact to='/' className={styles.headerh2} >Pro-Organizer</Link> 
             <div className={styles.listCtr}>
                 <NavLink exact to='/' className={styles.listItem} activeClassName={styles.active}>Home</NavLink>
                 <NavLink to='/createboard' className={styles.listItem} activeClassName={styles.active}>Create a Board</NavLink>
             </div> 
            </header>
        )
    }
}

export default Navbar;
