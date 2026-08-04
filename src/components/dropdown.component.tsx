import type { FC, ReactNode } from 'react';

interface DropdownProps {
    title: string;
    children: ReactNode;
    classes?: string;
    visible: boolean;
    changeVisible: (visivle?: boolean) => void;
}

const Dropdown: FC<DropdownProps> = ({ title, children, visible, changeVisible, classes }) => {
    return (
        <div className={`${classes?.toString()} relative inline-flex`}>
            <span className='inline-flex divide-x divide-gray-300 overflow-hidden rounded border border-gray-300 bg-white shadow-sm dark:divide-gray-600 dark:border-mist-900 dark:bg-mist-950'>
                <button type='button' className='px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white'>
                    {title}
                </button>

                <button type='button' onMouseOver={() => changeVisible(true)} onMouseOut={() => changeVisible(false)} onClick={() => changeVisible} className=' text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white' aria-label='Menu'>
                    <i className='fa-solid fa-caret-down'></i>
                </button>
            </span>

            {visible ? (
                <div onMouseOver={() => changeVisible(true)} onMouseOut={() => changeVisible(false)} role='menu' className='absolute end-0 top-7 z-auto w-56 overflow-hidden rounded border border-gray-300 bg-white shadow-sm dark:border-gray-600 dark:bg-gray-800'>
                    {children}
                </div>
            ) : null}
        </div>
    );
};

export default Dropdown;
