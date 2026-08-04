import { useEffect, useState } from 'react';
import type UserModel from '../../models/user.model';
import UserProfile from '../../components/user/user-profile.component';
import UserService from '../../services/user.service';
import Loader from '../../components/loading.component';

const UserAllPage = () => {
    const service: UserService = new UserService();
    const [users, setUsers] = useState<UserModel[]>();

    const loadUsers = async () => {
        const req = await service.getAll();
        if (req.length > 0) {
            setUsers([...req]);
        }
    };

    useEffect(() => {
        if (users?.length == 0 || users === undefined || users === null) {
            loadUsers();
        }
    }, []);

    return (
        <div className={'w-full h-full flex items-center justify-center'}>
            <h1></h1>
            {users ? (
                users.map((user) => {
                    return <UserProfile key={user.id?.toString()} user={user} />;
                })
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default UserAllPage;
