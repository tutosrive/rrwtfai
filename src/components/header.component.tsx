import type { FC } from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
    classes?: string;
}

const HeaderComponent: FC<HeaderProps> = ({ classes }) => {
    return (
        <div id='header-c' className={`${classes?.toString()} w-full bg-mist-950 row-span-1 flex items-center justify-center`}>
            <nav>
                <Link to={'/'} className='me-2'>
                    Home
                </Link>
                <Link to={'/users'} className=''>
                    Users
                </Link>
            </nav>
        </div>
    );
};
export default HeaderComponent;
