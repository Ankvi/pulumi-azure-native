import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A vSphere Distributed Resource Scheduler (DRS) placement policy
 *
 * Uses Azure REST API version 2022-05-01.
 *
 * Other available API versions: 2023-03-01, 2023-09-01.
 */
export function getPlacementPolicy(args: GetPlacementPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetPlacementPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:avs:getPlacementPolicy", {
        "clusterName": args.clusterName,
        "placementPolicyName": args.placementPolicyName,
        "privateCloudName": args.privateCloudName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPlacementPolicyArgs {
    /**
     * Name of the cluster in the private cloud
     */
    clusterName: string;
    /**
     * Name of the VMware vSphere Distributed Resource Scheduler (DRS) placement policy
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
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * placement policy properties
     */
    readonly properties: types.outputs.VmHostPlacementPolicyPropertiesResponse | types.outputs.VmVmPlacementPolicyPropertiesResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * A vSphere Distributed Resource Scheduler (DRS) placement policy
 *
 * Uses Azure REST API version 2022-05-01.
 *
 * Other available API versions: 2023-03-01, 2023-09-01.
 */
export function getPlacementPolicyOutput(args: GetPlacementPolicyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPlacementPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:avs:getPlacementPolicy", {
        "clusterName": args.clusterName,
        "placementPolicyName": args.placementPolicyName,
        "privateCloudName": args.privateCloudName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPlacementPolicyOutputArgs {
    /**
     * Name of the cluster in the private cloud
     */
    clusterName: pulumi.Input<string>;
    /**
     * Name of the VMware vSphere Distributed Resource Scheduler (DRS) placement policy
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