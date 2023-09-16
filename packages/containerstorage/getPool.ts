import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Pool
 * Azure REST API version: 2023-07-01-preview.
 */
export function getPool(args: GetPoolArgs, opts?: pulumi.InvokeOptions): Promise<GetPoolResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerstorage:getPool", {
        "poolName": args.poolName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPoolArgs {
    /**
     * Pool Object
     */
    poolName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Pool resource
 */
export interface GetPoolResult {
    /**
     * List of resources that should have access to the pool. Typically ARM references to AKS clusters or ACI Container Groups. For local and standard this must be a single reference. For ElasticSAN there can be many.
     */
    readonly assignments?: types.outputs.containerstorage.AssignmentResponse[];
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
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
     * Type of the Pool: ephemeralDisk, azureDisk, or elasticsan.
     */
    readonly poolType: types.outputs.containerstorage.PoolTypeResponse;
    /**
     * The status of the last operation.
     */
    readonly provisioningState: string;
    /**
     * ReclaimPolicy defines what happens to the backend storage when StoragePool is deleted
     */
    readonly reclaimPolicy?: string;
    /**
     * Resources represent the resources the pool should have.
     */
    readonly resources?: types.outputs.containerstorage.ResourcesResponse;
    /**
     * The operational status of the resource
     */
    readonly status: types.outputs.containerstorage.ResourceOperationalStatusResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.containerstorage.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * List of availability zones that resources can be created in.
     */
    readonly zones?: string[];
}
/**
 * Get a Pool
 * Azure REST API version: 2023-07-01-preview.
 */
export function getPoolOutput(args: GetPoolOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPoolResult> {
    return pulumi.output(args).apply((a: any) => getPool(a, opts))
}

export interface GetPoolOutputArgs {
    /**
     * Pool Object
     */
    poolName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
