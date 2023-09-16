import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { DatabaseAccountArgs } from "./databaseAccount";
export type DatabaseAccount = import("./databaseAccount").DatabaseAccount;
export const DatabaseAccount: typeof import("./databaseAccount").DatabaseAccount = null as any;
utilities.lazyLoad(exports, ["DatabaseAccount"], () => require("./databaseAccount"));

export { GetDatabaseAccountArgs, GetDatabaseAccountResult, GetDatabaseAccountOutputArgs } from "./getDatabaseAccount";
export const getDatabaseAccount: typeof import("./getDatabaseAccount").getDatabaseAccount = null as any;
export const getDatabaseAccountOutput: typeof import("./getDatabaseAccount").getDatabaseAccountOutput = null as any;
utilities.lazyLoad(exports, ["getDatabaseAccount","getDatabaseAccountOutput"], () => require("./getDatabaseAccount"));

export { ListDatabaseAccountConnectionStringsArgs, ListDatabaseAccountConnectionStringsResult, ListDatabaseAccountConnectionStringsOutputArgs } from "./listDatabaseAccountConnectionStrings";
export const listDatabaseAccountConnectionStrings: typeof import("./listDatabaseAccountConnectionStrings").listDatabaseAccountConnectionStrings = null as any;
export const listDatabaseAccountConnectionStringsOutput: typeof import("./listDatabaseAccountConnectionStrings").listDatabaseAccountConnectionStringsOutput = null as any;
utilities.lazyLoad(exports, ["listDatabaseAccountConnectionStrings","listDatabaseAccountConnectionStringsOutput"], () => require("./listDatabaseAccountConnectionStrings"));

export { ListDatabaseAccountKeysArgs, ListDatabaseAccountKeysResult, ListDatabaseAccountKeysOutputArgs } from "./listDatabaseAccountKeys";
export const listDatabaseAccountKeys: typeof import("./listDatabaseAccountKeys").listDatabaseAccountKeys = null as any;
export const listDatabaseAccountKeysOutput: typeof import("./listDatabaseAccountKeys").listDatabaseAccountKeysOutput = null as any;
utilities.lazyLoad(exports, ["listDatabaseAccountKeys","listDatabaseAccountKeysOutput"], () => require("./listDatabaseAccountKeys"));


// Export enums:
export * from "../types/enums/v20210401preview";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:documentdb/v20210401preview:DatabaseAccount":
                return new DatabaseAccount(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "documentdb/v20210401preview", _module)
