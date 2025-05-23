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

export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { GetPrivateLinkScopeArgs, GetPrivateLinkScopeResult, GetPrivateLinkScopeOutputArgs } from "./getPrivateLinkScope";
export const getPrivateLinkScope: typeof import("./getPrivateLinkScope").getPrivateLinkScope = null as any;
export const getPrivateLinkScopeOutput: typeof import("./getPrivateLinkScope").getPrivateLinkScopeOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateLinkScope","getPrivateLinkScopeOutput"], () => require("./getPrivateLinkScope"));

export { GetSourceControlConfigurationArgs, GetSourceControlConfigurationResult, GetSourceControlConfigurationOutputArgs } from "./getSourceControlConfiguration";
export const getSourceControlConfiguration: typeof import("./getSourceControlConfiguration").getSourceControlConfiguration = null as any;
export const getSourceControlConfigurationOutput: typeof import("./getSourceControlConfiguration").getSourceControlConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["getSourceControlConfiguration","getSourceControlConfigurationOutput"], () => require("./getSourceControlConfiguration"));

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));

export { PrivateLinkScopeArgs } from "./privateLinkScope";
export type PrivateLinkScope = import("./privateLinkScope").PrivateLinkScope;
export const PrivateLinkScope: typeof import("./privateLinkScope").PrivateLinkScope = null as any;
utilities.lazyLoad(exports, ["PrivateLinkScope"], () => require("./privateLinkScope"));

export { SourceControlConfigurationArgs } from "./sourceControlConfiguration";
export type SourceControlConfiguration = import("./sourceControlConfiguration").SourceControlConfiguration;
export const SourceControlConfiguration: typeof import("./sourceControlConfiguration").SourceControlConfiguration = null as any;
utilities.lazyLoad(exports, ["SourceControlConfiguration"], () => require("./sourceControlConfiguration"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:kubernetesconfiguration:Extension":
                return new Extension(name, <any>undefined, { urn })
            case "azure-native:kubernetesconfiguration:FluxConfiguration":
                return new FluxConfiguration(name, <any>undefined, { urn })
            case "azure-native:kubernetesconfiguration:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:kubernetesconfiguration:PrivateLinkScope":
                return new PrivateLinkScope(name, <any>undefined, { urn })
            case "azure-native:kubernetesconfiguration:SourceControlConfiguration":
                return new SourceControlConfiguration(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "kubernetesconfiguration", _module)