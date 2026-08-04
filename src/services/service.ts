import type Model from '../models/model';

export default class Service<T extends Model> {
    private endpoint: string;
    private baseUrl: string | null = import.meta.env.VITE_APIURL_BASE || null;
    private apiPreffix: string | null = import.meta.env.VITE_API_PREFIX || null;
    private url: string;

    constructor(e: string) {
        this.endpoint = e;
        this.url = `${this.baseUrl}/${this.apiPreffix}/${this.endpoint}`;
    }

    async getAll(): Promise<T[]> {
        const req = await fetch(this.url);
        let data: Array<T> = await req.json();
        return data;
    }

    async getById(id: string): Promise<T | null> {
        const req = await fetch(`${this.url}/${id}`);
        const user: T = await req.json();
        return user || null;
    }
}
