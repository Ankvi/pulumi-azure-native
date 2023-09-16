import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetProactiveDetectionConfigurationArgs, GetProactiveDetectionConfigurationResult, GetProactiveDetectionConfigurationOutputArgs } from "./getProactiveDetectionConfiguration";
export const getProactiveDetectionConfiguration: typeof import("./getProactiveDetectionConfiguration").getProactiveDetectionConfiguration = null as any;
export const getProactiveDetectionConfigurationOutput: typeof import("./getProactiveDetectionConfiguration").getProactiveDetectionConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["getProactiveDetectionConfiguration","getProactiveDetectionConfigurationOutput"], () => require("./getProactiveDetectionConfiguration"));

export { ProactiveDetectionConfigurationArgs } from "./proactiveDetectionConfiguration";
export type ProactiveDetectionConfiguration = import("./proactiveDetectionConfiguration").ProactiveDetectionConfiguration;
export const ProactiveDetectionConfiguration: typeof import("./proactiveDetectionConfiguration").ProactiveDetectionConfiguration = null as any;
utilities.lazyLoad(exports, ["ProactiveDetectionConfiguration"], () => require("./proactiveDetectionConfiguration"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:insights/v20180501preview:ProactiveDetectionConfiguration":
                return new ProactiveDetectionConfiguration(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "insights/v20180501preview", _module)
