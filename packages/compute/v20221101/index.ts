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

export { RestorePointArgs } from "./restorePoint";
export type RestorePoint = import("./restorePoint").RestorePoint;
export const RestorePoint: typeof import("./restorePoint").RestorePoint = null as any;
utilities.lazyLoad(exports, ["RestorePoint"], () => require("./restorePoint"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:compute/v20221101:RestorePoint":
                return new RestorePoint(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "compute/v20221101", _module)
