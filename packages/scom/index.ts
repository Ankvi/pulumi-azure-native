import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetInstanceArgs, GetInstanceResult, GetInstanceOutputArgs } from "./getInstance";
export const getInstance: typeof import("./getInstance").getInstance = null as any;
export const getInstanceOutput: typeof import("./getInstance").getInstanceOutput = null as any;
utilities.lazyLoad(exports, ["getInstance","getInstanceOutput"], () => require("./getInstance"));

export { GetManagedGatewayArgs, GetManagedGatewayResult, GetManagedGatewayOutputArgs } from "./getManagedGateway";
export const getManagedGateway: typeof import("./getManagedGateway").getManagedGateway = null as any;
export const getManagedGatewayOutput: typeof import("./getManagedGateway").getManagedGatewayOutput = null as any;
utilities.lazyLoad(exports, ["getManagedGateway","getManagedGatewayOutput"], () => require("./getManagedGateway"));

export { GetMonitoredResourceArgs, GetMonitoredResourceResult, GetMonitoredResourceOutputArgs } from "./getMonitoredResource";
export const getMonitoredResource: typeof import("./getMonitoredResource").getMonitoredResource = null as any;
export const getMonitoredResourceOutput: typeof import("./getMonitoredResource").getMonitoredResourceOutput = null as any;
utilities.lazyLoad(exports, ["getMonitoredResource","getMonitoredResourceOutput"], () => require("./getMonitoredResource"));

export { InstanceArgs } from "./instance";
export type Instance = import("./instance").Instance;
export const Instance: typeof import("./instance").Instance = null as any;
utilities.lazyLoad(exports, ["Instance"], () => require("./instance"));

export { ManagedGatewayArgs } from "./managedGateway";
export type ManagedGateway = import("./managedGateway").ManagedGateway;
export const ManagedGateway: typeof import("./managedGateway").ManagedGateway = null as any;
utilities.lazyLoad(exports, ["ManagedGateway"], () => require("./managedGateway"));

export { MonitoredResourceArgs } from "./monitoredResource";
export type MonitoredResource = import("./monitoredResource").MonitoredResource;
export const MonitoredResource: typeof import("./monitoredResource").MonitoredResource = null as any;
utilities.lazyLoad(exports, ["MonitoredResource"], () => require("./monitoredResource"));


// Export enums:
export * from "./types/enums";



const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:scom:Instance":
                return new Instance(name, <any>undefined, { urn })
            case "azure-native:scom:ManagedGateway":
                return new ManagedGateway(name, <any>undefined, { urn })
            case "azure-native:scom:MonitoredResource":
                return new MonitoredResource(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "scom", _module)