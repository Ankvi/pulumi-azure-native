export const AvailabilityType = {
    Local: "Local",
    Online: "Online",
    Notify: "Notify",
} as const;

/**
 * Indicates the way the update content can be downloaded.
 */
export type AvailabilityType = (typeof AvailabilityType)[keyof typeof AvailabilityType];

export const CloudInitDataSource = {
    /**
     * NoCloud is used as the datasource
     */
    NoCloud: "NoCloud",
    /**
     * Azure is used as the datasource
     */
    Azure: "Azure",
} as const;

/**
 * Datasource for the gallery image when provisioning with cloud-init [NoCloud, Azure]
 */
export type CloudInitDataSource = (typeof CloudInitDataSource)[keyof typeof CloudInitDataSource];

export const ComplianceAssignmentType = {
    /**
     * Report on the state of the machine, but don't make changes.
     */
    Audit: "Audit",
    /**
     * Applied to the machine. If it drifts, the local service inside the machine makes a correction at the next evaluation.
     */
    ApplyAndAutoCorrect: "ApplyAndAutoCorrect",
} as const;

/**
 * WDAC Compliance Assignment
 */
export type ComplianceAssignmentType = (typeof ComplianceAssignmentType)[keyof typeof ComplianceAssignmentType];

export const DeploymentMode = {
    /**
     * Validate ECE action deployment for a cluster.
     */
    Validate: "Validate",
    /**
     * Deploy ECE action deployment for a cluster.
     */
    Deploy: "Deploy",
} as const;

/**
 * Deployment mode to trigger job.
 */
export type DeploymentMode = (typeof DeploymentMode)[keyof typeof DeploymentMode];

export const DeviceKind = {
    /**
     * Arc-enabled edge device with HCI OS.
     */
    HCI: "HCI",
} as const;

/**
 * Device kind to support polymorphic resource.
 */
export type DeviceKind = (typeof DeviceKind)[keyof typeof DeviceKind];

export const DiagnosticLevel = {
    Off: "Off",
    Basic: "Basic",
    Enhanced: "Enhanced",
} as const;

/**
 * Desired level of diagnostic data emitted by the cluster.
 */
export type DiagnosticLevel = (typeof DiagnosticLevel)[keyof typeof DiagnosticLevel];

export const DiskFileFormat = {
    /**
     * VHDX file format
     */
    Vhdx: "vhdx",
    /**
     * VHD file format
     */
    Vhd: "vhd",
} as const;

/**
 * The format of the actual VHD file [vhd, vhdx]
 */
export type DiskFileFormat = (typeof DiskFileFormat)[keyof typeof DiskFileFormat];

export const EceSecrets = {
    /**
     * AzureStackLCMUserCredential used for LCM operations for AzureStackHCI cluster.
     */
    AzureStackLCMUserCredential: "AzureStackLCMUserCredential",
    /**
     * DefaultARBApplication used to manage Azure Arc resource bridge (ARB) for AzureStackHCI cluster.
     */
    DefaultARBApplication: "DefaultARBApplication",
    /**
     * LocalAdminCredential used for admin operations for AzureStackHCI cluster.
     */
    LocalAdminCredential: "LocalAdminCredential",
    /**
     * WitnessStorageKey used for setting up a cloud witness for AzureStackHCI cluster.
     */
    WitnessStorageKey: "WitnessStorageKey",
} as const;

/**
 * Secret name expected for Enterprise Cloud Engine (ECE) deployment.
 */
export type EceSecrets = (typeof EceSecrets)[keyof typeof EceSecrets];

export const EdgeDeviceKind = {
    /**
     * Arc-enabled edge device with HCI OS.
     */
    HCI: "HCI",
} as const;

/**
 * Edge Solution type to support polymorphic resource.
 */
export type EdgeDeviceKind = (typeof EdgeDeviceKind)[keyof typeof EdgeDeviceKind];

export const ExtendedLocationTypes = {
    CustomLocation: "CustomLocation",
} as const;

/**
 * The type of the extended location.
 */
export type ExtendedLocationTypes = (typeof ExtendedLocationTypes)[keyof typeof ExtendedLocationTypes];

export const GpuAssignmentTypeEnum = {
    /**
     * Attach Graphics Processing Unit (GPU) using Discrete Device Assignment (DDA)
     */
    GpuDDA: "GpuDDA",
    /**
     * Attach Graphics Processing Unit (GPU) using GPU Partitioning
     */
    GpuP: "GpuP",
} as const;

/**
 * GPU assignment type
 */
export type GpuAssignmentTypeEnum = (typeof GpuAssignmentTypeEnum)[keyof typeof GpuAssignmentTypeEnum];

export const HciEdgeDeviceJobType = {
    /**
     * Job to collect logs from the device.
     */
    CollectLog: "CollectLog",
    /**
     * Job to provide remote support to the device.
     */
    RemoteSupport: "RemoteSupport",
} as const;

/**
 * Job Type to support polymorphic resource.
 */
export type HciEdgeDeviceJobType = (typeof HciEdgeDeviceJobType)[keyof typeof HciEdgeDeviceJobType];

export const HyperVGeneration = {
    /**
     * Generation 1 (V1) hypervisor
     */
    V1: "V1",
    /**
     * Generation 2 (V2) hypervisor
     */
    V2: "V2",
} as const;

/**
 * The hypervisor generation of the Virtual Machine [V1, V2]
 */
export type HyperVGeneration = (typeof HyperVGeneration)[keyof typeof HyperVGeneration];

export const IPPoolTypeEnum = {
    /**
     * Virtual Machine IP Pool
     */
    Vm: "vm",
    /**
     * VIP Pool
     */
    Vippool: "vippool",
} as const;

/**
 * Type of the IP Pool [vm, vippool]
 */
export type IPPoolTypeEnum = (typeof IPPoolTypeEnum)[keyof typeof IPPoolTypeEnum];

export const IpAllocationMethodEnum = {
    Dynamic: "Dynamic",
    Static: "Static",
} as const;

/**
 * IPAllocationMethod - The IP address allocation method. Possible values include: 'Static', 'Dynamic'
 */
export type IpAllocationMethodEnum = (typeof IpAllocationMethodEnum)[keyof typeof IpAllocationMethodEnum];

export const ManagedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

/**
 * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
 */
export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const NetworkTypeEnum = {
    NAT: "NAT",
    Transparent: "Transparent",
    L2Bridge: "L2Bridge",
    L2Tunnel: "L2Tunnel",
    ICS: "ICS",
    Private: "Private",
    Overlay: "Overlay",
    Internal: "Internal",
    Mirrored: "Mirrored",
} as const;

/**
 * Type of the network
 */
export type NetworkTypeEnum = (typeof NetworkTypeEnum)[keyof typeof NetworkTypeEnum];

export const OperatingSystemTypes = {
    /**
     * Windows operating system
     */
    Windows: "Windows",
    /**
     * Linux operating system
     */
    Linux: "Linux",
} as const;

/**
 * This property allows you to specify the type of the OS that is included in the disk if creating a VM from user-image or a specialized VHD. Possible values are: Windows, Linux.
 */
export type OperatingSystemTypes = (typeof OperatingSystemTypes)[keyof typeof OperatingSystemTypes];

export const OperationType = {
    /**
     * Cluster provisioning operation.
     */
    ClusterProvisioning: "ClusterProvisioning",
    /**
     * Cluster upgrade operation.
     */
    ClusterUpgrade: "ClusterUpgrade",
} as const;

/**
 * The intended operation for a cluster.
 */
export type OperationType = (typeof OperationType)[keyof typeof OperationType];

export const OsTypeEnum = {
    Linux: "Linux",
    Windows: "Windows",
} as const;

/**
 * OsType - string specifying whether the OS is Linux or Windows
 */
export type OsTypeEnum = (typeof OsTypeEnum)[keyof typeof OsTypeEnum];

export const ProvisioningAction = {
    /**
     * Install guest agent
     */
    Install: "install",
    /**
     * Uninstall guest agent
     */
    Uninstall: "uninstall",
    /**
     * Repair guest agent
     */
    Repair: "repair",
} as const;

/**
 * The guest agent provisioning action.
 */
export type ProvisioningAction = (typeof ProvisioningAction)[keyof typeof ProvisioningAction];

export const RemoteSupportAccessLevel = {
    /**
     * No remote support access is granted.
     */
    None: "None",
    /**
     * Access is limited to diagnostics information only.
     */
    Diagnostics: "Diagnostics",
    /**
     * Access includes diagnostics information and the ability to perform repairs.
     */
    DiagnosticsAndRepair: "DiagnosticsAndRepair",
} as const;

/**
 * Remote support access level.
 */
export type RemoteSupportAccessLevel = (typeof RemoteSupportAccessLevel)[keyof typeof RemoteSupportAccessLevel];

export const RemoteSupportType = {
    /**
     * Enables remote support for the edge device.
     */
    Enable: "Enable",
    /**
     * Revokes previously granted remote support access for the edge device.
     */
    Revoke: "Revoke",
} as const;

/**
 * Remote support type.
 */
export type RemoteSupportType = (typeof RemoteSupportType)[keyof typeof RemoteSupportType];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
} as const;

/**
 * The identity type.
 */
export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const SecurityEncryptionType = {
    /**
     * Non-persisted TPM encryption type
     */
    NonPersistedTPM: "NonPersistedTPM",
} as const;

/**
 * Specifies the EncryptionType of the managed disk. It is set to NonPersistedTPM for not persisting firmware state in the VMGuestState blob. NOTE: It can be set for only Confidential VMs.
 */
export type SecurityEncryptionType = (typeof SecurityEncryptionType)[keyof typeof SecurityEncryptionType];

export const SecurityRuleAccess = {
    /**
     * Network traffic is allowed
     */
    Allow: "Allow",
    /**
     * Network traffic is denied
     */
    Deny: "Deny",
} as const;

/**
 * The network traffic is allowed or denied.
 */
export type SecurityRuleAccess = (typeof SecurityRuleAccess)[keyof typeof SecurityRuleAccess];

export const SecurityRuleDirection = {
    /**
     * Rule is evaluated on incoming traffic
     */
    Inbound: "Inbound",
    /**
     * Rule is evaluated on outgoing traffic
     */
    Outbound: "Outbound",
} as const;

/**
 * The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic.
 */
export type SecurityRuleDirection = (typeof SecurityRuleDirection)[keyof typeof SecurityRuleDirection];

export const SecurityRuleProtocol = {
    /**
     * Transmission Control Protocol
     */
    Tcp: "Tcp",
    /**
     * User Datagram Protocol
     */
    Udp: "Udp",
    /**
     * Internet Control Message Protocol
     */
    Icmp: "Icmp",
    /**
     * Wildcard rule for all protocols
     */
    Asterisk: "*",
} as const;

/**
 * Network protocol this rule applies to.
 */
export type SecurityRuleProtocol = (typeof SecurityRuleProtocol)[keyof typeof SecurityRuleProtocol];

export const SecurityTypes = {
    /**
     * Trusted Launch security type
     */
    TrustedLaunch: "TrustedLaunch",
    /**
     * Confidential VM security type
     */
    ConfidentialVM: "ConfidentialVM",
} as const;

/**
 * Specifies the SecurityType of the virtual machine. EnableTPM and SecureBootEnabled must be set to true for SecurityType to function.
 */
export type SecurityTypes = (typeof SecurityTypes)[keyof typeof SecurityTypes];

export const ServiceName = {
    WAC: "WAC",
} as const;

/**
 * Name of the service.
 */
export type ServiceName = (typeof ServiceName)[keyof typeof ServiceName];

export const SoftwareAssuranceIntent = {
    Enable: "Enable",
    Disable: "Disable",
} as const;

/**
 * Customer Intent for Software Assurance Benefit.
 */
export type SoftwareAssuranceIntent = (typeof SoftwareAssuranceIntent)[keyof typeof SoftwareAssuranceIntent];

export const State = {
    HasPrerequisite: "HasPrerequisite",
    Obsolete: "Obsolete",
    Ready: "Ready",
    NotApplicableBecauseAnotherUpdateIsInProgress: "NotApplicableBecauseAnotherUpdateIsInProgress",
    Preparing: "Preparing",
    Installing: "Installing",
    Installed: "Installed",
    PreparationFailed: "PreparationFailed",
    InstallationFailed: "InstallationFailed",
    Invalid: "Invalid",
    Recalled: "Recalled",
    Downloading: "Downloading",
    DownloadFailed: "DownloadFailed",
    HealthChecking: "HealthChecking",
    HealthCheckFailed: "HealthCheckFailed",
    ReadyToInstall: "ReadyToInstall",
    ScanInProgress: "ScanInProgress",
    ScanFailed: "ScanFailed",
    AdditionalContentRequired: "AdditionalContentRequired",
} as const;

/**
 * State of the update as it relates to this stamp.
 */
export type State = (typeof State)[keyof typeof State];

export const UpdateRunPropertiesState = {
    Unknown: "Unknown",
    Succeeded: "Succeeded",
    InProgress: "InProgress",
    Failed: "Failed",
} as const;

/**
 * State of the update run.
 */
export type UpdateRunPropertiesState = (typeof UpdateRunPropertiesState)[keyof typeof UpdateRunPropertiesState];

export const UpdateSummariesPropertiesState = {
    Unknown: "Unknown",
    AppliedSuccessfully: "AppliedSuccessfully",
    UpdateAvailable: "UpdateAvailable",
    UpdateInProgress: "UpdateInProgress",
    UpdateFailed: "UpdateFailed",
    NeedsAttention: "NeedsAttention",
    PreparationInProgress: "PreparationInProgress",
    PreparationFailed: "PreparationFailed",
} as const;

/**
 * Overall update state of the stamp.
 */
export type UpdateSummariesPropertiesState = (typeof UpdateSummariesPropertiesState)[keyof typeof UpdateSummariesPropertiesState];

export const VmSizeEnum = {
    /**
     * Default virtual machine size
     */
    Default: "Default",
    /**
     * Standard A2 v2 virtual machine size
     */
    Standard_A2_v2: "Standard_A2_v2",
    /**
     * Standard A4 v2 virtual machine size
     */
    Standard_A4_v2: "Standard_A4_v2",
    /**
     * Standard D2s v3 virtual machine size
     */
    Standard_D2s_v3: "Standard_D2s_v3",
    /**
     * Standard D4s v3 virtual machine size
     */
    Standard_D4s_v3: "Standard_D4s_v3",
    /**
     * Standard D8s v3 virtual machine size
     */
    Standard_D8s_v3: "Standard_D8s_v3",
    /**
     * Standard D16s v3 virtual machine size
     */
    Standard_D16s_v3: "Standard_D16s_v3",
    /**
     * Standard D32s v3 virtual machine size
     */
    Standard_D32s_v3: "Standard_D32s_v3",
    /**
     * Standard DS2 v2 virtual machine size
     */
    Standard_DS2_v2: "Standard_DS2_v2",
    /**
     * Standard DS3 v2 virtual machine size
     */
    Standard_DS3_v2: "Standard_DS3_v2",
    /**
     * Standard DS4 v2 virtual machine size
     */
    Standard_DS4_v2: "Standard_DS4_v2",
    /**
     * Standard DS5 v2 virtual machine size
     */
    Standard_DS5_v2: "Standard_DS5_v2",
    /**
     * Standard DS13 v2 virtual machine size
     */
    Standard_DS13_v2: "Standard_DS13_v2",
    /**
     * Standard K8S v1 virtual machine size
     */
    Standard_K8S_v1: "Standard_K8S_v1",
    /**
     * Standard K8S2 v1 virtual machine size
     */
    Standard_K8S2_v1: "Standard_K8S2_v1",
    /**
     * Standard K8S3 v1 virtual machine size
     */
    Standard_K8S3_v1: "Standard_K8S3_v1",
    /**
     * Standard K8S4 v1 virtual machine size
     */
    Standard_K8S4_v1: "Standard_K8S4_v1",
    /**
     * Standard NK6 virtual machine size
     */
    Standard_NK6: "Standard_NK6",
    /**
     * Standard NK12 virtual machine size
     */
    Standard_NK12: "Standard_NK12",
    /**
     * Standard NV6 virtual machine size
     */
    Standard_NV6: "Standard_NV6",
    /**
     * Standard NV12 virtual machine size
     */
    Standard_NV12: "Standard_NV12",
    /**
     * Standard K8S5 v1 virtual machine size
     */
    Standard_K8S5_v1: "Standard_K8S5_v1",
    /**
     * Custom virtual machine size
     */
    Custom: "Custom",
} as const;

/**
 * Enum of VM Sizes
 */
export type VmSizeEnum = (typeof VmSizeEnum)[keyof typeof VmSizeEnum];

export const WindowsServerSubscription = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

/**
 * Desired state of Windows Server Subscription.
 */
export type WindowsServerSubscription = (typeof WindowsServerSubscription)[keyof typeof WindowsServerSubscription];
