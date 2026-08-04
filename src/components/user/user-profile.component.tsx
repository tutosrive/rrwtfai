import type { FC } from 'react';
import type UserModel from '../../models/user.model';
import '../../assets/css/cards.css';

interface UserProfileProps {
    user: UserModel;
    classes?: string;
}

const UserProfile: FC<UserProfileProps> = ({ user, classes }) => {
    return (
        <div id={`user-${user.id}`} className={`${classes} border border-mist-500 flex flex-col items-center justify-center p-5 rounded-2xl mx-1 my-2`}>
            <img src={`${user.avatar}`} alt={`Avatar user ${user.id}-${user.firstName}`} className='w-3/12 md:w-4/12 rounded-full aspect-square' loading='lazy' />
            <div className='w-full overflow-scroll scrollbar-none text-nowrap'>
                <p>
                    ID: <code className='bg-mist-950 px-2 rounded-sm py-0.5'>{user.id}</code>
                </p>
                <p>
                    First Name: <code className='bg-mist-950 px-2 rounded-sm py-0.5'>{user.firstName}</code>
                </p>
                <p>
                    Last Name: <code className='bg-mist-950 px-2 rounded-sm py-0.5'>{user.lastName}</code>
                </p>
                <p>
                    Age: <code className='bg-mist-950 px-2 rounded-sm py-0.5'>{user.age?.toString()}</code>
                </p>
                <p>
                    E-Mail: <code className='bg-mist-950 px-2 rounded-sm py-0.5'>{user.email}</code>
                </p>
            </div>
        </div>
    );
};

export default UserProfile;
