import { Outlet } from 'react-router-dom';
import HeaderComponent from '../components/header.component';
import SideBarComponent from '../components/side-bar.component';
import FooterComponent from '../components/footer.component';

const DefaultLayout = () => {
    return (
        <div id='main-ctn' className='grid grid-cols-2'>
            <SideBarComponent />
            <div>
                <HeaderComponent />
                <main className=''>
                    <Outlet />
                </main>
                <FooterComponent />
            </div>
        </div>
    );
};
export default DefaultLayout;
