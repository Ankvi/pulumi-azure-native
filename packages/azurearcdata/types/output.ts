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
 * Username and password for basic login authentication.
 */
export interface BasicLoginInformationResponse {
    /**
     * Login username.
     */
    username?: string;
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
 * The properties of Arc Sql Server database resource
 */
export interface SqlServerDatabaseResourcePropertiesResponse {
    backupInformation?: SqlServerDatabaseResourcePropertiesResponseBackupInformation;
    /**
     * Collation of the database.
     */
    collationName?: string;
    /**
     * Compatibility level of the database
     */
    compatibilityLevel?: number;
    /**
     * Creation date of the database.
     */
    databaseCreationDate?: string;
    /**
     * List of features that are enabled for the database
     */
    databaseOptions?: SqlServerDatabaseResourcePropertiesResponseDatabaseOptions;
    /**
     * Whether the database is read only or not.
     */
    isReadOnly?: boolean;
    /**
     * The provisioning state of the Arc-enabled SQL Server database resource.
     */
    provisioningState: string;
    /**
     * Status of the database.
     */
    recoveryMode?: string;
    /**
     * Size of the database.
     */
    sizeMB?: number;
    /**
     * Space left of the database.
     */
    spaceAvailableMB?: number;
    /**
     * State of the database.
     */
    state?: string;
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
 * Properties of SqlServerInstance.
 */
export interface SqlServerInstancePropertiesResponse {
    /**
     * Status of Azure Defender.
     */
    azureDefenderStatus?: string;
    /**
     * Timestamp of last Azure Defender status update.
     */
    azureDefenderStatusLastUpdated?: string;
    /**
     * SQL Server collation.
     */
    collation?: string;
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
    currentVersion?: string;
    /**
     * SQL Server edition.
     */
    edition?: string;
    /**
     * Type of host for Azure Arc SQL Server
     */
    hostType?: string;
    /**
     * SQL Server instance name.
     */
    instanceName?: string;
    /**
     * SQL Server license type.
     */
    licenseType?: string;
    /**
     * SQL Server update level.
     */
    patchLevel?: string;
    /**
     * SQL Server product ID.
     */
    productId?: string;
    /**
     * The provisioning state of the Arc-enabled SQL Server resource.
     */
    provisioningState: string;
    /**
     * The cloud connectivity status.
     */
    status: string;
    /**
     * Dynamic TCP ports used by SQL Server.
     */
    tcpDynamicPorts?: string;
    /**
     * Static TCP ports used by SQL Server.
     */
    tcpStaticPorts?: string;
    /**
     * The number of logical processors used by the SQL Server instance.
     */
    vCore?: string;
    /**
     * SQL Server version.
     */
    version?: string;
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
