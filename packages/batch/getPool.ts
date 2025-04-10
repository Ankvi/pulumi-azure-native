import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about the specified pool.
 *
 * Uses Azure REST API version 2023-05-01.
 *
 * Other available API versions: 2023-11-01, 2024-02-01, 2024-07-01.
 */
export function getPool(args: GetPoolArgs, opts?: pulumi.InvokeOptions): Promise<GetPoolResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:batch:getPool", {
        "accountName": args.accountName,
        "poolName": args.poolName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPoolArgs {
    /**
     * The name of the Batch account.
     */
    accountName: string;
    /**
     * The pool name. This must be unique within the account.
     */
    poolName: string;
    /**
     * The name of the resource group that contains the Batch account.
     */
    resourceGroupName: string;
}

/**
 * Contains information about a pool.
 */
export interface GetPoolResult {
    readonly allocationState: string;
    readonly allocationStateTransitionTime: string;
    /**
     * The list of application licenses must be a subset of available Batch service application licenses. If a license is requested which is not supported, pool creation will fail.
     */
    readonly applicationLicenses?: string[];
    /**
     * Changes to application package references affect all new compute nodes joining the pool, but do not affect compute nodes that are already in the pool until they are rebooted or reimaged. There is a maximum of 10 application package references on any given pool.
     */
    readonly applicationPackages?: types.outputs.ApplicationPackageReferenceResponse[];
    /**
     * This property is set only if the pool automatically scales, i.e. autoScaleSettings are used.
     */
    readonly autoScaleRun: types.outputs.AutoScaleRunResponse;
    /**
     * For Windows compute nodes, the Batch service installs the certificates to the specified certificate store and location. For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory.
     *
     * Warning: This property is deprecated and will be removed after February, 2024. Please use the [Azure KeyVault Extension](https://learn.microsoft.com/azure/batch/batch-certificate-migration-guide) instead.
     */
    readonly certificates?: types.outputs.CertificateReferenceResponse[];
    readonly creationTime: string;
    readonly currentDedicatedNodes: number;
    readonly currentLowPriorityNodes: number;
    readonly currentNodeCommunicationMode: string;
    /**
     * Using CloudServiceConfiguration specifies that the nodes should be creating using Azure Cloud Services (PaaS), while VirtualMachineConfiguration uses Azure Virtual Machines (IaaS).
     */
    readonly deploymentConfiguration?: types.outputs.DeploymentConfigurationResponse;
    /**
     * The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024.
     */
    readonly displayName?: string;
    /**
     * The ETag of the resource, used for concurrency statements.
     */
    readonly etag: string;
    /**
     * The ID of the resource.
     */
    readonly id: string;
    /**
     * The type of identity used for the Batch Pool.
     */
    readonly identity?: types.outputs.BatchPoolIdentityResponse;
    /**
     * This imposes restrictions on which nodes can be assigned to the pool. Enabling this value can reduce the chance of the requested number of nodes to be allocated in the pool. If not specified, this value defaults to 'Disabled'.
     */
    readonly interNodeCommunication?: string;
    /**
     * This is the last time at which the pool level data, such as the targetDedicatedNodes or autoScaleSettings, changed. It does not factor in node-level changes such as a compute node changing state.
     */
    readonly lastModified: string;
    /**
     * The Batch service does not assign any meaning to metadata; it is solely for the use of user code.
     */
    readonly metadata?: types.outputs.MetadataItemResponse[];
    /**
     * This supports Azure Files, NFS, CIFS/SMB, and Blobfuse.
     */
    readonly mountConfiguration?: types.outputs.MountConfigurationResponse[];
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The network configuration for a pool.
     */
    readonly networkConfiguration?: types.outputs.NetworkConfigurationResponse;
    readonly provisioningState: string;
    readonly provisioningStateTransitionTime: string;
    /**
     * Describes either the current operation (if the pool AllocationState is Resizing) or the previously completed operation (if the AllocationState is Steady).
     */
    readonly resizeOperationStatus: types.outputs.ResizeOperationStatusResponse;
    /**
     * Defines the desired size of the pool. This can either be 'fixedScale' where the requested targetDedicatedNodes is specified, or 'autoScale' which defines a formula which is periodically reevaluated. If this property is not specified, the pool will have a fixed scale with 0 targetDedicatedNodes.
     */
    readonly scaleSettings?: types.outputs.ScaleSettingsResponse;
    /**
     * In an PATCH (update) operation, this property can be set to an empty object to remove the start task from the pool.
     */
    readonly startTask?: types.outputs.StartTaskResponse;
    /**
     * If omitted, the default value is Default.
     */
    readonly targetNodeCommunicationMode?: string;
    /**
     * If not specified, the default is spread.
     */
    readonly taskSchedulingPolicy?: types.outputs.TaskSchedulingPolicyResponse;
    /**
     * The default value is 1. The maximum value is the smaller of 4 times the number of cores of the vmSize of the pool or 256.
     */
    readonly taskSlotsPerNode?: number;
    /**
     * The type of the resource.
     */
    readonly type: string;
    readonly userAccounts?: types.outputs.UserAccountResponse[];
    /**
     * For information about available sizes of virtual machines for Cloud Services pools (pools created with cloudServiceConfiguration), see Sizes for Cloud Services (https://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/). Batch supports all Cloud Services VM sizes except ExtraSmall. For information about available VM sizes for pools using images from the Virtual Machines Marketplace (pools created with virtualMachineConfiguration) see Sizes for Virtual Machines (Linux) (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/) or Sizes for Virtual Machines (Windows) (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/). Batch supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
     */
    readonly vmSize?: string;
}
/**
 * Gets information about the specified pool.
 *
 * Uses Azure REST API version 2023-05-01.
 *
 * Other available API versions: 2023-11-01, 2024-02-01, 2024-07-01.
 */
export function getPoolOutput(args: GetPoolOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPoolResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:batch:getPool", {
        "accountName": args.accountName,
        "poolName": args.poolName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPoolOutputArgs {
    /**
     * The name of the Batch account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The pool name. This must be unique within the account.
     */
    poolName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the Batch account.
     */
    resourceGroupName: pulumi.Input<string>;
}