import Link from 'next/link';
import React from 'react';

const Navbar = () => {

    const navBarItems = [
        
    ]

    return (
    <div className='grid  bg-slate-300 pt-3 pb-3 pl-3 pr-3'>
    <p>Next.js Practice</p>
    <Link href="/users">Users</Link>
    </div>
    )

}

export default Navbar;