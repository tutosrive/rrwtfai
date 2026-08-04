import { useState, type FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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

    return (
        <div id='header-c' className={`${classes?.toString()} w-full bg-mist-950 row-span-1 flex items-center`}>
            <div className='w-full flex justify-end me-2'>
                <nav>
                    <Link to={'/'} className='me-2'>
                        <i className='fa-notdog fa-solid fa-house'></i>
                    </Link>
                    <Dropdown title='Users' visible={isOpenUsersDropdown} changeVisible={toggleIsOpenDropdownUser} defaultAction={() => navigate('/users')}>
                        <div>
                            <Link to={'/users'} onClick={() => toggleIsOpenDropdownUser} className='block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900' role='menuitem'>
                                v2
                            </Link>
                            <Link to={'/users-v1'} onClick={() => toggleIsOpenDropdownUser} className='block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900' role='menuitem'>
                                Users-v1
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
