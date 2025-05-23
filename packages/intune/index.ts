import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AndroidMAMPolicyByNameArgs } from "./androidMAMPolicyByName";
export type AndroidMAMPolicyByName = import("./androidMAMPolicyByName").AndroidMAMPolicyByName;
export const AndroidMAMPolicyByName: typeof import("./androidMAMPolicyByName").AndroidMAMPolicyByName = null as any;
utilities.lazyLoad(exports, ["AndroidMAMPolicyByName"], () => require("./androidMAMPolicyByName"));

export { GetAndroidMAMPolicyByNameArgs, GetAndroidMAMPolicyByNameResult, GetAndroidMAMPolicyByNameOutputArgs } from "./getAndroidMAMPolicyByName";
export const getAndroidMAMPolicyByName: typeof import("./getAndroidMAMPolicyByName").getAndroidMAMPolicyByName = null as any;
export const getAndroidMAMPolicyByNameOutput: typeof import("./getAndroidMAMPolicyByName").getAndroidMAMPolicyByNameOutput = null as any;
utilities.lazyLoad(exports, ["getAndroidMAMPolicyByName","getAndroidMAMPolicyByNameOutput"], () => require("./getAndroidMAMPolicyByName"));

export { GetIoMAMPolicyByNameArgs, GetIoMAMPolicyByNameResult, GetIoMAMPolicyByNameOutputArgs } from "./getIoMAMPolicyByName";
export const getIoMAMPolicyByName: typeof import("./getIoMAMPolicyByName").getIoMAMPolicyByName = null as any;
export const getIoMAMPolicyByNameOutput: typeof import("./getIoMAMPolicyByName").getIoMAMPolicyByNameOutput = null as any;
utilities.lazyLoad(exports, ["getIoMAMPolicyByName","getIoMAMPolicyByNameOutput"], () => require("./getIoMAMPolicyByName"));

export { IoMAMPolicyByNameArgs } from "./ioMAMPolicyByName";
export type IoMAMPolicyByName = import("./ioMAMPolicyByName").IoMAMPolicyByName;
export const IoMAMPolicyByName: typeof import("./ioMAMPolicyByName").IoMAMPolicyByName = null as any;
utilities.lazyLoad(exports, ["IoMAMPolicyByName"], () => require("./ioMAMPolicyByName"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:intune:AndroidMAMPolicyByName":
                return new AndroidMAMPolicyByName(name, <any>undefined, { urn })
            case "azure-native:intune:IoMAMPolicyByName":
                return new IoMAMPolicyByName(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "intune", _module)