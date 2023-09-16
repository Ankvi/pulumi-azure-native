import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns an AML file system.
 * Azure REST API version: 2023-05-01.
 */
export function getAmlFilesystem(args: GetAmlFilesystemArgs, opts?: pulumi.InvokeOptions): Promise<GetAmlFilesystemResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:storagecache:getAmlFilesystem", {
        "amlFilesystemName": args.amlFilesystemName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAmlFilesystemArgs {
    /**
     * Name for the AML file system. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric.
     */
    amlFilesystemName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * An AML file system instance. Follows Azure Resource Manager standards: https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/resource-api-reference.md
 */
export interface GetAmlFilesystemResult {
    /**
     * Client information for the AML file system.
     */
    readonly clientInfo: types.outputs.storagecache.AmlFilesystemClientInfoResponse;
    /**
     * Specifies encryption settings of the AML file system.
     */
    readonly encryptionSettings?: types.outputs.storagecache.AmlFilesystemEncryptionSettingsResponse;
    /**
     * Subnet used for managing the AML file system and for client-facing operations. This subnet should have at least a /24 subnet mask within the VNET's address space.
     */
    readonly filesystemSubnet: string;
    /**
     * Health of the AML file system.
     */
    readonly health: types.outputs.storagecache.AmlFilesystemHealthResponse;
    /**
     * Hydration and archive settings and status
     */
    readonly hsm?: types.outputs.storagecache.AmlFilesystemResponseHsm;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The managed identity used by the AML file system, if configured.
     */
    readonly identity?: types.outputs.storagecache.AmlFilesystemIdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Start time of a 30-minute weekly maintenance window.
     */
    readonly maintenanceWindow: types.outputs.storagecache.AmlFilesystemResponseMaintenanceWindow;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * ARM provisioning state.
     */
    readonly provisioningState: string;
    /**
     * SKU for the resource.
     */
    readonly sku?: types.outputs.storagecache.SkuNameResponse;
    /**
     * The size of the AML file system, in TiB. This might be rounded up.
     */
    readonly storageCapacityTiB: number;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.storagecache.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Throughput provisioned in MB per sec, calculated as storageCapacityTiB * per-unit storage throughput
     */
    readonly throughputProvisionedMBps: number;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Availability zones for resources. This field should only contain a single element in the array.
     */
    readonly zones?: string[];
}
/**
 * Returns an AML file system.
 * Azure REST API version: 2023-05-01.
 */
export function getAmlFilesystemOutput(args: GetAmlFilesystemOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAmlFilesystemResult> {
    return pulumi.output(args).apply((a: any) => getAmlFilesystem(a, opts))
}

export interface GetAmlFilesystemOutputArgs {
    /**
     * Name for the AML file system. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric.
     */
    amlFilesystemName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
