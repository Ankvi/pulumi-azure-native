import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * A2A container mapping input.
 */
export interface A2AContainerMappingInputArgs {
    /**
     * A value indicating whether the auto update is enabled.
     */
    agentAutoUpdateStatus?: pulumi.Input<string | enums.AgentAutoUpdateStatus>;
    /**
     * The automation account arm id.
     */
    automationAccountArmId?: pulumi.Input<string>;
    /**
     * A value indicating the type authentication to use for automation Account.
     */
    automationAccountAuthenticationType?: pulumi.Input<string | enums.AutomationAccountAuthenticationType>;
    /**
     * The class type.
     * Expected value is 'A2A'.
     */
    instanceType: pulumi.Input<"A2A">;
}
/**
 * a2acontainerMappingInputArgsProvideDefaults sets the appropriate defaults for A2AContainerMappingInputArgs
 */
export function a2acontainerMappingInputArgsProvideDefaults(val: A2AContainerMappingInputArgs): A2AContainerMappingInputArgs {
    return {
        ...val,
        automationAccountAuthenticationType: (val.automationAccountAuthenticationType) ?? "RunAsAccount",
    };
}

/**
 * A2A Cross-Cluster Migration enable protection input.
 */
export interface A2ACrossClusterMigrationEnableProtectionInputArgs {
    /**
     * The fabric specific object Id of the virtual machine.
     */
    fabricObjectId?: pulumi.Input<string>;
    /**
     * The class type.
     * Expected value is 'A2ACrossClusterMigration'.
     */
    instanceType: pulumi.Input<"A2ACrossClusterMigration">;
    /**
     * The recovery container Id.
     */
    recoveryContainerId?: pulumi.Input<string>;
}

/**
 * A2A Cross-Cluster Migration Policy creation input.
 */
export interface A2ACrossClusterMigrationPolicyCreationInputArgs {
    /**
     * The class type.
     * Expected value is 'A2ACrossClusterMigration'.
     */
    instanceType: pulumi.Input<"A2ACrossClusterMigration">;
}

/**
 * A2A enable protection input.
 */
export interface A2AEnableProtectionInputArgs {
    /**
     * A value indicating whether the auto protection is enabled.
     */
    autoProtectionOfDataDisk?: pulumi.Input<string | enums.AutoProtectionOfDataDisk>;
    /**
     * The recovery disk encryption information (for two pass flows).
     */
    diskEncryptionInfo?: pulumi.Input<DiskEncryptionInfoArgs>;
    /**
     * The fabric specific object Id of the virtual machine.
     */
    fabricObjectId: pulumi.Input<string>;
    /**
     * The class type.
     * Expected value is 'A2A'.
     */
    instanceType: pulumi.Input<"A2A">;
    /**
     * The multi vm group id.
     */
    multiVmGroupId?: pulumi.Input<string>;
    /**
     * The multi vm group name.
     */
    multiVmGroupName?: pulumi.Input<string>;
    /**
     * The replication protection cluster Id.
     */
    protectionClusterId?: pulumi.Input<string>;
    /**
     * The recovery availability set Id.
     */
    recoveryAvailabilitySetId?: pulumi.Input<string>;
    /**
     * The recovery availability zone.
     */
    recoveryAvailabilityZone?: pulumi.Input<string>;
    /**
     * The recovery Azure virtual network ARM id.
     */
    recoveryAzureNetworkId?: pulumi.Input<string>;
    /**
     * The boot diagnostic storage account.
     */
    recoveryBootDiagStorageAccountId?: pulumi.Input<string>;
    /**
     * The recovery capacity reservation group Id.
     */
    recoveryCapacityReservationGroupId?: pulumi.Input<string>;
    /**
     * The recovery cloud service Id. Valid for V1 scenarios.
     */
    recoveryCloudServiceId?: pulumi.Input<string>;
    /**
     * The recovery container Id.
     */
    recoveryContainerId?: pulumi.Input<string>;
    /**
     * The recovery extended location.
     */
    recoveryExtendedLocation?: pulumi.Input<ExtendedLocationArgs>;
    /**
     * The recovery proximity placement group Id.
     */
    recoveryProximityPlacementGroupId?: pulumi.Input<string>;
    /**
     * The recovery resource group Id. Valid for V2 scenarios.
     */
    recoveryResourceGroupId?: pulumi.Input<string>;
    /**
     * The recovery subnet name.
     */
    recoverySubnetName?: pulumi.Input<string>;
    /**
     * The virtual machine scale set Id.
     */
    recoveryVirtualMachineScaleSetId?: pulumi.Input<string>;
    /**
     * The list of vm disk details.
     */
    vmDisks?: pulumi.Input<pulumi.Input<A2AVmDiskInputDetailsArgs>[]>;
    /**
     * The list of vm managed disk details.
     */
    vmManagedDisks?: pulumi.Input<pulumi.Input<A2AVmManagedDiskInputDetailsArgs>[]>;
}

/**
 * A2A Policy creation input.
 */
export interface A2APolicyCreationInputArgs {
    /**
     * The app consistent snapshot frequency (in minutes).
     */
    appConsistentFrequencyInMinutes?: pulumi.Input<number>;
    /**
     * The crash consistent snapshot frequency (in minutes).
     */
    crashConsistentFrequencyInMinutes?: pulumi.Input<number>;
    /**
     * The class type.
     * Expected value is 'A2A'.
     */
    instanceType: pulumi.Input<"A2A">;
    /**
     * A value indicating whether multi-VM sync has to be enabled. Value should be 'Enabled' or 'Disabled'.
     */
    multiVmSyncStatus: pulumi.Input<string | enums.SetMultiVmSyncStatus>;
    /**
     * The duration in minutes until which the recovery points need to be stored.
     */
    recoveryPointHistory?: pulumi.Input<number>;
}

/**
 * A2A protected managed disk details.
 */
export interface A2AProtectedManagedDiskDetailsArgs {
    /**
     * The disk level operations list.
     */
    allowedDiskLevelOperation?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The data pending at source virtual machine in MB.
     */
    dataPendingAtSourceAgentInMB?: pulumi.Input<number>;
    /**
     * The data pending for replication in MB at staging account.
     */
    dataPendingInStagingStorageAccountInMB?: pulumi.Input<number>;
    /**
     * The KeyVault resource id for secret (BEK).
     */
    dekKeyVaultArmId?: pulumi.Input<string>;
    /**
     * The disk capacity in bytes.
     */
    diskCapacityInBytes?: pulumi.Input<number>;
    /**
     * The managed disk Arm id.
     */
    diskId?: pulumi.Input<string>;
    /**
     * The disk name.
     */
    diskName?: pulumi.Input<string>;
    /**
     * The disk state.
     */
    diskState?: pulumi.Input<string>;
    /**
     * The type of disk.
     */
    diskType?: pulumi.Input<string>;
    /**
     * The failover name for the managed disk.
     */
    failoverDiskName?: pulumi.Input<string>;
    /**
     * A value indicating whether vm has encrypted os disk or not.
     */
    isDiskEncrypted?: pulumi.Input<boolean>;
    /**
     * A value indicating whether disk key got encrypted or not.
     */
    isDiskKeyEncrypted?: pulumi.Input<boolean>;
    /**
     * The KeyVault resource id for key (KEK).
     */
    kekKeyVaultArmId?: pulumi.Input<string>;
    /**
     * The key URL / identifier (KEK).
     */
    keyIdentifier?: pulumi.Input<string>;
    /**
     * The type of the monitoring job. The progress is contained in MonitoringPercentageCompletion property.
     */
    monitoringJobType?: pulumi.Input<string>;
    /**
     * The percentage of the monitoring job. The type of the monitoring job is defined by MonitoringJobType property.
     */
    monitoringPercentageCompletion?: pulumi.Input<number>;
    /**
     * The primary disk encryption set Id.
     */
    primaryDiskEncryptionSetId?: pulumi.Input<string>;
    /**
     * The primary staging storage account.
     */
    primaryStagingAzureStorageAccountId?: pulumi.Input<string>;
    /**
     * The recovery disk encryption set Id.
     */
    recoveryDiskEncryptionSetId?: pulumi.Input<string>;
    /**
     * Recovery original target disk Arm Id.
     */
    recoveryOrignalTargetDiskId?: pulumi.Input<string>;
    /**
     * The replica disk type. Its an optional value and will be same as source disk type if not user provided.
     */
    recoveryReplicaDiskAccountType?: pulumi.Input<string>;
    /**
     * Recovery replica disk Arm Id.
     */
    recoveryReplicaDiskId?: pulumi.Input<string>;
    /**
     * The recovery disk resource group Arm Id.
     */
    recoveryResourceGroupId?: pulumi.Input<string>;
    /**
     * The target disk type after failover. Its an optional value and will be same as source disk type if not user provided.
     */
    recoveryTargetDiskAccountType?: pulumi.Input<string>;
    /**
     * Recovery target disk Arm Id.
     */
    recoveryTargetDiskId?: pulumi.Input<string>;
    /**
     * A value indicating whether resync is required for this disk.
     */
    resyncRequired?: pulumi.Input<boolean>;
    /**
     * The secret URL / identifier (BEK).
     */
    secretIdentifier?: pulumi.Input<string>;
    /**
     * The test failover name for the managed disk.
     */
    tfoDiskName?: pulumi.Input<string>;
}

/**
 * A2A provider specific settings.
 */
export interface A2AReplicationProtectionClusterDetailsArgs {
    /**
     * The cluster management Id.
     */
    clusterManagementId?: pulumi.Input<string>;
    /**
     * The recovery point Id to which the cluster was failed over.
     */
    failoverRecoveryPointId?: pulumi.Input<string>;
    /**
     * The initial primary extended location.
     */
    initialPrimaryExtendedLocation?: pulumi.Input<ExtendedLocationArgs>;
    /**
     * The initial primary fabric location.
     */
    initialPrimaryFabricLocation?: pulumi.Input<string>;
    /**
     * The initial primary availability zone.
     */
    initialPrimaryZone?: pulumi.Input<string>;
    /**
     * The initial recovery extended location.
     */
    initialRecoveryExtendedLocation?: pulumi.Input<ExtendedLocationArgs>;
    /**
     * The initial recovery fabric location.
     */
    initialRecoveryFabricLocation?: pulumi.Input<string>;
    /**
     * The initial recovery availability zone.
     */
    initialRecoveryZone?: pulumi.Input<string>;
    /**
     * Gets the Instance type.
     * Expected value is 'A2A'.
     */
    instanceType: pulumi.Input<"A2A">;
    /**
     * The time (in UTC) when the last RPO value was calculated by Protection Service.
     */
    lastRpoCalculatedTime?: pulumi.Input<string>;
    /**
     * An id that survives actions like switch protection which change the backing PE/CPE objects internally.The lifecycle id gets carried forward to have a link/continuity in being able to have an Id that denotes the "same" protected cluster even though other internal Ids/ARM Id might be changing.
     */
    lifecycleId?: pulumi.Input<string>;
    /**
     * Whether Multi VM group is auto created or specified by user.
     */
    multiVmGroupCreateOption?: pulumi.Input<string | enums.MultiVmGroupCreateOption>;
    /**
     * The multi vm group Id.
     */
    multiVmGroupId?: pulumi.Input<string>;
    /**
     * The multi vm group name.
     */
    multiVmGroupName?: pulumi.Input<string>;
    /**
     * The primary availability zone.
     */
    primaryAvailabilityZone?: pulumi.Input<string>;
    /**
     * The primary Extended Location.
     */
    primaryExtendedLocation?: pulumi.Input<ExtendedLocationArgs>;
    /**
     * Primary fabric location.
     */
    primaryFabricLocation?: pulumi.Input<string>;
    /**
     * The recovery availability zone.
     */
    recoveryAvailabilityZone?: pulumi.Input<string>;
    /**
     * The recovery Extended Location.
     */
    recoveryExtendedLocation?: pulumi.Input<ExtendedLocationArgs>;
    /**
     * The recovery fabric location.
     */
    recoveryFabricLocation?: pulumi.Input<string>;
    /**
     * The last RPO value in seconds.
     */
    rpoInSeconds?: pulumi.Input<number>;
}

/**
 * A2A provider specific settings.
 */
export interface A2ASharedDiskReplicationDetailsArgs {
    /**
     * The recovery point id to which the Virtual node was failed over.
     */
    failoverRecoveryPointId?: pulumi.Input<string>;
    /**
     * Gets the Instance type.
     * Expected value is 'A2A'.
     */
    instanceType: pulumi.Input<"A2A">;
    /**
     * The time (in UTC) when the last RPO value was calculated by Protection Service.
     */
    lastRpoCalculatedTime?: pulumi.Input<string>;
    /**
     * The management Id.
     */
    managementId?: pulumi.Input<string>;
    /**
     * The type of the monitoring job. The progress is contained in MonitoringPercentageCompletion property.
     */
    monitoringJobType?: pulumi.Input<string>;
    /**
     * The percentage of the monitoring job. The type of the monitoring job is defined by MonitoringJobType property.
     */
    monitoringPercentageCompletion?: pulumi.Input<number>;
    /**
     * Primary fabric location.
     */
    primaryFabricLocation?: pulumi.Input<string>;
    /**
     * The list of protected managed disks.
     */
    protectedManagedDisks?: pulumi.Input<pulumi.Input<A2AProtectedManagedDiskDetailsArgs>[]>;
    /**
     * The recovery fabric location.
     */
    recoveryFabricLocation?: pulumi.Input<string>;
    /**
     * The last RPO value in seconds.
     */
    rpoInSeconds?: pulumi.Input<number>;
    /**
     * The list of unprotected disks.
     */
    unprotectedDisks?: pulumi.Input<pulumi.Input<A2AUnprotectedDiskDetailsArgs>[]>;
}

/**
 * A2A unprotected disk details.
 */
export interface A2AUnprotectedDiskDetailsArgs {
    /**
     * A value indicating whether the disk auto protection is enabled.
     */
    diskAutoProtectionStatus?: pulumi.Input<string | enums.AutoProtectionOfDataDisk>;
    /**
     * The source lun Id for the data disk.
     */
    diskLunId?: pulumi.Input<number>;
}

/**
 * A2A disk input details.
 */
export interface A2AVmDiskInputDetailsArgs {
    /**
     * The disk Uri.
     */
    diskUri: pulumi.Input<string>;
    /**
     * The primary staging storage account Id.
     */
    primaryStagingAzureStorageAccountId: pulumi.Input<string>;
    /**
     * The recovery VHD storage account Id.
     */
    recoveryAzureStorageAccountId: pulumi.Input<string>;
}

/**
 * A2A managed disk input details.
 */
export interface A2AVmManagedDiskInputDetailsArgs {
    /**
     * The recovery disk encryption information (for one / single pass flows).
     */
    diskEncryptionInfo?: pulumi.Input<DiskEncryptionInfoArgs>;
    /**
     * The disk Id.
     */
    diskId: pulumi.Input<string>;
    /**
     * The primary staging storage account Arm Id.
     */
    primaryStagingAzureStorageAccountId: pulumi.Input<string>;
    /**
     * The recovery disk encryption set Id.
     */
    recoveryDiskEncryptionSetId?: pulumi.Input<string>;
    /**
     * The replica disk type. Its an optional value and will be same as source disk type if not user provided.
     */
    recoveryReplicaDiskAccountType?: pulumi.Input<string>;
    /**
     * The target resource group Arm Id.
     */
    recoveryResourceGroupId: pulumi.Input<string>;
    /**
     * The target disk type after failover. Its an optional value and will be same as source disk type if not user provided.
     */
    recoveryTargetDiskAccountType?: pulumi.Input<string>;
}

export interface AADProperties {
    audience?: string;
    authority?: string;
    servicePrincipalClientId?: string;
    servicePrincipalObjectId?: string;
    tenantId?: string;
}

export interface AADPropertiesArgs {
    audience?: pulumi.Input<string>;
    authority?: pulumi.Input<string>;
    servicePrincipalClientId?: pulumi.Input<string>;
    servicePrincipalObjectId?: pulumi.Input<string>;
    tenantId?: pulumi.Input<string>;
}

/**
 * The properties of an add provider request.
 */
export interface AddRecoveryServicesProviderInputPropertiesArgs {
    /**
     * The identity provider input for DRA authentication.
     */
    authenticationIdentityInput: pulumi.Input<IdentityProviderInputArgs>;
    /**
     * The Bios Id of the machine.
     */
    biosId?: pulumi.Input<string>;
    /**
     * The identity provider input for data plane authentication.
     */
    dataPlaneAuthenticationIdentityInput?: pulumi.Input<IdentityProviderInputArgs>;
    /**
     * The Id of the machine where the provider is getting added.
     */
    machineId?: pulumi.Input<string>;
    /**
     * The name of the machine where the provider is getting added.
     */
    machineName: pulumi.Input<string>;
    /**
     * The identity provider input for resource access.
     */
    resourceAccessIdentityInput: pulumi.Input<IdentityProviderInputArgs>;
}

/**
 * The properties of an add vCenter request.
 */
export interface AddVCenterRequestPropertiesArgs {
    /**
     * The friendly name of the vCenter.
     */
    friendlyName?: pulumi.Input<string>;
    /**
     * The IP address of the vCenter to be discovered.
     */
    ipAddress?: pulumi.Input<string>;
    /**
     * The port number for discovery.
     */
    port?: pulumi.Input<string>;
    /**
     * The process server Id from where the discovery is orchestrated.
     */
    processServerId?: pulumi.Input<string>;
    /**
     * The account Id which has privileges to discover the vCenter.
     */
    runAsAccountId?: pulumi.Input<string>;
}

/**
 * AzureBackupServer (DPMVenus) workload-specific protection container.
 */
export interface AzureBackupServerContainerArgs {
    /**
     * Type of backup management for the container.
     */
    backupManagementType?: pulumi.Input<string | enums.BackupManagementType>;
    /**
     * Specifies whether the container is re-registrable.
     */
    canReRegister?: pulumi.Input<boolean>;
    /**
     * ID of container.
     */
    containerId?: pulumi.Input<string>;
    /**
     * Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.
     * Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) is
     * Windows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workload
     * Backup is VMAppContainer
     * Expected value is 'AzureBackupServerContainer'.
     */
    containerType: pulumi.Input<"AzureBackupServerContainer">;
    /**
     * Backup engine Agent version
     */
    dpmAgentVersion?: pulumi.Input<string>;
    /**
     * List of BackupEngines protecting the container
     */
    dpmServers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Extended Info of the container.
     */
    extendedInfo?: pulumi.Input<DPMContainerExtendedInfoArgs>;
    /**
     * Friendly name of the container.
     */
    friendlyName?: pulumi.Input<string>;
    /**
     * Status of health of the container.
     */
    healthStatus?: pulumi.Input<string>;
    /**
     * Type of the protectable object associated with this container
     */
    protectableObjectType?: pulumi.Input<string>;
    /**
     * Number of protected items in the BackupEngine
     */
    protectedItemCount?: pulumi.Input<number>;
    /**
     * Protection status of the container.
     */
    protectionStatus?: pulumi.Input<string>;
    /**
     * Status of registration of the container with the Recovery Services Vault.
     */
    registrationStatus?: pulumi.Input<string>;
    /**
     * To check if upgrade available
     */
    upgradeAvailable?: pulumi.Input<boolean>;
}

/**
 * Fabric provider specific settings.
 */
export interface AzureFabricCreationInputArgs {
    /**
     * Gets the class type.
     * Expected value is 'Azure'.
     */
    instanceType: pulumi.Input<"Azure">;
    /**
     * The Location.
     */
    location?: pulumi.Input<string>;
}

/**
 * AzureStorage backup policy.
 */
export interface AzureFileShareProtectionPolicyArgs {
    /**
     * This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
     * Expected value is 'AzureStorage'.
     */
    backupManagementType: pulumi.Input<"AzureStorage">;
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
     * TimeZone optional input as string. For example: TimeZone = "Pacific Standard Time".
     */
    timeZone?: pulumi.Input<string>;
    /**
     * Retention policy with the details on hardened backup copy retention ranges.
     */
    vaultRetentionPolicy?: pulumi.Input<VaultRetentionPolicyArgs>;
    /**
     * Type of workload for the backup management
     */
    workLoadType?: pulumi.Input<string | enums.WorkloadType>;
}

/**
 * Azure File Share workload-specific backup item.
 */
export interface AzureFileshareProtectedItemArgs {
    /**
     * Name of the backup set the backup item belongs to
     */
    backupSetName?: pulumi.Input<string>;
    /**
     * Unique name of container
     */
    containerName?: pulumi.Input<string>;
    /**
     * Create mode to indicate recovery of existing soft deleted data source or creation of new data source.
     */
    createMode?: pulumi.Input<string | enums.CreateMode>;
    /**
     * Time for deferred deletion in UTC
     */
    deferredDeleteTimeInUTC?: pulumi.Input<string>;
    /**
     * Time remaining before the DS marked for deferred delete is permanently deleted
     */
    deferredDeleteTimeRemaining?: pulumi.Input<string>;
    /**
     * Additional information with this backup item.
     */
    extendedInfo?: pulumi.Input<AzureFileshareProtectedItemExtendedInfoArgs>;
    /**
     * Friendly name of the fileshare represented by this backup item.
     */
    friendlyName?: pulumi.Input<string>;
    /**
     * Flag to identify whether datasource is protected in archive
     */
    isArchiveEnabled?: pulumi.Input<boolean>;
    /**
     * Flag to identify whether the deferred deleted DS is to be purged soon
     */
    isDeferredDeleteScheduleUpcoming?: pulumi.Input<boolean>;
    /**
     * Flag to identify that deferred deleted DS is to be moved into Pause state
     */
    isRehydrate?: pulumi.Input<boolean>;
    /**
     * Flag to identify whether the DS is scheduled for deferred delete
     */
    isScheduledForDeferredDelete?: pulumi.Input<boolean>;
    /**
     * Health details of different KPIs
     */
    kpisHealths?: pulumi.Input<{[key: string]: pulumi.Input<KPIResourceHealthDetailsArgs>}>;
    /**
     * Last backup operation status. Possible values: Healthy, Unhealthy.
     */
    lastBackupStatus?: pulumi.Input<string>;
    /**
     * Timestamp of the last backup operation on this backup item.
     */
    lastBackupTime?: pulumi.Input<string>;
    /**
     * Timestamp when the last (latest) backup copy was created for this backup item.
     */
    lastRecoveryPoint?: pulumi.Input<string>;
    /**
     * ID of the backup policy with which this item is backed up.
     */
    policyId?: pulumi.Input<string>;
    /**
     * Name of the policy used for protection
     */
    policyName?: pulumi.Input<string>;
    /**
     * backup item type.
     * Expected value is 'AzureFileShareProtectedItem'.
     */
    protectedItemType: pulumi.Input<"AzureFileShareProtectedItem">;
    /**
     * Backup state of this backup item.
     */
    protectionState?: pulumi.Input<string | enums.ProtectionState>;
    /**
     * Backup status of this backup item.
     */
    protectionStatus?: pulumi.Input<string>;
    /**
     * ResourceGuardOperationRequests on which LAC check will be performed
     */
    resourceGuardOperationRequests?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Soft delete retention period in days
     */
    softDeleteRetentionPeriodInDays?: pulumi.Input<number>;
    /**
     * ARM ID of the resource to be backed up.
     */
    sourceResourceId?: pulumi.Input<string>;
}

/**
 * Additional information about Azure File Share backup item.
 */
export interface AzureFileshareProtectedItemExtendedInfoArgs {
    /**
     * The oldest backup copy available for this item in the service.
     */
    oldestRecoveryPoint?: pulumi.Input<string>;
    /**
     * Indicates consistency of policy object and policy applied to this backup item.
     */
    policyState?: pulumi.Input<string>;
    /**
     * Number of available backup copies associated with this backup item.
     */
    recoveryPointCount?: pulumi.Input<number>;
}

/**
 * IaaS VM workload-specific backup item representing a classic virtual machine.
 */
export interface AzureIaaSClassicComputeVMContainerArgs {
    /**
     * Type of backup management for the container.
     */
    backupManagementType?: pulumi.Input<string | enums.BackupManagementType>;
    /**
     * Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.
     * Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) is
     * Windows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workload
     * Backup is VMAppContainer
     * Expected value is 'Microsoft.ClassicCompute/virtualMachines'.
     */
    containerType: pulumi.Input<"Microsoft.ClassicCompute/virtualMachines">;
    /**
     * Friendly name of the container.
     */
    friendlyName?: pulumi.Input<string>;
    /**
     * Status of health of the container.
     */
    healthStatus?: pulumi.Input<string>;
    /**
     * Type of the protectable object associated with this container
     */
    protectableObjectType?: pulumi.Input<string>;
    /**
     * Status of registration of the container with the Recovery Services Vault.
     */
    registrationStatus?: pulumi.Input<string>;
    /**
     * Resource group name of Recovery Services Vault.
     */
    resourceGroup?: pulumi.Input<string>;
    /**
     * Fully qualified ARM url of the virtual machine represented by this Azure IaaS VM container.
     */
    virtualMachineId?: pulumi.Input<string>;
    /**
     * Specifies whether the container represents a Classic or an Azure Resource Manager VM.
     */
    virtualMachineVersion?: pulumi.Input<string>;
}

/**
 * IaaS VM workload-specific backup item representing the Classic Compute VM.
 */
export interface AzureIaaSClassicComputeVMProtectedItemArgs {
    /**
     * Name of the backup set the backup item belongs to
     */
    backupSetName?: pulumi.Input<string>;
    /**
     * Unique name of container
     */
    containerName?: pulumi.Input<string>;
    /**
     * Create mode to indicate recovery of existing soft deleted data source or creation of new data source.
     */
    createMode?: pulumi.Input<string | enums.CreateMode>;
    /**
     * Time for deferred deletion in UTC
     */
    deferredDeleteTimeInUTC?: pulumi.Input<string>;
    /**
     * Time remaining before the DS marked for deferred delete is permanently deleted
     */
    deferredDeleteTimeRemaining?: pulumi.Input<string>;
    /**
     * Additional information for this backup item.
     */
    extendedInfo?: pulumi.Input<AzureIaaSVMProtectedItemExtendedInfoArgs>;
    /**
     * Extended Properties for Azure IaasVM Backup.
     */
    extendedProperties?: pulumi.Input<ExtendedPropertiesArgs>;
    /**
     * Flag to identify whether datasource is protected in archive
     */
    isArchiveEnabled?: pulumi.Input<boolean>;
    /**
     * Flag to identify whether the deferred deleted DS is to be purged soon
     */
    isDeferredDeleteScheduleUpcoming?: pulumi.Input<boolean>;
    /**
     * Flag to identify that deferred deleted DS is to be moved into Pause state
     */
    isRehydrate?: pulumi.Input<boolean>;
    /**
     * Flag to identify whether the DS is scheduled for deferred delete
     */
    isScheduledForDeferredDelete?: pulumi.Input<boolean>;
    /**
     * Health details of different KPIs
     */
    kpisHealths?: pulumi.Input<{[key: string]: pulumi.Input<KPIResourceHealthDetailsArgs>}>;
    /**
     * Last backup operation status.
     */
    lastBackupStatus?: pulumi.Input<string>;
    /**
     * Timestamp when the last (latest) backup copy was created for this backup item.
     */
    lastRecoveryPoint?: pulumi.Input<string>;
    /**
     * ID of the backup policy with which this item is backed up.
     */
    policyId?: pulumi.Input<string>;
    /**
     * Name of the policy used for protection
     */
    policyName?: pulumi.Input<string>;
    /**
     * backup item type.
     * Expected value is 'Microsoft.ClassicCompute/virtualMachines'.
     */
    protectedItemType: pulumi.Input<"Microsoft.ClassicCompute/virtualMachines">;
    /**
     * Backup state of this backup item.
     */
    protectionState?: pulumi.Input<string | enums.ProtectionState>;
    /**
     * Backup status of this backup item.
     */
    protectionStatus?: pulumi.Input<string>;
    /**
     * ResourceGuardOperationRequests on which LAC check will be performed
     */
    resourceGuardOperationRequests?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Soft delete retention period in days
     */
    softDeleteRetentionPeriodInDays?: pulumi.Input<number>;
    /**
     * ARM ID of the resource to be backed up.
     */
    sourceResourceId?: pulumi.Input<string>;
}

/**
 * IaaS VM workload-specific backup item representing an Azure Resource Manager virtual machine.
 */
export interface AzureIaaSComputeVMContainerArgs {
    /**
     * Type of backup management for the container.
     */
    backupManagementType?: pulumi.Input<string | enums.BackupManagementType>;
    /**
     * Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.
     * Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) is
     * Windows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workload
     * Backup is VMAppContainer
     * Expected value is 'Microsoft.Compute/virtualMachines'.
     */
    containerType: pulumi.Input<"Microsoft.Compute/virtualMachines">;
    /**
     * Friendly name of the container.
     */
    friendlyName?: pulumi.Input<string>;
    /**
     * Status of health of the container.
     */
    healthStatus?: pulumi.Input<string>;
    /**
     * Type of the protectable object associated with this container
     */
    protectableObjectType?: pulumi.Input<string>;
    /**
     * Status of registration of the container with the Recovery Services Vault.
     */
    registrationStatus?: pulumi.Input<string>;
    /**
     * Resource group name of Recovery Services Vault.
     */
    resourceGroup?: pulumi.Input<string>;
    /**
     * Fully qualified ARM url of the virtual machine represented by this Azure IaaS VM container.
     */
    virtualMachineId?: pulumi.Input<string>;
    /**
     * Specifies whether the container represents a Classic or an Azure Resource Manager VM.
     */
    virtualMachineVersion?: pulumi.Input<string>;
}

/**
 * IaaS VM workload-specific backup item representing the Azure Resource Manager VM.
 */
export interface AzureIaaSComputeVMProtectedItemArgs {
    /**
     * Name of the backup set the backup item belongs to
     */
    backupSetName?: pulumi.Input<string>;
    /**
     * Unique name of container
     */
    containerName?: pulumi.Input<string>;
    /**
     * Create mode to indicate recovery of existing soft deleted data source or creation of new data source.
     */
    createMode?: pulumi.Input<string | enums.CreateMode>;
    /**
     * Time for deferred deletion in UTC
     */
    deferredDeleteTimeInUTC?: pulumi.Input<string>;
    /**
     * Time remaining before the DS marked for deferred delete is permanently deleted
     */
    deferredDeleteTimeRemaining?: pulumi.Input<string>;
    /**
     * Additional information for this backup item.
     */
    extendedInfo?: pulumi.Input<AzureIaaSVMProtectedItemExtendedInfoArgs>;
    /**
     * Extended Properties for Azure IaasVM Backup.
     */
    extendedProperties?: pulumi.Input<ExtendedPropertiesArgs>;
    /**
     * Flag to identify whether datasource is protected in archive
     */
    isArchiveEnabled?: pulumi.Input<boolean>;
    /**
     * Flag to identify whether the deferred deleted DS is to be purged soon
     */
    isDeferredDeleteScheduleUpcoming?: pulumi.Input<boolean>;
    /**
     * Flag to identify that deferred deleted DS is to be moved into Pause state
     */
    isRehydrate?: pulumi.Input<boolean>;
    /**
     * Flag to identify whether the DS is scheduled for deferred delete
     */
    isScheduledForDeferredDelete?: pulumi.Input<boolean>;
    /**
     * Health details of different KPIs
     */
    kpisHealths?: pulumi.Input<{[key: string]: pulumi.Input<KPIResourceHealthDetailsArgs>}>;
    /**
     * Last backup operation status.
     */
    lastBackupStatus?: pulumi.Input<string>;
    /**
     * Timestamp when the last (latest) backup copy was created for this backup item.
     */
    lastRecoveryPoint?: pulumi.Input<string>;
    /**
     * ID of the backup policy with which this item is backed up.
     */
    policyId?: pulumi.Input<string>;
    /**
     * Name of the policy used for protection
     */
    policyName?: pulumi.Input<string>;
    /**
     * backup item type.
     * Expected value is 'Microsoft.Compute/virtualMachines'.
     */
    protectedItemType: pulumi.Input<"Microsoft.Compute/virtualMachines">;
    /**
     * Backup state of this backup item.
     */
    protectionState?: pulumi.Input<string | enums.ProtectionState>;
    /**
     * Backup status of this backup item.
     */
    protectionStatus?: pulumi.Input<string>;
    /**
     * ResourceGuardOperationRequests on which LAC check will be performed
     */
    resourceGuardOperationRequests?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Soft delete retention period in days
     */
    softDeleteRetentionPeriodInDays?: pulumi.Input<number>;
    /**
     * ARM ID of the resource to be backed up.
     */
    sourceResourceId?: pulumi.Input<string>;
}

/**
 * IaaS VM workload-specific backup item.
 */
export interface AzureIaaSVMProtectedItemArgs {
    /**
     * Name of the backup set the backup item belongs to
     */
    backupSetName?: pulumi.Input<string>;
    /**
     * Unique name of container
     */
    containerName?: pulumi.Input<string>;
    /**
     * Create mode to indicate recovery of existing soft deleted data source or creation of new data source.
     */
    createMode?: pulumi.Input<string | enums.CreateMode>;
    /**
     * Time for deferred deletion in UTC
     */
    deferredDeleteTimeInUTC?: pulumi.Input<string>;
    /**
     * Time remaining before the DS marked for deferred delete is permanently deleted
     */
    deferredDeleteTimeRemaining?: pulumi.Input<string>;
    /**
     * Additional information for this backup item.
     */
    extendedInfo?: pulumi.Input<AzureIaaSVMProtectedItemExtendedInfoArgs>;
    /**
     * Extended Properties for Azure IaasVM Backup.
     */
    extendedProperties?: pulumi.Input<ExtendedPropertiesArgs>;
    /**
     * Flag to identify whether datasource is protected in archive
     */
    isArchiveEnabled?: pulumi.Input<boolean>;
    /**
     * Flag to identify whether the deferred deleted DS is to be purged soon
     */
    isDeferredDeleteScheduleUpcoming?: pulumi.Input<boolean>;
    /**
     * Flag to identify that deferred deleted DS is to be moved into Pause state
     */
    isRehydrate?: pulumi.Input<boolean>;
    /**
     * Flag to identify whether the DS is scheduled for deferred delete
     */
    isScheduledForDeferredDelete?: pulumi.Input<boolean>;
    /**
     * Health details of different KPIs
     */
    kpisHealths?: pulumi.Input<{[key: string]: pulumi.Input<KPIResourceHealthDetailsArgs>}>;
    /**
     * Last backup operation status.
     */
    lastBackupStatus?: pulumi.Input<string>;
    /**
     * Timestamp when the last (latest) backup copy was created for this backup item.
     */
    lastRecoveryPoint?: pulumi.Input<string>;
    /**
     * ID of the backup policy with which this item is backed up.
     */
    policyId?: pulumi.Input<string>;
    /**
     * Name of the policy used for protection
     */
    policyName?: pulumi.Input<string>;
    /**
     * backup item type.
     * Expected value is 'AzureIaaSVMProtectedItem'.
     */
    protectedItemType: pulumi.Input<"AzureIaaSVMProtectedItem">;
    /**
     * Backup state of this backup item.
     */
    protectionState?: pulumi.Input<string | enums.ProtectionState>;
    /**
     * Backup status of this backup item.
     */
    protectionStatus?: pulumi.Input<string>;
    /**
     * ResourceGuardOperationRequests on which LAC check will be performed
     */
    resourceGuardOperationRequests?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Soft delete retention period in days
     */
    softDeleteRetentionPeriodInDays?: pulumi.Input<number>;
    /**
     * ARM ID of the resource to be backed up.
     */
    sourceResourceId?: pulumi.Input<string>;
}

/**
 * Additional information on Azure IaaS VM specific backup item.
 */
export interface AzureIaaSVMProtectedItemExtendedInfoArgs {
    /**
     * The latest backup copy available for this backup item in archive tier
     */
    newestRecoveryPointInArchive?: pulumi.Input<string>;
    /**
     * The oldest backup copy available for this backup item across all tiers.
     */
    oldestRecoveryPoint?: pulumi.Input<string>;
    /**
     * The oldest backup copy available for this backup item in archive tier
     */
    oldestRecoveryPointInArchive?: pulumi.Input<string>;
    /**
     * The oldest backup copy available for this backup item in vault tier
     */
    oldestRecoveryPointInVault?: pulumi.Input<string>;
    /**
     * Specifies if backup policy associated with the backup item is inconsistent.
     */
    policyInconsistent?: pulumi.Input<boolean>;
    /**
     * Number of backup copies available for this backup item.
     */
    recoveryPointCount?: pulumi.Input<number>;
}

/**
 * IaaS VM workload-specific backup policy.
 */
export interface AzureIaaSVMProtectionPolicyArgs {
    /**
     * This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
     * Expected value is 'AzureIaasVM'.
     */
    backupManagementType: pulumi.Input<"AzureIaasVM">;
    instantRPDetails?: pulumi.Input<InstantRPAdditionalDetailsArgs>;
    /**
     * Instant RP retention policy range in days
     */
    instantRpRetentionRangeInDays?: pulumi.Input<number>;
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
    snapshotConsistencyType?: pulumi.Input<string | enums.IaasVMSnapshotConsistencyType>;
    /**
     * Tiering policy to automatically move RPs to another tier
     * Key is Target Tier, defined in RecoveryPointTierType enum.
     * Tiering policy specifies the criteria to move RP to the target tier.
     */
    tieringPolicy?: pulumi.Input<{[key: string]: pulumi.Input<TieringPolicyArgs>}>;
    /**
     * TimeZone optional input as string. For example: TimeZone = "Pacific Standard Time".
     */
    timeZone?: pulumi.Input<string>;
}

/**
 * Settings for Azure Monitor based alerts
 */
export interface AzureMonitorAlertSettingsArgs {
    alertsForAllFailoverIssues?: pulumi.Input<string | enums.AlertsState>;
    alertsForAllJobFailures?: pulumi.Input<string | enums.AlertsState>;
    alertsForAllReplicationIssues?: pulumi.Input<string | enums.AlertsState>;
}

/**
 * Azure Recovery Services Vault specific protection intent item.
 */
export interface AzureRecoveryServiceVaultProtectionIntentArgs {
    /**
     * Type of backup management for the backed up item.
     */
    backupManagementType?: pulumi.Input<string | enums.BackupManagementType>;
    /**
     * ID of the item which is getting protected, In case of Azure Vm , it is ProtectedItemId
     */
    itemId?: pulumi.Input<string>;
    /**
     * ID of the backup policy with which this item is backed up.
     */
    policyId?: pulumi.Input<string>;
    /**
     * backup protectionIntent type.
     * Expected value is 'RecoveryServiceVaultItem'.
     */
    protectionIntentItemType: pulumi.Input<"RecoveryServiceVaultItem">;
    /**
     * Backup state of this backup item.
     */
    protectionState?: pulumi.Input<string | enums.ProtectionStatus>;
    /**
     * ARM ID of the resource to be backed up.
     */
    sourceResourceId?: pulumi.Input<string>;
}

/**
 * IaaS VM specific backup protection intent item.
 */
export interface AzureResourceProtectionIntentArgs {
    /**
     * Type of backup management for the backed up item.
     */
    backupManagementType?: pulumi.Input<string | enums.BackupManagementType>;
    /**
     * Friendly name of the VM represented by this backup item.
     */
    friendlyName?: pulumi.Input<string>;
    /**
     * ID of the item which is getting protected, In case of Azure Vm , it is ProtectedItemId
     */
    itemId?: pulumi.Input<string>;
    /**
     * ID of the backup policy with which this item is backed up.
     */
    policyId?: pulumi.Input<string>;
    /**
     * backup protectionIntent type.
     * Expected value is 'AzureResourceItem'.
     */
    protectionIntentItemType: pulumi.Input<"AzureResourceItem">;
    /**
     * Backup state of this backup item.
     */
    protectionState?: pulumi.Input<string | enums.ProtectionStatus>;
    /**
     * ARM ID of the resource to be backed up.
     */
    sourceResourceId?: pulumi.Input<string>;
}

/**
 * Container for SQL workloads under SQL Availability Group.
 */
export interface AzureSQLAGWorkloadContainerProtectionContainerArgs {
    /**
     * Type of backup management for the container.
     */
    backupManagementType?: pulumi.Input<string | enums.BackupManagementType>;
    /**
     * Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.
     * Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) is
     * Windows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workload
     * Backup is VMAppContainer
     * Expected value is 'SQLAGWorkLoadContainer'.
     */
    containerType: pulumi.Input<"SQLAGWorkLoadContainer">;
    /**
     * Additional details of a workload container.
     */
    extendedInfo?: pulumi.Input<AzureWorkloadContainerExtendedInfoArgs>;
    /**
     * Friendly name of the container.
     */
    friendlyName?: pulumi.Input<string>;
    /**
     * Status of health of the container.
     */
    healthStatus?: pulumi.Input<string>;
    /**
     * Time stamp when this container was updated.
     */
    lastUpdatedTime?: pulumi.Input<string>;
    /**
     * Re-Do Operation
     */
    operationType?: pulumi.Input<string | enums.OperationType>;
    /**
     * Type of the protectable object associated with this container
     */
    protectableObjectType?: pulumi.Input<string>;
    /**
     * Status of registration of the container with the Recovery Services Vault.
     */
    registrationStatus?: pulumi.Input<string>;
    /**
     * ARM ID of the virtual machine represented by this Azure Workload Container
     */
    sourceResourceId?: pulumi.Input<string>;
    /**
     * Workload type for which registration was sent.
     */
    workloadType?: pulumi.Input<string | enums.WorkloadType>;
}

/**
 * Azure Sql workload-specific container.
 */
export interface AzureSqlContainerArgs {
    /**
     * Type of backup management for the container.
     */
    backupManagementType?: pulumi.Input<string | enums.BackupManagementType>;
    /**
     * Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.
     * Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) is
     * Windows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workload
     * Backup is VMAppContainer
     * Expected value is 'AzureSqlContainer'.
     */
    containerType: pulumi.Input<"AzureSqlContainer">;
    /**
     * Friendly name of the container.
     */
    friendlyName?: pulumi.Input<string>;
    /**
     * Status of health of the container.
     */
    healthStatus?: pulumi.Input<string>;
    /**
     * Type of the protectable object associated with this container
     */
    protectableObjectType?: pulumi.Input<string>;
    /**
     * Status of registration of the container with the Recovery Services Vault.
     */
    registrationStatus?: pulumi.Input<string>;
}

/**
 * Azure SQL workload-specific backup item.
 */
export interface AzureSqlProtectedItemArgs {
    /**
     * Name of the backup set the backup item belongs to
     */
    backupSetName?: pulumi.Input<string>;
    /**
     * Unique name of container
     */
    containerName?: pulumi.Input<string>;
    /**
     * Create mode to indicate recovery of existing soft deleted data source or creation of new data source.
     */
    createMode?: pulumi.Input<string | enums.CreateMode>;
    /**
     * Time for deferred deletion in UTC
     */
    deferredDeleteTimeInUTC?: pulumi.Input<string>;
    /**
     * Time remaining before the DS marked for deferred delete is permanently deleted
     */
    deferredDeleteTimeRemaining?: pulumi.Input<string>;
    /**
     * Additional information for this backup item.
     */
    extendedInfo?: pulumi.Input<AzureSqlProtectedItemExtendedInfoArgs>;
    /**
     * Flag to identify whether datasource is protected in archive
     */
    isArchiveEnabled?: pulumi.Input<boolean>;
    /**
     * Flag to identify whether the deferred deleted DS is to be purged soon
     */
    isDeferredDeleteScheduleUpcoming?: pulumi.Input<boolean>;
    /**
     * Flag to identify that deferred deleted DS is to be moved into Pause state
     */
    isRehydrate?: pulumi.Input<boolean>;
    /**
     * Flag to identify whether the DS is scheduled for deferred delete
     */
    isScheduledForDeferredDelete?: pulumi.Input<boolean>;
    /**
     * Timestamp when the last (latest) backup copy was created for this backup item.
     */
    lastRecoveryPoint?: pulumi.Input<string>;
    /**
     * ID of the backup policy with which this item is backed up.
     */
    policyId?: pulumi.Input<string>;
    /**
     * Name of the policy used for protection
     */
    policyName?: pulumi.Input<string>;
    /**
     * Internal ID of a backup item. Used by Azure SQL Backup engine to contact Recovery Services.
     */
    protectedItemDataId?: pulumi.Input<string>;
    /**
     * backup item type.
     * Expected value is 'Microsoft.Sql/servers/databases'.
     */
    protectedItemType: pulumi.Input<"Microsoft.Sql/servers/databases">;
    /**
     * Backup state of the backed up item.
     */
    protectionState?: pulumi.Input<string | enums.ProtectedItemState>;
    /**
     * ResourceGuardOperationRequests on which LAC check will be performed
     */
    resourceGuardOperationRequests?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Soft delete retention period in days
     */
    softDeleteRetentionPeriodInDays?: pulumi.Input<number>;
    /**
     * ARM ID of the resource to be backed up.
     */
    sourceResourceId?: pulumi.Input<string>;
}

/**
 * Additional information on Azure Sql specific protected item.
 */
export interface AzureSqlProtectedItemExtendedInfoArgs {
    /**
     * The oldest backup copy available for this item in the service.
     */
    oldestRecoveryPoint?: pulumi.Input<string>;
    /**
     * State of the backup policy associated with this backup item.
     */
    policyState?: pulumi.Input<string>;
    /**
     * Number of available backup copies associated with this backup item.
     */
    recoveryPointCount?: pulumi.Input<number>;
}

/**
 * Azure SQL workload-specific backup policy.
 */
export interface AzureSqlProtectionPolicyArgs {
    /**
     * This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
     * Expected value is 'AzureSql'.
     */
    backupManagementType: pulumi.Input<"AzureSql">;
    /**
     * Number of items associated with this policy.
     */
    protectedItemsCount?: pulumi.Input<number>;
    /**
     * ResourceGuard Operation Requests
     */
    resourceGuardOperationRequests?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Retention policy details.
     */
    retentionPolicy?: pulumi.Input<LongTermRetentionPolicyArgs | SimpleRetentionPolicyArgs>;
}

/**
 * Azure Storage Account workload-specific container.
 */
export interface AzureStorageContainerArgs {
    /**
     * Whether storage account lock is to be acquired for this container or not.
     */
    acquireStorageAccountLock?: pulumi.Input<string | enums.AcquireStorageAccountLock>;
    /**
     * Type of backup management for the container.
     */
    backupManagementType?: pulumi.Input<string | enums.BackupManagementType>;
    /**
     * Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.
     * Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) is
     * Windows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workload
     * Backup is VMAppContainer
     * Expected value is 'StorageContainer'.
     */
    containerType: pulumi.Input<"StorageContainer">;
    /**
     * Friendly name of the container.
     */
    friendlyName?: pulumi.Input<string>;
    /**
     * Status of health of the container.
     */
    healthStatus?: pulumi.Input<string>;
    /**
     * Re-Do Operation
     */
    operationType?: pulumi.Input<string | enums.OperationType>;
    /**
     * Type of the protectable object associated with this container
     */
    protectableObjectType?: pulumi.Input<string>;
    /**
     * Number of items backed up in this container.
     */
    protectedItemCount?: pulumi.Input<number>;
    /**
     * Status of registration of the container with the Recovery Services Vault.
     */
    registrationStatus?: pulumi.Input<string>;
    /**
     * Resource group name of Recovery Services Vault.
     */
    resourceGroup?: pulumi.Input<string>;
    /**
     * Fully qualified ARM url.
     */
    sourceResourceId?: pulumi.Input<string>;
    /**
     * Storage account version.
     */
    storageAccountVersion?: pulumi.Input<string>;
}

/**
 * Create network mappings input properties/behavior specific to Azure to Azure Network mapping.
 */
export interface AzureToAzureCreateNetworkMappingInputArgs {
    /**
     * The instance type.
     * Expected value is 'AzureToAzure'.
     */
    instanceType: pulumi.Input<"AzureToAzure">;
    /**
     * The primary azure vnet Id.
     */
    primaryNetworkId: pulumi.Input<string>;
}

/**
 * Container for SQL workloads under Azure Virtual Machines.
 */
export interface AzureVMAppContainerProtectionContainerArgs {
    /**
     * Type of backup management for the container.
     */
    backupManagementType?: pulumi.Input<string | enums.BackupManagementType>;
    /**
     * Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.
     * Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) is
     * Windows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workload
     * Backup is VMAppContainer
     * Expected value is 'VMAppContainer'.
     */
    containerType: pulumi.Input<"VMAppContainer">;
    /**
     * Additional details of a workload container.
     */
    extendedInfo?: pulumi.Input<AzureWorkloadContainerExtendedInfoArgs>;
    /**
     * Friendly name of the container.
     */
    friendlyName?: pulumi.Input<string>;
    /**
     * Status of health of the container.
     */
    healthStatus?: pulumi.Input<string>;
    /**
     * Time stamp when this container was updated.
     */
    lastUpdatedTime?: pulumi.Input<string>;
    /**
     * Re-Do Operation
     */
    operationType?: pulumi.Input<string | enums.OperationType>;
    /**
     * Type of the protectable object associated with this container
     */
    protectableObjectType?: pulumi.Input<string>;
    /**
     * Status of registration of the container with the Recovery Services Vault.
     */
    registrationStatus?: pulumi.Input<string>;
    /**
     * ARM ID of the virtual machine represented by this Azure Workload Container
     */
    sourceResourceId?: pulumi.Input<string>;
    /**
     * Workload type for which registration was sent.
     */
    workloadType?: pulumi.Input<string | enums.WorkloadType>;
}

/**
 * Azure VM workload-specific protected item.
 */
export interface AzureVmWorkloadProtectedItemArgs {
    /**
     * Name of the backup set the backup item belongs to
     */
    backupSetName?: pulumi.Input<string>;
    /**
     * Unique name of container
     */
    containerName?: pulumi.Input<string>;
    /**
     * Create mode to indicate recovery of existing soft deleted data source or creation of new data source.
     */
    createMode?: pulumi.Input<string | enums.CreateMode>;
    /**
     * Time for deferred deletion in UTC
     */
    deferredDeleteTimeInUTC?: pulumi.Input<string>;
    /**
     * Time remaining before the DS marked for deferred delete is permanently deleted
     */
    deferredDeleteTimeRemaining?: pulumi.Input<string>;
    /**
     * Additional information for this backup item.
     */
    extendedInfo?: pulumi.Input<AzureVmWorkloadProtectedItemExtendedInfoArgs>;
    /**
     * Flag to identify whether datasource is protected in archive
     */
    isArchiveEnabled?: pulumi.Input<boolean>;
    /**
     * Flag to identify whether the deferred deleted DS is to be purged soon
     */
    isDeferredDeleteScheduleUpcoming?: pulumi.Input<boolean>;
    /**
     * Flag to identify that deferred deleted DS is to be moved into Pause state
     */
    isRehydrate?: pulumi.Input<boolean>;
    /**
     * Flag to identify whether the DS is scheduled for deferred delete
     */
    isScheduledForDeferredDelete?: pulumi.Input<boolean>;
    /**
     * Health details of different KPIs
     */
    kpisHealths?: pulumi.Input<{[key: string]: pulumi.Input<KPIResourceHealthDetailsArgs>}>;
    /**
     * Last backup operation status. Possible values: Healthy, Unhealthy.
     */
    lastBackupStatus?: pulumi.Input<string | enums.LastBackupStatus>;
    /**
     * Timestamp of the last backup operation on this backup item.
     */
    lastBackupTime?: pulumi.Input<string>;
    /**
     * Timestamp when the last (latest) backup copy was created for this backup item.
     */
    lastRecoveryPoint?: pulumi.Input<string>;
    /**
     * List of the nodes in case of distributed container.
     */
    nodesList?: pulumi.Input<pulumi.Input<DistributedNodesInfoArgs>[]>;
    /**
     * Parent name of the DB such as Instance or Availability Group.
     */
    parentName?: pulumi.Input<string>;
    /**
     * Parent type of protected item, example: for a DB, standalone server or distributed
     */
    parentType?: pulumi.Input<string>;
    /**
     * ID of the backup policy with which this item is backed up.
     */
    policyId?: pulumi.Input<string>;
    /**
     * Name of the policy used for protection
     */
    policyName?: pulumi.Input<string>;
    /**
     * Data ID of the protected item.
     */
    protectedItemDataSourceId?: pulumi.Input<string>;
    /**
     * Health status of the backup item, evaluated based on last heartbeat received
     */
    protectedItemHealthStatus?: pulumi.Input<string | enums.ProtectedItemHealthStatus>;
    /**
     * backup item type.
     * Expected value is 'AzureVmWorkloadProtectedItem'.
     */
    protectedItemType: pulumi.Input<"AzureVmWorkloadProtectedItem">;
    /**
     * Backup state of this backup item.
     */
    protectionState?: pulumi.Input<string | enums.ProtectionState>;
    /**
     * ResourceGuardOperationRequests on which LAC check will be performed
     */
    resourceGuardOperationRequests?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Host/Cluster Name for instance or AG
     */
    serverName?: pulumi.Input<string>;
    /**
     * Soft delete retention period in days
     */
    softDeleteRetentionPeriodInDays?: pulumi.Input<number>;
    /**
     * ARM ID of the resource to be backed up.
     */
    sourceResourceId?: pulumi.Input<string>;
}

/**
 * Additional information on Azure Workload for SQL specific backup item.
 */
export interface AzureVmWorkloadProtectedItemExtendedInfoArgs {
    /**
     * The latest backup copy available for this backup item in archive tier
     */
    newestRecoveryPointInArchive?: pulumi.Input<string>;
    /**
     * The oldest backup copy available for this backup item across all tiers.
     */
    oldestRecoveryPoint?: pulumi.Input<string>;
    /**
     * The oldest backup copy available for this backup item in archive tier
     */
    oldestRecoveryPointInArchive?: pulumi.Input<string>;
    /**
     * The oldest backup copy available for this backup item in vault tier
     */
    oldestRecoveryPointInVault?: pulumi.Input<string>;
    /**
     * Indicates consistency of policy object and policy applied to this backup item.
     */
    policyState?: pulumi.Input<string>;
    /**
     * Indicates consistency of policy object and policy applied to this backup item.
     */
    recoveryModel?: pulumi.Input<string>;
    /**
     * Number of backup copies available for this backup item.
     */
    recoveryPointCount?: pulumi.Input<number>;
}

/**
 * Azure VM (Mercury) workload-specific backup policy.
 */
export interface AzureVmWorkloadProtectionPolicyArgs {
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
 * Azure VM workload-specific protected item representing SAP ASE Database.
 */
export interface AzureVmWorkloadSAPAseDatabaseProtectedItemArgs {
    /**
     * Name of the backup set the backup item belongs to
     */
    backupSetName?: pulumi.Input<string>;
    /**
     * Unique name of container
     */
    containerName?: pulumi.Input<string>;
    /**
     * Create mode to indicate recovery of existing soft deleted data source or creation of new data source.
     */
    createMode?: pulumi.Input<string | enums.CreateMode>;
    /**
     * Time for deferred deletion in UTC
     */
    deferredDeleteTimeInUTC?: pulumi.Input<string>;
    /**
     * Time remaining before the DS marked for deferred delete is permanently deleted
     */
    deferredDeleteTimeRemaining?: pulumi.Input<string>;
    /**
     * Additional information for this backup item.
     */
    extendedInfo?: pulumi.Input<AzureVmWorkloadProtectedItemExtendedInfoArgs>;
    /**
     * Flag to identify whether datasource is protected in archive
     */
    isArchiveEnabled?: pulumi.Input<boolean>;
    /**
     * Flag to identify whether the deferred deleted DS is to be purged soon
     */
    isDeferredDeleteScheduleUpcoming?: pulumi.Input<boolean>;
    /**
     * Flag to identify that deferred deleted DS is to be moved into Pause state
     */
    isRehydrate?: pulumi.Input<boolean>;
    /**
     * Flag to identify whether the DS is scheduled for deferred delete
     */
    isScheduledForDeferredDelete?: pulumi.Input<boolean>;
    /**
     * Health details of different KPIs
     */
    kpisHealths?: pulumi.Input<{[key: string]: pulumi.Input<KPIResourceHealthDetailsArgs>}>;
    /**
     * Last backup operation status. Possible values: Healthy, Unhealthy.
     */
    lastBackupStatus?: pulumi.Input<string | enums.LastBackupStatus>;
    /**
     * Timestamp of the last backup operation on this backup item.
     */
    lastBackupTime?: pulumi.Input<string>;
    /**
     * Timestamp when the last (latest) backup copy was created for this backup item.
     */
    lastRecoveryPoint?: pulumi.Input<string>;
    /**
     * List of the nodes in case of distributed container.
     */
    nodesList?: pulumi.Input<pulumi.Input<DistributedNodesInfoArgs>[]>;
    /**
     * Parent name of the DB such as Instance or Availability Group.
     */
    parentName?: pulumi.Input<string>;
    /**
     * Parent type of protected item, example: for a DB, standalone server or distributed
     */
    parentType?: pulumi.Input<string>;
    /**
     * ID of the backup policy with which this item is backed up.
     */
    policyId?: pulumi.Input<string>;
    /**
     * Name of the policy used for protection
     */
    policyName?: pulumi.Input<string>;
    /**
     * Data ID of the protected item.
     */
    protectedItemDataSourceId?: pulumi.Input<string>;
    /**
     * Health status of the backup item, evaluated based on last heartbeat received
     */
    protectedItemHealthStatus?: pulumi.Input<string | enums.ProtectedItemHealthStatus>;
    /**
     * backup item type.
     * Expected value is 'AzureVmWorkloadSAPAseDatabase'.
     */
    protectedItemType: pulumi.Input<"AzureVmWorkloadSAPAseDatabase">;
    /**
     * Backup state of this backup item.
     */
    protectionState?: pulumi.Input<string | enums.ProtectionState>;
    /**
     * ResourceGuardOperationRequests on which LAC check will be performed
     */
    resourceGuardOperationRequests?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Host/Cluster Name for instance or AG
     */
    serverName?: pulumi.Input<string>;
    /**
     * Soft delete retention period in days
     */
    softDeleteRetentionPeriodInDays?: pulumi.Input<number>;
    /**
     * ARM ID of the resource to be backed up.
     */
    sourceResourceId?: pulumi.Input<string>;
}

/**
 * Azure VM workload-specific protected item representing SAP HANA DBInstance.
 */
export interface AzureVmWorkloadSAPHanaDBInstanceProtectedItemArgs {
    /**
     * Name of the backup set the backup item belongs to
     */
    backupSetName?: pulumi.Input<string>;
    /**
     * Unique name of container
     */
    containerName?: pulumi.Input<string>;
    /**
     * Create mode to indicate recovery of existing soft deleted data source or creation of new data source.
     */
    createMode?: pulumi.Input<string | enums.CreateMode>;
    /**
     * Time for deferred deletion in UTC
     */
    deferredDeleteTimeInUTC?: pulumi.Input<string>;
    /**
     * Time remaining before the DS marked for deferred delete is permanently deleted
     */
    deferredDeleteTimeRemaining?: pulumi.Input<string>;
    /**
     * Additional information for this backup item.
     */
    extendedInfo?: pulumi.Input<AzureVmWorkloadProtectedItemExtendedInfoArgs>;
    /**
     * Flag to identify whether datasource is protected in archive
     */
    isArchiveEnabled?: pulumi.Input<boolean>;
    /**
     * Flag to identify whether the deferred deleted DS is to be purged soon
     */
    isDeferredDeleteScheduleUpcoming?: pulumi.Input<boolean>;
    /**
     * Flag to identify that deferred deleted DS is to be moved into Pause state
     */
    isRehydrate?: pulumi.Input<boolean>;
    /**
     * Flag to identify whether the DS is scheduled for deferred delete
     */
    isScheduledForDeferredDelete?: pulumi.Input<boolean>;
    /**
     * Health details of different KPIs
     */
    kpisHealths?: pulumi.Input<{[key: string]: pulumi.Input<KPIResourceHealthDetailsArgs>}>;
    /**
     * Last backup operation status. Possible values: Healthy, Unhealthy.
     */
    lastBackupStatus?: pulumi.Input<string | enums.LastBackupStatus>;
    /**
     * Timestamp of the last backup operation on this backup item.
     */
    lastBackupTime?: pulumi.Input<string>;
    /**
     * Timestamp when the last (latest) backup copy was created for this backup item.
     */
    lastRecoveryPoint?: pulumi.Input<string>;
    /**
     * List of the nodes in case of distributed container.
     */
    nodesList?: pulumi.Input<pulumi.Input<DistributedNodesInfoArgs>[]>;
    /**
     * Parent name of the DB such as Instance or Availability Group.
     */
    parentName?: pulumi.Input<string>;
    /**
     * Parent type of protected item, example: for a DB, standalone server or distributed
     */
    parentType?: pulumi.Input<string>;
    /**
     * ID of the backup policy with which this item is backed up.
     */
    policyId?: pulumi.Input<string>;
    /**
     * Name of the policy used for protection
     */
    policyName?: pulumi.Input<string>;
    /**
     * Data ID of the protected item.
     */
    protectedItemDataSourceId?: pulumi.Input<string>;
    /**
     * Health status of the backup item, evaluated based on last heartbeat received
     */
    protectedItemHealthStatus?: pulumi.Input<string | enums.ProtectedItemHealthStatus>;
    /**
     * backup item type.
     * Expected value is 'AzureVmWorkloadSAPHanaDBInstance'.
     */
    protectedItemType: pulumi.Input<"AzureVmWorkloadSAPHanaDBInstance">;
    /**
     * Backup state of this backup item.
     */
    protectionState?: pulumi.Input<string | enums.ProtectionState>;
    /**
     * ResourceGuardOperationRequests on which LAC check will be performed
     */
    resourceGuardOperationRequests?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Host/Cluster Name for instance or AG
     */
    serverName?: pulumi.Input<string>;
    /**
     * Soft delete retention period in days
     */
    softDeleteRetentionPeriodInDays?: pulumi.Input<number>;
    /**
     * ARM ID of the resource to be backed up.
     */
    sourceResourceId?: pulumi.Input<string>;
}

/**
 * Azure VM workload-specific protected item representing SAP HANA Database.
 */
export interface AzureVmWorkloadSAPHanaDatabaseProtectedItemArgs {
    /**
     * Name of the backup set the backup item belongs to
     */
    backupSetName?: pulumi.Input<string>;
    /**
     * Unique name of container
     */
    containerName?: pulumi.Input<string>;
    /**
     * Create mode to indicate recovery of existing soft deleted data source or creation of new data source.
     */
    createMode?: pulumi.Input<string | enums.CreateMode>;
    /**
     * Time for deferred deletion in UTC
     */
    deferredDeleteTimeInUTC?: pulumi.Input<string>;
    /**
     * Time remaining before the DS marked for deferred delete is permanently deleted
     */
    deferredDeleteTimeRemaining?: pulumi.Input<string>;
    /**
     * Additional information for this backup item.
     */
    extendedInfo?: pulumi.Input<AzureVmWorkloadProtectedItemExtendedInfoArgs>;
    /**
     * Flag to identify whether datasource is protected in archive
     */
    isArchiveEnabled?: pulumi.Input<boolean>;
    /**
     * Flag to identify whether the deferred deleted DS is to be purged soon
     */
    isDeferredDeleteScheduleUpcoming?: pulumi.Input<boolean>;
    /**
     * Flag to identify that deferred deleted DS is to be moved into Pause state
     */
    isRehydrate?: pulumi.Input<boolean>;
    /**
     * Flag to identify whether the DS is scheduled for deferred delete
     */
    isScheduledForDeferredDelete?: pulumi.Input<boolean>;
    /**
     * Health details of different KPIs
     */
    kpisHealths?: pulumi.Input<{[key: string]: pulumi.Input<KPIResourceHealthDetailsArgs>}>;
    /**
     * Last backup operation status. Possible values: Healthy, Unhealthy.
     */
    lastBackupStatus?: pulumi.Input<string | enums.LastBackupStatus>;
    /**
     * Timestamp of the last backup operation on this backup item.
     */
    lastBackupTime?: pulumi.Input<string>;
    /**
     * Timestamp when the last (latest) backup copy was created for this backup item.
     */
    lastRecoveryPoint?: pulumi.Input<string>;
    /**
     * List of the nodes in case of distributed container.
     */
    nodesList?: pulumi.Input<pulumi.Input<DistributedNodesInfoArgs>[]>;
    /**
     * Parent name of the DB such as Instance or Availability Group.
     */
    parentName?: pulumi.Input<string>;
    /**
     * Parent type of protected item, example: for a DB, standalone server or distributed
     */
    parentType?: pulumi.Input<string>;
    /**
     * ID of the backup policy with which this item is backed up.
     */
    policyId?: pulumi.Input<string>;
    /**
     * Name of the policy used for protection
     */
    policyName?: pulumi.Input<string>;
    /**
     * Data ID of the protected item.
     */
    protectedItemDataSourceId?: pulumi.Input<string>;
    /**
     * Health status of the backup item, evaluated based on last heartbeat received
     */
    protectedItemHealthStatus?: pulumi.Input<string | enums.ProtectedItemHealthStatus>;
    /**
     * backup item type.
     * Expected value is 'AzureVmWorkloadSAPHanaDatabase'.
     */
    protectedItemType: pulumi.Input<"AzureVmWorkloadSAPHanaDatabase">;
    /**
     * Backup state of this backup item.
     */
    protectionState?: pulumi.Input<string | enums.ProtectionState>;
    /**
     * ResourceGuardOperationRequests on which LAC check will be performed
     */
    resourceGuardOperationRequests?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Host/Cluster Name for instance or AG
     */
    serverName?: pulumi.Input<string>;
    /**
     * Soft delete retention period in days
     */
    softDeleteRetentionPeriodInDays?: pulumi.Input<number>;
    /**
     * ARM ID of the resource to be backed up.
     */
    sourceResourceId?: pulumi.Input<string>;
}

/**
 * Azure VM workload-specific protected item representing SQL Database.
 */
export interface AzureVmWorkloadSQLDatabaseProtectedItemArgs {
    /**
     * Name of the backup set the backup item belongs to
     */
    backupSetName?: pulumi.Input<string>;
    /**
     * Unique name of container
     */
    containerName?: pulumi.Input<string>;
    /**
     * Create mode to indicate recovery of existing soft deleted data source or creation of new data source.
     */
    createMode?: pulumi.Input<string | enums.CreateMode>;
    /**
     * Time for deferred deletion in UTC
     */
    deferredDeleteTimeInUTC?: pulumi.Input<string>;
    /**
     * Time remaining before the DS marked for deferred delete is permanently deleted
     */
    deferredDeleteTimeRemaining?: pulumi.Input<string>;
    /**
     * Additional information for this backup item.
     */
    extendedInfo?: pulumi.Input<AzureVmWorkloadProtectedItemExtendedInfoArgs>;
    /**
     * Flag to identify whether datasource is protected in archive
     */
    isArchiveEnabled?: pulumi.Input<boolean>;
    /**
     * Flag to identify whether the deferred deleted DS is to be purged soon
     */
    isDeferredDeleteScheduleUpcoming?: pulumi.Input<boolean>;
    /**
     * Flag to identify that deferred deleted DS is to be moved into Pause state
     */
    isRehydrate?: pulumi.Input<boolean>;
    /**
     * Flag to identify whether the DS is scheduled for deferred delete
     */
    isScheduledForDeferredDelete?: pulumi.Input<boolean>;
    /**
     * Health details of different KPIs
     */
    kpisHealths?: pulumi.Input<{[key: string]: pulumi.Input<KPIResourceHealthDetailsArgs>}>;
    /**
     * Last backup operation status. Possible values: Healthy, Unhealthy.
     */
    lastBackupStatus?: pulumi.Input<string | enums.LastBackupStatus>;
    /**
     * Timestamp of the last backup operation on this backup item.
     */
    lastBackupTime?: pulumi.Input<string>;
    /**
     * Timestamp when the last (latest) backup copy was created for this backup item.
     */
    lastRecoveryPoint?: pulumi.Input<string>;
    /**
     * List of the nodes in case of distributed container.
     */
    nodesList?: pulumi.Input<pulumi.Input<DistributedNodesInfoArgs>[]>;
    /**
     * Parent name of the DB such as Instance or Availability Group.
     */
    parentName?: pulumi.Input<string>;
    /**
     * Parent type of protected item, example: for a DB, standalone server or distributed
     */
    parentType?: pulumi.Input<string>;
    /**
     * ID of the backup policy with which this item is backed up.
     */
    policyId?: pulumi.Input<string>;
    /**
     * Name of the policy used for protection
     */
    policyName?: pulumi.Input<string>;
    /**
     * Data ID of the protected item.
     */
    protectedItemDataSourceId?: pulumi.Input<string>;
    /**
     * Health status of the backup item, evaluated based on last heartbeat received
     */
    protectedItemHealthStatus?: pulumi.Input<string | enums.ProtectedItemHealthStatus>;
    /**
     * backup item type.
     * Expected value is 'AzureVmWorkloadSQLDatabase'.
     */
    protectedItemType: pulumi.Input<"AzureVmWorkloadSQLDatabase">;
    /**
     * Backup state of this backup item.
     */
    protectionState?: pulumi.Input<string | enums.ProtectionState>;
    /**
     * ResourceGuardOperationRequests on which LAC check will be performed
     */
    resourceGuardOperationRequests?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Host/Cluster Name for instance or AG
     */
    serverName?: pulumi.Input<string>;
    /**
     * Soft delete retention period in days
     */
    softDeleteRetentionPeriodInDays?: pulumi.Input<number>;
    /**
     * ARM ID of the resource to be backed up.
     */
    sourceResourceId?: pulumi.Input<string>;
}

/**
 * Azure Recovery Services Vault specific protection intent item.
 */
export interface AzureWorkloadAutoProtectionIntentArgs {
    /**
     * Type of backup management for the backed up item.
     */
    backupManagementType?: pulumi.Input<string | enums.BackupManagementType>;
    /**
     * ID of the item which is getting protected, In case of Azure Vm , it is ProtectedItemId
     */
    itemId?: pulumi.Input<string>;
    /**
     * ID of the backup policy with which this item is backed up.
     */
    policyId?: pulumi.Input<string>;
    /**
     * backup protectionIntent type.
     * Expected value is 'AzureWorkloadAutoProtectionIntent'.
     */
    protectionIntentItemType: pulumi.Input<"AzureWorkloadAutoProtectionIntent">;
    /**
     * Backup state of this backup item.
     */
    protectionState?: pulumi.Input<string | enums.ProtectionStatus>;
    /**
     * ARM ID of the resource to be backed up.
     */
    sourceResourceId?: pulumi.Input<string>;
}

/**
 * Container for the workloads running inside Azure Compute or Classic Compute.
 */
export interface AzureWorkloadContainerArgs {
    /**
     * Type of backup management for the container.
     */
    backupManagementType?: pulumi.Input<string | enums.BackupManagementType>;
    /**
     * Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.
     * Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) is
     * Windows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workload
     * Backup is VMAppContainer
     * Expected value is 'AzureWorkloadContainer'.
     */
    containerType: pulumi.Input<"AzureWorkloadContainer">;
    /**
     * Additional details of a workload container.
     */
    extendedInfo?: pulumi.Input<AzureWorkloadContainerExtendedInfoArgs>;
    /**
     * Friendly name of the container.
     */
    friendlyName?: pulumi.Input<string>;
    /**
     * Status of health of the container.
     */
    healthStatus?: pulumi.Input<string>;
    /**
     * Time stamp when this container was updated.
     */
    lastUpdatedTime?: pulumi.Input<string>;
    /**
     * Re-Do Operation
     */
    operationType?: pulumi.Input<string | enums.OperationType>;
    /**
     * Type of the protectable object associated with this container
     */
    protectableObjectType?: pulumi.Input<string>;
    /**
     * Status of registration of the container with the Recovery Services Vault.
     */
    registrationStatus?: pulumi.Input<string>;
    /**
     * ARM ID of the virtual machine represented by this Azure Workload Container
     */
    sourceResourceId?: pulumi.Input<string>;
    /**
     * Workload type for which registration was sent.
     */
    workloadType?: pulumi.Input<string | enums.WorkloadType>;
}

/**
 * Azure workload specific protection intent item.
 */
export interface AzureWorkloadContainerAutoProtectionIntentArgs {
    /**
     * Type of backup management for the backed up item.
     */
    backupManagementType?: pulumi.Input<string | enums.BackupManagementType>;
    /**
     * ID of the item which is getting protected, In case of Azure Vm , it is ProtectedItemId
     */
    itemId?: pulumi.Input<string>;
    /**
     * ID of the backup policy with which this item is backed up.
     */
    policyId?: pulumi.Input<string>;
    /**
     * backup protectionIntent type.
     * Expected value is 'AzureWorkloadContainerAutoProtectionIntent'.
     */
    protectionIntentItemType: pulumi.Input<"AzureWorkloadContainerAutoProtectionIntent">;
    /**
     * Backup state of this backup item.
     */
    protectionState?: pulumi.Input<string | enums.ProtectionStatus>;
    /**
     * ARM ID of the resource to be backed up.
     */
    sourceResourceId?: pulumi.Input<string>;
}

/**
 * Extended information of the container.
 */
export interface AzureWorkloadContainerExtendedInfoArgs {
    /**
     * Host Os Name in case of Stand Alone and Cluster Name in case of distributed container.
     */
    hostServerName?: pulumi.Input<string>;
    /**
     * Inquiry Status for the container.
     */
    inquiryInfo?: pulumi.Input<InquiryInfoArgs>;
    /**
     * List of the nodes in case of distributed container.
     */
    nodesList?: pulumi.Input<pulumi.Input<DistributedNodesInfoArgs>[]>;
}

/**
 * Azure Workload SQL Auto Protection intent item.
 */
export interface AzureWorkloadSQLAutoProtectionIntentArgs {
    /**
     * Type of backup management for the backed up item.
     */
    backupManagementType?: pulumi.Input<string | enums.BackupManagementType>;
    /**
     * ID of the item which is getting protected, In case of Azure Vm , it is ProtectedItemId
     */
    itemId?: pulumi.Input<string>;
    /**
     * ID of the backup policy with which this item is backed up.
     */
    policyId?: pulumi.Input<string>;
    /**
     * backup protectionIntent type.
     * Expected value is 'AzureWorkloadSQLAutoProtectionIntent'.
     */
    protectionIntentItemType: pulumi.Input<"AzureWorkloadSQLAutoProtectionIntent">;
    /**
     * Backup state of this backup item.
     */
    protectionState?: pulumi.Input<string | enums.ProtectionStatus>;
    /**
     * ARM ID of the resource to be backed up.
     */
    sourceResourceId?: pulumi.Input<string>;
    /**
     * Workload item type of the item for which intent is to be set
     */
    workloadItemType?: pulumi.Input<string | enums.WorkloadItemType>;
}

/**
 * Settings for classic alerts
 */
export interface ClassicAlertSettingsArgs {
    alertsForCriticalOperations?: pulumi.Input<string | enums.AlertsState>;
    emailNotificationsForSiteRecovery?: pulumi.Input<string | enums.AlertsState>;
}

/**
 * The details of the identity used for CMK
 */
export interface CmkKekIdentityArgs {
    /**
     * Indicate that system assigned identity should be used. Mutually exclusive with 'userAssignedIdentity' field
     */
    useSystemAssignedIdentity?: pulumi.Input<boolean>;
    /**
     * The user assigned identity to be used to grant permissions in case the type of identity used is UserAssigned
     */
    userAssignedIdentity?: pulumi.Input<string>;
}

/**
 * The properties of the Key Vault which hosts CMK
 */
export interface CmkKeyVaultPropertiesArgs {
    /**
     * The key uri of the Customer Managed Key
     */
    keyUri?: pulumi.Input<string>;
}

/**
 * Container identity information
 */
export interface ContainerIdentityInfoArgs {
    /**
     * Protection container identity - AAD Tenant
     */
    aadTenantId?: pulumi.Input<string>;
    /**
     * Protection container identity - Audience
     */
    audience?: pulumi.Input<string>;
    /**
     * Protection container identity - AAD Service Principal
     */
    servicePrincipalClientId?: pulumi.Input<string>;
    /**
     * Unique name of the container
     */
    uniqueName?: pulumi.Input<string>;
}

/**
 * Common input details for network mapping operation.
 */
export interface CreateNetworkMappingInputPropertiesArgs {
    /**
     * Fabric specific input properties.
     */
    fabricSpecificDetails?: pulumi.Input<AzureToAzureCreateNetworkMappingInputArgs | VmmToAzureCreateNetworkMappingInputArgs | VmmToVmmCreateNetworkMappingInputArgs>;
    /**
     * Recovery fabric Name.
     */
    recoveryFabricName?: pulumi.Input<string>;
    /**
     * Recovery network Id.
     */
    recoveryNetworkId: pulumi.Input<string>;
}

/**
 * Policy creation properties.
 */
export interface CreatePolicyInputPropertiesArgs {
    /**
     * The ReplicationProviderSettings.
     */
    providerSpecificInput?: pulumi.Input<A2ACrossClusterMigrationPolicyCreationInputArgs | A2APolicyCreationInputArgs | HyperVReplicaAzurePolicyInputArgs | HyperVReplicaBluePolicyInputArgs | HyperVReplicaPolicyInputArgs | InMageAzureV2PolicyInputArgs | InMagePolicyInputArgs | InMageRcmFailbackPolicyCreationInputArgs | InMageRcmPolicyCreationInputArgs | VMwareCbtPolicyCreationInputArgs>;
}

/**
 * Configure pairing input properties.
 */
export interface CreateProtectionContainerMappingInputPropertiesArgs {
    /**
     * Applicable policy.
     */
    policyId?: pulumi.Input<string>;
    /**
     * Provider specific input for pairing.
     */
    providerSpecificInput?: pulumi.Input<A2AContainerMappingInputArgs | VMwareCbtContainerMappingInputArgs>;
    /**
     * The target unique protection container name.
     */
    targetProtectionContainerId?: pulumi.Input<string>;
}

/**
 * Recovery plan creation properties.
 */
export interface CreateRecoveryPlanInputPropertiesArgs {
    /**
     * The failover deployment model.
     */
    failoverDeploymentModel?: pulumi.Input<string | enums.FailoverDeploymentModel>;
    /**
     * The recovery plan groups.
     */
    groups: pulumi.Input<pulumi.Input<RecoveryPlanGroupArgs>[]>;
    /**
     * The primary fabric Id.
     */
    primaryFabricId: pulumi.Input<string>;
    /**
     * The provider specific input.
     */
    providerSpecificInput?: pulumi.Input<pulumi.Input<RecoveryPlanA2AInputArgs>[]>;
    /**
     * The recovery fabric Id.
     */
    recoveryFabricId: pulumi.Input<string>;
}

/**
 * Settings for Cross Subscription Restore Settings
 */
export interface CrossSubscriptionRestoreSettingsArgs {
    crossSubscriptionRestoreState?: pulumi.Input<string | enums.CrossSubscriptionRestoreState>;
}

/**
 * Current scenario details of the protected entity.
 */
export interface CurrentScenarioDetailsArgs {
    /**
     * ARM Id of the job being executed.
     */
    jobId?: pulumi.Input<string>;
    /**
     * Scenario name.
     */
    scenarioName?: pulumi.Input<string>;
    /**
     * Start time of the workflow.
     */
    startTime?: pulumi.Input<string>;
}

/**
 * Additional information of the DPMContainer.
 */
export interface DPMContainerExtendedInfoArgs {
    /**
     * Last refresh time of the DPMContainer.
     */
    lastRefreshedAt?: pulumi.Input<string>;
}

/**
 * Additional information on Backup engine specific backup item.
 */
export interface DPMProtectedItemArgs {
    /**
     * Backup Management server protecting this backup item
     */
    backupEngineName?: pulumi.Input<string>;
    /**
     * Name of the backup set the backup item belongs to
     */
    backupSetName?: pulumi.Input<string>;
    /**
     * Unique name of container
     */
    containerName?: pulumi.Input<string>;
    /**
     * Create mode to indicate recovery of existing soft deleted data source or creation of new data source.
     */
    createMode?: pulumi.Input<string | enums.CreateMode>;
    /**
     * Time for deferred deletion in UTC
     */
    deferredDeleteTimeInUTC?: pulumi.Input<string>;
    /**
     * Time remaining before the DS marked for deferred delete is permanently deleted
     */
    deferredDeleteTimeRemaining?: pulumi.Input<string>;
    /**
     * Extended info of the backup item.
     */
    extendedInfo?: pulumi.Input<DPMProtectedItemExtendedInfoArgs>;
    /**
     * Friendly name of the managed item
     */
    friendlyName?: pulumi.Input<string>;
    /**
     * Flag to identify whether datasource is protected in archive
     */
    isArchiveEnabled?: pulumi.Input<boolean>;
    /**
     * Flag to identify whether the deferred deleted DS is to be purged soon
     */
    isDeferredDeleteScheduleUpcoming?: pulumi.Input<boolean>;
    /**
     * Flag to identify that deferred deleted DS is to be moved into Pause state
     */
    isRehydrate?: pulumi.Input<boolean>;
    /**
     * Flag to identify whether the DS is scheduled for deferred delete
     */
    isScheduledForDeferredDelete?: pulumi.Input<boolean>;
    /**
     * Timestamp when the last (latest) backup copy was created for this backup item.
     */
    lastRecoveryPoint?: pulumi.Input<string>;
    /**
     * ID of the backup policy with which this item is backed up.
     */
    policyId?: pulumi.Input<string>;
    /**
     * Name of the policy used for protection
     */
    policyName?: pulumi.Input<string>;
    /**
     * backup item type.
     * Expected value is 'DPMProtectedItem'.
     */
    protectedItemType: pulumi.Input<"DPMProtectedItem">;
    /**
     * Protection state of the backup engine
     */
    protectionState?: pulumi.Input<string | enums.ProtectedItemState>;
    /**
     * ResourceGuardOperationRequests on which LAC check will be performed
     */
    resourceGuardOperationRequests?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Soft delete retention period in days
     */
    softDeleteRetentionPeriodInDays?: pulumi.Input<number>;
    /**
     * ARM ID of the resource to be backed up.
     */
    sourceResourceId?: pulumi.Input<string>;
}

/**
 * Additional information of DPM Protected item.
 */
export interface DPMProtectedItemExtendedInfoArgs {
    /**
     * Used Disk storage in bytes.
     */
    diskStorageUsedInBytes?: pulumi.Input<string>;
    /**
     * To check if backup item is collocated.
     */
    isCollocated?: pulumi.Input<boolean>;
    /**
     * To check if backup item is cloud protected.
     */
    isPresentOnCloud?: pulumi.Input<boolean>;
    /**
     * Last backup status information on backup item.
     */
    lastBackupStatus?: pulumi.Input<string>;
    /**
     * Last refresh time on backup item.
     */
    lastRefreshedAt?: pulumi.Input<string>;
    /**
     * Oldest cloud recovery point time.
     */
    oldestRecoveryPoint?: pulumi.Input<string>;
    /**
     * latest disk recovery point time.
     */
    onPremiseLatestRecoveryPoint?: pulumi.Input<string>;
    /**
     * Oldest disk recovery point time.
     */
    onPremiseOldestRecoveryPoint?: pulumi.Input<string>;
    /**
     * disk recovery point count.
     */
    onPremiseRecoveryPointCount?: pulumi.Input<number>;
    /**
     * Attribute to provide information on various DBs.
     */
    protectableObjectLoadPath?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * To check if backup item is disk protected.
     */
    protected?: pulumi.Input<boolean>;
    /**
     * Protection group name of the backup item.
     */
    protectionGroupName?: pulumi.Input<string>;
    /**
     * cloud recovery point count.
     */
    recoveryPointCount?: pulumi.Input<number>;
    /**
     * total Disk storage in bytes.
     */
    totalDiskStorageSizeInBytes?: pulumi.Input<string>;
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

export interface DailyScheduleArgs {
    /**
     * List of times of day this schedule has to be run.
     */
    scheduleRunTimes?: pulumi.Input<pulumi.Input<string>[]>;
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
 * Recovery disk encryption info (BEK and KEK).
 */
export interface DiskEncryptionInfoArgs {
    /**
     * The recovery KeyVault reference for secret.
     */
    diskEncryptionKeyInfo?: pulumi.Input<DiskEncryptionKeyInfoArgs>;
    /**
     * The recovery KeyVault reference for key.
     */
    keyEncryptionKeyInfo?: pulumi.Input<KeyEncryptionKeyInfoArgs>;
}

/**
 * Disk Encryption Key Information (BitLocker Encryption Key (BEK) on Windows).
 */
export interface DiskEncryptionKeyInfoArgs {
    /**
     * The KeyVault resource ARM id for secret.
     */
    keyVaultResourceArmId?: pulumi.Input<string>;
    /**
     * The secret url / identifier.
     */
    secretIdentifier?: pulumi.Input<string>;
}

export interface DiskExclusionPropertiesArgs {
    /**
     * List of Disks' Logical Unit Numbers (LUN) to be used for VM Protection.
     */
    diskLunList?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Flag to indicate whether DiskLunList is to be included/ excluded from backup.
     */
    isInclusionList?: pulumi.Input<boolean>;
}

/**
 * This is used to represent the various nodes of the distributed container.
 */
export interface DistributedNodesInfoArgs {
    /**
     * Name of the node under a distributed container.
     */
    nodeName?: pulumi.Input<string>;
    /**
     * ARM resource id of the node
     */
    sourceResourceId?: pulumi.Input<string>;
    /**
     * Status of this Node.
     * Failed | Succeeded
     */
    status?: pulumi.Input<string>;
}

/**
 * DPM workload-specific protection container.
 */
export interface DpmContainerArgs {
    /**
     * Type of backup management for the container.
     */
    backupManagementType?: pulumi.Input<string | enums.BackupManagementType>;
    /**
     * Specifies whether the container is re-registrable.
     */
    canReRegister?: pulumi.Input<boolean>;
    /**
     * ID of container.
     */
    containerId?: pulumi.Input<string>;
    /**
     * Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.
     * Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) is
     * Windows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workload
     * Backup is VMAppContainer
     * Expected value is 'DPMContainer'.
     */
    containerType: pulumi.Input<"DPMContainer">;
    /**
     * Backup engine Agent version
     */
    dpmAgentVersion?: pulumi.Input<string>;
    /**
     * List of BackupEngines protecting the container
     */
    dpmServers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Extended Info of the container.
     */
    extendedInfo?: pulumi.Input<DPMContainerExtendedInfoArgs>;
    /**
     * Friendly name of the container.
     */
    friendlyName?: pulumi.Input<string>;
    /**
     * Status of health of the container.
     */
    healthStatus?: pulumi.Input<string>;
    /**
     * Type of the protectable object associated with this container
     */
    protectableObjectType?: pulumi.Input<string>;
    /**
     * Number of protected items in the BackupEngine
     */
    protectedItemCount?: pulumi.Input<number>;
    /**
     * Protection status of the container.
     */
    protectionStatus?: pulumi.Input<string>;
    /**
     * Status of registration of the container with the Recovery Services Vault.
     */
    registrationStatus?: pulumi.Input<string>;
    /**
     * To check if upgrade available
     */
    upgradeAvailable?: pulumi.Input<boolean>;
}

/**
 * Enable migration input properties.
 */
export interface EnableMigrationInputPropertiesArgs {
    /**
     * The policy Id.
     */
    policyId: pulumi.Input<string>;
    /**
     * The provider specific details.
     */
    providerSpecificDetails: pulumi.Input<VMwareCbtEnableMigrationInputArgs>;
}

/**
 * Enable protection input properties.
 */
export interface EnableProtectionInputPropertiesArgs {
    /**
     * The Policy Id.
     */
    policyId?: pulumi.Input<string>;
    /**
     * The protectable item Id.
     */
    protectableItemId?: pulumi.Input<string>;
    /**
     * The ReplicationProviderInput. For HyperVReplicaAzure provider, it will be AzureEnableProtectionInput object. For San provider, it will be SanEnableProtectionInput object. For HyperVReplicaAzure provider, it can be null.
     */
    providerSpecificDetails?: pulumi.Input<A2ACrossClusterMigrationEnableProtectionInputArgs | A2AEnableProtectionInputArgs | HyperVReplicaAzureEnableProtectionInputArgs | InMageAzureV2EnableProtectionInputArgs | InMageEnableProtectionInputArgs | InMageRcmEnableProtectionInputArgs>;
}

/**
 * Extended location of the resource.
 */
export interface ExtendedLocationArgs {
    /**
     * The name of the extended location.
     */
    name: pulumi.Input<string>;
    /**
     * The extended location type.
     */
    type: pulumi.Input<string | enums.ExtendedLocationType>;
}

/**
 * Extended Properties for Azure IaasVM Backup.
 */
export interface ExtendedPropertiesArgs {
    /**
     * Extended Properties for Disk Exclusion.
     */
    diskExclusionProperties?: pulumi.Input<DiskExclusionPropertiesArgs>;
    /**
     * Linux VM name
     */
    linuxVmApplicationName?: pulumi.Input<string>;
}

/**
 * Properties of site details provided during the time of site creation.
 */
export interface FabricCreationInputPropertiesArgs {
    /**
     * Fabric provider specific creation input.
     */
    customDetails?: pulumi.Input<AzureFabricCreationInputArgs | InMageRcmFabricCreationInputArgs | VMwareV2FabricCreationInputArgs>;
}

/**
 * Base class for generic container of backup items
 */
export interface GenericContainerArgs {
    /**
     * Type of backup management for the container.
     */
    backupManagementType?: pulumi.Input<string | enums.BackupManagementType>;
    /**
     * Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.
     * Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) is
     * Windows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workload
     * Backup is VMAppContainer
     * Expected value is 'GenericContainer'.
     */
    containerType: pulumi.Input<"GenericContainer">;
    /**
     * Extended information (not returned in List container API calls)
     */
    extendedInformation?: pulumi.Input<GenericContainerExtendedInfoArgs>;
    /**
     * Name of the container's fabric
     */
    fabricName?: pulumi.Input<string>;
    /**
     * Friendly name of the container.
     */
    friendlyName?: pulumi.Input<string>;
    /**
     * Status of health of the container.
     */
    healthStatus?: pulumi.Input<string>;
    /**
     * Type of the protectable object associated with this container
     */
    protectableObjectType?: pulumi.Input<string>;
    /**
     * Status of registration of the container with the Recovery Services Vault.
     */
    registrationStatus?: pulumi.Input<string>;
}

/**
 * Container extended information
 */
export interface GenericContainerExtendedInfoArgs {
    /**
     * Container identity information
     */
    containerIdentityInfo?: pulumi.Input<ContainerIdentityInfoArgs>;
    /**
     * Public key of container cert
     */
    rawCertData?: pulumi.Input<string>;
    /**
     * Azure Backup Service Endpoints for the container
     */
    serviceEndpoints?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * Base class for backup items.
 */
export interface GenericProtectedItemArgs {
    /**
     * Name of the backup set the backup item belongs to
     */
    backupSetName?: pulumi.Input<string>;
    /**
     * Unique name of container
     */
    containerName?: pulumi.Input<string>;
    /**
     * Create mode to indicate recovery of existing soft deleted data source or creation of new data source.
     */
    createMode?: pulumi.Input<string | enums.CreateMode>;
    /**
     * Time for deferred deletion in UTC
     */
    deferredDeleteTimeInUTC?: pulumi.Input<string>;
    /**
     * Time remaining before the DS marked for deferred delete is permanently deleted
     */
    deferredDeleteTimeRemaining?: pulumi.Input<string>;
    /**
     * Name of this backup item's fabric.
     */
    fabricName?: pulumi.Input<string>;
    /**
     * Friendly name of the container.
     */
    friendlyName?: pulumi.Input<string>;
    /**
     * Flag to identify whether datasource is protected in archive
     */
    isArchiveEnabled?: pulumi.Input<boolean>;
    /**
     * Flag to identify whether the deferred deleted DS is to be purged soon
     */
    isDeferredDeleteScheduleUpcoming?: pulumi.Input<boolean>;
    /**
     * Flag to identify that deferred deleted DS is to be moved into Pause state
     */
    isRehydrate?: pulumi.Input<boolean>;
    /**
     * Flag to identify whether the DS is scheduled for deferred delete
     */
    isScheduledForDeferredDelete?: pulumi.Input<boolean>;
    /**
     * Timestamp when the last (latest) backup copy was created for this backup item.
     */
    lastRecoveryPoint?: pulumi.Input<string>;
    /**
     * ID of the backup policy with which this item is backed up.
     */
    policyId?: pulumi.Input<string>;
    /**
     * Name of the policy used for protection
     */
    policyName?: pulumi.Input<string>;
    /**
     * Indicates consistency of policy object and policy applied to this backup item.
     */
    policyState?: pulumi.Input<string>;
    /**
     * Data Plane Service ID of the protected item.
     */
    protectedItemId?: pulumi.Input<number>;
    /**
     * backup item type.
     * Expected value is 'GenericProtectedItem'.
     */
    protectedItemType: pulumi.Input<"GenericProtectedItem">;
    /**
     * Backup state of this backup item.
     */
    protectionState?: pulumi.Input<string | enums.ProtectionState>;
    /**
     * ResourceGuardOperationRequests on which LAC check will be performed
     */
    resourceGuardOperationRequests?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Soft delete retention period in days
     */
    softDeleteRetentionPeriodInDays?: pulumi.Input<number>;
    /**
     * Loosely coupled (type, value) associations (example - parent of a protected item)
     */
    sourceAssociations?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * ARM ID of the resource to be backed up.
     */
    sourceResourceId?: pulumi.Input<string>;
}

/**
 * Azure VM (Mercury) workload-specific backup policy.
 */
export interface GenericProtectionPolicyArgs {
    /**
     * This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
     * Expected value is 'GenericProtectionPolicy'.
     */
    backupManagementType: pulumi.Input<"GenericProtectionPolicy">;
    /**
     * Name of this policy's fabric.
     */
    fabricName?: pulumi.Input<string>;
    /**
     * Number of items associated with this policy.
     */
    protectedItemsCount?: pulumi.Input<number>;
    /**
     * ResourceGuard Operation Requests
     */
    resourceGuardOperationRequests?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of sub-protection policies which includes schedule and retention
     */
    subProtectionPolicy?: pulumi.Input<pulumi.Input<SubProtectionPolicyArgs>[]>;
    /**
     * TimeZone optional input as string. For example: TimeZone = "Pacific Standard Time".
     */
    timeZone?: pulumi.Input<string>;
}

/**
 * Health Error.
 */
export interface HealthErrorArgs {
    /**
     * Error creation time (UTC).
     */
    creationTimeUtc?: pulumi.Input<string>;
    /**
     * Value indicating whether the health error is customer resolvable.
     */
    customerResolvability?: pulumi.Input<string | enums.HealthErrorCustomerResolvability>;
    /**
     * ID of the entity.
     */
    entityId?: pulumi.Input<string>;
    /**
     * Category of error.
     */
    errorCategory?: pulumi.Input<string>;
    /**
     * Error code.
     */
    errorCode?: pulumi.Input<string>;
    /**
     * The health error unique id.
     */
    errorId?: pulumi.Input<string>;
    /**
     * Level of error.
     */
    errorLevel?: pulumi.Input<string>;
    /**
     * Error message.
     */
    errorMessage?: pulumi.Input<string>;
    /**
     * Source of error.
     */
    errorSource?: pulumi.Input<string>;
    /**
     * Type of error.
     */
    errorType?: pulumi.Input<string>;
    /**
     * The inner health errors. HealthError having a list of HealthError as child errors is problematic. InnerHealthError is used because this will prevent an infinite loop of structures when Hydra tries to auto-generate the contract. We are exposing the related health errors as inner health errors and all API consumers can utilize this in the same fashion as Exception -&gt; InnerException.
     */
    innerHealthErrors?: pulumi.Input<pulumi.Input<InnerHealthErrorArgs>[]>;
    /**
     * Possible causes of error.
     */
    possibleCauses?: pulumi.Input<string>;
    /**
     * Recommended action to resolve error.
     */
    recommendedAction?: pulumi.Input<string>;
    /**
     * DRA error message.
     */
    recoveryProviderErrorMessage?: pulumi.Input<string>;
    /**
     * Summary message of the entity.
     */
    summaryMessage?: pulumi.Input<string>;
}

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
 * Disk input details.
 */
export interface HyperVReplicaAzureDiskInputDetailsArgs {
    /**
     * The DiskEncryptionSet ARM ID.
     */
    diskEncryptionSetId?: pulumi.Input<string>;
    /**
     * The DiskId.
     */
    diskId?: pulumi.Input<string>;
    /**
     * The disk type.
     */
    diskType?: pulumi.Input<string | enums.DiskAccountType>;
    /**
     * The LogStorageAccountId.
     */
    logStorageAccountId?: pulumi.Input<string>;
    /**
     * The logical sector size (in bytes), 512 by default.
     */
    sectorSizeInBytes?: pulumi.Input<number>;
}

/**
 * HyperVReplicaAzure specific enable protection input.
 */
export interface HyperVReplicaAzureEnableProtectionInputArgs {
    /**
     * The DiskEncryptionSet ARM Id.
     */
    diskEncryptionSetId?: pulumi.Input<string>;
    /**
     * The disk type.
     */
    diskType?: pulumi.Input<string | enums.DiskAccountType>;
    /**
     * The list of VHD Ids of disks to be protected.
     */
    disksToInclude?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The disks to include list for managed disks.
     */
    disksToIncludeForManagedDisks?: pulumi.Input<pulumi.Input<HyperVReplicaAzureDiskInputDetailsArgs>[]>;
    /**
     * The selected option to enable RDP\SSH on target vm after failover. String value of SrsDataContract.EnableRDPOnTargetOption enum.
     */
    enableRdpOnTargetOption?: pulumi.Input<string>;
    /**
     * The Hyper-V host VM Id.
     */
    hvHostVmId?: pulumi.Input<string>;
    /**
     * The class type.
     * Expected value is 'HyperVReplicaAzure'.
     */
    instanceType: pulumi.Input<"HyperVReplicaAzure">;
    /**
     * License type.
     */
    licenseType?: pulumi.Input<string | enums.LicenseType>;
    /**
     * The license type for Linux VM's.
     */
    linuxLicenseType?: pulumi.Input<string | enums.LinuxLicenseType>;
    /**
     * The storage account to be used for logging during replication.
     */
    logStorageAccountId?: pulumi.Input<string>;
    /**
     * The OS type associated with VM.
     */
    osType?: pulumi.Input<string>;
    /**
     * The tags for the seed managed disks.
     */
    seedManagedDiskTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The SQL Server license type.
     */
    sqlServerLicenseType?: pulumi.Input<string | enums.SqlServerLicenseType>;
    /**
     * The target availability set ARM Id for resource manager deployment.
     */
    targetAvailabilitySetId?: pulumi.Input<string>;
    /**
     * The target availability zone.
     */
    targetAvailabilityZone?: pulumi.Input<string>;
    /**
     * The selected target Azure network Id.
     */
    targetAzureNetworkId?: pulumi.Input<string>;
    /**
     * The selected target Azure subnet Id.
     */
    targetAzureSubnetId?: pulumi.Input<string>;
    /**
     * The Id of the target resource group (for classic deployment) in which the failover VM is to be created.
     */
    targetAzureV1ResourceGroupId?: pulumi.Input<string>;
    /**
     * The Id of the target resource group (for resource manager deployment) in which the failover VM is to be created.
     */
    targetAzureV2ResourceGroupId?: pulumi.Input<string>;
    /**
     * The target azure VM Name.
     */
    targetAzureVmName?: pulumi.Input<string>;
    /**
     * The tags for the target managed disks.
     */
    targetManagedDiskTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The tags for the target NICs.
     */
    targetNicTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The proximity placement group ARM Id.
     */
    targetProximityPlacementGroupId?: pulumi.Input<string>;
    /**
     * The storage account Id.
     */
    targetStorageAccountId?: pulumi.Input<string>;
    /**
     * The target VM security profile.
     */
    targetVmSecurityProfile?: pulumi.Input<SecurityProfilePropertiesArgs>;
    /**
     * The target VM size.
     */
    targetVmSize?: pulumi.Input<string>;
    /**
     * The target VM tags.
     */
    targetVmTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A value indicating whether managed disks should be used during failover.
     */
    useManagedDisks?: pulumi.Input<string>;
    /**
     * A value indicating whether managed disks should be used during replication.
     */
    useManagedDisksForReplication?: pulumi.Input<string>;
    /**
     * The OS name selected by user.
     */
    userSelectedOSName?: pulumi.Input<string>;
    /**
     * The OS disk VHD id associated with VM.
     */
    vhdId?: pulumi.Input<string>;
    /**
     * The VM Name.
     */
    vmName?: pulumi.Input<string>;
}

/**
 * Hyper-V Replica Azure specific input for creating a protection profile.
 */
export interface HyperVReplicaAzurePolicyInputArgs {
    /**
     * The interval (in hours) at which Hyper-V Replica should create an application consistent snapshot within the VM.
     */
    applicationConsistentSnapshotFrequencyInHours?: pulumi.Input<number>;
    /**
     * The class type.
     * Expected value is 'HyperVReplicaAzure'.
     */
    instanceType: pulumi.Input<"HyperVReplicaAzure">;
    /**
     * The scheduled start time for the initial replication. If this parameter is Null, the initial replication starts immediately.
     */
    onlineReplicationStartTime?: pulumi.Input<string>;
    /**
     * The duration (in hours) to which point the recovery history needs to be maintained.
     */
    recoveryPointHistoryDuration?: pulumi.Input<number>;
    /**
     * The replication interval.
     */
    replicationInterval?: pulumi.Input<number>;
    /**
     * The list of storage accounts to which the VMs in the primary cloud can replicate to.
     */
    storageAccounts?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * HyperV Replica Blue policy input.
 */
export interface HyperVReplicaBluePolicyInputArgs {
    /**
     * A value indicating the authentication type.
     */
    allowedAuthenticationType?: pulumi.Input<number>;
    /**
     * A value indicating the application consistent frequency.
     */
    applicationConsistentSnapshotFrequencyInHours?: pulumi.Input<number>;
    /**
     * A value indicating whether compression has to be enabled.
     */
    compression?: pulumi.Input<string>;
    /**
     * A value indicating whether IR is online.
     */
    initialReplicationMethod?: pulumi.Input<string>;
    /**
     *
     * Expected value is 'HyperVReplica2012R2'.
     */
    instanceType: pulumi.Input<"HyperVReplica2012R2">;
    /**
     * A value indicating the offline IR export path.
     */
    offlineReplicationExportPath?: pulumi.Input<string>;
    /**
     * A value indicating the offline IR import path.
     */
    offlineReplicationImportPath?: pulumi.Input<string>;
    /**
     * A value indicating the online IR start time.
     */
    onlineReplicationStartTime?: pulumi.Input<string>;
    /**
     * A value indicating the number of recovery points.
     */
    recoveryPoints?: pulumi.Input<number>;
    /**
     * A value indicating whether the VM has to be auto deleted.
     */
    replicaDeletion?: pulumi.Input<string>;
    /**
     * A value indicating the replication interval.
     */
    replicationFrequencyInSeconds?: pulumi.Input<number>;
    /**
     * A value indicating the recovery HTTPS port.
     */
    replicationPort?: pulumi.Input<number>;
}

/**
 * Hyper-V Replica specific policy Input.
 */
export interface HyperVReplicaPolicyInputArgs {
    /**
     * A value indicating the authentication type.
     */
    allowedAuthenticationType?: pulumi.Input<number>;
    /**
     * A value indicating the application consistent frequency.
     */
    applicationConsistentSnapshotFrequencyInHours?: pulumi.Input<number>;
    /**
     * A value indicating whether compression has to be enabled.
     */
    compression?: pulumi.Input<string>;
    /**
     * A value indicating whether IR is online.
     */
    initialReplicationMethod?: pulumi.Input<string>;
    /**
     * The class type.
     * Expected value is 'HyperVReplica2012'.
     */
    instanceType: pulumi.Input<"HyperVReplica2012">;
    /**
     * A value indicating the offline IR export path.
     */
    offlineReplicationExportPath?: pulumi.Input<string>;
    /**
     * A value indicating the offline IR import path.
     */
    offlineReplicationImportPath?: pulumi.Input<string>;
    /**
     * A value indicating the online IR start time.
     */
    onlineReplicationStartTime?: pulumi.Input<string>;
    /**
     * A value indicating the number of recovery points.
     */
    recoveryPoints?: pulumi.Input<number>;
    /**
     * A value indicating whether the VM has to be auto deleted.
     */
    replicaDeletion?: pulumi.Input<string>;
    /**
     * A value indicating the recovery HTTPS port.
     */
    replicationPort?: pulumi.Input<number>;
}

/**
 * IaaS VM workload-specific container.
 */
export interface IaaSVMContainerArgs {
    /**
     * Type of backup management for the container.
     */
    backupManagementType?: pulumi.Input<string | enums.BackupManagementType>;
    /**
     * Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.
     * Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) is
     * Windows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workload
     * Backup is VMAppContainer
     * Expected value is 'IaasVMContainer'.
     */
    containerType: pulumi.Input<"IaasVMContainer">;
    /**
     * Friendly name of the container.
     */
    friendlyName?: pulumi.Input<string>;
    /**
     * Status of health of the container.
     */
    healthStatus?: pulumi.Input<string>;
    /**
     * Type of the protectable object associated with this container
     */
    protectableObjectType?: pulumi.Input<string>;
    /**
     * Status of registration of the container with the Recovery Services Vault.
     */
    registrationStatus?: pulumi.Input<string>;
    /**
     * Resource group name of Recovery Services Vault.
     */
    resourceGroup?: pulumi.Input<string>;
    /**
     * Fully qualified ARM url of the virtual machine represented by this Azure IaaS VM container.
     */
    virtualMachineId?: pulumi.Input<string>;
    /**
     * Specifies whether the container represents a Classic or an Azure Resource Manager VM.
     */
    virtualMachineVersion?: pulumi.Input<string>;
}

/**
 * Identity for the resource.
 */
export interface IdentityDataArgs {
    /**
     * The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identities.
     */
    type: pulumi.Input<string | enums.ResourceIdentityType>;
    /**
     * The list of user-assigned identities associated with the resource. The user-assigned identity dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Identity provider input.
 */
export interface IdentityProviderInputArgs {
    /**
     * The base authority for Azure Active Directory authentication.
     */
    aadAuthority: pulumi.Input<string>;
    /**
     * The application/client Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services.
     */
    applicationId: pulumi.Input<string>;
    /**
     * The intended Audience of the service principal with which the on-premise management/data plane components would communicate with our Azure services.
     */
    audience: pulumi.Input<string>;
    /**
     * The object Id of the service principal with which the on-premise management/data plane components would communicate with our Azure services.
     */
    objectId: pulumi.Input<string>;
    /**
     * The tenant Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services.
     */
    tenantId: pulumi.Input<string>;
}

/**
 * Immutability Settings of vault
 */
export interface ImmutabilitySettingsArgs {
    state?: pulumi.Input<string | enums.ImmutabilityState>;
}

/**
 * Disk input details.
 */
export interface InMageAzureV2DiskInputDetailsArgs {
    /**
     * The DiskEncryptionSet ARM ID.
     */
    diskEncryptionSetId?: pulumi.Input<string>;
    /**
     * The DiskId.
     */
    diskId?: pulumi.Input<string>;
    /**
     * The disk type.
     */
    diskType?: pulumi.Input<string | enums.DiskAccountType>;
    /**
     * The LogStorageAccountId.
     */
    logStorageAccountId?: pulumi.Input<string>;
}

/**
 * VMware Azure specific enable protection input.
 */
export interface InMageAzureV2EnableProtectionInputArgs {
    /**
     * The DiskEncryptionSet ARM Id.
     */
    diskEncryptionSetId?: pulumi.Input<string>;
    /**
     * The disk type.
     */
    diskType?: pulumi.Input<string | enums.DiskAccountType>;
    /**
     * The disks to include list.
     */
    disksToInclude?: pulumi.Input<pulumi.Input<InMageAzureV2DiskInputDetailsArgs>[]>;
    /**
     * The selected option to enable RDP\SSH on target VM after failover. String value of SrsDataContract.EnableRDPOnTargetOption enum.
     */
    enableRdpOnTargetOption?: pulumi.Input<string>;
    /**
     * The class type.
     * Expected value is 'InMageAzureV2'.
     */
    instanceType: pulumi.Input<"InMageAzureV2">;
    /**
     * License type.
     */
    licenseType?: pulumi.Input<string | enums.LicenseType>;
    /**
     * The storage account to be used for logging during replication.
     */
    logStorageAccountId?: pulumi.Input<string>;
    /**
     * The Master target Id.
     */
    masterTargetId?: pulumi.Input<string>;
    /**
     * The multi VM group Id.
     */
    multiVmGroupId?: pulumi.Input<string>;
    /**
     * The multi VM group name.
     */
    multiVmGroupName?: pulumi.Input<string>;
    /**
     * The Process Server Id.
     */
    processServerId?: pulumi.Input<string>;
    /**
     * The CS account Id.
     */
    runAsAccountId?: pulumi.Input<string>;
    /**
     * The tags for the seed managed disks.
     */
    seedManagedDiskTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The SQL Server license type.
     */
    sqlServerLicenseType?: pulumi.Input<string | enums.SqlServerLicenseType>;
    /**
     * The storage account Id.
     */
    storageAccountId?: pulumi.Input<string>;
    /**
     * The target availability set ARM Id for resource manager deployment.
     */
    targetAvailabilitySetId?: pulumi.Input<string>;
    /**
     * The target availability zone.
     */
    targetAvailabilityZone?: pulumi.Input<string>;
    /**
     * The selected target Azure network Id.
     */
    targetAzureNetworkId?: pulumi.Input<string>;
    /**
     * The selected target Azure subnet Id.
     */
    targetAzureSubnetId?: pulumi.Input<string>;
    /**
     * The Id of the target resource group (for classic deployment) in which the failover VM is to be created.
     */
    targetAzureV1ResourceGroupId?: pulumi.Input<string>;
    /**
     * The Id of the target resource group (for resource manager deployment) in which the failover VM is to be created.
     */
    targetAzureV2ResourceGroupId?: pulumi.Input<string>;
    /**
     * The target azure VM Name.
     */
    targetAzureVmName?: pulumi.Input<string>;
    /**
     * The tags for the target managed disks.
     */
    targetManagedDiskTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The tags for the target NICs.
     */
    targetNicTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The proximity placement group ARM Id.
     */
    targetProximityPlacementGroupId?: pulumi.Input<string>;
    /**
     * The target VM size.
     */
    targetVmSize?: pulumi.Input<string>;
    /**
     * The target VM tags.
     */
    targetVmTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * VMWare Azure specific policy Input.
 */
export interface InMageAzureV2PolicyInputArgs {
    /**
     * The app consistent snapshot frequency (in minutes).
     */
    appConsistentFrequencyInMinutes?: pulumi.Input<number>;
    /**
     * The crash consistent snapshot frequency (in minutes).
     */
    crashConsistentFrequencyInMinutes?: pulumi.Input<number>;
    /**
     * The class type.
     * Expected value is 'InMageAzureV2'.
     */
    instanceType: pulumi.Input<"InMageAzureV2">;
    /**
     * A value indicating whether multi-VM sync has to be enabled. Value should be 'Enabled' or 'Disabled'.
     */
    multiVmSyncStatus: pulumi.Input<string | enums.SetMultiVmSyncStatus>;
    /**
     * The duration in minutes until which the recovery points need to be stored.
     */
    recoveryPointHistory?: pulumi.Input<number>;
    /**
     * The recovery point threshold in minutes.
     */
    recoveryPointThresholdInMinutes?: pulumi.Input<number>;
}

/**
 * DiskExclusionInput when doing enable protection of virtual machine in InMage provider.
 */
export interface InMageDiskExclusionInputArgs {
    /**
     * The guest disk signature based option for disk exclusion.
     */
    diskSignatureOptions?: pulumi.Input<pulumi.Input<InMageDiskSignatureExclusionOptionsArgs>[]>;
    /**
     * The volume label based option for disk exclusion.
     */
    volumeOptions?: pulumi.Input<pulumi.Input<InMageVolumeExclusionOptionsArgs>[]>;
}

/**
 * Guest disk signature based disk exclusion option when doing enable protection of virtual machine in InMage provider.
 */
export interface InMageDiskSignatureExclusionOptionsArgs {
    /**
     * The guest signature of disk to be excluded from replication.
     */
    diskSignature?: pulumi.Input<string>;
}

/**
 * VMware Azure specific enable protection input.
 */
export interface InMageEnableProtectionInputArgs {
    /**
     * The target datastore name.
     */
    datastoreName?: pulumi.Input<string>;
    /**
     * The enable disk exclusion input.
     */
    diskExclusionInput?: pulumi.Input<InMageDiskExclusionInputArgs>;
    /**
     * The disks to include list.
     */
    disksToInclude?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The class type.
     * Expected value is 'InMage'.
     */
    instanceType: pulumi.Input<"InMage">;
    /**
     * The Master Target Id.
     */
    masterTargetId: pulumi.Input<string>;
    /**
     * The multi VM group Id.
     */
    multiVmGroupId: pulumi.Input<string>;
    /**
     * The multi VM group name.
     */
    multiVmGroupName: pulumi.Input<string>;
    /**
     * The Process Server Id.
     */
    processServerId: pulumi.Input<string>;
    /**
     * The retention drive to use on the MT.
     */
    retentionDrive: pulumi.Input<string>;
    /**
     * The CS account Id.
     */
    runAsAccountId?: pulumi.Input<string>;
    /**
     * The VM Name.
     */
    vmFriendlyName?: pulumi.Input<string>;
}

/**
 * VMWare Azure specific protection profile Input.
 */
export interface InMagePolicyInputArgs {
    /**
     * The app consistent snapshot frequency (in minutes).
     */
    appConsistentFrequencyInMinutes?: pulumi.Input<number>;
    /**
     * The class type.
     * Expected value is 'InMage'.
     */
    instanceType: pulumi.Input<"InMage">;
    /**
     * A value indicating whether multi-VM sync has to be enabled. Value should be 'Enabled' or 'Disabled'.
     */
    multiVmSyncStatus: pulumi.Input<string | enums.SetMultiVmSyncStatus>;
    /**
     * The duration in minutes until which the recovery points need to be stored.
     */
    recoveryPointHistory?: pulumi.Input<number>;
    /**
     * The recovery point threshold in minutes.
     */
    recoveryPointThresholdInMinutes?: pulumi.Input<number>;
}

/**
 * InMageRcm disk input.
 */
export interface InMageRcmDiskInputArgs {
    /**
     * The DiskEncryptionSet ARM Id.
     */
    diskEncryptionSetId?: pulumi.Input<string>;
    /**
     * The disk Id.
     */
    diskId: pulumi.Input<string>;
    /**
     * The disk type.
     */
    diskType: pulumi.Input<string | enums.DiskAccountType>;
    /**
     * The log storage account ARM Id.
     */
    logStorageAccountId: pulumi.Input<string>;
    /**
     * The logical sector size (in bytes), 512 by default.
     */
    sectorSizeInBytes?: pulumi.Input<number>;
}

/**
 * InMageRcm disk input.
 */
export interface InMageRcmDisksDefaultInputArgs {
    /**
     * The DiskEncryptionSet ARM Id.
     */
    diskEncryptionSetId?: pulumi.Input<string>;
    /**
     * The disk type.
     */
    diskType: pulumi.Input<string | enums.DiskAccountType>;
    /**
     * The log storage account ARM Id.
     */
    logStorageAccountId: pulumi.Input<string>;
    /**
     * The logical sector size (in bytes), 512 by default.
     */
    sectorSizeInBytes?: pulumi.Input<number>;
}

/**
 * InMageRcm specific enable protection input.
 */
export interface InMageRcmEnableProtectionInputArgs {
    /**
     * The default disk input.
     */
    disksDefault?: pulumi.Input<InMageRcmDisksDefaultInputArgs>;
    /**
     * The disks to include list.
     */
    disksToInclude?: pulumi.Input<pulumi.Input<InMageRcmDiskInputArgs>[]>;
    /**
     * The ARM Id of discovered machine.
     */
    fabricDiscoveryMachineId: pulumi.Input<string>;
    /**
     * The class type.
     * Expected value is 'InMageRcm'.
     */
    instanceType: pulumi.Input<"InMageRcm">;
    /**
     * The license type.
     */
    licenseType?: pulumi.Input<string | enums.LicenseType>;
    /**
     * The license type for Linux VM's.
     */
    linuxLicenseType?: pulumi.Input<string | enums.LinuxLicenseType>;
    /**
     * The multi VM group name.
     */
    multiVmGroupName?: pulumi.Input<string>;
    /**
     * The process server Id.
     */
    processServerId: pulumi.Input<string>;
    /**
     * The run-as account Id.
     */
    runAsAccountId?: pulumi.Input<string>;
    /**
     * The tags for the seed managed disks.
     */
    seedManagedDiskTags?: pulumi.Input<pulumi.Input<UserCreatedResourceTagArgs>[]>;
    /**
     * The SQL Server license type.
     */
    sqlServerLicenseType?: pulumi.Input<string | enums.SqlServerLicenseType>;
    /**
     * The target availability set ARM Id.
     */
    targetAvailabilitySetId?: pulumi.Input<string>;
    /**
     * The target availability zone.
     */
    targetAvailabilityZone?: pulumi.Input<string>;
    /**
     * The target boot diagnostics storage account ARM Id.
     */
    targetBootDiagnosticsStorageAccountId?: pulumi.Input<string>;
    /**
     * The tags for the target managed disks.
     */
    targetManagedDiskTags?: pulumi.Input<pulumi.Input<UserCreatedResourceTagArgs>[]>;
    /**
     * The selected target network ARM Id.
     */
    targetNetworkId?: pulumi.Input<string>;
    /**
     * The tags for the target NICs.
     */
    targetNicTags?: pulumi.Input<pulumi.Input<UserCreatedResourceTagArgs>[]>;
    /**
     * The target proximity placement group Id.
     */
    targetProximityPlacementGroupId?: pulumi.Input<string>;
    /**
     * The target resource group ARM Id.
     */
    targetResourceGroupId: pulumi.Input<string>;
    /**
     * The selected target subnet name.
     */
    targetSubnetName?: pulumi.Input<string>;
    /**
     * The target VM name.
     */
    targetVmName?: pulumi.Input<string>;
    /**
     * The target VM security profile.
     */
    targetVmSecurityProfile?: pulumi.Input<SecurityProfilePropertiesArgs>;
    /**
     * The target VM size.
     */
    targetVmSize?: pulumi.Input<string>;
    /**
     * The target VM tags.
     */
    targetVmTags?: pulumi.Input<pulumi.Input<UserCreatedResourceTagArgs>[]>;
    /**
     * The selected test network ARM Id.
     */
    testNetworkId?: pulumi.Input<string>;
    /**
     * The selected test subnet name.
     */
    testSubnetName?: pulumi.Input<string>;
    /**
     * The OS name selected by user.
     */
    userSelectedOSName?: pulumi.Input<string>;
}

/**
 * InMageRcm fabric provider specific settings.
 */
export interface InMageRcmFabricCreationInputArgs {
    /**
     * Gets the class type.
     * Expected value is 'InMageRcm'.
     */
    instanceType: pulumi.Input<"InMageRcm">;
    /**
     * The ARM Id of the physical site.
     */
    physicalSiteId: pulumi.Input<string>;
    /**
     * The identity provider input for source agent authentication.
     */
    sourceAgentIdentity: pulumi.Input<IdentityProviderInputArgs>;
    /**
     * The ARM Id of the VMware site.
     */
    vmwareSiteId: pulumi.Input<string>;
}

/**
 * InMageRcmFailback policy creation input.
 */
export interface InMageRcmFailbackPolicyCreationInputArgs {
    /**
     * The app consistent snapshot frequency (in minutes).
     */
    appConsistentFrequencyInMinutes?: pulumi.Input<number>;
    /**
     * The crash consistent snapshot frequency (in minutes).
     */
    crashConsistentFrequencyInMinutes?: pulumi.Input<number>;
    /**
     * The class type.
     * Expected value is 'InMageRcmFailback'.
     */
    instanceType: pulumi.Input<"InMageRcmFailback">;
}

/**
 * InMageRcm policy creation input.
 */
export interface InMageRcmPolicyCreationInputArgs {
    /**
     * The app consistent snapshot frequency (in minutes).
     */
    appConsistentFrequencyInMinutes?: pulumi.Input<number>;
    /**
     * The crash consistent snapshot frequency (in minutes).
     */
    crashConsistentFrequencyInMinutes?: pulumi.Input<number>;
    /**
     * A value indicating whether multi-VM sync has to be enabled.
     */
    enableMultiVmSync?: pulumi.Input<string>;
    /**
     * The class type.
     * Expected value is 'InMageRcm'.
     */
    instanceType: pulumi.Input<"InMageRcm">;
    /**
     * The duration in minutes until which the recovery points need to be stored.
     */
    recoveryPointHistoryInMinutes?: pulumi.Input<number>;
}

/**
 * Guest disk signature based disk exclusion option when doing enable protection of virtual machine in InMage provider.
 */
export interface InMageVolumeExclusionOptionsArgs {
    /**
     * The value indicating whether to exclude multi volume disk or not. If a disk has multiple volumes and one of the volume has label matching with VolumeLabel this disk will be excluded from replication if OnlyExcludeIfSingleVolume is false.
     */
    onlyExcludeIfSingleVolume?: pulumi.Input<string>;
    /**
     * The volume label. The disk having any volume with this label will be excluded from replication.
     */
    volumeLabel?: pulumi.Input<string>;
}

/**
 * Implements InnerHealthError class. HealthError object has a list of InnerHealthErrors as child errors. InnerHealthError is used because this will prevent an infinite loop of structures when Hydra tries to auto-generate the contract. We are exposing the related health errors as inner health errors and all API consumers can utilize this in the same fashion as Exception -&gt; InnerException.
 */
export interface InnerHealthErrorArgs {
    /**
     * Error creation time (UTC).
     */
    creationTimeUtc?: pulumi.Input<string>;
    /**
     * Value indicating whether the health error is customer resolvable.
     */
    customerResolvability?: pulumi.Input<string | enums.HealthErrorCustomerResolvability>;
    /**
     * ID of the entity.
     */
    entityId?: pulumi.Input<string>;
    /**
     * Category of error.
     */
    errorCategory?: pulumi.Input<string>;
    /**
     * Error code.
     */
    errorCode?: pulumi.Input<string>;
    /**
     * The health error unique id.
     */
    errorId?: pulumi.Input<string>;
    /**
     * Level of error.
     */
    errorLevel?: pulumi.Input<string>;
    /**
     * Error message.
     */
    errorMessage?: pulumi.Input<string>;
    /**
     * Source of error.
     */
    errorSource?: pulumi.Input<string>;
    /**
     * Type of error.
     */
    errorType?: pulumi.Input<string>;
    /**
     * Possible causes of error.
     */
    possibleCauses?: pulumi.Input<string>;
    /**
     * Recommended action to resolve error.
     */
    recommendedAction?: pulumi.Input<string>;
    /**
     * DRA error message.
     */
    recoveryProviderErrorMessage?: pulumi.Input<string>;
    /**
     * Summary message of the entity.
     */
    summaryMessage?: pulumi.Input<string>;
}

/**
 * Details about inquired protectable items under a given container.
 */
export interface InquiryInfoArgs {
    /**
     * Inquiry Details which will have workload specific details.
     * For e.g. - For SQL and oracle this will contain different details.
     */
    inquiryDetails?: pulumi.Input<pulumi.Input<WorkloadInquiryDetailsArgs>[]>;
    /**
     * Inquiry Status for this container such as
     * InProgress | Failed | Succeeded
     */
    status?: pulumi.Input<string>;
}

/**
 * Validation for inquired protectable items under a given container.
 */
export interface InquiryValidationArgs {
    /**
     * Status for the Inquiry Validation.
     */
    status?: pulumi.Input<string>;
}

export interface InstantRPAdditionalDetailsArgs {
    azureBackupRGNamePrefix?: pulumi.Input<string>;
    azureBackupRGNameSuffix?: pulumi.Input<string>;
}

/**
 * KPI Resource Health Details
 */
export interface KPIResourceHealthDetailsArgs {
    /**
     * Resource Health Status
     */
    resourceHealthStatus?: pulumi.Input<string | enums.ResourceHealthStatus>;
}

/**
 * Key Encryption Key (KEK) information.
 */
export interface KeyEncryptionKeyInfoArgs {
    /**
     * The key URL / identifier.
     */
    keyIdentifier?: pulumi.Input<string>;
    /**
     * The KeyVault resource ARM Id for key.
     */
    keyVaultResourceArmId?: pulumi.Input<string>;
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
 * MAB workload-specific Health Details.
 */
export interface MABContainerHealthDetailsArgs {
    /**
     * Health Code
     */
    code?: pulumi.Input<number>;
    /**
     * Health Message
     */
    message?: pulumi.Input<string>;
    /**
     * Health Recommended Actions
     */
    recommendations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Health Title
     */
    title?: pulumi.Input<string>;
}

/**
 * Container with items backed up using MAB backup engine.
 */
export interface MabContainerArgs {
    /**
     * Agent version of this container.
     */
    agentVersion?: pulumi.Input<string>;
    /**
     * Type of backup management for the container.
     */
    backupManagementType?: pulumi.Input<string | enums.BackupManagementType>;
    /**
     * Can the container be registered one more time.
     */
    canReRegister?: pulumi.Input<boolean>;
    /**
     * Health state of mab container.
     */
    containerHealthState?: pulumi.Input<string>;
    /**
     * ContainerID represents the container.
     */
    containerId?: pulumi.Input<number>;
    /**
     * Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.
     * Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) is
     * Windows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workload
     * Backup is VMAppContainer
     * Expected value is 'Windows'.
     */
    containerType: pulumi.Input<"Windows">;
    /**
     * Additional information for this container
     */
    extendedInfo?: pulumi.Input<MabContainerExtendedInfoArgs>;
    /**
     * Friendly name of the container.
     */
    friendlyName?: pulumi.Input<string>;
    /**
     * Status of health of the container.
     */
    healthStatus?: pulumi.Input<string>;
    /**
     * Health details on this mab container.
     */
    mabContainerHealthDetails?: pulumi.Input<pulumi.Input<MABContainerHealthDetailsArgs>[]>;
    /**
     * Type of the protectable object associated with this container
     */
    protectableObjectType?: pulumi.Input<string>;
    /**
     * Number of items backed up in this container.
     */
    protectedItemCount?: pulumi.Input<number>;
    /**
     * Status of registration of the container with the Recovery Services Vault.
     */
    registrationStatus?: pulumi.Input<string>;
}

/**
 * Additional information of the container.
 */
export interface MabContainerExtendedInfoArgs {
    /**
     * Type of backup items associated with this container.
     */
    backupItemType?: pulumi.Input<string | enums.BackupItemType>;
    /**
     * List of backup items associated with this container.
     */
    backupItems?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Latest backup status of this container.
     */
    lastBackupStatus?: pulumi.Input<string>;
    /**
     * Time stamp when this container was refreshed.
     */
    lastRefreshedAt?: pulumi.Input<string>;
    /**
     * Backup policy associated with this container.
     */
    policyName?: pulumi.Input<string>;
}

/**
 * MAB workload-specific backup item.
 */
export interface MabFileFolderProtectedItemArgs {
    /**
     * Name of the backup set the backup item belongs to
     */
    backupSetName?: pulumi.Input<string>;
    /**
     * Name of the computer associated with this backup item.
     */
    computerName?: pulumi.Input<string>;
    /**
     * Unique name of container
     */
    containerName?: pulumi.Input<string>;
    /**
     * Create mode to indicate recovery of existing soft deleted data source or creation of new data source.
     */
    createMode?: pulumi.Input<string | enums.CreateMode>;
    /**
     * Sync time for deferred deletion in UTC
     */
    deferredDeleteSyncTimeInUTC?: pulumi.Input<number>;
    /**
     * Time for deferred deletion in UTC
     */
    deferredDeleteTimeInUTC?: pulumi.Input<string>;
    /**
     * Time remaining before the DS marked for deferred delete is permanently deleted
     */
    deferredDeleteTimeRemaining?: pulumi.Input<string>;
    /**
     * Additional information with this backup item.
     */
    extendedInfo?: pulumi.Input<MabFileFolderProtectedItemExtendedInfoArgs>;
    /**
     * Friendly name of this backup item.
     */
    friendlyName?: pulumi.Input<string>;
    /**
     * Flag to identify whether datasource is protected in archive
     */
    isArchiveEnabled?: pulumi.Input<boolean>;
    /**
     * Flag to identify whether the deferred deleted DS is to be purged soon
     */
    isDeferredDeleteScheduleUpcoming?: pulumi.Input<boolean>;
    /**
     * Flag to identify that deferred deleted DS is to be moved into Pause state
     */
    isRehydrate?: pulumi.Input<boolean>;
    /**
     * Flag to identify whether the DS is scheduled for deferred delete
     */
    isScheduledForDeferredDelete?: pulumi.Input<boolean>;
    /**
     * Status of last backup operation.
     */
    lastBackupStatus?: pulumi.Input<string>;
    /**
     * Timestamp of the last backup operation on this backup item.
     */
    lastBackupTime?: pulumi.Input<string>;
    /**
     * Timestamp when the last (latest) backup copy was created for this backup item.
     */
    lastRecoveryPoint?: pulumi.Input<string>;
    /**
     * ID of the backup policy with which this item is backed up.
     */
    policyId?: pulumi.Input<string>;
    /**
     * Name of the policy used for protection
     */
    policyName?: pulumi.Input<string>;
    /**
     * backup item type.
     * Expected value is 'MabFileFolderProtectedItem'.
     */
    protectedItemType: pulumi.Input<"MabFileFolderProtectedItem">;
    /**
     * Protected, ProtectionStopped, IRPending or ProtectionError
     */
    protectionState?: pulumi.Input<string>;
    /**
     * ResourceGuardOperationRequests on which LAC check will be performed
     */
    resourceGuardOperationRequests?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Soft delete retention period in days
     */
    softDeleteRetentionPeriodInDays?: pulumi.Input<number>;
    /**
     * ARM ID of the resource to be backed up.
     */
    sourceResourceId?: pulumi.Input<string>;
}

/**
 * Additional information on the backed up item.
 */
export interface MabFileFolderProtectedItemExtendedInfoArgs {
    /**
     * Last time when the agent data synced to service.
     */
    lastRefreshedAt?: pulumi.Input<string>;
    /**
     * The oldest backup copy available.
     */
    oldestRecoveryPoint?: pulumi.Input<string>;
    /**
     * Number of backup copies associated with the backup item.
     */
    recoveryPointCount?: pulumi.Input<number>;
}

/**
 * Mab container-specific backup policy.
 */
export interface MabProtectionPolicyArgs {
    /**
     * This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
     * Expected value is 'MAB'.
     */
    backupManagementType: pulumi.Input<"MAB">;
    /**
     * Number of items associated with this policy.
     */
    protectedItemsCount?: pulumi.Input<number>;
    /**
     * ResourceGuard Operation Requests
     */
    resourceGuardOperationRequests?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Retention policy details.
     */
    retentionPolicy?: pulumi.Input<LongTermRetentionPolicyArgs | SimpleRetentionPolicyArgs>;
    /**
     * Backup schedule of backup policy.
     */
    schedulePolicy?: pulumi.Input<LogSchedulePolicyArgs | LongTermSchedulePolicyArgs | SimpleSchedulePolicyArgs | SimpleSchedulePolicyV2Args>;
}

/**
 * Monitoring Settings of the vault
 */
export interface MonitoringSettingsArgs {
    /**
     * Settings for Azure Monitor based alerts
     */
    azureMonitorAlertSettings?: pulumi.Input<AzureMonitorAlertSettingsArgs>;
    /**
     * Settings for classic alerts
     */
    classicAlertSettings?: pulumi.Input<ClassicAlertSettingsArgs>;
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
 * The Private Endpoint network resource that is linked to the Private Endpoint connection
 */
export interface PrivateEndpointArgs {
    /**
     * Gets or sets id
     */
    id?: pulumi.Input<string>;
}

/**
 * Private Endpoint Connection Response Properties
 */
export interface PrivateEndpointConnectionArgs {
    /**
     * Group Ids for the Private Endpoint
     */
    groupIds?: pulumi.Input<pulumi.Input<string | enums.VaultSubResourceType>[]>;
    /**
     * Gets or sets private endpoint associated with the private endpoint connection
     */
    privateEndpoint?: pulumi.Input<PrivateEndpointArgs>;
    /**
     * Gets or sets private link service connection state
     */
    privateLinkServiceConnectionState?: pulumi.Input<PrivateLinkServiceConnectionStateArgs>;
    /**
     * Gets or sets provisioning state of the private endpoint connection
     */
    provisioningState?: pulumi.Input<string | enums.ProvisioningState>;
}

/**
 * Private Link Service Connection State
 */
export interface PrivateLinkServiceConnectionStateArgs {
    /**
     * Gets or sets actions required
     */
    actionsRequired?: pulumi.Input<string>;
    /**
     * Gets or sets description
     */
    description?: pulumi.Input<string>;
    /**
     * Gets or sets the status
     */
    status?: pulumi.Input<string | enums.PrivateEndpointConnectionStatus>;
}

/**
 * Recovery plan A2A input.
 */
export interface RecoveryPlanA2AInputArgs {
    /**
     * Gets the Instance type.
     * Expected value is 'A2A'.
     */
    instanceType: pulumi.Input<"A2A">;
    /**
     * The primary extended location.
     */
    primaryExtendedLocation?: pulumi.Input<ExtendedLocationArgs>;
    /**
     * The primary zone.
     */
    primaryZone?: pulumi.Input<string>;
    /**
     * The recovery extended location.
     */
    recoveryExtendedLocation?: pulumi.Input<ExtendedLocationArgs>;
    /**
     * The recovery zone.
     */
    recoveryZone?: pulumi.Input<string>;
}

/**
 * Recovery plan action details.
 */
export interface RecoveryPlanActionArgs {
    /**
     * The action name.
     */
    actionName: pulumi.Input<string>;
    /**
     * The custom details.
     */
    customDetails: pulumi.Input<RecoveryPlanAutomationRunbookActionDetailsArgs | RecoveryPlanManualActionDetailsArgs | RecoveryPlanScriptActionDetailsArgs>;
    /**
     * The list of failover directions.
     */
    failoverDirections: pulumi.Input<pulumi.Input<string | enums.PossibleOperationsDirections>[]>;
    /**
     * The list of failover types.
     */
    failoverTypes: pulumi.Input<pulumi.Input<string | enums.ReplicationProtectedItemOperation>[]>;
}

/**
 * Recovery plan Automation runbook action details.
 */
export interface RecoveryPlanAutomationRunbookActionDetailsArgs {
    /**
     * The fabric location.
     */
    fabricLocation: pulumi.Input<string | enums.RecoveryPlanActionLocation>;
    /**
     * Gets the type of action details (see RecoveryPlanActionDetailsTypes enum for possible values).
     * Expected value is 'AutomationRunbookActionDetails'.
     */
    instanceType: pulumi.Input<"AutomationRunbookActionDetails">;
    /**
     * The runbook ARM Id.
     */
    runbookId?: pulumi.Input<string>;
    /**
     * The runbook timeout.
     */
    timeout?: pulumi.Input<string>;
}

/**
 * Recovery plan group details.
 */
export interface RecoveryPlanGroupArgs {
    /**
     * The end group actions.
     */
    endGroupActions?: pulumi.Input<pulumi.Input<RecoveryPlanActionArgs>[]>;
    /**
     * The group type.
     */
    groupType: pulumi.Input<string | enums.RecoveryPlanGroupType>;
    /**
     * The list of protected items.
     */
    replicationProtectedItems?: pulumi.Input<pulumi.Input<RecoveryPlanProtectedItemArgs>[]>;
    /**
     * The start group actions.
     */
    startGroupActions?: pulumi.Input<pulumi.Input<RecoveryPlanActionArgs>[]>;
}

/**
 * Recovery plan manual action details.
 */
export interface RecoveryPlanManualActionDetailsArgs {
    /**
     * The manual action description.
     */
    description?: pulumi.Input<string>;
    /**
     * Gets the type of action details (see RecoveryPlanActionDetailsTypes enum for possible values).
     * Expected value is 'ManualActionDetails'.
     */
    instanceType: pulumi.Input<"ManualActionDetails">;
}

/**
 * Recovery plan protected item.
 */
export interface RecoveryPlanProtectedItemArgs {
    /**
     * The ARM Id of the recovery plan protected item.
     */
    id?: pulumi.Input<string>;
    /**
     * The virtual machine Id.
     */
    virtualMachineId?: pulumi.Input<string>;
}

/**
 * Recovery plan script action details.
 */
export interface RecoveryPlanScriptActionDetailsArgs {
    /**
     * The fabric location.
     */
    fabricLocation: pulumi.Input<string | enums.RecoveryPlanActionLocation>;
    /**
     * Gets the type of action details (see RecoveryPlanActionDetailsTypes enum for possible values).
     * Expected value is 'ScriptActionDetails'.
     */
    instanceType: pulumi.Input<"ScriptActionDetails">;
    /**
     * The script path.
     */
    path: pulumi.Input<string>;
    /**
     * The script timeout.
     */
    timeout?: pulumi.Input<string>;
}

/**
 * Extended location of the resource.
 */
export interface RegisteredClusterNodesArgs {
    /**
     * The BIOS ID.
     */
    biosId?: pulumi.Input<string>;
    /**
     * The cluster node name.
     */
    clusterNodeFqdn?: pulumi.Input<string>;
    /**
     * A value indicating whether this represents virtual entity hosting all the shared disks.
     */
    isSharedDiskVirtualNode?: pulumi.Input<boolean>;
    /**
     * The machine ID.
     */
    machineId?: pulumi.Input<string>;
}

/**
 * Replication protection cluster custom data details.
 */
export interface ReplicationProtectionClusterPropertiesArgs {
    /**
     * The Current active location of the Protection cluster.
     */
    activeLocation?: pulumi.Input<string>;
    /**
     * The Agent cluster Id.
     */
    agentClusterId?: pulumi.Input<string>;
    /**
     * The allowed operations on the Replication protection cluster.
     */
    allowedOperations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A value indicating whether all nodes of the cluster are registered or not.
     */
    areAllClusterNodesRegistered?: pulumi.Input<boolean>;
    /**
     * The cluster FQDN.
     */
    clusterFqdn?: pulumi.Input<string>;
    /**
     * The List of cluster Node FQDNs.
     */
    clusterNodeFqdns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The List of Protected Item Id's.
     */
    clusterProtectedItemIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The registered node details.
     */
    clusterRegisteredNodes?: pulumi.Input<pulumi.Input<RegisteredClusterNodesArgs>[]>;
    /**
     * The current scenario.
     */
    currentScenario?: pulumi.Input<CurrentScenarioDetailsArgs>;
    /**
     * List of health errors.
     */
    healthErrors?: pulumi.Input<pulumi.Input<HealthErrorArgs>[]>;
    /**
     * The last successful failover time.
     */
    lastSuccessfulFailoverTime?: pulumi.Input<string>;
    /**
     * The last successful test failover time.
     */
    lastSuccessfulTestFailoverTime?: pulumi.Input<string>;
    /**
     * The name of Policy governing this PE.
     */
    policyFriendlyName?: pulumi.Input<string>;
    /**
     * The Policy Id.
     */
    policyId?: pulumi.Input<string>;
    /**
     * The friendly name of the primary fabric.
     */
    primaryFabricFriendlyName?: pulumi.Input<string>;
    /**
     * The fabric provider of the primary fabric.
     */
    primaryFabricProvider?: pulumi.Input<string>;
    /**
     * The name of primary protection container friendly name.
     */
    primaryProtectionContainerFriendlyName?: pulumi.Input<string>;
    /**
     * The type of protection cluster type.
     */
    protectionClusterType?: pulumi.Input<string>;
    /**
     * The protection status.
     */
    protectionState?: pulumi.Input<string>;
    /**
     * The protection state description.
     */
    protectionStateDescription?: pulumi.Input<string>;
    /**
     * The Replication cluster provider custom settings.
     */
    providerSpecificDetails?: pulumi.Input<A2AReplicationProtectionClusterDetailsArgs>;
    /**
     * The recovery container Id.
     */
    recoveryContainerId?: pulumi.Input<string>;
    /**
     * The friendly name of recovery fabric.
     */
    recoveryFabricFriendlyName?: pulumi.Input<string>;
    /**
     * The Arm Id of recovery fabric.
     */
    recoveryFabricId?: pulumi.Input<string>;
    /**
     * The name of recovery container friendly name.
     */
    recoveryProtectionContainerFriendlyName?: pulumi.Input<string>;
    /**
     * The consolidated protection health for the VM taking any issues with SRS as well as all the replication units associated with the VM's replication group into account. This is a string representation of the ProtectionHealth enumeration.
     */
    replicationHealth?: pulumi.Input<string>;
    /**
     * The shared disk properties.
     */
    sharedDiskProperties?: pulumi.Input<SharedDiskReplicationItemPropertiesArgs>;
    /**
     * The Test failover state.
     */
    testFailoverState?: pulumi.Input<string>;
    /**
     * The Test failover state description.
     */
    testFailoverStateDescription?: pulumi.Input<string>;
}

export interface ResourceGuardOperationDetailArgs {
    defaultResourceRequest?: pulumi.Input<string>;
    vaultCriticalOperation?: pulumi.Input<string>;
}

export interface ResourceGuardProxyBaseArgs {
    description?: pulumi.Input<string>;
    lastUpdatedTime?: pulumi.Input<string>;
    resourceGuardOperationDetails?: pulumi.Input<pulumi.Input<ResourceGuardOperationDetailArgs>[]>;
    resourceGuardResourceId: pulumi.Input<string>;
}

/**
 * Restore Settings  of the vault
 */
export interface RestoreSettingsArgs {
    /**
     * Settings for CrossSubscriptionRestore
     */
    crossSubscriptionRestoreSettings?: pulumi.Input<CrossSubscriptionRestoreSettingsArgs>;
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
 * Security profile input.
 */
export interface SecurityProfilePropertiesArgs {
    /**
     * A value indicating whether confidential compute encryption to be enabled.
     */
    targetVmConfidentialEncryption?: pulumi.Input<string | enums.SecurityConfiguration>;
    /**
     * A value indicating whether integrity monitoring to be enabled.
     */
    targetVmMonitoring?: pulumi.Input<string | enums.SecurityConfiguration>;
    /**
     * A value indicating whether secure boot to be enabled.
     */
    targetVmSecureBoot?: pulumi.Input<string | enums.SecurityConfiguration>;
    /**
     * The target VM security type.
     */
    targetVmSecurityType?: pulumi.Input<string | enums.SecurityType>;
    /**
     * A value indicating whether trusted platform module to be enabled.
     */
    targetVmTpm?: pulumi.Input<string | enums.SecurityConfiguration>;
}

/**
 * Security Settings of the vault
 */
export interface SecuritySettingsArgs {
    /**
     * Immutability Settings of a vault
     */
    immutabilitySettings?: pulumi.Input<ImmutabilitySettingsArgs>;
    /**
     * Soft delete Settings of a vault
     */
    softDeleteSettings?: pulumi.Input<SoftDeleteSettingsArgs>;
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
 * Shared Disk Replication item custom data details.
 */
export interface SharedDiskReplicationItemPropertiesArgs {
    /**
     * The Current active location of the PE.
     */
    activeLocation?: pulumi.Input<string>;
    /**
     * The allowed operations on the Replication protected item.
     */
    allowedOperations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The current scenario.
     */
    currentScenario?: pulumi.Input<CurrentScenarioDetailsArgs>;
    /**
     * List of health errors.
     */
    healthErrors?: pulumi.Input<pulumi.Input<HealthErrorArgs>[]>;
    /**
     * The protection state of shared disk.
     */
    protectionState?: pulumi.Input<string>;
    /**
     * The consolidated protection health for the VM taking any issues with SRS as well as all the replication units associated with the VM's replication group into account. This is a string representation of the ProtectionHealth enumeration.
     */
    replicationHealth?: pulumi.Input<string>;
    /**
     * The Replication provider custom settings.
     */
    sharedDiskProviderSpecificDetails?: pulumi.Input<A2ASharedDiskReplicationDetailsArgs>;
    /**
     * The tfo state of shared disk.
     */
    testFailoverState?: pulumi.Input<string>;
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
 * Identifies the unique system identifier for each Azure resource.
 */
export interface SkuArgs {
    /**
     * The sku capacity
     */
    capacity?: pulumi.Input<string>;
    /**
     * The sku family
     */
    family?: pulumi.Input<string>;
    /**
     * Name of SKU is RS0 (Recovery Services 0th version) and the tier is standard tier. They do not have affect on backend storage redundancy or any other vault settings. To manage storage redundancy, use the backupstorageconfig
     */
    name: pulumi.Input<string | enums.SkuName>;
    /**
     * The sku size
     */
    size?: pulumi.Input<string>;
    /**
     * The Sku tier.
     */
    tier?: pulumi.Input<string>;
}

/**
 * Snapshot Backup related fields for WorkloadType SaPHanaSystem
 */
export interface SnapshotBackupAdditionalDetailsArgs {
    instantRPDetails?: pulumi.Input<string>;
    instantRpRetentionRangeInDays?: pulumi.Input<number>;
    /**
     * User assigned managed identity details
     */
    userAssignedManagedIdentityDetails?: pulumi.Input<UserAssignedManagedIdentityDetailsArgs>;
}

/**
 * Soft delete Settings of vault
 */
export interface SoftDeleteSettingsArgs {
    enhancedSecurityState?: pulumi.Input<string | enums.EnhancedSecurityState>;
    /**
     * Soft delete retention period in days
     */
    softDeleteRetentionPeriodInDays?: pulumi.Input<number>;
    softDeleteState?: pulumi.Input<string | enums.SoftDeleteState>;
}

/**
 * Storage mapping input properties.
 */
export interface StorageMappingInputPropertiesArgs {
    /**
     * The ID of the storage object.
     */
    targetStorageClassificationId?: pulumi.Input<string>;
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
     * Snapshot Backup related fields for WorkloadType SaPHanaSystem
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
 * User assigned managed identity properties
 */
export interface UserAssignedIdentityPropertiesArgs {
    /**
     * The client ID of the assigned identity.
     */
    clientId?: pulumi.Input<string>;
    /**
     * The principal ID of the assigned identity.
     */
    principalId?: pulumi.Input<string>;
}

/**
 * User assigned managed identity details
 */
export interface UserAssignedManagedIdentityDetailsArgs {
    /**
     * The ARM id of the assigned identity.
     */
    identityArmId?: pulumi.Input<string>;
    /**
     * The name of the assigned identity.
     */
    identityName?: pulumi.Input<string>;
    /**
     * User assigned managed identity properties
     */
    userAssignedIdentityProperties?: pulumi.Input<UserAssignedIdentityPropertiesArgs>;
}

/**
 * Resource tag input.
 */
export interface UserCreatedResourceTagArgs {
    /**
     * The tag name. Please read for more information: https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources#limitations
     */
    tagName?: pulumi.Input<string>;
    /**
     * The tag value. Please read her for more information: https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources#limitations
     */
    tagValue?: pulumi.Input<string>;
}

/**
 * VMwareCbt container mapping input.
 */
export interface VMwareCbtContainerMappingInputArgs {
    /**
     * The class type.
     * Expected value is 'VMwareCbt'.
     */
    instanceType: pulumi.Input<"VMwareCbt">;
    /**
     * The target key vault ARM Id.
     */
    keyVaultId?: pulumi.Input<string>;
    /**
     * The target key vault URL.
     */
    keyVaultUri?: pulumi.Input<string>;
    /**
     * The secret name of the service bus connection string.
     */
    serviceBusConnectionStringSecretName?: pulumi.Input<string>;
    /**
     * The storage account ARM Id.
     */
    storageAccountId: pulumi.Input<string>;
    /**
     * The secret name of the storage account.
     */
    storageAccountSasSecretName?: pulumi.Input<string>;
    /**
     * The target location.
     */
    targetLocation: pulumi.Input<string>;
}

/**
 * VMwareCbt disk input.
 */
export interface VMwareCbtDiskInputArgs {
    /**
     * The DiskEncryptionSet ARM Id.
     */
    diskEncryptionSetId?: pulumi.Input<string>;
    /**
     * The disk Id.
     */
    diskId: pulumi.Input<string>;
    /**
     * The disk type.
     */
    diskType?: pulumi.Input<string | enums.DiskAccountType>;
    /**
     * A value indicating whether the disk is the OS disk.
     */
    isOSDisk: pulumi.Input<string>;
    /**
     * The log storage account ARM Id.
     */
    logStorageAccountId: pulumi.Input<string>;
    /**
     * The key vault secret name of the log storage account.
     */
    logStorageAccountSasSecretName: pulumi.Input<string>;
    /**
     * The logical sector size (in bytes), 512 by default.
     */
    sectorSizeInBytes?: pulumi.Input<number>;
}

/**
 * VMwareCbt specific enable migration input.
 */
export interface VMwareCbtEnableMigrationInputArgs {
    /**
     * The confidential VM key vault Id for ADE installation.
     */
    confidentialVmKeyVaultId?: pulumi.Input<string>;
    /**
     * The data mover run as account Id.
     */
    dataMoverRunAsAccountId: pulumi.Input<string>;
    /**
     * The disks to include list.
     */
    disksToInclude: pulumi.Input<pulumi.Input<VMwareCbtDiskInputArgs>[]>;
    /**
     * The class type.
     * Expected value is 'VMwareCbt'.
     */
    instanceType: pulumi.Input<"VMwareCbt">;
    /**
     * License type.
     */
    licenseType?: pulumi.Input<string | enums.LicenseType>;
    /**
     * The license type for Linux VM's.
     */
    linuxLicenseType?: pulumi.Input<string | enums.LinuxLicenseType>;
    /**
     * A value indicating whether auto resync is to be done.
     */
    performAutoResync?: pulumi.Input<string>;
    /**
     * A value indicating whether bulk SQL RP registration to be done.
     */
    performSqlBulkRegistration?: pulumi.Input<string>;
    /**
     * The tags for the seed disks.
     */
    seedDiskTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The snapshot run as account Id.
     */
    snapshotRunAsAccountId: pulumi.Input<string>;
    /**
     * The SQL Server license type.
     */
    sqlServerLicenseType?: pulumi.Input<string | enums.SqlServerLicenseType>;
    /**
     * The target availability set ARM Id.
     */
    targetAvailabilitySetId?: pulumi.Input<string>;
    /**
     * The target availability zone.
     */
    targetAvailabilityZone?: pulumi.Input<string>;
    /**
     * The target boot diagnostics storage account ARM Id.
     */
    targetBootDiagnosticsStorageAccountId?: pulumi.Input<string>;
    /**
     * The tags for the target disks.
     */
    targetDiskTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The target network ARM Id.
     */
    targetNetworkId: pulumi.Input<string>;
    /**
     * The tags for the target NICs.
     */
    targetNicTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The target proximity placement group ARM Id.
     */
    targetProximityPlacementGroupId?: pulumi.Input<string>;
    /**
     * The target resource group ARM Id.
     */
    targetResourceGroupId: pulumi.Input<string>;
    /**
     * The target subnet name.
     */
    targetSubnetName?: pulumi.Input<string>;
    /**
     * The target VM name.
     */
    targetVmName?: pulumi.Input<string>;
    /**
     * The target VM security profile.
     */
    targetVmSecurityProfile?: pulumi.Input<VMwareCbtSecurityProfilePropertiesArgs>;
    /**
     * The target VM size.
     */
    targetVmSize?: pulumi.Input<string>;
    /**
     * The target VM tags.
     */
    targetVmTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The selected test network ARM Id.
     */
    testNetworkId?: pulumi.Input<string>;
    /**
     * The selected test subnet name.
     */
    testSubnetName?: pulumi.Input<string>;
    /**
     * The OS name selected by user.
     */
    userSelectedOSName?: pulumi.Input<string>;
    /**
     * The ARM Id of the VM discovered in VMware.
     */
    vmwareMachineId: pulumi.Input<string>;
}

/**
 * VMware Cbt policy creation input.
 */
export interface VMwareCbtPolicyCreationInputArgs {
    /**
     * The app consistent snapshot frequency (in minutes).
     */
    appConsistentFrequencyInMinutes?: pulumi.Input<number>;
    /**
     * The crash consistent snapshot frequency (in minutes).
     */
    crashConsistentFrequencyInMinutes?: pulumi.Input<number>;
    /**
     * The class type.
     * Expected value is 'VMwareCbt'.
     */
    instanceType: pulumi.Input<"VMwareCbt">;
    /**
     * The duration in minutes until which the recovery points need to be stored.
     */
    recoveryPointHistoryInMinutes?: pulumi.Input<number>;
}

/**
 * VMwareCbt security profile input.
 */
export interface VMwareCbtSecurityProfilePropertiesArgs {
    /**
     * A value indicating whether confidential compute encryption to be enabled.
     */
    isTargetVmConfidentialEncryptionEnabled?: pulumi.Input<string>;
    /**
     * A value indicating whether integrity monitoring to be enabled.
     */
    isTargetVmIntegrityMonitoringEnabled?: pulumi.Input<string>;
    /**
     * A value indicating whether secure boot to be enabled.
     */
    isTargetVmSecureBootEnabled?: pulumi.Input<string>;
    /**
     * A value indicating whether trusted platform module to be enabled.
     */
    isTargetVmTpmEnabled?: pulumi.Input<string>;
    /**
     * The target VM security type.
     */
    targetVmSecurityType?: pulumi.Input<string | enums.SecurityType>;
}

/**
 * VMwareV2 fabric provider specific settings.
 */
export interface VMwareV2FabricCreationInputArgs {
    /**
     * Gets the class type.
     * Expected value is 'VMwareV2'.
     */
    instanceType: pulumi.Input<"VMwareV2">;
    /**
     * The ARM Id of the migration solution.
     */
    migrationSolutionId: pulumi.Input<string>;
    /**
     * The ARM Id of the physical site.
     */
    physicalSiteId?: pulumi.Input<string>;
    /**
     * The ARM Id of the VMware site.
     */
    vmwareSiteId?: pulumi.Input<string>;
}

/**
 * Properties of the vault.
 */
export interface VaultPropertiesArgs {
    /**
     * Customer Managed Key details of the resource.
     */
    encryption?: pulumi.Input<VaultPropertiesEncryptionArgs>;
    /**
     * Monitoring Settings of the vault
     */
    monitoringSettings?: pulumi.Input<MonitoringSettingsArgs>;
    /**
     * property to enable or disable resource provider inbound network traffic from public clients
     */
    publicNetworkAccess?: pulumi.Input<string | enums.PublicNetworkAccess>;
    /**
     * The redundancy Settings of a Vault
     */
    redundancySettings?: pulumi.Input<VaultPropertiesRedundancySettingsArgs>;
    /**
     * ResourceGuardOperationRequests on which LAC check will be performed
     */
    resourceGuardOperationRequests?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Restore Settings of the vault
     */
    restoreSettings?: pulumi.Input<RestoreSettingsArgs>;
    /**
     * Security Settings of the vault
     */
    securitySettings?: pulumi.Input<SecuritySettingsArgs>;
}

/**
 * Customer Managed Key details of the resource.
 */
export interface VaultPropertiesEncryptionArgs {
    /**
     * Enabling/Disabling the Double Encryption state
     */
    infrastructureEncryption?: pulumi.Input<string | enums.InfrastructureEncryptionState>;
    /**
     * The details of the identity used for CMK
     */
    kekIdentity?: pulumi.Input<CmkKekIdentityArgs>;
    /**
     * The properties of the Key Vault which hosts CMK
     */
    keyVaultProperties?: pulumi.Input<CmkKeyVaultPropertiesArgs>;
}

/**
 * The redundancy Settings of a Vault
 */
export interface VaultPropertiesRedundancySettingsArgs {
    /**
     * Flag to show if Cross Region Restore is enabled on the Vault or not
     */
    crossRegionRestore?: pulumi.Input<string | enums.CrossRegionRestore>;
    /**
     * The storage redundancy setting of a vault
     */
    standardTierStorageRedundancy?: pulumi.Input<string | enums.StandardTierStorageRedundancy>;
}

/**
 * Vault retention policy for AzureFileShare
 */
export interface VaultRetentionPolicyArgs {
    snapshotRetentionInDays: pulumi.Input<number>;
    /**
     * Base class for retention policy.
     */
    vaultRetention: pulumi.Input<LongTermRetentionPolicyArgs | SimpleRetentionPolicyArgs>;
}

/**
 * Create network mappings input properties/behavior specific to Vmm to Azure Network mapping.
 */
export interface VmmToAzureCreateNetworkMappingInputArgs {
    /**
     * The instance type.
     * Expected value is 'VmmToAzure'.
     */
    instanceType: pulumi.Input<"VmmToAzure">;
}

/**
 * Create network mappings input properties/behavior specific to vmm to vmm Network mapping.
 */
export interface VmmToVmmCreateNetworkMappingInputArgs {
    /**
     * The instance type.
     * Expected value is 'VmmToVmm'.
     */
    instanceType: pulumi.Input<"VmmToVmm">;
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

export interface WeeklyScheduleArgs {
    scheduleRunDays?: pulumi.Input<pulumi.Input<enums.DayOfWeek>[]>;
    /**
     * List of times of day this schedule has to be run.
     */
    scheduleRunTimes?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Details of an inquired protectable item.
 */
export interface WorkloadInquiryDetailsArgs {
    /**
     * Inquiry validation such as permissions and other backup validations.
     */
    inquiryValidation?: pulumi.Input<InquiryValidationArgs>;
    /**
     * Contains the protectable item Count inside this Container.
     */
    itemCount?: pulumi.Input<number>;
    /**
     * Type of the Workload such as SQL, Oracle etc.
     */
    type?: pulumi.Input<string>;
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
