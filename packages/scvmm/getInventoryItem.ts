import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Shows an inventory item.
 *
 * Uses Azure REST API version 2023-04-01-preview.
 *
 * Other available API versions: 2022-05-21-preview, 2023-10-07, 2024-06-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native scvmm [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getInventoryItem(args: GetInventoryItemArgs, opts?: pulumi.InvokeOptions): Promise<GetInventoryItemResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:scvmm:getInventoryItem", {
        "inventoryItemName": args.inventoryItemName,
        "resourceGroupName": args.resourceGroupName,
        "vmmServerName": args.vmmServerName,
    }, opts);
}

export interface GetInventoryItemArgs {
    /**
     * Name of the inventoryItem.
     */
    inventoryItemName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * Name of the VMMServer.
     */
    vmmServerName: string;
}

/**
 * Defines the inventory item.
 */
export interface GetInventoryItemResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Gets the Managed Object name in VMM for the inventory item.
     */
    readonly inventoryItemName: string;
    /**
     * They inventory type.
     */
    readonly inventoryType: string;
    /**
     * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
     */
    readonly kind?: string;
    /**
     * Gets the tracked resource id corresponding to the inventory resource.
     */
    readonly managedResourceId: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Gets the provisioning state.
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Gets the UUID (which is assigned by VMM) for the inventory item.
     */
    readonly uuid: string;
}
/**
 * Shows an inventory item.
 *
 * Uses Azure REST API version 2023-04-01-preview.
 *
 * Other available API versions: 2022-05-21-preview, 2023-10-07, 2024-06-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native scvmm [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getInventoryItemOutput(args: GetInventoryItemOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetInventoryItemResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:scvmm:getInventoryItem", {
        "inventoryItemName": args.inventoryItemName,
        "resourceGroupName": args.resourceGroupName,
        "vmmServerName": args.vmmServerName,
    }, opts);
}

export interface GetInventoryItemOutputArgs {
    /**
     * Name of the inventoryItem.
     */
    inventoryItemName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the VMMServer.
     */
    vmmServerName: pulumi.Input<string>;
}