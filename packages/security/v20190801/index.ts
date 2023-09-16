import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { DeviceSecurityGroupArgs } from "./deviceSecurityGroup";
export type DeviceSecurityGroup = import("./deviceSecurityGroup").DeviceSecurityGroup;
export const DeviceSecurityGroup: typeof import("./deviceSecurityGroup").DeviceSecurityGroup = null as any;
utilities.lazyLoad(exports, ["DeviceSecurityGroup"], () => require("./deviceSecurityGroup"));

export { GetDeviceSecurityGroupArgs, GetDeviceSecurityGroupResult, GetDeviceSecurityGroupOutputArgs } from "./getDeviceSecurityGroup";
export const getDeviceSecurityGroup: typeof import("./getDeviceSecurityGroup").getDeviceSecurityGroup = null as any;
export const getDeviceSecurityGroupOutput: typeof import("./getDeviceSecurityGroup").getDeviceSecurityGroupOutput = null as any;
utilities.lazyLoad(exports, ["getDeviceSecurityGroup","getDeviceSecurityGroupOutput"], () => require("./getDeviceSecurityGroup"));

export { GetIotSecuritySolutionArgs, GetIotSecuritySolutionResult, GetIotSecuritySolutionOutputArgs } from "./getIotSecuritySolution";
export const getIotSecuritySolution: typeof import("./getIotSecuritySolution").getIotSecuritySolution = null as any;
export const getIotSecuritySolutionOutput: typeof import("./getIotSecuritySolution").getIotSecuritySolutionOutput = null as any;
utilities.lazyLoad(exports, ["getIotSecuritySolution","getIotSecuritySolutionOutput"], () => require("./getIotSecuritySolution"));

export { IotSecuritySolutionArgs } from "./iotSecuritySolution";
export type IotSecuritySolution = import("./iotSecuritySolution").IotSecuritySolution;
export const IotSecuritySolution: typeof import("./iotSecuritySolution").IotSecuritySolution = null as any;
utilities.lazyLoad(exports, ["IotSecuritySolution"], () => require("./iotSecuritySolution"));


// Export enums:
export * from "../types/enums/v20190801";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:security/v20190801:DeviceSecurityGroup":
                return new DeviceSecurityGroup(name, <any>undefined, { urn })
            case "azure-native:security/v20190801:IotSecuritySolution":
                return new IotSecuritySolution(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "security/v20190801", _module)
