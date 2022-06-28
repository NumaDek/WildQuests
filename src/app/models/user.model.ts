import { Address } from "./address.model";

export class User {
    constructor(
        public name: string,
        public email: string,
        public password: string,
        public address: Address
    ) {}
}