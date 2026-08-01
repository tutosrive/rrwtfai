import { Route, Routes } from 'react-router-dom';
import './App.css';
import DefaultLayout from './layouts/default.layout';
import UserPage from './pages/user/user.page';
import HomePage from './pages/home.page';

function App() {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path='/' element={<HomePage />} />
                <Route path='/users' element={<UserPage />} />
            </Route>
        </Routes>
    );
}

export default App;
