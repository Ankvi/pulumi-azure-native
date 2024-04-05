import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Export logs that show total throttled Api requests for this subscription in the given time window.
 */
export function getLogAnalyticExportThrottledRequests(args: GetLogAnalyticExportThrottledRequestsArgs, opts?: pulumi.InvokeOptions): Promise<GetLogAnalyticExportThrottledRequestsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:compute/v20211101:getLogAnalyticExportThrottledRequests", {
        "blobContainerSasUri": args.blobContainerSasUri,
        "fromTime": args.fromTime,
        "groupByClientApplicationId": args.groupByClientApplicationId,
        "groupByOperationName": args.groupByOperationName,
        "groupByResourceName": args.groupByResourceName,
        "groupByThrottlePolicy": args.groupByThrottlePolicy,
        "groupByUserAgent": args.groupByUserAgent,
        "location": args.location,
        "toTime": args.toTime,
    }, opts);
}

export interface GetLogAnalyticExportThrottledRequestsArgs {
    /**
     * SAS Uri of the logging blob container to which LogAnalytics Api writes output logs to.
     */
    blobContainerSasUri: string;
    /**
     * From time of the query
     */
    fromTime: string;
    /**
     * Group query result by Client Application ID.
     */
    groupByClientApplicationId?: boolean;
    /**
     * Group query result by Operation Name.
     */
    groupByOperationName?: boolean;
    /**
     * Group query result by Resource Name.
     */
    groupByResourceName?: boolean;
    /**
     * Group query result by Throttle Policy applied.
     */
    groupByThrottlePolicy?: boolean;
    /**
     * Group query result by User Agent.
     */
    groupByUserAgent?: boolean;
    /**
     * The location upon which virtual-machine-sizes is queried.
     */
    location: string;
    /**
     * To time of the query
     */
    toTime: string;
}

/**
 * LogAnalytics operation status response
 */
export interface GetLogAnalyticExportThrottledRequestsResult {
    /**
     * LogAnalyticsOutput
     */
    readonly properties: types.outputs.LogAnalyticsOutputResponse;
}
/**
 * Export logs that show total throttled Api requests for this subscription in the given time window.
 */
export function getLogAnalyticExportThrottledRequestsOutput(args: GetLogAnalyticExportThrottledRequestsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLogAnalyticExportThrottledRequestsResult> {
    return pulumi.output(args).apply((a: any) => getLogAnalyticExportThrottledRequests(a, opts))
}

export interface GetLogAnalyticExportThrottledRequestsOutputArgs {
    /**
     * SAS Uri of the logging blob container to which LogAnalytics Api writes output logs to.
     */
    blobContainerSasUri: pulumi.Input<string>;
    /**
     * From time of the query
     */
    fromTime: pulumi.Input<string>;
    /**
     * Group query result by Client Application ID.
     */
    groupByClientApplicationId?: pulumi.Input<boolean>;
    /**
     * Group query result by Operation Name.
     */
    groupByOperationName?: pulumi.Input<boolean>;
    /**
     * Group query result by Resource Name.
     */
    groupByResourceName?: pulumi.Input<boolean>;
    /**
     * Group query result by Throttle Policy applied.
     */
    groupByThrottlePolicy?: pulumi.Input<boolean>;
    /**
     * Group query result by User Agent.
     */
    groupByUserAgent?: pulumi.Input<boolean>;
    /**
     * The location upon which virtual-machine-sizes is queried.
     */
    location: pulumi.Input<string>;
    /**
     * To time of the query
     */
    toTime: pulumi.Input<string>;
}