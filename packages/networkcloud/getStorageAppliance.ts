import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get properties of the provided storage appliance.
 *
 * Uses Azure REST API version 2023-10-01-preview.
 *
 * Other available API versions: 2023-07-01, 2024-06-01-preview, 2024-07-01, 2024-10-01-preview, 2025-02-01.
 */
export function getStorageAppliance(args: GetStorageApplianceArgs, opts?: pulumi.InvokeOptions): Promise<GetStorageApplianceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:networkcloud:getStorageAppliance", {
        "resourceGroupName": args.resourceGroupName,
        "storageApplianceName": args.storageApplianceName,
    }, opts);
}

export interface GetStorageApplianceArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the storage appliance.
     */
    storageApplianceName: string;
}

export interface GetStorageApplianceResult {
    /**
     * The credentials of the administrative interface on this storage appliance.
     */
    readonly administratorCredentials: types.outputs.AdministrativeCredentialsResponse;
    /**
     * The total capacity of the storage appliance.
     */
    readonly capacity: number;
    /**
     * The amount of storage consumed.
     */
    readonly capacityUsed: number;
    /**
     * The resource ID of the cluster this storage appliance is associated with.
     */
    readonly clusterId: string;
    /**
     * The detailed status of the storage appliance.
     */
    readonly detailedStatus: string;
    /**
     * The descriptive message about the current detailed status.
     */
    readonly detailedStatusMessage: string;
    /**
     * The extended location of the cluster associated with the resource.
     */
    readonly extendedLocation: types.outputs.ExtendedLocationResponse;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The endpoint for the management interface of the storage appliance.
     */
    readonly managementIpv4Address: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state of the storage appliance.
     */
    readonly provisioningState: string;
    /**
     * The resource ID of the rack where this storage appliance resides.
     */
    readonly rackId: string;
    /**
     * The slot the storage appliance is in the rack based on the BOM configuration.
     */
    readonly rackSlot: number;
    /**
     * The indicator of whether the storage appliance supports remote vendor management.
     */
    readonly remoteVendorManagementFeature: string;
    /**
     * The indicator of whether the remote vendor management feature is enabled or disabled, or unsupported if it is an unsupported feature.
     */
    readonly remoteVendorManagementStatus: string;
    /**
     * The serial number for the storage appliance.
     */
    readonly serialNumber: string;
    /**
     * The SKU for the storage appliance.
     */
    readonly storageApplianceSkuId: string;
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
 * Get properties of the provided storage appliance.
 *
 * Uses Azure REST API version 2023-10-01-preview.
 *
 * Other available API versions: 2023-07-01, 2024-06-01-preview, 2024-07-01, 2024-10-01-preview, 2025-02-01.
 */
export function getStorageApplianceOutput(args: GetStorageApplianceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetStorageApplianceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:networkcloud:getStorageAppliance", {
        "resourceGroupName": args.resourceGroupName,
        "storageApplianceName": args.storageApplianceName,
    }, opts);
}

export interface GetStorageApplianceOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the storage appliance.
     */
    storageApplianceName: pulumi.Input<string>;
}