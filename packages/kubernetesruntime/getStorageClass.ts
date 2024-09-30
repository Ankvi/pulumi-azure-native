import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a StorageClassResource
 * Azure REST API version: 2024-03-01.
 *
 * Other available API versions: 2023-10-01-preview.
 */
export function getStorageClass(args: GetStorageClassArgs, opts?: pulumi.InvokeOptions): Promise<GetStorageClassResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:kubernetesruntime:getStorageClass", {
        "resourceUri": args.resourceUri,
        "storageClassName": args.storageClassName,
    }, opts);
}

export interface GetStorageClassArgs {
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: string;
    /**
     * The name of the the storage class
     */
    storageClassName: string;
}

/**
 * A StorageClass resource for an Arc connected cluster (Microsoft.Kubernetes/connectedClusters)
 */
export interface GetStorageClassResult {
    /**
     * The access mode: [ReadWriteOnce, ReadWriteMany] or [ReadWriteOnce]
     */
    readonly accessModes?: string[];
    /**
     * Volume can be expanded or not
     */
    readonly allowVolumeExpansion?: string;
    /**
     * Allow single data node failure
     */
    readonly dataResilience?: string;
    /**
     * Failover speed: NA, Slow, Fast
     */
    readonly failoverSpeed?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Limitations of the storage class
     */
    readonly limitations?: string[];
    /**
     * Additional mount options
     */
    readonly mountOptions?: string[];
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Performance tier
     */
    readonly performance?: string;
    /**
     * Selection priority when multiple storage classes meet the criteria. 0: Highest, -1: Never use
     */
    readonly priority?: number;
    /**
     * Provisioner name
     */
    readonly provisioner?: string;
    /**
     * Resource provision state
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
     * Properties of the StorageClass
     */
    readonly typeProperties: types.outputs.BlobStorageClassTypePropertiesResponse | types.outputs.NativeStorageClassTypePropertiesResponse | types.outputs.NfsStorageClassTypePropertiesResponse | types.outputs.RwxStorageClassTypePropertiesResponse | types.outputs.SmbStorageClassTypePropertiesResponse;
    /**
     * Binding mode of volumes: Immediate, WaitForFirstConsumer
     */
    readonly volumeBindingMode?: string;
}
/**
 * Get a StorageClassResource
 * Azure REST API version: 2024-03-01.
 *
 * Other available API versions: 2023-10-01-preview.
 */
export function getStorageClassOutput(args: GetStorageClassOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStorageClassResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:kubernetesruntime:getStorageClass", {
        "resourceUri": args.resourceUri,
        "storageClassName": args.storageClassName,
    }, opts);
}

export interface GetStorageClassOutputArgs {
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: pulumi.Input<string>;
    /**
     * The name of the the storage class
     */
    storageClassName: pulumi.Input<string>;
}