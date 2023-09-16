import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ExtensionArgs } from "./extension";
export type Extension = import("./extension").Extension;
export const Extension: typeof import("./extension").Extension = null as any;
utilities.lazyLoad(exports, ["Extension"], () => require("./extension"));

export { FluxConfigurationArgs } from "./fluxConfiguration";
export type FluxConfiguration = import("./fluxConfiguration").FluxConfiguration;
export const FluxConfiguration: typeof import("./fluxConfiguration").FluxConfiguration = null as any;
utilities.lazyLoad(exports, ["FluxConfiguration"], () => require("./fluxConfiguration"));

export { GetExtensionArgs, GetExtensionResult, GetExtensionOutputArgs } from "./getExtension";
export const getExtension: typeof import("./getExtension").getExtension = null as any;
export const getExtensionOutput: typeof import("./getExtension").getExtensionOutput = null as any;
utilities.lazyLoad(exports, ["getExtension","getExtensionOutput"], () => require("./getExtension"));

export { GetFluxConfigurationArgs, GetFluxConfigurationResult, GetFluxConfigurationOutputArgs } from "./getFluxConfiguration";
export const getFluxConfiguration: typeof import("./getFluxConfiguration").getFluxConfiguration = null as any;
export const getFluxConfigurationOutput: typeof import("./getFluxConfiguration").getFluxConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["getFluxConfiguration","getFluxConfigurationOutput"], () => require("./getFluxConfiguration"));

export { GetSourceControlConfigurationArgs, GetSourceControlConfigurationResult, GetSourceControlConfigurationOutputArgs } from "./getSourceControlConfiguration";
export const getSourceControlConfiguration: typeof import("./getSourceControlConfiguration").getSourceControlConfiguration = null as any;
export const getSourceControlConfigurationOutput: typeof import("./getSourceControlConfiguration").getSourceControlConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["getSourceControlConfiguration","getSourceControlConfigurationOutput"], () => require("./getSourceControlConfiguration"));

export { SourceControlConfigurationArgs } from "./sourceControlConfiguration";
export type SourceControlConfiguration = import("./sourceControlConfiguration").SourceControlConfiguration;
export const SourceControlConfiguration: typeof import("./sourceControlConfiguration").SourceControlConfiguration = null as any;
utilities.lazyLoad(exports, ["SourceControlConfiguration"], () => require("./sourceControlConfiguration"));


// Export enums:
export * from "../types/enums/v20230501";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:kubernetesconfiguration/v20230501:Extension":
                return new Extension(name, <any>undefined, { urn })
            case "azure-native:kubernetesconfiguration/v20230501:FluxConfiguration":
                return new FluxConfiguration(name, <any>undefined, { urn })
            case "azure-native:kubernetesconfiguration/v20230501:SourceControlConfiguration":
                return new SourceControlConfiguration(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "kubernetesconfiguration/v20230501", _module)
