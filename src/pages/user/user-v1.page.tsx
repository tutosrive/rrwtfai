import { useEffect, useState } from 'react';
import UserProfile from '../../components/user/user-profile.component';
import type UserModel from '../../models/user.model';
import UserService from '../../services/user.service';

export default function UserPageV1() {
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
            <div className='flex flex-wrap items-center justify-center'>
                {users ? (
                    users.map((u) => {
                        return <UserProfile key={u.id?.toString()} user={u} classes='w-5/6 lg:w-2/12 md:w-3/12 sm:w-5/12' />;
                    })
                ) : (
                    <p>Loading Page Users ...</p>
                )}
            </div>
        </div>
    );
}
