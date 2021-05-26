import { Logger } from '../../packlets/logging';
export interface IDataRecord {
    firstName: string;
    lastName: string;
    age: number;
}
export declare abstract class DataModel {
    protected readonly logger: Logger;
    constructor(logger: Logger);
    abstract queryRecords(): IDataRecord[];
}
//# sourceMappingURL=DataModel.d.ts.map