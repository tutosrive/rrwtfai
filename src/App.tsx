import { Route, Routes } from 'react-router-dom';
import './App.css';
import DefaultLayout from './layouts/default.layout';
import UserPageV1 from './pages/user/user-v1.page';
import HomePage from './pages/home.page';
import UserAllPage from './pages/user/user-all.page';
import UserPage from './pages/user/user.page';

function App() {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path='/' element={<HomePage />} />
                <Route path='/users' element={<UserAllPage />} />
                <Route path='/users-v1' element={<UserPageV1 />} />
                <Route path='/users/:id' element={<UserPage />} />
            </Route>
        </Routes>
    );
}

export default App;
