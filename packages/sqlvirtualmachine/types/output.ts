import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Additional SQL Server feature settings.
 */
export interface AdditionalFeaturesServerConfigurationsResponse {
    /**
     * Enable or disable R services (SQL 2016 onwards).
     */
    isRServicesEnabled?: boolean;
}

/**
 * Availability group configuration.
 */
export interface AgConfigurationResponse {
    /**
     * Replica configurations.
     */
    replicas?: AgReplicaResponse[];
}

/**
 * Availability group replica configuration.
 */
export interface AgReplicaResponse {
    /**
     * Replica commit mode in availability group.
     */
    commit?: string;
    /**
     * Replica failover mode in availability group.
     */
    failover?: string;
    /**
     * Replica readable secondary mode in availability group.
     */
    readableSecondary?: string;
    /**
     * Replica Role in availability group.
     */
    role?: string;
    /**
     * Sql VirtualMachine Instance Id.
     */
    sqlVirtualMachineInstanceId?: string;
}

/**
 * Configure assessment for databases in your SQL virtual machine.
 */
export interface AssessmentSettingsResponse {
    /**
     * Enable or disable assessment feature on SQL virtual machine.
     */
    enable?: boolean;
    /**
     * Run assessment immediately on SQL virtual machine.
     */
    runImmediately?: boolean;
    /**
     * Schedule for Assessment.
     */
    schedule?: ScheduleResponse;
}

/**
 * Configure backups for databases in your SQL virtual machine.
 */
export interface AutoBackupSettingsResponse {
    /**
     * Backup schedule type.
     */
    backupScheduleType?: string;
    /**
     * Include or exclude system databases from auto backup.
     */
    backupSystemDbs?: boolean;
    /**
     * Days of the week for the backups when FullBackupFrequency is set to Weekly.
     */
    daysOfWeek?: string[];
    /**
     * Enable or disable autobackup on SQL virtual machine.
     */
    enable?: boolean;
    /**
     * Enable or disable encryption for backup on SQL virtual machine.
     */
    enableEncryption?: boolean;
    /**
     * Frequency of full backups. In both cases, full backups begin during the next scheduled time window.
     */
    fullBackupFrequency?: string;
    /**
     * Start time of a given day during which full backups can take place. 0-23 hours.
     */
    fullBackupStartTime?: number;
    /**
     * Duration of the time window of a given day during which full backups can take place. 1-23 hours.
     */
    fullBackupWindowHours?: number;
    /**
     * Frequency of log backups. 5-60 minutes.
     */
    logBackupFrequency?: number;
    /**
     * Retention period of backup: 1-90 days.
     */
    retentionPeriod?: number;
    /**
     * Storage account url where backup will be taken to.
     */
    storageAccountUrl?: string;
    /**
     * Storage container name where backup will be taken to.
     */
    storageContainerName?: string;
}

/**
 * Set a patching window during which Windows and SQL patches will be applied.
 */
export interface AutoPatchingSettingsResponse {
    /**
     * Day of week to apply the patch on.
     */
    dayOfWeek?: string;
    /**
     * Enable or disable autopatching on SQL virtual machine.
     */
    enable?: boolean;
    /**
     * Duration of patching.
     */
    maintenanceWindowDuration?: number;
    /**
     * Hour of the day when patching is initiated. Local VM time.
     */
    maintenanceWindowStartingHour?: number;
}

/**
 * Configure your SQL virtual machine to be able to connect to the Azure Key Vault service.
 */
export interface KeyVaultCredentialSettingsResponse {
    /**
     * Azure Key Vault url.
     */
    azureKeyVaultUrl?: string;
    /**
     * Credential name.
     */
    credentialName?: string;
    /**
     * Enable or disable key vault credential setting.
     */
    enable?: boolean;
    /**
     * Service principal name to access key vault.
     */
    servicePrincipalName?: string;
}

/**
 * A load balancer configuration for an availability group listener.
 */
export interface LoadBalancerConfigurationResponse {
    /**
     * Resource id of the load balancer.
     */
    loadBalancerResourceId?: string;
    /**
     * Private IP address.
     */
    privateIpAddress?: PrivateIPAddressResponse;
    /**
     * Probe port.
     */
    probePort?: number;
    /**
     * Resource id of the public IP.
     */
    publicIpAddressResourceId?: string;
    /**
     * List of the SQL virtual machine instance resource id's that are enrolled into the availability group listener.
     */
    sqlVirtualMachineInstances?: string[];
}

/**
 * Multi subnet ip configuration for an availability group listener.
 */
export interface MultiSubnetIpConfigurationResponse {
    /**
     * Private IP address.
     */
    privateIpAddress: PrivateIPAddressResponse;
    /**
     * SQL virtual machine instance resource id that are enrolled into the availability group listener.
     */
    sqlVirtualMachineInstance: string;
}

/**
 * A private IP address bound to the availability group listener.
 */
export interface PrivateIPAddressResponse {
    /**
     * Private IP address bound to the availability group listener.
     */
    ipAddress?: string;
    /**
     * Subnet used to include private IP.
     */
    subnetResourceId?: string;
}

/**
 * Azure Active Directory identity configuration for a resource.
 */
export interface ResourceIdentityResponse {
    /**
     * The Azure Active Directory principal id.
     */
    principalId: string;
    /**
     * The Azure Active Directory tenant id.
     */
    tenantId: string;
    /**
     * The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource.
     */
    type?: string;
}

/**
 * Set the server/instance-level settings for SQL Server.
 */
export interface SQLInstanceSettingsResponse {
    /**
     * SQL Server Collation.
     */
    collation?: string;
    /**
     * SQL Server IFI.
     */
    isIfiEnabled?: boolean;
    /**
     * SQL Server LPIM.
     */
    isLpimEnabled?: boolean;
    /**
     * SQL Server Optimize for Adhoc workloads.
     */
    isOptimizeForAdHocWorkloadsEnabled?: boolean;
    /**
     * SQL Server MAXDOP.
     */
    maxDop?: number;
    /**
     * SQL Server maximum memory.
     */
    maxServerMemoryMB?: number;
    /**
     * SQL Server minimum memory.
     */
    minServerMemoryMB?: number;
}

/**
 * Set disk storage settings for SQL Server.
 */
export interface SQLStorageSettingsResponse {
    /**
     * SQL Server default file path
     */
    defaultFilePath?: string;
    /**
     * Logical Unit Numbers for the disks.
     */
    luns?: number[];
}

export interface SQLTempDbSettingsResponse {
    /**
     * SQL Server tempdb data file count
     */
    dataFileCount?: number;
    /**
     * SQL Server tempdb data file size
     */
    dataFileSize?: number;
    /**
     * SQL Server tempdb data file autoGrowth size
     */
    dataGrowth?: number;
    /**
     * SQL Server default file path
     */
    defaultFilePath?: string;
    /**
     * SQL Server tempdb log file size
     */
    logFileSize?: number;
    /**
     * SQL Server tempdb log file autoGrowth size
     */
    logGrowth?: number;
    /**
     * Logical Unit Numbers for the disks.
     */
    luns?: number[];
    /**
     * SQL Server tempdb persist folder choice
     */
    persistFolder?: boolean;
    /**
     * SQL Server tempdb persist folder location
     */
    persistFolderPath?: string;
}

export interface ScheduleResponse {
    /**
     * Day of the week to run assessment.
     */
    dayOfWeek?: string;
    /**
     * Enable or disable assessment schedule on SQL virtual machine.
     */
    enable?: boolean;
    /**
     * Occurrence of the DayOfWeek day within a month to schedule assessment. Takes values: 1,2,3,4 and -1. Use -1 for last DayOfWeek day of the month
     */
    monthlyOccurrence?: number;
    /**
     * Time of the day in HH:mm format. Eg. 17:30
     */
    startTime?: string;
    /**
     * Number of weeks to schedule between 2 assessment runs. Takes value from 1-6
     */
    weeklyInterval?: number;
}

/**
 * Set the connectivity, storage and workload settings.
 */
export interface ServerConfigurationsManagementSettingsResponse {
    /**
     * Additional SQL feature settings.
     */
    additionalFeaturesServerConfigurations?: AdditionalFeaturesServerConfigurationsResponse;
    /**
     * SQL connectivity type settings.
     */
    sqlConnectivityUpdateSettings?: SqlConnectivityUpdateSettingsResponse;
    /**
     * SQL Instance settings.
     */
    sqlInstanceSettings?: SQLInstanceSettingsResponse;
    /**
     * SQL storage update settings.
     */
    sqlStorageUpdateSettings?: SqlStorageUpdateSettingsResponse;
    /**
     * SQL workload type settings.
     */
    sqlWorkloadTypeUpdateSettings?: SqlWorkloadTypeUpdateSettingsResponse;
}

/**
 * Set the access level and network port settings for SQL Server.
 */
export interface SqlConnectivityUpdateSettingsResponse {
    /**
     * SQL Server connectivity option.
     */
    connectivityType?: string;
    /**
     * SQL Server port.
     */
    port?: number;
}

/**
 * Set disk storage settings for SQL Server.
 */
export interface SqlStorageUpdateSettingsResponse {
    /**
     * Disk configuration to apply to SQL Server.
     */
    diskConfigurationType?: string;
    /**
     * Virtual machine disk count.
     */
    diskCount?: number;
    /**
     * Device id of the first disk to be updated.
     */
    startingDeviceId?: number;
}

/**
 * Set workload type to optimize storage for SQL Server.
 */
export interface SqlWorkloadTypeUpdateSettingsResponse {
    /**
     * SQL Server workload type.
     */
    sqlWorkloadType?: string;
}

/**
 * Storage Configurations for SQL Data, Log and TempDb.
 */
export interface StorageConfigurationSettingsResponse {
    /**
     * Disk configuration to apply to SQL Server.
     */
    diskConfigurationType?: string;
    /**
     * SQL Server Data Storage Settings.
     */
    sqlDataSettings?: SQLStorageSettingsResponse;
    /**
     * SQL Server Log Storage Settings.
     */
    sqlLogSettings?: SQLStorageSettingsResponse;
    /**
     * SQL Server SystemDb Storage on DataPool if true.
     */
    sqlSystemDbOnDataDisk?: boolean;
    /**
     * SQL Server TempDb Storage Settings.
     */
    sqlTempDbSettings?: SQLTempDbSettingsResponse;
    /**
     * Storage workload type.
     */
    storageWorkloadType?: string;
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
 * Domain credentials for setting up Windows Server Failover Cluster for SQL availability group.
 */
export interface WsfcDomainCredentialsResponse {
    /**
     * Cluster bootstrap account password.
     */
    clusterBootstrapAccountPassword?: string;
    /**
     * Cluster operator account password.
     */
    clusterOperatorAccountPassword?: string;
    /**
     * SQL service account password.
     */
    sqlServiceAccountPassword?: string;
}

/**
 * Active Directory account details to operate Windows Server Failover Cluster.
 */
export interface WsfcDomainProfileResponse {
    /**
     * Account name used for creating cluster (at minimum needs permissions to 'Create Computer Objects' in domain).
     */
    clusterBootstrapAccount?: string;
    /**
     * Account name used for operating cluster i.e. will be part of administrators group on all the participating virtual machines in the cluster.
     */
    clusterOperatorAccount?: string;
    /**
     * Cluster subnet type.
     */
    clusterSubnetType?: string;
    /**
     * Fully qualified name of the domain.
     */
    domainFqdn?: string;
    /**
     * Optional path for fileshare witness.
     */
    fileShareWitnessPath?: string;
    /**
     * Organizational Unit path in which the nodes and cluster will be present.
     */
    ouPath?: string;
    /**
     * Account name under which SQL service will run on all participating SQL virtual machines in the cluster.
     */
    sqlServiceAccount?: string;
    /**
     * Fully qualified ARM resource id of the witness storage account.
     */
    storageAccountUrl?: string;
}


