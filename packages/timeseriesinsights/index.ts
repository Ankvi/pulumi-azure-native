import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AccessPolicyArgs } from "./accessPolicy";
export type AccessPolicy = import("./accessPolicy").AccessPolicy;
export const AccessPolicy: typeof import("./accessPolicy").AccessPolicy = null as any;
utilities.lazyLoad(exports, ["AccessPolicy"], () => require("./accessPolicy"));

export { EventHubEventSourceArgs } from "./eventHubEventSource";
export type EventHubEventSource = import("./eventHubEventSource").EventHubEventSource;
export const EventHubEventSource: typeof import("./eventHubEventSource").EventHubEventSource = null as any;
utilities.lazyLoad(exports, ["EventHubEventSource"], () => require("./eventHubEventSource"));

export { Gen1EnvironmentArgs } from "./gen1Environment";
export type Gen1Environment = import("./gen1Environment").Gen1Environment;
export const Gen1Environment: typeof import("./gen1Environment").Gen1Environment = null as any;
utilities.lazyLoad(exports, ["Gen1Environment"], () => require("./gen1Environment"));

export { Gen2EnvironmentArgs } from "./gen2Environment";
export type Gen2Environment = import("./gen2Environment").Gen2Environment;
export const Gen2Environment: typeof import("./gen2Environment").Gen2Environment = null as any;
utilities.lazyLoad(exports, ["Gen2Environment"], () => require("./gen2Environment"));

export { GetAccessPolicyArgs, GetAccessPolicyResult, GetAccessPolicyOutputArgs } from "./getAccessPolicy";
export const getAccessPolicy: typeof import("./getAccessPolicy").getAccessPolicy = null as any;
export const getAccessPolicyOutput: typeof import("./getAccessPolicy").getAccessPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getAccessPolicy","getAccessPolicyOutput"], () => require("./getAccessPolicy"));

export { GetEventHubEventSourceArgs, GetEventHubEventSourceResult, GetEventHubEventSourceOutputArgs } from "./getEventHubEventSource";
export const getEventHubEventSource: typeof import("./getEventHubEventSource").getEventHubEventSource = null as any;
export const getEventHubEventSourceOutput: typeof import("./getEventHubEventSource").getEventHubEventSourceOutput = null as any;
utilities.lazyLoad(exports, ["getEventHubEventSource","getEventHubEventSourceOutput"], () => require("./getEventHubEventSource"));

export { GetGen1EnvironmentArgs, GetGen1EnvironmentResult, GetGen1EnvironmentOutputArgs } from "./getGen1Environment";
export const getGen1Environment: typeof import("./getGen1Environment").getGen1Environment = null as any;
export const getGen1EnvironmentOutput: typeof import("./getGen1Environment").getGen1EnvironmentOutput = null as any;
utilities.lazyLoad(exports, ["getGen1Environment","getGen1EnvironmentOutput"], () => require("./getGen1Environment"));

export { GetGen2EnvironmentArgs, GetGen2EnvironmentResult, GetGen2EnvironmentOutputArgs } from "./getGen2Environment";
export const getGen2Environment: typeof import("./getGen2Environment").getGen2Environment = null as any;
export const getGen2EnvironmentOutput: typeof import("./getGen2Environment").getGen2EnvironmentOutput = null as any;
utilities.lazyLoad(exports, ["getGen2Environment","getGen2EnvironmentOutput"], () => require("./getGen2Environment"));

export { GetIoTHubEventSourceArgs, GetIoTHubEventSourceResult, GetIoTHubEventSourceOutputArgs } from "./getIoTHubEventSource";
export const getIoTHubEventSource: typeof import("./getIoTHubEventSource").getIoTHubEventSource = null as any;
export const getIoTHubEventSourceOutput: typeof import("./getIoTHubEventSource").getIoTHubEventSourceOutput = null as any;
utilities.lazyLoad(exports, ["getIoTHubEventSource","getIoTHubEventSourceOutput"], () => require("./getIoTHubEventSource"));

export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { GetReferenceDataSetArgs, GetReferenceDataSetResult, GetReferenceDataSetOutputArgs } from "./getReferenceDataSet";
export const getReferenceDataSet: typeof import("./getReferenceDataSet").getReferenceDataSet = null as any;
export const getReferenceDataSetOutput: typeof import("./getReferenceDataSet").getReferenceDataSetOutput = null as any;
utilities.lazyLoad(exports, ["getReferenceDataSet","getReferenceDataSetOutput"], () => require("./getReferenceDataSet"));

export { IoTHubEventSourceArgs } from "./ioTHubEventSource";
export type IoTHubEventSource = import("./ioTHubEventSource").IoTHubEventSource;
export const IoTHubEventSource: typeof import("./ioTHubEventSource").IoTHubEventSource = null as any;
utilities.lazyLoad(exports, ["IoTHubEventSource"], () => require("./ioTHubEventSource"));

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));

export { ReferenceDataSetArgs } from "./referenceDataSet";
export type ReferenceDataSet = import("./referenceDataSet").ReferenceDataSet;
export const ReferenceDataSet: typeof import("./referenceDataSet").ReferenceDataSet = null as any;
utilities.lazyLoad(exports, ["ReferenceDataSet"], () => require("./referenceDataSet"));


// Export enums:
export * from "./types/enums";

// Export sub-modules:
import * as v20200515 from "./v20200515";
import * as v20210331preview from "./v20210331preview";
import * as v20210630preview from "./v20210630preview";

export {
    v20200515,
    v20210331preview,
    v20210630preview,
};

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:timeseriesinsights:AccessPolicy":
                return new AccessPolicy(name, <any>undefined, { urn })
            case "azure-native:timeseriesinsights:EventHubEventSource":
                return new EventHubEventSource(name, <any>undefined, { urn })
            case "azure-native:timeseriesinsights:Gen1Environment":
                return new Gen1Environment(name, <any>undefined, { urn })
            case "azure-native:timeseriesinsights:Gen2Environment":
                return new Gen2Environment(name, <any>undefined, { urn })
            case "azure-native:timeseriesinsights:IoTHubEventSource":
                return new IoTHubEventSource(name, <any>undefined, { urn })
            case "azure-native:timeseriesinsights:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:timeseriesinsights:ReferenceDataSet":
                return new ReferenceDataSet(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "timeseriesinsights", _module)
