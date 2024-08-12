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

export { DataFlowArgs } from "./dataFlow";
export type DataFlow = import("./dataFlow").DataFlow;
export const DataFlow: typeof import("./dataFlow").DataFlow = null as any;
utilities.lazyLoad(exports, ["DataFlow"], () => require("./dataFlow"));

export { DataFlowEndpointArgs } from "./dataFlowEndpoint";
export type DataFlowEndpoint = import("./dataFlowEndpoint").DataFlowEndpoint;
export const DataFlowEndpoint: typeof import("./dataFlowEndpoint").DataFlowEndpoint = null as any;
utilities.lazyLoad(exports, ["DataFlowEndpoint"], () => require("./dataFlowEndpoint"));

export { DataFlowProfileArgs } from "./dataFlowProfile";
export type DataFlowProfile = import("./dataFlowProfile").DataFlowProfile;
export const DataFlowProfile: typeof import("./dataFlowProfile").DataFlowProfile = null as any;
utilities.lazyLoad(exports, ["DataFlowProfile"], () => require("./dataFlowProfile"));

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

export { GetDataFlowArgs, GetDataFlowResult, GetDataFlowOutputArgs } from "./getDataFlow";
export const getDataFlow: typeof import("./getDataFlow").getDataFlow = null as any;
export const getDataFlowOutput: typeof import("./getDataFlow").getDataFlowOutput = null as any;
utilities.lazyLoad(exports, ["getDataFlow","getDataFlowOutput"], () => require("./getDataFlow"));

export { GetDataFlowEndpointArgs, GetDataFlowEndpointResult, GetDataFlowEndpointOutputArgs } from "./getDataFlowEndpoint";
export const getDataFlowEndpoint: typeof import("./getDataFlowEndpoint").getDataFlowEndpoint = null as any;
export const getDataFlowEndpointOutput: typeof import("./getDataFlowEndpoint").getDataFlowEndpointOutput = null as any;
utilities.lazyLoad(exports, ["getDataFlowEndpoint","getDataFlowEndpointOutput"], () => require("./getDataFlowEndpoint"));

export { GetDataFlowProfileArgs, GetDataFlowProfileResult, GetDataFlowProfileOutputArgs } from "./getDataFlowProfile";
export const getDataFlowProfile: typeof import("./getDataFlowProfile").getDataFlowProfile = null as any;
export const getDataFlowProfileOutput: typeof import("./getDataFlowProfile").getDataFlowProfileOutput = null as any;
utilities.lazyLoad(exports, ["getDataFlowProfile","getDataFlowProfileOutput"], () => require("./getDataFlowProfile"));

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
            case "azure-native:iotoperations:DataFlow":
                return new DataFlow(name, <any>undefined, { urn })
            case "azure-native:iotoperations:DataFlowEndpoint":
                return new DataFlowEndpoint(name, <any>undefined, { urn })
            case "azure-native:iotoperations:DataFlowProfile":
                return new DataFlowProfile(name, <any>undefined, { urn })
            case "azure-native:iotoperations:Instance":
                return new Instance(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "iotoperations", _module)