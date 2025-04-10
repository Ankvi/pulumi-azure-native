import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Gets the application SSH endpoint
 */
export interface ApplicationGetEndpointArgs {
    /**
     * The destination port to connect to.
     */
    destinationPort?: pulumi.Input<number>;
    /**
     * The location of the endpoint.
     */
    location?: pulumi.Input<string>;
    /**
     * The private ip address of the endpoint.
     */
    privateIPAddress?: pulumi.Input<string>;
    /**
     * The public port to connect to.
     */
    publicPort?: pulumi.Input<number>;
}

/**
 * Gets the application HTTP endpoints.
 */
export interface ApplicationGetHttpsEndpointArgs {
    /**
     * The list of access modes for the application.
     */
    accessModes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The destination port to connect to.
     */
    destinationPort?: pulumi.Input<number>;
    /**
     * The value indicates whether to disable GatewayAuth.
     */
    disableGatewayAuth?: pulumi.Input<boolean>;
    /**
     * The private ip address of the endpoint.
     */
    privateIPAddress?: pulumi.Input<string>;
    /**
     * The subdomain suffix of the application.
     */
    subDomainSuffix?: pulumi.Input<string>;
}

/**
 * The HDInsight cluster application GET response.
 */
export interface ApplicationPropertiesArgs {
    /**
     * The application type.
     */
    applicationType?: pulumi.Input<string>;
    /**
     * The list of roles in the cluster.
     */
    computeProfile?: pulumi.Input<ComputeProfileArgs>;
    /**
     * The list of errors.
     */
    errors?: pulumi.Input<pulumi.Input<ErrorsArgs>[]>;
    /**
     * The list of application HTTPS endpoints.
     */
    httpsEndpoints?: pulumi.Input<pulumi.Input<ApplicationGetHttpsEndpointArgs>[]>;
    /**
     * The list of install script actions.
     */
    installScriptActions?: pulumi.Input<pulumi.Input<RuntimeScriptActionArgs>[]>;
    /**
     * The private link configurations.
     */
    privateLinkConfigurations?: pulumi.Input<pulumi.Input<PrivateLinkConfigurationArgs>[]>;
    /**
     * The list of application SSH endpoints.
     */
    sshEndpoints?: pulumi.Input<pulumi.Input<ApplicationGetEndpointArgs>[]>;
    /**
     * The list of uninstall script actions.
     */
    uninstallScriptActions?: pulumi.Input<pulumi.Input<RuntimeScriptActionArgs>[]>;
}

/**
 * The autoscale request parameters
 */
export interface AutoscaleArgs {
    /**
     * Parameters for load-based autoscale
     */
    capacity?: pulumi.Input<AutoscaleCapacityArgs>;
    /**
     * Parameters for schedule-based autoscale
     */
    recurrence?: pulumi.Input<AutoscaleRecurrenceArgs>;
}

/**
 * The load-based autoscale request parameters
 */
export interface AutoscaleCapacityArgs {
    /**
     * The maximum instance count of the cluster
     */
    maxInstanceCount?: pulumi.Input<number>;
    /**
     * The minimum instance count of the cluster
     */
    minInstanceCount?: pulumi.Input<number>;
}

/**
 * Schedule-based autoscale request parameters
 */
export interface AutoscaleRecurrenceArgs {
    /**
     * Array of schedule-based autoscale rules
     */
    schedule?: pulumi.Input<pulumi.Input<AutoscaleScheduleArgs>[]>;
    /**
     * The time zone for the autoscale schedule times
     */
    timeZone?: pulumi.Input<string>;
}

/**
 * Parameters for a schedule-based autoscale rule, consisting of an array of days + a time and capacity
 */
export interface AutoscaleScheduleArgs {
    /**
     * Days of the week for a schedule-based autoscale rule
     */
    days?: pulumi.Input<pulumi.Input<string | enums.DaysOfWeek>[]>;
    /**
     * Time and capacity for a schedule-based autoscale rule
     */
    timeAndCapacity?: pulumi.Input<AutoscaleTimeAndCapacityArgs>;
}

/**
 * Time and capacity request parameters
 */
export interface AutoscaleTimeAndCapacityArgs {
    /**
     * The maximum instance count of the cluster
     */
    maxInstanceCount?: pulumi.Input<number>;
    /**
     * The minimum instance count of the cluster
     */
    minInstanceCount?: pulumi.Input<number>;
    /**
     * 24-hour time in the form xx:xx
     */
    time?: pulumi.Input<string>;
}

/**
 * The information of AAD security group.
 */
export interface ClientGroupInfoArgs {
    /**
     * The AAD security group id.
     */
    groupId?: pulumi.Input<string>;
    /**
     * The AAD security group name.
     */
    groupName?: pulumi.Input<string>;
}

/**
 * The cluster create parameters.
 */
export interface ClusterCreatePropertiesArgs {
    /**
     * The cluster definition.
     */
    clusterDefinition?: pulumi.Input<ClusterDefinitionArgs>;
    /**
     * The version of the cluster.
     */
    clusterVersion?: pulumi.Input<string>;
    /**
     * The compute isolation properties.
     */
    computeIsolationProperties?: pulumi.Input<ComputeIsolationPropertiesArgs>;
    /**
     * The compute profile.
     */
    computeProfile?: pulumi.Input<ComputeProfileArgs>;
    /**
     * The disk encryption properties.
     */
    diskEncryptionProperties?: pulumi.Input<DiskEncryptionPropertiesArgs>;
    /**
     * The encryption-in-transit properties.
     */
    encryptionInTransitProperties?: pulumi.Input<EncryptionInTransitPropertiesArgs>;
    /**
     * The cluster kafka rest proxy configuration.
     */
    kafkaRestProperties?: pulumi.Input<KafkaRestPropertiesArgs>;
    /**
     * The minimal supported tls version.
     */
    minSupportedTlsVersion?: pulumi.Input<string>;
    /**
     * The network properties.
     */
    networkProperties?: pulumi.Input<NetworkPropertiesArgs>;
    /**
     * The type of operating system.
     */
    osType?: pulumi.Input<string | enums.OSType>;
    /**
     * The private link configurations.
     */
    privateLinkConfigurations?: pulumi.Input<pulumi.Input<PrivateLinkConfigurationArgs>[]>;
    /**
     * The security profile.
     */
    securityProfile?: pulumi.Input<SecurityProfileArgs>;
    /**
     * The storage profile.
     */
    storageProfile?: pulumi.Input<StorageProfileArgs>;
    /**
     * The cluster tier.
     */
    tier?: pulumi.Input<string | enums.Tier>;
}
/**
 * clusterCreatePropertiesArgsProvideDefaults sets the appropriate defaults for ClusterCreatePropertiesArgs
 */
export function clusterCreatePropertiesArgsProvideDefaults(val: ClusterCreatePropertiesArgs): ClusterCreatePropertiesArgs {
    return {
        ...val,
        computeIsolationProperties: (val.computeIsolationProperties ? pulumi.output(val.computeIsolationProperties).apply(computeIsolationPropertiesArgsProvideDefaults) : undefined),
        diskEncryptionProperties: (val.diskEncryptionProperties ? pulumi.output(val.diskEncryptionProperties).apply(diskEncryptionPropertiesArgsProvideDefaults) : undefined),
        encryptionInTransitProperties: (val.encryptionInTransitProperties ? pulumi.output(val.encryptionInTransitProperties).apply(encryptionInTransitPropertiesArgsProvideDefaults) : undefined),
        tier: (val.tier) ?? "Standard",
    };
}

/**
 * The cluster definition.
 */
export interface ClusterDefinitionArgs {
    /**
     * The link to the blueprint.
     */
    blueprint?: pulumi.Input<string>;
    /**
     * The versions of different services in the cluster.
     */
    componentVersion?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The cluster configurations.
     */
    configurations?: any;
    /**
     * The type of cluster.
     */
    kind?: pulumi.Input<string>;
}

/**
 * Identity for the cluster.
 */
export interface ClusterIdentityArgs {
    /**
     * The type of identity used for the cluster. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities.
     */
    type?: pulumi.Input<string | enums.ResourceIdentityType>;
    /**
     * The list of user identities associated with the cluster. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
     */
    userAssignedIdentities?: pulumi.Input<{[key: string]: pulumi.Input<UserAssignedIdentityArgs>}>;
}

/**
 * CLuster pool profile.
 */
export interface ClusterPoolResourcePropertiesClusterPoolProfileArgs {
    /**
     * Cluster pool version is a 2-part version.
     */
    clusterPoolVersion: pulumi.Input<string>;
}

/**
 * CLuster pool compute profile.
 */
export interface ClusterPoolResourcePropertiesComputeProfileArgs {
    /**
     * The virtual machine SKU.
     */
    vmSize: pulumi.Input<string>;
}

/**
 * Cluster pool log analytics profile to enable OMS agent for AKS cluster.
 */
export interface ClusterPoolResourcePropertiesLogAnalyticsProfileArgs {
    /**
     * True if log analytics is enabled for cluster pool, otherwise false.
     */
    enabled: pulumi.Input<boolean>;
    /**
     * Log analytics workspace to associate with the OMS agent.
     */
    workspaceId?: pulumi.Input<string>;
}

/**
 * Cluster pool network profile.
 */
export interface ClusterPoolResourcePropertiesNetworkProfileArgs {
    /**
     * Cluster pool subnet resource id.
     */
    subnetId: pulumi.Input<string>;
}

/**
 * The compute isolation properties.
 */
export interface ComputeIsolationPropertiesArgs {
    /**
     * The flag indicates whether enable compute isolation or not.
     */
    enableComputeIsolation?: pulumi.Input<boolean>;
    /**
     * The host sku.
     */
    hostSku?: pulumi.Input<string>;
}
/**
 * computeIsolationPropertiesArgsProvideDefaults sets the appropriate defaults for ComputeIsolationPropertiesArgs
 */
export function computeIsolationPropertiesArgsProvideDefaults(val: ComputeIsolationPropertiesArgs): ComputeIsolationPropertiesArgs {
    return {
        ...val,
        enableComputeIsolation: (val.enableComputeIsolation) ?? false,
    };
}

/**
 * Describes the compute profile.
 */
export interface ComputeProfileArgs {
    /**
     * The list of roles in the cluster.
     */
    roles?: pulumi.Input<pulumi.Input<RoleArgs>[]>;
}

/**
 * The data disks groups for the role.
 */
export interface DataDisksGroupsArgs {
    /**
     * The number of disks per node.
     */
    disksPerNode?: pulumi.Input<number>;
}

/**
 * The disk encryption properties
 */
export interface DiskEncryptionPropertiesArgs {
    /**
     * Algorithm identifier for encryption, default RSA-OAEP.
     */
    encryptionAlgorithm?: pulumi.Input<string | enums.JsonWebKeyEncryptionAlgorithm>;
    /**
     * Indicates whether or not resource disk encryption is enabled.
     */
    encryptionAtHost?: pulumi.Input<boolean>;
    /**
     * Key name that is used for enabling disk encryption.
     */
    keyName?: pulumi.Input<string>;
    /**
     * Specific key version that is used for enabling disk encryption.
     */
    keyVersion?: pulumi.Input<string>;
    /**
     * Resource ID of Managed Identity that is used to access the key vault.
     */
    msiResourceId?: pulumi.Input<string>;
    /**
     * Base key vault URI where the customers key is located eg. https://myvault.vault.azure.net
     */
    vaultUri?: pulumi.Input<string>;
}
/**
 * diskEncryptionPropertiesArgsProvideDefaults sets the appropriate defaults for DiskEncryptionPropertiesArgs
 */
export function diskEncryptionPropertiesArgsProvideDefaults(val: DiskEncryptionPropertiesArgs): DiskEncryptionPropertiesArgs {
    return {
        ...val,
        encryptionAtHost: (val.encryptionAtHost) ?? false,
    };
}

/**
 * The encryption-in-transit properties.
 */
export interface EncryptionInTransitPropertiesArgs {
    /**
     * Indicates whether or not inter cluster node communication is encrypted in transit.
     */
    isEncryptionInTransitEnabled?: pulumi.Input<boolean>;
}
/**
 * encryptionInTransitPropertiesArgsProvideDefaults sets the appropriate defaults for EncryptionInTransitPropertiesArgs
 */
export function encryptionInTransitPropertiesArgsProvideDefaults(val: EncryptionInTransitPropertiesArgs): EncryptionInTransitPropertiesArgs {
    return {
        ...val,
        isEncryptionInTransitEnabled: (val.isEncryptionInTransitEnabled) ?? false,
    };
}

/**
 * The error message associated with the cluster creation.
 */
export interface ErrorsArgs {
    /**
     * The error code.
     */
    code?: pulumi.Input<string>;
    /**
     * The error message.
     */
    message?: pulumi.Input<string>;
}

/**
 * The hardware profile.
 */
export interface HardwareProfileArgs {
    /**
     * The size of the VM
     */
    vmSize?: pulumi.Input<string>;
}

/**
 * The ip configurations for the private link service.
 */
export interface IPConfigurationArgs {
    /**
     * The name of private link IP configuration.
     */
    name: pulumi.Input<string>;
    /**
     * Indicates whether this IP configuration is primary for the corresponding NIC.
     */
    primary?: pulumi.Input<boolean>;
    /**
     * The IP address.
     */
    privateIPAddress?: pulumi.Input<string>;
    /**
     * The method that private IP address is allocated.
     */
    privateIPAllocationMethod?: pulumi.Input<string | enums.PrivateIPAllocationMethod>;
    /**
     * The subnet resource id.
     */
    subnet?: pulumi.Input<ResourceIdArgs>;
}

/**
 * The kafka rest proxy configuration which contains AAD security group information.
 */
export interface KafkaRestPropertiesArgs {
    /**
     * The information of AAD security group.
     */
    clientGroupInfo?: pulumi.Input<ClientGroupInfoArgs>;
    /**
     * The configurations that need to be overriden.
     */
    configurationOverride?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The ssh username, password, and ssh public key.
 */
export interface LinuxOperatingSystemProfileArgs {
    /**
     * The password.
     */
    password?: pulumi.Input<string>;
    /**
     * The SSH profile.
     */
    sshProfile?: pulumi.Input<SshProfileArgs>;
    /**
     * The username.
     */
    username?: pulumi.Input<string>;
}

/**
 * The network properties.
 */
export interface NetworkPropertiesArgs {
    /**
     * Indicates whether or not private link is enabled.
     */
    privateLink?: pulumi.Input<string | enums.PrivateLink>;
    /**
     * The direction for the resource provider connection.
     */
    resourceProviderConnection?: pulumi.Input<string | enums.ResourceProviderConnection>;
}

/**
 * The Linux operation systems profile.
 */
export interface OsProfileArgs {
    /**
     * The Linux OS profile.
     */
    linuxOperatingSystemProfile?: pulumi.Input<LinuxOperatingSystemProfileArgs>;
}

/**
 * The private link configuration.
 */
export interface PrivateLinkConfigurationArgs {
    /**
     * The HDInsight private linkable sub-resource name to apply the private link configuration to. For example, 'headnode', 'gateway', 'edgenode'.
     */
    groupId: pulumi.Input<string>;
    /**
     * The IP configurations for the private link service.
     */
    ipConfigurations: pulumi.Input<pulumi.Input<IPConfigurationArgs>[]>;
    /**
     * The name of private link configuration.
     */
    name: pulumi.Input<string>;
}

/**
 * The private link service connection state.
 */
export interface PrivateLinkServiceConnectionStateArgs {
    /**
     * Whether there is further actions.
     */
    actionsRequired?: pulumi.Input<string>;
    /**
     * The optional description of the status.
     */
    description?: pulumi.Input<string>;
    /**
     * The concrete private link service connection.
     */
    status: pulumi.Input<string | enums.PrivateLinkServiceConnectionStatus>;
}

/**
 * The azure resource id.
 */
export interface ResourceIdArgs {
    /**
     * The azure resource id.
     */
    id?: pulumi.Input<string>;
}

/**
 * Describes a role on the cluster.
 */
export interface RoleArgs {
    /**
     * The autoscale configurations.
     */
    autoscaleConfiguration?: pulumi.Input<AutoscaleArgs>;
    /**
     * The data disks groups for the role.
     */
    dataDisksGroups?: pulumi.Input<pulumi.Input<DataDisksGroupsArgs>[]>;
    /**
     * Indicates whether encrypt the data disks.
     */
    encryptDataDisks?: pulumi.Input<boolean>;
    /**
     * The hardware profile.
     */
    hardwareProfile?: pulumi.Input<HardwareProfileArgs>;
    /**
     * The minimum instance count of the cluster.
     */
    minInstanceCount?: pulumi.Input<number>;
    /**
     * The name of the role.
     */
    name?: pulumi.Input<string>;
    /**
     * The operating system profile.
     */
    osProfile?: pulumi.Input<OsProfileArgs>;
    /**
     * The list of script actions on the role.
     */
    scriptActions?: pulumi.Input<pulumi.Input<ScriptActionArgs>[]>;
    /**
     * The instance count of the cluster.
     */
    targetInstanceCount?: pulumi.Input<number>;
    /**
     * The name of the virtual machine group.
     */
    vMGroupName?: pulumi.Input<string>;
    /**
     * The virtual network profile.
     */
    virtualNetworkProfile?: pulumi.Input<VirtualNetworkProfileArgs>;
}
/**
 * roleArgsProvideDefaults sets the appropriate defaults for RoleArgs
 */
export function roleArgsProvideDefaults(val: RoleArgs): RoleArgs {
    return {
        ...val,
        encryptDataDisks: (val.encryptDataDisks) ?? false,
    };
}

/**
 * Describes a script action on a running cluster.
 */
export interface RuntimeScriptActionArgs {
    /**
     * The name of the script action.
     */
    name: pulumi.Input<string>;
    /**
     * The parameters for the script
     */
    parameters?: pulumi.Input<string>;
    /**
     * The list of roles where script will be executed.
     */
    roles: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The URI to the script.
     */
    uri: pulumi.Input<string>;
}

/**
 * Describes a script action on role on the cluster.
 */
export interface ScriptActionArgs {
    /**
     * The name of the script action.
     */
    name: pulumi.Input<string>;
    /**
     * The parameters for the script provided.
     */
    parameters: pulumi.Input<string>;
    /**
     * The URI to the script.
     */
    uri: pulumi.Input<string>;
}

/**
 * The security profile which contains Ssh public key for the HDInsight cluster.
 */
export interface SecurityProfileArgs {
    /**
     * The resource ID of the user's Azure Active Directory Domain Service.
     */
    aaddsResourceId?: pulumi.Input<string>;
    /**
     * Optional. The Distinguished Names for cluster user groups
     */
    clusterUsersGroupDNs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The directory type.
     */
    directoryType?: pulumi.Input<string | enums.DirectoryType>;
    /**
     * The organization's active directory domain.
     */
    domain?: pulumi.Input<string>;
    /**
     * The domain admin password.
     */
    domainUserPassword?: pulumi.Input<string>;
    /**
     * The domain user account that will have admin privileges on the cluster.
     */
    domainUsername?: pulumi.Input<string>;
    /**
     * The LDAPS protocol URLs to communicate with the Active Directory.
     */
    ldapsUrls?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * User assigned identity that has permissions to read and create cluster-related artifacts in the user's AADDS.
     */
    msiResourceId?: pulumi.Input<string>;
    /**
     * The organizational unit within the Active Directory to place the cluster and service accounts.
     */
    organizationalUnitDN?: pulumi.Input<string>;
}

/**
 * The list of SSH public keys.
 */
export interface SshProfileArgs {
    /**
     * The list of SSH public keys.
     */
    publicKeys?: pulumi.Input<pulumi.Input<SshPublicKeyArgs>[]>;
}

/**
 * The SSH public key for the cluster nodes.
 */
export interface SshPublicKeyArgs {
    /**
     * The certificate for SSH.
     */
    certificateData?: pulumi.Input<string>;
}

/**
 * The storage Account.
 */
export interface StorageAccountArgs {
    /**
     * The container in the storage account, only to be specified for WASB storage accounts.
     */
    container?: pulumi.Input<string>;
    /**
     * The filesystem, only to be specified for Azure Data Lake Storage Gen 2.
     */
    fileSystem?: pulumi.Input<string>;
    /**
     * The file share name.
     */
    fileshare?: pulumi.Input<string>;
    /**
     * Whether or not the storage account is the default storage account.
     */
    isDefault?: pulumi.Input<boolean>;
    /**
     * The storage account access key.
     */
    key?: pulumi.Input<string>;
    /**
     * The managed identity (MSI) that is allowed to access the storage account, only to be specified for Azure Data Lake Storage Gen 2.
     */
    msiResourceId?: pulumi.Input<string>;
    /**
     * The name of the storage account.
     */
    name?: pulumi.Input<string>;
    /**
     * The resource ID of storage account, only to be specified for Azure Data Lake Storage Gen 2.
     */
    resourceId?: pulumi.Input<string>;
    /**
     * The shared access signature key.
     */
    saskey?: pulumi.Input<string>;
}

/**
 * The storage profile.
 */
export interface StorageProfileArgs {
    /**
     * The list of storage accounts in the cluster.
     */
    storageaccounts?: pulumi.Input<pulumi.Input<StorageAccountArgs>[]>;
}

/**
 * The User Assigned Identity
 */
export interface UserAssignedIdentityArgs {
    /**
     * The tenant id of user assigned identity.
     */
    tenantId?: pulumi.Input<string>;
}

/**
 * The virtual network properties.
 */
export interface VirtualNetworkProfileArgs {
    /**
     * The ID of the virtual network.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of the subnet.
     */
    subnet?: pulumi.Input<string>;
}







