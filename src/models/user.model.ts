import Model from './model';

export default interface UserModel extends Model {
    id?: String;
    firstName?: String;
    lastName?: String;
    email?: String;
    age?: Number;
    avatar?: String;
}
