import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export interface ApplicationPackageReferenceArgs {
    id: pulumi.Input<string>;
    /**
     * If this is omitted, and no default version is specified for this application, the request fails with the error code InvalidApplicationPackageReferences. If you are calling the REST API directly, the HTTP status code is 409.
     */
    version?: pulumi.Input<string>;
}

export interface AutoScaleSettingsArgs {
    /**
     * If omitted, the default value is 15 minutes (PT15M).
     */
    evaluationInterval?: pulumi.Input<string>;
    formula: pulumi.Input<string>;
}

/**
 * The properties related to the auto-storage account.
 */
export interface AutoStorageBasePropertiesArgs {
    /**
     * The authentication mode which the Batch service will use to manage the auto-storage account.
     */
    authenticationMode?: pulumi.Input<enums.AutoStorageAuthenticationMode>;
    /**
     * The identity referenced here must be assigned to pools which have compute nodes that need access to auto-storage.
     */
    nodeIdentityReference?: pulumi.Input<ComputeNodeIdentityReferenceArgs>;
    /**
     * The resource ID of the storage account to be used for auto-storage account.
     */
    storageAccountId: pulumi.Input<string>;
}
/**
 * autoStorageBasePropertiesArgsProvideDefaults sets the appropriate defaults for AutoStorageBasePropertiesArgs
 */
export function autoStorageBasePropertiesArgsProvideDefaults(val: AutoStorageBasePropertiesArgs): AutoStorageBasePropertiesArgs {
    return {
        ...val,
        authenticationMode: (val.authenticationMode) ?? "StorageKeys",
    };
}

export interface AutoUserSpecificationArgs {
    /**
     * The default value is nonAdmin.
     */
    elevationLevel?: pulumi.Input<enums.ElevationLevel>;
    /**
     * The default value is Pool. If the pool is running Windows a value of Task should be specified if stricter isolation between tasks is required. For example, if the task mutates the registry in a way which could impact other tasks, or if certificates have been specified on the pool which should not be accessible by normal tasks but should be accessible by start tasks.
     */
    scope?: pulumi.Input<enums.AutoUserScope>;
}

/**
 * The configuration parameters used for performing automatic OS upgrade.
 */
export interface AutomaticOSUpgradePolicyArgs {
    /**
     * Whether OS image rollback feature should be disabled.
     */
    disableAutomaticRollback?: pulumi.Input<boolean>;
    /**
     * Indicates whether OS upgrades should automatically be applied to scale set instances in a rolling fashion when a newer version of the OS image becomes available. <br /><br /> If this is set to true for Windows based pools, [WindowsConfiguration.enableAutomaticUpdates](https://learn.microsoft.com/rest/api/batchmanagement/pool/create?tabs=HTTP#windowsconfiguration) cannot be set to true.
     */
    enableAutomaticOSUpgrade?: pulumi.Input<boolean>;
    /**
     * Defer OS upgrades on the TVMs if they are running tasks.
     */
    osRollingUpgradeDeferral?: pulumi.Input<boolean>;
    /**
     * Indicates whether rolling upgrade policy should be used during Auto OS Upgrade. Auto OS Upgrade will fallback to the default policy if no policy is defined on the VMSS.
     */
    useRollingUpgradePolicy?: pulumi.Input<boolean>;
}

export interface AzureBlobFileSystemConfigurationArgs {
    /**
     * This property is mutually exclusive with both sasKey and identity; exactly one must be specified.
     */
    accountKey?: pulumi.Input<string>;
    accountName: pulumi.Input<string>;
    /**
     * These are 'net use' options in Windows and 'mount' options in Linux.
     */
    blobfuseOptions?: pulumi.Input<string>;
    containerName: pulumi.Input<string>;
    /**
     * This property is mutually exclusive with both accountKey and sasKey; exactly one must be specified.
     */
    identityReference?: pulumi.Input<ComputeNodeIdentityReferenceArgs>;
    /**
     * All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable.
     */
    relativeMountPath: pulumi.Input<string>;
    /**
     * This property is mutually exclusive with both accountKey and identity; exactly one must be specified.
     */
    sasKey?: pulumi.Input<string>;
}

export interface AzureFileShareConfigurationArgs {
    accountKey: pulumi.Input<string>;
    accountName: pulumi.Input<string>;
    /**
     * This is of the form 'https://{account}.file.core.windows.net/'.
     */
    azureFileUrl: pulumi.Input<string>;
    /**
     * These are 'net use' options in Windows and 'mount' options in Linux.
     */
    mountOptions?: pulumi.Input<string>;
    /**
     * All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable.
     */
    relativeMountPath: pulumi.Input<string>;
}

/**
 * The identity of the Batch account, if configured. This is used when the user specifies 'Microsoft.KeyVault' as their Batch account encryption configuration or when `ManagedIdentity` is selected as the auto-storage authentication mode.
 */
export interface BatchAccountIdentityArgs {
    /**
     * The type of identity used for the Batch account.
     */
    type: pulumi.Input<enums.ResourceIdentityType>;
    /**
     * The list of user identities associated with the Batch account.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The identity of the Batch pool, if configured. If the pool identity is updated during update an existing pool, only the new vms which are created after the pool shrinks to 0 will have the updated identities
 */
export interface BatchPoolIdentityArgs {
    /**
     * The type of identity used for the Batch Pool.
     */
    type: pulumi.Input<enums.PoolIdentityType>;
    /**
     * The list of user identities associated with the Batch pool.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface CIFSMountConfigurationArgs {
    /**
     * These are 'net use' options in Windows and 'mount' options in Linux.
     */
    mountOptions?: pulumi.Input<string>;
    password: pulumi.Input<string>;
    /**
     * All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable.
     */
    relativeMountPath: pulumi.Input<string>;
    source: pulumi.Input<string>;
    userName: pulumi.Input<string>;
}

/**
 * Warning: This object is deprecated and will be removed after February, 2024. Please use the [Azure KeyVault Extension](https://learn.microsoft.com/azure/batch/batch-certificate-migration-guide) instead.
 */
export interface CertificateReferenceArgs {
    id: pulumi.Input<string>;
    /**
     * The default value is currentUser. This property is applicable only for pools configured with Windows compute nodes. For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory.
     */
    storeLocation?: pulumi.Input<enums.CertificateStoreLocation>;
    /**
     * This property is applicable only for pools configured with Windows compute nodes. Common store names include: My, Root, CA, Trust, Disallowed, TrustedPeople, TrustedPublisher, AuthRoot, AddressBook, but any custom store name can also be used. The default value is My.
     */
    storeName?: pulumi.Input<string>;
    visibility?: pulumi.Input<pulumi.Input<enums.CertificateVisibility>[]>;
}

/**
 * The reference to a user assigned identity associated with the Batch pool which a compute node will use.
 */
export interface ComputeNodeIdentityReferenceArgs {
    /**
     * The ARM resource id of the user assigned identity.
     */
    resourceId?: pulumi.Input<string>;
}

export interface ContainerConfigurationArgs {
    /**
     * This is the full image reference, as would be specified to "docker pull". An image will be sourced from the default Docker registry unless the image is fully qualified with an alternative registry.
     */
    containerImageNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * If any images must be downloaded from a private registry which requires credentials, then those credentials must be provided here.
     */
    containerRegistries?: pulumi.Input<pulumi.Input<ContainerRegistryArgs>[]>;
    type: pulumi.Input<string | enums.ContainerType>;
}

export interface ContainerHostBatchBindMountEntryArgs {
    /**
     * For Linux, if you mount this path as a read/write mode, this does not mean that all users in container have the read/write access for the path, it depends on the access in host VM. If this path is mounted read-only, all users within the container will not be able to modify the path.
     */
    isReadOnly?: pulumi.Input<boolean>;
    source?: pulumi.Input<string | enums.ContainerHostDataPath>;
}

export interface ContainerRegistryArgs {
    /**
     * The reference to a user assigned identity associated with the Batch pool which a compute node will use.
     */
    identityReference?: pulumi.Input<ComputeNodeIdentityReferenceArgs>;
    password?: pulumi.Input<string>;
    /**
     * If omitted, the default is "docker.io".
     */
    registryServer?: pulumi.Input<string>;
    userName?: pulumi.Input<string>;
}

/**
 * Settings which will be used by the data disks associated to Compute Nodes in the Pool. When using attached data disks, you need to mount and format the disks from within a VM to use them.
 */
export interface DataDiskArgs {
    /**
     * Values are:
     *
     *  none - The caching mode for the disk is not enabled.
     *  readOnly - The caching mode for the disk is read only.
     *  readWrite - The caching mode for the disk is read and write.
     *
     *  The default value for caching is none. For information about the caching options see: https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/27/exploring-windows-azure-drives-disks-and-images/.
     */
    caching?: pulumi.Input<enums.CachingType>;
    diskSizeGB: pulumi.Input<number>;
    /**
     * The lun is used to uniquely identify each data disk. If attaching multiple disks, each should have a distinct lun. The value must be between 0 and 63, inclusive.
     */
    lun: pulumi.Input<number>;
    /**
     * If omitted, the default is "Standard_LRS". Values are:
     *
     *  Standard_LRS - The data disk should use standard locally redundant storage.
     *  Premium_LRS - The data disk should use premium locally redundant storage.
     */
    storageAccountType?: pulumi.Input<enums.StorageAccountType>;
}

export interface DeploymentConfigurationArgs {
    virtualMachineConfiguration?: pulumi.Input<VirtualMachineConfigurationArgs>;
}

export interface DiffDiskSettingsArgs {
    /**
     * This property can be used by user in the request to choose which location the operating system should be in. e.g., cache disk space for Ephemeral OS disk provisioning. For more information on Ephemeral OS disk size requirements, please refer to Ephemeral OS disk size requirements for Windows VMs at https://learn.microsoft.com/azure/virtual-machines/windows/ephemeral-os-disks#size-requirements and Linux VMs at https://learn.microsoft.com/azure/virtual-machines/linux/ephemeral-os-disks#size-requirements.
     */
    placement?: pulumi.Input<enums.DiffDiskPlacement>;
}

/**
 * The disk encryption configuration applied on compute nodes in the pool. Disk encryption configuration is not supported on Linux pool created with Virtual Machine Image or Azure Compute Gallery Image.
 */
export interface DiskEncryptionConfigurationArgs {
    /**
     * On Linux pool, only "TemporaryDisk" is supported; on Windows pool, "OsDisk" and "TemporaryDisk" must be specified.
     */
    targets?: pulumi.Input<pulumi.Input<enums.DiskEncryptionTarget>[]>;
}

/**
 * Configures how customer data is encrypted inside the Batch account. By default, accounts are encrypted using a Microsoft managed key. For additional control, a customer-managed key can be used instead.
 */
export interface EncryptionPropertiesArgs {
    /**
     * Type of the key source.
     */
    keySource?: pulumi.Input<enums.KeySource>;
    /**
     * Additional details when using Microsoft.KeyVault
     */
    keyVaultProperties?: pulumi.Input<KeyVaultPropertiesArgs>;
}

/**
 * Network access profile for Batch endpoint.
 */
export interface EndpointAccessProfileArgs {
    /**
     * Default action for endpoint access. It is only applicable when publicNetworkAccess is enabled.
     */
    defaultAction: pulumi.Input<enums.EndpointAccessDefaultAction>;
    /**
     * Array of IP ranges to filter client IP address.
     */
    ipRules?: pulumi.Input<pulumi.Input<IPRuleArgs>[]>;
}

export interface EnvironmentSettingArgs {
    name: pulumi.Input<string>;
    value?: pulumi.Input<string>;
}

export interface FixedScaleSettingsArgs {
    /**
     * If omitted, the default value is Requeue.
     */
    nodeDeallocationOption?: pulumi.Input<enums.ComputeNodeDeallocationOption>;
    /**
     * The default value is 15 minutes. Timeout values use ISO 8601 format. For example, use PT10M for 10 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service rejects the request with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request).
     */
    resizeTimeout?: pulumi.Input<string>;
    /**
     * At least one of targetDedicatedNodes, targetLowPriorityNodes must be set.
     */
    targetDedicatedNodes?: pulumi.Input<number>;
    /**
     * At least one of targetDedicatedNodes, targetLowPriorityNodes must be set.
     */
    targetLowPriorityNodes?: pulumi.Input<number>;
}
/**
 * fixedScaleSettingsArgsProvideDefaults sets the appropriate defaults for FixedScaleSettingsArgs
 */
export function fixedScaleSettingsArgsProvideDefaults(val: FixedScaleSettingsArgs): FixedScaleSettingsArgs {
    return {
        ...val,
        resizeTimeout: (val.resizeTimeout) ?? "PT15M",
    };
}

/**
 * Rule to filter client IP address.
 */
export interface IPRuleArgs {
    /**
     * Action when client IP address is matched.
     */
    action: pulumi.Input<enums.IPRuleAction>;
    /**
     * IPv4 address, or IPv4 address range in CIDR format.
     */
    value: pulumi.Input<string>;
}

export interface ImageReferenceArgs {
    /**
     * This property is mutually exclusive with other properties and can be fetched from community gallery image GET call.
     */
    communityGalleryImageId?: pulumi.Input<string>;
    /**
     * This property is mutually exclusive with other properties. The Azure Compute Gallery Image must have replicas in the same region as the Azure Batch account. For information about the firewall settings for the Batch node agent to communicate with the Batch service see https://learn.microsoft.com/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration.
     */
    id?: pulumi.Input<string>;
    /**
     * For example, UbuntuServer or WindowsServer.
     */
    offer?: pulumi.Input<string>;
    /**
     * For example, Canonical or MicrosoftWindowsServer.
     */
    publisher?: pulumi.Input<string>;
    /**
     * This property is mutually exclusive with other properties and can be fetched from shared gallery image GET call.
     */
    sharedGalleryImageId?: pulumi.Input<string>;
    /**
     * For example, 18.04-LTS or 2022-datacenter.
     */
    sku?: pulumi.Input<string>;
    /**
     * A value of 'latest' can be specified to select the latest version of an image. If omitted, the default is 'latest'.
     */
    version?: pulumi.Input<string>;
}

export interface InboundNatPoolArgs {
    /**
     * This must be unique within a Batch pool. Acceptable values are between 1 and 65535 except for 29876 and 29877 as these are reserved. If any reserved values are provided the request fails with HTTP status code 400.
     */
    backendPort: pulumi.Input<number>;
    /**
     * Acceptable values range between 1 and 65534 except ports from 50000 to 55000 which are reserved by the Batch service. All ranges within a pool must be distinct and cannot overlap. If any reserved or overlapping values are provided the request fails with HTTP status code 400.
     */
    frontendPortRangeEnd: pulumi.Input<number>;
    /**
     * Acceptable values range between 1 and 65534 except ports from 50000 to 55000 which are reserved. All ranges within a pool must be distinct and cannot overlap. If any reserved or overlapping values are provided the request fails with HTTP status code 400.
     */
    frontendPortRangeStart: pulumi.Input<number>;
    /**
     * The name must be unique within a Batch pool, can contain letters, numbers, underscores, periods, and hyphens. Names must start with a letter or number, must end with a letter, number, or underscore, and cannot exceed 77 characters.  If any invalid values are provided the request fails with HTTP status code 400.
     */
    name: pulumi.Input<string>;
    /**
     * The maximum number of rules that can be specified across all the endpoints on a Batch pool is 25. If no network security group rules are specified, a default rule will be created to allow inbound access to the specified backendPort. If the maximum number of network security group rules is exceeded the request fails with HTTP status code 400.
     */
    networkSecurityGroupRules?: pulumi.Input<pulumi.Input<NetworkSecurityGroupRuleArgs>[]>;
    protocol: pulumi.Input<enums.InboundEndpointProtocol>;
}

/**
 * KeyVault configuration when using an encryption KeySource of Microsoft.KeyVault.
 */
export interface KeyVaultPropertiesArgs {
    /**
     * Full path to the secret with or without version. Example https://mykeyvault.vault.azure.net/keys/testkey/6e34a81fef704045975661e297a4c053. or https://mykeyvault.vault.azure.net/keys/testkey. To be usable the following prerequisites must be met:
     *
     *  The Batch Account has a System Assigned identity
     *  The account identity has been granted Key/Get, Key/Unwrap and Key/Wrap permissions
     *  The KeyVault has soft-delete and purge protection enabled
     */
    keyIdentifier?: pulumi.Input<string>;
}

/**
 * Identifies the Azure key vault associated with a Batch account.
 */
export interface KeyVaultReferenceArgs {
    /**
     * The resource ID of the Azure key vault associated with the Batch account.
     */
    id: pulumi.Input<string>;
    /**
     * The URL of the Azure key vault associated with the Batch account.
     */
    url: pulumi.Input<string>;
}

export interface LinuxUserConfigurationArgs {
    /**
     * The uid and gid properties must be specified together or not at all. If not specified the underlying operating system picks the gid.
     */
    gid?: pulumi.Input<number>;
    /**
     * The private key must not be password protected. The private key is used to automatically configure asymmetric-key based authentication for SSH between nodes in a Linux pool when the pool's enableInterNodeCommunication property is true (it is ignored if enableInterNodeCommunication is false). It does this by placing the key pair into the user's .ssh directory. If not specified, password-less SSH is not configured between nodes (no modification of the user's .ssh directory is done).
     */
    sshPrivateKey?: pulumi.Input<string>;
    /**
     * The uid and gid properties must be specified together or not at all. If not specified the underlying operating system picks the uid.
     */
    uid?: pulumi.Input<number>;
}

export interface ManagedDiskArgs {
    /**
     * Specifies the security profile settings for the managed disk. **Note**: It can only be set for Confidential VMs and is required when using Confidential VMs.
     */
    securityProfile?: pulumi.Input<VMDiskSecurityProfileArgs>;
    storageAccountType?: pulumi.Input<enums.StorageAccountType>;
}

/**
 * The Batch service does not assign any meaning to this metadata; it is solely for the use of user code.
 */
export interface MetadataItemArgs {
    name: pulumi.Input<string>;
    value: pulumi.Input<string>;
}

export interface MountConfigurationArgs {
    /**
     * This property is mutually exclusive with all other properties.
     */
    azureBlobFileSystemConfiguration?: pulumi.Input<AzureBlobFileSystemConfigurationArgs>;
    /**
     * This property is mutually exclusive with all other properties.
     */
    azureFileShareConfiguration?: pulumi.Input<AzureFileShareConfigurationArgs>;
    /**
     * This property is mutually exclusive with all other properties.
     */
    cifsMountConfiguration?: pulumi.Input<CIFSMountConfigurationArgs>;
    /**
     * This property is mutually exclusive with all other properties.
     */
    nfsMountConfiguration?: pulumi.Input<NFSMountConfigurationArgs>;
}

export interface NFSMountConfigurationArgs {
    /**
     * These are 'net use' options in Windows and 'mount' options in Linux.
     */
    mountOptions?: pulumi.Input<string>;
    /**
     * All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable.
     */
    relativeMountPath: pulumi.Input<string>;
    source: pulumi.Input<string>;
}

/**
 * The network configuration for a pool.
 */
export interface NetworkConfigurationArgs {
    dynamicVnetAssignmentScope?: pulumi.Input<enums.DynamicVNetAssignmentScope>;
    /**
     * Accelerated networking enables single root I/O virtualization (SR-IOV) to a VM, which may lead to improved networking performance. For more details, see: https://learn.microsoft.com/azure/virtual-network/accelerated-networking-overview.
     */
    enableAcceleratedNetworking?: pulumi.Input<boolean>;
    endpointConfiguration?: pulumi.Input<PoolEndpointConfigurationArgs>;
    /**
     * The public IP Address configuration of the networking configuration of a Pool.
     */
    publicIPAddressConfiguration?: pulumi.Input<PublicIPAddressConfigurationArgs>;
    /**
     * The virtual network must be in the same region and subscription as the Azure Batch account. The specified subnet should have enough free IP addresses to accommodate the number of nodes in the pool. If the subnet doesn't have enough free IP addresses, the pool will partially allocate compute nodes and a resize error will occur. The 'MicrosoftAzureBatch' service principal must have the 'Classic Virtual Machine Contributor' Role-Based Access Control (RBAC) role for the specified VNet. The specified subnet must allow communication from the Azure Batch service to be able to schedule tasks on the compute nodes. This can be verified by checking if the specified VNet has any associated Network Security Groups (NSG). If communication to the compute nodes in the specified subnet is denied by an NSG, then the Batch service will set the state of the compute nodes to unusable. If the specified VNet has any associated Network Security Groups (NSG), then a few reserved system ports must be enabled for inbound communication，including ports 29876 and 29877. Also enable outbound connections to Azure Storage on port 443. For more details see: https://learn.microsoft.com/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration
     */
    subnetId?: pulumi.Input<string>;
}
/**
 * networkConfigurationArgsProvideDefaults sets the appropriate defaults for NetworkConfigurationArgs
 */
export function networkConfigurationArgsProvideDefaults(val: NetworkConfigurationArgs): NetworkConfigurationArgs {
    return {
        ...val,
        dynamicVnetAssignmentScope: (val.dynamicVnetAssignmentScope) ?? "none",
    };
}

/**
 * Network profile for Batch account, which contains network rule settings for each endpoint.
 */
export interface NetworkProfileArgs {
    /**
     * Network access profile for batchAccount endpoint (Batch account data plane API).
     */
    accountAccess?: pulumi.Input<EndpointAccessProfileArgs>;
    /**
     * Network access profile for nodeManagement endpoint (Batch service managing compute nodes for Batch pools).
     */
    nodeManagementAccess?: pulumi.Input<EndpointAccessProfileArgs>;
}

export interface NetworkSecurityGroupRuleArgs {
    access: pulumi.Input<enums.NetworkSecurityGroupRuleAccess>;
    /**
     * Priorities within a pool must be unique and are evaluated in order of priority. The lower the number the higher the priority. For example, rules could be specified with order numbers of 150, 250, and 350. The rule with the order number of 150 takes precedence over the rule that has an order of 250. Allowed priorities are 150 to 4096. If any reserved or duplicate values are provided the request fails with HTTP status code 400.
     */
    priority: pulumi.Input<number>;
    /**
     * Valid values are a single IP address (i.e. 10.10.10.10), IP subnet (i.e. 192.168.1.0/24), default tag, or * (for all addresses).  If any other values are provided the request fails with HTTP status code 400.
     */
    sourceAddressPrefix: pulumi.Input<string>;
    /**
     * Valid values are '*' (for all ports 0 - 65535) or arrays of ports or port ranges (i.e. 100-200). The ports should in the range of 0 to 65535 and the port ranges or ports can't overlap. If any other values are provided the request fails with HTTP status code 400. Default value will be *.
     */
    sourcePortRanges?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Allocation configuration used by Batch Service to provision the nodes.
 */
export interface NodePlacementConfigurationArgs {
    /**
     * Allocation policy used by Batch Service to provision the nodes. If not specified, Batch will use the regional policy.
     */
    policy?: pulumi.Input<enums.NodePlacementPolicyType>;
}

export interface OSDiskArgs {
    caching?: pulumi.Input<enums.CachingType>;
    diskSizeGB?: pulumi.Input<number>;
    ephemeralOSDiskSettings?: pulumi.Input<DiffDiskSettingsArgs>;
    managedDisk?: pulumi.Input<ManagedDiskArgs>;
    writeAcceleratorEnabled?: pulumi.Input<boolean>;
}

export interface PoolEndpointConfigurationArgs {
    /**
     * The maximum number of inbound NAT pools per Batch pool is 5. If the maximum number of inbound NAT pools is exceeded the request fails with HTTP status code 400. This cannot be specified if the IPAddressProvisioningType is NoPublicIPAddresses.
     */
    inboundNatPools: pulumi.Input<pulumi.Input<InboundNatPoolArgs>[]>;
}

/**
 * The public IP Address configuration of the networking configuration of a Pool.
 */
export interface PublicIPAddressConfigurationArgs {
    /**
     * The number of IPs specified here limits the maximum size of the Pool - 100 dedicated nodes or 100 Spot/low-priority nodes can be allocated for each public IP. For example, a pool needing 250 dedicated VMs would need at least 3 public IPs specified. Each element of this collection is of the form: /subscriptions/{subscription}/resourceGroups/{group}/providers/Microsoft.Network/publicIPAddresses/{ip}.
     */
    ipAddressIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The default value is BatchManaged
     */
    provision?: pulumi.Input<enums.IPAddressProvisioningType>;
}

export interface ResourceFileArgs {
    /**
     * The autoStorageContainerName, storageContainerUrl and httpUrl properties are mutually exclusive and one of them must be specified.
     */
    autoStorageContainerName?: pulumi.Input<string>;
    /**
     * The property is valid only when autoStorageContainerName or storageContainerUrl is used. This prefix can be a partial filename or a subdirectory. If a prefix is not specified, all the files in the container will be downloaded.
     */
    blobPrefix?: pulumi.Input<string>;
    /**
     * This property applies only to files being downloaded to Linux compute nodes. It will be ignored if it is specified for a resourceFile which will be downloaded to a Windows node. If this property is not specified for a Linux node, then a default value of 0770 is applied to the file.
     */
    fileMode?: pulumi.Input<string>;
    /**
     * If the httpUrl property is specified, the filePath is required and describes the path which the file will be downloaded to, including the filename. Otherwise, if the autoStorageContainerName or storageContainerUrl property is specified, filePath is optional and is the directory to download the files to. In the case where filePath is used as a directory, any directory structure already associated with the input data will be retained in full and appended to the specified filePath directory. The specified relative path cannot break out of the task's working directory (for example by using '..').
     */
    filePath?: pulumi.Input<string>;
    /**
     * The autoStorageContainerName, storageContainerUrl and httpUrl properties are mutually exclusive and one of them must be specified. If the URL points to Azure Blob Storage, it must be readable from compute nodes. There are three ways to get such a URL for a blob in Azure storage: include a Shared Access Signature (SAS) granting read permissions on the blob, use a managed identity with read permission, or set the ACL for the blob or its container to allow public access.
     */
    httpUrl?: pulumi.Input<string>;
    /**
     * The reference to a user assigned identity associated with the Batch pool which a compute node will use.
     */
    identityReference?: pulumi.Input<ComputeNodeIdentityReferenceArgs>;
    /**
     * The autoStorageContainerName, storageContainerUrl and httpUrl properties are mutually exclusive and one of them must be specified. This URL must be readable and listable from compute nodes. There are three ways to get such a URL for a container in Azure storage: include a Shared Access Signature (SAS) granting read and list permissions on the container, use a managed identity with read and list permissions, or set the ACL for the container to allow public access.
     */
    storageContainerUrl?: pulumi.Input<string>;
}

/**
 * The configuration parameters used while performing a rolling upgrade.
 */
export interface RollingUpgradePolicyArgs {
    /**
     * Allow VMSS to ignore AZ boundaries when constructing upgrade batches. Take into consideration the Update Domain and maxBatchInstancePercent to determine the batch size. If this field is not set, Azure Azure Batch will not set its default value. The value of enableCrossZoneUpgrade on the created VirtualMachineScaleSet will be decided by the default configurations on VirtualMachineScaleSet. This field is able to be set to true or false only when using NodePlacementConfiguration as Zonal.
     */
    enableCrossZoneUpgrade?: pulumi.Input<boolean>;
    /**
     * The maximum percent of total virtual machine instances that will be upgraded simultaneously by the rolling upgrade in one batch. As this is a maximum, unhealthy instances in previous or future batches can cause the percentage of instances in a batch to decrease to ensure higher reliability. The value of this field should be between 5 and 100, inclusive. If both maxBatchInstancePercent and maxUnhealthyInstancePercent are assigned with value, the value of maxBatchInstancePercent should not be more than maxUnhealthyInstancePercent.
     */
    maxBatchInstancePercent?: pulumi.Input<number>;
    /**
     * The maximum percentage of the total virtual machine instances in the scale set that can be simultaneously unhealthy, either as a result of being upgraded, or by being found in an unhealthy state by the virtual machine health checks before the rolling upgrade aborts. This constraint will be checked prior to starting any batch. The value of this field should be between 5 and 100, inclusive. If both maxBatchInstancePercent and maxUnhealthyInstancePercent are assigned with value, the value of maxBatchInstancePercent should not be more than maxUnhealthyInstancePercent.
     */
    maxUnhealthyInstancePercent?: pulumi.Input<number>;
    /**
     * The maximum percentage of upgraded virtual machine instances that can be found to be in an unhealthy state. This check will happen after each batch is upgraded. If this percentage is ever exceeded, the rolling update aborts. The value of this field should be between 0 and 100, inclusive.
     */
    maxUnhealthyUpgradedInstancePercent?: pulumi.Input<number>;
    /**
     * The wait time between completing the update for all virtual machines in one batch and starting the next batch. The time duration should be specified in ISO 8601 format.
     */
    pauseTimeBetweenBatches?: pulumi.Input<string>;
    /**
     * Upgrade all unhealthy instances in a scale set before any healthy instances.
     */
    prioritizeUnhealthyInstances?: pulumi.Input<boolean>;
    /**
     * Rollback failed instances to previous model if the Rolling Upgrade policy is violated.
     */
    rollbackFailedInstancesOnPolicyBreach?: pulumi.Input<boolean>;
}

/**
 * Defines the desired size of the pool. This can either be 'fixedScale' where the requested targetDedicatedNodes is specified, or 'autoScale' which defines a formula which is periodically reevaluated. If this property is not specified, the pool will have a fixed scale with 0 targetDedicatedNodes.
 */
export interface ScaleSettingsArgs {
    /**
     * This property and fixedScale are mutually exclusive and one of the properties must be specified.
     */
    autoScale?: pulumi.Input<AutoScaleSettingsArgs>;
    /**
     * This property and autoScale are mutually exclusive and one of the properties must be specified.
     */
    fixedScale?: pulumi.Input<FixedScaleSettingsArgs>;
}
/**
 * scaleSettingsArgsProvideDefaults sets the appropriate defaults for ScaleSettingsArgs
 */
export function scaleSettingsArgsProvideDefaults(val: ScaleSettingsArgs): ScaleSettingsArgs {
    return {
        ...val,
        fixedScale: (val.fixedScale ? pulumi.output(val.fixedScale).apply(fixedScaleSettingsArgsProvideDefaults) : undefined),
    };
}

/**
 * Specifies the security profile settings for the virtual machine or virtual machine scale set.
 */
export interface SecurityProfileArgs {
    /**
     * This property can be used by user in the request to enable or disable the Host Encryption for the virtual machine or virtual machine scale set. This will enable the encryption for all the disks including Resource/Temp disk at host itself.
     */
    encryptionAtHost?: pulumi.Input<boolean>;
    securityType?: pulumi.Input<enums.SecurityTypes>;
    /**
     * Specifies the security settings like secure boot and vTPM used while creating the virtual machine.
     */
    uefiSettings?: pulumi.Input<UefiSettingsArgs>;
}

/**
 * Specifies the service artifact reference id used to set same image version for all virtual machines in the scale set when using 'latest' image version.
 */
export interface ServiceArtifactReferenceArgs {
    /**
     * The service artifact reference id in the form of /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/galleries/{galleryName}/serviceArtifacts/{serviceArtifactName}/vmArtifactsProfiles/{vmArtifactsProfilesName}
     */
    id: pulumi.Input<string>;
}

/**
 * In some cases the start task may be re-run even though the node was not rebooted. Due to this, start tasks should be idempotent and exit gracefully if the setup they're performing has already been done. Special care should be taken to avoid start tasks which create breakaway process or install/launch services from the start task working directory, as this will block Batch from being able to re-run the start task.
 */
export interface StartTaskArgs {
    /**
     * The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. Required if any other properties of the startTask are specified.
     */
    commandLine?: pulumi.Input<string>;
    /**
     * When this is specified, all directories recursively below the AZ_BATCH_NODE_ROOT_DIR (the root of Azure Batch directories on the node) are mapped into the container, all task environment variables are mapped into the container, and the task command line is executed in the container.
     */
    containerSettings?: pulumi.Input<TaskContainerSettingsArgs>;
    environmentSettings?: pulumi.Input<pulumi.Input<EnvironmentSettingArgs>[]>;
    /**
     * The Batch service retries a task if its exit code is nonzero. Note that this value specifically controls the number of retries. The Batch service will try the task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries the task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry the task. If the maximum retry count is -1, the Batch service retries the task without limit. Default is 0
     */
    maxTaskRetryCount?: pulumi.Input<number>;
    resourceFiles?: pulumi.Input<pulumi.Input<ResourceFileArgs>[]>;
    /**
     * If omitted, the task runs as a non-administrative user unique to the task.
     */
    userIdentity?: pulumi.Input<UserIdentityArgs>;
    /**
     * If true and the start task fails on a compute node, the Batch service retries the start task up to its maximum retry count (maxTaskRetryCount). If the task has still not completed successfully after all retries, then the Batch service marks the compute node unusable, and will not schedule tasks to it. This condition can be detected via the node state and scheduling error detail. If false, the Batch service will not wait for the start task to complete. In this case, other tasks can start executing on the compute node while the start task is still running; and even if the start task fails, new tasks will continue to be scheduled on the node. The default is true.
     */
    waitForSuccess?: pulumi.Input<boolean>;
}
/**
 * startTaskArgsProvideDefaults sets the appropriate defaults for StartTaskArgs
 */
export function startTaskArgsProvideDefaults(val: StartTaskArgs): StartTaskArgs {
    return {
        ...val,
        maxTaskRetryCount: (val.maxTaskRetryCount) ?? 0,
    };
}

export interface TaskContainerSettingsArgs {
    /**
     * If this array is null or be not present, container task will mount entire temporary disk drive in windows (or AZ_BATCH_NODE_ROOT_DIR in Linux). It won't' mount any data paths into container if this array is set as empty.
     */
    containerHostBatchBindMounts?: pulumi.Input<pulumi.Input<ContainerHostBatchBindMountEntryArgs>[]>;
    /**
     * These additional options are supplied as arguments to the "docker create" command, in addition to those controlled by the Batch Service.
     */
    containerRunOptions?: pulumi.Input<string>;
    /**
     * This is the full image reference, as would be specified to "docker pull". If no tag is provided as part of the image name, the tag ":latest" is used as a default.
     */
    imageName: pulumi.Input<string>;
    /**
     * This setting can be omitted if was already provided at pool creation.
     */
    registry?: pulumi.Input<ContainerRegistryArgs>;
    workingDirectory?: pulumi.Input<enums.ContainerWorkingDirectory>;
}

export interface TaskSchedulingPolicyArgs {
    nodeFillType: pulumi.Input<enums.ComputeNodeFillType>;
}
/**
 * taskSchedulingPolicyArgsProvideDefaults sets the appropriate defaults for TaskSchedulingPolicyArgs
 */
export function taskSchedulingPolicyArgsProvideDefaults(val: TaskSchedulingPolicyArgs): TaskSchedulingPolicyArgs {
    return {
        ...val,
        nodeFillType: (val.nodeFillType) ?? "Spread",
    };
}

/**
 * Specifies the security settings like secure boot and vTPM used while creating the virtual machine.
 */
export interface UefiSettingsArgs {
    /**
     * Specifies whether secure boot should be enabled on the virtual machine.
     */
    secureBootEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies whether vTPM should be enabled on the virtual machine.
     */
    vTpmEnabled?: pulumi.Input<boolean>;
}

/**
 * Describes an upgrade policy - automatic, manual, or rolling.
 */
export interface UpgradePolicyArgs {
    /**
     * The configuration parameters used for performing automatic OS upgrade.
     */
    automaticOSUpgradePolicy?: pulumi.Input<AutomaticOSUpgradePolicyArgs>;
    mode: pulumi.Input<enums.UpgradeMode>;
    /**
     * The configuration parameters used while performing a rolling upgrade.
     */
    rollingUpgradePolicy?: pulumi.Input<RollingUpgradePolicyArgs>;
}

export interface UserAccountArgs {
    /**
     * nonAdmin - The auto user is a standard user without elevated access. admin - The auto user is a user with elevated access and operates with full Administrator permissions. The default value is nonAdmin.
     */
    elevationLevel?: pulumi.Input<enums.ElevationLevel>;
    /**
     * This property is ignored if specified on a Windows pool. If not specified, the user is created with the default options.
     */
    linuxUserConfiguration?: pulumi.Input<LinuxUserConfigurationArgs>;
    name: pulumi.Input<string>;
    password: pulumi.Input<string>;
    /**
     * This property can only be specified if the user is on a Windows pool. If not specified and on a Windows pool, the user is created with the default options.
     */
    windowsUserConfiguration?: pulumi.Input<WindowsUserConfigurationArgs>;
}

/**
 * Specify either the userName or autoUser property, but not both.
 */
export interface UserIdentityArgs {
    /**
     * The userName and autoUser properties are mutually exclusive; you must specify one but not both.
     */
    autoUser?: pulumi.Input<AutoUserSpecificationArgs>;
    /**
     * The userName and autoUser properties are mutually exclusive; you must specify one but not both.
     */
    userName?: pulumi.Input<string>;
}

/**
 * Specifies the security profile settings for the managed disk. **Note**: It can only be set for Confidential VMs and is required when using Confidential VMs.
 */
export interface VMDiskSecurityProfileArgs {
    securityEncryptionType?: pulumi.Input<string | enums.SecurityEncryptionTypes>;
}

export interface VMExtensionArgs {
    /**
     * Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
     */
    autoUpgradeMinorVersion?: pulumi.Input<boolean>;
    /**
     * Indicates whether the extension should be automatically upgraded by the platform if there is a newer version of the extension available.
     */
    enableAutomaticUpgrade?: pulumi.Input<boolean>;
    name: pulumi.Input<string>;
    /**
     * The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all. 
     */
    protectedSettings?: any;
    /**
     * Collection of extension names after which this extension needs to be provisioned.
     */
    provisionAfterExtensions?: pulumi.Input<pulumi.Input<string>[]>;
    publisher: pulumi.Input<string>;
    settings?: any;
    type: pulumi.Input<string>;
    typeHandlerVersion?: pulumi.Input<string>;
}

export interface VirtualMachineConfigurationArgs {
    /**
     * If specified, setup is performed on each node in the pool to allow tasks to run in containers. All regular tasks and job manager tasks run on this pool must specify the containerSettings property, and all other tasks may specify it.
     */
    containerConfiguration?: pulumi.Input<ContainerConfigurationArgs>;
    /**
     * This property must be specified if the compute nodes in the pool need to have empty data disks attached to them.
     */
    dataDisks?: pulumi.Input<pulumi.Input<DataDiskArgs>[]>;
    /**
     * If specified, encryption is performed on each node in the pool during node provisioning.
     */
    diskEncryptionConfiguration?: pulumi.Input<DiskEncryptionConfigurationArgs>;
    /**
     * If specified, the extensions mentioned in this configuration will be installed on each node.
     */
    extensions?: pulumi.Input<pulumi.Input<VMExtensionArgs>[]>;
    imageReference: pulumi.Input<ImageReferenceArgs>;
    /**
     * This only applies to images that contain the Windows operating system, and should only be used when you hold valid on-premises licenses for the nodes which will be deployed. If omitted, no on-premises licensing discount is applied. Values are:
     *
     *  Windows_Server - The on-premises license is for Windows Server.
     *  Windows_Client - The on-premises license is for Windows Client.
     */
    licenseType?: pulumi.Input<string>;
    /**
     * The Batch node agent is a program that runs on each node in the pool, and provides the command-and-control interface between the node and the Batch service. There are different implementations of the node agent, known as SKUs, for different operating systems. You must specify a node agent SKU which matches the selected image reference. To get the list of supported node agent SKUs along with their list of verified image references, see the 'List supported node agent SKUs' operation.
     */
    nodeAgentSkuId: pulumi.Input<string>;
    /**
     * This configuration will specify rules on how nodes in the pool will be physically allocated.
     */
    nodePlacementConfiguration?: pulumi.Input<NodePlacementConfigurationArgs>;
    /**
     * Contains configuration for ephemeral OSDisk settings.
     */
    osDisk?: pulumi.Input<OSDiskArgs>;
    /**
     * Specifies the security profile settings for the virtual machine or virtual machine scale set.
     */
    securityProfile?: pulumi.Input<SecurityProfileArgs>;
    /**
     * The service artifact reference id in the form of /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/galleries/{galleryName}/serviceArtifacts/{serviceArtifactName}/vmArtifactsProfiles/{vmArtifactsProfilesName}
     */
    serviceArtifactReference?: pulumi.Input<ServiceArtifactReferenceArgs>;
    /**
     * This property must not be specified if the imageReference specifies a Linux OS image.
     */
    windowsConfiguration?: pulumi.Input<WindowsConfigurationArgs>;
}

export interface WindowsConfigurationArgs {
    /**
     * If omitted, the default value is true.
     */
    enableAutomaticUpdates?: pulumi.Input<boolean>;
}

export interface WindowsUserConfigurationArgs {
    /**
     * Specifies login mode for the user. The default value is Interactive.
     */
    loginMode?: pulumi.Input<enums.LoginMode>;
}
