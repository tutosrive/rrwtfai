import type { FC } from 'react';
import type UserModel from '../../models/user.model';
import '../../assets/css/cards.css';

interface UserProfileProps {
    user: UserModel;
}

const UserProfile: FC<UserProfileProps> = ({ user }) => {
    return (
        <div id={`user-${user.id}`} className='card'>
            <p>ID: {user.id}</p>
            <p>First Name: {user.firstName}</p>
        </div>
    );
};

export default UserProfile;
