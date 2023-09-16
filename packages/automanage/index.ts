import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AccountArgs } from "./account";
export type Account = import("./account").Account;
export const Account: typeof import("./account").Account = null as any;
utilities.lazyLoad(exports, ["Account"], () => require("./account"));

export { ConfigurationProfileArgs } from "./configurationProfile";
export type ConfigurationProfile = import("./configurationProfile").ConfigurationProfile;
export const ConfigurationProfile: typeof import("./configurationProfile").ConfigurationProfile = null as any;
utilities.lazyLoad(exports, ["ConfigurationProfile"], () => require("./configurationProfile"));

export { ConfigurationProfileAssignmentArgs } from "./configurationProfileAssignment";
export type ConfigurationProfileAssignment = import("./configurationProfileAssignment").ConfigurationProfileAssignment;
export const ConfigurationProfileAssignment: typeof import("./configurationProfileAssignment").ConfigurationProfileAssignment = null as any;
utilities.lazyLoad(exports, ["ConfigurationProfileAssignment"], () => require("./configurationProfileAssignment"));

export { ConfigurationProfileHCIAssignmentArgs } from "./configurationProfileHCIAssignment";
export type ConfigurationProfileHCIAssignment = import("./configurationProfileHCIAssignment").ConfigurationProfileHCIAssignment;
export const ConfigurationProfileHCIAssignment: typeof import("./configurationProfileHCIAssignment").ConfigurationProfileHCIAssignment = null as any;
utilities.lazyLoad(exports, ["ConfigurationProfileHCIAssignment"], () => require("./configurationProfileHCIAssignment"));

export { ConfigurationProfileHCRPAssignmentArgs } from "./configurationProfileHCRPAssignment";
export type ConfigurationProfileHCRPAssignment = import("./configurationProfileHCRPAssignment").ConfigurationProfileHCRPAssignment;
export const ConfigurationProfileHCRPAssignment: typeof import("./configurationProfileHCRPAssignment").ConfigurationProfileHCRPAssignment = null as any;
utilities.lazyLoad(exports, ["ConfigurationProfileHCRPAssignment"], () => require("./configurationProfileHCRPAssignment"));

export { ConfigurationProfilePreferenceArgs } from "./configurationProfilePreference";
export type ConfigurationProfilePreference = import("./configurationProfilePreference").ConfigurationProfilePreference;
export const ConfigurationProfilePreference: typeof import("./configurationProfilePreference").ConfigurationProfilePreference = null as any;
utilities.lazyLoad(exports, ["ConfigurationProfilePreference"], () => require("./configurationProfilePreference"));

export { ConfigurationProfilesVersionArgs } from "./configurationProfilesVersion";
export type ConfigurationProfilesVersion = import("./configurationProfilesVersion").ConfigurationProfilesVersion;
export const ConfigurationProfilesVersion: typeof import("./configurationProfilesVersion").ConfigurationProfilesVersion = null as any;
utilities.lazyLoad(exports, ["ConfigurationProfilesVersion"], () => require("./configurationProfilesVersion"));

export { GetAccountArgs, GetAccountResult, GetAccountOutputArgs } from "./getAccount";
export const getAccount: typeof import("./getAccount").getAccount = null as any;
export const getAccountOutput: typeof import("./getAccount").getAccountOutput = null as any;
utilities.lazyLoad(exports, ["getAccount","getAccountOutput"], () => require("./getAccount"));

export { GetConfigurationProfileArgs, GetConfigurationProfileResult, GetConfigurationProfileOutputArgs } from "./getConfigurationProfile";
export const getConfigurationProfile: typeof import("./getConfigurationProfile").getConfigurationProfile = null as any;
export const getConfigurationProfileOutput: typeof import("./getConfigurationProfile").getConfigurationProfileOutput = null as any;
utilities.lazyLoad(exports, ["getConfigurationProfile","getConfigurationProfileOutput"], () => require("./getConfigurationProfile"));

export { GetConfigurationProfileAssignmentArgs, GetConfigurationProfileAssignmentResult, GetConfigurationProfileAssignmentOutputArgs } from "./getConfigurationProfileAssignment";
export const getConfigurationProfileAssignment: typeof import("./getConfigurationProfileAssignment").getConfigurationProfileAssignment = null as any;
export const getConfigurationProfileAssignmentOutput: typeof import("./getConfigurationProfileAssignment").getConfigurationProfileAssignmentOutput = null as any;
utilities.lazyLoad(exports, ["getConfigurationProfileAssignment","getConfigurationProfileAssignmentOutput"], () => require("./getConfigurationProfileAssignment"));

export { GetConfigurationProfileHCIAssignmentArgs, GetConfigurationProfileHCIAssignmentResult, GetConfigurationProfileHCIAssignmentOutputArgs } from "./getConfigurationProfileHCIAssignment";
export const getConfigurationProfileHCIAssignment: typeof import("./getConfigurationProfileHCIAssignment").getConfigurationProfileHCIAssignment = null as any;
export const getConfigurationProfileHCIAssignmentOutput: typeof import("./getConfigurationProfileHCIAssignment").getConfigurationProfileHCIAssignmentOutput = null as any;
utilities.lazyLoad(exports, ["getConfigurationProfileHCIAssignment","getConfigurationProfileHCIAssignmentOutput"], () => require("./getConfigurationProfileHCIAssignment"));

export { GetConfigurationProfileHCRPAssignmentArgs, GetConfigurationProfileHCRPAssignmentResult, GetConfigurationProfileHCRPAssignmentOutputArgs } from "./getConfigurationProfileHCRPAssignment";
export const getConfigurationProfileHCRPAssignment: typeof import("./getConfigurationProfileHCRPAssignment").getConfigurationProfileHCRPAssignment = null as any;
export const getConfigurationProfileHCRPAssignmentOutput: typeof import("./getConfigurationProfileHCRPAssignment").getConfigurationProfileHCRPAssignmentOutput = null as any;
utilities.lazyLoad(exports, ["getConfigurationProfileHCRPAssignment","getConfigurationProfileHCRPAssignmentOutput"], () => require("./getConfigurationProfileHCRPAssignment"));

export { GetConfigurationProfilePreferenceArgs, GetConfigurationProfilePreferenceResult, GetConfigurationProfilePreferenceOutputArgs } from "./getConfigurationProfilePreference";
export const getConfigurationProfilePreference: typeof import("./getConfigurationProfilePreference").getConfigurationProfilePreference = null as any;
export const getConfigurationProfilePreferenceOutput: typeof import("./getConfigurationProfilePreference").getConfigurationProfilePreferenceOutput = null as any;
utilities.lazyLoad(exports, ["getConfigurationProfilePreference","getConfigurationProfilePreferenceOutput"], () => require("./getConfigurationProfilePreference"));

export { GetConfigurationProfilesVersionArgs, GetConfigurationProfilesVersionResult, GetConfigurationProfilesVersionOutputArgs } from "./getConfigurationProfilesVersion";
export const getConfigurationProfilesVersion: typeof import("./getConfigurationProfilesVersion").getConfigurationProfilesVersion = null as any;
export const getConfigurationProfilesVersionOutput: typeof import("./getConfigurationProfilesVersion").getConfigurationProfilesVersionOutput = null as any;
utilities.lazyLoad(exports, ["getConfigurationProfilesVersion","getConfigurationProfilesVersionOutput"], () => require("./getConfigurationProfilesVersion"));


// Export enums:
export * from "./types/enums";

// Export sub-modules:
import * as v20200630preview from "./v20200630preview";
import * as v20220504 from "./v20220504";

export {
    v20200630preview,
    v20220504,
};

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:automanage:Account":
                return new Account(name, <any>undefined, { urn })
            case "azure-native:automanage:ConfigurationProfile":
                return new ConfigurationProfile(name, <any>undefined, { urn })
            case "azure-native:automanage:ConfigurationProfileAssignment":
                return new ConfigurationProfileAssignment(name, <any>undefined, { urn })
            case "azure-native:automanage:ConfigurationProfileHCIAssignment":
                return new ConfigurationProfileHCIAssignment(name, <any>undefined, { urn })
            case "azure-native:automanage:ConfigurationProfileHCRPAssignment":
                return new ConfigurationProfileHCRPAssignment(name, <any>undefined, { urn })
            case "azure-native:automanage:ConfigurationProfilePreference":
                return new ConfigurationProfilePreference(name, <any>undefined, { urn })
            case "azure-native:automanage:ConfigurationProfilesVersion":
                return new ConfigurationProfilesVersion(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "automanage", _module)
