import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Configuration information or intent on which to do the analysis on.
 * Azure REST API version: 2024-01-01-preview.
 */
export function getReachabilityAnalysisIntent(args: GetReachabilityAnalysisIntentArgs, opts?: pulumi.InvokeOptions): Promise<GetReachabilityAnalysisIntentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getReachabilityAnalysisIntent", {
        "networkManagerName": args.networkManagerName,
        "reachabilityAnalysisIntentName": args.reachabilityAnalysisIntentName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetReachabilityAnalysisIntentArgs {
    /**
     * The name of the network manager.
     */
    networkManagerName: string;
    /**
     * Reachability Analysis Intent name.
     */
    reachabilityAnalysisIntentName: string;
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
 * Configuration information or intent on which to do the analysis on.
 */
export interface GetReachabilityAnalysisIntentResult {
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Represents the Reachability Analysis Intent properties.
     */
    readonly properties: types.outputs.ReachabilityAnalysisIntentPropertiesResponse;
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
 * Configuration information or intent on which to do the analysis on.
 * Azure REST API version: 2024-01-01-preview.
 */
export function getReachabilityAnalysisIntentOutput(args: GetReachabilityAnalysisIntentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetReachabilityAnalysisIntentResult> {
    return pulumi.output(args).apply((a: any) => getReachabilityAnalysisIntent(a, opts))
}

export interface GetReachabilityAnalysisIntentOutputArgs {
    /**
     * The name of the network manager.
     */
    networkManagerName: pulumi.Input<string>;
    /**
     * Reachability Analysis Intent name.
     */
    reachabilityAnalysisIntentName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Workspace name.
     */
    workspaceName: pulumi.Input<string>;
}