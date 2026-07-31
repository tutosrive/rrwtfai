import type Model from '../models/model';

export default class Service<T extends Model> {
    private endpoint: String;

    constructor(e: String) {
        this.endpoint = e;
    }

    getAll(): T[] {
        // Simulate getAll data (until I create a backend test)
        return new Array<T>();
    }

    getById(id: String): T | null {
        const data: T | null = null;
        return data;
    }
}
