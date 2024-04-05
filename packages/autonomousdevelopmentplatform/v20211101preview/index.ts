import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AccountArgs } from "./account";
export type Account = import("./account").Account;
export const Account: typeof import("./account").Account = null as any;
utilities.lazyLoad(exports, ["Account"], () => require("./account"));

export { DataPoolArgs } from "./dataPool";
export type DataPool = import("./dataPool").DataPool;
export const DataPool: typeof import("./dataPool").DataPool = null as any;
utilities.lazyLoad(exports, ["DataPool"], () => require("./dataPool"));

export { GetAccountArgs, GetAccountResult, GetAccountOutputArgs } from "./getAccount";
export const getAccount: typeof import("./getAccount").getAccount = null as any;
export const getAccountOutput: typeof import("./getAccount").getAccountOutput = null as any;
utilities.lazyLoad(exports, ["getAccount","getAccountOutput"], () => require("./getAccount"));

export { GetDataPoolArgs, GetDataPoolResult, GetDataPoolOutputArgs } from "./getDataPool";
export const getDataPool: typeof import("./getDataPool").getDataPool = null as any;
export const getDataPoolOutput: typeof import("./getDataPool").getDataPoolOutput = null as any;
utilities.lazyLoad(exports, ["getDataPool","getDataPoolOutput"], () => require("./getDataPool"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:autonomousdevelopmentplatform/v20211101preview:Account":
                return new Account(name, <any>undefined, { urn })
            case "azure-native:autonomousdevelopmentplatform/v20211101preview:DataPool":
                return new DataPool(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "autonomousdevelopmentplatform/v20211101preview", _module)