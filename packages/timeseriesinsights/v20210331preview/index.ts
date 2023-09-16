import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { Gen2EnvironmentArgs } from "./gen2Environment";
export type Gen2Environment = import("./gen2Environment").Gen2Environment;
export const Gen2Environment: typeof import("./gen2Environment").Gen2Environment = null as any;
utilities.lazyLoad(exports, ["Gen2Environment"], () => require("./gen2Environment"));

export { GetGen2EnvironmentArgs, GetGen2EnvironmentResult, GetGen2EnvironmentOutputArgs } from "./getGen2Environment";
export const getGen2Environment: typeof import("./getGen2Environment").getGen2Environment = null as any;
export const getGen2EnvironmentOutput: typeof import("./getGen2Environment").getGen2EnvironmentOutput = null as any;
utilities.lazyLoad(exports, ["getGen2Environment","getGen2EnvironmentOutput"], () => require("./getGen2Environment"));

export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));


// Export enums:
export * from "../types/enums/v20210331preview";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:timeseriesinsights/v20210331preview:Gen2Environment":
                return new Gen2Environment(name, <any>undefined, { urn })
            case "azure-native:timeseriesinsights/v20210331preview:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "timeseriesinsights/v20210331preview", _module)
