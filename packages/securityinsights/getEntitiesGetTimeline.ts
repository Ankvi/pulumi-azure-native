import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Timeline for an entity.
 * Azure REST API version: 2023-06-01-preview.
 *
 * Other available API versions: 2019-01-01-preview, 2021-09-01-preview, 2021-10-01-preview, 2022-01-01-preview, 2022-04-01-preview, 2022-05-01-preview, 2022-06-01-preview, 2022-07-01-preview, 2022-08-01-preview, 2022-09-01-preview, 2022-10-01-preview, 2022-11-01-preview, 2022-12-01-preview, 2023-02-01-preview, 2023-03-01-preview, 2023-04-01-preview, 2023-05-01-preview, 2023-07-01-preview, 2023-08-01-preview, 2023-09-01-preview, 2023-10-01-preview, 2023-12-01-preview.
 */
export function getEntitiesGetTimeline(args: GetEntitiesGetTimelineArgs, opts?: pulumi.InvokeOptions): Promise<GetEntitiesGetTimelineResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights:getEntitiesGetTimeline", {
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
    kinds?: (string | types.enums.EntityTimelineKind)[];
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
    readonly metaData?: types.outputs.TimelineResultsMetadataResponse;
    /**
     * The timeline result values.
     */
    readonly value?: (types.outputs.ActivityTimelineItemResponse | types.outputs.AnomalyTimelineItemResponse | types.outputs.BookmarkTimelineItemResponse | types.outputs.SecurityAlertTimelineItemResponse)[];
}
/**
 * Timeline for an entity.
 * Azure REST API version: 2023-06-01-preview.
 *
 * Other available API versions: 2019-01-01-preview, 2021-09-01-preview, 2021-10-01-preview, 2022-01-01-preview, 2022-04-01-preview, 2022-05-01-preview, 2022-06-01-preview, 2022-07-01-preview, 2022-08-01-preview, 2022-09-01-preview, 2022-10-01-preview, 2022-11-01-preview, 2022-12-01-preview, 2023-02-01-preview, 2023-03-01-preview, 2023-04-01-preview, 2023-05-01-preview, 2023-07-01-preview, 2023-08-01-preview, 2023-09-01-preview, 2023-10-01-preview, 2023-12-01-preview.
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
    kinds?: pulumi.Input<pulumi.Input<string | types.enums.EntityTimelineKind>[]>;
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