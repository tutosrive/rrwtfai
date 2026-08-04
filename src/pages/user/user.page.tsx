import { useEffect, useState, type FC } from 'react';
import type UserModel from '../../models/user.model';
import UserProfile from '../../components/user/user-profile.component';
import { useNavigate, useParams } from 'react-router-dom';
import UserService from '../../services/user.service';
import Loader from '../../components/loading.component';

const UserPage = () => {
    const [user, setUser] = useState<UserModel>();
    const navigate = useNavigate();
    const service: UserService = new UserService();
    const params = useParams();
    const id = params.id || '';

    const handleLoadUser = async () => {
        const dataUser: UserModel | null = await service.getById(id);
        if (dataUser && dataUser?.id !== undefined && dataUser?.id !== null) {
            setUser(dataUser);
        }
    };

    useEffect(() => {
        handleLoadUser();
    }, [id]);

    return (
        <div id={`userpage-${id}`} className={`w-full h-full flex items-center justify-center`}>
            <div className='flex items-center justify-center h-full'>
                <button onClick={() => navigate(-1)} className='w-30 h-full'>
                    <span className='block w-full text-3xl'>
                        <i className='fa-solid fa-arrow-left-long'></i>
                    </span>
                </button>
            </div>
            {user ? <UserProfile user={user} classes='w-4/5 lg:w-4/6 md:w-9/12 sm:w-8/12' /> : <Loader />}
        </div>
    );
};

export default UserPage;
