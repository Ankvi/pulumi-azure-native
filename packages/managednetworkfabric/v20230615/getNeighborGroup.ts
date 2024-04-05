import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the Neighbor Group.
 */
export function getNeighborGroup(args: GetNeighborGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetNeighborGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:managednetworkfabric/v20230615:getNeighborGroup", {
        "neighborGroupName": args.neighborGroupName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNeighborGroupArgs {
    /**
     * Name of the Neighbor Group.
     */
    neighborGroupName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Defines the Neighbor Group.
 */
export interface GetNeighborGroupResult {
    /**
     * Switch configuration description.
     */
    readonly annotation?: string;
    /**
     * An array of destination IPv4 Addresses or IPv6 Addresses.
     */
    readonly destination: types.outputs.NeighborGroupDestinationResponse;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
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
     * List of NetworkTap IDs where neighbor group is associated.
     */
    readonly networkTapIds: string[];
    /**
     * List of Network Tap Rule IDs where neighbor group is associated.
     */
    readonly networkTapRuleIds: string[];
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the Neighbor Group.
 */
export function getNeighborGroupOutput(args: GetNeighborGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNeighborGroupResult> {
    return pulumi.output(args).apply((a: any) => getNeighborGroup(a, opts))
}

export interface GetNeighborGroupOutputArgs {
    /**
     * Name of the Neighbor Group.
     */
    neighborGroupName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}