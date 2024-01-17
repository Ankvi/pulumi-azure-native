import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetProviderInstanceArgs, GetProviderInstanceResult, GetProviderInstanceOutputArgs } from "./getProviderInstance";
export const getProviderInstance: typeof import("./getProviderInstance").getProviderInstance = null as any;
export const getProviderInstanceOutput: typeof import("./getProviderInstance").getProviderInstanceOutput = null as any;
utilities.lazyLoad(exports, ["getProviderInstance","getProviderInstanceOutput"], () => require("./getProviderInstance"));

export { GetSapMonitorArgs, GetSapMonitorResult, GetSapMonitorOutputArgs } from "./getSapMonitor";
export const getSapMonitor: typeof import("./getSapMonitor").getSapMonitor = null as any;
export const getSapMonitorOutput: typeof import("./getSapMonitor").getSapMonitorOutput = null as any;
utilities.lazyLoad(exports, ["getSapMonitor","getSapMonitorOutput"], () => require("./getSapMonitor"));

export { ProviderInstanceArgs } from "./providerInstance";
export type ProviderInstance = import("./providerInstance").ProviderInstance;
export const ProviderInstance: typeof import("./providerInstance").ProviderInstance = null as any;
utilities.lazyLoad(exports, ["ProviderInstance"], () => require("./providerInstance"));

export { SapMonitorArgs } from "./sapMonitor";
export type SapMonitor = import("./sapMonitor").SapMonitor;
export const SapMonitor: typeof import("./sapMonitor").SapMonitor = null as any;
utilities.lazyLoad(exports, ["SapMonitor"], () => require("./sapMonitor"));




const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:hanaonazure:ProviderInstance":
                return new ProviderInstance(name, <any>undefined, { urn })
            case "azure-native:hanaonazure:SapMonitor":
                return new SapMonitor(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "hanaonazure", _module)