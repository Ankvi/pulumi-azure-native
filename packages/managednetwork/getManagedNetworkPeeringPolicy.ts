import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The Get ManagedNetworkPeeringPolicies operation gets a Managed Network Peering Policy resource, specified by the  resource group, Managed Network name, and peering policy name
 * Azure REST API version: 2019-06-01-preview.
 */
export function getManagedNetworkPeeringPolicy(args: GetManagedNetworkPeeringPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetManagedNetworkPeeringPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:managednetwork:getManagedNetworkPeeringPolicy", {
        "managedNetworkName": args.managedNetworkName,
        "managedNetworkPeeringPolicyName": args.managedNetworkPeeringPolicyName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetManagedNetworkPeeringPolicyArgs {
    /**
     * The name of the Managed Network.
     */
    managedNetworkName: string;
    /**
     * The name of the Managed Network Peering Policy.
     */
    managedNetworkPeeringPolicyName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * The Managed Network Peering Policy resource
 */
export interface GetManagedNetworkPeeringPolicyResult {
    /**
     * Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Gets or sets the properties of a Managed Network Policy
     */
    readonly properties: types.outputs.ManagedNetworkPeeringPolicyPropertiesResponse;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
}
/**
 * The Get ManagedNetworkPeeringPolicies operation gets a Managed Network Peering Policy resource, specified by the  resource group, Managed Network name, and peering policy name
 * Azure REST API version: 2019-06-01-preview.
 */
export function getManagedNetworkPeeringPolicyOutput(args: GetManagedNetworkPeeringPolicyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetManagedNetworkPeeringPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:managednetwork:getManagedNetworkPeeringPolicy", {
        "managedNetworkName": args.managedNetworkName,
        "managedNetworkPeeringPolicyName": args.managedNetworkPeeringPolicyName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetManagedNetworkPeeringPolicyOutputArgs {
    /**
     * The name of the Managed Network.
     */
    managedNetworkName: pulumi.Input<string>;
    /**
     * The name of the Managed Network Peering Policy.
     */
    managedNetworkPeeringPolicyName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}