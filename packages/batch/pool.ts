import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Contains information about a pool.
 * Azure REST API version: 2023-05-01. Prior API version in Azure Native 1.x: 2021-01-01.
 *
 * Other available API versions: 2020-05-01, 2023-11-01, 2024-02-01.
 */
export class Pool extends pulumi.CustomResource {
    /**
     * Get an existing Pool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Pool {
        return new Pool(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:batch:Pool';

    /**
     * Returns true if the given object is an instance of Pool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Pool {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Pool.__pulumiType;
    }

    public /*out*/ readonly allocationState!: pulumi.Output<string>;
    public /*out*/ readonly allocationStateTransitionTime!: pulumi.Output<string>;
    /**
     * The list of application licenses must be a subset of available Batch service application licenses. If a license is requested which is not supported, pool creation will fail.
     */
    public readonly applicationLicenses!: pulumi.Output<string[] | undefined>;
    /**
     * Changes to application package references affect all new compute nodes joining the pool, but do not affect compute nodes that are already in the pool until they are rebooted or reimaged. There is a maximum of 10 application package references on any given pool.
     */
    public readonly applicationPackages!: pulumi.Output<types.outputs.ApplicationPackageReferenceResponse[] | undefined>;
    /**
     * This property is set only if the pool automatically scales, i.e. autoScaleSettings are used.
     */
    public /*out*/ readonly autoScaleRun!: pulumi.Output<types.outputs.AutoScaleRunResponse>;
    /**
     * For Windows compute nodes, the Batch service installs the certificates to the specified certificate store and location. For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory.
     *
     * Warning: This property is deprecated and will be removed after February, 2024. Please use the [Azure KeyVault Extension](https://learn.microsoft.com/azure/batch/batch-certificate-migration-guide) instead.
     */
    public readonly certificates!: pulumi.Output<types.outputs.CertificateReferenceResponse[] | undefined>;
    public /*out*/ readonly creationTime!: pulumi.Output<string>;
    public /*out*/ readonly currentDedicatedNodes!: pulumi.Output<number>;
    public /*out*/ readonly currentLowPriorityNodes!: pulumi.Output<number>;
    public /*out*/ readonly currentNodeCommunicationMode!: pulumi.Output<string>;
    /**
     * Using CloudServiceConfiguration specifies that the nodes should be creating using Azure Cloud Services (PaaS), while VirtualMachineConfiguration uses Azure Virtual Machines (IaaS).
     */
    public readonly deploymentConfiguration!: pulumi.Output<types.outputs.DeploymentConfigurationResponse | undefined>;
    /**
     * The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024.
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * The ETag of the resource, used for concurrency statements.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The type of identity used for the Batch Pool.
     */
    public readonly identity!: pulumi.Output<types.outputs.BatchPoolIdentityResponse | undefined>;
    /**
     * This imposes restrictions on which nodes can be assigned to the pool. Enabling this value can reduce the chance of the requested number of nodes to be allocated in the pool. If not specified, this value defaults to 'Disabled'.
     */
    public readonly interNodeCommunication!: pulumi.Output<string | undefined>;
    /**
     * This is the last time at which the pool level data, such as the targetDedicatedNodes or autoScaleSettings, changed. It does not factor in node-level changes such as a compute node changing state.
     */
    public /*out*/ readonly lastModified!: pulumi.Output<string>;
    /**
     * The Batch service does not assign any meaning to metadata; it is solely for the use of user code.
     */
    public readonly metadata!: pulumi.Output<types.outputs.MetadataItemResponse[] | undefined>;
    /**
     * This supports Azure Files, NFS, CIFS/SMB, and Blobfuse.
     */
    public readonly mountConfiguration!: pulumi.Output<types.outputs.MountConfigurationResponse[] | undefined>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The network configuration for a pool.
     */
    public readonly networkConfiguration!: pulumi.Output<types.outputs.NetworkConfigurationResponse | undefined>;
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    public /*out*/ readonly provisioningStateTransitionTime!: pulumi.Output<string>;
    /**
     * Describes either the current operation (if the pool AllocationState is Resizing) or the previously completed operation (if the AllocationState is Steady).
     */
    public /*out*/ readonly resizeOperationStatus!: pulumi.Output<types.outputs.ResizeOperationStatusResponse>;
    /**
     * Defines the desired size of the pool. This can either be 'fixedScale' where the requested targetDedicatedNodes is specified, or 'autoScale' which defines a formula which is periodically reevaluated. If this property is not specified, the pool will have a fixed scale with 0 targetDedicatedNodes.
     */
    public readonly scaleSettings!: pulumi.Output<types.outputs.ScaleSettingsResponse | undefined>;
    /**
     * In an PATCH (update) operation, this property can be set to an empty object to remove the start task from the pool.
     */
    public readonly startTask!: pulumi.Output<types.outputs.StartTaskResponse | undefined>;
    /**
     * If omitted, the default value is Default.
     */
    public readonly targetNodeCommunicationMode!: pulumi.Output<string | undefined>;
    /**
     * If not specified, the default is spread.
     */
    public readonly taskSchedulingPolicy!: pulumi.Output<types.outputs.TaskSchedulingPolicyResponse | undefined>;
    /**
     * The default value is 1. The maximum value is the smaller of 4 times the number of cores of the vmSize of the pool or 256.
     */
    public readonly taskSlotsPerNode!: pulumi.Output<number | undefined>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    public readonly userAccounts!: pulumi.Output<types.outputs.UserAccountResponse[] | undefined>;
    /**
     * For information about available sizes of virtual machines for Cloud Services pools (pools created with cloudServiceConfiguration), see Sizes for Cloud Services (https://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/). Batch supports all Cloud Services VM sizes except ExtraSmall. For information about available VM sizes for pools using images from the Virtual Machines Marketplace (pools created with virtualMachineConfiguration) see Sizes for Virtual Machines (Linux) (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/) or Sizes for Virtual Machines (Windows) (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/). Batch supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
     */
    public readonly vmSize!: pulumi.Output<string | undefined>;

    /**
     * Create a Pool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PoolArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["applicationLicenses"] = args ? args.applicationLicenses : undefined;
            resourceInputs["applicationPackages"] = args ? args.applicationPackages : undefined;
            resourceInputs["certificates"] = args ? args.certificates : undefined;
            resourceInputs["deploymentConfiguration"] = args ? (args.deploymentConfiguration ? pulumi.output(args.deploymentConfiguration).apply(types.inputs.deploymentConfigurationArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["interNodeCommunication"] = args ? args.interNodeCommunication : undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["mountConfiguration"] = args ? args.mountConfiguration : undefined;
            resourceInputs["networkConfiguration"] = args ? (args.networkConfiguration ? pulumi.output(args.networkConfiguration).apply(types.inputs.networkConfigurationArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["poolName"] = args ? args.poolName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["scaleSettings"] = args ? (args.scaleSettings ? pulumi.output(args.scaleSettings).apply(types.inputs.scaleSettingsArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["startTask"] = args ? (args.startTask ? pulumi.output(args.startTask).apply(types.inputs.startTaskArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["targetNodeCommunicationMode"] = args ? args.targetNodeCommunicationMode : undefined;
            resourceInputs["taskSchedulingPolicy"] = args ? (args.taskSchedulingPolicy ? pulumi.output(args.taskSchedulingPolicy).apply(types.inputs.taskSchedulingPolicyArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["taskSlotsPerNode"] = (args ? args.taskSlotsPerNode : undefined) ?? 1;
            resourceInputs["userAccounts"] = args ? args.userAccounts : undefined;
            resourceInputs["vmSize"] = args ? args.vmSize : undefined;
            resourceInputs["allocationState"] = undefined /*out*/;
            resourceInputs["allocationStateTransitionTime"] = undefined /*out*/;
            resourceInputs["autoScaleRun"] = undefined /*out*/;
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["currentDedicatedNodes"] = undefined /*out*/;
            resourceInputs["currentLowPriorityNodes"] = undefined /*out*/;
            resourceInputs["currentNodeCommunicationMode"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["lastModified"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["provisioningStateTransitionTime"] = undefined /*out*/;
            resourceInputs["resizeOperationStatus"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["allocationState"] = undefined /*out*/;
            resourceInputs["allocationStateTransitionTime"] = undefined /*out*/;
            resourceInputs["applicationLicenses"] = undefined /*out*/;
            resourceInputs["applicationPackages"] = undefined /*out*/;
            resourceInputs["autoScaleRun"] = undefined /*out*/;
            resourceInputs["certificates"] = undefined /*out*/;
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["currentDedicatedNodes"] = undefined /*out*/;
            resourceInputs["currentLowPriorityNodes"] = undefined /*out*/;
            resourceInputs["currentNodeCommunicationMode"] = undefined /*out*/;
            resourceInputs["deploymentConfiguration"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["interNodeCommunication"] = undefined /*out*/;
            resourceInputs["lastModified"] = undefined /*out*/;
            resourceInputs["metadata"] = undefined /*out*/;
            resourceInputs["mountConfiguration"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkConfiguration"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["provisioningStateTransitionTime"] = undefined /*out*/;
            resourceInputs["resizeOperationStatus"] = undefined /*out*/;
            resourceInputs["scaleSettings"] = undefined /*out*/;
            resourceInputs["startTask"] = undefined /*out*/;
            resourceInputs["targetNodeCommunicationMode"] = undefined /*out*/;
            resourceInputs["taskSchedulingPolicy"] = undefined /*out*/;
            resourceInputs["taskSlotsPerNode"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["userAccounts"] = undefined /*out*/;
            resourceInputs["vmSize"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:batch/v20170901:Pool" }, { type: "azure-native:batch/v20181201:Pool" }, { type: "azure-native:batch/v20190401:Pool" }, { type: "azure-native:batch/v20190801:Pool" }, { type: "azure-native:batch/v20200301:Pool" }, { type: "azure-native:batch/v20200501:Pool" }, { type: "azure-native:batch/v20200901:Pool" }, { type: "azure-native:batch/v20210101:Pool" }, { type: "azure-native:batch/v20210601:Pool" }, { type: "azure-native:batch/v20220101:Pool" }, { type: "azure-native:batch/v20220601:Pool" }, { type: "azure-native:batch/v20221001:Pool" }, { type: "azure-native:batch/v20230501:Pool" }, { type: "azure-native:batch/v20231101:Pool" }, { type: "azure-native:batch/v20240201:Pool" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Pool.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Pool resource.
 */
export interface PoolArgs {
    /**
     * The name of the Batch account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The list of application licenses must be a subset of available Batch service application licenses. If a license is requested which is not supported, pool creation will fail.
     */
    applicationLicenses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Changes to application package references affect all new compute nodes joining the pool, but do not affect compute nodes that are already in the pool until they are rebooted or reimaged. There is a maximum of 10 application package references on any given pool.
     */
    applicationPackages?: pulumi.Input<pulumi.Input<types.inputs.ApplicationPackageReferenceArgs>[]>;
    /**
     * For Windows compute nodes, the Batch service installs the certificates to the specified certificate store and location. For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory.
     *
     * Warning: This property is deprecated and will be removed after February, 2024. Please use the [Azure KeyVault Extension](https://learn.microsoft.com/azure/batch/batch-certificate-migration-guide) instead.
     */
    certificates?: pulumi.Input<pulumi.Input<types.inputs.CertificateReferenceArgs>[]>;
    /**
     * Using CloudServiceConfiguration specifies that the nodes should be creating using Azure Cloud Services (PaaS), while VirtualMachineConfiguration uses Azure Virtual Machines (IaaS).
     */
    deploymentConfiguration?: pulumi.Input<types.inputs.DeploymentConfigurationArgs>;
    /**
     * The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024.
     */
    displayName?: pulumi.Input<string>;
    /**
     * The type of identity used for the Batch Pool.
     */
    identity?: pulumi.Input<types.inputs.BatchPoolIdentityArgs>;
    /**
     * This imposes restrictions on which nodes can be assigned to the pool. Enabling this value can reduce the chance of the requested number of nodes to be allocated in the pool. If not specified, this value defaults to 'Disabled'.
     */
    interNodeCommunication?: pulumi.Input<types.enums.InterNodeCommunicationState>;
    /**
     * The Batch service does not assign any meaning to metadata; it is solely for the use of user code.
     */
    metadata?: pulumi.Input<pulumi.Input<types.inputs.MetadataItemArgs>[]>;
    /**
     * This supports Azure Files, NFS, CIFS/SMB, and Blobfuse.
     */
    mountConfiguration?: pulumi.Input<pulumi.Input<types.inputs.MountConfigurationArgs>[]>;
    /**
     * The network configuration for a pool.
     */
    networkConfiguration?: pulumi.Input<types.inputs.NetworkConfigurationArgs>;
    /**
     * The pool name. This must be unique within the account.
     */
    poolName?: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the Batch account.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Defines the desired size of the pool. This can either be 'fixedScale' where the requested targetDedicatedNodes is specified, or 'autoScale' which defines a formula which is periodically reevaluated. If this property is not specified, the pool will have a fixed scale with 0 targetDedicatedNodes.
     */
    scaleSettings?: pulumi.Input<types.inputs.ScaleSettingsArgs>;
    /**
     * In an PATCH (update) operation, this property can be set to an empty object to remove the start task from the pool.
     */
    startTask?: pulumi.Input<types.inputs.StartTaskArgs>;
    /**
     * If omitted, the default value is Default.
     */
    targetNodeCommunicationMode?: pulumi.Input<types.enums.NodeCommunicationMode>;
    /**
     * If not specified, the default is spread.
     */
    taskSchedulingPolicy?: pulumi.Input<types.inputs.TaskSchedulingPolicyArgs>;
    /**
     * The default value is 1. The maximum value is the smaller of 4 times the number of cores of the vmSize of the pool or 256.
     */
    taskSlotsPerNode?: pulumi.Input<number>;
    userAccounts?: pulumi.Input<pulumi.Input<types.inputs.UserAccountArgs>[]>;
    /**
     * For information about available sizes of virtual machines for Cloud Services pools (pools created with cloudServiceConfiguration), see Sizes for Cloud Services (https://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/). Batch supports all Cloud Services VM sizes except ExtraSmall. For information about available VM sizes for pools using images from the Virtual Machines Marketplace (pools created with virtualMachineConfiguration) see Sizes for Virtual Machines (Linux) (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/) or Sizes for Virtual Machines (Windows) (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/). Batch supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
     */
    vmSize?: pulumi.Input<string>;
}