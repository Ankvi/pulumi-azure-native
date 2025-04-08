import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export interface ApplicationPackageReferenceResponse {
    id: string;
    /**
     * If this is omitted, and no default version is specified for this application, the request fails with the error code InvalidApplicationPackageReferences. If you are calling the REST API directly, the HTTP status code is 409.
     */
    version?: string;
}

export interface AutoScaleRunErrorResponse {
    /**
     * An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
     */
    code: string;
    details?: AutoScaleRunErrorResponse[];
    /**
     * A message describing the error, intended to be suitable for display in a user interface.
     */
    message: string;
}

export interface AutoScaleRunResponse {
    error?: AutoScaleRunErrorResponse;
    evaluationTime: string;
    /**
     * Each variable value is returned in the form $variable=value, and variables are separated by semicolons.
     */
    results?: string;
}

export interface AutoScaleSettingsResponse {
    /**
     * If omitted, the default value is 15 minutes (PT15M).
     */
    evaluationInterval?: string;
    formula: string;
}

/**
 * Contains information about the auto-storage account associated with a Batch account.
 */
export interface AutoStoragePropertiesResponse {
    /**
     * The authentication mode which the Batch service will use to manage the auto-storage account.
     */
    authenticationMode?: string;
    /**
     * The UTC time at which storage keys were last synchronized with the Batch account.
     */
    lastKeySync: string;
    /**
     * The identity referenced here must be assigned to pools which have compute nodes that need access to auto-storage.
     */
    nodeIdentityReference?: ComputeNodeIdentityReferenceResponse;
    /**
     * The resource ID of the storage account to be used for auto-storage account.
     */
    storageAccountId: string;
}
/**
 * autoStoragePropertiesResponseProvideDefaults sets the appropriate defaults for AutoStoragePropertiesResponse
 */
export function autoStoragePropertiesResponseProvideDefaults(val: AutoStoragePropertiesResponse): AutoStoragePropertiesResponse {
    return {
        ...val,
        authenticationMode: (val.authenticationMode) ?? "StorageKeys",
    };
}

export interface AutoUserSpecificationResponse {
    /**
     * The default value is nonAdmin.
     */
    elevationLevel?: string;
    /**
     * The default value is Pool. If the pool is running Windows a value of Task should be specified if stricter isolation between tasks is required. For example, if the task mutates the registry in a way which could impact other tasks, or if certificates have been specified on the pool which should not be accessible by normal tasks but should be accessible by start tasks.
     */
    scope?: string;
}

/**
 * The configuration parameters used for performing automatic OS upgrade.
 */
export interface AutomaticOSUpgradePolicyResponse {
    /**
     * Whether OS image rollback feature should be disabled.
     */
    disableAutomaticRollback?: boolean;
    /**
     * Indicates whether OS upgrades should automatically be applied to scale set instances in a rolling fashion when a newer version of the OS image becomes available. <br /><br /> If this is set to true for Windows based pools, [WindowsConfiguration.enableAutomaticUpdates](https://learn.microsoft.com/rest/api/batchmanagement/pool/create?tabs=HTTP#windowsconfiguration) cannot be set to true.
     */
    enableAutomaticOSUpgrade?: boolean;
    /**
     * Defer OS upgrades on the TVMs if they are running tasks.
     */
    osRollingUpgradeDeferral?: boolean;
    /**
     * Indicates whether rolling upgrade policy should be used during Auto OS Upgrade. Auto OS Upgrade will fallback to the default policy if no policy is defined on the VMSS.
     */
    useRollingUpgradePolicy?: boolean;
}

export interface AzureBlobFileSystemConfigurationResponse {
    /**
     * This property is mutually exclusive with both sasKey and identity; exactly one must be specified.
     */
    accountKey?: string;
    accountName: string;
    /**
     * These are 'net use' options in Windows and 'mount' options in Linux.
     */
    blobfuseOptions?: string;
    containerName: string;
    /**
     * This property is mutually exclusive with both accountKey and sasKey; exactly one must be specified.
     */
    identityReference?: ComputeNodeIdentityReferenceResponse;
    /**
     * All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable.
     */
    relativeMountPath: string;
    /**
     * This property is mutually exclusive with both accountKey and identity; exactly one must be specified.
     */
    sasKey?: string;
}

export interface AzureFileShareConfigurationResponse {
    accountKey: string;
    accountName: string;
    /**
     * This is of the form 'https://{account}.file.core.windows.net/'.
     */
    azureFileUrl: string;
    /**
     * These are 'net use' options in Windows and 'mount' options in Linux.
     */
    mountOptions?: string;
    /**
     * All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable.
     */
    relativeMountPath: string;
}

/**
 * The identity of the Batch account, if configured. This is used when the user specifies 'Microsoft.KeyVault' as their Batch account encryption configuration or when `ManagedIdentity` is selected as the auto-storage authentication mode.
 */
export interface BatchAccountIdentityResponse {
    /**
     * The principal id of the Batch account. This property will only be provided for a system assigned identity.
     */
    principalId: string;
    /**
     * The tenant id associated with the Batch account. This property will only be provided for a system assigned identity.
     */
    tenantId: string;
    /**
     * The type of identity used for the Batch account.
     */
    type: string;
    /**
     * The list of user identities associated with the Batch account.
     */
    userAssignedIdentities?: {[key: string]: UserAssignedIdentitiesResponse};
}

/**
 * The identity of the Batch pool, if configured. If the pool identity is updated during update an existing pool, only the new vms which are created after the pool shrinks to 0 will have the updated identities
 */
export interface BatchPoolIdentityResponse {
    /**
     * The type of identity used for the Batch Pool.
     */
    type: string;
    /**
     * The list of user identities associated with the Batch pool.
     */
    userAssignedIdentities?: {[key: string]: UserAssignedIdentitiesResponse};
}

export interface CIFSMountConfigurationResponse {
    /**
     * These are 'net use' options in Windows and 'mount' options in Linux.
     */
    mountOptions?: string;
    password: string;
    /**
     * All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable.
     */
    relativeMountPath: string;
    source: string;
    userName: string;
}

/**
 * Warning: This object is deprecated and will be removed after February, 2024. Please use the [Azure KeyVault Extension](https://learn.microsoft.com/azure/batch/batch-certificate-migration-guide) instead.
 */
export interface CertificateReferenceResponse {
    id: string;
    /**
     * The default value is currentUser. This property is applicable only for pools configured with Windows compute nodes. For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory.
     */
    storeLocation?: string;
    /**
     * This property is applicable only for pools configured with Windows compute nodes. Common store names include: My, Root, CA, Trust, Disallowed, TrustedPeople, TrustedPublisher, AuthRoot, AddressBook, but any custom store name can also be used. The default value is My.
     */
    storeName?: string;
    visibility?: string[];
}

/**
 * The reference to a user assigned identity associated with the Batch pool which a compute node will use.
 */
export interface ComputeNodeIdentityReferenceResponse {
    /**
     * The ARM resource id of the user assigned identity.
     */
    resourceId?: string;
}

export interface ContainerConfigurationResponse {
    /**
     * This is the full image reference, as would be specified to "docker pull". An image will be sourced from the default Docker registry unless the image is fully qualified with an alternative registry.
     */
    containerImageNames?: string[];
    /**
     * If any images must be downloaded from a private registry which requires credentials, then those credentials must be provided here.
     */
    containerRegistries?: ContainerRegistryResponse[];
    type: string;
}

export interface ContainerHostBatchBindMountEntryResponse {
    /**
     * For Linux, if you mount this path as a read/write mode, this does not mean that all users in container have the read/write access for the path, it depends on the access in host VM. If this path is mounted read-only, all users within the container will not be able to modify the path.
     */
    isReadOnly?: boolean;
    source?: string;
}

export interface ContainerRegistryResponse {
    /**
     * The reference to a user assigned identity associated with the Batch pool which a compute node will use.
     */
    identityReference?: ComputeNodeIdentityReferenceResponse;
    password?: string;
    /**
     * If omitted, the default is "docker.io".
     */
    registryServer?: string;
    userName?: string;
}

/**
 * Settings which will be used by the data disks associated to Compute Nodes in the Pool. When using attached data disks, you need to mount and format the disks from within a VM to use them.
 */
export interface DataDiskResponse {
    /**
     * Values are:
     *
     *  none - The caching mode for the disk is not enabled.
     *  readOnly - The caching mode for the disk is read only.
     *  readWrite - The caching mode for the disk is read and write.
     *
     *  The default value for caching is none. For information about the caching options see: https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/27/exploring-windows-azure-drives-disks-and-images/.
     */
    caching?: string;
    diskSizeGB: number;
    /**
     * The lun is used to uniquely identify each data disk. If attaching multiple disks, each should have a distinct lun. The value must be between 0 and 63, inclusive.
     */
    lun: number;
    /**
     * If omitted, the default is "Standard_LRS". Values are:
     *
     *  Standard_LRS - The data disk should use standard locally redundant storage.
     *  Premium_LRS - The data disk should use premium locally redundant storage.
     */
    storageAccountType?: string;
}

export interface DeploymentConfigurationResponse {
    virtualMachineConfiguration?: VirtualMachineConfigurationResponse;
}

export interface DiffDiskSettingsResponse {
    /**
     * This property can be used by user in the request to choose which location the operating system should be in. e.g., cache disk space for Ephemeral OS disk provisioning. For more information on Ephemeral OS disk size requirements, please refer to Ephemeral OS disk size requirements for Windows VMs at https://learn.microsoft.com/azure/virtual-machines/windows/ephemeral-os-disks#size-requirements and Linux VMs at https://learn.microsoft.com/azure/virtual-machines/linux/ephemeral-os-disks#size-requirements.
     */
    placement?: string;
}

/**
 * The disk encryption configuration applied on compute nodes in the pool. Disk encryption configuration is not supported on Linux pool created with Virtual Machine Image or Azure Compute Gallery Image.
 */
export interface DiskEncryptionConfigurationResponse {
    /**
     * On Linux pool, only "TemporaryDisk" is supported; on Windows pool, "OsDisk" and "TemporaryDisk" must be specified.
     */
    targets?: string[];
}

/**
 * Configures how customer data is encrypted inside the Batch account. By default, accounts are encrypted using a Microsoft managed key. For additional control, a customer-managed key can be used instead.
 */
export interface EncryptionPropertiesResponse {
    /**
     * Type of the key source.
     */
    keySource?: string;
    /**
     * Additional details when using Microsoft.KeyVault
     */
    keyVaultProperties?: KeyVaultPropertiesResponse;
}

/**
 * Network access profile for Batch endpoint.
 */
export interface EndpointAccessProfileResponse {
    /**
     * Default action for endpoint access. It is only applicable when publicNetworkAccess is enabled.
     */
    defaultAction: string;
    /**
     * Array of IP ranges to filter client IP address.
     */
    ipRules?: IPRuleResponse[];
}

export interface EnvironmentSettingResponse {
    name: string;
    value?: string;
}

export interface FixedScaleSettingsResponse {
    /**
     * The default value is 15 minutes. Timeout values use ISO 8601 format. For example, use PT10M for 10 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service rejects the request with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request).
     */
    resizeTimeout?: string;
    /**
     * At least one of targetDedicatedNodes, targetLowPriorityNodes must be set.
     */
    targetDedicatedNodes?: number;
    /**
     * At least one of targetDedicatedNodes, targetLowPriorityNodes must be set.
     */
    targetLowPriorityNodes?: number;
}
/**
 * fixedScaleSettingsResponseProvideDefaults sets the appropriate defaults for FixedScaleSettingsResponse
 */
export function fixedScaleSettingsResponseProvideDefaults(val: FixedScaleSettingsResponse): FixedScaleSettingsResponse {
    return {
        ...val,
        resizeTimeout: (val.resizeTimeout) ?? "PT15M",
    };
}

/**
 * Rule to filter client IP address.
 */
export interface IPRuleResponse {
    /**
     * Action when client IP address is matched.
     */
    action: string;
    /**
     * IPv4 address, or IPv4 address range in CIDR format.
     */
    value: string;
}

export interface ImageReferenceResponse {
    /**
     * This property is mutually exclusive with other properties and can be fetched from community gallery image GET call.
     */
    communityGalleryImageId?: string;
    /**
     * This property is mutually exclusive with other properties. The Azure Compute Gallery Image must have replicas in the same region as the Azure Batch account. For information about the firewall settings for the Batch node agent to communicate with the Batch service see https://learn.microsoft.com/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration.
     */
    id?: string;
    /**
     * For example, UbuntuServer or WindowsServer.
     */
    offer?: string;
    /**
     * For example, Canonical or MicrosoftWindowsServer.
     */
    publisher?: string;
    /**
     * This property is mutually exclusive with other properties and can be fetched from shared gallery image GET call.
     */
    sharedGalleryImageId?: string;
    /**
     * For example, 18.04-LTS or 2022-datacenter.
     */
    sku?: string;
    /**
     * A value of 'latest' can be specified to select the latest version of an image. If omitted, the default is 'latest'.
     */
    version?: string;
}

export interface InboundNatPoolResponse {
    /**
     * This must be unique within a Batch pool. Acceptable values are between 1 and 65535 except for 29876 and 29877 as these are reserved. If any reserved values are provided the request fails with HTTP status code 400.
     */
    backendPort: number;
    /**
     * Acceptable values range between 1 and 65534 except ports from 50000 to 55000 which are reserved by the Batch service. All ranges within a pool must be distinct and cannot overlap. If any reserved or overlapping values are provided the request fails with HTTP status code 400.
     */
    frontendPortRangeEnd: number;
    /**
     * Acceptable values range between 1 and 65534 except ports from 50000 to 55000 which are reserved. All ranges within a pool must be distinct and cannot overlap. If any reserved or overlapping values are provided the request fails with HTTP status code 400.
     */
    frontendPortRangeStart: number;
    /**
     * The name must be unique within a Batch pool, can contain letters, numbers, underscores, periods, and hyphens. Names must start with a letter or number, must end with a letter, number, or underscore, and cannot exceed 77 characters.  If any invalid values are provided the request fails with HTTP status code 400.
     */
    name: string;
    /**
     * The maximum number of rules that can be specified across all the endpoints on a Batch pool is 25. If no network security group rules are specified, a default rule will be created to allow inbound access to the specified backendPort. If the maximum number of network security group rules is exceeded the request fails with HTTP status code 400.
     */
    networkSecurityGroupRules?: NetworkSecurityGroupRuleResponse[];
    protocol: string;
}

/**
 * KeyVault configuration when using an encryption KeySource of Microsoft.KeyVault.
 */
export interface KeyVaultPropertiesResponse {
    /**
     * Full path to the secret with or without version. Example https://mykeyvault.vault.azure.net/keys/testkey/6e34a81fef704045975661e297a4c053. or https://mykeyvault.vault.azure.net/keys/testkey. To be usable the following prerequisites must be met:
     *
     *  The Batch Account has a System Assigned identity
     *  The account identity has been granted Key/Get, Key/Unwrap and Key/Wrap permissions
     *  The KeyVault has soft-delete and purge protection enabled
     */
    keyIdentifier?: string;
}

/**
 * Identifies the Azure key vault associated with a Batch account.
 */
export interface KeyVaultReferenceResponse {
    /**
     * The resource ID of the Azure key vault associated with the Batch account.
     */
    id: string;
    /**
     * The URL of the Azure key vault associated with the Batch account.
     */
    url: string;
}

export interface LinuxUserConfigurationResponse {
    /**
     * The uid and gid properties must be specified together or not at all. If not specified the underlying operating system picks the gid.
     */
    gid?: number;
    /**
     * The private key must not be password protected. The private key is used to automatically configure asymmetric-key based authentication for SSH between nodes in a Linux pool when the pool's enableInterNodeCommunication property is true (it is ignored if enableInterNodeCommunication is false). It does this by placing the key pair into the user's .ssh directory. If not specified, password-less SSH is not configured between nodes (no modification of the user's .ssh directory is done).
     */
    sshPrivateKey?: string;
    /**
     * The uid and gid properties must be specified together or not at all. If not specified the underlying operating system picks the uid.
     */
    uid?: number;
}

export interface ManagedDiskResponse {
    /**
     * Specifies the security profile settings for the managed disk. **Note**: It can only be set for Confidential VMs and is required when using Confidential VMs.
     */
    securityProfile?: VMDiskSecurityProfileResponse;
    storageAccountType?: string;
}

/**
 * The Batch service does not assign any meaning to this metadata; it is solely for the use of user code.
 */
export interface MetadataItemResponse {
    name: string;
    value: string;
}

export interface MountConfigurationResponse {
    /**
     * This property is mutually exclusive with all other properties.
     */
    azureBlobFileSystemConfiguration?: AzureBlobFileSystemConfigurationResponse;
    /**
     * This property is mutually exclusive with all other properties.
     */
    azureFileShareConfiguration?: AzureFileShareConfigurationResponse;
    /**
     * This property is mutually exclusive with all other properties.
     */
    cifsMountConfiguration?: CIFSMountConfigurationResponse;
    /**
     * This property is mutually exclusive with all other properties.
     */
    nfsMountConfiguration?: NFSMountConfigurationResponse;
}

export interface NFSMountConfigurationResponse {
    /**
     * These are 'net use' options in Windows and 'mount' options in Linux.
     */
    mountOptions?: string;
    /**
     * All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable.
     */
    relativeMountPath: string;
    source: string;
}

/**
 * The network configuration for a pool.
 */
export interface NetworkConfigurationResponse {
    dynamicVnetAssignmentScope?: string;
    /**
     * Accelerated networking enables single root I/O virtualization (SR-IOV) to a VM, which may lead to improved networking performance. For more details, see: https://learn.microsoft.com/azure/virtual-network/accelerated-networking-overview.
     */
    enableAcceleratedNetworking?: boolean;
    endpointConfiguration?: PoolEndpointConfigurationResponse;
    /**
     * The public IP Address configuration of the networking configuration of a Pool.
     */
    publicIPAddressConfiguration?: PublicIPAddressConfigurationResponse;
    /**
     * The virtual network must be in the same region and subscription as the Azure Batch account. The specified subnet should have enough free IP addresses to accommodate the number of nodes in the pool. If the subnet doesn't have enough free IP addresses, the pool will partially allocate compute nodes and a resize error will occur. The 'MicrosoftAzureBatch' service principal must have the 'Classic Virtual Machine Contributor' Role-Based Access Control (RBAC) role for the specified VNet. The specified subnet must allow communication from the Azure Batch service to be able to schedule tasks on the compute nodes. This can be verified by checking if the specified VNet has any associated Network Security Groups (NSG). If communication to the compute nodes in the specified subnet is denied by an NSG, then the Batch service will set the state of the compute nodes to unusable. If the specified VNet has any associated Network Security Groups (NSG), then a few reserved system ports must be enabled for inbound communication，including ports 29876 and 29877. Also enable outbound connections to Azure Storage on port 443. For more details see: https://learn.microsoft.com/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration
     */
    subnetId?: string;
}
/**
 * networkConfigurationResponseProvideDefaults sets the appropriate defaults for NetworkConfigurationResponse
 */
export function networkConfigurationResponseProvideDefaults(val: NetworkConfigurationResponse): NetworkConfigurationResponse {
    return {
        ...val,
        dynamicVnetAssignmentScope: (val.dynamicVnetAssignmentScope) ?? "none",
    };
}

/**
 * Network profile for Batch account, which contains network rule settings for each endpoint.
 */
export interface NetworkProfileResponse {
    /**
     * Network access profile for batchAccount endpoint (Batch account data plane API).
     */
    accountAccess?: EndpointAccessProfileResponse;
    /**
     * Network access profile for nodeManagement endpoint (Batch service managing compute nodes for Batch pools).
     */
    nodeManagementAccess?: EndpointAccessProfileResponse;
}

export interface NetworkSecurityGroupRuleResponse {
    access: string;
    /**
     * Priorities within a pool must be unique and are evaluated in order of priority. The lower the number the higher the priority. For example, rules could be specified with order numbers of 150, 250, and 350. The rule with the order number of 150 takes precedence over the rule that has an order of 250. Allowed priorities are 150 to 4096. If any reserved or duplicate values are provided the request fails with HTTP status code 400.
     */
    priority: number;
    /**
     * Valid values are a single IP address (i.e. 10.10.10.10), IP subnet (i.e. 192.168.1.0/24), default tag, or * (for all addresses).  If any other values are provided the request fails with HTTP status code 400.
     */
    sourceAddressPrefix: string;
    /**
     * Valid values are '*' (for all ports 0 - 65535) or arrays of ports or port ranges (i.e. 100-200). The ports should in the range of 0 to 65535 and the port ranges or ports can't overlap. If any other values are provided the request fails with HTTP status code 400. Default value will be *.
     */
    sourcePortRanges?: string[];
}

/**
 * Allocation configuration used by Batch Service to provision the nodes.
 */
export interface NodePlacementConfigurationResponse {
    /**
     * Allocation policy used by Batch Service to provision the nodes. If not specified, Batch will use the regional policy.
     */
    policy?: string;
}

export interface OSDiskResponse {
    caching?: string;
    diskSizeGB?: number;
    ephemeralOSDiskSettings?: DiffDiskSettingsResponse;
    managedDisk?: ManagedDiskResponse;
    writeAcceleratorEnabled?: boolean;
}

export interface PoolEndpointConfigurationResponse {
    /**
     * The maximum number of inbound NAT pools per Batch pool is 5. If the maximum number of inbound NAT pools is exceeded the request fails with HTTP status code 400. This cannot be specified if the IPAddressProvisioningType is NoPublicIPAddresses.
     */
    inboundNatPools: InboundNatPoolResponse[];
}

/**
 * Contains information about a private link resource.
 */
export interface PrivateEndpointConnectionResponse {
    /**
     * The ETag of the resource, used for concurrency statements.
     */
    etag: string;
    /**
     * The value has one and only one group id.
     */
    groupIds: string[];
    /**
     * The ID of the resource.
     */
    id: string;
    /**
     * The name of the resource.
     */
    name: string;
    /**
     * The private endpoint of the private endpoint connection.
     */
    privateEndpoint: PrivateEndpointResponse;
    /**
     * The private link service connection state of the private endpoint connection
     */
    privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateResponse;
    provisioningState: string;
    /**
     * The tags of the resource.
     */
    tags?: {[key: string]: string};
    /**
     * The type of the resource.
     */
    type: string;
}

/**
 * The private endpoint of the private endpoint connection.
 */
export interface PrivateEndpointResponse {
    id: string;
}

/**
 * The private link service connection state of the private endpoint connection
 */
export interface PrivateLinkServiceConnectionStateResponse {
    actionsRequired: string;
    description?: string;
    status: string;
}

/**
 * The public IP Address configuration of the networking configuration of a Pool.
 */
export interface PublicIPAddressConfigurationResponse {
    /**
     * The number of IPs specified here limits the maximum size of the Pool - 100 dedicated nodes or 100 Spot/low-priority nodes can be allocated for each public IP. For example, a pool needing 250 dedicated VMs would need at least 3 public IPs specified. Each element of this collection is of the form: /subscriptions/{subscription}/resourceGroups/{group}/providers/Microsoft.Network/publicIPAddresses/{ip}.
     */
    ipAddressIds?: string[];
    /**
     * The default value is BatchManaged
     */
    provision?: string;
}

export interface ResizeErrorResponse {
    /**
     * An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
     */
    code: string;
    details?: ResizeErrorResponse[];
    /**
     * A message describing the error, intended to be suitable for display in a user interface.
     */
    message: string;
}

/**
 * Describes either the current operation (if the pool AllocationState is Resizing) or the previously completed operation (if the AllocationState is Steady).
 */
export interface ResizeOperationStatusResponse {
    /**
     * This property is set only if an error occurred during the last pool resize, and only when the pool allocationState is Steady.
     */
    errors?: ResizeErrorResponse[];
    /**
     * The default value is 15 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service returns an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request).
     */
    resizeTimeout?: string;
    startTime?: string;
    targetDedicatedNodes?: number;
    targetLowPriorityNodes?: number;
}

export interface ResourceFileResponse {
    /**
     * The autoStorageContainerName, storageContainerUrl and httpUrl properties are mutually exclusive and one of them must be specified.
     */
    autoStorageContainerName?: string;
    /**
     * The property is valid only when autoStorageContainerName or storageContainerUrl is used. This prefix can be a partial filename or a subdirectory. If a prefix is not specified, all the files in the container will be downloaded.
     */
    blobPrefix?: string;
    /**
     * This property applies only to files being downloaded to Linux compute nodes. It will be ignored if it is specified for a resourceFile which will be downloaded to a Windows node. If this property is not specified for a Linux node, then a default value of 0770 is applied to the file.
     */
    fileMode?: string;
    /**
     * If the httpUrl property is specified, the filePath is required and describes the path which the file will be downloaded to, including the filename. Otherwise, if the autoStorageContainerName or storageContainerUrl property is specified, filePath is optional and is the directory to download the files to. In the case where filePath is used as a directory, any directory structure already associated with the input data will be retained in full and appended to the specified filePath directory. The specified relative path cannot break out of the task's working directory (for example by using '..').
     */
    filePath?: string;
    /**
     * The autoStorageContainerName, storageContainerUrl and httpUrl properties are mutually exclusive and one of them must be specified. If the URL points to Azure Blob Storage, it must be readable from compute nodes. There are three ways to get such a URL for a blob in Azure storage: include a Shared Access Signature (SAS) granting read permissions on the blob, use a managed identity with read permission, or set the ACL for the blob or its container to allow public access.
     */
    httpUrl?: string;
    /**
     * The reference to a user assigned identity associated with the Batch pool which a compute node will use.
     */
    identityReference?: ComputeNodeIdentityReferenceResponse;
    /**
     * The autoStorageContainerName, storageContainerUrl and httpUrl properties are mutually exclusive and one of them must be specified. This URL must be readable and listable from compute nodes. There are three ways to get such a URL for a container in Azure storage: include a Shared Access Signature (SAS) granting read and list permissions on the container, use a managed identity with read and list permissions, or set the ACL for the container to allow public access.
     */
    storageContainerUrl?: string;
}

/**
 * The configuration parameters used while performing a rolling upgrade.
 */
export interface RollingUpgradePolicyResponse {
    /**
     * Allow VMSS to ignore AZ boundaries when constructing upgrade batches. Take into consideration the Update Domain and maxBatchInstancePercent to determine the batch size. If this field is not set, Azure Azure Batch will not set its default value. The value of enableCrossZoneUpgrade on the created VirtualMachineScaleSet will be decided by the default configurations on VirtualMachineScaleSet. This field is able to be set to true or false only when using NodePlacementConfiguration as Zonal.
     */
    enableCrossZoneUpgrade?: boolean;
    /**
     * The maximum percent of total virtual machine instances that will be upgraded simultaneously by the rolling upgrade in one batch. As this is a maximum, unhealthy instances in previous or future batches can cause the percentage of instances in a batch to decrease to ensure higher reliability. The value of this field should be between 5 and 100, inclusive. If both maxBatchInstancePercent and maxUnhealthyInstancePercent are assigned with value, the value of maxBatchInstancePercent should not be more than maxUnhealthyInstancePercent.
     */
    maxBatchInstancePercent?: number;
    /**
     * The maximum percentage of the total virtual machine instances in the scale set that can be simultaneously unhealthy, either as a result of being upgraded, or by being found in an unhealthy state by the virtual machine health checks before the rolling upgrade aborts. This constraint will be checked prior to starting any batch. The value of this field should be between 5 and 100, inclusive. If both maxBatchInstancePercent and maxUnhealthyInstancePercent are assigned with value, the value of maxBatchInstancePercent should not be more than maxUnhealthyInstancePercent.
     */
    maxUnhealthyInstancePercent?: number;
    /**
     * The maximum percentage of upgraded virtual machine instances that can be found to be in an unhealthy state. This check will happen after each batch is upgraded. If this percentage is ever exceeded, the rolling update aborts. The value of this field should be between 0 and 100, inclusive.
     */
    maxUnhealthyUpgradedInstancePercent?: number;
    /**
     * The wait time between completing the update for all virtual machines in one batch and starting the next batch. The time duration should be specified in ISO 8601 format.
     */
    pauseTimeBetweenBatches?: string;
    /**
     * Upgrade all unhealthy instances in a scale set before any healthy instances.
     */
    prioritizeUnhealthyInstances?: boolean;
    /**
     * Rollback failed instances to previous model if the Rolling Upgrade policy is violated.
     */
    rollbackFailedInstancesOnPolicyBreach?: boolean;
}

/**
 * Defines the desired size of the pool. This can either be 'fixedScale' where the requested targetDedicatedNodes is specified, or 'autoScale' which defines a formula which is periodically reevaluated. If this property is not specified, the pool will have a fixed scale with 0 targetDedicatedNodes.
 */
export interface ScaleSettingsResponse {
    /**
     * This property and fixedScale are mutually exclusive and one of the properties must be specified.
     */
    autoScale?: AutoScaleSettingsResponse;
    /**
     * This property and autoScale are mutually exclusive and one of the properties must be specified.
     */
    fixedScale?: FixedScaleSettingsResponse;
}
/**
 * scaleSettingsResponseProvideDefaults sets the appropriate defaults for ScaleSettingsResponse
 */
export function scaleSettingsResponseProvideDefaults(val: ScaleSettingsResponse): ScaleSettingsResponse {
    return {
        ...val,
        fixedScale: (val.fixedScale ? fixedScaleSettingsResponseProvideDefaults(val.fixedScale) : undefined),
    };
}

/**
 * Specifies the security profile settings for the virtual machine or virtual machine scale set.
 */
export interface SecurityProfileResponse {
    /**
     * This property can be used by user in the request to enable or disable the Host Encryption for the virtual machine or virtual machine scale set. This will enable the encryption for all the disks including Resource/Temp disk at host itself.
     */
    encryptionAtHost?: boolean;
    securityType?: string;
    /**
     * Specifies the security settings like secure boot and vTPM used while creating the virtual machine.
     */
    uefiSettings?: UefiSettingsResponse;
}

/**
 * Specifies the service artifact reference id used to set same image version for all virtual machines in the scale set when using 'latest' image version.
 */
export interface ServiceArtifactReferenceResponse {
    /**
     * The service artifact reference id in the form of /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/galleries/{galleryName}/serviceArtifacts/{serviceArtifactName}/vmArtifactsProfiles/{vmArtifactsProfilesName}
     */
    id: string;
}

/**
 * In some cases the start task may be re-run even though the node was not rebooted. Due to this, start tasks should be idempotent and exit gracefully if the setup they're performing has already been done. Special care should be taken to avoid start tasks which create breakaway process or install/launch services from the start task working directory, as this will block Batch from being able to re-run the start task.
 */
export interface StartTaskResponse {
    /**
     * The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. Required if any other properties of the startTask are specified.
     */
    commandLine?: string;
    /**
     * When this is specified, all directories recursively below the AZ_BATCH_NODE_ROOT_DIR (the root of Azure Batch directories on the node) are mapped into the container, all task environment variables are mapped into the container, and the task command line is executed in the container.
     */
    containerSettings?: TaskContainerSettingsResponse;
    environmentSettings?: EnvironmentSettingResponse[];
    /**
     * The Batch service retries a task if its exit code is nonzero. Note that this value specifically controls the number of retries. The Batch service will try the task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries the task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry the task. If the maximum retry count is -1, the Batch service retries the task without limit. Default is 0
     */
    maxTaskRetryCount?: number;
    resourceFiles?: ResourceFileResponse[];
    /**
     * If omitted, the task runs as a non-administrative user unique to the task.
     */
    userIdentity?: UserIdentityResponse;
    /**
     * If true and the start task fails on a compute node, the Batch service retries the start task up to its maximum retry count (maxTaskRetryCount). If the task has still not completed successfully after all retries, then the Batch service marks the compute node unusable, and will not schedule tasks to it. This condition can be detected via the node state and scheduling error detail. If false, the Batch service will not wait for the start task to complete. In this case, other tasks can start executing on the compute node while the start task is still running; and even if the start task fails, new tasks will continue to be scheduled on the node. The default is true.
     */
    waitForSuccess?: boolean;
}
/**
 * startTaskResponseProvideDefaults sets the appropriate defaults for StartTaskResponse
 */
export function startTaskResponseProvideDefaults(val: StartTaskResponse): StartTaskResponse {
    return {
        ...val,
        maxTaskRetryCount: (val.maxTaskRetryCount) ?? 0,
    };
}

export interface TaskContainerSettingsResponse {
    /**
     * If this array is null or be not present, container task will mount entire temporary disk drive in windows (or AZ_BATCH_NODE_ROOT_DIR in Linux). It won't' mount any data paths into container if this array is set as empty.
     */
    containerHostBatchBindMounts?: ContainerHostBatchBindMountEntryResponse[];
    /**
     * These additional options are supplied as arguments to the "docker create" command, in addition to those controlled by the Batch Service.
     */
    containerRunOptions?: string;
    /**
     * This is the full image reference, as would be specified to "docker pull". If no tag is provided as part of the image name, the tag ":latest" is used as a default.
     */
    imageName: string;
    /**
     * This setting can be omitted if was already provided at pool creation.
     */
    registry?: ContainerRegistryResponse;
    workingDirectory?: string;
}

export interface TaskSchedulingPolicyResponse {
    nodeFillType: string;
}
/**
 * taskSchedulingPolicyResponseProvideDefaults sets the appropriate defaults for TaskSchedulingPolicyResponse
 */
export function taskSchedulingPolicyResponseProvideDefaults(val: TaskSchedulingPolicyResponse): TaskSchedulingPolicyResponse {
    return {
        ...val,
        nodeFillType: (val.nodeFillType) ?? "Spread",
    };
}

/**
 * Specifies the security settings like secure boot and vTPM used while creating the virtual machine.
 */
export interface UefiSettingsResponse {
    /**
     * Specifies whether secure boot should be enabled on the virtual machine.
     */
    secureBootEnabled?: boolean;
    /**
     * Specifies whether vTPM should be enabled on the virtual machine.
     */
    vTpmEnabled?: boolean;
}

/**
 * Describes an upgrade policy - automatic, manual, or rolling.
 */
export interface UpgradePolicyResponse {
    /**
     * The configuration parameters used for performing automatic OS upgrade.
     */
    automaticOSUpgradePolicy?: AutomaticOSUpgradePolicyResponse;
    mode: string;
    /**
     * The configuration parameters used while performing a rolling upgrade.
     */
    rollingUpgradePolicy?: RollingUpgradePolicyResponse;
}

export interface UserAccountResponse {
    /**
     * nonAdmin - The auto user is a standard user without elevated access. admin - The auto user is a user with elevated access and operates with full Administrator permissions. The default value is nonAdmin.
     */
    elevationLevel?: string;
    /**
     * This property is ignored if specified on a Windows pool. If not specified, the user is created with the default options.
     */
    linuxUserConfiguration?: LinuxUserConfigurationResponse;
    name: string;
    password: string;
    /**
     * This property can only be specified if the user is on a Windows pool. If not specified and on a Windows pool, the user is created with the default options.
     */
    windowsUserConfiguration?: WindowsUserConfigurationResponse;
}

/**
 * The list of associated user identities.
 */
export interface UserAssignedIdentitiesResponse {
    /**
     * The client id of user assigned identity.
     */
    clientId: string;
    /**
     * The principal id of user assigned identity.
     */
    principalId: string;
}

/**
 * Specify either the userName or autoUser property, but not both.
 */
export interface UserIdentityResponse {
    /**
     * The userName and autoUser properties are mutually exclusive; you must specify one but not both.
     */
    autoUser?: AutoUserSpecificationResponse;
    /**
     * The userName and autoUser properties are mutually exclusive; you must specify one but not both.
     */
    userName?: string;
}

/**
 * Specifies the security profile settings for the managed disk. **Note**: It can only be set for Confidential VMs and is required when using Confidential VMs.
 */
export interface VMDiskSecurityProfileResponse {
    securityEncryptionType?: string;
}

export interface VMExtensionResponse {
    /**
     * Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
     */
    autoUpgradeMinorVersion?: boolean;
    /**
     * Indicates whether the extension should be automatically upgraded by the platform if there is a newer version of the extension available.
     */
    enableAutomaticUpgrade?: boolean;
    name: string;
    /**
     * The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all. 
     */
    protectedSettings?: any;
    /**
     * Collection of extension names after which this extension needs to be provisioned.
     */
    provisionAfterExtensions?: string[];
    publisher: string;
    settings?: any;
    type: string;
    typeHandlerVersion?: string;
}

export interface VirtualMachineConfigurationResponse {
    /**
     * If specified, setup is performed on each node in the pool to allow tasks to run in containers. All regular tasks and job manager tasks run on this pool must specify the containerSettings property, and all other tasks may specify it.
     */
    containerConfiguration?: ContainerConfigurationResponse;
    /**
     * This property must be specified if the compute nodes in the pool need to have empty data disks attached to them.
     */
    dataDisks?: DataDiskResponse[];
    /**
     * If specified, encryption is performed on each node in the pool during node provisioning.
     */
    diskEncryptionConfiguration?: DiskEncryptionConfigurationResponse;
    /**
     * If specified, the extensions mentioned in this configuration will be installed on each node.
     */
    extensions?: VMExtensionResponse[];
    imageReference: ImageReferenceResponse;
    /**
     * This only applies to images that contain the Windows operating system, and should only be used when you hold valid on-premises licenses for the nodes which will be deployed. If omitted, no on-premises licensing discount is applied. Values are:
     *
     *  Windows_Server - The on-premises license is for Windows Server.
     *  Windows_Client - The on-premises license is for Windows Client.
     */
    licenseType?: string;
    /**
     * The Batch node agent is a program that runs on each node in the pool, and provides the command-and-control interface between the node and the Batch service. There are different implementations of the node agent, known as SKUs, for different operating systems. You must specify a node agent SKU which matches the selected image reference. To get the list of supported node agent SKUs along with their list of verified image references, see the 'List supported node agent SKUs' operation.
     */
    nodeAgentSkuId: string;
    /**
     * This configuration will specify rules on how nodes in the pool will be physically allocated.
     */
    nodePlacementConfiguration?: NodePlacementConfigurationResponse;
    /**
     * Contains configuration for ephemeral OSDisk settings.
     */
    osDisk?: OSDiskResponse;
    /**
     * Specifies the security profile settings for the virtual machine or virtual machine scale set.
     */
    securityProfile?: SecurityProfileResponse;
    /**
     * The service artifact reference id in the form of /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/galleries/{galleryName}/serviceArtifacts/{serviceArtifactName}/vmArtifactsProfiles/{vmArtifactsProfilesName}
     */
    serviceArtifactReference?: ServiceArtifactReferenceResponse;
    /**
     * This property must not be specified if the imageReference specifies a Linux OS image.
     */
    windowsConfiguration?: WindowsConfigurationResponse;
}

/**
 * A VM Family and its associated core quota for the Batch account.
 */
export interface VirtualMachineFamilyCoreQuotaResponse {
    /**
     * The core quota for the VM family for the Batch account.
     */
    coreQuota: number;
    /**
     * The Virtual Machine family name.
     */
    name: string;
}

export interface WindowsConfigurationResponse {
    /**
     * If omitted, the default value is true.
     */
    enableAutomaticUpdates?: boolean;
}

export interface WindowsUserConfigurationResponse {
    /**
     * Specifies login mode for the user. The default value is Interactive.
     */
    loginMode?: string;
}
