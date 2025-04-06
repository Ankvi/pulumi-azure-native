import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The Get ManagedNetworks operation gets a Managed Network Resource, specified by the resource group and Managed Network name
 *
 * Uses Azure REST API version 2019-06-01-preview.
 */
export function getManagedNetwork(args: GetManagedNetworkArgs, opts?: pulumi.InvokeOptions): Promise<GetManagedNetworkResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:managednetwork:getManagedNetwork", {
        "managedNetworkName": args.managedNetworkName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetManagedNetworkArgs {
    /**
     * The name of the Managed Network.
     */
    managedNetworkName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * The Managed Network resource
 */
export interface GetManagedNetworkResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The collection of groups and policies concerned with connectivity
     */
    readonly connectivity: types.outputs.ConnectivityCollectionResponse;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
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
     * Provisioning state of the ManagedNetwork resource.
     */
    readonly provisioningState: string;
    /**
     * The collection of management groups, subscriptions, virtual networks, and subnets by the Managed Network. This is a read-only property that is reflective of all ScopeAssignments for this Managed Network
     */
    readonly scope?: types.outputs.ScopeResponse;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
}
/**
 * The Get ManagedNetworks operation gets a Managed Network Resource, specified by the resource group and Managed Network name
 *
 * Uses Azure REST API version 2019-06-01-preview.
 */
export function getManagedNetworkOutput(args: GetManagedNetworkOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetManagedNetworkResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:managednetwork:getManagedNetwork", {
        "managedNetworkName": args.managedNetworkName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetManagedNetworkOutputArgs {
    /**
     * The name of the Managed Network.
     */
    managedNetworkName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}