import { Outlet } from 'react-router-dom';
import HeaderComponent from '../components/header.component';
import FooterComponent from '../components/footer.component';

const DefaultLayout = () => {
    return (
        <>
            <HeaderComponent />
            <main className='h-full w-full bg-mist-900 row-span-10 overflow-y-scroll scrollbar-thin scrollbar-thumb-mist-500'>
                <Outlet />
            </main>
            <FooterComponent />
        </>
    );
};
export default DefaultLayout;
