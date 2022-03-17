import {Role} from "@/models/role";

export class User {
    constructor(
        public id: number = 0,
        public name: string = '',
        public email: string = '',
        public role: Role = new Role()
    ) {
    }
}