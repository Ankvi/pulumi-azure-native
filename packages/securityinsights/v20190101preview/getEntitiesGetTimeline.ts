import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Timeline for an entity.
 */
export function getEntitiesGetTimeline(args: GetEntitiesGetTimelineArgs, opts?: pulumi.InvokeOptions): Promise<GetEntitiesGetTimelineResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights/v20190101preview:getEntitiesGetTimeline", {
        "endTime": args.endTime,
        "entityId": args.entityId,
        "kinds": args.kinds,
        "numberOfBucket": args.numberOfBucket,
        "operationalInsightsResourceProvider": args.operationalInsightsResourceProvider,
        "resourceGroupName": args.resourceGroupName,
        "startTime": args.startTime,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetEntitiesGetTimelineArgs {
    /**
     * The end timeline date, so the results returned are before this date.
     */
    endTime: string;
    /**
     * entity ID
     */
    entityId: string;
    /**
     * Array of timeline Item kinds.
     */
    kinds?: (string | types.enums.v20190101preview.EntityTimelineKind)[];
    /**
     * The number of bucket for timeline queries aggregation.
     */
    numberOfBucket?: number;
    /**
     * The namespace of workspaces resource provider- Microsoft.OperationalInsights.
     */
    operationalInsightsResourceProvider: string;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The start timeline date, so the results returned are after this date.
     */
    startTime: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * The entity timeline result operation response.
 */
export interface GetEntitiesGetTimelineResult {
    /**
     * The metadata from the timeline operation results.
     */
    readonly metaData?: types.outputs.securityinsights.v20190101preview.TimelineResultsMetadataResponse;
    /**
     * The timeline result values.
     */
    readonly value?: (types.outputs.securityinsights.v20190101preview.ActivityTimelineItemResponse | types.outputs.securityinsights.v20190101preview.BookmarkTimelineItemResponse | types.outputs.securityinsights.v20190101preview.SecurityAlertTimelineItemResponse)[];
}
/**
 * Timeline for an entity.
 */
export function getEntitiesGetTimelineOutput(args: GetEntitiesGetTimelineOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEntitiesGetTimelineResult> {
    return pulumi.output(args).apply((a: any) => getEntitiesGetTimeline(a, opts))
}

export interface GetEntitiesGetTimelineOutputArgs {
    /**
     * The end timeline date, so the results returned are before this date.
     */
    endTime: pulumi.Input<string>;
    /**
     * entity ID
     */
    entityId: pulumi.Input<string>;
    /**
     * Array of timeline Item kinds.
     */
    kinds?: pulumi.Input<pulumi.Input<string | types.enums.v20190101preview.EntityTimelineKind>[]>;
    /**
     * The number of bucket for timeline queries aggregation.
     */
    numberOfBucket?: pulumi.Input<number>;
    /**
     * The namespace of workspaces resource provider- Microsoft.OperationalInsights.
     */
    operationalInsightsResourceProvider: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The start timeline date, so the results returned are after this date.
     */
    startTime: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}
