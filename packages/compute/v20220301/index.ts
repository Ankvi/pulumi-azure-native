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


// Export enums:
export * from "../types/enums/v20220301";
