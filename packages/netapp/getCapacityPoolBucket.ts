import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the details of the specified volume's bucket. A bucket allows additional services, such as AI services, connect to the volume data contained in those buckets.
 *
 * Uses Azure REST API version 2025-01-01-preview.
 */
export function getCapacityPoolBucket(args: GetCapacityPoolBucketArgs, opts?: pulumi.InvokeOptions): Promise<GetCapacityPoolBucketResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:netapp:getCapacityPoolBucket", {
        "accountName": args.accountName,
        "bucketName": args.bucketName,
        "poolName": args.poolName,
        "resourceGroupName": args.resourceGroupName,
        "volumeName": args.volumeName,
    }, opts);
}

export interface GetCapacityPoolBucketArgs {
    /**
     * The name of the NetApp account
     */
    accountName: string;
    /**
     * The name of the bucket
     */
    bucketName: string;
    /**
     * The name of the capacity pool
     */
    poolName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the volume
     */
    volumeName: string;
}

/**
 * Bucket resource
 */
export interface GetCapacityPoolBucketResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * File System user having access to volume data. For Unix, this is the user's uid and gid. For Windows, this is the user's username. Note that the Unix and Windows user details are mutually exclusive, meaning one or other must be supplied, but not both.
     */
    readonly fileSystemUser?: types.outputs.FileSystemUserResponse;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The volume path mounted inside the bucket. The default is the root path '/' if no value is provided when the bucket is created.
     */
    readonly path?: string;
    /**
     * Provisioning state of the resource
     */
    readonly provisioningState: string;
    /**
     * Properties of the server managing the lifecycle of volume buckets
     */
    readonly server?: types.outputs.BucketServerPropertiesResponse;
    /**
     * The bucket credentials status. There states:
     *
     * "NoCredentialsSet": Access and Secret key pair have not been generated.
     * "CredentialsExpired": Access and Secret key pair have expired.
     * "Active": The certificate has been installed and credentials are unexpired.
     */
    readonly status: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get the details of the specified volume's bucket. A bucket allows additional services, such as AI services, connect to the volume data contained in those buckets.
 *
 * Uses Azure REST API version 2025-01-01-preview.
 */
export function getCapacityPoolBucketOutput(args: GetCapacityPoolBucketOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetCapacityPoolBucketResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:netapp:getCapacityPoolBucket", {
        "accountName": args.accountName,
        "bucketName": args.bucketName,
        "poolName": args.poolName,
        "resourceGroupName": args.resourceGroupName,
        "volumeName": args.volumeName,
    }, opts);
}

export interface GetCapacityPoolBucketOutputArgs {
    /**
     * The name of the NetApp account
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the bucket
     */
    bucketName: pulumi.Input<string>;
    /**
     * The name of the capacity pool
     */
    poolName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the volume
     */
    volumeName: pulumi.Input<string>;
}