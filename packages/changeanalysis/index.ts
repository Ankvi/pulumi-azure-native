import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ConfigurationProfileArgs } from "./configurationProfile";
export type ConfigurationProfile = import("./configurationProfile").ConfigurationProfile;
export const ConfigurationProfile: typeof import("./configurationProfile").ConfigurationProfile = null as any;
utilities.lazyLoad(exports, ["ConfigurationProfile"], () => require("./configurationProfile"));

export { GetConfigurationProfileArgs, GetConfigurationProfileResult, GetConfigurationProfileOutputArgs } from "./getConfigurationProfile";
export const getConfigurationProfile: typeof import("./getConfigurationProfile").getConfigurationProfile = null as any;
export const getConfigurationProfileOutput: typeof import("./getConfigurationProfile").getConfigurationProfileOutput = null as any;
utilities.lazyLoad(exports, ["getConfigurationProfile","getConfigurationProfileOutput"], () => require("./getConfigurationProfile"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:changeanalysis:ConfigurationProfile":
                return new ConfigurationProfile(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "changeanalysis", _module)