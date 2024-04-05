import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AccountArgs } from "./account";
export type Account = import("./account").Account;
export const Account: typeof import("./account").Account = null as any;
utilities.lazyLoad(exports, ["Account"], () => require("./account"));

export { ConfigurationProfilePreferenceArgs } from "./configurationProfilePreference";
export type ConfigurationProfilePreference = import("./configurationProfilePreference").ConfigurationProfilePreference;
export const ConfigurationProfilePreference: typeof import("./configurationProfilePreference").ConfigurationProfilePreference = null as any;
utilities.lazyLoad(exports, ["ConfigurationProfilePreference"], () => require("./configurationProfilePreference"));

export { GetAccountArgs, GetAccountResult, GetAccountOutputArgs } from "./getAccount";
export const getAccount: typeof import("./getAccount").getAccount = null as any;
export const getAccountOutput: typeof import("./getAccount").getAccountOutput = null as any;
utilities.lazyLoad(exports, ["getAccount","getAccountOutput"], () => require("./getAccount"));

export { GetConfigurationProfilePreferenceArgs, GetConfigurationProfilePreferenceResult, GetConfigurationProfilePreferenceOutputArgs } from "./getConfigurationProfilePreference";
export const getConfigurationProfilePreference: typeof import("./getConfigurationProfilePreference").getConfigurationProfilePreference = null as any;
export const getConfigurationProfilePreferenceOutput: typeof import("./getConfigurationProfilePreference").getConfigurationProfilePreferenceOutput = null as any;
utilities.lazyLoad(exports, ["getConfigurationProfilePreference","getConfigurationProfilePreferenceOutput"], () => require("./getConfigurationProfilePreference"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:automanage/v20200630preview:Account":
                return new Account(name, <any>undefined, { urn })
            case "azure-native:automanage/v20200630preview:ConfigurationProfilePreference":
                return new ConfigurationProfilePreference(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "automanage/v20200630preview", _module)