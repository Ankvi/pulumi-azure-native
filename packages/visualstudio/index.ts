import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AccountArgs } from "./account";
export type Account = import("./account").Account;
export const Account: typeof import("./account").Account = null as any;
utilities.lazyLoad(exports, ["Account"], () => require("./account"));

export { ExtensionArgs } from "./extension";
export type Extension = import("./extension").Extension;
export const Extension: typeof import("./extension").Extension = null as any;
utilities.lazyLoad(exports, ["Extension"], () => require("./extension"));

export { GetAccountArgs, GetAccountResult, GetAccountOutputArgs } from "./getAccount";
export const getAccount: typeof import("./getAccount").getAccount = null as any;
export const getAccountOutput: typeof import("./getAccount").getAccountOutput = null as any;
utilities.lazyLoad(exports, ["getAccount","getAccountOutput"], () => require("./getAccount"));

export { GetExtensionArgs, GetExtensionResult, GetExtensionOutputArgs } from "./getExtension";
export const getExtension: typeof import("./getExtension").getExtension = null as any;
export const getExtensionOutput: typeof import("./getExtension").getExtensionOutput = null as any;
utilities.lazyLoad(exports, ["getExtension","getExtensionOutput"], () => require("./getExtension"));


// Export enums:
export * from "./types/enums";



const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:visualstudio:Account":
                return new Account(name, <any>undefined, { urn })
            case "azure-native:visualstudio:Extension":
                return new Extension(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "visualstudio", _module)