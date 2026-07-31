import type UserModel from '../models/user.model';
import Service from './service';

export default class UserService extends Service<UserModel> {
    constructor() {
        super('users');
    }
}
