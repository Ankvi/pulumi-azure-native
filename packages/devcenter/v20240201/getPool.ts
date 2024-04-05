import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a machine pool
 */
export function getPool(args: GetPoolArgs, opts?: pulumi.InvokeOptions): Promise<GetPoolResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devcenter/v20240201:getPool", {
        "poolName": args.poolName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPoolArgs {
    /**
     * Name of the pool.
     */
    poolName: string;
    /**
     * The name of the project.
     */
    projectName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A pool of Virtual Machines.
 */
export interface GetPoolResult {
    /**
     * Indicates the number of provisioned Dev Boxes in this pool.
     */
    readonly devBoxCount: number;
    /**
     * Name of a Dev Box definition in parent Project of this Pool
     */
    readonly devBoxDefinitionName: string;
    /**
     * The display name of the pool.
     */
    readonly displayName?: string;
    /**
     * Overall health status of the Pool. Indicates whether or not the Pool is available to create Dev Boxes.
     */
    readonly healthStatus: string;
    /**
     * Details on the Pool health status to help diagnose issues. This is only populated when the pool status indicates the pool is in a non-healthy state
     */
    readonly healthStatusDetails: types.outputs.HealthStatusDetailResponse[];
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Specifies the license type indicating the caller has already acquired licenses for the Dev Boxes that will be created.
     */
    readonly licenseType: string;
    /**
     * Indicates whether owners of Dev Boxes in this pool are added as local administrators on the Dev Box.
     */
    readonly localAdministrator: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The regions of the managed virtual network (required when managedNetworkType is Managed).
     */
    readonly managedVirtualNetworkRegions?: string[];
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Name of a Network Connection in parent Project of this Pool
     */
    readonly networkConnectionName: string;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Indicates whether Dev Boxes in this pool are created with single sign on enabled. The also requires that single sign on be enabled on the tenant.
     */
    readonly singleSignOnStatus?: string;
    /**
     * Stop on disconnect configuration settings for Dev Boxes created in this pool.
     */
    readonly stopOnDisconnect?: types.outputs.StopOnDisconnectConfigurationResponse;
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
    /**
     * Indicates whether the pool uses a Virtual Network managed by Microsoft or a customer provided network.
     */
    readonly virtualNetworkType?: string;
}
/**
 * Gets a machine pool
 */
export function getPoolOutput(args: GetPoolOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPoolResult> {
    return pulumi.output(args).apply((a: any) => getPool(a, opts))
}

export interface GetPoolOutputArgs {
    /**
     * Name of the pool.
     */
    poolName: pulumi.Input<string>;
    /**
     * The name of the project.
     */
    projectName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}