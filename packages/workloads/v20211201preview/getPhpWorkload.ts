import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets the PHP workload resource.
 */
export function getPhpWorkload(args: GetPhpWorkloadArgs, opts?: pulumi.InvokeOptions): Promise<GetPhpWorkloadResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:workloads/v20211201preview:getPhpWorkload", {
        "phpWorkloadName": args.phpWorkloadName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPhpWorkloadArgs {
    /**
     * Php workload name
     */
    phpWorkloadName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Php workload resource
 */
export interface GetPhpWorkloadResult {
    /**
     * Admin user profile used for VM and VMSS
     */
    readonly adminUserProfile: types.outputs.workloads.v20211201preview.UserProfileResponse;
    /**
     * The infra resources for PHP workload will be created in this location
     */
    readonly appLocation: string;
    /**
     * Backup profile
     */
    readonly backupProfile?: types.outputs.workloads.v20211201preview.BackupProfileResponse;
    /**
     * Cache profile
     */
    readonly cacheProfile?: types.outputs.workloads.v20211201preview.CacheProfileResponse;
    /**
     * Controller VM profile
     */
    readonly controllerProfile: types.outputs.workloads.v20211201preview.NodeProfileResponse;
    /**
     * Database profile
     */
    readonly databaseProfile: types.outputs.workloads.v20211201preview.DatabaseProfileResponse;
    /**
     * File share profile
     */
    readonly fileshareProfile?: types.outputs.workloads.v20211201preview.FileshareProfileResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Identity for the resource. Currently not supported
     */
    readonly identity?: types.outputs.workloads.v20211201preview.PhpWorkloadResourceResponseIdentity;
    /**
     * Indicates which kind of php workload this resource represent e.g WordPress
     */
    readonly kind: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Managed resource group configuration of the workload
     */
    readonly managedResourceGroupConfiguration?: types.outputs.workloads.v20211201preview.ManagedRGConfigurationResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Network profile
     */
    readonly networkProfile?: types.outputs.workloads.v20211201preview.NetworkProfileResponse;
    /**
     * PHP profile
     */
    readonly phpProfile?: types.outputs.workloads.v20211201preview.PhpProfileResponse;
    /**
     * Php workload resource provisioning state
     */
    readonly provisioningState: string;
    /**
     * Search profile
     */
    readonly searchProfile?: types.outputs.workloads.v20211201preview.SearchProfileResponse;
    /**
     * Site profile
     */
    readonly siteProfile?: types.outputs.workloads.v20211201preview.SiteProfileResponse;
    /**
     * Php workloads SKU
     */
    readonly sku?: types.outputs.workloads.v20211201preview.SkuResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.workloads.v20211201preview.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * VMSS web nodes profile
     */
    readonly webNodesProfile: types.outputs.workloads.v20211201preview.VmssNodesProfileResponse;
}
/**
 * Gets the PHP workload resource.
 */
export function getPhpWorkloadOutput(args: GetPhpWorkloadOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPhpWorkloadResult> {
    return pulumi.output(args).apply((a: any) => getPhpWorkload(a, opts))
}

export interface GetPhpWorkloadOutputArgs {
    /**
     * Php workload name
     */
    phpWorkloadName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
