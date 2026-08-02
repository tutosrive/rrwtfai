import { useEffect, useState } from 'react';
import UserProfile from '../../components/user/user-profile.component';
import type UserModel from '../../models/user.model';
import UserService from '../../services/user.service';

export default function UserPage() {
    const [users, setUsers] = useState<UserModel[]>();
    const service: UserService = new UserService();

    const getData = async () => {
        const data = await service.getAll();
        setUsers(data);
        console.log(users);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className='flex flex-col items-center justify-center p-5'>
            <h1>User Page</h1>
            <div className='flex flex-wrap items-center justify-center'>
                {users ? (
                    users.map((u) => {
                        return <UserProfile key={u.id?.toString()} user={u} />;
                    })
                ) : (
                    <p>Loading Page Users ...</p>
                )}
            </div>
        </div>
    );
}
