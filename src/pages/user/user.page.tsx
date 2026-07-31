import UserProfile from '../../components/user/user-profile.component';
import type UserModel from '../../models/user.model';

export default function UserPage() {
    const users: UserModel[] = [
        { id: 'abc1', firstName: 'Santiago' },
        { id: 'abc2', firstName: 'Pepa' },
    ];

    return (
        <>
            <h1>User Page</h1>
            {users.map((u) => {
                return <UserProfile key={u.id?.toString()} user={u} />;
            })}
        </>
    );
}
