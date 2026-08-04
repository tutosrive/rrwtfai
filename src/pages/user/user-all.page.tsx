import { useEffect, useState } from 'react';
import type UserModel from '../../models/user.model';
import UserService from '../../services/user.service';
import Loader from '../../components/loading.component';
import { useNavigate } from 'react-router-dom';

const UserAllPage = () => {
    const service: UserService = new UserService();
    const [users, setUsers] = useState<UserModel[]>();
    const navigate = useNavigate();

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
        <div className={`w-full ${users ? '' : 'h-full'} flex items-center justify-center`}>
            <h1></h1>
            {users ? (
                <div className='w-full p-5'>
                    <table className='w-7xl md:w-full lg:w-full h-full  text-center border border-mist-600'>
                        <thead className='border border-mist-600 bg-mist-950 h-8'>
                            <tr>
                                <th className='border border-mist-600'>Actions</th>
                                <th className='border border-mist-600'>ID</th>
                                <th className='border border-mist-600'>First Name</th>
                                <th className='border border-mist-600'>Last Name</th>
                                <th className='border border-mist-600'>Age</th>
                                <th className='border border-mist-600'>E-Mail</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => {
                                return (
                                    <tr key={`row-user-${user.id}`} className='border border-mist-600'>
                                        <td className='w-36 border border-mist-600'>
                                            <div className='flex items-center justify-center w-full'>
                                                <span className='text-green-500 me-3'>
                                                    <i className='fa-solid fa-eye' onClick={() => navigate(`/users/${user.id}`)}></i>
                                                </span>
                                                <span className='text-amber-300'>
                                                    <i className='fa-solid fa-user-pen'></i>
                                                </span>
                                                <span className='text-red-600 ms-3'>
                                                    <i className='fa-solid fa-user-slash'></i>
                                                </span>
                                            </div>
                                        </td>
                                        <td className='border border-mist-600'>{user.id}</td>
                                        <td className='border border-mist-600'>{user.firstName}</td>
                                        <td className='border border-mist-600'>{user.lastName}</td>
                                        <td className='border border-mist-600'>{user.age?.toString()}</td>
                                        <td className='border border-mist-600'>{user.email}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default UserAllPage;
