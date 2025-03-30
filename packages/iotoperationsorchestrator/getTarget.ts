import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Target
 *
 * Uses Azure REST API version 2023-10-04-preview.
 */
export function getTarget(args: GetTargetArgs, opts?: pulumi.InvokeOptions): Promise<GetTargetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:iotoperationsorchestrator:getTarget", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetTargetArgs {
    /**
     * Name of target.
     */
    name: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A Target resource belonging to an Instance resource.
 */
export interface GetTargetResult {
    /**
     * A list of components.
     */
    readonly components?: types.outputs.ComponentPropertiesResponse[];
    /**
     * Edge location of the resource.
     */
    readonly extendedLocation: types.outputs.ExtendedLocationResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The status of the last operation.
     */
    readonly provisioningState: string;
    /**
     * Reconciliation Policy.
     */
    readonly reconciliationPolicy?: types.outputs.ReconciliationPolicyResponse;
    /**
     * Deployment scope (such as Kubernetes namespace).
     */
    readonly scope?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Defines the device topology for a target or instance.
     */
    readonly topologies?: types.outputs.TopologiesPropertiesResponse[];
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Version of the particular resource.
     */
    readonly version?: string;
}
/**
 * Get a Target
 *
 * Uses Azure REST API version 2023-10-04-preview.
 */
export function getTargetOutput(args: GetTargetOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetTargetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:iotoperationsorchestrator:getTarget", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetTargetOutputArgs {
    /**
     * Name of target.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}