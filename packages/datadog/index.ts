import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetMonitorArgs, GetMonitorResult, GetMonitorOutputArgs } from "./getMonitor";
export const getMonitor: typeof import("./getMonitor").getMonitor = null as any;
export const getMonitorOutput: typeof import("./getMonitor").getMonitorOutput = null as any;
utilities.lazyLoad(exports, ["getMonitor","getMonitorOutput"], () => require("./getMonitor"));

export { GetMonitorDefaultKeyArgs, GetMonitorDefaultKeyResult, GetMonitorDefaultKeyOutputArgs } from "./getMonitorDefaultKey";
export const getMonitorDefaultKey: typeof import("./getMonitorDefaultKey").getMonitorDefaultKey = null as any;
export const getMonitorDefaultKeyOutput: typeof import("./getMonitorDefaultKey").getMonitorDefaultKeyOutput = null as any;
utilities.lazyLoad(exports, ["getMonitorDefaultKey","getMonitorDefaultKeyOutput"], () => require("./getMonitorDefaultKey"));

export { ListMonitorApiKeysArgs, ListMonitorApiKeysResult, ListMonitorApiKeysOutputArgs } from "./listMonitorApiKeys";
export const listMonitorApiKeys: typeof import("./listMonitorApiKeys").listMonitorApiKeys = null as any;
export const listMonitorApiKeysOutput: typeof import("./listMonitorApiKeys").listMonitorApiKeysOutput = null as any;
utilities.lazyLoad(exports, ["listMonitorApiKeys","listMonitorApiKeysOutput"], () => require("./listMonitorApiKeys"));

export { ListMonitorHostsArgs, ListMonitorHostsResult, ListMonitorHostsOutputArgs } from "./listMonitorHosts";
export const listMonitorHosts: typeof import("./listMonitorHosts").listMonitorHosts = null as any;
export const listMonitorHostsOutput: typeof import("./listMonitorHosts").listMonitorHostsOutput = null as any;
utilities.lazyLoad(exports, ["listMonitorHosts","listMonitorHostsOutput"], () => require("./listMonitorHosts"));

export { ListMonitorLinkedResourcesArgs, ListMonitorLinkedResourcesResult, ListMonitorLinkedResourcesOutputArgs } from "./listMonitorLinkedResources";
export const listMonitorLinkedResources: typeof import("./listMonitorLinkedResources").listMonitorLinkedResources = null as any;
export const listMonitorLinkedResourcesOutput: typeof import("./listMonitorLinkedResources").listMonitorLinkedResourcesOutput = null as any;
utilities.lazyLoad(exports, ["listMonitorLinkedResources","listMonitorLinkedResourcesOutput"], () => require("./listMonitorLinkedResources"));

export { ListMonitorMonitoredResourcesArgs, ListMonitorMonitoredResourcesResult, ListMonitorMonitoredResourcesOutputArgs } from "./listMonitorMonitoredResources";
export const listMonitorMonitoredResources: typeof import("./listMonitorMonitoredResources").listMonitorMonitoredResources = null as any;
export const listMonitorMonitoredResourcesOutput: typeof import("./listMonitorMonitoredResources").listMonitorMonitoredResourcesOutput = null as any;
utilities.lazyLoad(exports, ["listMonitorMonitoredResources","listMonitorMonitoredResourcesOutput"], () => require("./listMonitorMonitoredResources"));

export { MonitorArgs } from "./monitor";
export type Monitor = import("./monitor").Monitor;
export const Monitor: typeof import("./monitor").Monitor = null as any;
utilities.lazyLoad(exports, ["Monitor"], () => require("./monitor"));


// Export enums:
export * from "./types/enums";

// Export sub-modules:
import * as v20220601 from "./v20220601";

export {
    v20220601,
};

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:datadog:Monitor":
                return new Monitor(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "datadog", _module)
