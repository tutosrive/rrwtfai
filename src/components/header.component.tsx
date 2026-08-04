import { useEffect, useState, type FC } from 'react';
import { Link, Router, useInRouterContext, useNavigate, useRoutes } from 'react-router-dom';
import Dropdown from './dropdown.component';

interface HeaderProps {
    classes?: string;
}

const HeaderComponent: FC<HeaderProps> = ({ classes }) => {
    const [isOpenUsersDropdown, setIsOpenUsersDropdown] = useState<boolean>(false);
    const toggleIsOpenDropdownUser = (visible?: boolean) => {
        visible ? setIsOpenUsersDropdown(visible) : setIsOpenUsersDropdown(!isOpenUsersDropdown);
    };
    const navigate = useNavigate();
    const [titleHeader, setTitleHeader] = useState<string>('Home');

    useEffect(() => {
        setTitleHeader(window.location.pathname.replaceAll('/', ' > '));
    }, [window.location.pathname]);

    return (
        <div id='header-c' className={`${classes?.toString()} w-full bg-mist-950 row-span-1 flex items-center justify-center`}>
            <div className='w-full h-full flex items-center justify-center'>
                <h1>{titleHeader}</h1>
            </div>
            <div className='absolute end-px flex items-center h-full justify-end me-2'>
                <nav>
                    <Link to={'/'} className='me-2'>
                        <i className='fa-solid fa-house'></i>
                    </Link>
                    <Dropdown title={<i className='fa-solid fa-users'></i>} visible={isOpenUsersDropdown} changeVisible={toggleIsOpenDropdownUser} defaultAction={() => navigate('/users')}>
                        <div>
                            <Link to={'/users'} onClick={() => toggleIsOpenDropdownUser} className='flex items-center justify-center px-1 py-1 text-sm font-medium text-mist-50 transition-colors hover:bg-mist-200 hover:text-mist-900' role='menuitem'>
                                <i className='fa-solid fa-users'></i> v2
                            </Link>
                            <Link to={'/users-v1'} onClick={() => toggleIsOpenDropdownUser} className='flex items-center justify-center px-1 py-1 text-sm font-medium text-mist-50 transition-colors hover:bg-mist-200 hover:text-mist-900' role='menuitem'>
                                <i className='fa-solid fa-users'></i> v1
                            </Link>
                        </div>
                    </Dropdown>
                    <Link to={'/users'} className=''></Link>
                </nav>
            </div>
        </div>
    );
};
export default HeaderComponent;
