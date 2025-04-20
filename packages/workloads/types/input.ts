import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Defines the Alert Query Parameter.
 */
export interface AlertQueryParameterArgs {
    /**
     * The name of the alert query parameter.
     */
    name?: pulumi.Input<string>;
    /**
     * The value of the alert query parameter.
     */
    value?: pulumi.Input<string>;
}

/**
 * Describes the properties of an alert.
 */
export interface AlertRulePropertiesArgs {
    /**
     * Action Group resource Ids to invoke when the alert fires
     */
    actionGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The alert query parameters.
     */
    alertQueryParameters?: pulumi.Input<pulumi.Input<AlertQueryParameterArgs>[]>;
    /**
     * The value that indicates whether the alert should be automatically resolved or not. The default is Disable.
     */
    autoMitigate?: pulumi.Input<string | enums.AlertAutoMitigate>;
    /**
     * Evaluation of metric on a particular column.
     */
    dimension?: pulumi.Input<string>;
    /**
     * How often the scheduled query rule is evaluated.
     */
    evaluationFrequency?: pulumi.Input<number>;
    /**
     * The operator for failing periods.
     */
    failingPeriodsOperator?: pulumi.Input<string | enums.ConditionalOperator>;
    /**
     * The number of failing periods to trigger an alert.
     */
    failingPeriodsToAlert?: pulumi.Input<number>;
    /**
     * Mute actions for the chosen period of time after the alert is fired.
     */
    muteActionsDuration?: pulumi.Input<number>;
    /**
     * Severity of the alert. Should be an integer between [0-4]. Value of 0 is severest.
     */
    severity?: pulumi.Input<number>;
    /**
     * Indicates whether the alert is in an enabled state.
     */
    status?: pulumi.Input<string | enums.AlertRuleStatus>;
    /**
     * The threshold of the alert.
     */
    threshold?: pulumi.Input<number>;
    /**
     * The threshold operator of the alert.
     */
    thresholdOperator?: pulumi.Input<string | enums.ConditionalOperator>;
    /**
     * The period of time on which the Alert query will be executed.
     */
    windowSize?: pulumi.Input<number>;
}

/**
 * Configuration details of app service plan
 */
export interface AppServicePlanConfigurationArgs {
    /**
     * The number of workers in app service plan. If this is not set or set to 0, auto scale will be configured for the app service plan, otherwise, instance count is set to this number.
     */
    capacity?: pulumi.Input<number>;
    /**
     * The App Service plan tier.
     */
    tier?: pulumi.Input<string | enums.AppServicePlanTier>;
}

/**
 * Gets or sets the application server configuration.
 */
export interface ApplicationServerConfigurationArgs {
    /**
     * The number of app server instances.
     */
    instanceCount: pulumi.Input<number>;
    /**
     * The subnet id.
     */
    subnetId: pulumi.Input<string>;
    /**
     * Gets or sets the virtual machine configuration.
     */
    virtualMachineConfiguration: pulumi.Input<VirtualMachineConfigurationArgs>;
}

/**
 * The full resource names object for application layer resources. The number of entries in this list should be equal to the number VMs to be created for application layer.
 */
export interface ApplicationServerFullResourceNamesArgs {
    /**
     * The full name for availability set. In case name is not provided, it will be defaulted to {SID}-App-AvSet.
     */
    availabilitySetName?: pulumi.Input<string>;
    /**
     * The list of virtual machine naming details.
     */
    virtualMachines?: pulumi.Input<pulumi.Input<VirtualMachineResourceNamesArgs>[]>;
}

/**
 * Gets or sets the central server configuration.
 */
export interface CentralServerConfigurationArgs {
    /**
     * The number of central server VMs.
     */
    instanceCount: pulumi.Input<number>;
    /**
     * The subnet id.
     */
    subnetId: pulumi.Input<string>;
    /**
     * Gets or sets the virtual machine configuration.
     */
    virtualMachineConfiguration: pulumi.Input<VirtualMachineConfigurationArgs>;
}

/**
 * The full resource names object for central server layer resources.
 */
export interface CentralServerFullResourceNamesArgs {
    /**
     * The full name for availability set. In case name is not provided, it will be defaulted to {SID}-ASCS-AvSet.
     */
    availabilitySetName?: pulumi.Input<string>;
    /**
     * The resource names object for load balancer and related resources.
     */
    loadBalancer?: pulumi.Input<LoadBalancerResourceNamesArgs>;
    /**
     * The list of names for all ASCS virtual machines to be deployed. The number of entries in this list should be equal to the number VMs to be created for ASCS layer. At maximum, there can be two virtual machines at this layer: ASCS and ERS.
     */
    virtualMachines?: pulumi.Input<pulumi.Input<VirtualMachineResourceNamesArgs>[]>;
}

/**
 * Gets or sets the file share configuration where the transport directory fileshare is created and mounted as a part of the create infra flow. Please pre-create the resource group you intend to place the transport directory in. The storage account and fileshare will be auto-created by the ACSS and doesn't need to be pre-created.
 */
export interface CreateAndMountFileShareConfigurationArgs {
    /**
     * The type of file share config.
     * Expected value is 'CreateAndMount'.
     */
    configurationType: pulumi.Input<"CreateAndMount">;
    /**
     * The name of transport file share resource group. This should be pre created by the customer. The app rg is used in case of missing input.
     */
    resourceGroup?: pulumi.Input<string>;
    /**
     * The name of file share storage account name . A custom name is used in case of missing input.
     */
    storageAccountName?: pulumi.Input<string>;
}

/**
 * Defines the policy properties for database backup.
 */
export interface DBBackupPolicyPropertiesArgs {
    /**
     * This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
     * Expected value is 'AzureWorkload'.
     */
    backupManagementType: pulumi.Input<"AzureWorkload">;
    /**
     * Fix the policy inconsistency
     */
    makePolicyConsistent?: pulumi.Input<boolean>;
    /**
     * The name of the DB backup policy.
     */
    name: pulumi.Input<string>;
    /**
     * Number of items associated with this policy.
     */
    protectedItemsCount?: pulumi.Input<number>;
    /**
     * ResourceGuard Operation Requests
     */
    resourceGuardOperationRequests?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Common settings for the backup management
     */
    settings?: pulumi.Input<SettingsArgs>;
    /**
     * List of sub-protection policies which includes schedule and retention
     */
    subProtectionPolicy?: pulumi.Input<pulumi.Input<SubProtectionPolicyArgs>[]>;
    /**
     * Type of workload for the backup management
     */
    workLoadType?: pulumi.Input<string | enums.WorkloadType>;
}

/**
 * Daily retention format.
 */
export interface DailyRetentionFormatArgs {
    /**
     * List of days of the month.
     */
    daysOfTheMonth?: pulumi.Input<pulumi.Input<DayArgs>[]>;
}

/**
 * Daily retention schedule.
 */
export interface DailyRetentionScheduleArgs {
    /**
     * Retention duration of retention Policy.
     */
    retentionDuration?: pulumi.Input<RetentionDurationArgs>;
    /**
     * Retention times of retention policy.
     */
    retentionTimes?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Daily schedule.
 */
export interface DailyScheduleArgs {
    /**
     * List of times of day this schedule has to be run.
     */
    scheduleRunTimes?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Gets or sets the database configuration.
 */
export interface DatabaseConfigurationArgs {
    /**
     * The database type.
     */
    databaseType?: pulumi.Input<string | enums.SAPDatabaseType>;
    /**
     * Gets or sets the disk configuration.
     */
    diskConfiguration?: pulumi.Input<DiskConfigurationArgs>;
    /**
     * The number of database VMs.
     */
    instanceCount: pulumi.Input<number>;
    /**
     * The subnet id.
     */
    subnetId: pulumi.Input<string>;
    /**
     * Gets or sets the virtual machine configuration.
     */
    virtualMachineConfiguration: pulumi.Input<VirtualMachineConfigurationArgs>;
}

/**
 * The full resource names object for database layer resources. The number of entries in this list should be equal to the number VMs to be created for database layer.
 */
export interface DatabaseServerFullResourceNamesArgs {
    /**
     * The full name for availability set. In case name is not provided, it will be defaulted to {SID}-DB-AvSet.
     */
    availabilitySetName?: pulumi.Input<string>;
    /**
     * The resource names object for load balancer and related resources.
     */
    loadBalancer?: pulumi.Input<LoadBalancerResourceNamesArgs>;
    /**
     * The list of virtual machine naming details.
     */
    virtualMachines?: pulumi.Input<pulumi.Input<VirtualMachineResourceNamesArgs>[]>;
}

/**
 * Day of the week.
 */
export interface DayArgs {
    /**
     * Date of the month
     */
    date?: pulumi.Input<number>;
    /**
     * Whether Date is last date of month
     */
    isLast?: pulumi.Input<boolean>;
}

/**
 * Gets or sets the DB2 provider properties.
 */
export interface Db2ProviderInstancePropertiesArgs {
    /**
     * Gets or sets the db2 database name.
     */
    dbName?: pulumi.Input<string>;
    /**
     * Gets or sets the db2 database password.
     */
    dbPassword?: pulumi.Input<string>;
    /**
     * Gets or sets the key vault URI to secret with the database password.
     */
    dbPasswordUri?: pulumi.Input<string>;
    /**
     * Gets or sets the db2 database sql port.
     */
    dbPort?: pulumi.Input<string>;
    /**
     * Gets or sets the db2 database user name.
     */
    dbUsername?: pulumi.Input<string>;
    /**
     * Gets or sets the target virtual machine name.
     */
    hostname?: pulumi.Input<string>;
    /**
     * The provider type. For example, the value can be SapHana.
     * Expected value is 'Db2'.
     */
    providerType: pulumi.Input<"Db2">;
    /**
     * Gets or sets the SAP System Identifier
     */
    sapSid?: pulumi.Input<string>;
    /**
     * Gets or sets the blob URI to SSL certificate for the DB2 Database.
     */
    sslCertificateUri?: pulumi.Input<string>;
    /**
     * Gets or sets certificate preference if secure communication is enabled.
     */
    sslPreference?: pulumi.Input<string | enums.SslPreference>;
}

/**
 * Defines the url and storage account ID where deployer VM packages are uploaded
 */
export interface DeployerVmPackagesArgs {
    /**
     * The deployer VM packages storage account id
     */
    storageAccountId?: pulumi.Input<string>;
    /**
     * The URL to the deployer VM packages file.
     */
    url?: pulumi.Input<string>;
}

/**
 * Deployment Configuration.
 */
export interface DeploymentConfigurationArgs {
    /**
     * The geo-location where the SAP system is to be created.
     */
    appLocation?: pulumi.Input<string>;
    /**
     * The configuration Type.
     * Expected value is 'Deployment'.
     */
    configurationType: pulumi.Input<"Deployment">;
    /**
     * The infrastructure configuration.
     */
    infrastructureConfiguration?: pulumi.Input<SingleServerConfigurationArgs | ThreeTierConfigurationArgs>;
    /**
     * The software configuration.
     */
    softwareConfiguration?: pulumi.Input<ExternalInstallationSoftwareConfigurationArgs | SAPInstallWithoutOSConfigSoftwareConfigurationArgs | ServiceInitiatedSoftwareConfigurationArgs>;
}

/**
 * Deployment along with OS Configuration.
 */
export interface DeploymentWithOSConfigurationArgs {
    /**
     * The geo-location where the SAP system is to be created.
     */
    appLocation?: pulumi.Input<string>;
    /**
     * The configuration Type.
     * Expected value is 'DeploymentWithOSConfig'.
     */
    configurationType: pulumi.Input<"DeploymentWithOSConfig">;
    /**
     * The infrastructure configuration.
     */
    infrastructureConfiguration?: pulumi.Input<SingleServerConfigurationArgs | ThreeTierConfigurationArgs>;
    /**
     * The OS and SAP configuration.
     */
    osSapConfiguration?: pulumi.Input<OsSapConfigurationArgs>;
    /**
     * The software configuration.
     */
    softwareConfiguration?: pulumi.Input<ExternalInstallationSoftwareConfigurationArgs | SAPInstallWithoutOSConfigSoftwareConfigurationArgs | ServiceInitiatedSoftwareConfigurationArgs>;
}

/**
 * Discovery Details.
 */
export interface DiscoveryConfigurationArgs {
    /**
     * The virtual machine ID of the Central Server.
     */
    centralServerVmId?: pulumi.Input<string>;
    /**
     * The configuration Type.
     * Expected value is 'Discovery'.
     */
    configurationType: pulumi.Input<"Discovery">;
    /**
     * The custom storage account name for the storage account created by the service in the managed resource group created as part of VIS deployment.<br><br>Refer to the storage account naming rules [here](https://learn.microsoft.com/azure/azure-resource-manager/management/resource-name-rules#microsoftstorage).<br><br>If not provided, the service will create the storage account with a random name.
     */
    managedRgStorageAccountName?: pulumi.Input<string>;
}

/**
 * The Disk Configuration Details.
 */
export interface DiskConfigurationArgs {
    /**
     * The disk configuration for the db volume. For HANA, Required volumes are: ['hana/data', 'hana/log', hana/shared', 'usr/sap', 'os'], Optional volume : ['backup'].
     */
    diskVolumeConfigurations?: pulumi.Input<{[key: string]: pulumi.Input<DiskVolumeConfigurationArgs>}>;
}

/**
 * Defines the disk exclusion properties for virtual machine backup.
 */
export interface DiskExclusionPropertiesArgs {
    /**
     * List of Disks' Logical Unit Numbers (LUN) to be used for VM Protection.
     */
    diskLunList: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Flag to indicate whether DiskLunList is to be included/ excluded from backup.
     */
    isInclusionList: pulumi.Input<boolean>;
}

/**
 * The type of disk sku. For example, Standard_LRS, Standard_ZRS, Premium_LRS, Premium_ZRS.
 */
export interface DiskSkuArgs {
    /**
     * Defines the disk sku name.
     */
    name?: pulumi.Input<string | enums.DiskSkuName>;
}

/**
 * The disk configuration required for the selected volume.
 */
export interface DiskVolumeConfigurationArgs {
    /**
     * The total number of disks required for the concerned volume.
     */
    count?: pulumi.Input<number>;
    /**
     * The disk size in GB.
     */
    sizeGB?: pulumi.Input<number>;
    /**
     * The disk SKU details.
     */
    sku?: pulumi.Input<DiskSkuArgs>;
}

/**
 * Existing recovery services vault.
 */
export interface ExistingRecoveryServicesVaultArgs {
    /**
     * The resource ID of the recovery services vault that has been created.
     */
    id: pulumi.Input<string>;
    /**
     * The vault type, whether it is existing or has to be created.
     * Expected value is 'Existing'.
     */
    vaultType: pulumi.Input<"Existing">;
}

/**
 * The extended location definition.
 */
export interface ExtendedLocationArgs {
    /**
     * The extended location name.
     */
    name: pulumi.Input<string>;
    /**
     * The extended location type.
     */
    type: pulumi.Input<string>;
}

/**
 * The SAP Software configuration Input when the software is installed externally outside the service.
 */
export interface ExternalInstallationSoftwareConfigurationArgs {
    /**
     * The resource ID of the virtual machine containing the central server instance.
     */
    centralServerVmId?: pulumi.Input<string>;
    /**
     * The SAP software installation Type.
     * Expected value is 'External'.
     */
    softwareInstallationType: pulumi.Input<"External">;
}

/**
 * Defines the HANA Backup data for a virtual instance for SAP.
 */
export interface HanaBackupDataArgs {
    /**
     * Defines the policy properties for database backup.
     */
    backupPolicy: pulumi.Input<DBBackupPolicyPropertiesArgs>;
    /**
     * The type of backup, VM, SQL or HANA.
     * Expected value is 'HANA'.
     */
    backupType: pulumi.Input<"HANA">;
    /**
     * Defines the policy properties for database backup.
     */
    dbInstanceSnapshotBackupPolicy?: pulumi.Input<DBBackupPolicyPropertiesArgs>;
    /**
     * Name of the HANA Database User Store Key.
     */
    hdbuserstoreKeyName: pulumi.Input<string>;
    /**
     * Gets or sets the database instance number.
     */
    instanceNumber?: pulumi.Input<string>;
    /**
     * The properties of the recovery services vault used for backup.
     */
    recoveryServicesVault: pulumi.Input<ExistingRecoveryServicesVaultArgs | NewRecoveryServicesVaultArgs>;
    /**
     * Path of the SSL key store.
     */
    sslConfiguration?: pulumi.Input<SSLConfigurationArgs>;
}

/**
 * Gets or sets the provider properties.
 */
export interface HanaDbProviderInstancePropertiesArgs {
    /**
     * Gets or sets the hana database name.
     */
    dbName?: pulumi.Input<string>;
    /**
     * Gets or sets the database password.
     */
    dbPassword?: pulumi.Input<string>;
    /**
     * Gets or sets the key vault URI to secret with the database password.
     */
    dbPasswordUri?: pulumi.Input<string>;
    /**
     * Gets or sets the database user name.
     */
    dbUsername?: pulumi.Input<string>;
    /**
     * Gets or sets the target virtual machine size.
     */
    hostname?: pulumi.Input<string>;
    /**
     * Gets or sets the database instance number.
     */
    instanceNumber?: pulumi.Input<string>;
    /**
     * The provider type. For example, the value can be SapHana.
     * Expected value is 'SapHana'.
     */
    providerType: pulumi.Input<"SapHana">;
    /**
     * Gets or sets the SAP System Identifier.
     */
    sapSid?: pulumi.Input<string>;
    /**
     * Gets or sets the database sql port.
     */
    sqlPort?: pulumi.Input<string>;
    /**
     * Gets or sets the blob URI to SSL certificate for the DB.
     */
    sslCertificateUri?: pulumi.Input<string>;
    /**
     * Gets or sets the hostname(s) in the SSL certificate.
     */
    sslHostNameInCertificate?: pulumi.Input<string>;
    /**
     * Gets or sets certificate preference if secure communication is enabled.
     */
    sslPreference?: pulumi.Input<string | enums.SslPreference>;
}

/**
 * Gets or sets the high availability configuration.
 */
export interface HighAvailabilityConfigurationArgs {
    /**
     * The high availability type.
     */
    highAvailabilityType: pulumi.Input<string | enums.SAPHighAvailabilityType>;
}

/**
 * Gets or sets the HA software configuration.
 */
export interface HighAvailabilitySoftwareConfigurationArgs {
    /**
     * The fencing client id.
     */
    fencingClientId: pulumi.Input<string>;
    /**
     * The fencing client id secret/password. The secret should never expire. This will be used pacemaker to start/stop the cluster VMs.
     */
    fencingClientPassword: pulumi.Input<string>;
}

/**
 * Hourly schedule.
 */
export interface HourlyScheduleArgs {
    /**
     * Interval at which backup needs to be triggered. For hourly the value
     *  can be 4/6/8/12
     */
    interval?: pulumi.Input<number>;
    /**
     * To specify duration of the backup window
     */
    scheduleWindowDuration?: pulumi.Input<number>;
    /**
     * To specify start time of the backup window
     */
    scheduleWindowStartTime?: pulumi.Input<string>;
}

/**
 * Specifies information about the image to use. You can specify information about platform images, marketplace images, or virtual machine images. This element is required when you want to use a platform image, marketplace image, or virtual machine image, but is not used in other creation operations. NOTE: Image reference publisher and offer can only be set when you create the scale set.
 */
export interface ImageReferenceArgs {
    /**
     * Specifies the ARM resource ID of the Azure Compute Gallery image version used for creating ACSS VMs. You will need to provide this input when you choose to deploy virtual machines in ACSS with OS image from the Azure Compute gallery.
     */
    id?: pulumi.Input<string>;
    /**
     * Specifies the offer of the platform image or marketplace image used to create the virtual machine.
     */
    offer?: pulumi.Input<string>;
    /**
     * The image publisher.
     */
    publisher?: pulumi.Input<string>;
    /**
     * The image SKU.
     */
    sku?: pulumi.Input<string>;
    /**
     * Specifies the version of the platform image or marketplace image used to create the virtual machine. The allowed formats are Major.Minor.Build or 'latest'. Major, Minor, and Build are decimal numbers. Specify 'latest' to use the latest version of an image available at deploy time. Even if you use 'latest', the VM image will not automatically update after deploy time even if a new version becomes available.
     */
    version?: pulumi.Input<string>;
}

/**
 * Instant recovery point additional details.
 */
export interface InstantRPAdditionalDetailsArgs {
    /**
     * Azure backup resource group name prefix.
     */
    azureBackupRGNamePrefix?: pulumi.Input<string>;
    /**
     * Azure backup resource group name suffix.
     */
    azureBackupRGNameSuffix?: pulumi.Input<string>;
}

/**
 * Specifies the Linux operating system settings on the virtual machine. For a list of supported Linux distributions, see [Linux on Azure-Endorsed Distributions](https://learn.microsoft.com/azure/virtual-machines/linux/endorsed-distros).
 */
export interface LinuxConfigurationArgs {
    /**
     * Specifies whether password authentication should be disabled.
     */
    disablePasswordAuthentication?: pulumi.Input<boolean>;
    /**
     * The OS Type
     * Expected value is 'Linux'.
     */
    osType: pulumi.Input<"Linux">;
    /**
     * Specifies the ssh key configuration for a Linux OS. (This property is deprecated, please use 'sshKeyPair' instead)
     */
    ssh?: pulumi.Input<SshConfigurationArgs>;
    /**
     * The SSH Key-pair used to authenticate with the VM's.
     */
    sshKeyPair?: pulumi.Input<SshKeyPairArgs>;
}

/**
 * The resource names object for load balancer and related resources.
 */
export interface LoadBalancerResourceNamesArgs {
    /**
     * The list of backend pool names. Currently, ACSS deploys only one backend pool and hence, size of this list should be 1
     */
    backendPoolNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The list of frontend IP configuration names. If provided as input, size of this list should be 2 for cs layer and should be 1 for database layer.
     */
    frontendIpConfigurationNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The list of health probe names. If provided as input, size of this list should be 2 for cs layer and should be 1 for database layer.
     */
    healthProbeNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The full resource name for load balancer. If this value is not provided, load balancer will be name as {ASCS/DB}-loadBalancer.
     */
    loadBalancerName?: pulumi.Input<string>;
}

/**
 * Log policy schedule.
 */
export interface LogSchedulePolicyArgs {
    /**
     * Frequency of the log schedule operation of this policy in minutes.
     */
    scheduleFrequencyInMins?: pulumi.Input<number>;
    /**
     * This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
     * Expected value is 'LogSchedulePolicy'.
     */
    schedulePolicyType: pulumi.Input<"LogSchedulePolicy">;
}

/**
 * Long term retention policy.
 */
export interface LongTermRetentionPolicyArgs {
    /**
     * Daily retention schedule of the protection policy.
     */
    dailySchedule?: pulumi.Input<DailyRetentionScheduleArgs>;
    /**
     * Monthly retention schedule of the protection policy.
     */
    monthlySchedule?: pulumi.Input<MonthlyRetentionScheduleArgs>;
    /**
     * This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
     * Expected value is 'LongTermRetentionPolicy'.
     */
    retentionPolicyType: pulumi.Input<"LongTermRetentionPolicy">;
    /**
     * Weekly retention schedule of the protection policy.
     */
    weeklySchedule?: pulumi.Input<WeeklyRetentionScheduleArgs>;
    /**
     * Yearly retention schedule of the protection policy.
     */
    yearlySchedule?: pulumi.Input<YearlyRetentionScheduleArgs>;
}

/**
 * Long term policy schedule.
 */
export interface LongTermSchedulePolicyArgs {
    /**
     * This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
     * Expected value is 'LongTermSchedulePolicy'.
     */
    schedulePolicyType: pulumi.Input<"LongTermSchedulePolicy">;
}

/**
 * Managed resource group configuration
 */
export interface ManagedRGConfigurationArgs {
    /**
     * Managed resource group name
     */
    name?: pulumi.Input<string>;
}

/**
 * Managed resource group configuration
 */
export interface ManagedResourceGroupConfigurationArgs {
    /**
     * Managed resource group name
     */
    name?: pulumi.Input<string>;
}

/**
 * Managed service identity (system assigned and/or user assigned identities)
 */
export interface ManagedServiceIdentityArgs {
    /**
     * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
     */
    type: pulumi.Input<string | enums.ManagedServiceIdentityType>;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Monthly retention schedule.
 */
export interface MonthlyRetentionScheduleArgs {
    /**
     * Retention duration of retention Policy.
     */
    retentionDuration?: pulumi.Input<RetentionDurationArgs>;
    /**
     * Daily retention format for monthly retention policy.
     */
    retentionScheduleDaily?: pulumi.Input<DailyRetentionFormatArgs>;
    /**
     * Retention schedule format type for monthly retention policy.
     */
    retentionScheduleFormatType?: pulumi.Input<string | enums.RetentionScheduleFormat>;
    /**
     * Weekly retention format for monthly retention policy.
     */
    retentionScheduleWeekly?: pulumi.Input<WeeklyRetentionFormatArgs>;
    /**
     * Retention times of retention policy.
     */
    retentionTimes?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Gets or sets the file share configuration where the transport directory fileshare already exists, and user wishes to mount the fileshare as a part of the create infra flow.
 */
export interface MountFileShareConfigurationArgs {
    /**
     * The type of file share config.
     * Expected value is 'Mount'.
     */
    configurationType: pulumi.Input<"Mount">;
    /**
     * The fileshare resource ID
     */
    id: pulumi.Input<string>;
    /**
     * The private endpoint resource ID
     */
    privateEndpointId: pulumi.Input<string>;
}

/**
 * Gets or sets the SQL server provider properties.
 */
export interface MsSqlServerProviderInstancePropertiesArgs {
    /**
     * Gets or sets the database password.
     */
    dbPassword?: pulumi.Input<string>;
    /**
     * Gets or sets the key vault URI to secret with the database password.
     */
    dbPasswordUri?: pulumi.Input<string>;
    /**
     * Gets or sets the database sql port.
     */
    dbPort?: pulumi.Input<string>;
    /**
     * Gets or sets the database user name.
     */
    dbUsername?: pulumi.Input<string>;
    /**
     * Gets or sets the SQL server host name.
     */
    hostname?: pulumi.Input<string>;
    /**
     * The provider type. For example, the value can be SapHana.
     * Expected value is 'MsSqlServer'.
     */
    providerType: pulumi.Input<"MsSqlServer">;
    /**
     * Gets or sets the SAP System Identifier
     */
    sapSid?: pulumi.Input<string>;
    /**
     * Gets or sets the blob URI to SSL certificate for the SQL Database.
     */
    sslCertificateUri?: pulumi.Input<string>;
    /**
     * Gets or sets certificate preference if secure communication is enabled.
     */
    sslPreference?: pulumi.Input<string | enums.SslPreference>;
}

/**
 * Defines the network configuration type for SAP system infrastructure that is being deployed
 */
export interface NetworkConfigurationArgs {
    /**
     * Specifies whether a secondary IP address should be added to the network interface on all VMs of the SAP system being deployed
     */
    isSecondaryIpEnabled?: pulumi.Input<boolean>;
}
/**
 * networkConfigurationArgsProvideDefaults sets the appropriate defaults for NetworkConfigurationArgs
 */
export function networkConfigurationArgsProvideDefaults(val: NetworkConfigurationArgs): NetworkConfigurationArgs {
    return {
        ...val,
        isSecondaryIpEnabled: (val.isSecondaryIpEnabled) ?? false,
    };
}

/**
 * The resource names object for network interface and related resources.
 */
export interface NetworkInterfaceResourceNamesArgs {
    /**
     * The full name for network interface. If name is not provided, service uses a default name based on the deployment type. For SingleServer, default name is {SID}-Nic. In case of HA-AvZone systems, default name will be {SID}-{App/ASCS/DB}-Zone{A/B}-Nic with an incrementor at the end in case of more than 1 instance per layer. For distributed and HA-AvSet systems, default name will be {SID}-{App/ASCS/DB}-Nic with an incrementor at the end in case of more than 1 instance per layer.
     */
    networkInterfaceName?: pulumi.Input<string>;
}

/**
 * New recovery services vault.
 */
export interface NewRecoveryServicesVaultArgs {
    /**
     * The name of the recovery services vault has to be created.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group where the recovery services vault has to be created.
     */
    resourceGroup: pulumi.Input<string>;
    /**
     * The vault type, whether it is existing or has to be created.
     * Expected value is 'New'.
     */
    vaultType: pulumi.Input<"New">;
}

/**
 * Specifies the operating system settings for the virtual machine. Some of the settings cannot be changed once VM is provisioned.
 */
export interface OSProfileArgs {
    /**
     * Specifies the password of the administrator account. <br><br> **Minimum-length (Windows):** 8 characters <br><br> **Minimum-length (Linux):** 6 characters <br><br> **Max-length (Windows):** 123 characters <br><br> **Max-length (Linux):** 72 characters <br><br> **Complexity requirements:** 3 out of 4 conditions below need to be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a digit <br> Has a special character (Regex match [\W_]) <br><br> **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123", "Pa$$word", "pass@word1", "Password!", "Password1", "Password22", "iloveyou!" <br><br> For resetting the password, see [How to reset the Remote Desktop service or its login password in a Windows VM](https://learn.microsoft.com/troubleshoot/azure/virtual-machines/reset-rdp) <br><br> For resetting root password, see [Manage users, SSH, and check or repair disks on Azure Linux VMs using the VMAccess Extension](https://learn.microsoft.com/troubleshoot/azure/virtual-machines/troubleshoot-ssh-connection)
     */
    adminPassword?: pulumi.Input<string>;
    /**
     * Specifies the name of the administrator account. <br><br> This property cannot be updated after the VM is created. <br><br> **Windows-only restriction:** Cannot end in "." <br><br> **Disallowed values:** "administrator", "admin", "user", "user1", "test", "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm", "admin2", "aspnet", "backup", "console", "david", "guest", "john", "owner", "root", "server", "sql", "support", "support_388945a0", "sys", "test2", "test3", "user4", "user5". <br><br> **Minimum-length (Linux):** 1  character <br><br> **Max-length (Linux):** 64 characters <br><br> **Max-length (Windows):** 20 characters.
     */
    adminUsername?: pulumi.Input<string>;
    /**
     * Specifies Windows operating system settings on the virtual machine.
     */
    osConfiguration?: pulumi.Input<LinuxConfigurationArgs | WindowsConfigurationArgs>;
}

/**
 * Gets or sets the Oracle provider properties.
 */
export interface OracleProviderInstancePropertiesArgs {
    /**
     * Gets or sets the oracle database name.
     */
    dbName?: pulumi.Input<string>;
    /**
     * Gets or sets the oracle database password.
     */
    dbPassword?: pulumi.Input<string>;
    /**
     * Gets or sets the key vault URI to secret with the database password.
     */
    dbPasswordUri?: pulumi.Input<string>;
    /**
     * Gets or sets the oracle database sql port.
     */
    dbPort?: pulumi.Input<string>;
    /**
     * Gets or sets the oracle database user name.
     */
    dbUsername?: pulumi.Input<string>;
    /**
     * Gets or sets the target virtual machine name.
     */
    hostname?: pulumi.Input<string>;
    /**
     * The provider type. For example, the value can be SapHana.
     * Expected value is 'Oracle'.
     */
    providerType: pulumi.Input<"Oracle">;
    /**
     * Gets or sets the SAP System Identifier
     */
    sapSid?: pulumi.Input<string>;
    /**
     * Gets or sets the blob URI to SSL certificate for the Oracle Database.
     */
    sslCertificateUri?: pulumi.Input<string>;
    /**
     * Gets or sets certificate preference if secure communication is enabled.
     */
    sslPreference?: pulumi.Input<string | enums.SslPreference>;
}

/**
 * Defines the OS and SAP Configurations for Deployment
 */
export interface OsSapConfigurationArgs {
    /**
     * The url and storage account ID where deployer VM packages are uploaded
     */
    deployerVmPackages?: pulumi.Input<DeployerVmPackagesArgs>;
    /**
     * The FQDN to set for the SAP system
     */
    sapFqdn?: pulumi.Input<string>;
}

/**
 * Gets or sets the PrometheusHaCluster provider properties.
 */
export interface PrometheusHaClusterProviderInstancePropertiesArgs {
    /**
     * Gets or sets the clusterName.
     */
    clusterName?: pulumi.Input<string>;
    /**
     * Gets or sets the target machine name.
     */
    hostname?: pulumi.Input<string>;
    /**
     * URL of the Node Exporter endpoint.
     */
    prometheusUrl?: pulumi.Input<string>;
    /**
     * The provider type. For example, the value can be SapHana.
     * Expected value is 'PrometheusHaCluster'.
     */
    providerType: pulumi.Input<"PrometheusHaCluster">;
    /**
     * Gets or sets the cluster sid.
     */
    sid?: pulumi.Input<string>;
    /**
     * Gets or sets the blob URI to SSL certificate for the HA cluster exporter.
     */
    sslCertificateUri?: pulumi.Input<string>;
    /**
     * Gets or sets certificate preference if secure communication is enabled.
     */
    sslPreference?: pulumi.Input<string | enums.SslPreference>;
}

/**
 * Gets or sets the PrometheusOS provider properties.
 */
export interface PrometheusOsProviderInstancePropertiesArgs {
    /**
     * URL of the Node Exporter endpoint
     */
    prometheusUrl?: pulumi.Input<string>;
    /**
     * The provider type. For example, the value can be SapHana.
     * Expected value is 'PrometheusOS'.
     */
    providerType: pulumi.Input<"PrometheusOS">;
    /**
     * Gets or sets the SAP System Identifier
     */
    sapSid?: pulumi.Input<string>;
    /**
     * Gets or sets the blob URI to SSL certificate for the prometheus node exporter.
     */
    sslCertificateUri?: pulumi.Input<string>;
    /**
     * Gets or sets certificate preference if secure communication is enabled.
     */
    sslPreference?: pulumi.Input<string | enums.SslPreference>;
}

/**
 * Retention duration.
 */
export interface RetentionDurationArgs {
    /**
     * Count of duration types. Retention duration is obtained by the counting the duration type Count times.
     * For example, when Count = 3 and DurationType = Weeks, retention duration will be three weeks.
     */
    count?: pulumi.Input<number>;
    /**
     * Retention duration type of retention policy.
     */
    durationType?: pulumi.Input<string | enums.RetentionDurationType>;
}

/**
 * The SAP Software configuration Input when the software is to be installed by service without OS Configurations
 */
export interface SAPInstallWithoutOSConfigSoftwareConfigurationArgs {
    /**
     * The URL to the SAP Build of Materials(BOM) file.
     */
    bomUrl: pulumi.Input<string>;
    /**
     * Gets or sets the HA software configuration.
     */
    highAvailabilitySoftwareConfiguration?: pulumi.Input<HighAvailabilitySoftwareConfigurationArgs>;
    /**
     * The SAP bits storage account id.
     */
    sapBitsStorageAccountId: pulumi.Input<string>;
    /**
     * The SAP software installation Type.
     * Expected value is 'SAPInstallWithoutOSConfig'.
     */
    softwareInstallationType: pulumi.Input<"SAPInstallWithoutOSConfig">;
    /**
     * The software version to install.
     */
    softwareVersion: pulumi.Input<string>;
}

/**
 * Managed service identity (user assigned identities)
 */
export interface SAPVirtualInstanceIdentityArgs {
    /**
     * The type of managed identity assigned to this resource.
     */
    type: pulumi.Input<string | enums.SAPVirtualInstanceIdentityType>;
    /**
     * The identities assigned to this resource by the user.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Specify the HANA database TLS/SSL properties which will be used for enabling Azure Backup for this database. You need to specify these details if you have enabled secure communication for your HANA database.
 */
export interface SSLConfigurationArgs {
    /**
     * Specify the crypto provider being used (commoncrypto/openssl). If this argument is not provided, it is automatically determined by searching in the configuration files.
     */
    sslCryptoProvider?: pulumi.Input<string | enums.SslCryptoProvider>;
    /**
     * Specify the hostname as mentioned in the SSL certificate. If this argument is not provided, it is automatically determined by searching in the SSL certificate.
     */
    sslHostNameInCertificate?: pulumi.Input<string>;
    /**
     * Specify the name of the keystore file that contains the client's identity (eg. sapsrv.pse). The script will search for the file in the appropriate directory depending on the crypto provider mentioned. If this argument is not provided, it is automatically determined by searching in the configuration files.
     */
    sslKeyStore?: pulumi.Input<string>;
    /**
     * Specify the name of the trust store file that contains the server’s public certificates (eg. sapsrv.pse). The script will search for the file in the appropriate directory depending on the crypto provider mentioned. If this argument is not provided, it is automatically determined by searching in the configuration files.
     */
    sslTrustStore?: pulumi.Input<string>;
}

/**
 * Gets or sets the Threshold Values for Top Metrics Health.
 */
export interface SapLandscapeMonitorMetricThresholdsArgs {
    /**
     * Gets or sets the threshold value for Green.
     */
    green?: pulumi.Input<number>;
    /**
     * Gets or sets the name of the threshold.
     */
    name?: pulumi.Input<string>;
    /**
     * Gets or sets the threshold value for Red.
     */
    red?: pulumi.Input<number>;
    /**
     * Gets or sets the threshold value for Yellow.
     */
    yellow?: pulumi.Input<number>;
}

/**
 * Gets or sets the SID groupings by landscape and Environment.
 */
export interface SapLandscapeMonitorPropertiesGroupingArgs {
    /**
     * Gets or sets the list of landscape to SID mappings.
     */
    landscape?: pulumi.Input<pulumi.Input<SapLandscapeMonitorSidMappingArgs>[]>;
    /**
     * Gets or sets the list of Sap Applications to SID mappings.
     */
    sapApplication?: pulumi.Input<pulumi.Input<SapLandscapeMonitorSidMappingArgs>[]>;
}

/**
 * Gets or sets the mapping for SID to Environment/Applications.
 */
export interface SapLandscapeMonitorSidMappingArgs {
    /**
     * Gets or sets the name of the grouping.
     */
    name?: pulumi.Input<string>;
    /**
     * Gets or sets the list of SID's.
     */
    topSid?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Gets or sets the provider properties.
 */
export interface SapNetWeaverProviderInstancePropertiesArgs {
    /**
     * The provider type. For example, the value can be SapHana.
     * Expected value is 'SapNetWeaver'.
     */
    providerType: pulumi.Input<"SapNetWeaver">;
    /**
     * Gets or sets the SAP Client ID.
     */
    sapClientId?: pulumi.Input<string>;
    /**
     * Gets or sets the list of HostFile Entries
     */
    sapHostFileEntries?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Gets or sets the target virtual machine IP Address/FQDN.
     */
    sapHostname?: pulumi.Input<string>;
    /**
     * Gets or sets the instance number of SAP NetWeaver.
     */
    sapInstanceNr?: pulumi.Input<string>;
    /**
     * Sets the SAP password.
     */
    sapPassword?: pulumi.Input<string>;
    /**
     * Gets or sets the key vault URI to secret with the SAP password.
     */
    sapPasswordUri?: pulumi.Input<string>;
    /**
     * Gets or sets the SAP HTTP port number.
     */
    sapPortNumber?: pulumi.Input<string>;
    /**
     * Gets or sets the SAP System Identifier
     */
    sapSid?: pulumi.Input<string>;
    /**
     * Gets or sets the SAP user name.
     */
    sapUsername?: pulumi.Input<string>;
    /**
     * Gets or sets the blob URI to SSL certificate for the SAP system.
     */
    sslCertificateUri?: pulumi.Input<string>;
    /**
     * Gets or sets certificate preference if secure communication is enabled.
     */
    sslPreference?: pulumi.Input<string | enums.SslPreference>;
}

/**
 * The SAP Software configuration Input when the software is to be installed by service.
 */
export interface ServiceInitiatedSoftwareConfigurationArgs {
    /**
     * The URL to the SAP Build of Materials(BOM) file.
     */
    bomUrl: pulumi.Input<string>;
    /**
     * Gets or sets the HA software configuration.
     */
    highAvailabilitySoftwareConfiguration?: pulumi.Input<HighAvailabilitySoftwareConfigurationArgs>;
    /**
     * The SAP bits storage account id.
     */
    sapBitsStorageAccountId: pulumi.Input<string>;
    /**
     * The FQDN to set for the SAP system during install.
     */
    sapFqdn: pulumi.Input<string>;
    /**
     * The SAP software installation Type.
     * Expected value is 'ServiceInitiated'.
     */
    softwareInstallationType: pulumi.Input<"ServiceInitiated">;
    /**
     * The software version to install.
     */
    softwareVersion: pulumi.Input<string>;
    /**
     * The SSH private key.
     */
    sshPrivateKey: pulumi.Input<string>;
}

/**
 * Common settings field for backup management
 */
export interface SettingsArgs {
    /**
     * Workload compression flag. This has been added so that 'isSqlCompression'
     * will be deprecated once clients upgrade to consider this flag.
     */
    isCompression?: pulumi.Input<boolean>;
    /**
     * SQL compression flag
     */
    issqlcompression?: pulumi.Input<boolean>;
    /**
     * TimeZone optional input as string. For example: TimeZone = "Pacific Standard Time".
     */
    timeZone?: pulumi.Input<string>;
}

/**
 * The resource names object for shared storage.
 */
export interface SharedStorageResourceNamesArgs {
    /**
     * The full name of the shared storage account. If it is not provided, it will be defaulted to {SID}nfs{guid of 15 chars}.
     */
    sharedStorageAccountName?: pulumi.Input<string>;
    /**
     * The full name of private end point for the shared storage account. If it is not provided, it will be defaulted to {storageAccountName}_pe
     */
    sharedStorageAccountPrivateEndPointName?: pulumi.Input<string>;
}

/**
 * Simple policy retention.
 */
export interface SimpleRetentionPolicyArgs {
    /**
     * Retention duration of the protection policy.
     */
    retentionDuration?: pulumi.Input<RetentionDurationArgs>;
    /**
     * This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
     * Expected value is 'SimpleRetentionPolicy'.
     */
    retentionPolicyType: pulumi.Input<"SimpleRetentionPolicy">;
}

/**
 * Simple policy schedule.
 */
export interface SimpleSchedulePolicyArgs {
    /**
     * Hourly Schedule of this Policy
     */
    hourlySchedule?: pulumi.Input<HourlyScheduleArgs>;
    /**
     * This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
     * Expected value is 'SimpleSchedulePolicy'.
     */
    schedulePolicyType: pulumi.Input<"SimpleSchedulePolicy">;
    /**
     * List of days of week this schedule has to be run.
     */
    scheduleRunDays?: pulumi.Input<pulumi.Input<enums.DayOfWeek>[]>;
    /**
     * Frequency of the schedule operation of this policy.
     */
    scheduleRunFrequency?: pulumi.Input<string | enums.ScheduleRunType>;
    /**
     * List of times of day this schedule has to be run.
     */
    scheduleRunTimes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * At every number weeks this schedule has to be run.
     */
    scheduleWeeklyFrequency?: pulumi.Input<number>;
}

/**
 * The V2 policy schedule for IaaS that supports hourly backups.
 */
export interface SimpleSchedulePolicyV2Args {
    /**
     * Daily schedule of this policy
     */
    dailySchedule?: pulumi.Input<DailyScheduleArgs>;
    /**
     * hourly schedule of this policy
     */
    hourlySchedule?: pulumi.Input<HourlyScheduleArgs>;
    /**
     * This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
     * Expected value is 'SimpleSchedulePolicyV2'.
     */
    schedulePolicyType: pulumi.Input<"SimpleSchedulePolicyV2">;
    /**
     * Frequency of the schedule operation of this policy.
     */
    scheduleRunFrequency?: pulumi.Input<string | enums.ScheduleRunType>;
    /**
     * Weekly schedule of this policy
     */
    weeklySchedule?: pulumi.Input<WeeklyScheduleArgs>;
}

/**
 * Gets or sets the single server configuration. For prerequisites for creating the infrastructure, please see [here](https://go.microsoft.com/fwlink/?linkid=2212611&amp;clcid=0x409)
 */
export interface SingleServerConfigurationArgs {
    /**
     * The application resource group where SAP system resources will be deployed.
     */
    appResourceGroup: pulumi.Input<string>;
    /**
     * The set of custom names to be used for underlying azure resources that are part of the SAP system.
     */
    customResourceNames?: pulumi.Input<SingleServerFullResourceNamesArgs>;
    /**
     * The database type.
     */
    databaseType?: pulumi.Input<string | enums.SAPDatabaseType>;
    /**
     * Gets or sets the disk configuration.
     */
    dbDiskConfiguration?: pulumi.Input<DiskConfigurationArgs>;
    /**
     * The type of SAP deployment, single server or Three tier.
     * Expected value is 'SingleServer'.
     */
    deploymentType: pulumi.Input<"SingleServer">;
    /**
     * Network configuration for the server
     */
    networkConfiguration?: pulumi.Input<NetworkConfigurationArgs>;
    /**
     * The subnet id.
     */
    subnetId: pulumi.Input<string>;
    /**
     * Gets or sets the virtual machine configuration.
     */
    virtualMachineConfiguration: pulumi.Input<VirtualMachineConfigurationArgs>;
}
/**
 * singleServerConfigurationArgsProvideDefaults sets the appropriate defaults for SingleServerConfigurationArgs
 */
export function singleServerConfigurationArgsProvideDefaults(val: SingleServerConfigurationArgs): SingleServerConfigurationArgs {
    return {
        ...val,
        networkConfiguration: (val.networkConfiguration ? pulumi.output(val.networkConfiguration).apply(networkConfigurationArgsProvideDefaults) : undefined),
    };
}

/**
 * The resource name object where the specified values will be full resource names of the corresponding resources in a single server SAP system.
 */
export interface SingleServerFullResourceNamesArgs {
    /**
     * The pattern type to be used for resource naming.
     * Expected value is 'FullResourceName'.
     */
    namingPatternType: pulumi.Input<"FullResourceName">;
    /**
     * The resource names object for virtual machine and related resources.
     */
    virtualMachine?: pulumi.Input<VirtualMachineResourceNamesArgs>;
}

/**
 * Gets or sets the file share configuration for scenarios where transport directory fileshare is not created or required.
 */
export interface SkipFileShareConfigurationArgs {
    /**
     * The type of file share config.
     * Expected value is 'Skip'.
     */
    configurationType: pulumi.Input<"Skip">;
}

/**
 * Snapshot Backup related fields for WorkloadType SAP Hana system
 */
export interface SnapshotBackupAdditionalDetailsArgs {
    /**
     * Instant RP details for the snapshot.
     */
    instantRPDetails?: pulumi.Input<string>;
    /**
     * Retention range for instant Rp in days.
     */
    instantRpRetentionRangeInDays?: pulumi.Input<number>;
    /**
     * User Assigned managed identity details used for snapshot policy.
     */
    userAssignedManagedIdentityDetails?: pulumi.Input<UserAssignedManagedIdentityDetailsArgs>;
}

/**
 * Defines the SQL Backup data for a virtual instance for SAP.
 */
export interface SqlBackupDataArgs {
    /**
     * Defines the policy properties for database backup.
     */
    backupPolicy: pulumi.Input<DBBackupPolicyPropertiesArgs>;
    /**
     * The type of backup, VM, SQL or HANA.
     * Expected value is 'SQL'.
     */
    backupType: pulumi.Input<"SQL">;
    /**
     * The properties of the recovery services vault used for backup.
     */
    recoveryServicesVault: pulumi.Input<ExistingRecoveryServicesVaultArgs | NewRecoveryServicesVaultArgs>;
}

/**
 * SSH configuration for Linux based VMs running on Azure
 */
export interface SshConfigurationArgs {
    /**
     * The list of SSH public keys used to authenticate with linux based VMs.
     */
    publicKeys?: pulumi.Input<pulumi.Input<SshPublicKeyArgs>[]>;
}

/**
 * The SSH Key-pair used to authenticate with the VM. The key needs to be at least 2048-bit and in ssh-rsa format. For creating ssh keys, see [Create SSH keys on Linux and Mac for Linux VMs in Azure](https://learn.microsoft.com/azure/virtual-machines/linux/create-ssh-keys-detailed).
 */
export interface SshKeyPairArgs {
    /**
     * SSH private key.
     */
    privateKey?: pulumi.Input<string>;
    /**
     * SSH public key
     */
    publicKey?: pulumi.Input<string>;
}

/**
 * Contains information about SSH certificate public key and the path on the Linux VM where the public key is placed.
 */
export interface SshPublicKeyArgs {
    /**
     * SSH public key certificate used to authenticate with the VM through ssh. The key needs to be at least 2048-bit and in ssh-rsa format. <br><br> For creating ssh keys, see [Create SSH keys on Linux and Mac for Linux VMs in Azure](https://learn.microsoft.com/azure/virtual-machines/linux/create-ssh-keys-detailed).
     */
    keyData?: pulumi.Input<string>;
}

/**
 * Gets or sets the storage configuration.
 */
export interface StorageConfigurationArgs {
    /**
     * The properties of the transport directory attached to the VIS. The default for transportFileShareConfiguration is the createAndMount flow if storage configuration is missing.
     */
    transportFileShareConfiguration?: pulumi.Input<CreateAndMountFileShareConfigurationArgs | MountFileShareConfigurationArgs | SkipFileShareConfigurationArgs>;
}

/**
 * Sub-protection policy which includes schedule and retention
 */
export interface SubProtectionPolicyArgs {
    /**
     * Type of backup policy type
     */
    policyType?: pulumi.Input<string | enums.PolicyType>;
    /**
     * Retention policy with the details on backup copy retention ranges.
     */
    retentionPolicy?: pulumi.Input<LongTermRetentionPolicyArgs | SimpleRetentionPolicyArgs>;
    /**
     * Backup schedule specified as part of backup policy.
     */
    schedulePolicy?: pulumi.Input<LogSchedulePolicyArgs | LongTermSchedulePolicyArgs | SimpleSchedulePolicyArgs | SimpleSchedulePolicyV2Args>;
    /**
     * Hana DB instance snapshot backup additional details.
     */
    snapshotBackupAdditionalDetails?: pulumi.Input<SnapshotBackupAdditionalDetailsArgs>;
    /**
     * Tiering policy to automatically move RPs to another tier.
     * Key is Target Tier, defined in RecoveryPointTierType enum.
     * Tiering policy specifies the criteria to move RP to the target tier.
     */
    tieringPolicy?: pulumi.Input<{[key: string]: pulumi.Input<TieringPolicyArgs>}>;
}

/**
 * Gets or sets the three tier SAP configuration. For prerequisites for creating the infrastructure, please see [here](https://go.microsoft.com/fwlink/?linkid=2212611&amp;clcid=0x409)
 */
export interface ThreeTierConfigurationArgs {
    /**
     * The application resource group where SAP system resources will be deployed.
     */
    appResourceGroup: pulumi.Input<string>;
    /**
     * The application server configuration.
     */
    applicationServer: pulumi.Input<ApplicationServerConfigurationArgs>;
    /**
     * The central server configuration.
     */
    centralServer: pulumi.Input<CentralServerConfigurationArgs>;
    /**
     * The set of custom names to be used for underlying azure resources that are part of the SAP system.
     */
    customResourceNames?: pulumi.Input<ThreeTierFullResourceNamesArgs>;
    /**
     * The database configuration.
     */
    databaseServer: pulumi.Input<DatabaseConfigurationArgs>;
    /**
     * The type of SAP deployment, single server or Three tier.
     * Expected value is 'ThreeTier'.
     */
    deploymentType: pulumi.Input<"ThreeTier">;
    /**
     * The high availability configuration.
     */
    highAvailabilityConfig?: pulumi.Input<HighAvailabilityConfigurationArgs>;
    /**
     * Network configuration common to all servers
     */
    networkConfiguration?: pulumi.Input<NetworkConfigurationArgs>;
    /**
     * The storage configuration.
     */
    storageConfiguration?: pulumi.Input<StorageConfigurationArgs>;
}
/**
 * threeTierConfigurationArgsProvideDefaults sets the appropriate defaults for ThreeTierConfigurationArgs
 */
export function threeTierConfigurationArgsProvideDefaults(val: ThreeTierConfigurationArgs): ThreeTierConfigurationArgs {
    return {
        ...val,
        networkConfiguration: (val.networkConfiguration ? pulumi.output(val.networkConfiguration).apply(networkConfigurationArgsProvideDefaults) : undefined),
    };
}

/**
 * The resource name object where the specified values will be full resource names of the corresponding resources in a three tier SAP system.
 */
export interface ThreeTierFullResourceNamesArgs {
    /**
     * The full resource names object for application layer resources. The number of entries in this list should be equal to the number VMs to be created for application layer.
     */
    applicationServer?: pulumi.Input<ApplicationServerFullResourceNamesArgs>;
    /**
     * The full resource names object for central server layer resources.
     */
    centralServer?: pulumi.Input<CentralServerFullResourceNamesArgs>;
    /**
     * The full resource names object for database layer resources. The number of entries in this list should be equal to the number VMs to be created for database layer.
     */
    databaseServer?: pulumi.Input<DatabaseServerFullResourceNamesArgs>;
    /**
     * The pattern type to be used for resource naming.
     * Expected value is 'FullResourceName'.
     */
    namingPatternType: pulumi.Input<"FullResourceName">;
    /**
     * The resource names object for shared storage.
     */
    sharedStorage?: pulumi.Input<SharedStorageResourceNamesArgs>;
}

/**
 * Tiering Policy for a target tier.
 * If the policy is not specified for a given target tier, service retains the existing configured tiering policy for that tier
 */
export interface TieringPolicyArgs {
    /**
     * Number of days/weeks/months/years to retain backups in current tier before tiering.
     * Used only if TieringMode is set to TierAfter
     */
    duration?: pulumi.Input<number>;
    /**
     * Retention duration type: days/weeks/months/years
     * Used only if TieringMode is set to TierAfter
     */
    durationType?: pulumi.Input<string | enums.RetentionDurationType>;
    /**
     * Tiering Mode to control automatic tiering of recovery points. Supported values are:
     * 1. TierRecommended: Tier all recovery points recommended to be tiered
     * 2. TierAfter: Tier all recovery points after a fixed period, as specified in duration + durationType below.
     * 3. DoNotTier: Do not tier any recovery points
     */
    tieringMode?: pulumi.Input<string | enums.TieringMode>;
}

/**
 * User assigned managed identity properties.
 */
export interface UserAssignedIdentityPropertiesArgs {
    clientId?: pulumi.Input<string>;
    principalId?: pulumi.Input<string>;
}

/**
 * User assigned managed identity details.
 */
export interface UserAssignedManagedIdentityDetailsArgs {
    identityArmId?: pulumi.Input<string>;
    identityName?: pulumi.Input<string>;
    /**
     * User assigned managed identity properties.
     */
    userAssignedIdentityProperties?: pulumi.Input<UserAssignedIdentityPropertiesArgs>;
}

/**
 * Managed service identity (user assigned identities)
 */
export interface UserAssignedServiceIdentityArgs {
    /**
     * Type of manage identity
     */
    type: pulumi.Input<string | enums.ManagedServiceIdentityType>;
    /**
     * User assigned identities dictionary
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Defines the VM Backup data for a virtual instance for SAP.
 */
export interface VMBackupDataArgs {
    /**
     * Defines the policy properties for virtual machine backup.
     */
    backupPolicy: pulumi.Input<VMBackupPolicyPropertiesArgs>;
    /**
     * The type of backup, VM, SQL or HANA.
     * Expected value is 'VM'.
     */
    backupType: pulumi.Input<"VM">;
    /**
     * Defines the disk exclusion properties for virtual machine backup.
     */
    diskExclusionProperties?: pulumi.Input<DiskExclusionPropertiesArgs>;
    /**
     * The properties of the recovery services vault used for backup.
     */
    recoveryServicesVault: pulumi.Input<ExistingRecoveryServicesVaultArgs | NewRecoveryServicesVaultArgs>;
}

/**
 * Defines the policy properties for virtual machine backup.
 */
export interface VMBackupPolicyPropertiesArgs {
    /**
     * This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
     * Expected value is 'AzureIaasVM'.
     */
    backupManagementType: pulumi.Input<"AzureIaasVM">;
    /**
     * Instant recovery point additional details.
     */
    instantRPDetails?: pulumi.Input<InstantRPAdditionalDetailsArgs>;
    /**
     * Instant RP retention policy range in days
     */
    instantRpRetentionRangeInDays?: pulumi.Input<number>;
    /**
     * The name of the VM Backup policy.
     */
    name: pulumi.Input<string>;
    /**
     * The policy type.
     */
    policyType?: pulumi.Input<string | enums.IAASVMPolicyType>;
    /**
     * Number of items associated with this policy.
     */
    protectedItemsCount?: pulumi.Input<number>;
    /**
     * ResourceGuard Operation Requests
     */
    resourceGuardOperationRequests?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Retention policy with the details on backup copy retention ranges.
     */
    retentionPolicy?: pulumi.Input<LongTermRetentionPolicyArgs | SimpleRetentionPolicyArgs>;
    /**
     * Backup schedule specified as part of backup policy.
     */
    schedulePolicy?: pulumi.Input<LogSchedulePolicyArgs | LongTermSchedulePolicyArgs | SimpleSchedulePolicyArgs | SimpleSchedulePolicyV2Args>;
    /**
     * Tiering policy to automatically move RPs to another tier
     * Key is Target Tier, defined in RecoveryPointTierType enum.
     * Tiering policy specifies the criteria to move RP to the target tier.
     */
    tieringPolicy?: pulumi.Input<{[key: string]: pulumi.Input<TieringPolicyArgs>}>;
    /**
     * Time zone optional input as string. For example: "Pacific Standard Time".
     */
    timeZone?: pulumi.Input<string>;
}

/**
 * Defines the virtual machine configuration.
 */
export interface VirtualMachineConfigurationArgs {
    /**
     * The image reference.
     */
    imageReference: pulumi.Input<ImageReferenceArgs>;
    /**
     * The OS profile.
     */
    osProfile: pulumi.Input<OSProfileArgs>;
    /**
     * The virtual machine size.
     */
    vmSize: pulumi.Input<string>;
}

/**
 * The resource names object for virtual machine and related resources.
 */
export interface VirtualMachineResourceNamesArgs {
    /**
     * The full resource names for virtual machine data disks. This is a dictionary containing list of names of data disks per volume. Currently supported volumes for database layer are ['hana/data', 'hana/log', hana/shared', 'usr/sap', 'os', 'backup']. For application and cs layers, only 'default' volume is supported
     */
    dataDiskNames?: pulumi.Input<{[key: string]: pulumi.Input<pulumi.Input<string>[]>}>;
    /**
     * The full name for virtual-machine's host (computer name). Currently, ACSS only supports host names which are less than or equal to 13 characters long. If this value is not provided, vmName will be used as host name.
     */
    hostName?: pulumi.Input<string>;
    /**
     * The list of network interface name objects for the selected virtual machine. Currently, only one network interface is supported per virtual machine.
     */
    networkInterfaces?: pulumi.Input<pulumi.Input<NetworkInterfaceResourceNamesArgs>[]>;
    /**
     * The full name for OS disk attached to the VM. If this value is not provided, it will be named by ARM as per its default naming standards (prefixed with vm name). There is only one OS disk attached per Virtual Machine.
     */
    osDiskName?: pulumi.Input<string>;
    /**
     * The full name for virtual machine. The length of this field can be upto 64 characters. If name is not provided, service uses a default name based on the deployment type. For SingleServer, default name is {SID}vm. In case of HA-AvZone systems, default name will be {SID}{app/ascs/db}z{a/b}vm with an incrementor at the end in case of more than 1 vm per layer. For distributed and HA-AvSet systems, default name will be {SID}{app/ascs/db}vm with an incrementor at the end in case of more than 1 vm per layer.
     */
    vmName?: pulumi.Input<string>;
}

/**
 * Weekly retention format.
 */
export interface WeeklyRetentionFormatArgs {
    /**
     * List of days of the week.
     */
    daysOfTheWeek?: pulumi.Input<pulumi.Input<enums.DayOfWeek>[]>;
    /**
     * List of weeks of month.
     */
    weeksOfTheMonth?: pulumi.Input<pulumi.Input<enums.WeekOfMonth>[]>;
}

/**
 * Weekly retention schedule.
 */
export interface WeeklyRetentionScheduleArgs {
    /**
     * List of days of week for weekly retention policy.
     */
    daysOfTheWeek?: pulumi.Input<pulumi.Input<enums.DayOfWeek>[]>;
    /**
     * Retention duration of retention Policy.
     */
    retentionDuration?: pulumi.Input<RetentionDurationArgs>;
    /**
     * Retention times of retention policy.
     */
    retentionTimes?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Weekly schedule.
 */
export interface WeeklyScheduleArgs {
    /**
     * Schedule run days.
     */
    scheduleRunDays?: pulumi.Input<pulumi.Input<enums.DayOfWeek>[]>;
    /**
     * List of times of day this schedule has to be run.
     */
    scheduleRunTimes?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Specifies Windows operating system settings on the virtual machine.
 */
export interface WindowsConfigurationArgs {
    /**
     * The OS Type
     * Expected value is 'Windows'.
     */
    osType: pulumi.Input<"Windows">;
}

/**
 * Yearly retention schedule.
 */
export interface YearlyRetentionScheduleArgs {
    /**
     * List of months of year of yearly retention policy.
     */
    monthsOfYear?: pulumi.Input<pulumi.Input<enums.MonthOfYear>[]>;
    /**
     * Retention duration of retention Policy.
     */
    retentionDuration?: pulumi.Input<RetentionDurationArgs>;
    /**
     * Daily retention format for yearly retention policy.
     */
    retentionScheduleDaily?: pulumi.Input<DailyRetentionFormatArgs>;
    /**
     * Retention schedule format for yearly retention policy.
     */
    retentionScheduleFormatType?: pulumi.Input<string | enums.RetentionScheduleFormat>;
    /**
     * Weekly retention format for yearly retention policy.
     */
    retentionScheduleWeekly?: pulumi.Input<WeeklyRetentionFormatArgs>;
    /**
     * Retention times of retention policy.
     */
    retentionTimes?: pulumi.Input<pulumi.Input<string>[]>;
}
