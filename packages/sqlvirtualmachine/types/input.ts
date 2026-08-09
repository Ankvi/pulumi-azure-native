import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Enable AAD authentication for SQL VM.
 */
export interface AADAuthenticationSettingsArgs {
    /**
     * The client Id of the Managed Identity to query Microsoft Graph API. An empty string must be used for the system assigned Managed Identity
     */
    clientId?: pulumi.Input<string | undefined>;
}

/**
 * Additional SQL Server feature settings.
 */
export interface AdditionalFeaturesServerConfigurationsArgs {
    /**
     * Enable or disable R services (SQL 2016 onwards).
     */
    isRServicesEnabled?: pulumi.Input<boolean | undefined>;
}

/**
 * Availability group configuration.
 */
export interface AgConfigurationArgs {
    /**
     * Replica configurations.
     */
    replicas?: pulumi.Input<pulumi.Input<AgReplicaArgs>[] | undefined>;
}

/**
 * Availability group replica configuration.
 */
export interface AgReplicaArgs {
    /**
     * Replica commit mode in availability group.
     */
    commit?: pulumi.Input<string | enums.Commit | undefined>;
    /**
     * Replica failover mode in availability group.
     */
    failover?: pulumi.Input<string | enums.Failover | undefined>;
    /**
     * Replica readable secondary mode in availability group.
     */
    readableSecondary?: pulumi.Input<string | enums.ReadableSecondary | undefined>;
    /**
     * Replica Role in availability group.
     */
    role?: pulumi.Input<string | enums.Role | undefined>;
    /**
     * Sql VirtualMachine Instance Id.
     */
    sqlVirtualMachineInstanceId?: pulumi.Input<string | undefined>;
}

/**
 * Configure SQL best practices Assessment for databases in your SQL virtual machine.
 */
export interface AssessmentSettingsArgs {
    /**
     * Enable or disable SQL best practices Assessment feature on SQL virtual machine.
     */
    enable?: pulumi.Input<boolean | undefined>;
    /**
     * Run SQL best practices Assessment immediately on SQL virtual machine.
     */
    runImmediately?: pulumi.Input<boolean | undefined>;
    /**
     * Schedule for SQL best practices Assessment.
     */
    schedule?: pulumi.Input<ScheduleArgs | undefined>;
}

/**
 * Configure backups for databases in your SQL virtual machine.
 */
export interface AutoBackupSettingsArgs {
    /**
     * Backup schedule type.
     */
    backupScheduleType?: pulumi.Input<string | enums.BackupScheduleType | undefined>;
    /**
     * Include or exclude system databases from auto backup.
     */
    backupSystemDbs?: pulumi.Input<boolean | undefined>;
    /**
     * Days of the week for the backups when FullBackupFrequency is set to Weekly.
     */
    daysOfWeek?: pulumi.Input<pulumi.Input<string | enums.AutoBackupDaysOfWeek>[] | undefined>;
    /**
     * Enable or disable autobackup on SQL virtual machine.
     */
    enable?: pulumi.Input<boolean | undefined>;
    /**
     * Enable or disable encryption for backup on SQL virtual machine.
     */
    enableEncryption?: pulumi.Input<boolean | undefined>;
    /**
     * Frequency of full backups. In both cases, full backups begin during the next scheduled time window.
     */
    fullBackupFrequency?: pulumi.Input<string | enums.FullBackupFrequencyType | undefined>;
    /**
     * Start time of a given day during which full backups can take place. 0-23 hours.
     */
    fullBackupStartTime?: pulumi.Input<number | undefined>;
    /**
     * Duration of the time window of a given day during which full backups can take place. 1-23 hours.
     */
    fullBackupWindowHours?: pulumi.Input<number | undefined>;
    /**
     * Frequency of log backups. 5-60 minutes.
     */
    logBackupFrequency?: pulumi.Input<number | undefined>;
    /**
     * Password for encryption on backup.
     */
    password?: pulumi.Input<string | undefined>;
    /**
     * Retention period of backup: 1-90 days.
     */
    retentionPeriod?: pulumi.Input<number | undefined>;
    /**
     * Storage account key where backup will be taken to.
     */
    storageAccessKey?: pulumi.Input<string | undefined>;
    /**
     * Storage account url where backup will be taken to.
     */
    storageAccountUrl?: pulumi.Input<string | undefined>;
    /**
     * Storage container name where backup will be taken to.
     */
    storageContainerName?: pulumi.Input<string | undefined>;
}

/**
 * Set a patching window during which Windows and SQL patches will be applied.
 */
export interface AutoPatchingSettingsArgs {
    /**
     * Additional Patch to be enable or enabled on the SQL Virtual Machine.
     */
    additionalVmPatch?: pulumi.Input<string | enums.AdditionalVmPatch | undefined>;
    /**
     * Day of week to apply the patch on.
     */
    dayOfWeek?: pulumi.Input<enums.DayOfWeek | undefined>;
    /**
     * Enable or disable autopatching on SQL virtual machine.
     */
    enable?: pulumi.Input<boolean | undefined>;
    /**
     * Duration of patching.
     */
    maintenanceWindowDuration?: pulumi.Input<number | undefined>;
    /**
     * Hour of the day when patching is initiated. Local VM time.
     */
    maintenanceWindowStartingHour?: pulumi.Input<number | undefined>;
}
/**
 * autoPatchingSettingsArgsProvideDefaults sets the appropriate defaults for AutoPatchingSettingsArgs
 */
export function autoPatchingSettingsArgsProvideDefaults(val: AutoPatchingSettingsArgs): AutoPatchingSettingsArgs {
    return {
        ...val,
        additionalVmPatch: (val.additionalVmPatch) ?? "NotSet",
    };
}

/**
 * Configure your SQL virtual machine to be able to connect to the Azure Key Vault service.
 */
export interface KeyVaultCredentialSettingsArgs {
    /**
     * Azure Key Vault url.
     */
    azureKeyVaultUrl?: pulumi.Input<string | undefined>;
    /**
     * Credential name.
     */
    credentialName?: pulumi.Input<string | undefined>;
    /**
     * Enable or disable key vault credential setting.
     */
    enable?: pulumi.Input<boolean | undefined>;
    /**
     * Service principal name to access key vault.
     */
    servicePrincipalName?: pulumi.Input<string | undefined>;
    /**
     * Service principal name secret to access key vault.
     */
    servicePrincipalSecret?: pulumi.Input<string | undefined>;
}

/**
 * A load balancer configuration for an availability group listener.
 */
export interface LoadBalancerConfigurationArgs {
    /**
     * Resource id of the load balancer.
     */
    loadBalancerResourceId?: pulumi.Input<string | undefined>;
    /**
     * Private IP address.
     */
    privateIpAddress?: pulumi.Input<PrivateIPAddressArgs | undefined>;
    /**
     * Probe port.
     */
    probePort?: pulumi.Input<number | undefined>;
    /**
     * Resource id of the public IP.
     */
    publicIpAddressResourceId?: pulumi.Input<string | undefined>;
    /**
     * List of the SQL virtual machine instance resource id's that are enrolled into the availability group listener.
     */
    sqlVirtualMachineInstances?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Multi subnet ip configuration for an availability group listener.
 */
export interface MultiSubnetIpConfigurationArgs {
    /**
     * Private IP address.
     */
    privateIpAddress: pulumi.Input<PrivateIPAddressArgs>;
    /**
     * SQL virtual machine instance resource id that are enrolled into the availability group listener.
     */
    sqlVirtualMachineInstance: pulumi.Input<string>;
}

/**
 * A private IP address bound to the availability group listener.
 */
export interface PrivateIPAddressArgs {
    /**
     * Private IP address bound to the availability group listener.
     */
    ipAddress?: pulumi.Input<string | undefined>;
    /**
     * Subnet used to include private IP.
     */
    subnetResourceId?: pulumi.Input<string | undefined>;
}

/**
 * Azure Active Directory identity configuration for a resource.
 */
export interface ResourceIdentityArgs {
    /**
     * The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource.
     */
    type?: pulumi.Input<string | enums.IdentityType | undefined>;
}

/**
 * Set the server/instance-level settings for SQL Server.
 */
export interface SQLInstanceSettingsArgs {
    /**
     * SQL Server Collation.
     */
    collation?: pulumi.Input<string | undefined>;
    /**
     * SQL Server IFI.
     */
    isIfiEnabled?: pulumi.Input<boolean | undefined>;
    /**
     * SQL Server LPIM.
     */
    isLpimEnabled?: pulumi.Input<boolean | undefined>;
    /**
     * SQL Server Optimize for Adhoc workloads.
     */
    isOptimizeForAdHocWorkloadsEnabled?: pulumi.Input<boolean | undefined>;
    /**
     * SQL Server MAXDOP.
     */
    maxDop?: pulumi.Input<number | undefined>;
    /**
     * SQL Server maximum memory.
     */
    maxServerMemoryMB?: pulumi.Input<number | undefined>;
    /**
     * SQL Server minimum memory.
     */
    minServerMemoryMB?: pulumi.Input<number | undefined>;
}

/**
 * Set disk storage settings for SQL Server.
 */
export interface SQLStorageSettingsArgs {
    /**
     * SQL Server default file path
     */
    defaultFilePath?: pulumi.Input<string | undefined>;
    /**
     * Logical Unit Numbers for the disks.
     */
    luns?: pulumi.Input<pulumi.Input<number>[] | undefined>;
    /**
     * Use storage pool to build a drive if true or not provided
     */
    useStoragePool?: pulumi.Input<boolean | undefined>;
}

/**
 * Set tempDb storage settings for SQL Server.
 */
export interface SQLTempDbSettingsArgs {
    /**
     * SQL Server tempdb data file count
     */
    dataFileCount?: pulumi.Input<number | undefined>;
    /**
     * SQL Server tempdb data file size
     */
    dataFileSize?: pulumi.Input<number | undefined>;
    /**
     * SQL Server tempdb data file autoGrowth size
     */
    dataGrowth?: pulumi.Input<number | undefined>;
    /**
     * SQL Server default file path
     */
    defaultFilePath?: pulumi.Input<string | undefined>;
    /**
     * SQL Server tempdb log file size
     */
    logFileSize?: pulumi.Input<number | undefined>;
    /**
     * SQL Server tempdb log file autoGrowth size
     */
    logGrowth?: pulumi.Input<number | undefined>;
    /**
     * Logical Unit Numbers for the disks.
     */
    luns?: pulumi.Input<pulumi.Input<number>[] | undefined>;
    /**
     * SQL Server tempdb persist folder choice
     */
    persistFolder?: pulumi.Input<boolean | undefined>;
    /**
     * SQL Server tempdb persist folder location
     */
    persistFolderPath?: pulumi.Input<string | undefined>;
    /**
     * Use storage pool to build a drive if true or not provided
     */
    useStoragePool?: pulumi.Input<boolean | undefined>;
}

/**
 * Set assessment schedule for SQL Server.
 */
export interface ScheduleArgs {
    /**
     * Day of the week to run assessment.
     */
    dayOfWeek?: pulumi.Input<enums.AssessmentDayOfWeek | undefined>;
    /**
     * Enable or disable assessment schedule on SQL virtual machine.
     */
    enable?: pulumi.Input<boolean | undefined>;
    /**
     * Occurrence of the DayOfWeek day within a month to schedule assessment. Takes values: 1,2,3,4 and -1. Use -1 for last DayOfWeek day of the month
     */
    monthlyOccurrence?: pulumi.Input<number | undefined>;
    /**
     * Time of the day in HH:mm format. Eg. 17:30
     */
    startTime?: pulumi.Input<string | undefined>;
    /**
     * Number of weeks to schedule between 2 assessment runs. Takes value from 1-6
     */
    weeklyInterval?: pulumi.Input<number | undefined>;
}

/**
 * Set the connectivity, storage and workload settings.
 */
export interface ServerConfigurationsManagementSettingsArgs {
    /**
     * Additional SQL feature settings.
     */
    additionalFeaturesServerConfigurations?: pulumi.Input<AdditionalFeaturesServerConfigurationsArgs | undefined>;
    /**
     * Azure AD authentication Settings.
     */
    azureAdAuthenticationSettings?: pulumi.Input<AADAuthenticationSettingsArgs | undefined>;
    /**
     * SQL connectivity type settings.
     */
    sqlConnectivityUpdateSettings?: pulumi.Input<SqlConnectivityUpdateSettingsArgs | undefined>;
    /**
     * SQL Instance settings.
     */
    sqlInstanceSettings?: pulumi.Input<SQLInstanceSettingsArgs | undefined>;
    /**
     * SQL storage update settings.
     */
    sqlStorageUpdateSettings?: pulumi.Input<SqlStorageUpdateSettingsArgs | undefined>;
    /**
     * SQL workload type settings.
     */
    sqlWorkloadTypeUpdateSettings?: pulumi.Input<SqlWorkloadTypeUpdateSettingsArgs | undefined>;
}

/**
 * Set the access level and network port settings for SQL Server.
 */
export interface SqlConnectivityUpdateSettingsArgs {
    /**
     * SQL Server connectivity option.
     */
    connectivityType?: pulumi.Input<string | enums.ConnectivityType | undefined>;
    /**
     * SQL Server port.
     */
    port?: pulumi.Input<number | undefined>;
    /**
     * SQL Server sysadmin login password.
     */
    sqlAuthUpdatePassword?: pulumi.Input<string | undefined>;
    /**
     * SQL Server sysadmin login to create.
     */
    sqlAuthUpdateUserName?: pulumi.Input<string | undefined>;
}

/**
 * Set disk storage settings for SQL Server.
 */
export interface SqlStorageUpdateSettingsArgs {
    /**
     * Disk configuration to apply to SQL Server.
     */
    diskConfigurationType?: pulumi.Input<string | enums.DiskConfigurationType | undefined>;
    /**
     * Virtual machine disk count.
     */
    diskCount?: pulumi.Input<number | undefined>;
    /**
     * Device id of the first disk to be updated.
     */
    startingDeviceId?: pulumi.Input<number | undefined>;
}

/**
 * Set workload type to optimize storage for SQL Server.
 */
export interface SqlWorkloadTypeUpdateSettingsArgs {
    /**
     * SQL Server workload type.
     */
    sqlWorkloadType?: pulumi.Input<string | enums.SqlWorkloadType | undefined>;
}

/**
 * Storage Configurations for SQL Data, Log and TempDb.
 */
export interface StorageConfigurationSettingsArgs {
    /**
     * Disk configuration to apply to SQL Server.
     */
    diskConfigurationType?: pulumi.Input<string | enums.DiskConfigurationType | undefined>;
    /**
     * Enable SQL IaaS Agent storage configuration blade in Azure Portal.
     */
    enableStorageConfigBlade?: pulumi.Input<boolean | undefined>;
    /**
     * SQL Server Data Storage Settings.
     */
    sqlDataSettings?: pulumi.Input<SQLStorageSettingsArgs | undefined>;
    /**
     * SQL Server Log Storage Settings.
     */
    sqlLogSettings?: pulumi.Input<SQLStorageSettingsArgs | undefined>;
    /**
     * SQL Server SystemDb Storage on DataPool if true.
     */
    sqlSystemDbOnDataDisk?: pulumi.Input<boolean | undefined>;
    /**
     * SQL Server TempDb Storage Settings.
     */
    sqlTempDbSettings?: pulumi.Input<SQLTempDbSettingsArgs | undefined>;
    /**
     * Storage workload type.
     */
    storageWorkloadType?: pulumi.Input<string | enums.StorageWorkloadType | undefined>;
}
/**
 * storageConfigurationSettingsArgsProvideDefaults sets the appropriate defaults for StorageConfigurationSettingsArgs
 */
export function storageConfigurationSettingsArgsProvideDefaults(val: StorageConfigurationSettingsArgs): StorageConfigurationSettingsArgs {
    return {
        ...val,
        enableStorageConfigBlade: (val.enableStorageConfigBlade) ?? false,
    };
}

/**
 * Virtual Machine Identity details used for Sql IaaS extension configurations.
 */
export interface VirtualMachineIdentityArgs {
    /**
     * ARM Resource Id of the identity. Only required when UserAssigned identity is selected.
     */
    resourceId?: pulumi.Input<string | undefined>;
    /**
     * Identity type of the virtual machine. Specify None to opt-out of Managed Identities.
     */
    type?: pulumi.Input<string | enums.VmIdentityType | undefined>;
}

/**
 * Domain credentials for setting up Windows Server Failover Cluster for SQL availability group.
 */
export interface WsfcDomainCredentialsArgs {
    /**
     * Cluster bootstrap account password.
     */
    clusterBootstrapAccountPassword?: pulumi.Input<string | undefined>;
    /**
     * Cluster operator account password.
     */
    clusterOperatorAccountPassword?: pulumi.Input<string | undefined>;
    /**
     * SQL service account password.
     */
    sqlServiceAccountPassword?: pulumi.Input<string | undefined>;
}

/**
 * Active Directory account details to operate Windows Server Failover Cluster.
 */
export interface WsfcDomainProfileArgs {
    /**
     * Account name used for creating cluster (at minimum needs permissions to 'Create Computer Objects' in domain).
     */
    clusterBootstrapAccount?: pulumi.Input<string | undefined>;
    /**
     * Account name used for operating cluster i.e. will be part of administrators group on all the participating virtual machines in the cluster.
     */
    clusterOperatorAccount?: pulumi.Input<string | undefined>;
    /**
     * Cluster subnet type.
     */
    clusterSubnetType?: pulumi.Input<string | enums.ClusterSubnetType | undefined>;
    /**
     * Fully qualified name of the domain.
     */
    domainFqdn?: pulumi.Input<string | undefined>;
    /**
     * Optional path for fileshare witness.
     */
    fileShareWitnessPath?: pulumi.Input<string | undefined>;
    /**
     * The flag to check if SQL service account is GMSA.
     */
    isSqlServiceAccountGmsa?: pulumi.Input<boolean | undefined>;
    /**
     * Organizational Unit path in which the nodes and cluster will be present.
     */
    ouPath?: pulumi.Input<string | undefined>;
    /**
     * Account name under which SQL service will run on all participating SQL virtual machines in the cluster.
     */
    sqlServiceAccount?: pulumi.Input<string | undefined>;
    /**
     * Primary key of the witness storage account.
     */
    storageAccountPrimaryKey?: pulumi.Input<string | undefined>;
    /**
     * Fully qualified ARM resource id of the witness storage account.
     */
    storageAccountUrl?: pulumi.Input<string | undefined>;
}
