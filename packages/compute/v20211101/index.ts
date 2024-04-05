import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetLogAnalyticExportRequestRateByIntervalArgs, GetLogAnalyticExportRequestRateByIntervalResult, GetLogAnalyticExportRequestRateByIntervalOutputArgs } from "./getLogAnalyticExportRequestRateByInterval";
export const getLogAnalyticExportRequestRateByInterval: typeof import("./getLogAnalyticExportRequestRateByInterval").getLogAnalyticExportRequestRateByInterval = null as any;
export const getLogAnalyticExportRequestRateByIntervalOutput: typeof import("./getLogAnalyticExportRequestRateByInterval").getLogAnalyticExportRequestRateByIntervalOutput = null as any;
utilities.lazyLoad(exports, ["getLogAnalyticExportRequestRateByInterval","getLogAnalyticExportRequestRateByIntervalOutput"], () => require("./getLogAnalyticExportRequestRateByInterval"));

export { GetLogAnalyticExportThrottledRequestsArgs, GetLogAnalyticExportThrottledRequestsResult, GetLogAnalyticExportThrottledRequestsOutputArgs } from "./getLogAnalyticExportThrottledRequests";
export const getLogAnalyticExportThrottledRequests: typeof import("./getLogAnalyticExportThrottledRequests").getLogAnalyticExportThrottledRequests = null as any;
export const getLogAnalyticExportThrottledRequestsOutput: typeof import("./getLogAnalyticExportThrottledRequests").getLogAnalyticExportThrottledRequestsOutput = null as any;
utilities.lazyLoad(exports, ["getLogAnalyticExportThrottledRequests","getLogAnalyticExportThrottledRequestsOutput"], () => require("./getLogAnalyticExportThrottledRequests"));

export { GetRestorePointArgs, GetRestorePointResult, GetRestorePointOutputArgs } from "./getRestorePoint";
export const getRestorePoint: typeof import("./getRestorePoint").getRestorePoint = null as any;
export const getRestorePointOutput: typeof import("./getRestorePoint").getRestorePointOutput = null as any;
utilities.lazyLoad(exports, ["getRestorePoint","getRestorePointOutput"], () => require("./getRestorePoint"));

export { GetVirtualMachineExtensionArgs, GetVirtualMachineExtensionResult, GetVirtualMachineExtensionOutputArgs } from "./getVirtualMachineExtension";
export const getVirtualMachineExtension: typeof import("./getVirtualMachineExtension").getVirtualMachineExtension = null as any;
export const getVirtualMachineExtensionOutput: typeof import("./getVirtualMachineExtension").getVirtualMachineExtensionOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualMachineExtension","getVirtualMachineExtensionOutput"], () => require("./getVirtualMachineExtension"));

export { GetVirtualMachineScaleSetExtensionArgs, GetVirtualMachineScaleSetExtensionResult, GetVirtualMachineScaleSetExtensionOutputArgs } from "./getVirtualMachineScaleSetExtension";
export const getVirtualMachineScaleSetExtension: typeof import("./getVirtualMachineScaleSetExtension").getVirtualMachineScaleSetExtension = null as any;
export const getVirtualMachineScaleSetExtensionOutput: typeof import("./getVirtualMachineScaleSetExtension").getVirtualMachineScaleSetExtensionOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualMachineScaleSetExtension","getVirtualMachineScaleSetExtensionOutput"], () => require("./getVirtualMachineScaleSetExtension"));

export { GetVirtualMachineScaleSetVMExtensionArgs, GetVirtualMachineScaleSetVMExtensionResult, GetVirtualMachineScaleSetVMExtensionOutputArgs } from "./getVirtualMachineScaleSetVMExtension";
export const getVirtualMachineScaleSetVMExtension: typeof import("./getVirtualMachineScaleSetVMExtension").getVirtualMachineScaleSetVMExtension = null as any;
export const getVirtualMachineScaleSetVMExtensionOutput: typeof import("./getVirtualMachineScaleSetVMExtension").getVirtualMachineScaleSetVMExtensionOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualMachineScaleSetVMExtension","getVirtualMachineScaleSetVMExtensionOutput"], () => require("./getVirtualMachineScaleSetVMExtension"));

export { RestorePointArgs } from "./restorePoint";
export type RestorePoint = import("./restorePoint").RestorePoint;
export const RestorePoint: typeof import("./restorePoint").RestorePoint = null as any;
utilities.lazyLoad(exports, ["RestorePoint"], () => require("./restorePoint"));

export { VirtualMachineExtensionArgs } from "./virtualMachineExtension";
export type VirtualMachineExtension = import("./virtualMachineExtension").VirtualMachineExtension;
export const VirtualMachineExtension: typeof import("./virtualMachineExtension").VirtualMachineExtension = null as any;
utilities.lazyLoad(exports, ["VirtualMachineExtension"], () => require("./virtualMachineExtension"));

export { VirtualMachineScaleSetExtensionArgs } from "./virtualMachineScaleSetExtension";
export type VirtualMachineScaleSetExtension = import("./virtualMachineScaleSetExtension").VirtualMachineScaleSetExtension;
export const VirtualMachineScaleSetExtension: typeof import("./virtualMachineScaleSetExtension").VirtualMachineScaleSetExtension = null as any;
utilities.lazyLoad(exports, ["VirtualMachineScaleSetExtension"], () => require("./virtualMachineScaleSetExtension"));

export { VirtualMachineScaleSetVMExtensionArgs } from "./virtualMachineScaleSetVMExtension";
export type VirtualMachineScaleSetVMExtension = import("./virtualMachineScaleSetVMExtension").VirtualMachineScaleSetVMExtension;
export const VirtualMachineScaleSetVMExtension: typeof import("./virtualMachineScaleSetVMExtension").VirtualMachineScaleSetVMExtension = null as any;
utilities.lazyLoad(exports, ["VirtualMachineScaleSetVMExtension"], () => require("./virtualMachineScaleSetVMExtension"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:compute/v20211101:RestorePoint":
                return new RestorePoint(name, <any>undefined, { urn })
            case "azure-native:compute/v20211101:VirtualMachineExtension":
                return new VirtualMachineExtension(name, <any>undefined, { urn })
            case "azure-native:compute/v20211101:VirtualMachineScaleSetExtension":
                return new VirtualMachineScaleSetExtension(name, <any>undefined, { urn })
            case "azure-native:compute/v20211101:VirtualMachineScaleSetVMExtension":
                return new VirtualMachineScaleSetVMExtension(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "compute/v20211101", _module)