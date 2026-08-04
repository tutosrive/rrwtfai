export default class Utils {
    static handleHeaderTitle(currentPath: string = ''): string {
        let title: string = '';
        if (currentPath?.length > 0) {
            const endpoint: string = currentPath.split('/').at(-1) ?? '';

            switch (endpoint) {
                case 'users':
                    title = 'Users';
                    break;
                case 'users-v1':
                    title = 'Users (V1)';
                    break;
                default:
                    title = 'Home';
            }
        }
        return title;
    }
}
