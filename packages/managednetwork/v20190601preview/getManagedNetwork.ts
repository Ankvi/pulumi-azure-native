import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The Get ManagedNetworks operation gets a Managed Network Resource, specified by the resource group and Managed Network name
 */
export function getManagedNetwork(args: GetManagedNetworkArgs, opts?: pulumi.InvokeOptions): Promise<GetManagedNetworkResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:managednetwork/v20190601preview:getManagedNetwork", {
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
 */
export function getManagedNetworkOutput(args: GetManagedNetworkOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagedNetworkResult> {
    return pulumi.output(args).apply((a: any) => getManagedNetwork(a, opts))
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
