import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Timeline for an entity.
 */
export function getEntitiesGetTimeline(args: GetEntitiesGetTimelineArgs, opts?: pulumi.InvokeOptions): Promise<GetEntitiesGetTimelineResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights/v20220701preview:getEntitiesGetTimeline", {
        "endTime": args.endTime,
        "entityId": args.entityId,
        "kinds": args.kinds,
        "numberOfBucket": args.numberOfBucket,
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
    kinds?: (string | types.enums.v20220701preview.EntityTimelineKind)[];
    /**
     * The number of bucket for timeline queries aggregation.
     */
    numberOfBucket?: number;
    /**
     * The name of the resource group. The name is case insensitive.
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
    readonly metaData?: types.outputs.securityinsights.v20220701preview.TimelineResultsMetadataResponse;
    /**
     * The timeline result values.
     */
    readonly value?: (types.outputs.securityinsights.v20220701preview.ActivityTimelineItemResponse | types.outputs.securityinsights.v20220701preview.AnomalyTimelineItemResponse | types.outputs.securityinsights.v20220701preview.BookmarkTimelineItemResponse | types.outputs.securityinsights.v20220701preview.SecurityAlertTimelineItemResponse)[];
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
    kinds?: pulumi.Input<pulumi.Input<string | types.enums.v20220701preview.EntityTimelineKind>[]>;
    /**
     * The number of bucket for timeline queries aggregation.
     */
    numberOfBucket?: pulumi.Input<number>;
    /**
     * The name of the resource group. The name is case insensitive.
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
