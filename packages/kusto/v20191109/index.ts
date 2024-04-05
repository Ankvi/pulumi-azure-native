import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetReadWriteDatabaseArgs, GetReadWriteDatabaseResult, GetReadWriteDatabaseOutputArgs } from "./getReadWriteDatabase";
export const getReadWriteDatabase: typeof import("./getReadWriteDatabase").getReadWriteDatabase = null as any;
export const getReadWriteDatabaseOutput: typeof import("./getReadWriteDatabase").getReadWriteDatabaseOutput = null as any;
utilities.lazyLoad(exports, ["getReadWriteDatabase","getReadWriteDatabaseOutput"], () => require("./getReadWriteDatabase"));

export { ReadWriteDatabaseArgs } from "./readWriteDatabase";
export type ReadWriteDatabase = import("./readWriteDatabase").ReadWriteDatabase;
export const ReadWriteDatabase: typeof import("./readWriteDatabase").ReadWriteDatabase = null as any;
utilities.lazyLoad(exports, ["ReadWriteDatabase"], () => require("./readWriteDatabase"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:kusto/v20191109:ReadWriteDatabase":
                return new ReadWriteDatabase(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "kusto/v20191109", _module)