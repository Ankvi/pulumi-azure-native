import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Execute Insights for an entity.
 */
export function getEntityInsights(args: GetEntityInsightsArgs, opts?: pulumi.InvokeOptions): Promise<GetEntityInsightsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights/v20230801preview:getEntityInsights", {
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