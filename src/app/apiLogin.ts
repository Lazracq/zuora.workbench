import { ZObject } from './zobject';


export class ApiLogin {
    constructor(
        public username: string,
        public password: string,
        public environment: string,
        public token: string,
        public objects: ZObject[]
      ) {  }

}
