export const AuthenticationMode = {
    /**
     * The authentication mode using shared keys.
     */
    SharedKey: "SharedKey",
    /**
     * The authentication mode using Microsoft Entra ID.
     */
    AAD: "AAD",
    /**
     * The authentication mode using task authentication tokens.
     */
    TaskAuthenticationToken: "TaskAuthenticationToken",
} as const;

/**
 * The authentication mode for the Batch account.
 */
export type AuthenticationMode = (typeof AuthenticationMode)[keyof typeof AuthenticationMode];

export const AutoStorageAuthenticationMode = {
    /**
     * The Batch service will authenticate requests to auto-storage using storage account keys.
     */
    StorageKeys: "StorageKeys",
    /**
     * The Batch service will authenticate requests to auto-storage using the managed identity assigned to the Batch account.
     */
    BatchAccountManagedIdentity: "BatchAccountManagedIdentity",
} as const;

/**
 * The authentication mode which the Batch service will use to manage the auto-storage account.
 */
export type AutoStorageAuthenticationMode = (typeof AutoStorageAuthenticationMode)[keyof typeof AutoStorageAuthenticationMode];

export const AutoUserScope = {
    /**
     * Specifies that the service should create a new user for the task.
     */
    Task: "Task",
    /**
     * Specifies that the task runs as the common auto user account which is created on every node in a pool.
     */
    Pool: "Pool",
} as const;

/**
 * The default value is Pool. If the pool is running Windows a value of Task should be specified if stricter isolation between tasks is required. For example, if the task mutates the registry in a way which could impact other tasks, or if certificates have been specified on the pool which should not be accessible by normal tasks but should be accessible by start tasks.
 */
export type AutoUserScope = (typeof AutoUserScope)[keyof typeof AutoUserScope];

export const CachingType = {
    /**
     * The caching mode for the disk is not enabled.
     */
    None: "None",
    /**
     * The caching mode for the disk is read only.
     */
    ReadOnly: "ReadOnly",
    /**
     * The caching mode for the disk is read and write.
     */
    ReadWrite: "ReadWrite",
} as const;

export type CachingType = (typeof CachingType)[keyof typeof CachingType];

export const CertificateStoreLocation = {
    /**
     * Certificates should be installed to the CurrentUser certificate store.
     */
    CurrentUser: "CurrentUser",
    /**
     * Certificates should be installed to the LocalMachine certificate store.
     */
    LocalMachine: "LocalMachine",
} as const;

/**
 * The default value is currentUser. This property is applicable only for pools configured with Windows compute nodes. For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory.
 */
export type CertificateStoreLocation = (typeof CertificateStoreLocation)[keyof typeof CertificateStoreLocation];

export const CertificateVisibility = {
    /**
     * The certificate should be visible to the user account under which the start task is run. Note that if AutoUser Scope is Pool for both the StartTask and a Task, this certificate will be visible to the Task as well.
     */
    StartTask: "StartTask",
    /**
     * The certificate should be visible to the user accounts under which job tasks are run.
     */
    Task: "Task",
    /**
     * The certificate should be visible to the user accounts under which users remotely access the node.
     */
    RemoteUser: "RemoteUser",
} as const;

export type CertificateVisibility = (typeof CertificateVisibility)[keyof typeof CertificateVisibility];

export const ComputeNodeDeallocationOption = {
    /**
     * Terminate running task processes and requeue the tasks. The tasks will run again when a node is available. Remove nodes as soon as tasks have been terminated.
     */
    Requeue: "Requeue",
    /**
     * Terminate running tasks. The tasks will be completed with failureInfo indicating that they were terminated, and will not run again. Remove nodes as soon as tasks have been terminated.
     */
    Terminate: "Terminate",
    /**
     * Allow currently running tasks to complete. Schedule no new tasks while waiting. Remove nodes when all tasks have completed.
     */
    TaskCompletion: "TaskCompletion",
    /**
     * Allow currently running tasks to complete, then wait for all task data retention periods to expire. Schedule no new tasks while waiting. Remove nodes when all task retention periods have expired.
     */
    RetainedData: "RetainedData",
} as const;

/**
 * If omitted, the default value is Requeue.
 */
export type ComputeNodeDeallocationOption = (typeof ComputeNodeDeallocationOption)[keyof typeof ComputeNodeDeallocationOption];

export const ComputeNodeFillType = {
    /**
     * Tasks should be assigned evenly across all nodes in the pool.
     */
    Spread: "Spread",
    /**
     * As many tasks as possible (taskSlotsPerNode) should be assigned to each node in the pool before any tasks are assigned to the next node in the pool.
     */
    Pack: "Pack",
} as const;

export type ComputeNodeFillType = (typeof ComputeNodeFillType)[keyof typeof ComputeNodeFillType];

export const ContainerHostDataPath = {
    /**
     * The path for multi-instances task to shared their files.
     */
    Shared: "Shared",
    /**
     * The path for start task.
     */
    Startup: "Startup",
    /**
     * The path contains all virtual file systems are mounted on this node.
     */
    VfsMounts: "VfsMounts",
    /**
     * The task path.
     */
    Task: "Task",
    /**
     * The job-prep task path.
     */
    JobPrep: "JobPrep",
    /**
     * The applications path.
     */
    Applications: "Applications",
} as const;

export type ContainerHostDataPath = (typeof ContainerHostDataPath)[keyof typeof ContainerHostDataPath];

export const ContainerType = {
    /**
     * A Docker compatible container technology will be used to launch the containers.
     */
    DockerCompatible: "DockerCompatible",
    /**
     * A CRI based technology will be used to launch the containers.
     */
    CriCompatible: "CriCompatible",
} as const;

export type ContainerType = (typeof ContainerType)[keyof typeof ContainerType];

export const ContainerWorkingDirectory = {
    /**
     * Use the standard Batch service task working directory, which will contain the Task resource files populated by Batch.
     */
    TaskWorkingDirectory: "TaskWorkingDirectory",
    /**
     * Using container image defined working directory. Beware that this directory will not contain the resource files downloaded by Batch.
     */
    ContainerImageDefault: "ContainerImageDefault",
} as const;

export type ContainerWorkingDirectory = (typeof ContainerWorkingDirectory)[keyof typeof ContainerWorkingDirectory];

export const DiffDiskPlacement = {
    /**
     * The Ephemeral OS Disk is stored on the VM cache.
     */
    CacheDisk: "CacheDisk",
} as const;

/**
 * This property can be used by user in the request to choose which location the operating system should be in. e.g., cache disk space for Ephemeral OS disk provisioning. For more information on Ephemeral OS disk size requirements, please refer to Ephemeral OS disk size requirements for Windows VMs at https://learn.microsoft.com/azure/virtual-machines/windows/ephemeral-os-disks#size-requirements and Linux VMs at https://learn.microsoft.com/azure/virtual-machines/linux/ephemeral-os-disks#size-requirements.
 */
export type DiffDiskPlacement = (typeof DiffDiskPlacement)[keyof typeof DiffDiskPlacement];

export const DiskEncryptionTarget = {
    /**
     * The OS Disk on the compute node is encrypted.
     */
    OsDisk: "OsDisk",
    /**
     * The temporary disk on the compute node is encrypted. On Linux this encryption applies to other partitions (such as those on mounted data disks) when encryption occurs at boot time.
     */
    TemporaryDisk: "TemporaryDisk",
} as const;

/**
 * If omitted, no disks on the compute nodes in the pool will be encrypted.
 */
export type DiskEncryptionTarget = (typeof DiskEncryptionTarget)[keyof typeof DiskEncryptionTarget];

export const DynamicVNetAssignmentScope = {
    /**
     * No dynamic VNet assignment is enabled.
     */
    None: "none",
    /**
     * Dynamic VNet assignment is done per-job. If this value is set, the network configuration subnet ID must also be set. This feature requires approval before use, please contact support
     */
    Job: "job",
} as const;

export type DynamicVNetAssignmentScope = (typeof DynamicVNetAssignmentScope)[keyof typeof DynamicVNetAssignmentScope];

export const ElevationLevel = {
    /**
     * The user is a standard user without elevated access.
     */
    NonAdmin: "NonAdmin",
    /**
     * The user is a user with elevated access and operates with full Administrator permissions.
     */
    Admin: "Admin",
} as const;

/**
 * nonAdmin - The auto user is a standard user without elevated access. admin - The auto user is a user with elevated access and operates with full Administrator permissions. The default value is nonAdmin.
 */
export type ElevationLevel = (typeof ElevationLevel)[keyof typeof ElevationLevel];

export const EndpointAccessDefaultAction = {
    /**
     * Allow client access.
     */
    Allow: "Allow",
    /**
     * Deny client access.
     */
    Deny: "Deny",
} as const;

/**
 * Default action for endpoint access. It is only applicable when publicNetworkAccess is enabled.
 */
export type EndpointAccessDefaultAction = (typeof EndpointAccessDefaultAction)[keyof typeof EndpointAccessDefaultAction];

export const IPAddressProvisioningType = {
    /**
     * A public IP will be created and managed by Batch. There may be multiple public IPs depending on the size of the Pool.
     */
    BatchManaged: "BatchManaged",
    /**
     * Public IPs are provided by the user and will be used to provision the Compute Nodes.
     */
    UserManaged: "UserManaged",
    /**
     * No public IP Address will be created for the Compute Nodes in the Pool.
     */
    NoPublicIPAddresses: "NoPublicIPAddresses",
} as const;

/**
 * The default value is BatchManaged
 */
export type IPAddressProvisioningType = (typeof IPAddressProvisioningType)[keyof typeof IPAddressProvisioningType];

export const IPRuleAction = {
    /**
     * Allow access for the matched client IP address.
     */
    Allow: "Allow",
} as const;

/**
 * Action when client IP address is matched.
 */
export type IPRuleAction = (typeof IPRuleAction)[keyof typeof IPRuleAction];

export const InboundEndpointProtocol = {
    /**
     * Use TCP for the endpoint.
     */
    TCP: "TCP",
    /**
     * Use UDP for the endpoint.
     */
    UDP: "UDP",
} as const;

export type InboundEndpointProtocol = (typeof InboundEndpointProtocol)[keyof typeof InboundEndpointProtocol];

export const InterNodeCommunicationState = {
    /**
     * Enable network communication between virtual machines.
     */
    Enabled: "Enabled",
    /**
     * Disable network communication between virtual machines.
     */
    Disabled: "Disabled",
} as const;

/**
 * This imposes restrictions on which nodes can be assigned to the pool. Enabling this value can reduce the chance of the requested number of nodes to be allocated in the pool. If not specified, this value defaults to 'Disabled'.
 */
export type InterNodeCommunicationState = (typeof InterNodeCommunicationState)[keyof typeof InterNodeCommunicationState];

export const KeySource = {
    /**
     * Batch creates and manages the encryption keys used to protect the account data.
     */
    Microsoft_Batch: "Microsoft.Batch",
    /**
     * The encryption keys used to protect the account data are stored in an external key vault. If this is set then the Batch Account identity must be set to `SystemAssigned` and a valid Key Identifier must also be supplied under the keyVaultProperties.
     */
    Microsoft_KeyVault: "Microsoft.KeyVault",
} as const;

/**
 * Type of the key source.
 */
export type KeySource = (typeof KeySource)[keyof typeof KeySource];

export const LoginMode = {
    /**
     * The LOGON32_LOGON_BATCH Win32 login mode. The batch login mode is recommended for long running parallel processes.
     */
    Batch: "Batch",
    /**
     * The LOGON32_LOGON_INTERACTIVE Win32 login mode. Some applications require having permissions associated with the interactive login mode. If this is the case for an application used in your task, then this option is recommended.
     */
    Interactive: "Interactive",
} as const;

/**
 * Specifies login mode for the user. The default value is Interactive.
 */
export type LoginMode = (typeof LoginMode)[keyof typeof LoginMode];

export const NetworkSecurityGroupRuleAccess = {
    /**
     * Allow access.
     */
    Allow: "Allow",
    /**
     * Deny access.
     */
    Deny: "Deny",
} as const;

export type NetworkSecurityGroupRuleAccess = (typeof NetworkSecurityGroupRuleAccess)[keyof typeof NetworkSecurityGroupRuleAccess];

export const NodeCommunicationMode = {
    /**
     * The node communication mode is automatically set by the Batch service.
     */
    Default: "Default",
    /**
     * Nodes using the Classic communication mode require inbound TCP communication on ports 29876 and 29877 from the "BatchNodeManagement.{region}" service tag and outbound TCP communication on port 443 to the "Storage.region" and "BatchNodeManagement.{region}" service tags.
     */
    Classic: "Classic",
    /**
     * Nodes using the Simplified communication mode require outbound TCP communication on port 443 to the "BatchNodeManagement.{region}" service tag. No open inbound ports are required.
     */
    Simplified: "Simplified",
} as const;

/**
 * If omitted, the default value is Default.
 */
export type NodeCommunicationMode = (typeof NodeCommunicationMode)[keyof typeof NodeCommunicationMode];

export const NodePlacementPolicyType = {
    /**
     * All nodes in the pool will be allocated in the same region.
     */
    Regional: "Regional",
    /**
     * Nodes in the pool will be spread across different zones with best effort balancing.
     */
    Zonal: "Zonal",
} as const;

/**
 * Allocation policy used by Batch Service to provision the nodes. If not specified, Batch will use the regional policy.
 */
export type NodePlacementPolicyType = (typeof NodePlacementPolicyType)[keyof typeof NodePlacementPolicyType];

export const PoolAllocationMode = {
    /**
     * Pools will be allocated in subscriptions owned by the Batch service.
     */
    BatchService: "BatchService",
    /**
     * Pools will be allocated in a subscription owned by the user.
     */
    UserSubscription: "UserSubscription",
} as const;

/**
 * The pool allocation mode also affects how clients may authenticate to the Batch Service API. If the mode is BatchService, clients may authenticate using access keys or Microsoft Entra ID. If the mode is UserSubscription, clients must use Microsoft Entra ID. The default is BatchService.
 */
export type PoolAllocationMode = (typeof PoolAllocationMode)[keyof typeof PoolAllocationMode];

export const PoolIdentityType = {
    /**
     * Batch pool has user assigned identities with it.
     */
    UserAssigned: "UserAssigned",
    /**
     * Batch pool has no identity associated with it. Setting `None` in update pool will remove existing identities.
     */
    None: "None",
} as const;

/**
 * The type of identity used for the Batch Pool.
 */
export type PoolIdentityType = (typeof PoolIdentityType)[keyof typeof PoolIdentityType];

export const PublicNetworkAccessType = {
    /**
     * Enables connectivity to Azure Batch through public DNS.
     */
    Enabled: "Enabled",
    /**
     * Disables public connectivity and enables private connectivity to Azure Batch Service through private endpoint resource.
     */
    Disabled: "Disabled",
    /**
     * Secures connectivity to Azure Batch through NSP configuration.
     */
    SecuredByPerimeter: "SecuredByPerimeter",
} as const;

/**
 * If not specified, the default value is 'enabled'.
 */
export type PublicNetworkAccessType = (typeof PublicNetworkAccessType)[keyof typeof PublicNetworkAccessType];

export const ResourceIdentityType = {
    /**
     * Batch account has a system assigned identity with it.
     */
    SystemAssigned: "SystemAssigned",
    /**
     * Batch account has user assigned identities with it.
     */
    UserAssigned: "UserAssigned",
    /**
     * Batch account has no identity associated with it. Setting `None` in update account will remove existing identities.
     */
    None: "None",
} as const;

/**
 * The type of identity used for the Batch account.
 */
export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const SecurityEncryptionTypes = {
    NonPersistedTPM: "NonPersistedTPM",
    VMGuestStateOnly: "VMGuestStateOnly",
} as const;

export type SecurityEncryptionTypes = (typeof SecurityEncryptionTypes)[keyof typeof SecurityEncryptionTypes];

export const SecurityTypes = {
    /**
     * Trusted launch protects against advanced and persistent attack techniques.
     */
    TrustedLaunch: "trustedLaunch",
    /**
     * Azure confidential computing offers confidential VMs are for tenants with high security and confidentiality requirements. These VMs provide a strong, hardware-enforced boundary to help meet your security needs. You can use confidential VMs for migrations without making changes to your code, with the platform protecting your VM's state from being read or modified.
     */
    ConfidentialVM: "confidentialVM",
} as const;

export type SecurityTypes = (typeof SecurityTypes)[keyof typeof SecurityTypes];

export const StorageAccountType = {
    /**
     * The data disk / OS disk should use standard locally redundant storage.
     */
    Standard_LRS: "Standard_LRS",
    /**
     * The data disk / OS disk should use premium locally redundant storage.
     */
    Premium_LRS: "Premium_LRS",
    /**
     * The data disk / OS disk should use standard SSD locally redundant storage.
     */
    StandardSSD_LRS: "StandardSSD_LRS",
} as const;

export type StorageAccountType = (typeof StorageAccountType)[keyof typeof StorageAccountType];

export const UpgradeMode = {
    /**
     * All virtual machines in the scale set are automatically updated at the same time.
     */
    Automatic: "automatic",
    /**
     * You control the application of updates to virtual machines in the scale set. You do this by using the manualUpgrade action.
     */
    Manual: "manual",
    /**
     * The existing instances in a scale set are brought down in batches to be upgraded. Once the upgraded batch is complete, the instances will begin taking traffic again and the next batch will begin. This continues until all instances brought up-to-date.
     */
    Rolling: "rolling",
} as const;

export type UpgradeMode = (typeof UpgradeMode)[keyof typeof UpgradeMode];
