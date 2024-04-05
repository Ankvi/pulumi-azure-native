import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ConnectionMonitorArgs } from "./connectionMonitor";
export type ConnectionMonitor = import("./connectionMonitor").ConnectionMonitor;
export const ConnectionMonitor: typeof import("./connectionMonitor").ConnectionMonitor = null as any;
utilities.lazyLoad(exports, ["ConnectionMonitor"], () => require("./connectionMonitor"));

export { GetConnectionMonitorArgs, GetConnectionMonitorResult, GetConnectionMonitorOutputArgs } from "./getConnectionMonitor";
export const getConnectionMonitor: typeof import("./getConnectionMonitor").getConnectionMonitor = null as any;
export const getConnectionMonitorOutput: typeof import("./getConnectionMonitor").getConnectionMonitorOutput = null as any;
utilities.lazyLoad(exports, ["getConnectionMonitor","getConnectionMonitorOutput"], () => require("./getConnectionMonitor"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:network/v20190901:ConnectionMonitor":
                return new ConnectionMonitor(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "network/v20190901", _module)