import { ZAttributes } from './zAttributes';

export class ZObject {
    constructor(
        public name: string,
        public label: string,
        public attributes: ZAttributes[]
      ) {  }

}
