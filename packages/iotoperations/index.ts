import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { BrokerArgs } from "./broker";
export type Broker = import("./broker").Broker;
export const Broker: typeof import("./broker").Broker = null as any;
utilities.lazyLoad(exports, ["Broker"], () => require("./broker"));

export { BrokerAuthenticationArgs } from "./brokerAuthentication";
export type BrokerAuthentication = import("./brokerAuthentication").BrokerAuthentication;
export const BrokerAuthentication: typeof import("./brokerAuthentication").BrokerAuthentication = null as any;
utilities.lazyLoad(exports, ["BrokerAuthentication"], () => require("./brokerAuthentication"));

export { BrokerAuthorizationArgs } from "./brokerAuthorization";
export type BrokerAuthorization = import("./brokerAuthorization").BrokerAuthorization;
export const BrokerAuthorization: typeof import("./brokerAuthorization").BrokerAuthorization = null as any;
utilities.lazyLoad(exports, ["BrokerAuthorization"], () => require("./brokerAuthorization"));

export { BrokerListenerArgs } from "./brokerListener";
export type BrokerListener = import("./brokerListener").BrokerListener;
export const BrokerListener: typeof import("./brokerListener").BrokerListener = null as any;
utilities.lazyLoad(exports, ["BrokerListener"], () => require("./brokerListener"));

export { DataflowArgs } from "./dataflow";
export type Dataflow = import("./dataflow").Dataflow;
export const Dataflow: typeof import("./dataflow").Dataflow = null as any;
utilities.lazyLoad(exports, ["Dataflow"], () => require("./dataflow"));

export { DataflowEndpointArgs } from "./dataflowEndpoint";
export type DataflowEndpoint = import("./dataflowEndpoint").DataflowEndpoint;
export const DataflowEndpoint: typeof import("./dataflowEndpoint").DataflowEndpoint = null as any;
utilities.lazyLoad(exports, ["DataflowEndpoint"], () => require("./dataflowEndpoint"));

export { DataflowProfileArgs } from "./dataflowProfile";
export type DataflowProfile = import("./dataflowProfile").DataflowProfile;
export const DataflowProfile: typeof import("./dataflowProfile").DataflowProfile = null as any;
utilities.lazyLoad(exports, ["DataflowProfile"], () => require("./dataflowProfile"));

export { GetBrokerArgs, GetBrokerResult, GetBrokerOutputArgs } from "./getBroker";
export const getBroker: typeof import("./getBroker").getBroker = null as any;
export const getBrokerOutput: typeof import("./getBroker").getBrokerOutput = null as any;
utilities.lazyLoad(exports, ["getBroker","getBrokerOutput"], () => require("./getBroker"));

export { GetBrokerAuthenticationArgs, GetBrokerAuthenticationResult, GetBrokerAuthenticationOutputArgs } from "./getBrokerAuthentication";
export const getBrokerAuthentication: typeof import("./getBrokerAuthentication").getBrokerAuthentication = null as any;
export const getBrokerAuthenticationOutput: typeof import("./getBrokerAuthentication").getBrokerAuthenticationOutput = null as any;
utilities.lazyLoad(exports, ["getBrokerAuthentication","getBrokerAuthenticationOutput"], () => require("./getBrokerAuthentication"));

export { GetBrokerAuthorizationArgs, GetBrokerAuthorizationResult, GetBrokerAuthorizationOutputArgs } from "./getBrokerAuthorization";
export const getBrokerAuthorization: typeof import("./getBrokerAuthorization").getBrokerAuthorization = null as any;
export const getBrokerAuthorizationOutput: typeof import("./getBrokerAuthorization").getBrokerAuthorizationOutput = null as any;
utilities.lazyLoad(exports, ["getBrokerAuthorization","getBrokerAuthorizationOutput"], () => require("./getBrokerAuthorization"));

export { GetBrokerListenerArgs, GetBrokerListenerResult, GetBrokerListenerOutputArgs } from "./getBrokerListener";
export const getBrokerListener: typeof import("./getBrokerListener").getBrokerListener = null as any;
export const getBrokerListenerOutput: typeof import("./getBrokerListener").getBrokerListenerOutput = null as any;
utilities.lazyLoad(exports, ["getBrokerListener","getBrokerListenerOutput"], () => require("./getBrokerListener"));

export { GetDataflowArgs, GetDataflowResult, GetDataflowOutputArgs } from "./getDataflow";
export const getDataflow: typeof import("./getDataflow").getDataflow = null as any;
export const getDataflowOutput: typeof import("./getDataflow").getDataflowOutput = null as any;
utilities.lazyLoad(exports, ["getDataflow","getDataflowOutput"], () => require("./getDataflow"));

export { GetDataflowEndpointArgs, GetDataflowEndpointResult, GetDataflowEndpointOutputArgs } from "./getDataflowEndpoint";
export const getDataflowEndpoint: typeof import("./getDataflowEndpoint").getDataflowEndpoint = null as any;
export const getDataflowEndpointOutput: typeof import("./getDataflowEndpoint").getDataflowEndpointOutput = null as any;
utilities.lazyLoad(exports, ["getDataflowEndpoint","getDataflowEndpointOutput"], () => require("./getDataflowEndpoint"));

export { GetDataflowProfileArgs, GetDataflowProfileResult, GetDataflowProfileOutputArgs } from "./getDataflowProfile";
export const getDataflowProfile: typeof import("./getDataflowProfile").getDataflowProfile = null as any;
export const getDataflowProfileOutput: typeof import("./getDataflowProfile").getDataflowProfileOutput = null as any;
utilities.lazyLoad(exports, ["getDataflowProfile","getDataflowProfileOutput"], () => require("./getDataflowProfile"));

export { GetInstanceArgs, GetInstanceResult, GetInstanceOutputArgs } from "./getInstance";
export const getInstance: typeof import("./getInstance").getInstance = null as any;
export const getInstanceOutput: typeof import("./getInstance").getInstanceOutput = null as any;
utilities.lazyLoad(exports, ["getInstance","getInstanceOutput"], () => require("./getInstance"));

export { InstanceArgs } from "./instance";
export type Instance = import("./instance").Instance;
export const Instance: typeof import("./instance").Instance = null as any;
utilities.lazyLoad(exports, ["Instance"], () => require("./instance"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:iotoperations:Broker":
                return new Broker(name, <any>undefined, { urn })
            case "azure-native:iotoperations:BrokerAuthentication":
                return new BrokerAuthentication(name, <any>undefined, { urn })
            case "azure-native:iotoperations:BrokerAuthorization":
                return new BrokerAuthorization(name, <any>undefined, { urn })
            case "azure-native:iotoperations:BrokerListener":
                return new BrokerListener(name, <any>undefined, { urn })
            case "azure-native:iotoperations:Dataflow":
                return new Dataflow(name, <any>undefined, { urn })
            case "azure-native:iotoperations:DataflowEndpoint":
                return new DataflowEndpoint(name, <any>undefined, { urn })
            case "azure-native:iotoperations:DataflowProfile":
                return new DataflowProfile(name, <any>undefined, { urn })
            case "azure-native:iotoperations:Instance":
                return new Instance(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "iotoperations", _module)