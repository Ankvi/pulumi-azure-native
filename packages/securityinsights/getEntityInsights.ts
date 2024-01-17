import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Execute Insights for an entity.
 * Azure REST API version: 2023-06-01-preview.
 *
 * Other available API versions: 2019-01-01-preview, 2021-09-01-preview, 2021-10-01-preview, 2022-01-01-preview, 2022-04-01-preview, 2022-05-01-preview, 2022-06-01-preview, 2022-07-01-preview, 2022-08-01-preview, 2022-09-01-preview, 2022-10-01-preview, 2022-11-01-preview, 2022-12-01-preview, 2023-02-01-preview, 2023-03-01-preview, 2023-04-01-preview, 2023-05-01-preview, 2023-07-01-preview, 2023-08-01-preview, 2023-09-01-preview, 2023-10-01-preview.
 */
export function getEntityInsights(args: GetEntityInsightsArgs, opts?: pulumi.InvokeOptions): Promise<GetEntityInsightsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights:getEntityInsights", {
        "addDefaultExtendedTimeRange": args.addDefaultExtendedTimeRange,
        "endTime": args.endTime,
        "entityId": args.entityId,
        "insightQueryIds": args.insightQueryIds,
        "resourceGroupName": args.resourceGroupName,
        "startTime": args.startTime,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetEntityInsightsArgs {
    /**
     * Indicates if query time range should be extended with default time range of the query. Default value is false
     */
    addDefaultExtendedTimeRange?: boolean;
    /**
     * The end timeline date, so the results returned are before this date.
     */
    endTime: string;
    /**
     * entity ID
     */
    entityId: string;
    /**
     * List of Insights Query Id. If empty, default value is all insights of this entity
     */
    insightQueryIds?: string[];
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
 * The Get Insights result operation response.
 */
export interface GetEntityInsightsResult {
    /**
     * The metadata from the get insights operation results.
     */
    readonly metaData?: types.outputs.GetInsightsResultsMetadataResponse;
    /**
     * The insights result values.
     */
    readonly value?: types.outputs.EntityInsightItemResponse[];
}
/**
 * Execute Insights for an entity.
 * Azure REST API version: 2023-06-01-preview.
 *
 * Other available API versions: 2019-01-01-preview, 2021-09-01-preview, 2021-10-01-preview, 2022-01-01-preview, 2022-04-01-preview, 2022-05-01-preview, 2022-06-01-preview, 2022-07-01-preview, 2022-08-01-preview, 2022-09-01-preview, 2022-10-01-preview, 2022-11-01-preview, 2022-12-01-preview, 2023-02-01-preview, 2023-03-01-preview, 2023-04-01-preview, 2023-05-01-preview, 2023-07-01-preview, 2023-08-01-preview, 2023-09-01-preview, 2023-10-01-preview.
 */
export function getEntityInsightsOutput(args: GetEntityInsightsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEntityInsightsResult> {
    return pulumi.output(args).apply((a: any) => getEntityInsights(a, opts))
}

export interface GetEntityInsightsOutputArgs {
    /**
     * Indicates if query time range should be extended with default time range of the query. Default value is false
     */
    addDefaultExtendedTimeRange?: pulumi.Input<boolean>;
    /**
     * The end timeline date, so the results returned are before this date.
     */
    endTime: pulumi.Input<string>;
    /**
     * entity ID
     */
    entityId: pulumi.Input<string>;
    /**
     * List of Insights Query Id. If empty, default value is all insights of this entity
     */
    insightQueryIds?: pulumi.Input<pulumi.Input<string>[]>;
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