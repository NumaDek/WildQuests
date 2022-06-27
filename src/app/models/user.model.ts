import { Address } from "./address.model";

export class User {
    constructor(
        public name: string,
        public mail: string,
        public password: string,
        public address: Address
    ) {}
}