import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Implements InventoryItem GET method.
 *
 * Uses Azure REST API version 2022-07-15-preview.
 *
 * Other available API versions: 2023-03-01-preview, 2023-10-01, 2023-12-01.
 */
export function getInventoryItem(args: GetInventoryItemArgs, opts?: pulumi.InvokeOptions): Promise<GetInventoryItemResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:connectedvmwarevsphere:getInventoryItem", {
        "inventoryItemName": args.inventoryItemName,
        "resourceGroupName": args.resourceGroupName,
        "vcenterName": args.vcenterName,
    }, opts);
}

export interface GetInventoryItemArgs {
    /**
     * Name of the inventoryItem.
     */
    inventoryItemName: string;
    /**
     * The Resource Group Name.
     */
    resourceGroupName: string;
    /**
     * Name of the vCenter.
     */
    vcenterName: string;
}

/**
 * Defines the inventory item.
 */
export interface GetInventoryItemResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * They inventory type.
     */
    readonly inventoryType: string;
    /**
     * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
     */
    readonly kind?: string;
    /**
     * Gets or sets the tracked resource id corresponding to the inventory resource.
     */
    readonly managedResourceId?: string;
    /**
     * Gets or sets the vCenter Managed Object name for the inventory item.
     */
    readonly moName?: string;
    /**
     * Gets or sets the MoRef (Managed Object Reference) ID for the inventory item.
     */
    readonly moRefId?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Gets or sets the provisioning state.
     */
    readonly provisioningState: string;
    /**
     * The system data.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Implements InventoryItem GET method.
 *
 * Uses Azure REST API version 2022-07-15-preview.
 *
 * Other available API versions: 2023-03-01-preview, 2023-10-01, 2023-12-01.
 */
export function getInventoryItemOutput(args: GetInventoryItemOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetInventoryItemResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:connectedvmwarevsphere:getInventoryItem", {
        "inventoryItemName": args.inventoryItemName,
        "resourceGroupName": args.resourceGroupName,
        "vcenterName": args.vcenterName,
    }, opts);
}

export interface GetInventoryItemOutputArgs {
    /**
     * Name of the inventoryItem.
     */
    inventoryItemName: pulumi.Input<string>;
    /**
     * The Resource Group Name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the vCenter.
     */
    vcenterName: pulumi.Input<string>;
}