import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetReadOnlyFollowingDatabaseArgs, GetReadOnlyFollowingDatabaseResult, GetReadOnlyFollowingDatabaseOutputArgs } from "./getReadOnlyFollowingDatabase";
export const getReadOnlyFollowingDatabase: typeof import("./getReadOnlyFollowingDatabase").getReadOnlyFollowingDatabase = null as any;
export const getReadOnlyFollowingDatabaseOutput: typeof import("./getReadOnlyFollowingDatabase").getReadOnlyFollowingDatabaseOutput = null as any;
utilities.lazyLoad(exports, ["getReadOnlyFollowingDatabase","getReadOnlyFollowingDatabaseOutput"], () => require("./getReadOnlyFollowingDatabase"));

export { GetReadWriteDatabaseArgs, GetReadWriteDatabaseResult, GetReadWriteDatabaseOutputArgs } from "./getReadWriteDatabase";
export const getReadWriteDatabase: typeof import("./getReadWriteDatabase").getReadWriteDatabase = null as any;
export const getReadWriteDatabaseOutput: typeof import("./getReadWriteDatabase").getReadWriteDatabaseOutput = null as any;
utilities.lazyLoad(exports, ["getReadWriteDatabase","getReadWriteDatabaseOutput"], () => require("./getReadWriteDatabase"));

export { ReadOnlyFollowingDatabaseArgs } from "./readOnlyFollowingDatabase";
export type ReadOnlyFollowingDatabase = import("./readOnlyFollowingDatabase").ReadOnlyFollowingDatabase;
export const ReadOnlyFollowingDatabase: typeof import("./readOnlyFollowingDatabase").ReadOnlyFollowingDatabase = null as any;
utilities.lazyLoad(exports, ["ReadOnlyFollowingDatabase"], () => require("./readOnlyFollowingDatabase"));

export { ReadWriteDatabaseArgs } from "./readWriteDatabase";
export type ReadWriteDatabase = import("./readWriteDatabase").ReadWriteDatabase;
export const ReadWriteDatabase: typeof import("./readWriteDatabase").ReadWriteDatabase = null as any;
utilities.lazyLoad(exports, ["ReadWriteDatabase"], () => require("./readWriteDatabase"));


// Export enums:
export * from "../types/enums/v20190907";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:kusto/v20190907:ReadOnlyFollowingDatabase":
                return new ReadOnlyFollowingDatabase(name, <any>undefined, { urn })
            case "azure-native:kusto/v20190907:ReadWriteDatabase":
                return new ReadWriteDatabase(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "kusto/v20190907", _module)
