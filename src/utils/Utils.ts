export default class Utils {
    static handleHeaderTitle(currentPath: string = ''): string {
        let title: string = '';
        if (currentPath?.length > 0) {
            const endpoint: string = currentPath.split('/').at(-1) ?? '';

            switch (endpoint) {
                case 'rrwtfai':
                    title = 'Home';
                    break;
                case 'users':
                    title = 'All Users';
                    break;
                case 'users-v1':
                    title = 'All Users (V1)';
                    break;
                default:
                    title = 'User Profile';
            }
        }
        return title;
    }
}
