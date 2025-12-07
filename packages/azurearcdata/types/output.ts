import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * DNS server details
 */
export interface ActiveDirectoryConnectorDNSDetailsResponse {
    /**
     * DNS domain name for which DNS lookups should be forwarded to the Active Directory DNS servers.
     */
    domainName?: string;
    /**
     * List of Active Directory DNS server IP addresses.
     */
    nameserverIPAddresses: string[];
    /**
     * Flag indicating whether to prefer Kubernetes DNS server response over AD DNS server response for IP address lookups.
     */
    preferK8sDnsForPtrLookups?: boolean;
    /**
     * Replica count for DNS proxy service. Default value is 1.
     */
    replicas?: number;
}
/**
 * activeDirectoryConnectorDNSDetailsResponseProvideDefaults sets the appropriate defaults for ActiveDirectoryConnectorDNSDetailsResponse
 */
export function activeDirectoryConnectorDNSDetailsResponseProvideDefaults(val: ActiveDirectoryConnectorDNSDetailsResponse): ActiveDirectoryConnectorDNSDetailsResponse {
    return {
        ...val,
        preferK8sDnsForPtrLookups: (val.preferK8sDnsForPtrLookups) ?? true,
        replicas: (val.replicas) ?? 1,
    };
}

/**
 * Active Directory domain details
 */
export interface ActiveDirectoryConnectorDomainDetailsResponse {
    /**
     * null
     */
    domainControllers?: ActiveDirectoryDomainControllersResponse;
    /**
     * NETBIOS name of the Active Directory domain.
     */
    netbiosDomainName?: string;
    /**
     * The distinguished name of the Active Directory Organizational Unit.
     */
    ouDistinguishedName?: string;
    /**
     * Name (uppercase) of the Active Directory domain that this AD connector will be associated with.
     */
    realm: string;
    /**
     * The service account provisioning mode for this Active Directory connector.
     */
    serviceAccountProvisioning?: string;
}
/**
 * activeDirectoryConnectorDomainDetailsResponseProvideDefaults sets the appropriate defaults for ActiveDirectoryConnectorDomainDetailsResponse
 */
export function activeDirectoryConnectorDomainDetailsResponseProvideDefaults(val: ActiveDirectoryConnectorDomainDetailsResponse): ActiveDirectoryConnectorDomainDetailsResponse {
    return {
        ...val,
        serviceAccountProvisioning: (val.serviceAccountProvisioning) ?? "manual",
    };
}

/**
 * The properties of an Active Directory connector resource
 */
export interface ActiveDirectoryConnectorPropertiesResponse {
    /**
     * Username and password for domain service account authentication.
     */
    domainServiceAccountLoginInformation?: BasicLoginInformationResponse;
    /**
     * The provisioning state of the Active Directory connector resource.
     */
    provisioningState: string;
    /**
     * null
     */
    spec: ActiveDirectoryConnectorSpecResponse;
    /**
     * null
     */
    status?: ActiveDirectoryConnectorStatusResponse;
}
/**
 * activeDirectoryConnectorPropertiesResponseProvideDefaults sets the appropriate defaults for ActiveDirectoryConnectorPropertiesResponse
 */
export function activeDirectoryConnectorPropertiesResponseProvideDefaults(val: ActiveDirectoryConnectorPropertiesResponse): ActiveDirectoryConnectorPropertiesResponse {
    return {
        ...val,
        spec: activeDirectoryConnectorSpecResponseProvideDefaults(val.spec),
    };
}

/**
 * The specifications of the AD Kubernetes resource.
 */
export interface ActiveDirectoryConnectorSpecResponse {
    /**
     * null
     */
    activeDirectory: ActiveDirectoryConnectorDomainDetailsResponse;
    /**
     * null
     */
    dns: ActiveDirectoryConnectorDNSDetailsResponse;
}
/**
 * activeDirectoryConnectorSpecResponseProvideDefaults sets the appropriate defaults for ActiveDirectoryConnectorSpecResponse
 */
export function activeDirectoryConnectorSpecResponseProvideDefaults(val: ActiveDirectoryConnectorSpecResponse): ActiveDirectoryConnectorSpecResponse {
    return {
        ...val,
        activeDirectory: activeDirectoryConnectorDomainDetailsResponseProvideDefaults(val.activeDirectory),
        dns: activeDirectoryConnectorDNSDetailsResponseProvideDefaults(val.dns),
    };
}

/**
 * The status of the Kubernetes custom resource.
 */
export interface ActiveDirectoryConnectorStatusResponse {
    /**
     * The time that the custom resource was last updated.
     */
    lastUpdateTime?: string;
    /**
     * The version of the replicaSet associated with the AD connector custom resource.
     */
    observedGeneration?: number;
    /**
     * The state of the AD connector custom resource.
     */
    state?: string;
}

/**
 * Information about a domain controller in the AD domain.
 */
export interface ActiveDirectoryDomainControllerResponse {
    /**
     * Fully-qualified domain name of a domain controller in the AD domain.
     */
    hostname: string;
}

/**
 * Details about the Active Directory domain controllers associated with this AD connector instance
 */
export interface ActiveDirectoryDomainControllersResponse {
    /**
     * Information about the Primary Domain Controller (PDC) in the AD domain.
     */
    primaryDomainController?: ActiveDirectoryDomainControllerResponse;
    /**
     * null
     */
    secondaryDomainControllers?: ActiveDirectoryDomainControllerResponse[];
}

/**
 * Authentication related configuration for the SQL Server Instance.
 */
export interface AuthenticationResponse {
    /**
     * Mode of authentication in SqlServer.
     */
    mode?: string;
    /**
     * Entra Authentication configuration for the SQL Server Instance.
     */
    sqlServerEntraIdentity?: EntraAuthenticationResponse[];
}

/**
 * The specifications of the availability group replica configuration
 */
export interface AvailabilityGroupConfigureResponse {
    /**
     * Property that determines whether a given availability replica can run in synchronous-commit mode
     */
    availabilityMode?: string;
    /**
     * The Availability Synchronization mode of the availability group replica.
     */
    availabilityModeDescription: string;
    /**
     * Represents the user-specified priority for performing backups on this replica relative to the other replicas in the same availability group.
     */
    backupPriority?: number;
    /**
     * Name of certificate to use for authentication. Required if any CERTIFICATE authentication modes are specified.
     */
    certificateName?: string;
    /**
     * Permitted authentication modes for the mirroring endpoint.
     */
    endpointAuthenticationMode?: string;
    /**
     * The login which will connect to the mirroring endpoint.
     */
    endpointConnectLogin?: string;
    /**
     * Name of the mirroring endpoint URL
     */
    endpointName?: string;
    /**
     * Mirroring endpoint URL of availability group replica
     */
    endpointUrl?: string;
    /**
     * Property to set the failover mode of the availability group replica
     */
    failoverMode?: string;
    /**
     * The failover mode of the availability group replica.
     */
    failoverModeDescription: string;
    /**
     * Whether the primary replica should allow all connections or only READ_WRITE connections (disallowing ReadOnly connections)
     */
    primaryAllowConnections?: string;
    /**
     * Whether the availability allows all connections or only read-write connections.
     */
    primaryRoleAllowConnectionsDescription: string;
    /**
     * Connectivity endpoint (URL) of the read only availability replica.
     */
    readOnlyRoutingUrl?: string;
    /**
     * Connectivity endpoint (URL) of the read write availability replica.
     */
    readWriteRoutingUrl?: string;
    /**
     * Date that the replica was created.
     */
    replicaCreateDate: string;
    /**
     * Date that the replica was modified.
     */
    replicaModifyDate: string;
    /**
     * Whether the secondary replica should allow all connections, no connections, or only ReadOnly connections.
     */
    secondaryAllowConnections?: string;
    /**
     * Whether an availability replica that is performing the secondary role (that is, a secondary replica) can accept connections from clients.
     */
    secondaryRoleAllowConnectionsDescription: string;
    /**
     * Specifies how the secondary replica will be initially seeded. AUTOMATIC enables direct seeding. This method will seed the secondary replica over the network. This method does not require you to backup and restore a copy of the primary database on the replica. MANUAL specifies manual seeding (default). This method requires you to create a backup of the database on the primary replica and manually restore that backup on the secondary replica.
     */
    seedingMode?: string;
    /**
     * Describes seeding mode.
     */
    seedingModeDescription: string;
    /**
     * The time-out period of availability group session replica, in seconds.
     */
    sessionTimeout?: number;
}

/**
 * The specifications of the availability group state
 */
export interface AvailabilityGroupInfoResponse {
    /**
     * Preferred location for performing backups on the availability databases in this availability group.
     */
    automatedBackupPreferenceDescription: string;
    /**
     * Specifies whether this is a basic availability group.
     */
    basicFeatures?: boolean;
    /**
     * SQL Server availability group cluster type description
     */
    clusterTypeDescription: string;
    /**
     * Specifies whether the availability group supports failover for database health conditions.
     */
    dbFailover?: boolean;
    /**
     * Specifies whether DTC support has been enabled for this availability group.
     */
    dtcSupport?: boolean;
    /**
     * User-defined failure condition level under which an automatic failover must be triggered.
     */
    failureConditionLevel?: number;
    /**
     * Wait time (in milliseconds) for the sp_server_diagnostics system stored procedure to return server-health information, before the server instance is assumed to be slow or not responding.
     */
    healthCheckTimeout?: number;
    /**
     * SQL Server availability group contained system databases.
     */
    isContained?: boolean;
    /**
     * Specifies whether this is a distributed availability group.
     */
    isDistributed?: boolean;
    /**
     * The listener for the sql server availability group
     */
    listener?: SqlAvailabilityGroupStaticIPListenerPropertiesResponse;
    /**
     * Indicates the recovery health of the primary replica.
     */
    primaryRecoveryHealthDescription: string;
    /**
     * Name of the server instance that is hosting the current primary replica.
     */
    primaryReplica: string;
    replicationPartnerType: string;
    /**
     * The number of secondary replicas that must be in a synchronized state for a commit to complete.
     */
    requiredSynchronizedSecondariesToCommit?: number;
    /**
     * Indicates the recovery health of a secondary replica.
     */
    secondaryRecoveryHealthDescription: string;
    /**
     * Reflects a roll-up of the synchronization health of all availability replicas in the availability group.
     */
    synchronizationHealthDescription: string;
    /**
     * SQL Server availability group current version.
     */
    version: number;
}

/**
 * The specifications of the availability group state
 */
export interface AvailabilityGroupStateResponse {
    /**
     * Current Always On availability groups role of the availability group replica.
     */
    availabilityGroupReplicaRole: string;
    /**
     * Whether a secondary replica is currently connected to the primary replica.
     */
    connectedStateDescription: string;
    /**
     * Text description of the last connection error of the availability group replica.
     */
    lastConnectErrorDescription: string;
    /**
     * Date and time timestamp indicating when the last connect error occurred.
     */
    lastConnectErrorTimestamp: string;
    /**
     * Current operational state of the availability group replica
     */
    operationalStateDescription: string;
    /**
     * Recovery health of the availability group replica.
     */
    recoveryHealthDescription: string;
    /**
     * Reflects a rollup of the database synchronization state (synchronization_state) of all joined availability databases (also known as replicas) and the availability mode of the replica (synchronous-commit or asynchronous-commit mode). The rollup will reflect the least healthy accumulated state the databases on the replica.
     */
    synchronizationHealthDescription: string;
}

/**
 * The background job details.
 */
export interface BackgroundJobResponse {
    /**
     * The end time of the background job.
     */
    endTime?: string;
    /**
     * The execution state of the background job.
     */
    executionState?: string;
    /**
     * The last execution status of the background job.
     */
    lastExecutionStatus?: string;
    /**
     * The last execution time of the background job.
     */
    lastExecutionTime?: string;
    /**
     * The start time of the background job.
     */
    startTime?: string;
    /**
     * The state of the background job.
     */
    state?: string;
}

/**
 * The backup profile for the SQL server.
 */
export interface BackupPolicyResponse {
    /**
     * The differential backup interval in hours.
     */
    differentialBackupHours?: number;
    /**
     * The value indicating days between full backups.
     */
    fullBackupDays?: number;
    /**
     * The retention period for all the databases in this managed instance.
     */
    retentionPeriodDays?: number;
    /**
     * The value indicating minutes between transaction log backups.
     */
    transactionLogBackupMinutes?: number;
}

/**
 * Username and password for basic login authentication.
 */
export interface BasicLoginInformationResponse {
    /**
     * Login username.
     */
    username?: string;
}

/**
 * Client connection related configuration.
 */
export interface ClientConnectionResponse {
    /**
     * Indicates if client connection is enabled for this SQL Server instance.
     */
    enabled?: boolean;
}

/**
 * Database mirroring endpoint related properties.
 */
export interface DBMEndpointResponse {
    /**
     * Name of the certificate.
     */
    certificateName: string;
    /**
     * The type of connection authentication required for connections to this endpoint
     */
    connectionAuth: string;
    /**
     * Encryption Algorithm
     */
    encryptionAlgorithm: string;
    /**
     * Name of the database mirroring endpoint.
     */
    endpointName: string;
    /**
     * Listener IP address.
     */
    ipAddress: string;
    /**
     * Is the port number dynamically assigned.
     */
    isDynamicPort: boolean;
    /**
     * Is Encryption enabled
     */
    isEncryptionEnabled: boolean;
    /**
     * The port number that the endpoint is listening on.
     */
    port: number;
    /**
     * Mirroring Role
     */
    role: string;
}

/**
 * The migration assessment related configuration.
 */
export interface DataBaseMigrationAssessmentResponse {
    /**
     * The time when Migration Assessment Report upload was last performed.
     */
    assessmentUploadTime: string;
    /**
     * Issues and warnings impacting the migration of Database to particular Azure Migration Target.
     */
    databaseAssessments: DataBaseMigrationAssessmentResponseDatabaseAssessments[];
    /**
     * The target readiness for migration for this database.
     */
    targetReadiness: TargetReadinessResponse;
}

export interface DataBaseMigrationAssessmentResponseDatabaseAssessments {
    appliesToMigrationTargetPlatform?: string;
    featureId?: string;
    issueCategory?: string;
    moreInformation?: string;
}

/**
 * Migration related configuration.
 */
export interface DataBaseMigrationResponse {
    /**
     * Migration assessments related configuration.
     */
    assessment?: DataBaseMigrationAssessmentResponse;
}

/**
 * The data controller properties.
 */
export interface DataControllerPropertiesResponse {
    /**
     * Deprecated. Azure Arc Data Services data controller no longer expose any endpoint. All traffic are exposed through Kubernetes native API.
     */
    basicLoginInformation?: BasicLoginInformationResponse;
    /**
     * If a CustomLocation is provided, this contains the ARM id of the connected cluster the custom location belongs to.
     */
    clusterId?: string;
    /**
     * If a CustomLocation is provided, this contains the ARM id of the extension the custom location belongs to.
     */
    extensionId?: string;
    /**
     * The infrastructure the data controller is running on.
     */
    infrastructure?: string;
    /**
     * The raw kubernetes information
     */
    k8sRaw?: any;
    /**
     * Last uploaded date from Kubernetes cluster. Defaults to current date time
     */
    lastUploadedDate?: string;
    /**
     * Log analytics workspace id and primary key
     */
    logAnalyticsWorkspaceConfig?: LogAnalyticsWorkspaceConfigResponse;
    /**
     * Login credential for logs dashboard on the Kubernetes cluster.
     */
    logsDashboardCredential?: BasicLoginInformationResponse;
    /**
     * Login credential for metrics dashboard on the Kubernetes cluster.
     */
    metricsDashboardCredential?: BasicLoginInformationResponse;
    /**
     * Properties from the Kubernetes data controller
     */
    onPremiseProperty?: OnPremisePropertyResponse;
    /**
     * The provisioning state of the Arc Data Controller resource.
     */
    provisioningState: string;
    /**
     * Deprecated. Service principal is deprecated in favor of Arc Kubernetes service extension managed identity.
     */
    uploadServicePrincipal?: UploadServicePrincipalResponse;
    /**
     * Properties on upload watermark.  Mostly timestamp for each upload data type
     */
    uploadWatermark?: UploadWatermarkResponse;
}
/**
 * dataControllerPropertiesResponseProvideDefaults sets the appropriate defaults for DataControllerPropertiesResponse
 */
export function dataControllerPropertiesResponseProvideDefaults(val: DataControllerPropertiesResponse): DataControllerPropertiesResponse {
    return {
        ...val,
        infrastructure: (val.infrastructure) ?? "other",
    };
}

/**
 * Entra Authentication configuration.
 */
export interface EntraAuthenticationResponse {
    /**
     * The client Id of the Managed Identity to query Microsoft Graph API. An empty string must be used for the system assigned Managed Identity.
     */
    clientId?: string;
    /**
     * The method used for Entra authentication
     */
    identityType?: string;
}

/**
 * The complex type of the extended location.
 */
export interface ExtendedLocationResponse {
    /**
     * The name of the extended location.
     */
    name?: string;
    /**
     * The type of the extended location.
     */
    type?: string;
}

/**
 * Failover Cluster Instance properties.
 */
export interface FailoverClusterResponse {
    /**
     * The IP addresses and subnet masks associated with the SQL Failover Cluster Instance on this host.
     */
    hostIPAddresses: HostIPAddressInformationResponse[];
    /**
     * The host names which are part of the SQL FCI resource group.
     */
    hostNames: string[];
    /**
     * The GUID of the SQL Server's underlying Failover Cluster.
     */
    id: string;
    /**
     * The network name to connect to the SQL FCI.
     */
    networkName: string;
    /**
     * The ARM IDs of the Arc SQL Server resources, belonging to the current server's Failover cluster.
     */
    sqlInstanceIds: string[];
}

/**
 * The properties of a failover group resource.
 */
export interface FailoverGroupPropertiesResponse {
    /**
     * The resource ID of the partner SQL managed instance.
     */
    partnerManagedInstanceId: string;
    /**
     * The provisioning state of the failover group resource.
     */
    provisioningState: string;
    /**
     * The specifications of the failover group resource.
     */
    spec: FailoverGroupSpecResponse;
    /**
     * The status of the failover group custom resource.
     */
    status?: any;
}
/**
 * failoverGroupPropertiesResponseProvideDefaults sets the appropriate defaults for FailoverGroupPropertiesResponse
 */
export function failoverGroupPropertiesResponseProvideDefaults(val: FailoverGroupPropertiesResponse): FailoverGroupPropertiesResponse {
    return {
        ...val,
        spec: failoverGroupSpecResponseProvideDefaults(val.spec),
    };
}

/**
 * The specifications of the failover group resource.
 */
export interface FailoverGroupSpecResponse {
    /**
     * The name of the partner SQL managed instance.
     */
    partnerMI?: string;
    /**
     * The mirroring endpoint public certificate for the partner SQL managed instance. Only PEM format is supported.
     */
    partnerMirroringCert?: string;
    /**
     * The mirroring endpoint URL of the partner SQL managed instance.
     */
    partnerMirroringURL?: string;
    /**
     * The partner sync mode of the SQL managed instance.
     */
    partnerSyncMode?: string;
    /**
     * The role of the SQL managed instance in this failover group.
     */
    role: string;
    /**
     * The shared name of the failover group for this SQL managed instance. Both SQL managed instance and its partner have to use the same shared name.
     */
    sharedName?: string;
    /**
     * The name of the SQL managed instance with this failover group role.
     */
    sourceMI?: string;
}
/**
 * failoverGroupSpecResponseProvideDefaults sets the appropriate defaults for FailoverGroupSpecResponse
 */
export function failoverGroupSpecResponseProvideDefaults(val: FailoverGroupSpecResponse): FailoverGroupSpecResponse {
    return {
        ...val,
        partnerSyncMode: (val.partnerSyncMode) ?? "async",
        role: (val.role) ?? "primary",
    };
}

/**
 * IP address and subnet mask.
 */
export interface HostIPAddressInformationResponse {
    /**
     * IP address
     */
    ipAddress: string;
    /**
     * Subnet mask
     */
    subnetMask: string;
}

/**
 * The kubernetes active directory information.
 */
export interface K8sActiveDirectoryResponse {
    /**
     * Account name for AAD
     */
    accountName?: string;
    connector?: K8sActiveDirectoryResponseConnector;
    /**
     * An array of encryption types
     */
    encryptionTypes?: string[];
    /**
     * Keytab secret used to authenticate with Active Directory.
     */
    keytabSecret?: string;
}

export interface K8sActiveDirectoryResponseConnector {
    /**
     * Name of the connector
     */
    name?: string;
    /**
     * Name space of the connector
     */
    namespace?: string;
}

/**
 * The kubernetes network settings information.
 */
export interface K8sNetworkSettingsResponse {
    /**
     * If 1, then SQL Server forces all connections to be encrypted. By default, this option is 0
     */
    forceencryption?: number;
    /**
     * Specifies which ciphers are allowed by SQL Server for TLS
     */
    tlsciphers?: string;
    /**
     * A comma-separated list of which TLS protocols are allowed by SQL Server
     */
    tlsprotocols?: string;
}

/**
 * The kubernetes resource limits and requests used to restrict or reserve resource usage.
 */
export interface K8sResourceRequirementsResponse {
    /**
     * Limits for a kubernetes resource type (e.g 'cpu', 'memory'). The 'cpu' request must be less than or equal to 'cpu' limit. Default 'cpu' is 2, minimum is 1. Default 'memory' is '4Gi', minimum is '2Gi. If sku.tier is GeneralPurpose, maximum 'cpu' is 24 and maximum 'memory' is '128Gi'.
     */
    limits?: {[key: string]: string};
    /**
     * Requests for a kubernetes resource type (e.g 'cpu', 'memory'). The 'cpu' request must be less than or equal to 'cpu' limit. Default 'cpu' is 2, minimum is 1. Default 'memory' is '4Gi', minimum is '2Gi. If sku.tier is GeneralPurpose, maximum 'cpu' is 24 and maximum 'memory' is '128Gi'.
     */
    requests?: {[key: string]: string};
}

/**
 * The kubernetes scheduling options. It describes restrictions used to help Kubernetes select appropriate nodes to host the database service
 */
export interface K8sSchedulingOptionsResponse {
    /**
     * The kubernetes resource limits and requests used to restrict or reserve resource usage.
     */
    resources?: K8sResourceRequirementsResponse;
}

/**
 * The kubernetes scheduling information.
 */
export interface K8sSchedulingResponse {
    /**
     * The kubernetes scheduling options. It describes restrictions used to help Kubernetes select appropriate nodes to host the database service
     */
    default?: K8sSchedulingOptionsResponse;
}

/**
 * The kubernetes security information.
 */
export interface K8sSecurityResponse {
    /**
     * The kubernetes active directory information.
     */
    activeDirectory?: K8sActiveDirectoryResponse;
    /**
     * Admin login secret key
     */
    adminLoginSecret?: string;
    /**
     * Service certificate secret used
     */
    serviceCertificateSecret?: string;
    /**
     * Transparent data encryption information.
     */
    transparentDataEncryption?: K8stransparentDataEncryptionResponse;
}

/**
 * The kubernetes settings information.
 */
export interface K8sSettingsResponse {
    /**
     * The kubernetes network settings information.
     */
    network?: K8sNetworkSettingsResponse;
}

/**
 * Transparent data encryption information.
 */
export interface K8stransparentDataEncryptionResponse {
    /**
     * Transparent data encryption mode. Can be Service Managed, Customer managed or disabled
     */
    mode?: string;
    /**
     * Protector secret for customer managed Transparent data encryption mode
     */
    protectorSecret?: string;
}

/**
 * Log analytics workspace id and primary key
 */
export interface LogAnalyticsWorkspaceConfigResponse {
    /**
     * Azure Log Analytics workspace ID
     */
    workspaceId?: string;
}

/**
 * The migration assessment related configuration.
 */
export interface MigrationAssessmentResponse {
    /**
     * The time when Migration Assessment Report upload was last performed.
     */
    assessmentUploadTime: string;
    /**
     * Indicates if migration assessment is enabled for this SQL Server instance.
     */
    enabled?: boolean;
    /**
     * Issues and warnings impacting the migration of SQL Server instance to particular Azure Migration Target.
     */
    serverAssessments: MigrationAssessmentResponseServerAssessments[];
    /**
     * SKU Recommendation results for Azure migration targets for SQL Server.
     */
    skuRecommendationResults: SkuRecommendationResultsResponse;
}

export interface MigrationAssessmentResponseImpactedObjects {
    impactDetail?: string;
    name?: string;
    objectType?: string;
}

export interface MigrationAssessmentResponseServerAssessments {
    appliesToMigrationTargetPlatform?: string;
    featureId?: string;
    impactedObjects?: MigrationAssessmentResponseImpactedObjects[];
    issueCategory?: string;
    moreInformation?: string;
}

/**
 * Migration related configuration.
 */
export interface MigrationResponse {
    /**
     * Migration assessments related configuration.
     */
    assessment?: MigrationAssessmentResponse;
}

/**
 * The monitoring configuration.
 */
export interface MonitoringResponse {
    /**
     * Indicates if monitoring is enabled for this SQL Server instance.
     */
    enabled?: boolean;
}

/**
 * Properties from the Kubernetes data controller
 */
export interface OnPremisePropertyResponse {
    /**
     * A globally unique ID identifying the associated Kubernetes cluster
     */
    id: string;
    /**
     * Certificate that contains the Kubernetes cluster public key used to verify signing
     */
    publicSigningKey: string;
    /**
     * Unique thumbprint returned to customer to verify the certificate being uploaded
     */
    signingCertificateThumbprint?: string;
}

/**
 * Postgres Instance properties.
 */
export interface PostgresInstancePropertiesResponse {
    /**
     * The instance admin
     */
    admin?: string;
    /**
     * Username and password for basic authentication.
     */
    basicLoginInformation?: BasicLoginInformationResponse;
    /**
     * The data controller id
     */
    dataControllerId?: string;
    /**
     * The raw kubernetes information
     */
    k8sRaw?: any;
    /**
     * Last uploaded date from Kubernetes cluster. Defaults to current date time
     */
    lastUploadedDate?: string;
    /**
     * The provisioning state of the Azure Arc-enabled PostgreSQL instance.
     */
    provisioningState: string;
}

/**
 * The resource model definition representing SKU for Azure Database for PostgresSQL - Azure Arc
 */
export interface PostgresInstanceSkuResponse {
    /**
     * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
     */
    capacity?: number;
    /**
     * Whether dev/test is enabled. When the dev field is set to true, the resource is used for dev/test purpose. 
     */
    dev?: boolean;
    /**
     * If the service has different generations of hardware, for the same SKU, then that can be captured here.
     */
    family?: string;
    /**
     * The name of the SKU.  It is typically a letter+number code
     */
    name: string;
    /**
     * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. 
     */
    size?: string;
    /**
     * This field is required to be implemented by the Resource Provider if the service has more than one tier.
     */
    tier?: string;
}
/**
 * postgresInstanceSkuResponseProvideDefaults sets the appropriate defaults for PostgresInstanceSkuResponse
 */
export function postgresInstanceSkuResponseProvideDefaults(val: PostgresInstanceSkuResponse): PostgresInstanceSkuResponse {
    return {
        ...val,
        dev: (val.dev) ?? true,
        tier: (val.tier) ?? "Hyperscale",
    };
}

/**
 * The sequencer action details.
 */
export interface SequencerActionResponse {
    /**
     * The unique identifier of the sequencer action.
     */
    actionId?: string;
    /**
     * The result of the sequencer action.
     */
    result?: string;
    /**
     * The state of the sequencer action.
     */
    state?: string;
}

/**
 * SKU Recommendation results for Azure SQL Database.
 */
export interface SkuRecommendationResultsAzureSqlDatabaseResponse {
    /**
     * The Monthly cost of the particular SKU.
     */
    monthlyCost?: SkuRecommendationResultsMonthlyCostResponse;
    /**
     * Number of blocker issues to fix before migrating to the target platform.
     */
    numberOfServerBlockerIssues?: number;
    /**
     * The target recommendation Status for this database.
     */
    recommendationStatus?: string;
    targetSku?: SkuRecommendationResultsAzureSqlDatabaseResponseTargetSku;
}

export interface SkuRecommendationResultsAzureSqlDatabaseResponseCategory {
    /**
     * The compute tier of the target SKU.
     */
    computeTier?: string;
    /**
     * The hardware type of the target SKU.
     */
    hardwareType?: string;
    /**
     * The SQL purchasing model of the target SKU.
     */
    sqlPurchasingModel?: string;
    /**
     * The SQL service tier of the target SKU.
     */
    sqlServiceTier?: string;
    /**
     * Indicates if zone redundancy is available for the target SKU.
     */
    zoneRedundancyAvailable?: boolean;
}

export interface SkuRecommendationResultsAzureSqlDatabaseResponseTargetSku {
    category?: SkuRecommendationResultsAzureSqlDatabaseResponseCategory;
}

/**
 * SKU Recommendation results for Azure SQL Managed Instance.
 */
export interface SkuRecommendationResultsAzureSqlManagedInstanceResponse {
    /**
     * The Monthly cost of the particular SKU.
     */
    monthlyCost?: SkuRecommendationResultsMonthlyCostResponse;
    /**
     * Number of blocker issues to fix before migrating to the target platform.
     */
    numberOfServerBlockerIssues?: number;
    /**
     * The target recommendation Status for this database.
     */
    recommendationStatus?: string;
    targetSku?: SkuRecommendationResultsAzureSqlManagedInstanceResponseTargetSku;
}

export interface SkuRecommendationResultsAzureSqlManagedInstanceResponseCategory {
    /**
     * The compute tier of the target SKU.
     */
    computeTier?: string;
    /**
     * The hardware type of the target SKU.
     */
    hardwareType?: string;
    /**
     * The SQL purchasing model of the target SKU.
     */
    sqlPurchasingModel?: string;
    /**
     * The SQL service tier of the target SKU.
     */
    sqlServiceTier?: string;
    /**
     * Indicates if zone redundancy is available for the target SKU.
     */
    zoneRedundancyAvailable?: boolean;
}

export interface SkuRecommendationResultsAzureSqlManagedInstanceResponseTargetSku {
    category?: SkuRecommendationResultsAzureSqlManagedInstanceResponseCategory;
}

/**
 * SKU Recommendation results for Azure SQL Virtual Machine.
 */
export interface SkuRecommendationResultsAzureSqlVirtualMachineResponse {
    /**
     * The Monthly cost of the particular SKU.
     */
    monthlyCost?: SkuRecommendationResultsMonthlyCostResponse;
    /**
     * Number of blocker issues to fix before migrating to the target platform.
     */
    numberOfServerBlockerIssues?: number;
    /**
     * The target recommendation Status for this database.
     */
    recommendationStatus?: string;
    targetSku?: SkuRecommendationResultsAzureSqlVirtualMachineResponseTargetSku;
}

export interface SkuRecommendationResultsAzureSqlVirtualMachineResponseCategory {
    /**
     * Available VM SKUs for the Azure SQL Virtual Machine.
     */
    availableVmSkus?: string[];
    /**
     * The virtual machine family of the target SKU.
     */
    virtualMachineFamily?: string;
}

export interface SkuRecommendationResultsAzureSqlVirtualMachineResponseTargetSku {
    category?: SkuRecommendationResultsAzureSqlVirtualMachineResponseCategory;
}

/**
 * The Monthly cost of the particular SKU.
 */
export interface SkuRecommendationResultsMonthlyCostResponse {
    /**
     * Represents the Cost of Compute.
     */
    computeCost?: number;
    /**
     * Represents the Cost of Storage.
     */
    storageCost?: number;
    /**
     * Represents the Total Cost.
     */
    totalCost?: number;
}

/**
 * SKU Recommendation results for Azure migration targets for SQL Server.
 */
export interface SkuRecommendationResultsResponse {
    /**
     * SKU Recommendation results for Azure SQL Database.
     */
    azureSqlDatabase?: SkuRecommendationResultsAzureSqlDatabaseResponse;
    /**
     * SKU Recommendation results for Azure SQL Managed Instance.
     */
    azureSqlManagedInstance?: SkuRecommendationResultsAzureSqlManagedInstanceResponse;
    /**
     * SKU Recommendation results for Azure SQL Virtual Machine.
     */
    azureSqlVirtualMachine?: SkuRecommendationResultsAzureSqlVirtualMachineResponse;
}

/**
 * The SKU recommendation summary.
 */
export interface SkuRecommendationSummaryResponse {
    /**
     * Number of blocker issues to fix before migrating this database to the target platform.
     */
    numOfBlockerIssues?: number;
    /**
     * The target recommendation Status for this database.
     */
    recommendationStatus?: string;
}

/**
 * The properties of Arc Sql availability group database replica resource
 */
export interface SqlAvailabilityGroupDatabaseReplicaResourcePropertiesResponse {
    /**
     * the database name.
     */
    databaseName?: string;
    /**
     * Description of the database state of the availability replica.
     */
    databaseStateDescription: string;
    /**
     * Whether this replica is transaction committer.
     */
    isCommitParticipant: boolean;
    /**
     * Whether the availability database is local.
     */
    isLocal: boolean;
    /**
     * Returns 1 if the replica is primary, or 0 if it is a secondary replica.
     */
    isPrimaryReplica: boolean;
    /**
     * Whether this data movement is suspended.
     */
    isSuspended: boolean;
    /**
     * the database replica name.
     */
    replicaName: string;
    /**
     * Description of the database suspended state reason.
     */
    suspendReasonDescription: string;
    /**
     * Description of the health of database.
     */
    synchronizationHealthDescription: string;
    /**
     * Description of the data-movement state.
     */
    synchronizationStateDescription: string;
}

/**
 * The properties of Arc Sql availability group replica resource
 */
export interface SqlAvailabilityGroupReplicaResourcePropertiesResponse {
    /**
     * null
     */
    configure?: AvailabilityGroupConfigureResponse;
    /**
     * ID GUID of the availability group.
     */
    replicaId: string;
    /**
     * The replica name.
     */
    replicaName?: string;
    /**
     * Resource id of this replica. This is required for a distributed availability group, in which case it describes the location of the availability group that hosts one replica in the DAG. In a non-distributed availability group this field is optional but can be used to store the Azure resource id for AG.
     */
    replicaResourceId?: string;
    /**
     * null
     */
    state?: AvailabilityGroupStateResponse;
}

/**
 * The properties of a static IP Arc Sql availability group listener
 */
export interface SqlAvailabilityGroupStaticIPListenerPropertiesResponse {
    /**
     * the DNS name for the listener.
     */
    dnsName?: string;
    /**
     * IP V4 Addresses and masks for the listener.
     */
    ipV4AddressesAndMasks?: SqlAvailabilityGroupStaticIPListenerPropertiesResponseIpV4AddressesAndMasks[];
    /**
     * IP V6 Addresses for the listener
     */
    ipV6Addresses?: string[];
    /**
     * Network port for the listener. Default is 1433.
     */
    port?: number;
}

export interface SqlAvailabilityGroupStaticIPListenerPropertiesResponseIpV4AddressesAndMasks {
    /**
     * IPV4 address
     */
    ipAddress?: string;
    /**
     * IPV4 netmask
     */
    mask?: string;
}

/**
 * The raw kubernetes information.
 */
export interface SqlManagedInstanceK8sRawResponse {
    /**
     * The kubernetes spec information.
     */
    spec?: SqlManagedInstanceK8sSpecResponse;
}

/**
 * The kubernetes spec information.
 */
export interface SqlManagedInstanceK8sSpecResponse {
    /**
     * This option specifies the number of SQL Managed Instance replicas that will be deployed in your Kubernetes cluster for high availability purposes. If sku.tier is BusinessCritical, allowed values are '2' or '3' with default of '3'. If sku.tier is GeneralPurpose, replicas must be '1'.
     */
    replicas?: number;
    /**
     * The kubernetes scheduling information.
     */
    scheduling?: K8sSchedulingResponse;
    /**
     * The kubernetes security information.
     */
    security?: K8sSecurityResponse;
    /**
     * The kubernetes settings information.
     */
    settings?: K8sSettingsResponse;
}

/**
 * Properties of sqlManagedInstance.
 */
export interface SqlManagedInstancePropertiesResponse {
    /**
     * The instance admin user
     */
    admin?: string;
    /**
     * Username and password for basic authentication.
     */
    basicLoginInformation?: BasicLoginInformationResponse;
    /**
     * If a CustomLocation is provided, this contains the ARM id of the connected cluster the custom location belongs to.
     */
    clusterId?: string;
    /**
     * null
     */
    dataControllerId?: string;
    /**
     * The instance end time
     */
    endTime?: string;
    /**
     * If a CustomLocation is provided, this contains the ARM id of the extension the custom location belongs to.
     */
    extensionId?: string;
    /**
     * The raw kubernetes information
     */
    k8sRaw?: SqlManagedInstanceK8sRawResponse;
    /**
     * Last uploaded date from Kubernetes cluster. Defaults to current date time
     */
    lastUploadedDate?: string;
    /**
     * The license type to apply for this managed instance.
     */
    licenseType?: string;
    /**
     * The provisioning state of the Arc-enabled SQL Managed Instance resource.
     */
    provisioningState: string;
    /**
     * The instance start time
     */
    startTime?: string;
}
/**
 * sqlManagedInstancePropertiesResponseProvideDefaults sets the appropriate defaults for SqlManagedInstancePropertiesResponse
 */
export function sqlManagedInstancePropertiesResponseProvideDefaults(val: SqlManagedInstancePropertiesResponse): SqlManagedInstancePropertiesResponse {
    return {
        ...val,
        licenseType: (val.licenseType) ?? "BasePrice",
    };
}

/**
 * The resource model definition representing SKU for Azure Managed Instance - Azure Arc
 */
export interface SqlManagedInstanceSkuResponse {
    /**
     * The SKU capacity
     */
    capacity?: number;
    /**
     * Whether dev/test is enabled. When the dev field is set to true, the resource is used for dev/test purpose. 
     */
    dev?: boolean;
    /**
     * The SKU family
     */
    family?: string;
    /**
     * The name of the SKU.
     */
    name: string;
    /**
     * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. 
     */
    size?: string;
    /**
     * The pricing tier for the instance.
     */
    tier?: string;
}
/**
 * sqlManagedInstanceSkuResponseProvideDefaults sets the appropriate defaults for SqlManagedInstanceSkuResponse
 */
export function sqlManagedInstanceSkuResponseProvideDefaults(val: SqlManagedInstanceSkuResponse): SqlManagedInstanceSkuResponse {
    return {
        ...val,
        dev: (val.dev) ?? true,
        tier: (val.tier) ?? "GeneralPurpose",
    };
}

/**
 * The properties of Arc Sql Server availability group resource
 */
export interface SqlServerAvailabilityGroupResourcePropertiesResponse {
    /**
     * ID GUID of the availability group.
     */
    availabilityGroupId: string;
    /**
     * Timestamp for when the data was collected from the client machine.
     */
    collectionTimestamp: string;
    /**
     * A list of Availability Group Database Replicas.
     */
    databases?: SqlServerAvailabilityGroupResourcePropertiesResponseDatabases;
    /**
     * Availability Group Info
     */
    info?: AvailabilityGroupInfoResponse;
    /**
     * the SQL Server Instance name.
     */
    instanceName: string;
    /**
     * The provisioning state of the Arc-enabled SQL Server availability group resource.
     */
    provisioningState: string;
    /**
     * A list of Availability Group Replicas.
     */
    replicas?: SqlServerAvailabilityGroupResourcePropertiesResponseReplicas;
    /**
     * the SQL server name.
     */
    serverName: string;
    /**
     * The unique ID of the hybrid machine that this resource belongs to.
     */
    vmId: string;
}

/**
 * A list of Availability Group Database Replicas.
 */
export interface SqlServerAvailabilityGroupResourcePropertiesResponseDatabases {
    /**
     * Link to retrieve next page of results.
     */
    nextLink: string;
    /**
     * Array of Availability Group Database Replicas.
     */
    value?: SqlAvailabilityGroupDatabaseReplicaResourcePropertiesResponse[];
}

/**
 * A list of Availability Group Replicas.
 */
export interface SqlServerAvailabilityGroupResourcePropertiesResponseReplicas {
    /**
     * Link to retrieve next page of results.
     */
    nextLink: string;
    /**
     * Array of Availability Group Replicas.
     */
    value?: SqlAvailabilityGroupReplicaResourcePropertiesResponse[];
}

/**
 * The properties of Arc Sql Server database resource
 */
export interface SqlServerDatabaseResourcePropertiesResponse {
    backupInformation?: SqlServerDatabaseResourcePropertiesResponseBackupInformation;
    /**
     * The backup profile for the SQL server.
     */
    backupPolicy?: BackupPolicyResponse;
    /**
     * Collation of the database.
     */
    collationName?: string;
    /**
     * Compatibility level of the database
     */
    compatibilityLevel?: number;
    /**
     * Database create mode. PointInTimeRestore: Create a database by restoring a point in time backup of an existing database. sourceDatabaseId and restorePointInTime must be specified.
     */
    createMode?: string;
    /**
     * Total size in MB for the data (mdf and ndf) files for this database.
     */
    dataFileSizeMB?: number;
    /**
     * Creation date of the database.
     */
    databaseCreationDate?: string;
    /**
     * List of features that are enabled for the database
     */
    databaseOptions?: SqlServerDatabaseResourcePropertiesResponseDatabaseOptions;
    /**
     * This records the earliest start date and time that restore is available for this database (ISO8601 format).
     */
    earliestRestoreDate: string;
    /**
     * Whether the database is read only or not.
     */
    isReadOnly?: boolean;
    /**
     * The time when last successful database upload was performed.
     */
    lastDatabaseUploadTime: string;
    /**
     * Total size in MB for the log (ldf) files for this database.
     */
    logFileSizeMB?: number;
    /**
     * Migration related configuration.
     */
    migration?: DataBaseMigrationResponse;
    /**
     * The provisioning state of the Arc-enabled SQL Server database resource.
     */
    provisioningState: string;
    /**
     * Status of the database.
     */
    recoveryMode?: string;
    /**
     * Conditional. If createMode is PointInTimeRestore, this value is required. Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database.
     */
    restorePointInTime?: string;
    /**
     * Size of the database.
     */
    sizeMB?: number;
    /**
     * The name of the source database associated with create operation of this database.
     */
    sourceDatabaseId?: string;
    /**
     * Space left of the database.
     */
    spaceAvailableMB?: number;
    /**
     * State of the database.
     */
    state?: string;
    /**
     * The unique ID of the hybrid machine that this resource belongs to.
     */
    vmId: string;
}

export interface SqlServerDatabaseResourcePropertiesResponseBackupInformation {
    /**
     * Date time of last full backup.
     */
    lastFullBackup?: string;
    /**
     * Date time of last log backup.
     */
    lastLogBackup?: string;
}

/**
 * List of features that are enabled for the database
 */
export interface SqlServerDatabaseResourcePropertiesResponseDatabaseOptions {
    isAutoCloseOn?: boolean;
    isAutoCreateStatsOn?: boolean;
    isAutoShrinkOn?: boolean;
    isAutoUpdateStatsOn?: boolean;
    isEncrypted?: boolean;
    isMemoryOptimizationEnabled?: boolean;
    isRemoteDataArchiveEnabled?: boolean;
    isTrustworthyOn?: boolean;
}

/**
 * Properties of SQL Server ESU license.
 */
export interface SqlServerEsuLicensePropertiesResponse {
    /**
     * The timestamp of the activation of the SqlServerEsuLicense in ISO 8601 date-time format.
     */
    activatedAt: string;
    /**
     * The activation state of the license.
     */
    activationState: string;
    /**
     * SQL Server ESU license type.
     */
    billingPlan: string;
    /**
     * The number of total cores of the license covers.
     */
    physicalCores: number;
    /**
     * The Azure scope to which the license will apply.
     */
    scopeType: string;
    /**
     * The tenantId the SQL Server ESU license resource subscription resides in.
     */
    tenantId: string;
    /**
     * The timestamp of the termination of the SqlServerEsuLicense in ISO 8601 date-time format.
     */
    terminatedAt: string;
    /**
     * The unique ID of this license. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
     */
    uniqueId: string;
    /**
     * The SQL Server version the license covers.
     */
    version: string;
}

/**
 * The status of the job running on the SQL Server instance.
 */
export interface SqlServerInstanceJobStatusResponse {
    /**
     * The background job details.
     */
    backgroundJob?: BackgroundJobResponse;
    /**
     * The unique identifier of the job.
     */
    id?: string;
    /**
     * The name of the SQL Server instance.
     */
    instanceName?: string;
    /**
     * The exception message if the job failed.
     */
    jobException?: string;
    /**
     * The status of the job.
     */
    jobStatus?: string;
    /**
     * The list of sequencer actions.
     */
    sequencerActions?: SequencerActionResponse[];
}

/**
 * Properties of SqlServerInstance.
 */
export interface SqlServerInstancePropertiesResponse {
    /**
     * The role of the SQL Server, based on availability.
     */
    alwaysOnRole: string;
    /**
     * Authentication related configuration for the SQL Server Instance.
     */
    authentication?: AuthenticationResponse;
    /**
     * Status of Azure Defender.
     */
    azureDefenderStatus: string;
    /**
     * Timestamp of last Azure Defender status update.
     */
    azureDefenderStatusLastUpdated: string;
    /**
     * The backup profile for the SQL server.
     */
    backupPolicy?: BackupPolicyResponse;
    /**
     * Client connection related configuration.
     */
    clientConnection?: ClientConnectionResponse;
    /**
     * SQL Server collation.
     */
    collation: string;
    /**
     * ARM Resource id of the container resource (Azure Arc for Servers).
     */
    containerResourceId: string;
    /**
     * The number of total cores of the Operating System Environment (OSE) hosting the SQL Server instance.
     */
    cores?: string;
    /**
     * The time when the resource was created.
     */
    createTime: string;
    /**
     * SQL Server current version.
     */
    currentVersion: string;
    /**
     * Database mirroring endpoint related properties.
     */
    databaseMirroringEndpoint?: DBMEndpointResponse;
    /**
     * Indicates whether database master key exists in SQL Server.
     */
    dbMasterKeyExists: boolean;
    /**
     * SQL Server edition.
     */
    edition?: string;
    /**
     * Failover Cluster Instance properties.
     */
    failoverCluster?: FailoverClusterResponse;
    /**
     * Type of host for Azure Arc SQL Server
     */
    hostType?: string;
    /**
     * SQL Server instance name.
     */
    instanceName?: string;
    /**
     * Indicates whether DigiCert PKI root-authority certificate (trusted by Azure) exists in SQL Server and trusted for Azure database.windows.net domains.
     */
    isDigiCertPkiCertTrustConfigured: boolean;
    /**
     * Indicates whether always On availability groups is enabled in SQL Server.
     */
    isHadrEnabled: boolean;
    /**
     * Indicates whether Microsoft PKI root-authority certificate (trusted by Azure) exists in SQL Server and trusted for Azure database.windows.net domains.
     */
    isMicrosoftPkiCertTrustConfigured: boolean;
    /**
     * The time when last successful inventory upload was performed.
     */
    lastInventoryUploadTime: string;
    /**
     * The time when last successful usage upload was performed.
     */
    lastUsageUploadTime: string;
    /**
     * SQL Server license type.
     */
    licenseType: string;
    /**
     * max server memory (MB) value configured for this instance.
     */
    maxServerMemoryMB: number;
    /**
     * Migration related configuration.
     */
    migration?: MigrationResponse;
    /**
     * The monitoring configuration.
     */
    monitoring?: MonitoringResponse;
    /**
     * SQL Server update level.
     */
    patchLevel: string;
    /**
     * SQL Server product ID.
     */
    productId: string;
    /**
     * The provisioning state of the Arc-enabled SQL Server resource.
     */
    provisioningState: string;
    /**
     * Indicates if the resource represents a SQL Server engine or a SQL Server component service installed on the host.
     */
    serviceType?: string;
    /**
     * The cloud connectivity status.
     */
    status: string;
    /**
     * Dynamic TCP ports used by SQL Server.
     */
    tcpDynamicPorts: string;
    /**
     * Static TCP ports used by SQL Server.
     */
    tcpStaticPorts: string;
    /**
     * An array of integers, where each value represents the enabled trace flags in SQL Server.
     */
    traceFlags: number[];
    /**
     * Upgrade Action for this resource is locked until it expires. The Expiration time indicated by this value. It is not locked when it is empty.
     */
    upgradeLockedUntil?: string;
    /**
     * The number of logical processors used by the SQL Server instance.
     */
    vCore: string;
    /**
     * SQL Server version.
     */
    version?: string;
    /**
     * The unique ID of the hybrid machine that this resource belongs to.
     */
    vmId: string;
}

/**
 * The telemetry column for the SQL Server instance.
 */
export interface SqlServerInstanceTelemetryColumnResponse {
    /**
     * The name of the telemetry column.
     */
    name?: string;
    /**
     * The type of the telemetry column.
     */
    type?: string;
}

/**
 * Properties of SQL Server License.
 */
export interface SqlServerLicensePropertiesResponse {
    /**
     * The activation state of the license.
     */
    activationState: string;
    /**
     * SQL Server license type.
     */
    billingPlan: string;
    /**
     * The timestamp of the most recent activation of the SqlServerLicense.
     */
    lastActivatedAt: string;
    /**
     * The timestamp of the most recent deactivation of the SqlServerLicense.
     */
    lastDeactivatedAt: string;
    /**
     * This property represents the choice between SQL Server Core and ESU licenses.
     */
    licenseCategory: string;
    /**
     * The number of total cores of the license covers.
     */
    physicalCores: number;
    /**
     * The Azure scope to which the license will apply.
     */
    scopeType: string;
    /**
     * The tenantId the SQL Server license resource subscription resides in.
     */
    tenantId: string;
}

/**
 * Metadata pertaining to creation and last modification of the resource.
 */
export interface SystemDataResponse {
    /**
     * The timestamp of resource creation (UTC).
     */
    createdAt?: string;
    /**
     * The identity that created the resource.
     */
    createdBy?: string;
    /**
     * The type of identity that created the resource.
     */
    createdByType?: string;
    /**
     * The timestamp of resource last modification (UTC)
     */
    lastModifiedAt?: string;
    /**
     * The identity that last modified the resource.
     */
    lastModifiedBy?: string;
    /**
     * The type of identity that last modified the resource.
     */
    lastModifiedByType?: string;
}

/**
 * The target readiness for migration for this database.
 */
export interface TargetReadinessResponse {
    /**
     * The SKU recommendation summary.
     */
    azureSqlDatabase?: SkuRecommendationSummaryResponse;
    /**
     * The SKU recommendation summary.
     */
    azureSqlManagedInstance?: SkuRecommendationSummaryResponse;
    /**
     * The SKU recommendation summary.
     */
    azureSqlVirtualMachine?: SkuRecommendationSummaryResponse;
}

/**
 * Service principal for uploading billing, metrics and logs.
 */
export interface UploadServicePrincipalResponse {
    /**
     * Authority for the service principal. Example: https://login.microsoftonline.com/
     */
    authority?: string;
    /**
     * Client ID of the service principal for uploading data.
     */
    clientId?: string;
    /**
     * Tenant ID of the service principal.
     */
    tenantId?: string;
}

/**
 * Properties on upload watermark.  Mostly timestamp for each upload data type
 */
export interface UploadWatermarkResponse {
    /**
     * Last uploaded date for logs from kubernetes cluster. Defaults to current date time
     */
    logs?: string;
    /**
     * Last uploaded date for metrics from kubernetes cluster. Defaults to current date time
     */
    metrics?: string;
    /**
     * Last uploaded date for usages from kubernetes cluster. Defaults to current date time
     */
    usages?: string;
}
