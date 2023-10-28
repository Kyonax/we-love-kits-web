import Link from 'next/link';
import { useState, useEffect } from 'react';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { SocialIcon } from 'react-social-icons';

import './nav_bar.css';

export default function NavBarComponent() {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return( <> </> )

}
