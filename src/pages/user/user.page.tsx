import type { FC } from 'react';
import type UserModel from '../../models/user.model';
import UserProfile from '../../components/user/user-profile.component';

interface UserPageProps {
    classes?: string;
    user: UserModel;
}

const UserPage: FC<UserPageProps> = ({ classes, user }) => {
    return (
        <div id={`userpage-${user.id}`} className={`${classes?.toString()} w-full h-full`}>
            <UserProfile user={user} />
        </div>
    );
};

export default UserPage;
