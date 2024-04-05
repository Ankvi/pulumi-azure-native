import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a PlacementPolicy
 */
export function getPlacementPolicy(args: GetPlacementPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetPlacementPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:avs/v20230901:getPlacementPolicy", {
        "clusterName": args.clusterName,
        "placementPolicyName": args.placementPolicyName,
        "privateCloudName": args.privateCloudName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPlacementPolicyArgs {
    /**
     * Name of the cluster
     */
    clusterName: string;
    /**
     * Name of the placement policy.
     */
    placementPolicyName: string;
    /**
     * Name of the private cloud
     */
    privateCloudName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A vSphere Distributed Resource Scheduler (DRS) placement policy
 */
export interface GetPlacementPolicyResult {
    /**
     * Display name of the placement policy
     */
    readonly displayName?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state
     */
    readonly provisioningState: string;
    /**
     * Whether the placement policy is enabled or disabled
     */
    readonly state?: string;
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
 * Get a PlacementPolicy
 */
export function getPlacementPolicyOutput(args: GetPlacementPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPlacementPolicyResult> {
    return pulumi.output(args).apply((a: any) => getPlacementPolicy(a, opts))
}

export interface GetPlacementPolicyOutputArgs {
    /**
     * Name of the cluster
     */
    clusterName: pulumi.Input<string>;
    /**
     * Name of the placement policy.
     */
    placementPolicyName: pulumi.Input<string>;
    /**
     * Name of the private cloud
     */
    privateCloudName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}