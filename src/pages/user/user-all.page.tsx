import { useEffect, useState } from 'react';
import type UserModel from '../../models/user.model';
import UserProfile from '../../components/user/user-profile.component';
import UserService from '../../services/user.service';

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
        console.log('First Load');
        if (users?.length == 0 || users === undefined || users === null) {
            loadUsers();
        }
    }, []);

    useEffect(() => {
        if (users) {
            console.log(users?.length);
        }
    }, [users]);

    return (
        <div className={'w-full h-full'}>
            {users ? (
                users.map((user) => {
                    return <UserProfile key={user.id?.toString()} user={user} />;
                })
            ) : (
                <p>Loading</p>
            )}
        </div>
    );
};

export default UserAllPage;
