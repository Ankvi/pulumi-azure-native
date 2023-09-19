import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * DNS server details
     */
    export interface ActiveDirectoryConnectorDNSDetailsArgs {
        /**
         * DNS domain name for which DNS lookups should be forwarded to the Active Directory DNS servers.
         */
        domainName?: pulumi.Input<string>;
        /**
         * List of Active Directory DNS server IP addresses.
         */
        nameserverIPAddresses: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Flag indicating whether to prefer Kubernetes DNS server response over AD DNS server response for IP address lookups.
         */
        preferK8sDnsForPtrLookups?: pulumi.Input<boolean>;
        /**
         * Replica count for DNS proxy service. Default value is 1.
         */
        replicas?: pulumi.Input<number>;
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
        domainControllers?: pulumi.Input<ActiveDirectoryDomainControllersArgs>;
        /**
         * NETBIOS name of the Active Directory domain.
         */
        netbiosDomainName?: pulumi.Input<string>;
        /**
         * The distinguished name of the Active Directory Organizational Unit.
         */
        ouDistinguishedName?: pulumi.Input<string>;
        /**
         * Name (uppercase) of the Active Directory domain that this AD connector will be associated with.
         */
        realm: pulumi.Input<string>;
        /**
         * The service account provisioning mode for this Active Directory connector.
         */
        serviceAccountProvisioning?: pulumi.Input<string | enums.AccountProvisioningMode>;
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
        domainServiceAccountLoginInformation?: pulumi.Input<BasicLoginInformationArgs>;
        /**
         * null
         */
        spec: pulumi.Input<ActiveDirectoryConnectorSpecArgs>;
        /**
         * null
         */
        status?: pulumi.Input<ActiveDirectoryConnectorStatusArgs>;
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
        lastUpdateTime?: pulumi.Input<string>;
        /**
         * The version of the replicaSet associated with the AD connector custom resource.
         */
        observedGeneration?: pulumi.Input<number>;
        /**
         * The state of the AD connector custom resource.
         */
        state?: pulumi.Input<string>;
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
        primaryDomainController?: pulumi.Input<ActiveDirectoryDomainControllerArgs>;
        /**
         * null
         */
        secondaryDomainControllers?: pulumi.Input<pulumi.Input<ActiveDirectoryDomainControllerArgs>[]>;
    }

    /**
     * Active Directory information that related to the resource.
     */
    export interface ActiveDirectoryInformationArgs {
        /**
         * Keytab information that is used for the Sql Managed Instance when Active Directory authentication is used.
         */
        keytabInformation?: pulumi.Input<KeytabInformationArgs>;
    }

    /**
     * Username and password for basic login authentication.
     */
    export interface BasicLoginInformationArgs {
        /**
         * Login password.
         */
        password?: pulumi.Input<string>;
        /**
         * Login username.
         */
        username?: pulumi.Input<string>;
    }

    /**
     * The data controller properties.
     */
    export interface DataControllerPropertiesArgs {
        /**
         * Deprecated. Azure Arc Data Services data controller no longer expose any endpoint. All traffic are exposed through Kubernetes native API.
         */
        basicLoginInformation?: pulumi.Input<BasicLoginInformationArgs>;
        /**
         * If a CustomLocation is provided, this contains the ARM id of the connected cluster the custom location belongs to.
         */
        clusterId?: pulumi.Input<string>;
        /**
         * If a CustomLocation is provided, this contains the ARM id of the extension the custom location belongs to.
         */
        extensionId?: pulumi.Input<string>;
        /**
         * The infrastructure the data controller is running on.
         */
        infrastructure?: pulumi.Input<enums.Infrastructure>;
        /**
         * The raw kubernetes information
         */
        k8sRaw?: any;
        /**
         * Last uploaded date from Kubernetes cluster. Defaults to current date time
         */
        lastUploadedDate?: pulumi.Input<string>;
        /**
         * Log analytics workspace id and primary key
         */
        logAnalyticsWorkspaceConfig?: pulumi.Input<LogAnalyticsWorkspaceConfigArgs>;
        /**
         * Login credential for logs dashboard on the Kubernetes cluster.
         */
        logsDashboardCredential?: pulumi.Input<BasicLoginInformationArgs>;
        /**
         * Login credential for metrics dashboard on the Kubernetes cluster.
         */
        metricsDashboardCredential?: pulumi.Input<BasicLoginInformationArgs>;
        /**
         * Properties from the Kubernetes data controller
         */
        onPremiseProperty?: pulumi.Input<OnPremisePropertyArgs>;
        /**
         * Deprecated. Service principal is deprecated in favor of Arc Kubernetes service extension managed identity.
         */
        uploadServicePrincipal?: pulumi.Input<UploadServicePrincipalArgs>;
        /**
         * Properties on upload watermark.  Mostly timestamp for each upload data type
         */
        uploadWatermark?: pulumi.Input<UploadWatermarkArgs>;
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
     * The complex type of the extended location.
     */
    export interface ExtendedLocationArgs {
        /**
         * The name of the extended location.
         */
        name?: pulumi.Input<string>;
        /**
         * The type of the extended location.
         */
        type?: pulumi.Input<string | enums.ExtendedLocationTypes>;
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
        status?: any;
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
        partnerMI?: pulumi.Input<string>;
        /**
         * The mirroring endpoint public certificate for the partner SQL managed instance. Only PEM format is supported.
         */
        partnerMirroringCert?: pulumi.Input<string>;
        /**
         * The mirroring endpoint URL of the partner SQL managed instance.
         */
        partnerMirroringURL?: pulumi.Input<string>;
        /**
         * The partner sync mode of the SQL managed instance.
         */
        partnerSyncMode?: pulumi.Input<string | enums.FailoverGroupPartnerSyncMode>;
        /**
         * The role of the SQL managed instance in this failover group.
         */
        role: pulumi.Input<string | enums.InstanceFailoverGroupRole>;
        /**
         * The shared name of the failover group for this SQL managed instance. Both SQL managed instance and its partner have to use the same shared name.
         */
        sharedName?: pulumi.Input<string>;
        /**
         * The name of the SQL managed instance with this failover group role.
         */
        sourceMI?: pulumi.Input<string>;
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
        accountName?: pulumi.Input<string>;
        connector?: pulumi.Input<K8sActiveDirectoryConnectorArgs>;
        /**
         * An array of encryption types
         */
        encryptionTypes?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Keytab secret used to authenticate with Active Directory.
         */
        keytabSecret?: pulumi.Input<string>;
    }

    export interface K8sActiveDirectoryConnectorArgs {
        /**
         * Name of the connector
         */
        name?: pulumi.Input<string>;
        /**
         * Name space of the connector
         */
        namespace?: pulumi.Input<string>;
    }

    /**
     * The kubernetes network settings information.
     */
    export interface K8sNetworkSettingsArgs {
        /**
         * If 1, then SQL Server forces all connections to be encrypted. By default, this option is 0
         */
        forceencryption?: pulumi.Input<number>;
        /**
         * Specifies which ciphers are allowed by SQL Server for TLS
         */
        tlsciphers?: pulumi.Input<string>;
        /**
         * A comma-separated list of which TLS protocols are allowed by SQL Server
         */
        tlsprotocols?: pulumi.Input<string>;
    }

    /**
     * The kubernetes resource limits and requests used to restrict or reserve resource usage.
     */
    export interface K8sResourceRequirementsArgs {
        /**
         * Limits for a kubernetes resource type (e.g 'cpu', 'memory'). The 'cpu' request must be less than or equal to 'cpu' limit. Default 'cpu' is 2, minimum is 1. Default 'memory' is '4Gi', minimum is '2Gi. If sku.tier is GeneralPurpose, maximum 'cpu' is 24 and maximum 'memory' is '128Gi'.
         */
        limits?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Requests for a kubernetes resource type (e.g 'cpu', 'memory'). The 'cpu' request must be less than or equal to 'cpu' limit. Default 'cpu' is 2, minimum is 1. Default 'memory' is '4Gi', minimum is '2Gi. If sku.tier is GeneralPurpose, maximum 'cpu' is 24 and maximum 'memory' is '128Gi'.
         */
        requests?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }

    /**
     * The kubernetes scheduling information.
     */
    export interface K8sSchedulingArgs {
        /**
         * The kubernetes scheduling options. It describes restrictions used to help Kubernetes select appropriate nodes to host the database service
         */
        default?: pulumi.Input<K8sSchedulingOptionsArgs>;
    }

    /**
     * The kubernetes scheduling options. It describes restrictions used to help Kubernetes select appropriate nodes to host the database service
     */
    export interface K8sSchedulingOptionsArgs {
        /**
         * The kubernetes resource limits and requests used to restrict or reserve resource usage.
         */
        resources?: pulumi.Input<K8sResourceRequirementsArgs>;
    }

    /**
     * The kubernetes security information.
     */
    export interface K8sSecurityArgs {
        /**
         * The kubernetes active directory information.
         */
        activeDirectory?: pulumi.Input<K8sActiveDirectoryArgs>;
        /**
         * Admin login secret key
         */
        adminLoginSecret?: pulumi.Input<string>;
        /**
         * Service certificate secret used
         */
        serviceCertificateSecret?: pulumi.Input<string>;
        /**
         * Transparent data encryption information.
         */
        transparentDataEncryption?: pulumi.Input<K8stransparentDataEncryptionArgs>;
    }

    /**
     * The kubernetes settings information.
     */
    export interface K8sSettingsArgs {
        /**
         * The kubernetes network settings information.
         */
        network?: pulumi.Input<K8sNetworkSettingsArgs>;
    }

    /**
     * Transparent data encryption information.
     */
    export interface K8stransparentDataEncryptionArgs {
        /**
         * Transparent data encryption mode. Can be Service Managed, Customer managed or disabled
         */
        mode?: pulumi.Input<string>;
        /**
         * Protector secret for customer managed Transparent data encryption mode
         */
        protectorSecret?: pulumi.Input<string>;
    }

    /**
     * Keytab used for authenticate with Active Directory.
     */
    export interface KeytabInformationArgs {
        /**
         * A base64-encoded keytab.
         */
        keytab?: pulumi.Input<string>;
    }

    /**
     * Log analytics workspace id and primary key
     */
    export interface LogAnalyticsWorkspaceConfigArgs {
        /**
         * Primary key of the workspace
         */
        primaryKey?: pulumi.Input<string>;
        /**
         * Azure Log Analytics workspace ID
         */
        workspaceId?: pulumi.Input<string>;
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
        signingCertificateThumbprint?: pulumi.Input<string>;
    }

    /**
     * Postgres Instance properties.
     */
    export interface PostgresInstancePropertiesArgs {
        /**
         * The instance admin
         */
        admin?: pulumi.Input<string>;
        /**
         * Username and password for basic authentication.
         */
        basicLoginInformation?: pulumi.Input<BasicLoginInformationArgs>;
        /**
         * The data controller id
         */
        dataControllerId?: pulumi.Input<string>;
        /**
         * The raw kubernetes information
         */
        k8sRaw?: any;
        /**
         * Last uploaded date from Kubernetes cluster. Defaults to current date time
         */
        lastUploadedDate?: pulumi.Input<string>;
    }

    /**
     * The resource model definition representing SKU for Azure Database for PostgresSQL - Azure Arc
     */
    export interface PostgresInstanceSkuArgs {
        /**
         * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
         */
        capacity?: pulumi.Input<number>;
        /**
         * Whether dev/test is enabled. When the dev field is set to true, the resource is used for dev/test purpose. 
         */
        dev?: pulumi.Input<boolean>;
        /**
         * If the service has different generations of hardware, for the same SKU, then that can be captured here.
         */
        family?: pulumi.Input<string>;
        /**
         * The name of the SKU.  It is typically a letter+number code
         */
        name: pulumi.Input<string>;
        /**
         * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. 
         */
        size?: pulumi.Input<string>;
        /**
         * This field is required to be implemented by the Resource Provider if the service has more than one tier.
         */
        tier?: pulumi.Input<enums.PostgresInstanceSkuTier>;
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
     * The raw kubernetes information.
     */
    export interface SqlManagedInstanceK8sRawArgs {
        /**
         * The kubernetes spec information.
         */
        spec?: pulumi.Input<SqlManagedInstanceK8sSpecArgs>;
    }

    /**
     * The kubernetes spec information.
     */
    export interface SqlManagedInstanceK8sSpecArgs {
        /**
         * This option specifies the number of SQL Managed Instance replicas that will be deployed in your Kubernetes cluster for high availability purposes. If sku.tier is BusinessCritical, allowed values are '2' or '3' with default of '3'. If sku.tier is GeneralPurpose, replicas must be '1'.
         */
        replicas?: pulumi.Input<number>;
        /**
         * The kubernetes scheduling information.
         */
        scheduling?: pulumi.Input<K8sSchedulingArgs>;
        /**
         * The kubernetes security information.
         */
        security?: pulumi.Input<K8sSecurityArgs>;
        /**
         * The kubernetes settings information.
         */
        settings?: pulumi.Input<K8sSettingsArgs>;
    }

    /**
     * Properties of sqlManagedInstance.
     */
    export interface SqlManagedInstancePropertiesArgs {
        /**
         * Active Directory information related to this SQL Managed Instance.
         */
        activeDirectoryInformation?: pulumi.Input<ActiveDirectoryInformationArgs>;
        /**
         * The instance admin user
         */
        admin?: pulumi.Input<string>;
        /**
         * Username and password for basic authentication.
         */
        basicLoginInformation?: pulumi.Input<BasicLoginInformationArgs>;
        /**
         * If a CustomLocation is provided, this contains the ARM id of the connected cluster the custom location belongs to.
         */
        clusterId?: pulumi.Input<string>;
        /**
         * null
         */
        dataControllerId?: pulumi.Input<string>;
        /**
         * The instance end time
         */
        endTime?: pulumi.Input<string>;
        /**
         * If a CustomLocation is provided, this contains the ARM id of the extension the custom location belongs to.
         */
        extensionId?: pulumi.Input<string>;
        /**
         * The raw kubernetes information
         */
        k8sRaw?: pulumi.Input<SqlManagedInstanceK8sRawArgs>;
        /**
         * Last uploaded date from Kubernetes cluster. Defaults to current date time
         */
        lastUploadedDate?: pulumi.Input<string>;
        /**
         * The license type to apply for this managed instance.
         */
        licenseType?: pulumi.Input<string | enums.ArcSqlManagedInstanceLicenseType>;
        /**
         * The instance start time
         */
        startTime?: pulumi.Input<string>;
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
        capacity?: pulumi.Input<number>;
        /**
         * Whether dev/test is enabled. When the dev field is set to true, the resource is used for dev/test purpose. 
         */
        dev?: pulumi.Input<boolean>;
        /**
         * The SKU family
         */
        family?: pulumi.Input<string>;
        /**
         * The name of the SKU.
         */
        name: pulumi.Input<enums.SqlManagedInstanceSkuName>;
        /**
         * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. 
         */
        size?: pulumi.Input<string>;
        /**
         * The pricing tier for the instance.
         */
        tier?: pulumi.Input<enums.SqlManagedInstanceSkuTier>;
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
     * The properties of Arc Sql Server database resource
     */
    export interface SqlServerDatabaseResourcePropertiesArgs {
        backupInformation?: pulumi.Input<SqlServerDatabaseResourcePropertiesBackupInformationArgs>;
        /**
         * Collation of the database.
         */
        collationName?: pulumi.Input<string>;
        /**
         * Compatibility level of the database
         */
        compatibilityLevel?: pulumi.Input<number>;
        /**
         * Creation date of the database.
         */
        databaseCreationDate?: pulumi.Input<string>;
        /**
         * List of features that are enabled for the database
         */
        databaseOptions?: pulumi.Input<SqlServerDatabaseResourcePropertiesDatabaseOptionsArgs>;
        /**
         * Whether the database is read only or not.
         */
        isReadOnly?: pulumi.Input<boolean>;
        /**
         * Status of the database.
         */
        recoveryMode?: pulumi.Input<string | enums.RecoveryMode>;
        /**
         * Size of the database.
         */
        sizeMB?: pulumi.Input<number>;
        /**
         * Space left of the database.
         */
        spaceAvailableMB?: pulumi.Input<number>;
        /**
         * State of the database.
         */
        state?: pulumi.Input<string | enums.DatabaseState>;
    }

    export interface SqlServerDatabaseResourcePropertiesBackupInformationArgs {
        /**
         * Date time of last full backup.
         */
        lastFullBackup?: pulumi.Input<string>;
        /**
         * Date time of last log backup.
         */
        lastLogBackup?: pulumi.Input<string>;
    }

    /**
     * List of features that are enabled for the database
     */
    export interface SqlServerDatabaseResourcePropertiesDatabaseOptionsArgs {
        isAutoCloseOn?: pulumi.Input<boolean>;
        isAutoCreateStatsOn?: pulumi.Input<boolean>;
        isAutoShrinkOn?: pulumi.Input<boolean>;
        isAutoUpdateStatsOn?: pulumi.Input<boolean>;
        isEncrypted?: pulumi.Input<boolean>;
        isMemoryOptimizationEnabled?: pulumi.Input<boolean>;
        isRemoteDataArchiveEnabled?: pulumi.Input<boolean>;
        isTrustworthyOn?: pulumi.Input<boolean>;
    }

    /**
     * Properties of SqlServerInstance.
     */
    export interface SqlServerInstancePropertiesArgs {
        /**
         * Status of Azure Defender.
         */
        azureDefenderStatus?: pulumi.Input<string | enums.DefenderStatus>;
        /**
         * Timestamp of last Azure Defender status update.
         */
        azureDefenderStatusLastUpdated?: pulumi.Input<string>;
        /**
         * SQL Server collation.
         */
        collation?: pulumi.Input<string>;
        /**
         * ARM Resource id of the container resource (Azure Arc for Servers).
         */
        containerResourceId: pulumi.Input<string>;
        /**
         * The number of total cores of the Operating System Environment (OSE) hosting the SQL Server instance.
         */
        cores?: pulumi.Input<string>;
        /**
         * SQL Server current version.
         */
        currentVersion?: pulumi.Input<string>;
        /**
         * SQL Server edition.
         */
        edition?: pulumi.Input<string | enums.EditionType>;
        /**
         * Type of host for Azure Arc SQL Server
         */
        hostType?: pulumi.Input<string | enums.HostType>;
        /**
         * SQL Server instance name.
         */
        instanceName?: pulumi.Input<string>;
        /**
         * SQL Server license type.
         */
        licenseType?: pulumi.Input<string | enums.ArcSqlServerLicenseType>;
        /**
         * SQL Server update level.
         */
        patchLevel?: pulumi.Input<string>;
        /**
         * SQL Server product ID.
         */
        productId?: pulumi.Input<string>;
        /**
         * The cloud connectivity status.
         */
        status: pulumi.Input<string | enums.ConnectionStatus>;
        /**
         * Dynamic TCP ports used by SQL Server.
         */
        tcpDynamicPorts?: pulumi.Input<string>;
        /**
         * Static TCP ports used by SQL Server.
         */
        tcpStaticPorts?: pulumi.Input<string>;
        /**
         * The number of logical processors used by the SQL Server instance.
         */
        vCore?: pulumi.Input<string>;
        /**
         * SQL Server version.
         */
        version?: pulumi.Input<string | enums.SqlVersion>;
    }

    /**
     * Service principal for uploading billing, metrics and logs.
     */
    export interface UploadServicePrincipalArgs {
        /**
         * Authority for the service principal. Example: https://login.microsoftonline.com/
         */
        authority?: pulumi.Input<string>;
        /**
         * Client ID of the service principal for uploading data.
         */
        clientId?: pulumi.Input<string>;
        /**
         * Secret of the service principal
         */
        clientSecret?: pulumi.Input<string>;
        /**
         * Tenant ID of the service principal.
         */
        tenantId?: pulumi.Input<string>;
    }

    /**
     * Properties on upload watermark.  Mostly timestamp for each upload data type
     */
    export interface UploadWatermarkArgs {
        /**
         * Last uploaded date for logs from kubernetes cluster. Defaults to current date time
         */
        logs?: pulumi.Input<string>;
        /**
         * Last uploaded date for metrics from kubernetes cluster. Defaults to current date time
         */
        metrics?: pulumi.Input<string>;
        /**
         * Last uploaded date for usages from kubernetes cluster. Defaults to current date time
         */
        usages?: pulumi.Input<string>;
    }
