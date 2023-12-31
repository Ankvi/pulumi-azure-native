import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Export logs that show Api requests made by this subscription in the given time window to show throttling activities.
 */
export function getLogAnalyticExportRequestRateByInterval(args: GetLogAnalyticExportRequestRateByIntervalArgs, opts?: pulumi.InvokeOptions): Promise<GetLogAnalyticExportRequestRateByIntervalResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:compute/v20230301:getLogAnalyticExportRequestRateByInterval", {
        "blobContainerSasUri": args.blobContainerSasUri,
        "fromTime": args.fromTime,
        "groupByClientApplicationId": args.groupByClientApplicationId,
        "groupByOperationName": args.groupByOperationName,
        "groupByResourceName": args.groupByResourceName,
        "groupByThrottlePolicy": args.groupByThrottlePolicy,
        "groupByUserAgent": args.groupByUserAgent,
        "intervalLength": args.intervalLength,
        "location": args.location,
        "toTime": args.toTime,
    }, opts);
}

export interface GetLogAnalyticExportRequestRateByIntervalArgs {
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
     * Interval value in minutes used to create LogAnalytics call rate logs.
     */
    intervalLength: types.enums.IntervalInMins;
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
export interface GetLogAnalyticExportRequestRateByIntervalResult {
    /**
     * LogAnalyticsOutput
     */
    readonly properties: types.outputs.LogAnalyticsOutputResponse;
}
/**
 * Export logs that show Api requests made by this subscription in the given time window to show throttling activities.
 */
export function getLogAnalyticExportRequestRateByIntervalOutput(args: GetLogAnalyticExportRequestRateByIntervalOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLogAnalyticExportRequestRateByIntervalResult> {
    return pulumi.output(args).apply((a: any) => getLogAnalyticExportRequestRateByInterval(a, opts))
}

export interface GetLogAnalyticExportRequestRateByIntervalOutputArgs {
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
     * Interval value in minutes used to create LogAnalytics call rate logs.
     */
    intervalLength: pulumi.Input<types.enums.IntervalInMins>;
    /**
     * The location upon which virtual-machine-sizes is queried.
     */
    location: pulumi.Input<string>;
    /**
     * To time of the query
     */
    toTime: pulumi.Input<string>;
}
