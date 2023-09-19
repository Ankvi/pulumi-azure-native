import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { FluxConfigurationArgs } from "./fluxConfiguration";
export type FluxConfiguration = import("./fluxConfiguration").FluxConfiguration;
export const FluxConfiguration: typeof import("./fluxConfiguration").FluxConfiguration = null as any;
utilities.lazyLoad(exports, ["FluxConfiguration"], () => require("./fluxConfiguration"));

export { GetFluxConfigurationArgs, GetFluxConfigurationResult, GetFluxConfigurationOutputArgs } from "./getFluxConfiguration";
export const getFluxConfiguration: typeof import("./getFluxConfiguration").getFluxConfiguration = null as any;
export const getFluxConfigurationOutput: typeof import("./getFluxConfiguration").getFluxConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["getFluxConfiguration","getFluxConfigurationOutput"], () => require("./getFluxConfiguration"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:kubernetesconfiguration/v20211101preview:FluxConfiguration":
                return new FluxConfiguration(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "kubernetesconfiguration/v20211101preview", _module)
