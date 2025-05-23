import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { DigitalTwinArgs } from "./digitalTwin";
export type DigitalTwin = import("./digitalTwin").DigitalTwin;
export const DigitalTwin: typeof import("./digitalTwin").DigitalTwin = null as any;
utilities.lazyLoad(exports, ["DigitalTwin"], () => require("./digitalTwin"));

export { DigitalTwinsEndpointArgs } from "./digitalTwinsEndpoint";
export type DigitalTwinsEndpoint = import("./digitalTwinsEndpoint").DigitalTwinsEndpoint;
export const DigitalTwinsEndpoint: typeof import("./digitalTwinsEndpoint").DigitalTwinsEndpoint = null as any;
utilities.lazyLoad(exports, ["DigitalTwinsEndpoint"], () => require("./digitalTwinsEndpoint"));

export { GetDigitalTwinArgs, GetDigitalTwinResult, GetDigitalTwinOutputArgs } from "./getDigitalTwin";
export const getDigitalTwin: typeof import("./getDigitalTwin").getDigitalTwin = null as any;
export const getDigitalTwinOutput: typeof import("./getDigitalTwin").getDigitalTwinOutput = null as any;
utilities.lazyLoad(exports, ["getDigitalTwin","getDigitalTwinOutput"], () => require("./getDigitalTwin"));

export { GetDigitalTwinsEndpointArgs, GetDigitalTwinsEndpointResult, GetDigitalTwinsEndpointOutputArgs } from "./getDigitalTwinsEndpoint";
export const getDigitalTwinsEndpoint: typeof import("./getDigitalTwinsEndpoint").getDigitalTwinsEndpoint = null as any;
export const getDigitalTwinsEndpointOutput: typeof import("./getDigitalTwinsEndpoint").getDigitalTwinsEndpointOutput = null as any;
utilities.lazyLoad(exports, ["getDigitalTwinsEndpoint","getDigitalTwinsEndpointOutput"], () => require("./getDigitalTwinsEndpoint"));

export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { GetTimeSeriesDatabaseConnectionArgs, GetTimeSeriesDatabaseConnectionResult, GetTimeSeriesDatabaseConnectionOutputArgs } from "./getTimeSeriesDatabaseConnection";
export const getTimeSeriesDatabaseConnection: typeof import("./getTimeSeriesDatabaseConnection").getTimeSeriesDatabaseConnection = null as any;
export const getTimeSeriesDatabaseConnectionOutput: typeof import("./getTimeSeriesDatabaseConnection").getTimeSeriesDatabaseConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getTimeSeriesDatabaseConnection","getTimeSeriesDatabaseConnectionOutput"], () => require("./getTimeSeriesDatabaseConnection"));

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));

export { TimeSeriesDatabaseConnectionArgs } from "./timeSeriesDatabaseConnection";
export type TimeSeriesDatabaseConnection = import("./timeSeriesDatabaseConnection").TimeSeriesDatabaseConnection;
export const TimeSeriesDatabaseConnection: typeof import("./timeSeriesDatabaseConnection").TimeSeriesDatabaseConnection = null as any;
utilities.lazyLoad(exports, ["TimeSeriesDatabaseConnection"], () => require("./timeSeriesDatabaseConnection"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:digitaltwins:DigitalTwin":
                return new DigitalTwin(name, <any>undefined, { urn })
            case "azure-native:digitaltwins:DigitalTwinsEndpoint":
                return new DigitalTwinsEndpoint(name, <any>undefined, { urn })
            case "azure-native:digitaltwins:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:digitaltwins:TimeSeriesDatabaseConnection":
                return new TimeSeriesDatabaseConnection(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "digitaltwins", _module)