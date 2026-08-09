import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * DNS server details
 */
export interface ActiveDirectoryConnectorDNSDetailsArgs {
    /**
     * DNS domain name for which DNS lookups should be forwarded to the Active Directory DNS servers.
     */
    domainName?: pulumi.Input<string | undefined>;
    /**
     * List of Active Directory DNS server IP addresses.
     */
    nameserverIPAddresses: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Flag indicating whether to prefer Kubernetes DNS server response over AD DNS server response for IP address lookups.
     */
    preferK8sDnsForPtrLookups?: pulumi.Input<boolean | undefined>;
    /**
     * Replica count for DNS proxy service. Default value is 1.
     */
    replicas?: pulumi.Input<number | undefined>;
}
/**
 * activeDirectoryConnectorDNSDetailsArgsProvideDefaults sets the appropriate defaults for ActiveDirectoryConnectorDNSDetailsArgs
 */
export function activeDirectoryConnectorDNSDetailsArgsProvideDefaults(val: ActiveDirectoryConnectorDNSDetailsArgs): ActiveDirectoryConnectorDNSDetailsArgs {
    return {
        ...val,
        preferK8sDnsForPtrLookups: (val.preferK8sDnsForPtrLookups) ?? true,
        replicas: (val.replicas) ?? 1,
    };
}

/**
 * Active Directory domain details
 */
export interface ActiveDirectoryConnectorDomainDetailsArgs {
    /**
     * null
     */
    domainControllers?: pulumi.Input<ActiveDirectoryDomainControllersArgs | undefined>;
    /**
     * NETBIOS name of the Active Directory domain.
     */
    netbiosDomainName?: pulumi.Input<string | undefined>;
    /**
     * The distinguished name of the Active Directory Organizational Unit.
     */
    ouDistinguishedName?: pulumi.Input<string | undefined>;
    /**
     * Name (uppercase) of the Active Directory domain that this AD connector will be associated with.
     */
    realm: pulumi.Input<string>;
    /**
     * The service account provisioning mode for this Active Directory connector.
     */
    serviceAccountProvisioning?: pulumi.Input<string | enums.AccountProvisioningMode | undefined>;
}
/**
 * activeDirectoryConnectorDomainDetailsArgsProvideDefaults sets the appropriate defaults for ActiveDirectoryConnectorDomainDetailsArgs
 */
export function activeDirectoryConnectorDomainDetailsArgsProvideDefaults(val: ActiveDirectoryConnectorDomainDetailsArgs): ActiveDirectoryConnectorDomainDetailsArgs {
    return {
        ...val,
        serviceAccountProvisioning: (val.serviceAccountProvisioning) ?? "manual",
    };
}

/**
 * The properties of an Active Directory connector resource
 */
export interface ActiveDirectoryConnectorPropertiesArgs {
    /**
     * Username and password for domain service account authentication.
     */
    domainServiceAccountLoginInformation?: pulumi.Input<BasicLoginInformationArgs | undefined>;
    /**
     * null
     */
    spec: pulumi.Input<ActiveDirectoryConnectorSpecArgs>;
    /**
     * null
     */
    status?: pulumi.Input<ActiveDirectoryConnectorStatusArgs | undefined>;
}
/**
 * activeDirectoryConnectorPropertiesArgsProvideDefaults sets the appropriate defaults for ActiveDirectoryConnectorPropertiesArgs
 */
export function activeDirectoryConnectorPropertiesArgsProvideDefaults(val: ActiveDirectoryConnectorPropertiesArgs): ActiveDirectoryConnectorPropertiesArgs {
    return {
        ...val,
        spec: pulumi.output(val.spec).apply(activeDirectoryConnectorSpecArgsProvideDefaults),
    };
}

/**
 * The specifications of the AD Kubernetes resource.
 */
export interface ActiveDirectoryConnectorSpecArgs {
    /**
     * null
     */
    activeDirectory: pulumi.Input<ActiveDirectoryConnectorDomainDetailsArgs>;
    /**
     * null
     */
    dns: pulumi.Input<ActiveDirectoryConnectorDNSDetailsArgs>;
}
/**
 * activeDirectoryConnectorSpecArgsProvideDefaults sets the appropriate defaults for ActiveDirectoryConnectorSpecArgs
 */
export function activeDirectoryConnectorSpecArgsProvideDefaults(val: ActiveDirectoryConnectorSpecArgs): ActiveDirectoryConnectorSpecArgs {
    return {
        ...val,
        activeDirectory: pulumi.output(val.activeDirectory).apply(activeDirectoryConnectorDomainDetailsArgsProvideDefaults),
        dns: pulumi.output(val.dns).apply(activeDirectoryConnectorDNSDetailsArgsProvideDefaults),
    };
}

/**
 * The status of the Kubernetes custom resource.
 */
export interface ActiveDirectoryConnectorStatusArgs {
    /**
     * The time that the custom resource was last updated.
     */
    lastUpdateTime?: pulumi.Input<string | undefined>;
    /**
     * The version of the replicaSet associated with the AD connector custom resource.
     */
    observedGeneration?: pulumi.Input<number | undefined>;
    /**
     * The state of the AD connector custom resource.
     */
    state?: pulumi.Input<string | undefined>;
}

/**
 * Information about a domain controller in the AD domain.
 */
export interface ActiveDirectoryDomainControllerArgs {
    /**
     * Fully-qualified domain name of a domain controller in the AD domain.
     */
    hostname: pulumi.Input<string>;
}

/**
 * Details about the Active Directory domain controllers associated with this AD connector instance
 */
export interface ActiveDirectoryDomainControllersArgs {
    /**
     * Information about the Primary Domain Controller (PDC) in the AD domain.
     */
    primaryDomainController?: pulumi.Input<ActiveDirectoryDomainControllerArgs | undefined>;
    /**
     * null
     */
    secondaryDomainControllers?: pulumi.Input<pulumi.Input<ActiveDirectoryDomainControllerArgs>[] | undefined>;
}

/**
 * Active Directory information that related to the resource.
 */
export interface ActiveDirectoryInformationArgs {
    /**
     * Keytab information that is used for the Sql Managed Instance when Active Directory authentication is used.
     */
    keytabInformation?: pulumi.Input<KeytabInformationArgs | undefined>;
}

/**
 * Authentication related configuration for the SQL Server Instance.
 */
export interface AuthenticationArgs {
    /**
     * Mode of authentication in SqlServer.
     */
    mode?: pulumi.Input<string | enums.Mode | undefined>;
    /**
     * Entra Authentication configuration for the SQL Server Instance.
     */
    sqlServerEntraIdentity?: pulumi.Input<pulumi.Input<EntraAuthenticationArgs>[] | undefined>;
}

/**
 * The specifications of the availability group replica configuration
 */
export interface AvailabilityGroupConfigureArgs {
    /**
     * Property that determines whether a given availability replica can run in synchronous-commit mode
     */
    availabilityMode?: pulumi.Input<string | enums.ArcSqlServerAvailabilityMode | undefined>;
    /**
     * Represents the user-specified priority for performing backups on this replica relative to the other replicas in the same availability group.
     */
    backupPriority?: pulumi.Input<number | undefined>;
    /**
     * Name of certificate to use for authentication. Required if any CERTIFICATE authentication modes are specified.
     */
    certificateName?: pulumi.Input<string | undefined>;
    /**
     * Permitted authentication modes for the mirroring endpoint.
     */
    endpointAuthenticationMode?: pulumi.Input<string | enums.ConnectionAuth | undefined>;
    /**
     * The login which will connect to the mirroring endpoint.
     */
    endpointConnectLogin?: pulumi.Input<string | undefined>;
    /**
     * Name of the mirroring endpoint URL
     */
    endpointName?: pulumi.Input<string | undefined>;
    /**
     * Mirroring endpoint URL of availability group replica
     */
    endpointUrl?: pulumi.Input<string | undefined>;
    /**
     * Property to set the failover mode of the availability group replica
     */
    failoverMode?: pulumi.Input<string | enums.ArcSqlServerFailoverMode | undefined>;
    /**
     * Whether the primary replica should allow all connections or only READ_WRITE connections (disallowing ReadOnly connections)
     */
    primaryAllowConnections?: pulumi.Input<enums.PrimaryAllowConnections | undefined>;
    /**
     * Connectivity endpoint (URL) of the read only availability replica.
     */
    readOnlyRoutingUrl?: pulumi.Input<string | undefined>;
    /**
     * Connectivity endpoint (URL) of the read write availability replica.
     */
    readWriteRoutingUrl?: pulumi.Input<string | undefined>;
    /**
     * Whether the secondary replica should allow all connections, no connections, or only ReadOnly connections.
     */
    secondaryAllowConnections?: pulumi.Input<enums.SecondaryAllowConnections | undefined>;
    /**
     * Specifies how the secondary replica will be initially seeded. AUTOMATIC enables direct seeding. This method will seed the secondary replica over the network. This method does not require you to backup and restore a copy of the primary database on the replica. MANUAL specifies manual seeding (default). This method requires you to create a backup of the database on the primary replica and manually restore that backup on the secondary replica.
     */
    seedingMode?: pulumi.Input<enums.SeedingMode | undefined>;
    /**
     * The time-out period of availability group session replica, in seconds.
     */
    sessionTimeout?: pulumi.Input<number | undefined>;
}

/**
 * The specifications of the availability group state
 */
export interface AvailabilityGroupInfoArgs {
    /**
     * Specifies whether this is a basic availability group.
     */
    basicFeatures?: pulumi.Input<boolean | undefined>;
    /**
     * Specifies whether the availability group supports failover for database health conditions.
     */
    dbFailover?: pulumi.Input<boolean | undefined>;
    /**
     * Specifies whether DTC support has been enabled for this availability group.
     */
    dtcSupport?: pulumi.Input<boolean | undefined>;
    /**
     * User-defined failure condition level under which an automatic failover must be triggered.
     */
    failureConditionLevel?: pulumi.Input<number | undefined>;
    /**
     * Wait time (in milliseconds) for the sp_server_diagnostics system stored procedure to return server-health information, before the server instance is assumed to be slow or not responding.
     */
    healthCheckTimeout?: pulumi.Input<number | undefined>;
    /**
     * SQL Server availability group contained system databases.
     */
    isContained?: pulumi.Input<boolean | undefined>;
    /**
     * Specifies whether this is a distributed availability group.
     */
    isDistributed?: pulumi.Input<boolean | undefined>;
    /**
     * The listener for the sql server availability group
     */
    listener?: pulumi.Input<SqlAvailabilityGroupStaticIPListenerPropertiesArgs | undefined>;
    /**
     * The number of secondary replicas that must be in a synchronized state for a commit to complete.
     */
    requiredSynchronizedSecondariesToCommit?: pulumi.Input<number | undefined>;
}

/**
 * The backup profile for the SQL server.
 */
export interface BackupPolicyArgs {
    /**
     * The differential backup interval in hours.
     */
    differentialBackupHours?: pulumi.Input<number | undefined>;
    /**
     * The value indicating days between full backups.
     */
    fullBackupDays?: pulumi.Input<number | undefined>;
    /**
     * The retention period for all the databases in this managed instance.
     */
    retentionPeriodDays?: pulumi.Input<number | undefined>;
    /**
     * The value indicating minutes between transaction log backups.
     */
    transactionLogBackupMinutes?: pulumi.Input<number | undefined>;
}

/**
 * Username and password for basic login authentication.
 */
export interface BasicLoginInformationArgs {
    /**
     * Login password.
     */
    password?: pulumi.Input<string | undefined>;
    /**
     * Login username.
     */
    username?: pulumi.Input<string | undefined>;
}

/**
 * Client connection related configuration.
 */
export interface ClientConnectionArgs {
    /**
     * Indicates if client connection is enabled for this SQL Server instance.
     */
    enabled?: pulumi.Input<boolean | undefined>;
}

/**
 * The data controller properties.
 */
export interface DataControllerPropertiesArgs {
    /**
     * Deprecated. Azure Arc Data Services data controller no longer expose any endpoint. All traffic are exposed through Kubernetes native API.
     */
    basicLoginInformation?: pulumi.Input<BasicLoginInformationArgs | undefined>;
    /**
     * If a CustomLocation is provided, this contains the ARM id of the connected cluster the custom location belongs to.
     */
    clusterId?: pulumi.Input<string | undefined>;
    /**
     * If a CustomLocation is provided, this contains the ARM id of the extension the custom location belongs to.
     */
    extensionId?: pulumi.Input<string | undefined>;
    /**
     * The infrastructure the data controller is running on.
     */
    infrastructure?: pulumi.Input<enums.Infrastructure | undefined>;
    /**
     * The raw kubernetes information
     */
    k8sRaw?: any | undefined;
    /**
     * Last uploaded date from Kubernetes cluster. Defaults to current date time
     */
    lastUploadedDate?: pulumi.Input<string | undefined>;
    /**
     * Log analytics workspace id and primary key
     */
    logAnalyticsWorkspaceConfig?: pulumi.Input<LogAnalyticsWorkspaceConfigArgs | undefined>;
    /**
     * Login credential for logs dashboard on the Kubernetes cluster.
     */
    logsDashboardCredential?: pulumi.Input<BasicLoginInformationArgs | undefined>;
    /**
     * Login credential for metrics dashboard on the Kubernetes cluster.
     */
    metricsDashboardCredential?: pulumi.Input<BasicLoginInformationArgs | undefined>;
    /**
     * Properties from the Kubernetes data controller
     */
    onPremiseProperty?: pulumi.Input<OnPremisePropertyArgs | undefined>;
    /**
     * Deprecated. Service principal is deprecated in favor of Arc Kubernetes service extension managed identity.
     */
    uploadServicePrincipal?: pulumi.Input<UploadServicePrincipalArgs | undefined>;
    /**
     * Properties on upload watermark.  Mostly timestamp for each upload data type
     */
    uploadWatermark?: pulumi.Input<UploadWatermarkArgs | undefined>;
}
/**
 * dataControllerPropertiesArgsProvideDefaults sets the appropriate defaults for DataControllerPropertiesArgs
 */
export function dataControllerPropertiesArgsProvideDefaults(val: DataControllerPropertiesArgs): DataControllerPropertiesArgs {
    return {
        ...val,
        infrastructure: (val.infrastructure) ?? "other",
    };
}

/**
 * Entra Authentication configuration.
 */
export interface EntraAuthenticationArgs {
    /**
     * The client Id of the Managed Identity to query Microsoft Graph API. An empty string must be used for the system assigned Managed Identity.
     */
    clientId?: pulumi.Input<string | undefined>;
    /**
     * The method used for Entra authentication
     */
    identityType?: pulumi.Input<string | enums.IdentityType | undefined>;
}

/**
 * The complex type of the extended location.
 */
export interface ExtendedLocationArgs {
    /**
     * The name of the extended location.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * The type of the extended location.
     */
    type?: pulumi.Input<string | enums.ExtendedLocationTypes | undefined>;
}

/**
 * The properties of a failover group resource.
 */
export interface FailoverGroupPropertiesArgs {
    /**
     * The resource ID of the partner SQL managed instance.
     */
    partnerManagedInstanceId: pulumi.Input<string>;
    /**
     * The specifications of the failover group resource.
     */
    spec: pulumi.Input<FailoverGroupSpecArgs>;
    /**
     * The status of the failover group custom resource.
     */
    status?: any | undefined;
}
/**
 * failoverGroupPropertiesArgsProvideDefaults sets the appropriate defaults for FailoverGroupPropertiesArgs
 */
export function failoverGroupPropertiesArgsProvideDefaults(val: FailoverGroupPropertiesArgs): FailoverGroupPropertiesArgs {
    return {
        ...val,
        spec: pulumi.output(val.spec).apply(failoverGroupSpecArgsProvideDefaults),
    };
}

/**
 * The specifications of the failover group resource.
 */
export interface FailoverGroupSpecArgs {
    /**
     * The name of the partner SQL managed instance.
     */
    partnerMI?: pulumi.Input<string | undefined>;
    /**
     * The mirroring endpoint public certificate for the partner SQL managed instance. Only PEM format is supported.
     */
    partnerMirroringCert?: pulumi.Input<string | undefined>;
    /**
     * The mirroring endpoint URL of the partner SQL managed instance.
     */
    partnerMirroringURL?: pulumi.Input<string | undefined>;
    /**
     * The partner sync mode of the SQL managed instance.
     */
    partnerSyncMode?: pulumi.Input<string | enums.FailoverGroupPartnerSyncMode | undefined>;
    /**
     * The role of the SQL managed instance in this failover group.
     */
    role: pulumi.Input<string | enums.InstanceFailoverGroupRole>;
    /**
     * The shared name of the failover group for this SQL managed instance. Both SQL managed instance and its partner have to use the same shared name.
     */
    sharedName?: pulumi.Input<string | undefined>;
    /**
     * The name of the SQL managed instance with this failover group role.
     */
    sourceMI?: pulumi.Input<string | undefined>;
}
/**
 * failoverGroupSpecArgsProvideDefaults sets the appropriate defaults for FailoverGroupSpecArgs
 */
export function failoverGroupSpecArgsProvideDefaults(val: FailoverGroupSpecArgs): FailoverGroupSpecArgs {
    return {
        ...val,
        partnerSyncMode: (val.partnerSyncMode) ?? "async",
        role: (val.role) ?? "primary",
    };
}

/**
 * The kubernetes active directory information.
 */
export interface K8sActiveDirectoryArgs {
    /**
     * Account name for AAD
     */
    accountName?: pulumi.Input<string | undefined>;
    connector?: pulumi.Input<K8sActiveDirectoryConnectorArgs | undefined>;
    /**
     * An array of encryption types
     */
    encryptionTypes?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Keytab secret used to authenticate with Active Directory.
     */
    keytabSecret?: pulumi.Input<string | undefined>;
}

export interface K8sActiveDirectoryConnectorArgs {
    /**
     * Name of the connector
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * Name space of the connector
     */
    namespace?: pulumi.Input<string | undefined>;
}

/**
 * The kubernetes network settings information.
 */
export interface K8sNetworkSettingsArgs {
    /**
     * If 1, then SQL Server forces all connections to be encrypted. By default, this option is 0
     */
    forceencryption?: pulumi.Input<number | undefined>;
    /**
     * Specifies which ciphers are allowed by SQL Server for TLS
     */
    tlsciphers?: pulumi.Input<string | undefined>;
    /**
     * A comma-separated list of which TLS protocols are allowed by SQL Server
     */
    tlsprotocols?: pulumi.Input<string | undefined>;
}

/**
 * The kubernetes resource limits and requests used to restrict or reserve resource usage.
 */
export interface K8sResourceRequirementsArgs {
    /**
     * Limits for a kubernetes resource type (e.g 'cpu', 'memory'). The 'cpu' request must be less than or equal to 'cpu' limit. Default 'cpu' is 2, minimum is 1. Default 'memory' is '4Gi', minimum is '2Gi. If sku.tier is GeneralPurpose, maximum 'cpu' is 24 and maximum 'memory' is '128Gi'.
     */
    limits?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Requests for a kubernetes resource type (e.g 'cpu', 'memory'). The 'cpu' request must be less than or equal to 'cpu' limit. Default 'cpu' is 2, minimum is 1. Default 'memory' is '4Gi', minimum is '2Gi. If sku.tier is GeneralPurpose, maximum 'cpu' is 24 and maximum 'memory' is '128Gi'.
     */
    requests?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
}

/**
 * The kubernetes scheduling information.
 */
export interface K8sSchedulingArgs {
    /**
     * The kubernetes scheduling options. It describes restrictions used to help Kubernetes select appropriate nodes to host the database service
     */
    default?: pulumi.Input<K8sSchedulingOptionsArgs | undefined>;
}

/**
 * The kubernetes scheduling options. It describes restrictions used to help Kubernetes select appropriate nodes to host the database service
 */
export interface K8sSchedulingOptionsArgs {
    /**
     * The kubernetes resource limits and requests used to restrict or reserve resource usage.
     */
    resources?: pulumi.Input<K8sResourceRequirementsArgs | undefined>;
}

/**
 * The kubernetes security information.
 */
export interface K8sSecurityArgs {
    /**
     * The kubernetes active directory information.
     */
    activeDirectory?: pulumi.Input<K8sActiveDirectoryArgs | undefined>;
    /**
     * Admin login secret key
     */
    adminLoginSecret?: pulumi.Input<string | undefined>;
    /**
     * Service certificate secret used
     */
    serviceCertificateSecret?: pulumi.Input<string | undefined>;
    /**
     * Transparent data encryption information.
     */
    transparentDataEncryption?: pulumi.Input<K8stransparentDataEncryptionArgs | undefined>;
}

/**
 * The kubernetes settings information.
 */
export interface K8sSettingsArgs {
    /**
     * The kubernetes network settings information.
     */
    network?: pulumi.Input<K8sNetworkSettingsArgs | undefined>;
}

/**
 * Transparent data encryption information.
 */
export interface K8stransparentDataEncryptionArgs {
    /**
     * Transparent data encryption mode. Can be Service Managed, Customer managed or disabled
     */
    mode?: pulumi.Input<string | undefined>;
    /**
     * Protector secret for customer managed Transparent data encryption mode
     */
    protectorSecret?: pulumi.Input<string | undefined>;
}

/**
 * Keytab used for authenticate with Active Directory.
 */
export interface KeytabInformationArgs {
    /**
     * A base64-encoded keytab.
     */
    keytab?: pulumi.Input<string | undefined>;
}

/**
 * Log analytics workspace id and primary key
 */
export interface LogAnalyticsWorkspaceConfigArgs {
    /**
     * Primary key of the workspace
     */
    primaryKey?: pulumi.Input<string | undefined>;
    /**
     * Azure Log Analytics workspace ID
     */
    workspaceId?: pulumi.Input<string | undefined>;
}

/**
 * Migration related configuration.
 */
export interface MigrationArgs {
    /**
     * Migration assessments related configuration.
     */
    assessment?: pulumi.Input<MigrationAssessmentArgs | undefined>;
}

/**
 * The migration assessment related configuration.
 */
export interface MigrationAssessmentArgs {
    /**
     * Indicates if migration assessment is enabled for this SQL Server instance.
     */
    enabled?: pulumi.Input<boolean | undefined>;
}

/**
 * The monitoring configuration.
 */
export interface MonitoringArgs {
    /**
     * Indicates if monitoring is enabled for this SQL Server instance.
     */
    enabled?: pulumi.Input<boolean | undefined>;
}

/**
 * Properties from the Kubernetes data controller
 */
export interface OnPremisePropertyArgs {
    /**
     * A globally unique ID identifying the associated Kubernetes cluster
     */
    id: pulumi.Input<string>;
    /**
     * Certificate that contains the Kubernetes cluster public key used to verify signing
     */
    publicSigningKey: pulumi.Input<string>;
    /**
     * Unique thumbprint returned to customer to verify the certificate being uploaded
     */
    signingCertificateThumbprint?: pulumi.Input<string | undefined>;
}

/**
 * Postgres Instance properties.
 */
export interface PostgresInstancePropertiesArgs {
    /**
     * The instance admin
     */
    admin?: pulumi.Input<string | undefined>;
    /**
     * Username and password for basic authentication.
     */
    basicLoginInformation?: pulumi.Input<BasicLoginInformationArgs | undefined>;
    /**
     * The data controller id
     */
    dataControllerId?: pulumi.Input<string | undefined>;
    /**
     * The raw kubernetes information
     */
    k8sRaw?: any | undefined;
    /**
     * Last uploaded date from Kubernetes cluster. Defaults to current date time
     */
    lastUploadedDate?: pulumi.Input<string | undefined>;
}

/**
 * The resource model definition representing SKU for Azure Database for PostgresSQL - Azure Arc
 */
export interface PostgresInstanceSkuArgs {
    /**
     * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
     */
    capacity?: pulumi.Input<number | undefined>;
    /**
     * Whether dev/test is enabled. When the dev field is set to true, the resource is used for dev/test purpose.
     */
    dev?: pulumi.Input<boolean | undefined>;
    /**
     * If the service has different generations of hardware, for the same SKU, then that can be captured here.
     */
    family?: pulumi.Input<string | undefined>;
    /**
     * The name of the SKU.  It is typically a letter+number code
     */
    name: pulumi.Input<string>;
    /**
     * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
     */
    size?: pulumi.Input<string | undefined>;
    /**
     * This field is required to be implemented by the Resource Provider if the service has more than one tier.
     */
    tier?: pulumi.Input<enums.PostgresInstanceSkuTier | undefined>;
}
/**
 * postgresInstanceSkuArgsProvideDefaults sets the appropriate defaults for PostgresInstanceSkuArgs
 */
export function postgresInstanceSkuArgsProvideDefaults(val: PostgresInstanceSkuArgs): PostgresInstanceSkuArgs {
    return {
        ...val,
        dev: (val.dev) ?? true,
        tier: (val.tier) ?? "Hyperscale",
    };
}

/**
 * The properties of Arc Sql availability group database replica resource
 */
export interface SqlAvailabilityGroupDatabaseReplicaResourcePropertiesArgs {
    /**
     * the database name.
     */
    databaseName?: pulumi.Input<string | undefined>;
}

/**
 * The properties of Arc Sql availability group replica resource
 */
export interface SqlAvailabilityGroupReplicaResourcePropertiesArgs {
    /**
     * null
     */
    configure?: pulumi.Input<AvailabilityGroupConfigureArgs | undefined>;
    /**
     * The replica name.
     */
    replicaName?: pulumi.Input<string | undefined>;
    /**
     * Resource id of this replica. This is required for a distributed availability group, in which case it describes the location of the availability group that hosts one replica in the DAG. In a non-distributed availability group this field is optional but can be used to store the Azure resource id for AG.
     */
    replicaResourceId?: pulumi.Input<string | undefined>;
}

/**
 * The properties of a static IP Arc Sql availability group listener
 */
export interface SqlAvailabilityGroupStaticIPListenerPropertiesArgs {
    /**
     * the DNS name for the listener.
     */
    dnsName?: pulumi.Input<string | undefined>;
    /**
     * IP V4 Addresses and masks for the listener.
     */
    ipV4AddressesAndMasks?: pulumi.Input<pulumi.Input<SqlAvailabilityGroupStaticIPListenerPropertiesIpV4AddressesAndMasksArgs>[] | undefined>;
    /**
     * IP V6 Addresses for the listener
     */
    ipV6Addresses?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Network port for the listener. Default is 1433.
     */
    port?: pulumi.Input<number | undefined>;
}

export interface SqlAvailabilityGroupStaticIPListenerPropertiesIpV4AddressesAndMasksArgs {
    /**
     * IPV4 address
     */
    ipAddress?: pulumi.Input<string | undefined>;
    /**
     * IPV4 netmask
     */
    mask?: pulumi.Input<string | undefined>;
}

/**
 * The raw kubernetes information.
 */
export interface SqlManagedInstanceK8sRawArgs {
    /**
     * The kubernetes spec information.
     */
    spec?: pulumi.Input<SqlManagedInstanceK8sSpecArgs | undefined>;
}

/**
 * The kubernetes spec information.
 */
export interface SqlManagedInstanceK8sSpecArgs {
    /**
     * This option specifies the number of SQL Managed Instance replicas that will be deployed in your Kubernetes cluster for high availability purposes. If sku.tier is BusinessCritical, allowed values are '2' or '3' with default of '3'. If sku.tier is GeneralPurpose, replicas must be '1'.
     */
    replicas?: pulumi.Input<number | undefined>;
    /**
     * The kubernetes scheduling information.
     */
    scheduling?: pulumi.Input<K8sSchedulingArgs | undefined>;
    /**
     * The kubernetes security information.
     */
    security?: pulumi.Input<K8sSecurityArgs | undefined>;
    /**
     * The kubernetes settings information.
     */
    settings?: pulumi.Input<K8sSettingsArgs | undefined>;
}

/**
 * Properties of sqlManagedInstance.
 */
export interface SqlManagedInstancePropertiesArgs {
    /**
     * Active Directory information related to this SQL Managed Instance.
     */
    activeDirectoryInformation?: pulumi.Input<ActiveDirectoryInformationArgs | undefined>;
    /**
     * The instance admin user
     */
    admin?: pulumi.Input<string | undefined>;
    /**
     * Username and password for basic authentication.
     */
    basicLoginInformation?: pulumi.Input<BasicLoginInformationArgs | undefined>;
    /**
     * If a CustomLocation is provided, this contains the ARM id of the connected cluster the custom location belongs to.
     */
    clusterId?: pulumi.Input<string | undefined>;
    /**
     * null
     */
    dataControllerId?: pulumi.Input<string | undefined>;
    /**
     * The instance end time
     */
    endTime?: pulumi.Input<string | undefined>;
    /**
     * If a CustomLocation is provided, this contains the ARM id of the extension the custom location belongs to.
     */
    extensionId?: pulumi.Input<string | undefined>;
    /**
     * The raw kubernetes information
     */
    k8sRaw?: pulumi.Input<SqlManagedInstanceK8sRawArgs | undefined>;
    /**
     * Last uploaded date from Kubernetes cluster. Defaults to current date time
     */
    lastUploadedDate?: pulumi.Input<string | undefined>;
    /**
     * The license type to apply for this managed instance.
     */
    licenseType?: pulumi.Input<string | enums.ArcSqlManagedInstanceLicenseType | undefined>;
    /**
     * The instance start time
     */
    startTime?: pulumi.Input<string | undefined>;
}
/**
 * sqlManagedInstancePropertiesArgsProvideDefaults sets the appropriate defaults for SqlManagedInstancePropertiesArgs
 */
export function sqlManagedInstancePropertiesArgsProvideDefaults(val: SqlManagedInstancePropertiesArgs): SqlManagedInstancePropertiesArgs {
    return {
        ...val,
        licenseType: (val.licenseType) ?? "BasePrice",
    };
}

/**
 * The resource model definition representing SKU for Azure Managed Instance - Azure Arc
 */
export interface SqlManagedInstanceSkuArgs {
    /**
     * The SKU capacity
     */
    capacity?: pulumi.Input<number | undefined>;
    /**
     * Whether dev/test is enabled. When the dev field is set to true, the resource is used for dev/test purpose.
     */
    dev?: pulumi.Input<boolean | undefined>;
    /**
     * The SKU family
     */
    family?: pulumi.Input<string | undefined>;
    /**
     * The name of the SKU.
     */
    name: pulumi.Input<enums.SqlManagedInstanceSkuName>;
    /**
     * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
     */
    size?: pulumi.Input<string | undefined>;
    /**
     * The pricing tier for the instance.
     */
    tier?: pulumi.Input<enums.SqlManagedInstanceSkuTier | undefined>;
}
/**
 * sqlManagedInstanceSkuArgsProvideDefaults sets the appropriate defaults for SqlManagedInstanceSkuArgs
 */
export function sqlManagedInstanceSkuArgsProvideDefaults(val: SqlManagedInstanceSkuArgs): SqlManagedInstanceSkuArgs {
    return {
        ...val,
        dev: (val.dev) ?? true,
        tier: (val.tier) ?? "GeneralPurpose",
    };
}

/**
 * The properties of Arc Sql Server availability group resource
 */
export interface SqlServerAvailabilityGroupResourcePropertiesArgs {
    /**
     * A list of Availability Group Database Replicas.
     */
    databases?: pulumi.Input<SqlServerAvailabilityGroupResourcePropertiesDatabasesArgs | undefined>;
    /**
     * Availability Group Info
     */
    info?: pulumi.Input<AvailabilityGroupInfoArgs | undefined>;
    /**
     * A list of Availability Group Replicas.
     */
    replicas?: pulumi.Input<SqlServerAvailabilityGroupResourcePropertiesReplicasArgs | undefined>;
}

/**
 * A list of Availability Group Database Replicas.
 */
export interface SqlServerAvailabilityGroupResourcePropertiesDatabasesArgs {
    /**
     * Array of Availability Group Database Replicas.
     */
    value?: pulumi.Input<pulumi.Input<SqlAvailabilityGroupDatabaseReplicaResourcePropertiesArgs>[] | undefined>;
}

/**
 * A list of Availability Group Replicas.
 */
export interface SqlServerAvailabilityGroupResourcePropertiesReplicasArgs {
    /**
     * Array of Availability Group Replicas.
     */
    value?: pulumi.Input<pulumi.Input<SqlAvailabilityGroupReplicaResourcePropertiesArgs>[] | undefined>;
}

/**
 * The properties of Arc Sql Server database resource
 */
export interface SqlServerDatabaseResourcePropertiesArgs {
    backupInformation?: pulumi.Input<SqlServerDatabaseResourcePropertiesBackupInformationArgs | undefined>;
    /**
     * The backup profile for the SQL server.
     */
    backupPolicy?: pulumi.Input<BackupPolicyArgs | undefined>;
    /**
     * Collation of the database.
     */
    collationName?: pulumi.Input<string | undefined>;
    /**
     * Compatibility level of the database
     */
    compatibilityLevel?: pulumi.Input<number | undefined>;
    /**
     * Database create mode. PointInTimeRestore: Create a database by restoring a point in time backup of an existing database. sourceDatabaseId and restorePointInTime must be specified.
     */
    createMode?: pulumi.Input<string | enums.DatabaseCreateMode | undefined>;
    /**
     * Total size in MB for the data (mdf and ndf) files for this database.
     */
    dataFileSizeMB?: pulumi.Input<number | undefined>;
    /**
     * Creation date of the database.
     */
    databaseCreationDate?: pulumi.Input<string | undefined>;
    /**
     * List of features that are enabled for the database
     */
    databaseOptions?: pulumi.Input<SqlServerDatabaseResourcePropertiesDatabaseOptionsArgs | undefined>;
    /**
     * Whether the database is read only or not.
     */
    isReadOnly?: pulumi.Input<boolean | undefined>;
    /**
     * Total size in MB for the log (ldf) files for this database.
     */
    logFileSizeMB?: pulumi.Input<number | undefined>;
    /**
     * Status of the database.
     */
    recoveryMode?: pulumi.Input<string | enums.RecoveryMode | undefined>;
    /**
     * Conditional. If createMode is PointInTimeRestore, this value is required. Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database.
     */
    restorePointInTime?: pulumi.Input<string | undefined>;
    /**
     * Size of the database.
     */
    sizeMB?: pulumi.Input<number | undefined>;
    /**
     * The name of the source database associated with create operation of this database.
     */
    sourceDatabaseId?: pulumi.Input<string | undefined>;
    /**
     * Space left of the database.
     */
    spaceAvailableMB?: pulumi.Input<number | undefined>;
    /**
     * State of the database.
     */
    state?: pulumi.Input<string | enums.DatabaseState | undefined>;
}

export interface SqlServerDatabaseResourcePropertiesBackupInformationArgs {
    /**
     * Date time of last full backup.
     */
    lastFullBackup?: pulumi.Input<string | undefined>;
    /**
     * Date time of last log backup.
     */
    lastLogBackup?: pulumi.Input<string | undefined>;
}

/**
 * List of features that are enabled for the database
 */
export interface SqlServerDatabaseResourcePropertiesDatabaseOptionsArgs {
    isAutoCloseOn?: pulumi.Input<boolean | undefined>;
    isAutoCreateStatsOn?: pulumi.Input<boolean | undefined>;
    isAutoShrinkOn?: pulumi.Input<boolean | undefined>;
    isAutoUpdateStatsOn?: pulumi.Input<boolean | undefined>;
    isEncrypted?: pulumi.Input<boolean | undefined>;
    isMemoryOptimizationEnabled?: pulumi.Input<boolean | undefined>;
    isRemoteDataArchiveEnabled?: pulumi.Input<boolean | undefined>;
    isTrustworthyOn?: pulumi.Input<boolean | undefined>;
}

/**
 * Properties of SQL Server ESU license.
 */
export interface SqlServerEsuLicensePropertiesArgs {
    /**
     * The activation state of the license.
     */
    activationState: pulumi.Input<string | enums.State>;
    /**
     * SQL Server ESU license type.
     */
    billingPlan: pulumi.Input<string | enums.BillingPlan>;
    /**
     * The number of total cores of the license covers.
     */
    physicalCores: pulumi.Input<number>;
    /**
     * The Azure scope to which the license will apply.
     */
    scopeType: pulumi.Input<string | enums.ScopeType>;
    /**
     * The SQL Server version the license covers.
     */
    version: pulumi.Input<string | enums.Version>;
}

/**
 * Properties of SqlServerInstance.
 */
export interface SqlServerInstancePropertiesArgs {
    /**
     * Authentication related configuration for the SQL Server Instance.
     */
    authentication?: pulumi.Input<AuthenticationArgs | undefined>;
    /**
     * The backup profile for the SQL server.
     */
    backupPolicy?: pulumi.Input<BackupPolicyArgs | undefined>;
    /**
     * Client connection related configuration.
     */
    clientConnection?: pulumi.Input<ClientConnectionArgs | undefined>;
    /**
     * The number of total cores of the Operating System Environment (OSE) hosting the SQL Server instance.
     */
    cores?: pulumi.Input<string | undefined>;
    /**
     * SQL Server edition.
     */
    edition?: pulumi.Input<string | enums.EditionType | undefined>;
    /**
     * Type of host for Azure Arc SQL Server
     */
    hostType?: pulumi.Input<string | enums.HostType | undefined>;
    /**
     * SQL Server instance name.
     */
    instanceName?: pulumi.Input<string | undefined>;
    /**
     * Migration related configuration.
     */
    migration?: pulumi.Input<MigrationArgs | undefined>;
    /**
     * The monitoring configuration.
     */
    monitoring?: pulumi.Input<MonitoringArgs | undefined>;
    /**
     * Indicates if the resource represents a SQL Server engine or a SQL Server component service installed on the host.
     */
    serviceType?: pulumi.Input<string | enums.ServiceType | undefined>;
    /**
     * Upgrade Action for this resource is locked until it expires. The Expiration time indicated by this value. It is not locked when it is empty.
     */
    upgradeLockedUntil?: pulumi.Input<string | undefined>;
    /**
     * SQL Server version.
     */
    version?: pulumi.Input<string | enums.SqlVersion | undefined>;
}

/**
 * Properties of SQL Server License.
 */
export interface SqlServerLicensePropertiesArgs {
    /**
     * The activation state of the license.
     */
    activationState: pulumi.Input<string | enums.ActivationState>;
    /**
     * SQL Server license type.
     */
    billingPlan: pulumi.Input<string | enums.BillingPlan>;
    /**
     * This property represents the choice between SQL Server Core and ESU licenses.
     */
    licenseCategory: pulumi.Input<string | enums.LicenseCategory>;
    /**
     * The number of total cores of the license covers.
     */
    physicalCores: pulumi.Input<number>;
    /**
     * The Azure scope to which the license will apply.
     */
    scopeType: pulumi.Input<string | enums.ScopeType>;
}

/**
 * Service principal for uploading billing, metrics and logs.
 */
export interface UploadServicePrincipalArgs {
    /**
     * Authority for the service principal. Example: https://login.microsoftonline.com/
     */
    authority?: pulumi.Input<string | undefined>;
    /**
     * Client ID of the service principal for uploading data.
     */
    clientId?: pulumi.Input<string | undefined>;
    /**
     * Secret of the service principal
     */
    clientSecret?: pulumi.Input<string | undefined>;
    /**
     * Tenant ID of the service principal.
     */
    tenantId?: pulumi.Input<string | undefined>;
}

/**
 * Properties on upload watermark.  Mostly timestamp for each upload data type
 */
export interface UploadWatermarkArgs {
    /**
     * Last uploaded date for logs from kubernetes cluster. Defaults to current date time
     */
    logs?: pulumi.Input<string | undefined>;
    /**
     * Last uploaded date for metrics from kubernetes cluster. Defaults to current date time
     */
    metrics?: pulumi.Input<string | undefined>;
    /**
     * Last uploaded date for usages from kubernetes cluster. Defaults to current date time
     */
    usages?: pulumi.Input<string | undefined>;
}
