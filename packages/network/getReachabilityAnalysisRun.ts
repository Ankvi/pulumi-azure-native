import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Configuration information for analysis run.
 * Azure REST API version: 2024-01-01-preview.
 *
 * Other available API versions: 2024-05-01.
 */
export function getReachabilityAnalysisRun(args: GetReachabilityAnalysisRunArgs, opts?: pulumi.InvokeOptions): Promise<GetReachabilityAnalysisRunResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getReachabilityAnalysisRun", {
        "networkManagerName": args.networkManagerName,
        "reachabilityAnalysisRunName": args.reachabilityAnalysisRunName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetReachabilityAnalysisRunArgs {
    /**
     * The name of the network manager.
     */
    networkManagerName: string;
    /**
     * Reachability Analysis Run name.
     */
    reachabilityAnalysisRunName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * Workspace name.
     */
    workspaceName: string;
}

/**
 * Configuration information for analysis run.
 */
export interface GetReachabilityAnalysisRunResult {
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Represents the Reachability Analysis Run properties.
     */
    readonly properties: types.outputs.ReachabilityAnalysisRunPropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Configuration information for analysis run.
 * Azure REST API version: 2024-01-01-preview.
 *
 * Other available API versions: 2024-05-01.
 */
export function getReachabilityAnalysisRunOutput(args: GetReachabilityAnalysisRunOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetReachabilityAnalysisRunResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getReachabilityAnalysisRun", {
        "networkManagerName": args.networkManagerName,
        "reachabilityAnalysisRunName": args.reachabilityAnalysisRunName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetReachabilityAnalysisRunOutputArgs {
    /**
     * The name of the network manager.
     */
    networkManagerName: pulumi.Input<string>;
    /**
     * Reachability Analysis Run name.
     */
    reachabilityAnalysisRunName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Workspace name.
     */
    workspaceName: pulumi.Input<string>;
}