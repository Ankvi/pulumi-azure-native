import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The Get ManagedNetworkGroups operation gets a Managed Network Group specified by the resource group, Managed Network name, and group name
 * Azure REST API version: 2019-06-01-preview.
 */
export function getManagedNetworkGroup(args: GetManagedNetworkGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetManagedNetworkGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:managednetwork:getManagedNetworkGroup", {
        "managedNetworkGroupName": args.managedNetworkGroupName,
        "managedNetworkName": args.managedNetworkName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetManagedNetworkGroupArgs {
    /**
     * The name of the Managed Network Group.
     */
    managedNetworkGroupName: string;
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
 * The Managed Network Group resource
 */
export interface GetManagedNetworkGroupResult {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Responsibility role under which this Managed Network Group will be created
     */
    readonly kind?: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location?: string;
    /**
     * The collection of management groups covered by the Managed Network
     */
    readonly managementGroups?: types.outputs.ResourceIdResponse[];
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Provisioning state of the ManagedNetwork resource.
     */
    readonly provisioningState: string;
    /**
     * The collection of  subnets covered by the Managed Network
     */
    readonly subnets?: types.outputs.ResourceIdResponse[];
    /**
     * The collection of subscriptions covered by the Managed Network
     */
    readonly subscriptions?: types.outputs.ResourceIdResponse[];
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
    /**
     * The collection of virtual nets covered by the Managed Network
     */
    readonly virtualNetworks?: types.outputs.ResourceIdResponse[];
}
/**
 * The Get ManagedNetworkGroups operation gets a Managed Network Group specified by the resource group, Managed Network name, and group name
 * Azure REST API version: 2019-06-01-preview.
 */
export function getManagedNetworkGroupOutput(args: GetManagedNetworkGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagedNetworkGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:managednetwork:getManagedNetworkGroup", {
        "managedNetworkGroupName": args.managedNetworkGroupName,
        "managedNetworkName": args.managedNetworkName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetManagedNetworkGroupOutputArgs {
    /**
     * The name of the Managed Network Group.
     */
    managedNetworkGroupName: pulumi.Input<string>;
    /**
     * The name of the Managed Network.
     */
    managedNetworkName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}