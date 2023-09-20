import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * A2A provider specific settings.
     */
    export interface A2ACrossClusterMigrationReplicationDetailsResponse {
        /**
         * The fabric specific object Id of the virtual machine.
         */
        fabricObjectId?: string;
        /**
         * Gets the Instance type.
         * Expected value is 'A2ACrossClusterMigration'.
         */
        instanceType: "A2ACrossClusterMigration";
        /**
         * An id associated with the PE that survives actions like switch protection which change the backing PE/CPE objects internally.The lifecycle id gets carried forward to have a link/continuity in being able to have an Id that denotes the "same" protected item even though other internal Ids/ARM Id might be changing.
         */
        lifecycleId?: string;
        /**
         * The type of operating system.
         */
        osType?: string;
        /**
         * Primary fabric location.
         */
        primaryFabricLocation?: string;
        /**
         * The protection state for the vm.
         */
        vmProtectionState?: string;
        /**
         * The protection state description for the vm.
         */
        vmProtectionStateDescription?: string;
    }

    /**
     * ExtendedLocation details data.
     */
    export interface A2AExtendedLocationDetailsResponse {
        /**
         * The primary ExtendedLocation.
         */
        primaryExtendedLocation?: ExtendedLocationResponse;
        /**
         * The recovery ExtendedLocation.
         */
        recoveryExtendedLocation?: ExtendedLocationResponse;
    }

    /**
     * ExtendedLocation details data.
     */
    export interface A2AFabricSpecificLocationDetailsResponse {
        /**
         * The initial primary ExtendedLocation.
         */
        initialPrimaryExtendedLocation?: ExtendedLocationResponse;
        /**
         * Initial primary fabric location info.
         */
        initialPrimaryFabricLocation?: string;
        /**
         * The initial source zone info.
         */
        initialPrimaryZone?: string;
        /**
         * The initial recovery ExtendedLocation.
         */
        initialRecoveryExtendedLocation?: ExtendedLocationResponse;
        /**
         * The initial recovery fabric location info.
         */
        initialRecoveryFabricLocation?: string;
        /**
         * The initial target zone info.
         */
        initialRecoveryZone?: string;
        /**
         * The primary ExtendedLocation.
         */
        primaryExtendedLocation?: ExtendedLocationResponse;
        /**
         * Primary fabric location info.
         */
        primaryFabricLocation?: string;
        /**
         * Source zone info.
         */
        primaryZone?: string;
        /**
         * The recovery ExtendedLocation.
         */
        recoveryExtendedLocation?: ExtendedLocationResponse;
        /**
         * The recovery fabric location info.
         */
        recoveryFabricLocation?: string;
        /**
         * The target zone info.
         */
        recoveryZone?: string;
    }

    /**
     * A2A specific policy details.
     */
    export interface A2APolicyDetailsResponse {
        /**
         * The app consistent snapshot frequency in minutes.
         */
        appConsistentFrequencyInMinutes?: number;
        /**
         * The crash consistent snapshot frequency in minutes.
         */
        crashConsistentFrequencyInMinutes?: number;
        /**
         * Gets the class type. Overridden in derived classes.
         * Expected value is 'A2A'.
         */
        instanceType: "A2A";
        /**
         * A value indicating whether multi-VM sync has to be enabled.
         */
        multiVmSyncStatus?: string;
        /**
         * The duration in minutes until which the recovery points need to be stored.
         */
        recoveryPointHistory?: number;
        /**
         * The recovery point threshold in minutes.
         */
        recoveryPointThresholdInMinutes?: number;
    }

    /**
     * A2A protected disk details.
     */
    export interface A2AProtectedDiskDetailsResponse {
        /**
         * The disk level operations list.
         */
        allowedDiskLevelOperation?: string[];
        /**
         * The data pending at source virtual machine in MB.
         */
        dataPendingAtSourceAgentInMB?: number;
        /**
         * The data pending for replication in MB at staging account.
         */
        dataPendingInStagingStorageAccountInMB?: number;
        /**
         * The KeyVault resource id for secret (BEK).
         */
        dekKeyVaultArmId?: string;
        /**
         * The disk capacity in bytes.
         */
        diskCapacityInBytes?: number;
        /**
         * The disk name.
         */
        diskName?: string;
        /**
         * The disk state.
         */
        diskState?: string;
        /**
         * The type of disk.
         */
        diskType?: string;
        /**
         * The disk uri.
         */
        diskUri?: string;
        /**
         * The failover name for the managed disk.
         */
        failoverDiskName?: string;
        /**
         * A value indicating whether vm has encrypted os disk or not.
         */
        isDiskEncrypted?: boolean;
        /**
         * A value indicating whether disk key got encrypted or not.
         */
        isDiskKeyEncrypted?: boolean;
        /**
         * The KeyVault resource id for key (KEK).
         */
        kekKeyVaultArmId?: string;
        /**
         * The key URL / identifier (KEK).
         */
        keyIdentifier?: string;
        /**
         * The type of the monitoring job. The progress is contained in MonitoringPercentageCompletion property.
         */
        monitoringJobType?: string;
        /**
         * The percentage of the monitoring job. The type of the monitoring job is defined by MonitoringJobType property.
         */
        monitoringPercentageCompletion?: number;
        /**
         * The primary disk storage account.
         */
        primaryDiskAzureStorageAccountId?: string;
        /**
         * The primary staging storage account.
         */
        primaryStagingAzureStorageAccountId?: string;
        /**
         * The recovery disk storage account.
         */
        recoveryAzureStorageAccountId?: string;
        /**
         * Recovery disk uri.
         */
        recoveryDiskUri?: string;
        /**
         * A value indicating whether resync is required for this disk.
         */
        resyncRequired?: boolean;
        /**
         * The secret URL / identifier (BEK).
         */
        secretIdentifier?: string;
        /**
         * The test failover name for the managed disk.
         */
        tfoDiskName?: string;
    }

    /**
     * A2A protected managed disk details.
     */
    export interface A2AProtectedManagedDiskDetailsResponse {
        /**
         * The disk level operations list.
         */
        allowedDiskLevelOperation?: string[];
        /**
         * The data pending at source virtual machine in MB.
         */
        dataPendingAtSourceAgentInMB?: number;
        /**
         * The data pending for replication in MB at staging account.
         */
        dataPendingInStagingStorageAccountInMB?: number;
        /**
         * The KeyVault resource id for secret (BEK).
         */
        dekKeyVaultArmId?: string;
        /**
         * The disk capacity in bytes.
         */
        diskCapacityInBytes?: number;
        /**
         * The managed disk Arm id.
         */
        diskId?: string;
        /**
         * The disk name.
         */
        diskName?: string;
        /**
         * The disk state.
         */
        diskState?: string;
        /**
         * The type of disk.
         */
        diskType?: string;
        /**
         * The failover name for the managed disk.
         */
        failoverDiskName?: string;
        /**
         * A value indicating whether vm has encrypted os disk or not.
         */
        isDiskEncrypted?: boolean;
        /**
         * A value indicating whether disk key got encrypted or not.
         */
        isDiskKeyEncrypted?: boolean;
        /**
         * The KeyVault resource id for key (KEK).
         */
        kekKeyVaultArmId?: string;
        /**
         * The key URL / identifier (KEK).
         */
        keyIdentifier?: string;
        /**
         * The type of the monitoring job. The progress is contained in MonitoringPercentageCompletion property.
         */
        monitoringJobType?: string;
        /**
         * The percentage of the monitoring job. The type of the monitoring job is defined by MonitoringJobType property.
         */
        monitoringPercentageCompletion?: number;
        /**
         * The primary disk encryption set Id.
         */
        primaryDiskEncryptionSetId?: string;
        /**
         * The primary staging storage account.
         */
        primaryStagingAzureStorageAccountId?: string;
        /**
         * The recovery disk encryption set Id.
         */
        recoveryDiskEncryptionSetId?: string;
        /**
         * Recovery original target disk Arm Id.
         */
        recoveryOrignalTargetDiskId?: string;
        /**
         * The replica disk type. Its an optional value and will be same as source disk type if not user provided.
         */
        recoveryReplicaDiskAccountType?: string;
        /**
         * Recovery replica disk Arm Id.
         */
        recoveryReplicaDiskId?: string;
        /**
         * The recovery disk resource group Arm Id.
         */
        recoveryResourceGroupId?: string;
        /**
         * The target disk type after failover. Its an optional value and will be same as source disk type if not user provided.
         */
        recoveryTargetDiskAccountType?: string;
        /**
         * Recovery target disk Arm Id.
         */
        recoveryTargetDiskId?: string;
        /**
         * A value indicating whether resync is required for this disk.
         */
        resyncRequired?: boolean;
        /**
         * The secret URL / identifier (BEK).
         */
        secretIdentifier?: string;
        /**
         * The test failover name for the managed disk.
         */
        tfoDiskName?: string;
    }

    /**
     * A2A provider specific settings.
     */
    export interface A2AProtectionContainerMappingDetailsResponse {
        /**
         * A value indicating whether the auto update is enabled.
         */
        agentAutoUpdateStatus?: string;
        /**
         * The automation account arm id.
         */
        automationAccountArmId?: string;
        /**
         * A value indicating the type authentication to use for automation Account.
         */
        automationAccountAuthenticationType?: string;
        /**
         * Gets the class type. Overridden in derived classes.
         * Expected value is 'A2A'.
         */
        instanceType: "A2A";
        /**
         * The job schedule arm name.
         */
        jobScheduleName?: string;
        /**
         * The schedule arm name.
         */
        scheduleName?: string;
    }
    /**
     * a2aprotectionContainerMappingDetailsResponseProvideDefaults sets the appropriate defaults for A2AProtectionContainerMappingDetailsResponse
     */
    export function a2aprotectionContainerMappingDetailsResponseProvideDefaults(val: A2AProtectionContainerMappingDetailsResponse): A2AProtectionContainerMappingDetailsResponse {
        return {
            ...val,
            automationAccountAuthenticationType: (val.automationAccountAuthenticationType) ?? "RunAsAccount",
        };
    }

    /**
     * A2A provider specific settings.
     */
    export interface A2AReplicationDetailsResponse {
        /**
         * Agent certificate expiry date.
         */
        agentCertificateExpiryDate: string;
        /**
         * Agent expiry date.
         */
        agentExpiryDate?: string;
        /**
         * The agent version.
         */
        agentVersion?: string;
        /**
         * A value indicating whether the auto protection is enabled.
         */
        autoProtectionOfDataDisk?: string;
        /**
         * A value indicating the churn option selected by user.
         */
        churnOptionSelected: string;
        /**
         * The fabric specific object Id of the virtual machine.
         */
        fabricObjectId?: string;
        /**
         * The initial primary extended location.
         */
        initialPrimaryExtendedLocation?: ExtendedLocationResponse;
        /**
         * The initial primary fabric location.
         */
        initialPrimaryFabricLocation: string;
        /**
         * The initial primary availability zone.
         */
        initialPrimaryZone: string;
        /**
         * The initial recovery extended location.
         */
        initialRecoveryExtendedLocation?: ExtendedLocationResponse;
        /**
         * The initial recovery fabric location.
         */
        initialRecoveryFabricLocation: string;
        /**
         * The initial recovery availability zone.
         */
        initialRecoveryZone: string;
        /**
         * Gets the Instance type.
         * Expected value is 'A2A'.
         */
        instanceType: "A2A";
        /**
         * A value indicating whether agent certificate update is required.
         */
        isReplicationAgentCertificateUpdateRequired?: boolean;
        /**
         * A value indicating whether replication agent update is required.
         */
        isReplicationAgentUpdateRequired?: boolean;
        /**
         * The last heartbeat received from the source server.
         */
        lastHeartbeat?: string;
        /**
         * The time (in UTC) when the last RPO value was calculated by Protection Service.
         */
        lastRpoCalculatedTime?: string;
        /**
         * An id associated with the PE that survives actions like switch protection which change the backing PE/CPE objects internally.The lifecycle id gets carried forward to have a link/continuity in being able to have an Id that denotes the "same" protected item even though other internal Ids/ARM Id might be changing.
         */
        lifecycleId?: string;
        /**
         * The management Id.
         */
        managementId?: string;
        /**
         * The type of the monitoring job. The progress is contained in MonitoringPercentageCompletion property.
         */
        monitoringJobType?: string;
        /**
         * The percentage of the monitoring job. The type of the monitoring job is defined by MonitoringJobType property.
         */
        monitoringPercentageCompletion?: number;
        /**
         * Whether Multi VM group is auto created or specified by user.
         */
        multiVmGroupCreateOption?: string;
        /**
         * The multi vm group Id.
         */
        multiVmGroupId?: string;
        /**
         * The multi vm group name.
         */
        multiVmGroupName?: string;
        /**
         * The type of operating system.
         */
        osType?: string;
        /**
         * The primary availability zone.
         */
        primaryAvailabilityZone?: string;
        /**
         * The primary Extended Location.
         */
        primaryExtendedLocation?: ExtendedLocationResponse;
        /**
         * Primary fabric location.
         */
        primaryFabricLocation?: string;
        /**
         * The list of protected disks.
         */
        protectedDisks?: A2AProtectedDiskDetailsResponse[];
        /**
         * The list of protected managed disks.
         */
        protectedManagedDisks?: A2AProtectedManagedDiskDetailsResponse[];
        /**
         * The recovery availability set.
         */
        recoveryAvailabilitySet?: string;
        /**
         * The recovery availability zone.
         */
        recoveryAvailabilityZone?: string;
        /**
         * The recovery azure generation.
         */
        recoveryAzureGeneration: string;
        /**
         * The recovery resource group.
         */
        recoveryAzureResourceGroupId?: string;
        /**
         * The name of recovery virtual machine.
         */
        recoveryAzureVMName?: string;
        /**
         * The size of recovery virtual machine.
         */
        recoveryAzureVMSize?: string;
        /**
         * The recovery boot diagnostic storage account Arm Id.
         */
        recoveryBootDiagStorageAccountId?: string;
        /**
         * The recovery capacity reservation group Id.
         */
        recoveryCapacityReservationGroupId?: string;
        /**
         * The recovery cloud service.
         */
        recoveryCloudService?: string;
        /**
         * The recovery Extended Location.
         */
        recoveryExtendedLocation?: ExtendedLocationResponse;
        /**
         * The recovery fabric location.
         */
        recoveryFabricLocation?: string;
        /**
         * The recovery fabric object Id.
         */
        recoveryFabricObjectId?: string;
        /**
         * The recovery proximity placement group Id.
         */
        recoveryProximityPlacementGroupId?: string;
        /**
         * The recovery virtual machine scale set id.
         */
        recoveryVirtualMachineScaleSetId?: string;
        /**
         * The last RPO value in seconds.
         */
        rpoInSeconds?: number;
        /**
         * The recovery virtual network.
         */
        selectedRecoveryAzureNetworkId?: string;
        /**
         * The test failover virtual network.
         */
        selectedTfoAzureNetworkId?: string;
        /**
         * The test failover fabric object Id.
         */
        testFailoverRecoveryFabricObjectId?: string;
        /**
         * The test failover vm name.
         */
        tfoAzureVMName?: string;
        /**
         * The list of unprotected disks.
         */
        unprotectedDisks?: A2AUnprotectedDiskDetailsResponse[];
        /**
         * The encryption type of the VM.
         */
        vmEncryptionType: string;
        /**
         * The virtual machine nic details.
         */
        vmNics?: VMNicDetailsResponse[];
        /**
         * The protection state for the vm.
         */
        vmProtectionState?: string;
        /**
         * The protection state description for the vm.
         */
        vmProtectionStateDescription?: string;
        /**
         * The synced configuration details.
         */
        vmSyncedConfigDetails?: AzureToAzureVmSyncedConfigDetailsResponse;
    }

    /**
     * A2A unprotected disk details.
     */
    export interface A2AUnprotectedDiskDetailsResponse {
        /**
         * A value indicating whether the disk auto protection is enabled.
         */
        diskAutoProtectionStatus?: string;
        /**
         * The source lun Id for the data disk.
         */
        diskLunId?: number;
    }

    /**
     * Zone details data.
     */
    export interface A2AZoneDetailsResponse {
        /**
         * Source zone info.
         */
        source?: string;
        /**
         * The target zone info.
         */
        target?: string;
    }

    /**
     * Agent details.
     */
    export interface AgentDetailsResponse {
        /**
         * The Id of the agent running on the server.
         */
        agentId: string;
        /**
         * The machine BIOS Id.
         */
        biosId: string;
        /**
         * The disks.
         */
        disks: AgentDiskDetailsResponse[];
        /**
         * The machine FQDN.
         */
        fqdn: string;
        /**
         * The Id of the machine to which the agent is registered.
         */
        machineId: string;
    }

    /**
     * Agent disk details.
     */
    export interface AgentDiskDetailsResponse {
        /**
         * The disk capacity in bytes.
         */
        capacityInBytes: number;
        /**
         * The disk Id.
         */
        diskId: string;
        /**
         * The disk name.
         */
        diskName: string;
        /**
         * A value indicating whether the disk is the OS disk.
         */
        isOSDisk: string;
        /**
         * The lun of disk.
         */
        lunId: number;
    }

    /**
     * Appliance details of the migration item.
     */
    export interface ApplianceMonitoringDetailsResponse {
        /**
         * The appliance CPU details.
         */
        cpuDetails: ApplianceResourceDetailsResponse;
        /**
         * The appliance datastore snapshot details.
         */
        datastoreSnapshot: DataStoreUtilizationDetailsResponse[];
        /**
         * The disk replication details.
         */
        disksReplicationDetails: ApplianceResourceDetailsResponse;
        /**
         * The ESXi NFC buffer details.
         */
        esxiNfcBuffer: ApplianceResourceDetailsResponse;
        /**
         * The appliance network bandwidth details.
         */
        networkBandwidth: ApplianceResourceDetailsResponse;
        /**
         * The appliance RAM details.
         */
        ramDetails: ApplianceResourceDetailsResponse;
    }

    /**
     * Details of the appliance resource.
     */
    export interface ApplianceResourceDetailsResponse {
        /**
         * A value indicating the total capacity of appliance resource.
         */
        capacity: number;
        /**
         * A value indicating the utilization percentage by gateway agent on appliance.
         */
        processUtilization: number;
        /**
         * A value indicating the status of appliance resource.
         */
        status: string;
        /**
         * A value indicating the total utilization percentage for all processes on the appliance.
         */
        totalUtilization: number;
    }

    /**
     * Azure Fabric Specific Details.
     */
    export interface AzureFabricSpecificDetailsResponse {
        /**
         * The container Ids for the Azure fabric.
         */
        containerIds?: string[];
        /**
         * The ExtendedLocations.
         */
        extendedLocations?: A2AExtendedLocationDetailsResponse[];
        /**
         * Gets the class type. Overridden in derived classes.
         * Expected value is 'Azure'.
         */
        instanceType: "Azure";
        /**
         * The Location for the Azure fabric.
         */
        location?: string;
        /**
         * The location details.
         */
        locationDetails?: A2AFabricSpecificLocationDetailsResponse[];
        /**
         * The zones.
         */
        zones?: A2AZoneDetailsResponse[];
    }

    /**
     * A2A Network Mapping fabric specific settings.
     */
    export interface AzureToAzureNetworkMappingSettingsResponse {
        /**
         * Gets the Instance type.
         * Expected value is 'AzureToAzure'.
         */
        instanceType: "AzureToAzure";
        /**
         * The primary fabric location.
         */
        primaryFabricLocation?: string;
        /**
         * The recovery fabric location.
         */
        recoveryFabricLocation?: string;
    }

    /**
     * Azure to Azure VM synced configuration details.
     */
    export interface AzureToAzureVmSyncedConfigDetailsResponse {
        /**
         * The Azure VM input endpoints.
         */
        inputEndpoints?: InputEndpointResponse[];
        /**
         * The Azure VM tags.
         */
        tags?: {[key: string]: string};
    }

    /**
     * Disk details for E2A provider.
     */
    export interface AzureVmDiskDetailsResponse {
        /**
         * The custom target Azure disk name.
         */
        customTargetDiskName?: string;
        /**
         * The DiskEncryptionSet ARM ID.
         */
        diskEncryptionSetId?: string;
        /**
         * The disk resource id.
         */
        diskId?: string;
        /**
         * Ordinal\LunId of the disk for the Azure VM.
         */
        lunId?: string;
        /**
         * Max side in MB.
         */
        maxSizeMB?: string;
        /**
         * Blob uri of the Azure disk.
         */
        targetDiskLocation?: string;
        /**
         * The target Azure disk name.
         */
        targetDiskName?: string;
        /**
         * The VHD id.
         */
        vhdId?: string;
        /**
         * VHD name.
         */
        vhdName?: string;
        /**
         * VHD type.
         */
        vhdType?: string;
    }

    /**
     * Critical past job details of the migration item.
     */
    export interface CriticalJobHistoryDetailsResponse {
        /**
         * The ARM Id of the job being executed.
         */
        jobId: string;
        /**
         * The job name.
         */
        jobName: string;
        /**
         * The job state.
         */
        jobStatus: string;
        /**
         * The start time of the job.
         */
        startTime: string;
    }

    /**
     * Current job details of the migration item.
     */
    export interface CurrentJobDetailsResponse {
        /**
         * The ARM Id of the job being executed.
         */
        jobId: string;
        /**
         * The job name.
         */
        jobName: string;
        /**
         * The start time of the job.
         */
        startTime: string;
    }

    /**
     * Current scenario details of the protected entity.
     */
    export interface CurrentScenarioDetailsResponse {
        /**
         * ARM Id of the job being executed.
         */
        jobId?: string;
        /**
         * Scenario name.
         */
        scenarioName?: string;
        /**
         * Start time of the workflow.
         */
        startTime?: string;
    }

    /**
     * The datastore details of the MT.
     */
    export interface DataStoreResponse {
        /**
         * The capacity of data store in GBs.
         */
        capacity?: string;
        /**
         * The free space of data store in GBs.
         */
        freeSpace?: string;
        /**
         * The symbolic name of data store.
         */
        symbolicName?: string;
        /**
         * The type of data store.
         */
        type?: string;
        /**
         * The uuid of data store.
         */
        uuid?: string;
    }

    /**
     * Details of the appliance resource.
     */
    export interface DataStoreUtilizationDetailsResponse {
        /**
         * The datastore name.
         */
        dataStoreName: string;
        /**
         * The total snapshots created for server migration in the datastore.
         */
        totalSnapshotsCreated: number;
        /**
         * The total count of snapshots supported by the datastore.
         */
        totalSnapshotsSupported: number;
    }

    /**
     * Onprem disk details data.
     */
    export interface DiskDetailsResponse {
        /**
         * The hard disk max size in MB.
         */
        maxSizeMB?: number;
        /**
         * The VHD Id.
         */
        vhdId?: string;
        /**
         * The VHD name.
         */
        vhdName?: string;
        /**
         * The type of the volume.
         */
        vhdType?: string;
    }

    /**
     * DRA details.
     */
    export interface DraDetailsResponse {
        /**
         * The DRA Bios Id.
         */
        biosId: string;
        /**
         * The count of protected items which are protected in forward direction.
         */
        forwardProtectedItemCount: number;
        /**
         * The health.
         */
        health: string;
        /**
         * The health errors.
         */
        healthErrors: HealthErrorResponse[];
        /**
         * The DRA Id.
         */
        id: string;
        /**
         * The last heartbeat received from the DRA.
         */
        lastHeartbeatUtc: string;
        /**
         * The DRA name.
         */
        name: string;
        /**
         * The count of protected items which are protected in reverse direction.
         */
        reverseProtectedItemCount: number;
        /**
         * The version.
         */
        version: string;
    }

    /**
     * Encryption details for the fabric.
     */
    export interface EncryptionDetailsResponse {
        /**
         * The key encryption key certificate expiry date.
         */
        kekCertExpiryDate?: string;
        /**
         * The key encryption key certificate thumbprint.
         */
        kekCertThumbprint?: string;
        /**
         * The key encryption key state for the Vmm.
         */
        kekState?: string;
    }

    /**
     * Extended location of the resource.
     */
    export interface ExtendedLocationResponse {
        /**
         * The name of the extended location.
         */
        name: string;
        /**
         * The extended location type.
         */
        type: string;
    }

    /**
     * Fabric properties.
     */
    export interface FabricPropertiesResponse {
        /**
         * BCDR state of the fabric.
         */
        bcdrState?: string;
        /**
         * Fabric specific settings.
         */
        customDetails?: AzureFabricSpecificDetailsResponse | HyperVSiteDetailsResponse | InMageRcmFabricSpecificDetailsResponse | VMwareDetailsResponse | VMwareV2FabricSpecificDetailsResponse | VmmDetailsResponse;
        /**
         * Encryption details for the fabric.
         */
        encryptionDetails?: EncryptionDetailsResponse;
        /**
         * Friendly name of the fabric.
         */
        friendlyName?: string;
        /**
         * Health of fabric.
         */
        health?: string;
        /**
         * Fabric health error details.
         */
        healthErrorDetails?: HealthErrorResponse[];
        /**
         * Dra Registration Id.
         */
        internalIdentifier?: string;
        /**
         * Rollover encryption details for the fabric.
         */
        rolloverEncryptionDetails?: EncryptionDetailsResponse;
    }

    /**
     * Details of the gateway operation.
     */
    export interface GatewayOperationDetailsResponse {
        /**
         * A value indicating the datastore collection.
         */
        dataStores: string[];
        /**
         * A value indicating the ESXi host name.
         */
        hostName: string;
        /**
         * A value indicating the progress percentage of gateway operation.
         */
        progressPercentage: number;
        /**
         * A value indicating the state of gateway operation.
         */
        state: string;
        /**
         * A value indicating the time elapsed for the operation in milliseconds.
         */
        timeElapsed: number;
        /**
         * A value indicating the time remaining for the operation in milliseconds.
         */
        timeRemaining: number;
        /**
         * A value indicating the upload speed in bytes per second.
         */
        uploadSpeed: number;
        /**
         * A value indicating the VMware read throughput in bytes per second.
         */
        vmwareReadThroughput: number;
    }

    /**
     * Health Error.
     */
    export interface HealthErrorResponse {
        /**
         * Error creation time (UTC).
         */
        creationTimeUtc?: string;
        /**
         * Value indicating whether the health error is customer resolvable.
         */
        customerResolvability?: string;
        /**
         * ID of the entity.
         */
        entityId?: string;
        /**
         * Category of error.
         */
        errorCategory?: string;
        /**
         * Error code.
         */
        errorCode?: string;
        /**
         * The health error unique id.
         */
        errorId?: string;
        /**
         * Level of error.
         */
        errorLevel?: string;
        /**
         * Error message.
         */
        errorMessage?: string;
        /**
         * Source of error.
         */
        errorSource?: string;
        /**
         * Type of error.
         */
        errorType?: string;
        /**
         * The inner health errors. HealthError having a list of HealthError as child errors is problematic. InnerHealthError is used because this will prevent an infinite loop of structures when Hydra tries to auto-generate the contract. We are exposing the related health errors as inner health errors and all API consumers can utilize this in the same fashion as Exception -&gt; InnerException.
         */
        innerHealthErrors?: InnerHealthErrorResponse[];
        /**
         * Possible causes of error.
         */
        possibleCauses?: string;
        /**
         * Recommended action to resolve error.
         */
        recommendedAction?: string;
        /**
         * DRA error message.
         */
        recoveryProviderErrorMessage?: string;
        /**
         * Summary message of the entity.
         */
        summaryMessage?: string;
    }

    /**
     * Hyper-V host details.
     */
    export interface HyperVHostDetailsResponse {
        /**
         * The Hyper-V host Id.
         */
        id: string;
        /**
         * The Mars agent version.
         */
        marsAgentVersion: string;
        /**
         * The Hyper-V host name.
         */
        name: string;
    }

    /**
     * Hyper-V Managed disk details.
     */
    export interface HyperVReplicaAzureManagedDiskDetailsResponse {
        /**
         * The disk encryption set ARM Id.
         */
        diskEncryptionSetId?: string;
        /**
         * The disk Id.
         */
        diskId?: string;
        /**
         * The replica disk type.
         */
        replicaDiskType?: string;
        /**
         * Seed managed disk Id.
         */
        seedManagedDiskId?: string;
    }

    /**
     * Hyper-V Replica Azure specific protection profile details.
     */
    export interface HyperVReplicaAzurePolicyDetailsResponse {
        /**
         * The active storage account Id.
         */
        activeStorageAccountId?: string;
        /**
         * The interval (in hours) at which Hyper-V Replica should create an application consistent snapshot within the VM.
         */
        applicationConsistentSnapshotFrequencyInHours?: number;
        /**
         * A value indicating whether encryption is enabled for virtual machines in this cloud.
         */
        encryption?: string;
        /**
         * Gets the class type. Overridden in derived classes.
         * Expected value is 'HyperVReplicaAzure'.
         */
        instanceType: "HyperVReplicaAzure";
        /**
         * The scheduled start time for the initial replication. If this parameter is Null, the initial replication starts immediately.
         */
        onlineReplicationStartTime?: string;
        /**
         * The duration (in hours) to which point the recovery history needs to be maintained.
         */
        recoveryPointHistoryDurationInHours?: number;
        /**
         * The replication interval.
         */
        replicationInterval?: number;
    }

    /**
     * Hyper V Replica Azure provider specific settings.
     */
    export interface HyperVReplicaAzureReplicationDetailsResponse {
        /**
         * A value indicating all available inplace OS Upgrade configurations.
         */
        allAvailableOSUpgradeConfigurations?: OSUpgradeSupportedVersionsResponse[];
        /**
         * Azure VM Disk details.
         */
        azureVmDiskDetails?: AzureVmDiskDetailsResponse[];
        /**
         * The selected option to enable RDP\SSH on target vm after failover. String value of SrsDataContract.EnableRDPOnTargetOption enum.
         */
        enableRdpOnTargetOption?: string;
        /**
         * The encryption info.
         */
        encryption?: string;
        /**
         * Initial replication details.
         */
        initialReplicationDetails?: InitialReplicationDetailsResponse;
        /**
         * Gets the Instance type.
         * Expected value is 'HyperVReplicaAzure'.
         */
        instanceType: "HyperVReplicaAzure";
        /**
         * The last recovery point received time.
         */
        lastRecoveryPointReceived: string;
        /**
         * The Last replication time.
         */
        lastReplicatedTime?: string;
        /**
         * The last RPO calculated time.
         */
        lastRpoCalculatedTime?: string;
        /**
         * License Type of the VM to be used.
         */
        licenseType?: string;
        /**
         * The operating system info.
         */
        oSDetails?: OSDetailsResponse;
        /**
         * The list of protected managed disks.
         */
        protectedManagedDisks?: HyperVReplicaAzureManagedDiskDetailsResponse[];
        /**
         * The recovery availability set Id.
         */
        recoveryAvailabilitySetId?: string;
        /**
         * The ARM id of the log storage account used for replication. This will be set to null if no log storage account was provided during enable protection.
         */
        recoveryAzureLogStorageAccountId?: string;
        /**
         * The target resource group Id.
         */
        recoveryAzureResourceGroupId?: string;
        /**
         * The recovery Azure storage account.
         */
        recoveryAzureStorageAccount?: string;
        /**
         * The Recovery Azure VM size.
         */
        recoveryAzureVMSize?: string;
        /**
         * Recovery Azure given name.
         */
        recoveryAzureVmName?: string;
        /**
         * Last RPO value.
         */
        rpoInSeconds?: number;
        /**
         * The tags for the seed managed disks.
         */
        seedManagedDiskTags?: {[key: string]: string};
        /**
         * The selected recovery azure network Id.
         */
        selectedRecoveryAzureNetworkId?: string;
        /**
         * The selected source nic Id which will be used as the primary nic during failover.
         */
        selectedSourceNicId?: string;
        /**
         * The CPU count of the VM on the primary side.
         */
        sourceVmCpuCount?: number;
        /**
         * The RAM size of the VM on the primary side.
         */
        sourceVmRamSizeInMB?: number;
        /**
         * The SQL Server license type.
         */
        sqlServerLicenseType?: string;
        /**
         * The target availability zone.
         */
        targetAvailabilityZone?: string;
        /**
         * The tags for the target managed disks.
         */
        targetManagedDiskTags?: {[key: string]: string};
        /**
         * The tags for the target NICs.
         */
        targetNicTags?: {[key: string]: string};
        /**
         * The target proximity placement group Id.
         */
        targetProximityPlacementGroupId?: string;
        /**
         * The target VM tags.
         */
        targetVmTags?: {[key: string]: string};
        /**
         * A value indicating whether managed disks should be used during failover.
         */
        useManagedDisks?: string;
        /**
         * The virtual machine Id.
         */
        vmId?: string;
        /**
         * The PE Network details.
         */
        vmNics?: VMNicDetailsResponse[];
        /**
         * The protection state for the vm.
         */
        vmProtectionState?: string;
        /**
         * The protection state description for the vm.
         */
        vmProtectionStateDescription?: string;
    }

    /**
     * Base class for HyperVReplica policy details.
     */
    export interface HyperVReplicaBasePolicyDetailsResponse {
        /**
         * A value indicating the authentication type.
         */
        allowedAuthenticationType?: number;
        /**
         * A value indicating the application consistent frequency.
         */
        applicationConsistentSnapshotFrequencyInHours?: number;
        /**
         * A value indicating whether compression has to be enabled.
         */
        compression?: string;
        /**
         * A value indicating whether IR is online.
         */
        initialReplicationMethod?: string;
        /**
         * Gets the class type. Overridden in derived classes.
         * Expected value is 'HyperVReplicaBasePolicyDetails'.
         */
        instanceType: "HyperVReplicaBasePolicyDetails";
        /**
         * A value indicating the offline IR export path.
         */
        offlineReplicationExportPath?: string;
        /**
         * A value indicating the offline IR import path.
         */
        offlineReplicationImportPath?: string;
        /**
         * A value indicating the online IR start time.
         */
        onlineReplicationStartTime?: string;
        /**
         * A value indicating the number of recovery points.
         */
        recoveryPoints?: number;
        /**
         * A value indicating whether the VM has to be auto deleted. Supported Values: String.Empty, None, OnRecoveryCloud.
         */
        replicaDeletionOption?: string;
        /**
         * A value indicating the recovery HTTPS port.
         */
        replicationPort?: number;
    }

    /**
     * Hyper V replica provider specific settings base class.
     */
    export interface HyperVReplicaBaseReplicationDetailsResponse {
        /**
         * Initial replication details.
         */
        initialReplicationDetails?: InitialReplicationDetailsResponse;
        /**
         * Gets the Instance type.
         * Expected value is 'HyperVReplicaBaseReplicationDetails'.
         */
        instanceType: "HyperVReplicaBaseReplicationDetails";
        /**
         * The Last replication time.
         */
        lastReplicatedTime?: string;
        /**
         * VM disk details.
         */
        vMDiskDetails?: DiskDetailsResponse[];
        /**
         * The virtual machine Id.
         */
        vmId?: string;
        /**
         * The PE Network details.
         */
        vmNics?: VMNicDetailsResponse[];
        /**
         * The protection state for the vm.
         */
        vmProtectionState?: string;
        /**
         * The protection state description for the vm.
         */
        vmProtectionStateDescription?: string;
    }

    /**
     * Hyper-V Replica Blue specific protection profile details.
     */
    export interface HyperVReplicaBluePolicyDetailsResponse {
        /**
         * A value indicating the authentication type.
         */
        allowedAuthenticationType?: number;
        /**
         * A value indicating the application consistent frequency.
         */
        applicationConsistentSnapshotFrequencyInHours?: number;
        /**
         * A value indicating whether compression has to be enabled.
         */
        compression?: string;
        /**
         * A value indicating whether IR is online.
         */
        initialReplicationMethod?: string;
        /**
         * Gets the class type. Overridden in derived classes.
         * Expected value is 'HyperVReplica2012R2'.
         */
        instanceType: "HyperVReplica2012R2";
        /**
         * A value indicating the offline IR export path.
         */
        offlineReplicationExportPath?: string;
        /**
         * A value indicating the offline IR import path.
         */
        offlineReplicationImportPath?: string;
        /**
         * A value indicating the online IR start time.
         */
        onlineReplicationStartTime?: string;
        /**
         * A value indicating the number of recovery points.
         */
        recoveryPoints?: number;
        /**
         * A value indicating whether the VM has to be auto deleted. Supported Values: String.Empty, None, OnRecoveryCloud
         */
        replicaDeletionOption?: string;
        /**
         * A value indicating the replication interval.
         */
        replicationFrequencyInSeconds?: number;
        /**
         * A value indicating the recovery HTTPS port.
         */
        replicationPort?: number;
    }

    /**
     * HyperV replica 2012 R2 (Blue) replication details.
     */
    export interface HyperVReplicaBlueReplicationDetailsResponse {
        /**
         * Initial replication details.
         */
        initialReplicationDetails?: InitialReplicationDetailsResponse;
        /**
         * Gets the Instance type.
         * Expected value is 'HyperVReplica2012R2'.
         */
        instanceType: "HyperVReplica2012R2";
        /**
         * The Last replication time.
         */
        lastReplicatedTime?: string;
        /**
         * VM disk details.
         */
        vMDiskDetails?: DiskDetailsResponse[];
        /**
         * The virtual machine Id.
         */
        vmId?: string;
        /**
         * The PE Network details.
         */
        vmNics?: VMNicDetailsResponse[];
        /**
         * The protection state for the vm.
         */
        vmProtectionState?: string;
        /**
         * The protection state description for the vm.
         */
        vmProtectionStateDescription?: string;
    }

    /**
     * Hyper-V Replica Blue specific protection profile details.
     */
    export interface HyperVReplicaPolicyDetailsResponse {
        /**
         * A value indicating the authentication type.
         */
        allowedAuthenticationType?: number;
        /**
         * A value indicating the application consistent frequency.
         */
        applicationConsistentSnapshotFrequencyInHours?: number;
        /**
         * A value indicating whether compression has to be enabled.
         */
        compression?: string;
        /**
         * A value indicating whether IR is online.
         */
        initialReplicationMethod?: string;
        /**
         * Gets the class type. Overridden in derived classes.
         * Expected value is 'HyperVReplica2012'.
         */
        instanceType: "HyperVReplica2012";
        /**
         * A value indicating the offline IR export path.
         */
        offlineReplicationExportPath?: string;
        /**
         * A value indicating the offline IR import path.
         */
        offlineReplicationImportPath?: string;
        /**
         * A value indicating the online IR start time.
         */
        onlineReplicationStartTime?: string;
        /**
         * A value indicating the number of recovery points.
         */
        recoveryPoints?: number;
        /**
         * A value indicating whether the VM has to be auto deleted. Supported Values: String.Empty, None, OnRecoveryCloud
         */
        replicaDeletionOption?: string;
        /**
         * A value indicating the recovery HTTPS port.
         */
        replicationPort?: number;
    }

    /**
     * HyperV replica 2012 replication details.
     */
    export interface HyperVReplicaReplicationDetailsResponse {
        /**
         * Initial replication details.
         */
        initialReplicationDetails?: InitialReplicationDetailsResponse;
        /**
         * Gets the Instance type.
         * Expected value is 'HyperVReplica2012'.
         */
        instanceType: "HyperVReplica2012";
        /**
         * The Last replication time.
         */
        lastReplicatedTime?: string;
        /**
         * VM disk details.
         */
        vMDiskDetails?: DiskDetailsResponse[];
        /**
         * The virtual machine Id.
         */
        vmId?: string;
        /**
         * The PE Network details.
         */
        vmNics?: VMNicDetailsResponse[];
        /**
         * The protection state for the vm.
         */
        vmProtectionState?: string;
        /**
         * The protection state description for the vm.
         */
        vmProtectionStateDescription?: string;
    }

    /**
     * HyperVSite fabric specific details.
     */
    export interface HyperVSiteDetailsResponse {
        /**
         * The list of Hyper-V hosts associated with the fabric.
         */
        hyperVHosts?: HyperVHostDetailsResponse[];
        /**
         * Gets the class type. Overridden in derived classes.
         * Expected value is 'HyperVSite'.
         */
        instanceType: "HyperVSite";
    }

    export interface IPConfigDetailsResponse {
        ipAddressType?: string;
        isPrimary?: boolean;
        isSeletedForFailover?: boolean;
        name?: string;
        recoveryIPAddressType?: string;
        recoveryLBBackendAddressPoolIds?: string[];
        recoveryPublicIPAddressId?: string;
        recoveryStaticIPAddress?: string;
        recoverySubnetName?: string;
        staticIPAddress?: string;
        subnetName?: string;
        tfoLBBackendAddressPoolIds?: string[];
        tfoPublicIPAddressId?: string;
        tfoStaticIPAddress?: string;
        tfoSubnetName?: string;
    }

    /**
     * Identity provider details.
     */
    export interface IdentityProviderDetailsResponse {
        /**
         * The base authority for Azure Active Directory authentication.
         */
        aadAuthority?: string;
        /**
         * The application/client Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services.
         */
        applicationId?: string;
        /**
         * The intended Audience of the service principal with which the on-premise management/data plane components would communicate with our Azure services.
         */
        audience?: string;
        /**
         * The object Id of the service principal with which the on-premise management/data plane components would communicate with our Azure services.
         */
        objectId?: string;
        /**
         * The tenant Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services.
         */
        tenantId?: string;
    }

    /**
     * The details of the InMage agent.
     */
    export interface InMageAgentDetailsResponse {
        /**
         * Agent expiry date.
         */
        agentExpiryDate?: string;
        /**
         * A value indicating whether installed agent needs to be updated.
         */
        agentUpdateStatus?: string;
        /**
         * The agent version.
         */
        agentVersion?: string;
        /**
         * A value indicating whether reboot is required after update is applied.
         */
        postUpdateRebootStatus?: string;
    }

    /**
     * InMageAzureV2 Managed disk details.
     */
    export interface InMageAzureV2ManagedDiskDetailsResponse {
        /**
         * The DiskEncryptionSet ARM ID.
         */
        diskEncryptionSetId?: string;
        /**
         * The disk id.
         */
        diskId?: string;
        /**
         * The replica disk type.
         */
        replicaDiskType?: string;
        /**
         * Seed managed disk Id.
         */
        seedManagedDiskId?: string;
        /**
         * The target disk name.
         */
        targetDiskName?: string;
    }

    /**
     * InMage Azure v2 specific protection profile details.
     */
    export interface InMageAzureV2PolicyDetailsResponse {
        /**
         * The app consistent snapshot frequency in minutes.
         */
        appConsistentFrequencyInMinutes?: number;
        /**
         * The crash consistent snapshot frequency in minutes.
         */
        crashConsistentFrequencyInMinutes?: number;
        /**
         * Gets the class type. Overridden in derived classes.
         * Expected value is 'InMageAzureV2'.
         */
        instanceType: "InMageAzureV2";
        /**
         * A value indicating whether multi-VM sync has to be enabled.
         */
        multiVmSyncStatus?: string;
        /**
         * The duration in minutes until which the recovery points need to be stored.
         */
        recoveryPointHistory?: number;
        /**
         * The recovery point threshold in minutes.
         */
        recoveryPointThresholdInMinutes?: number;
    }

    /**
     * InMageAzureV2 protected disk details.
     */
    export interface InMageAzureV2ProtectedDiskDetailsResponse {
        /**
         * The disk capacity in bytes.
         */
        diskCapacityInBytes?: number;
        /**
         * The disk id.
         */
        diskId?: string;
        /**
         * The disk name.
         */
        diskName?: string;
        /**
         * A value indicating whether disk is resized.
         */
        diskResized?: string;
        /**
         * The disk file system capacity in bytes.
         */
        fileSystemCapacityInBytes?: number;
        /**
         * The health error code for the disk.
         */
        healthErrorCode?: string;
        /**
         * The last RPO calculated time.
         */
        lastRpoCalculatedTime?: string;
        /**
         * The Progress Health.
         */
        progressHealth?: string;
        /**
         * The Progress Status.
         */
        progressStatus?: string;
        /**
         * The protection stage.
         */
        protectionStage?: string;
        /**
         * The PS data transit in MB.
         */
        psDataInMegaBytes?: number;
        /**
         * The resync duration in seconds.
         */
        resyncDurationInSeconds?: number;
        /**
         * The resync last 15 minutes transferred bytes.
         */
        resyncLast15MinutesTransferredBytes?: number;
        /**
         * The last data transfer time in UTC.
         */
        resyncLastDataTransferTimeUTC?: string;
        /**
         * The resync processed bytes.
         */
        resyncProcessedBytes?: number;
        /**
         * The resync progress percentage.
         */
        resyncProgressPercentage?: number;
        /**
         * A value indicating whether resync is required for this disk.
         */
        resyncRequired?: string;
        /**
         * The resync start time.
         */
        resyncStartTime?: string;
        /**
         * The resync total transferred bytes.
         */
        resyncTotalTransferredBytes?: number;
        /**
         * The RPO in seconds.
         */
        rpoInSeconds?: number;
        /**
         * The seconds to take for switch provider.
         */
        secondsToTakeSwitchProvider?: number;
        /**
         * The source data transit in MB.
         */
        sourceDataInMegaBytes?: number;
        /**
         * The target data transit in MB.
         */
        targetDataInMegaBytes?: number;
    }

    /**
     * InMageAzureV2 provider specific settings.
     */
    export interface InMageAzureV2ReplicationDetailsResponse {
        /**
         * Agent expiry date.
         */
        agentExpiryDate?: string;
        /**
         * The agent version.
         */
        agentVersion?: string;
        /**
         * A value indicating all available inplace OS Upgrade configurations.
         */
        allAvailableOSUpgradeConfigurations?: OSUpgradeSupportedVersionsResponse[];
        /**
         * Azure VM Disk details.
         */
        azureVMDiskDetails?: AzureVmDiskDetailsResponse[];
        /**
         * The target generation for this protected item.
         */
        azureVmGeneration?: string;
        /**
         * The compressed data change rate in MB.
         */
        compressedDataRateInMB?: number;
        /**
         * The datastores of the on-premise machine. Value can be list of strings that contain datastore names.
         */
        datastores?: string[];
        /**
         * A value indicating the discovery type of the machine. Value can be vCenter or physical.
         */
        discoveryType?: string;
        /**
         * A value indicating whether any disk is resized for this VM.
         */
        diskResized?: string;
        /**
         * The selected option to enable RDP\SSH on target vm after failover. String value of SrsDataContract.EnableRDPOnTargetOption enum.
         */
        enableRdpOnTargetOption?: string;
        /**
         * The firmware type of this protected item.
         */
        firmwareType?: string;
        /**
         * The infrastructure VM Id.
         */
        infrastructureVmId?: string;
        /**
         * Gets the Instance type.
         * Expected value is 'InMageAzureV2'.
         */
        instanceType: "InMageAzureV2";
        /**
         * The source IP address.
         */
        ipAddress?: string;
        /**
         * A value indicating whether additional IR stats are available or not.
         */
        isAdditionalStatsAvailable?: boolean;
        /**
         * A value indicating whether installed agent needs to be updated.
         */
        isAgentUpdateRequired?: string;
        /**
         * A value indicating whether the source server requires a restart after update.
         */
        isRebootAfterUpdateRequired?: string;
        /**
         * The last heartbeat received from the source server.
         */
        lastHeartbeat?: string;
        /**
         * The last recovery point received time.
         */
        lastRecoveryPointReceived: string;
        /**
         * The last RPO calculated time.
         */
        lastRpoCalculatedTime?: string;
        /**
         * The last update time received from on-prem components.
         */
        lastUpdateReceivedTime?: string;
        /**
         * License Type of the VM to be used.
         */
        licenseType?: string;
        /**
         * The master target Id.
         */
        masterTargetId?: string;
        /**
         * The multi vm group Id.
         */
        multiVmGroupId?: string;
        /**
         * The multi vm group name.
         */
        multiVmGroupName?: string;
        /**
         * A value indicating whether multi vm sync is enabled or disabled.
         */
        multiVmSyncStatus?: string;
        /**
         * The id of the disk containing the OS.
         */
        osDiskId?: string;
        /**
         * The name of the OS on the VM.
         */
        osName: string;
        /**
         * The type of the OS on the VM.
         */
        osType?: string;
        /**
         * The OS Version of the protected item.
         */
        osVersion?: string;
        /**
         * The process server Id.
         */
        processServerId?: string;
        /**
         * The process server name.
         */
        processServerName?: string;
        /**
         * The list of protected disks.
         */
        protectedDisks?: InMageAzureV2ProtectedDiskDetailsResponse[];
        /**
         * The list of protected managed disks.
         */
        protectedManagedDisks?: InMageAzureV2ManagedDiskDetailsResponse[];
        /**
         * The protection stage.
         */
        protectionStage?: string;
        /**
         * The recovery availability set Id.
         */
        recoveryAvailabilitySetId?: string;
        /**
         * The ARM id of the log storage account used for replication. This will be set to null if no log storage account was provided during enable protection.
         */
        recoveryAzureLogStorageAccountId?: string;
        /**
         * The target resource group Id.
         */
        recoveryAzureResourceGroupId?: string;
        /**
         * The recovery Azure storage account.
         */
        recoveryAzureStorageAccount?: string;
        /**
         * Recovery Azure given name.
         */
        recoveryAzureVMName?: string;
        /**
         * The Recovery Azure VM size.
         */
        recoveryAzureVMSize?: string;
        /**
         * The replica id of the protected item.
         */
        replicaId?: string;
        /**
         * The resync progress percentage.
         */
        resyncProgressPercentage?: number;
        /**
         * The RPO in seconds.
         */
        rpoInSeconds?: number;
        /**
         * The tags for the seed managed disks.
         */
        seedManagedDiskTags?: {[key: string]: string};
        /**
         * The selected recovery azure network Id.
         */
        selectedRecoveryAzureNetworkId?: string;
        /**
         * The selected source nic Id which will be used as the primary nic during failover.
         */
        selectedSourceNicId?: string;
        /**
         * The test failover virtual network.
         */
        selectedTfoAzureNetworkId?: string;
        /**
         * The CPU count of the VM on the primary side.
         */
        sourceVmCpuCount?: number;
        /**
         * The RAM size of the VM on the primary side.
         */
        sourceVmRamSizeInMB?: number;
        /**
         * The SQL Server license type.
         */
        sqlServerLicenseType?: string;
        /**
         * A value indicating the inplace OS Upgrade version.
         */
        supportedOSVersions?: string[];
        /**
         * The switch provider blocking error information.
         */
        switchProviderBlockingErrorDetails?: InMageAzureV2SwitchProviderBlockingErrorDetailsResponse[];
        /**
         * The switch provider blocking error information.
         */
        switchProviderDetails?: InMageAzureV2SwitchProviderDetailsResponse;
        /**
         * The target availability zone.
         */
        targetAvailabilityZone?: string;
        /**
         * The tags for the target managed disks.
         */
        targetManagedDiskTags?: {[key: string]: string};
        /**
         * The tags for the target NICs.
         */
        targetNicTags?: {[key: string]: string};
        /**
         * The target proximity placement group Id.
         */
        targetProximityPlacementGroupId?: string;
        /**
         * The ARM Id of the target Azure VM. This value will be null until the VM is failed over. Only after failure it will be populated with the ARM Id of the Azure VM.
         */
        targetVmId?: string;
        /**
         * The target VM tags.
         */
        targetVmTags?: {[key: string]: string};
        /**
         * The total transferred data in bytes.
         */
        totalDataTransferred?: number;
        /**
         * The progress health.
         */
        totalProgressHealth?: string;
        /**
         * The uncompressed data change rate in MB.
         */
        uncompressedDataRateInMB?: number;
        /**
         * A value indicating whether managed disks should be used during failover.
         */
        useManagedDisks?: string;
        /**
         * The vCenter infrastructure Id.
         */
        vCenterInfrastructureId?: string;
        /**
         * The validation errors of the on-premise machine Value can be list of validation errors.
         */
        validationErrors?: HealthErrorResponse[];
        /**
         * The OS disk VHD name.
         */
        vhdName?: string;
        /**
         * The virtual machine Id.
         */
        vmId?: string;
        /**
         * The PE Network details.
         */
        vmNics?: VMNicDetailsResponse[];
        /**
         * The protection state for the vm.
         */
        vmProtectionState?: string;
        /**
         * The protection state description for the vm.
         */
        vmProtectionStateDescription?: string;
    }

    /**
     * InMageAzureV2 switch provider blocking error details.
     */
    export interface InMageAzureV2SwitchProviderBlockingErrorDetailsResponse {
        /**
         * The error code.
         */
        errorCode: string;
        /**
         * The error message.
         */
        errorMessage: string;
        /**
         * The error message parameters.
         */
        errorMessageParameters: {[key: string]: string};
        /**
         * The error tags.
         */
        errorTags: {[key: string]: string};
        /**
         * The possible causes.
         */
        possibleCauses: string;
        /**
         * The recommended action.
         */
        recommendedAction: string;
    }

    /**
     * InMageAzureV2 switch provider details.
     */
    export interface InMageAzureV2SwitchProviderDetailsResponse {
        /**
         * The target appliance Id.
         */
        targetApplianceId: string;
        /**
         * The target fabric Id.
         */
        targetFabricId: string;
        /**
         * The target resource Id.
         */
        targetResourceId: string;
        /**
         * The target vault Id.
         */
        targetVaultId: string;
    }

    /**
     * Base class for the policies of providers using InMage replication.
     */
    export interface InMageBasePolicyDetailsResponse {
        /**
         * The app consistent snapshot frequency in minutes.
         */
        appConsistentFrequencyInMinutes?: number;
        /**
         * Gets the class type. Overridden in derived classes.
         * Expected value is 'InMageBasePolicyDetails'.
         */
        instanceType: "InMageBasePolicyDetails";
        /**
         * A value indicating whether multi-VM sync has to be enabled.
         */
        multiVmSyncStatus?: string;
        /**
         * The duration in minutes until which the recovery points need to be stored.
         */
        recoveryPointHistory?: number;
        /**
         * The recovery point threshold in minutes.
         */
        recoveryPointThresholdInMinutes?: number;
    }

    /**
     * InMageFabric switch provider blocking error details.
     */
    export interface InMageFabricSwitchProviderBlockingErrorDetailsResponse {
        /**
         * The error code.
         */
        errorCode: string;
        /**
         * The error message.
         */
        errorMessage: string;
        /**
         * The error message parameters.
         */
        errorMessageParameters: {[key: string]: string};
        /**
         * The error tags.
         */
        errorTags: {[key: string]: string};
        /**
         * The possible causes.
         */
        possibleCauses: string;
        /**
         * The recommended action.
         */
        recommendedAction: string;
    }

    /**
     * InMage specific protection profile details.
     */
    export interface InMagePolicyDetailsResponse {
        /**
         * The app consistent snapshot frequency in minutes.
         */
        appConsistentFrequencyInMinutes?: number;
        /**
         * Gets the class type. Overridden in derived classes.
         * Expected value is 'InMage'.
         */
        instanceType: "InMage";
        /**
         * A value indicating whether multi-VM sync has to be enabled.
         */
        multiVmSyncStatus?: string;
        /**
         * The duration in minutes until which the recovery points need to be stored.
         */
        recoveryPointHistory?: number;
        /**
         * The recovery point threshold in minutes.
         */
        recoveryPointThresholdInMinutes?: number;
    }

    /**
     * InMage protected disk details.
     */
    export interface InMageProtectedDiskDetailsResponse {
        /**
         * The disk capacity in bytes.
         */
        diskCapacityInBytes?: number;
        /**
         * The disk id.
         */
        diskId?: string;
        /**
         * The disk name.
         */
        diskName?: string;
        /**
         * A value indicating whether disk is resized.
         */
        diskResized?: string;
        /**
         * The file system capacity in bytes.
         */
        fileSystemCapacityInBytes?: number;
        /**
         * The health error code for the disk.
         */
        healthErrorCode?: string;
        /**
         * The last RPO calculated time.
         */
        lastRpoCalculatedTime?: string;
        /**
         * The Progress Health.
         */
        progressHealth?: string;
        /**
         * The Progress Status.
         */
        progressStatus?: string;
        /**
         * The protection stage.
         */
        protectionStage?: string;
        /**
         * The PS data transit in MB.
         */
        psDataInMB?: number;
        /**
         * The resync duration in seconds.
         */
        resyncDurationInSeconds?: number;
        /**
         * The resync last 15 minutes transferred bytes.
         */
        resyncLast15MinutesTransferredBytes?: number;
        /**
         * The last data transfer time in UTC.
         */
        resyncLastDataTransferTimeUTC?: string;
        /**
         * The resync processed bytes.
         */
        resyncProcessedBytes?: number;
        /**
         * The resync progress percentage.
         */
        resyncProgressPercentage?: number;
        /**
         * A value indicating whether resync is required for this disk.
         */
        resyncRequired?: string;
        /**
         * The resync start time.
         */
        resyncStartTime?: string;
        /**
         * The resync total transferred bytes.
         */
        resyncTotalTransferredBytes?: number;
        /**
         * The RPO in seconds.
         */
        rpoInSeconds?: number;
        /**
         * The source data transit in MB.
         */
        sourceDataInMB?: number;
        /**
         * The target data transit in MB.
         */
        targetDataInMB?: number;
    }

    /**
     * InMageRcm source agent upgrade blocking error details.
     */
    export interface InMageRcmAgentUpgradeBlockingErrorDetailsResponse {
        /**
         * The error code.
         */
        errorCode: string;
        /**
         * The error message.
         */
        errorMessage: string;
        /**
         * The error message parameters.
         */
        errorMessageParameters: {[key: string]: string};
        /**
         * The error tags.
         */
        errorTags: {[key: string]: string};
        /**
         * The possible causes.
         */
        possibleCauses: string;
        /**
         * The recommended action.
         */
        recommendedAction: string;
    }

    /**
     * InMageRcm discovered protected VM details.
     */
    export interface InMageRcmDiscoveredProtectedVmDetailsResponse {
        /**
         * The SDS created timestamp.
         */
        createdTimestamp: string;
        /**
         * The list of datastores.
         */
        datastores: string[];
        /**
         * The list of IP addresses.
         */
        ipAddresses: string[];
        /**
         * A value indicating whether the VM is deleted.
         */
        isDeleted: boolean;
        /**
         * The last time when SDS information discovered in SRS.
         */
        lastDiscoveryTimeInUtc: string;
        /**
         * The VM's OS name.
         */
        osName: string;
        /**
         * The VM power status.
         */
        powerStatus: string;
        /**
         * The SDS updated timestamp.
         */
        updatedTimestamp: string;
        /**
         * The VCenter fqdn.
         */
        vCenterFqdn: string;
        /**
         * The VCenter Id.
         */
        vCenterId: string;
        /**
         * The VM fqdn.
         */
        vmFqdn: string;
        /**
         * The VMware tools status.
         */
        vmwareToolsStatus: string;
    }

    /**
     * InMageRcm fabric specific details.
     */
    export interface InMageRcmFabricSpecificDetailsResponse {
        /**
         * The list of agent details.
         */
        agentDetails: AgentDetailsResponse[];
        /**
         * The control plane Uri.
         */
        controlPlaneUri: string;
        /**
         * The data plane Uri.
         */
        dataPlaneUri: string;
        /**
         * The list of DRAs.
         */
        dras: DraDetailsResponse[];
        /**
         * Gets the class type. Overridden in derived classes.
         * Expected value is 'InMageRcm'.
         */
        instanceType: "InMageRcm";
        /**
         * The list of Mars agents.
         */
        marsAgents: MarsAgentDetailsResponse[];
        /**
         * The ARM Id of the physical site.
         */
        physicalSiteId: string;
        /**
         * The list of process servers.
         */
        processServers: ProcessServerDetailsResponse[];
        /**
         * The list of push installers.
         */
        pushInstallers: PushInstallerDetailsResponse[];
        /**
         * The list of RCM proxies.
         */
        rcmProxies: RcmProxyDetailsResponse[];
        /**
         * The list of replication agents.
         */
        replicationAgents: ReplicationAgentDetailsResponse[];
        /**
         * The list of reprotect agents.
         */
        reprotectAgents: ReprotectAgentDetailsResponse[];
        /**
         * The service container Id.
         */
        serviceContainerId: string;
        /**
         * The service endpoint.
         */
        serviceEndpoint: string;
        /**
         * The service resource Id.
         */
        serviceResourceId: string;
        /**
         * The source agent identity details.
         */
        sourceAgentIdentityDetails?: IdentityProviderDetailsResponse;
        /**
         * The ARM Id of the VMware site.
         */
        vmwareSiteId: string;
    }

    /**
     * InMageRcmFailback discovered VM details.
     */
    export interface InMageRcmFailbackDiscoveredProtectedVmDetailsResponse {
        /**
         * The SDS created timestamp.
         */
        createdTimestamp: string;
        /**
         * The list of datastores.
         */
        datastores: string[];
        /**
         * The list of IP addresses.
         */
        ipAddresses: string[];
        /**
         * A value indicating whether the VM is deleted.
         */
        isDeleted: boolean;
        /**
         * The last time when SDS information discovered in SRS.
         */
        lastDiscoveryTimeInUtc: string;
        /**
         * The VM's OS name.
         */
        osName: string;
        /**
         * The VM power status.
         */
        powerStatus: string;
        /**
         * The SDS updated timestamp.
         */
        updatedTimestamp: string;
        /**
         * The VCenter fqdn.
         */
        vCenterFqdn: string;
        /**
         * The VCenter Id.
         */
        vCenterId: string;
        /**
         * The VM fqdn.
         */
        vmFqdn: string;
        /**
         * The VMware tools status.
         */
        vmwareToolsStatus: string;
    }

    /**
     * InMageRcmFailback mobility agent details.
     */
    export interface InMageRcmFailbackMobilityAgentDetailsResponse {
        /**
         * The agent version expiry date.
         */
        agentVersionExpiryDate: string;
        /**
         * The driver version.
         */
        driverVersion: string;
        /**
         * The driver version expiry date.
         */
        driverVersionExpiryDate: string;
        /**
         * A value indicating whether agent is upgradeable or not.
         */
        isUpgradeable: string;
        /**
         * The time of the last heartbeat received from the agent.
         */
        lastHeartbeatUtc: string;
        /**
         * The latest upgradeable version available without reboot.
         */
        latestUpgradableVersionWithoutReboot: string;
        /**
         * The latest agent version available.
         */
        latestVersion: string;
        /**
         * The whether update is possible or not.
         */
        reasonsBlockingUpgrade: string[];
        /**
         * The agent version.
         */
        version: string;
    }

    /**
     * InMageRcmFailback NIC details.
     */
    export interface InMageRcmFailbackNicDetailsResponse {
        /**
         * The adapter type.
         */
        adapterType: string;
        /**
         * The mac address.
         */
        macAddress: string;
        /**
         * The network name.
         */
        networkName: string;
        /**
         * The IP address.
         */
        sourceIpAddress: string;
    }

    /**
     * InMageRcm failback specific policy details.
     */
    export interface InMageRcmFailbackPolicyDetailsResponse {
        /**
         * The app consistent snapshot frequency in minutes.
         */
        appConsistentFrequencyInMinutes?: number;
        /**
         * The crash consistent snapshot frequency in minutes.
         */
        crashConsistentFrequencyInMinutes?: number;
        /**
         * Gets the class type. Overridden in derived classes.
         * Expected value is 'InMageRcmFailback'.
         */
        instanceType: "InMageRcmFailback";
    }

    /**
     * InMageRcmFailback protected disk details.
     */
    export interface InMageRcmFailbackProtectedDiskDetailsResponse {
        /**
         * The disk capacity in bytes.
         */
        capacityInBytes: number;
        /**
         * The data pending at source agent in MB.
         */
        dataPendingAtSourceAgentInMB: number;
        /**
         * The data pending in log data store in MB.
         */
        dataPendingInLogDataStoreInMB: number;
        /**
         * The disk Id (reported by source agent).
         */
        diskId: string;
        /**
         * The disk name.
         */
        diskName: string;
        /**
         * The disk Uuid (reported by vCenter).
         */
        diskUuid: string;
        /**
         * The initial replication details.
         */
        irDetails?: InMageRcmFailbackSyncDetailsResponse;
        /**
         * A value indicating whether initial replication is complete or not.
         */
        isInitialReplicationComplete: string;
        /**
         * A value indicating whether the disk is the OS disk.
         */
        isOSDisk: string;
        /**
         * The last sync time.
         */
        lastSyncTime: string;
        /**
         * The resync details.
         */
        resyncDetails?: InMageRcmFailbackSyncDetailsResponse;
    }

    /**
     * InMageRcmFailback provider specific details.
     */
    export interface InMageRcmFailbackReplicationDetailsResponse {
        /**
         * The ARM Id of the azure VM.
         */
        azureVirtualMachineId: string;
        /**
         * The discovered VM information.
         */
        discoveredVmDetails?: InMageRcmFailbackDiscoveredProtectedVmDetailsResponse;
        /**
         * The initial replication processed bytes. This includes sum of total bytes transferred and matched bytes on all selected disks in source VM.
         */
        initialReplicationProcessedBytes: number;
        /**
         * The initial replication progress health.
         */
        initialReplicationProgressHealth: string;
        /**
         * The initial replication progress percentage.
         */
        initialReplicationProgressPercentage: number;
        /**
         * The initial replication transferred bytes from source VM to target for all selected disks on source VM.
         */
        initialReplicationTransferredBytes: number;
        /**
         * Gets the Instance type.
         * Expected value is 'InMageRcmFailback'.
         */
        instanceType: "InMageRcmFailback";
        /**
         * The virtual machine internal identifier.
         */
        internalIdentifier: string;
        /**
         * A value indicating whether agent registration was successful after failover.
         */
        isAgentRegistrationSuccessfulAfterFailover: boolean;
        /**
         * The last planned failover start time.
         */
        lastPlannedFailoverStartTime: string;
        /**
         * The last planned failover status.
         */
        lastPlannedFailoverStatus: string;
        /**
         * The policy friendly name used by the forward replication.
         */
        lastUsedPolicyFriendlyName: string;
        /**
         * The policy Id used by the forward replication.
         */
        lastUsedPolicyId: string;
        /**
         * The log storage account ARM Id.
         */
        logStorageAccountId: string;
        /**
         * The mobility agent information.
         */
        mobilityAgentDetails?: InMageRcmFailbackMobilityAgentDetailsResponse;
        /**
         * The multi VM group name.
         */
        multiVmGroupName: string;
        /**
         * The type of the OS on the VM.
         */
        osType: string;
        /**
         * The list of protected disks.
         */
        protectedDisks?: InMageRcmFailbackProtectedDiskDetailsResponse[];
        /**
         * The reprotect agent Id.
         */
        reprotectAgentId: string;
        /**
         * The reprotect agent name.
         */
        reprotectAgentName: string;
        /**
         * The resync processed bytes. This includes sum of total bytes transferred and matched bytes on all selected disks in source VM.
         */
        resyncProcessedBytes: number;
        /**
         * The resync progress health.
         */
        resyncProgressHealth: string;
        /**
         * The resync progress percentage.
         */
        resyncProgressPercentage: number;
        /**
         * A value indicating whether resync is required.
         */
        resyncRequired: string;
        /**
         * The resync state.
         */
        resyncState: string;
        /**
         * The resync transferred bytes from source VM to target for all selected disks on source VM.
         */
        resyncTransferredBytes: number;
        /**
         * The target datastore name.
         */
        targetDataStoreName: string;
        /**
         * The target VM name.
         */
        targetVmName: string;
        /**
         * The target vCenter Id.
         */
        targetvCenterId: string;
        /**
         * The network details.
         */
        vmNics?: InMageRcmFailbackNicDetailsResponse[];
    }

    /**
     * InMageRcmFailback disk level sync details.
     */
    export interface InMageRcmFailbackSyncDetailsResponse {
        /**
         * The bytes transferred in last 15 minutes from source VM to target.
         */
        last15MinutesTransferredBytes: number;
        /**
         * The time of the last data transfer from source VM to target.
         */
        lastDataTransferTimeUtc: string;
        /**
         * The last refresh time.
         */
        lastRefreshTime: string;
        /**
         * The total processed bytes. This includes bytes that are transferred from source VM to target and matched bytes.
         */
        processedBytes: number;
        /**
         * The progress health.
         */
        progressHealth: string;
        /**
         * Progress in percentage. Progress percentage is calculated based on processed bytes.
         */
        progressPercentage: number;
        /**
         * The start time.
         */
        startTime: string;
        /**
         * The transferred bytes from source VM to azure for the disk.
         */
        transferredBytes: number;
    }

    /**
     * InMageRcm last source agent upgrade error details.
     */
    export interface InMageRcmLastAgentUpgradeErrorDetailsResponse {
        /**
         * The error code.
         */
        errorCode: string;
        /**
         * The error message.
         */
        errorMessage: string;
        /**
         * The error message parameters.
         */
        errorMessageParameters: {[key: string]: string};
        /**
         * The error tags.
         */
        errorTags: {[key: string]: string};
        /**
         * The possible causes.
         */
        possibleCauses: string;
        /**
         * The recommended action.
         */
        recommendedAction: string;
    }

    /**
     * InMageRcm mobility agent details.
     */
    export interface InMageRcmMobilityAgentDetailsResponse {
        /**
         * The agent version expiry date.
         */
        agentVersionExpiryDate: string;
        /**
         * The driver version.
         */
        driverVersion: string;
        /**
         * The driver version expiry date.
         */
        driverVersionExpiryDate: string;
        /**
         * A value indicating whether agent is upgradeable or not.
         */
        isUpgradeable: string;
        /**
         * The time of the last heartbeat received from the agent.
         */
        lastHeartbeatUtc: string;
        /**
         * The latest agent version release date.
         */
        latestAgentReleaseDate: string;
        /**
         * The latest upgradeable version available without reboot.
         */
        latestUpgradableVersionWithoutReboot: string;
        /**
         * The latest agent version available.
         */
        latestVersion: string;
        /**
         * The whether update is possible or not.
         */
        reasonsBlockingUpgrade: string[];
        /**
         * The agent version.
         */
        version: string;
    }

    /**
     * InMageRcm NIC details.
     */
    export interface InMageRcmNicDetailsResponse {
        /**
         * A value indicating whether this is the primary NIC.
         */
        isPrimaryNic?: string;
        /**
         * A value indicating whether this NIC is selected for failover.
         */
        isSelectedForFailover?: string;
        /**
         * The NIC Id.
         */
        nicId: string;
        /**
         * The source IP address.
         */
        sourceIPAddress: string;
        /**
         * The source IP address type.
         */
        sourceIPAddressType: string;
        /**
         * Source network Id.
         */
        sourceNetworkId: string;
        /**
         * Source subnet name.
         */
        sourceSubnetName: string;
        /**
         * The target IP address.
         */
        targetIPAddress?: string;
        /**
         * The target IP address type.
         */
        targetIPAddressType?: string;
        /**
         * Target subnet name.
         */
        targetSubnetName?: string;
        /**
         * The test IP address.
         */
        testIPAddress?: string;
        /**
         * The test IP address type.
         */
        testIPAddressType?: string;
        /**
         * Test subnet name.
         */
        testSubnetName?: string;
    }

    /**
     * InMageRcm specific policy details.
     */
    export interface InMageRcmPolicyDetailsResponse {
        /**
         * The app consistent snapshot frequency in minutes.
         */
        appConsistentFrequencyInMinutes?: number;
        /**
         * The crash consistent snapshot frequency in minutes.
         */
        crashConsistentFrequencyInMinutes?: number;
        /**
         * A value indicating whether multi-VM sync has to be enabled.
         */
        enableMultiVmSync?: string;
        /**
         * Gets the class type. Overridden in derived classes.
         * Expected value is 'InMageRcm'.
         */
        instanceType: "InMageRcm";
        /**
         * The duration in minutes until which the recovery points need to be stored.
         */
        recoveryPointHistoryInMinutes?: number;
    }

    /**
     * InMageRcm protected disk details.
     */
    export interface InMageRcmProtectedDiskDetailsResponse {
        /**
         * The disk capacity in bytes.
         */
        capacityInBytes: number;
        /**
         * The data pending at source agent in MB.
         */
        dataPendingAtSourceAgentInMB: number;
        /**
         * The data pending in log data store in MB.
         */
        dataPendingInLogDataStoreInMB: number;
        /**
         * The DiskEncryptionSet ARM Id.
         */
        diskEncryptionSetId: string;
        /**
         * The disk Id.
         */
        diskId: string;
        /**
         * The disk name.
         */
        diskName: string;
        /**
         * The disk type.
         */
        diskType?: string;
        /**
         * The initial replication details.
         */
        irDetails?: InMageRcmSyncDetailsResponse;
        /**
         * A value indicating whether initial replication is complete or not.
         */
        isInitialReplicationComplete: string;
        /**
         * A value indicating whether the disk is the OS disk.
         */
        isOSDisk: string;
        /**
         * The log storage account ARM Id.
         */
        logStorageAccountId: string;
        /**
         * The resync details.
         */
        resyncDetails?: InMageRcmSyncDetailsResponse;
        /**
         * The uri of the seed blob.
         */
        seedBlobUri: string;
        /**
         * The ARM Id of the seed managed disk.
         */
        seedManagedDiskId: string;
        /**
         * The ARM Id of the target managed disk.
         */
        targetManagedDiskId: string;
    }

    /**
     * InMageRcm provider specific container mapping details.
     */
    export interface InMageRcmProtectionContainerMappingDetailsResponse {
        /**
         * A value indicating whether the flag for enable agent auto upgrade.
         */
        enableAgentAutoUpgrade: string;
        /**
         * Gets the class type. Overridden in derived classes.
         * Expected value is 'InMageRcm'.
         */
        instanceType: "InMageRcm";
    }

    /**
     * InMageRcm provider specific details.
     */
    export interface InMageRcmReplicationDetailsResponse {
        /**
         * The agent version to which last agent upgrade was attempted.
         */
        agentUpgradeAttemptToVersion: string;
        /**
         * The agent upgrade blocking error information.
         */
        agentUpgradeBlockingErrorDetails?: InMageRcmAgentUpgradeBlockingErrorDetailsResponse[];
        /**
         * The agent upgrade job Id.
         */
        agentUpgradeJobId: string;
        /**
         * The agent auto upgrade state.
         */
        agentUpgradeState: string;
        /**
         * The allocated memory in MB.
         */
        allocatedMemoryInMB: number;
        /**
         * The discovered VM details.
         */
        discoveredVmDetails?: InMageRcmDiscoveredProtectedVmDetailsResponse;
        /**
         * The type of the discovered VM.
         */
        discoveryType: string;
        /**
         * The ARM Id of the discovered VM.
         */
        fabricDiscoveryMachineId: string;
        /**
         * The recovery point Id to which the VM was failed over.
         */
        failoverRecoveryPointId: string;
        /**
         * The firmware type.
         */
        firmwareType: string;
        /**
         * The initial replication processed bytes. This includes sum of total bytes transferred and matched bytes on all selected disks in source VM.
         */
        initialReplicationProcessedBytes: number;
        /**
         * The initial replication progress health.
         */
        initialReplicationProgressHealth: string;
        /**
         * The initial replication progress percentage. This is calculated based on total bytes processed for all disks in the source VM.
         */
        initialReplicationProgressPercentage: number;
        /**
         * The initial replication transferred bytes from source VM to azure for all selected disks on source VM.
         */
        initialReplicationTransferredBytes: number;
        /**
         * Gets the Instance type.
         * Expected value is 'InMageRcm'.
         */
        instanceType: "InMageRcm";
        /**
         * The virtual machine internal identifier.
         */
        internalIdentifier: string;
        /**
         * A value indicating whether agent registration was successful after failover.
         */
        isAgentRegistrationSuccessfulAfterFailover: boolean;
        /**
         * A value indicating whether last agent upgrade was successful or not.
         */
        isLastUpgradeSuccessful: string;
        /**
         * The last agent upgrade error information.
         */
        lastAgentUpgradeErrorDetails?: InMageRcmLastAgentUpgradeErrorDetailsResponse[];
        /**
         * The last agent upgrade type.
         */
        lastAgentUpgradeType: string;
        /**
         * The last recovery point Id.
         */
        lastRecoveryPointId: string;
        /**
         * The last recovery point received time.
         */
        lastRecoveryPointReceived: string;
        /**
         * The last recovery point objective calculated time.
         */
        lastRpoCalculatedTime: string;
        /**
         * The last recovery point objective value.
         */
        lastRpoInSeconds: number;
        /**
         * License Type of the VM to be used.
         */
        licenseType?: string;
        /**
         * The mobility agent information.
         */
        mobilityAgentDetails?: InMageRcmMobilityAgentDetailsResponse;
        /**
         * The multi VM group name.
         */
        multiVmGroupName: string;
        /**
         * The type of the OS on the VM.
         */
        osType: string;
        /**
         * The IP address of the primary network interface.
         */
        primaryNicIpAddress: string;
        /**
         * The process server Id.
         */
        processServerId: string;
        /**
         * The process server name.
         */
        processServerName: string;
        /**
         * The processor core count.
         */
        processorCoreCount: number;
        /**
         * The list of protected disks.
         */
        protectedDisks?: InMageRcmProtectedDiskDetailsResponse[];
        /**
         * The resync processed bytes. This includes sum of total bytes transferred and matched bytes on all selected disks in source VM.
         */
        resyncProcessedBytes: number;
        /**
         * The resync progress health.
         */
        resyncProgressHealth: string;
        /**
         * The resync progress percentage. This is calculated based on total bytes processed for all disks in the source VM.
         */
        resyncProgressPercentage: number;
        /**
         * A value indicating whether resync is required.
         */
        resyncRequired: string;
        /**
         * The resync state.
         */
        resyncState: string;
        /**
         * The resync transferred bytes from source VM to azure for all selected disks on source VM.
         */
        resyncTransferredBytes: number;
        /**
         * The run-as account Id.
         */
        runAsAccountId: string;
        /**
         * The replication storage account ARM Id. This is applicable only for the blob based replication test hook.
         */
        storageAccountId: string;
        /**
         * The target availability set Id.
         */
        targetAvailabilitySetId?: string;
        /**
         * The target availability zone.
         */
        targetAvailabilityZone?: string;
        /**
         * The target boot diagnostics storage account ARM Id.
         */
        targetBootDiagnosticsStorageAccountId?: string;
        /**
         * The target generation.
         */
        targetGeneration: string;
        /**
         * The target location.
         */
        targetLocation?: string;
        /**
         * The target network Id.
         */
        targetNetworkId?: string;
        /**
         * The target proximity placement group Id.
         */
        targetProximityPlacementGroupId?: string;
        /**
         * The target resource group Id.
         */
        targetResourceGroupId?: string;
        /**
         * Target VM name.
         */
        targetVmName?: string;
        /**
         * The target VM size.
         */
        targetVmSize?: string;
        /**
         * The test network Id.
         */
        testNetworkId?: string;
        /**
         * The network details.
         */
        vmNics?: InMageRcmNicDetailsResponse[];
    }

    /**
     * InMageRcm disk level sync details.
     */
    export interface InMageRcmSyncDetailsResponse {
        /**
         * The bytes transferred in last 15 minutes from source VM to azure.
         */
        last15MinutesTransferredBytes: number;
        /**
         * The time of the last data transfer from source VM to azure.
         */
        lastDataTransferTimeUtc: string;
        /**
         * The last refresh time.
         */
        lastRefreshTime: string;
        /**
         * The total processed bytes. This includes bytes that are transferred from source VM to azure and matched bytes.
         */
        processedBytes: number;
        /**
         * The progress health.
         */
        progressHealth: string;
        /**
         * Progress in percentage. Progress percentage is calculated based on processed bytes.
         */
        progressPercentage: number;
        /**
         * The start time.
         */
        startTime: string;
        /**
         * The transferred bytes from source VM to azure for the disk.
         */
        transferredBytes: number;
    }

    /**
     * InMage provider specific settings.
     */
    export interface InMageReplicationDetailsResponse {
        /**
         * The active location of the VM. If the VM is being protected from Azure, this field will take values from { Azure, OnPrem }. If the VM is being protected between two data-centers, this field will be OnPrem always.
         */
        activeSiteType?: string;
        /**
         * The agent details.
         */
        agentDetails?: InMageAgentDetailsResponse;
        /**
         * A value indicating the underlying Azure storage account. If the VM is not running in Azure, this value shall be set to null.
         */
        azureStorageAccountId?: string;
        /**
         * The compressed data change rate in MB.
         */
        compressedDataRateInMB?: number;
        /**
         * The collection of Consistency points.
         */
        consistencyPoints?: {[key: string]: string};
        /**
         * The datastores of the on-premise machine Value can be list of strings that contain datastore names.
         */
        datastores?: string[];
        /**
         * A value indicating the discovery type of the machine.
         */
        discoveryType?: string;
        /**
         * A value indicating whether any disk is resized for this VM.
         */
        diskResized?: string;
        /**
         * The infrastructure VM Id.
         */
        infrastructureVmId?: string;
        /**
         * Gets the Instance type.
         * Expected value is 'InMage'.
         */
        instanceType: "InMage";
        /**
         * The source IP address.
         */
        ipAddress?: string;
        /**
         * A value indicating whether additional IR stats are available or not.
         */
        isAdditionalStatsAvailable?: boolean;
        /**
         * The last heartbeat received from the source server.
         */
        lastHeartbeat?: string;
        /**
         * The last RPO calculated time.
         */
        lastRpoCalculatedTime?: string;
        /**
         * The last update time received from on-prem components.
         */
        lastUpdateReceivedTime?: string;
        /**
         * The master target Id.
         */
        masterTargetId?: string;
        /**
         * The multi vm group Id, if any.
         */
        multiVmGroupId?: string;
        /**
         * The multi vm group name, if any.
         */
        multiVmGroupName?: string;
        /**
         * A value indicating whether the multi vm sync is enabled or disabled.
         */
        multiVmSyncStatus?: string;
        /**
         * The OS details.
         */
        osDetails?: OSDiskDetailsResponse;
        /**
         * The OS Version of the protected item.
         */
        osVersion?: string;
        /**
         * The process server Id.
         */
        processServerId?: string;
        /**
         * The list of protected disks.
         */
        protectedDisks?: InMageProtectedDiskDetailsResponse[];
        /**
         * The protection stage.
         */
        protectionStage?: string;
        /**
         * A value indicating whether the source server requires a restart after update.
         */
        rebootAfterUpdateStatus?: string;
        /**
         * The replica id of the protected item.
         */
        replicaId?: string;
        /**
         * The resync details of the machine.
         */
        resyncDetails?: InitialReplicationDetailsResponse;
        /**
         * The retention window end time.
         */
        retentionWindowEnd?: string;
        /**
         * The retention window start time.
         */
        retentionWindowStart?: string;
        /**
         * The RPO in seconds.
         */
        rpoInSeconds?: number;
        /**
         * The CPU count of the VM on the primary side.
         */
        sourceVmCpuCount?: number;
        /**
         * The RAM size of the VM on the primary side.
         */
        sourceVmRamSizeInMB?: number;
        /**
         * The total transferred data in bytes.
         */
        totalDataTransferred?: number;
        /**
         * The progress health.
         */
        totalProgressHealth?: string;
        /**
         * The uncompressed data change rate in MB.
         */
        uncompressedDataRateInMB?: number;
        /**
         * The vCenter infrastructure Id.
         */
        vCenterInfrastructureId?: string;
        /**
         * The validation errors of the on-premise machine Value can be list of validation errors.
         */
        validationErrors?: HealthErrorResponse[];
        /**
         * The virtual machine Id.
         */
        vmId?: string;
        /**
         * The PE Network details.
         */
        vmNics?: VMNicDetailsResponse[];
        /**
         * The protection state for the vm.
         */
        vmProtectionState?: string;
        /**
         * The protection state description for the vm.
         */
        vmProtectionStateDescription?: string;
    }

    /**
     * Initial replication details.
     */
    export interface InitialReplicationDetailsResponse {
        /**
         * The initial replication progress percentage.
         */
        initialReplicationProgressPercentage?: string;
        /**
         * Initial replication type.
         */
        initialReplicationType?: string;
    }

    /**
     * Implements InnerHealthError class. HealthError object has a list of InnerHealthErrors as child errors. InnerHealthError is used because this will prevent an infinite loop of structures when Hydra tries to auto-generate the contract. We are exposing the related health errors as inner health errors and all API consumers can utilize this in the same fashion as Exception -&gt; InnerException.
     */
    export interface InnerHealthErrorResponse {
        /**
         * Error creation time (UTC).
         */
        creationTimeUtc?: string;
        /**
         * Value indicating whether the health error is customer resolvable.
         */
        customerResolvability?: string;
        /**
         * ID of the entity.
         */
        entityId?: string;
        /**
         * Category of error.
         */
        errorCategory?: string;
        /**
         * Error code.
         */
        errorCode?: string;
        /**
         * The health error unique id.
         */
        errorId?: string;
        /**
         * Level of error.
         */
        errorLevel?: string;
        /**
         * Error message.
         */
        errorMessage?: string;
        /**
         * Source of error.
         */
        errorSource?: string;
        /**
         * Type of error.
         */
        errorType?: string;
        /**
         * Possible causes of error.
         */
        possibleCauses?: string;
        /**
         * Recommended action to resolve error.
         */
        recommendedAction?: string;
        /**
         * DRA error message.
         */
        recoveryProviderErrorMessage?: string;
        /**
         * Summary message of the entity.
         */
        summaryMessage?: string;
    }

    export interface InputEndpointResponse {
        endpointName?: string;
        privatePort?: number;
        protocol?: string;
        publicPort?: number;
    }

    /**
     * Mars agent details.
     */
    export interface MarsAgentDetailsResponse {
        /**
         * The Mars agent Bios Id.
         */
        biosId: string;
        /**
         * The fabric object Id.
         */
        fabricObjectId: string;
        /**
         * The Mars agent Fqdn.
         */
        fqdn: string;
        /**
         * The health of the Mars agent.
         */
        health: string;
        /**
         * The health errors.
         */
        healthErrors: HealthErrorResponse[];
        /**
         * The Mars agent Id.
         */
        id: string;
        /**
         * The last heartbeat received from the Mars agent.
         */
        lastHeartbeatUtc: string;
        /**
         * The Mars agent name.
         */
        name: string;
        /**
         * The version.
         */
        version: string;
    }

    /**
     * Details of a Master Target Server.
     */
    export interface MasterTargetServerResponse {
        /**
         * Agent expiry date.
         */
        agentExpiryDate?: string;
        /**
         * The version of the scout component on the server.
         */
        agentVersion?: string;
        /**
         * Agent version details.
         */
        agentVersionDetails?: VersionDetailsResponse;
        /**
         * The list of data stores in the fabric.
         */
        dataStores?: DataStoreResponse[];
        /**
         * Disk count of the master target.
         */
        diskCount?: number;
        /**
         * Health errors.
         */
        healthErrors?: HealthErrorResponse[];
        /**
         * The server Id.
         */
        id?: string;
        /**
         * The IP address of the server.
         */
        ipAddress?: string;
        /**
         * The last heartbeat received from the server.
         */
        lastHeartbeat?: string;
        /**
         * MARS agent expiry date.
         */
        marsAgentExpiryDate?: string;
        /**
         * MARS agent version.
         */
        marsAgentVersion?: string;
        /**
         * Mars agent version details.
         */
        marsAgentVersionDetails?: VersionDetailsResponse;
        /**
         * The server name.
         */
        name?: string;
        /**
         * The OS type of the server.
         */
        osType?: string;
        /**
         * OS Version of the master target.
         */
        osVersion?: string;
        /**
         * The retention volumes of Master target Server.
         */
        retentionVolumes?: RetentionVolumeResponse[];
        /**
         * Validation errors.
         */
        validationErrors?: HealthErrorResponse[];
        /**
         * Version status.
         */
        versionStatus?: string;
    }

    /**
     * Migration item properties.
     */
    export interface MigrationItemPropertiesResponse {
        /**
         * The allowed operations on the migration item based on the current migration state of the item.
         */
        allowedOperations: string[];
        /**
         * The critical past job details.
         */
        criticalJobHistory: CriticalJobHistoryDetailsResponse[];
        /**
         * The current job details.
         */
        currentJob: CurrentJobDetailsResponse;
        /**
         * The correlation Id for events associated with this migration item.
         */
        eventCorrelationId: string;
        /**
         * The consolidated health.
         */
        health: string;
        /**
         * The list of health errors.
         */
        healthErrors: HealthErrorResponse[];
        /**
         * The status of the last migration.
         */
        lastMigrationStatus: string;
        /**
         * The last migration time.
         */
        lastMigrationTime: string;
        /**
         * The status of the last test migration.
         */
        lastTestMigrationStatus: string;
        /**
         * The last test migration time.
         */
        lastTestMigrationTime: string;
        /**
         * The on-premise virtual machine name.
         */
        machineName: string;
        /**
         * The migration status.
         */
        migrationState: string;
        /**
         * The migration state description.
         */
        migrationStateDescription: string;
        /**
         * The name of policy governing this item.
         */
        policyFriendlyName: string;
        /**
         * The ARM Id of policy governing this item.
         */
        policyId: string;
        /**
         * The migration provider custom settings.
         */
        providerSpecificDetails?: VMwareCbtMigrationDetailsResponse;
        /**
         * The recovery services provider ARM Id.
         */
        recoveryServicesProviderId: string;
        /**
         * The replication status.
         */
        replicationStatus: string;
        /**
         * The test migrate state.
         */
        testMigrateState: string;
        /**
         * The test migrate state description.
         */
        testMigrateStateDescription: string;
    }

    /**
     * The Mobility Service update details.
     */
    export interface MobilityServiceUpdateResponse {
        /**
         * The OS type.
         */
        osType?: string;
        /**
         * The reboot status of the update - whether it is required or not.
         */
        rebootStatus?: string;
        /**
         * The version of the latest update.
         */
        version?: string;
    }

    /**
     * Network Mapping Properties.
     */
    export interface NetworkMappingPropertiesResponse {
        /**
         * The fabric specific settings.
         */
        fabricSpecificSettings?: AzureToAzureNetworkMappingSettingsResponse | VmmToAzureNetworkMappingSettingsResponse | VmmToVmmNetworkMappingSettingsResponse;
        /**
         * The primary fabric friendly name.
         */
        primaryFabricFriendlyName?: string;
        /**
         * The primary network friendly name.
         */
        primaryNetworkFriendlyName?: string;
        /**
         * The primary network id for network mapping.
         */
        primaryNetworkId?: string;
        /**
         * The recovery fabric ARM id.
         */
        recoveryFabricArmId?: string;
        /**
         * The recovery fabric friendly name.
         */
        recoveryFabricFriendlyName?: string;
        /**
         * The recovery network friendly name.
         */
        recoveryNetworkFriendlyName?: string;
        /**
         * The recovery network id for network mapping.
         */
        recoveryNetworkId?: string;
        /**
         * The pairing state for network mapping.
         */
        state?: string;
    }

    /**
     * Disk Details.
     */
    export interface OSDetailsResponse {
        /**
         * The OS Major Version.
         */
        oSMajorVersion?: string;
        /**
         * The OS Minor Version.
         */
        oSMinorVersion?: string;
        /**
         * The OS Version.
         */
        oSVersion?: string;
        /**
         * The OSEdition.
         */
        osEdition?: string;
        /**
         * VM Disk details.
         */
        osType?: string;
        /**
         * Product type.
         */
        productType?: string;
    }

    /**
     * Details of the OS Disk.
     */
    export interface OSDiskDetailsResponse {
        /**
         * The type of the OS on the VM.
         */
        osType?: string;
        /**
         * The id of the disk containing the OS.
         */
        osVhdId?: string;
        /**
         * The OS disk VHD name.
         */
        vhdName?: string;
    }

    /**
     * Supported OS upgrade versions.
     */
    export interface OSUpgradeSupportedVersionsResponse {
        /**
         * The source OS version name.
         */
        supportedSourceOsVersion: string;
        /**
         * The target OS version names.
         */
        supportedTargetOsVersions: string[];
    }

    /**
     * Protection profile custom data details.
     */
    export interface PolicyPropertiesResponse {
        /**
         * The FriendlyName.
         */
        friendlyName?: string;
        /**
         * The ReplicationChannelSetting.
         */
        providerSpecificDetails?: A2APolicyDetailsResponse | HyperVReplicaAzurePolicyDetailsResponse | HyperVReplicaBasePolicyDetailsResponse | HyperVReplicaBluePolicyDetailsResponse | HyperVReplicaPolicyDetailsResponse | InMageAzureV2PolicyDetailsResponse | InMageBasePolicyDetailsResponse | InMagePolicyDetailsResponse | InMageRcmFailbackPolicyDetailsResponse | InMageRcmPolicyDetailsResponse | VmwareCbtPolicyDetailsResponse;
    }

    /**
     * Process server details.
     */
    export interface ProcessServerDetailsResponse {
        /**
         * The available memory.
         */
        availableMemoryInBytes: number;
        /**
         * The available disk space.
         */
        availableSpaceInBytes: number;
        /**
         * The process server Bios Id.
         */
        biosId: string;
        /**
         * The disk usage status.
         */
        diskUsageStatus: string;
        /**
         * The fabric object Id.
         */
        fabricObjectId: string;
        /**
         * The process server Fqdn.
         */
        fqdn: string;
        /**
         * The free disk space percentage.
         */
        freeSpacePercentage: number;
        /**
         * The health of the process server.
         */
        health: string;
        /**
         * The health errors.
         */
        healthErrors: HealthErrorResponse[];
        /**
         * The historic health of the process server based on the health in last 24 hours.
         */
        historicHealth: string;
        /**
         * The process server Id.
         */
        id: string;
        /**
         * The list of IP addresses for communicating with the RCM component.
         */
        ipAddresses: string[];
        /**
         * The last heartbeat received from the process server.
         */
        lastHeartbeatUtc: string;
        /**
         * The memory usage percentage.
         */
        memoryUsagePercentage: number;
        /**
         * The memory usage status.
         */
        memoryUsageStatus: string;
        /**
         * The process server name.
         */
        name: string;
        /**
         * The processor usage percentage.
         */
        processorUsagePercentage: number;
        /**
         * The processor usage status.
         */
        processorUsageStatus: string;
        /**
         * The protected item count.
         */
        protectedItemCount: number;
        /**
         * The system load.
         */
        systemLoad: number;
        /**
         * The system load status.
         */
        systemLoadStatus: string;
        /**
         * The throughput in bytes.
         */
        throughputInBytes: number;
        /**
         * The throughput status.
         */
        throughputStatus: string;
        /**
         * The uploading pending data in bytes.
         */
        throughputUploadPendingDataInBytes: number;
        /**
         * The total memory.
         */
        totalMemoryInBytes: number;
        /**
         * The total disk space.
         */
        totalSpaceInBytes: number;
        /**
         * The used memory.
         */
        usedMemoryInBytes: number;
        /**
         * The used disk space.
         */
        usedSpaceInBytes: number;
        /**
         * The version.
         */
        version: string;
    }

    /**
     * Details of the Process Server.
     */
    export interface ProcessServerResponse {
        /**
         * Agent expiry date.
         */
        agentExpiryDate?: string;
        /**
         * The version of the scout component on the server.
         */
        agentVersion?: string;
        /**
         * The agent version details.
         */
        agentVersionDetails?: VersionDetailsResponse;
        /**
         * The available memory.
         */
        availableMemoryInBytes?: number;
        /**
         * The available space.
         */
        availableSpaceInBytes?: number;
        /**
         * The percentage of the CPU load.
         */
        cpuLoad?: string;
        /**
         * The CPU load status.
         */
        cpuLoadStatus?: string;
        /**
         * The Process Server's friendly name.
         */
        friendlyName?: string;
        /**
         * The health of Process Server.
         */
        health: string;
        /**
         * Health errors.
         */
        healthErrors?: HealthErrorResponse[];
        /**
         * The agent generated Id.
         */
        hostId?: string;
        /**
         * The Process Server Id.
         */
        id?: string;
        /**
         * The IP address of the server.
         */
        ipAddress?: string;
        /**
         * The last heartbeat received from the server.
         */
        lastHeartbeat?: string;
        /**
         * The servers configured with this PS.
         */
        machineCount?: string;
        /**
         * The MARS communication status.
         */
        marsCommunicationStatus: string;
        /**
         * The MARS registration status.
         */
        marsRegistrationStatus: string;
        /**
         * The memory usage status.
         */
        memoryUsageStatus?: string;
        /**
         * The list of the mobility service updates available on the Process Server.
         */
        mobilityServiceUpdates?: MobilityServiceUpdateResponse[];
        /**
         * The OS type of the server.
         */
        osType?: string;
        /**
         * OS Version of the process server. Note: This will get populated if user has CS version greater than 9.12.0.0.
         */
        osVersion?: string;
        /**
         * The PS service status.
         */
        psServiceStatus?: string;
        /**
         * The process server stats refresh time.
         */
        psStatsRefreshTime: string;
        /**
         * The number of replication pairs configured in this PS.
         */
        replicationPairCount?: string;
        /**
         * The space usage status.
         */
        spaceUsageStatus?: string;
        /**
         * The PS SSL cert expiry date.
         */
        sslCertExpiryDate?: string;
        /**
         * CS SSL cert expiry date.
         */
        sslCertExpiryRemainingDays?: number;
        /**
         * The percentage of the system load.
         */
        systemLoad?: string;
        /**
         * The system load status.
         */
        systemLoadStatus?: string;
        /**
         * The throughput in bytes.
         */
        throughputInBytes: number;
        /**
         * The throughput in MBps.
         */
        throughputInMBps: number;
        /**
         * The throughput status.
         */
        throughputStatus: string;
        /**
         * The uploading pending data in bytes.
         */
        throughputUploadPendingDataInBytes: number;
        /**
         * The total memory.
         */
        totalMemoryInBytes?: number;
        /**
         * The total space.
         */
        totalSpaceInBytes?: number;
        /**
         * Version status.
         */
        versionStatus?: string;
    }

    /**
     * Protection container mapping properties.
     */
    export interface ProtectionContainerMappingPropertiesResponse {
        /**
         * Health of pairing.
         */
        health?: string;
        /**
         * Health error.
         */
        healthErrorDetails?: HealthErrorResponse[];
        /**
         * Friendly name of replication policy.
         */
        policyFriendlyName?: string;
        /**
         * Policy ARM Id.
         */
        policyId?: string;
        /**
         * Provider specific provider details.
         */
        providerSpecificDetails?: A2AProtectionContainerMappingDetailsResponse | InMageRcmProtectionContainerMappingDetailsResponse | VMwareCbtProtectionContainerMappingDetailsResponse;
        /**
         * Friendly name of source fabric.
         */
        sourceFabricFriendlyName?: string;
        /**
         * Friendly name of source protection container.
         */
        sourceProtectionContainerFriendlyName?: string;
        /**
         * Association Status.
         */
        state?: string;
        /**
         * Friendly name of target fabric.
         */
        targetFabricFriendlyName?: string;
        /**
         * Friendly name of paired container.
         */
        targetProtectionContainerFriendlyName?: string;
        /**
         * Paired protection container ARM ID.
         */
        targetProtectionContainerId?: string;
    }

    /**
     * Push installer details.
     */
    export interface PushInstallerDetailsResponse {
        /**
         * The push installer Bios Id.
         */
        biosId: string;
        /**
         * The fabric object Id.
         */
        fabricObjectId: string;
        /**
         * The push installer Fqdn.
         */
        fqdn: string;
        /**
         * The health of the push installer.
         */
        health: string;
        /**
         * The health errors.
         */
        healthErrors: HealthErrorResponse[];
        /**
         * The push installer Id.
         */
        id: string;
        /**
         * The last heartbeat received from the push installer.
         */
        lastHeartbeatUtc: string;
        /**
         * The push installer name.
         */
        name: string;
        /**
         * The version.
         */
        version: string;
    }

    /**
     * RCM proxy details.
     */
    export interface RcmProxyDetailsResponse {
        /**
         * The RCM proxy Bios Id.
         */
        biosId: string;
        /**
         * The client authentication type.
         */
        clientAuthenticationType: string;
        /**
         * The fabric object Id.
         */
        fabricObjectId: string;
        /**
         * The RCM proxy Fqdn.
         */
        fqdn: string;
        /**
         * The health of the RCM proxy.
         */
        health: string;
        /**
         * The health errors.
         */
        healthErrors: HealthErrorResponse[];
        /**
         * The RCM proxy Id.
         */
        id: string;
        /**
         * The last heartbeat received from the RCM proxy.
         */
        lastHeartbeatUtc: string;
        /**
         * The RCM proxy name.
         */
        name: string;
        /**
         * The version.
         */
        version: string;
    }

    /**
     * Recovery plan A2A specific details.
     */
    export interface RecoveryPlanA2ADetailsResponse {
        /**
         * Gets the Instance type.
         * Expected value is 'A2A'.
         */
        instanceType: "A2A";
        /**
         * The primary extended location.
         */
        primaryExtendedLocation?: ExtendedLocationResponse;
        /**
         * The primary zone.
         */
        primaryZone?: string;
        /**
         * The recovery extended location.
         */
        recoveryExtendedLocation?: ExtendedLocationResponse;
        /**
         * The recovery zone.
         */
        recoveryZone?: string;
    }

    /**
     * Recovery plan action details.
     */
    export interface RecoveryPlanActionResponse {
        /**
         * The action name.
         */
        actionName: string;
        /**
         * The custom details.
         */
        customDetails: RecoveryPlanAutomationRunbookActionDetailsResponse | RecoveryPlanManualActionDetailsResponse | RecoveryPlanScriptActionDetailsResponse;
        /**
         * The list of failover directions.
         */
        failoverDirections: string[];
        /**
         * The list of failover types.
         */
        failoverTypes: string[];
    }

    /**
     * Recovery plan Automation runbook action details.
     */
    export interface RecoveryPlanAutomationRunbookActionDetailsResponse {
        /**
         * The fabric location.
         */
        fabricLocation: string;
        /**
         * Gets the type of action details (see RecoveryPlanActionDetailsTypes enum for possible values).
         * Expected value is 'AutomationRunbookActionDetails'.
         */
        instanceType: "AutomationRunbookActionDetails";
        /**
         * The runbook ARM Id.
         */
        runbookId?: string;
        /**
         * The runbook timeout.
         */
        timeout?: string;
    }

    /**
     * Recovery plan group details.
     */
    export interface RecoveryPlanGroupResponse {
        /**
         * The end group actions.
         */
        endGroupActions?: RecoveryPlanActionResponse[];
        /**
         * The group type.
         */
        groupType: string;
        /**
         * The list of protected items.
         */
        replicationProtectedItems?: RecoveryPlanProtectedItemResponse[];
        /**
         * The start group actions.
         */
        startGroupActions?: RecoveryPlanActionResponse[];
    }

    /**
     * Recovery plan manual action details.
     */
    export interface RecoveryPlanManualActionDetailsResponse {
        /**
         * The manual action description.
         */
        description?: string;
        /**
         * Gets the type of action details (see RecoveryPlanActionDetailsTypes enum for possible values).
         * Expected value is 'ManualActionDetails'.
         */
        instanceType: "ManualActionDetails";
    }

    /**
     * Recovery plan properties.
     */
    export interface RecoveryPlanPropertiesResponse {
        /**
         * The list of allowed operations.
         */
        allowedOperations?: string[];
        /**
         * The current scenario details.
         */
        currentScenario?: CurrentScenarioDetailsResponse;
        /**
         * The recovery plan status.
         */
        currentScenarioStatus?: string;
        /**
         * The recovery plan status description.
         */
        currentScenarioStatusDescription?: string;
        /**
         * The failover deployment model.
         */
        failoverDeploymentModel?: string;
        /**
         * The friendly name.
         */
        friendlyName?: string;
        /**
         * The recovery plan groups.
         */
        groups?: RecoveryPlanGroupResponse[];
        /**
         * The start time of the last planned failover.
         */
        lastPlannedFailoverTime?: string;
        /**
         * The start time of the last test failover.
         */
        lastTestFailoverTime?: string;
        /**
         * The start time of the last unplanned failover.
         */
        lastUnplannedFailoverTime?: string;
        /**
         * The primary fabric friendly name.
         */
        primaryFabricFriendlyName?: string;
        /**
         * The primary fabric Id.
         */
        primaryFabricId?: string;
        /**
         * The provider id and provider specific details.
         */
        providerSpecificDetails?: RecoveryPlanA2ADetailsResponse[];
        /**
         * The recovery fabric friendly name.
         */
        recoveryFabricFriendlyName?: string;
        /**
         * The recovery fabric Id.
         */
        recoveryFabricId?: string;
        /**
         * The list of replication providers.
         */
        replicationProviders?: string[];
    }

    /**
     * Recovery plan protected item.
     */
    export interface RecoveryPlanProtectedItemResponse {
        /**
         * The ARM Id of the recovery plan protected item.
         */
        id?: string;
        /**
         * The virtual machine Id.
         */
        virtualMachineId?: string;
    }

    /**
     * Recovery plan script action details.
     */
    export interface RecoveryPlanScriptActionDetailsResponse {
        /**
         * The fabric location.
         */
        fabricLocation: string;
        /**
         * Gets the type of action details (see RecoveryPlanActionDetailsTypes enum for possible values).
         * Expected value is 'ScriptActionDetails'.
         */
        instanceType: "ScriptActionDetails";
        /**
         * The script path.
         */
        path: string;
        /**
         * The script timeout.
         */
        timeout?: string;
    }

    /**
     * Recovery services provider properties.
     */
    export interface RecoveryServicesProviderPropertiesResponse {
        /**
         * The scenarios allowed on this provider.
         */
        allowedScenarios?: string[];
        /**
         * The authentication identity details.
         */
        authenticationIdentityDetails?: IdentityProviderDetailsResponse;
        /**
         * The Bios Id.
         */
        biosId?: string;
        /**
         * A value indicating whether DRA is responsive.
         */
        connectionStatus?: string;
        /**
         * The data plane authentication identity details.
         */
        dataPlaneAuthenticationIdentityDetails?: IdentityProviderDetailsResponse;
        /**
         * The DRA Id.
         */
        draIdentifier?: string;
        /**
         * The fabric friendly name.
         */
        fabricFriendlyName?: string;
        /**
         * Type of the site.
         */
        fabricType?: string;
        /**
         * Friendly name of the DRA.
         */
        friendlyName?: string;
        /**
         * The recovery services provider health error details.
         */
        healthErrorDetails?: HealthErrorResponse[];
        /**
         * Time when last heartbeat was sent by the DRA.
         */
        lastHeartBeat?: string;
        /**
         * The machine Id.
         */
        machineId?: string;
        /**
         * The machine name.
         */
        machineName?: string;
        /**
         * Number of protected VMs currently managed by the DRA.
         */
        protectedItemCount?: number;
        /**
         * The provider version.
         */
        providerVersion?: string;
        /**
         * The provider version details.
         */
        providerVersionDetails?: VersionDetailsResponse;
        /**
         * Expiry date of the version.
         */
        providerVersionExpiryDate?: string;
        /**
         * DRA version status.
         */
        providerVersionState?: string;
        /**
         * The resource access identity details.
         */
        resourceAccessIdentityDetails?: IdentityProviderDetailsResponse;
        /**
         * The fabric provider.
         */
        serverVersion?: string;
    }

    /**
     * Replication agent details.
     */
    export interface ReplicationAgentDetailsResponse {
        /**
         * The replication agent Bios Id.
         */
        biosId: string;
        /**
         * The fabric object Id.
         */
        fabricObjectId: string;
        /**
         * The replication agent Fqdn.
         */
        fqdn: string;
        /**
         * The health of the replication agent.
         */
        health: string;
        /**
         * The health errors.
         */
        healthErrors: HealthErrorResponse[];
        /**
         * The replication agent Id.
         */
        id: string;
        /**
         * The last heartbeat received from the replication agent.
         */
        lastHeartbeatUtc: string;
        /**
         * The replication agent name.
         */
        name: string;
        /**
         * The version.
         */
        version: string;
    }

    /**
     * Replication protected item custom data details.
     */
    export interface ReplicationProtectedItemPropertiesResponse {
        /**
         * The Current active location of the PE.
         */
        activeLocation?: string;
        /**
         * The allowed operations on the Replication protected item.
         */
        allowedOperations?: string[];
        /**
         * The current scenario.
         */
        currentScenario?: CurrentScenarioDetailsResponse;
        /**
         * The correlation Id for events associated with this protected item.
         */
        eventCorrelationId?: string;
        /**
         * The consolidated failover health for the VM.
         */
        failoverHealth?: string;
        /**
         * The recovery point ARM Id to which the Vm was failed over.
         */
        failoverRecoveryPointId?: string;
        /**
         * The name.
         */
        friendlyName?: string;
        /**
         * List of health errors.
         */
        healthErrors?: HealthErrorResponse[];
        /**
         * The Last successful failover time.
         */
        lastSuccessfulFailoverTime?: string;
        /**
         * The Last successful test failover time.
         */
        lastSuccessfulTestFailoverTime?: string;
        /**
         * The name of Policy governing this PE.
         */
        policyFriendlyName?: string;
        /**
         * The ID of Policy governing this PE.
         */
        policyId?: string;
        /**
         * The friendly name of the primary fabric.
         */
        primaryFabricFriendlyName?: string;
        /**
         * The fabric provider of the primary fabric.
         */
        primaryFabricProvider?: string;
        /**
         * The name of primary protection container friendly name.
         */
        primaryProtectionContainerFriendlyName?: string;
        /**
         * The protected item ARM Id.
         */
        protectableItemId?: string;
        /**
         * The type of protected item type.
         */
        protectedItemType?: string;
        /**
         * The protection status.
         */
        protectionState?: string;
        /**
         * The protection state description.
         */
        protectionStateDescription?: string;
        /**
         * The Replication provider custom settings.
         */
        providerSpecificDetails?: A2ACrossClusterMigrationReplicationDetailsResponse | A2AReplicationDetailsResponse | HyperVReplicaAzureReplicationDetailsResponse | HyperVReplicaBaseReplicationDetailsResponse | HyperVReplicaBlueReplicationDetailsResponse | HyperVReplicaReplicationDetailsResponse | InMageAzureV2ReplicationDetailsResponse | InMageRcmFailbackReplicationDetailsResponse | InMageRcmReplicationDetailsResponse | InMageReplicationDetailsResponse;
        /**
         * The recovery container Id.
         */
        recoveryContainerId?: string;
        /**
         * The friendly name of recovery fabric.
         */
        recoveryFabricFriendlyName?: string;
        /**
         * The Arm Id of recovery fabric.
         */
        recoveryFabricId?: string;
        /**
         * The name of recovery container friendly name.
         */
        recoveryProtectionContainerFriendlyName?: string;
        /**
         * The recovery provider ARM Id.
         */
        recoveryServicesProviderId?: string;
        /**
         * The consolidated protection health for the VM taking any issues with SRS as well as all the replication units associated with the VM's replication group into account. This is a string representation of the ProtectionHealth enumeration.
         */
        replicationHealth?: string;
        /**
         * The switch provider state.
         */
        switchProviderState?: string;
        /**
         * The switch provider state description.
         */
        switchProviderStateDescription?: string;
        /**
         * The Test failover state.
         */
        testFailoverState?: string;
        /**
         * The Test failover state description.
         */
        testFailoverStateDescription?: string;
    }

    /**
     * Reprotect agent details.
     */
    export interface ReprotectAgentDetailsResponse {
        /**
         * The list of accessible datastores fetched from discovery.
         */
        accessibleDatastores: string[];
        /**
         * The reprotect agent Bios Id.
         */
        biosId: string;
        /**
         * The fabric object Id.
         */
        fabricObjectId: string;
        /**
         * The reprotect agent Fqdn.
         */
        fqdn: string;
        /**
         * The health of the reprotect agent.
         */
        health: string;
        /**
         * The health errors.
         */
        healthErrors: HealthErrorResponse[];
        /**
         * The reprotect agent Id.
         */
        id: string;
        /**
         * The last time when SDS information discovered in SRS.
         */
        lastDiscoveryInUtc: string;
        /**
         * The last heartbeat received from the reprotect agent.
         */
        lastHeartbeatUtc: string;
        /**
         * The reprotect agent name.
         */
        name: string;
        /**
         * The protected item count.
         */
        protectedItemCount: number;
        /**
         * The Vcenter Id.
         */
        vcenterId: string;
        /**
         * The version.
         */
        version: string;
    }

    /**
     * The retention details of the MT.
     */
    export interface RetentionVolumeResponse {
        /**
         * The volume capacity.
         */
        capacityInBytes?: number;
        /**
         * The free space available in this volume.
         */
        freeSpaceInBytes?: number;
        /**
         * The threshold percentage.
         */
        thresholdPercentage?: number;
        /**
         * The volume name.
         */
        volumeName?: string;
    }

    /**
     * CS Accounts Details.
     */
    export interface RunAsAccountResponse {
        /**
         * The CS RunAs account Id.
         */
        accountId?: string;
        /**
         * The CS RunAs account name.
         */
        accountName?: string;
    }

    /**
     * Storage mapping properties.
     */
    export interface StorageClassificationMappingPropertiesResponse {
        /**
         * Target storage object Id.
         */
        targetStorageClassificationId?: string;
    }

    /**
     * vCenter properties.
     */
    export interface VCenterPropertiesResponse {
        /**
         * The VCenter discovery status.
         */
        discoveryStatus?: string;
        /**
         * The ARM resource name of the fabric containing this VCenter.
         */
        fabricArmResourceName?: string;
        /**
         * Friendly name of the vCenter.
         */
        friendlyName?: string;
        /**
         * The health errors for this VCenter.
         */
        healthErrors?: HealthErrorResponse[];
        /**
         * The infrastructure Id of vCenter.
         */
        infrastructureId?: string;
        /**
         * VCenter internal ID.
         */
        internalId?: string;
        /**
         * The IP address of the vCenter.
         */
        ipAddress?: string;
        /**
         * The time when the last heartbeat was received by vCenter.
         */
        lastHeartbeat?: string;
        /**
         * The port number for discovery.
         */
        port?: string;
        /**
         * The process server Id.
         */
        processServerId?: string;
        /**
         * The account Id which has privileges to discover the vCenter.
         */
        runAsAccountId?: string;
    }

    /**
     * Hyper V VM network details.
     */
    export interface VMNicDetailsResponse {
        /**
         * A value indicating whether the NIC has accelerated networking enabled.
         */
        enableAcceleratedNetworkingOnRecovery?: boolean;
        /**
         * Whether the TFO NIC has accelerated networking enabled.
         */
        enableAcceleratedNetworkingOnTfo?: boolean;
        /**
         * The IP configurations of the NIC.
         */
        ipConfigs?: IPConfigDetailsResponse[];
        /**
         * The nic Id.
         */
        nicId?: string;
        /**
         * The id of the NSG associated with the NIC.
         */
        recoveryNetworkSecurityGroupId?: string;
        /**
         * The name of the NIC to be used when creating target NICs.
         */
        recoveryNicName?: string;
        /**
         * The resource group of the NIC to be used when creating target NICs.
         */
        recoveryNicResourceGroupName?: string;
        /**
         * Recovery VM network Id.
         */
        recoveryVMNetworkId?: string;
        /**
         * The replica nic Id.
         */
        replicaNicId?: string;
        /**
         * A value indicating whether an existing NIC is allowed to be reused during failover subject to availability.
         */
        reuseExistingNic?: boolean;
        /**
         * Selection type for failover.
         */
        selectionType?: string;
        /**
         * The source nic ARM Id.
         */
        sourceNicArmId?: string;
        /**
         * Target NIC name.
         */
        targetNicName?: string;
        /**
         * The NSG to be used by NIC during test failover.
         */
        tfoNetworkSecurityGroupId?: string;
        /**
         * The name of the NIC to be used when creating target NICs in TFO.
         */
        tfoRecoveryNicName?: string;
        /**
         * The resource group of the NIC to be used when creating target NICs in TFO.
         */
        tfoRecoveryNicResourceGroupName?: string;
        /**
         * A value indicating whether an existing NIC is allowed to be reused during test failover subject to availability.
         */
        tfoReuseExistingNic?: boolean;
        /**
         * The network to be used by NIC during test failover.
         */
        tfoVMNetworkId?: string;
        /**
         * VM network name.
         */
        vMNetworkName?: string;
    }
    /**
     * vmnicDetailsResponseProvideDefaults sets the appropriate defaults for VMNicDetailsResponse
     */
    export function vmnicDetailsResponseProvideDefaults(val: VMNicDetailsResponse): VMNicDetailsResponse {
        return {
            ...val,
            reuseExistingNic: (val.reuseExistingNic) ?? false,
            tfoReuseExistingNic: (val.tfoReuseExistingNic) ?? false,
        };
    }

    /**
     * VMwareCbt provider specific settings.
     */
    export interface VMwareCbtMigrationDetailsResponse {
        /**
         * A value indicating the appliance monitoring details.
         */
        applianceMonitoringDetails: ApplianceMonitoringDetailsResponse;
        /**
         * The confidential VM key vault Id for ADE installation.
         */
        confidentialVmKeyVaultId?: string;
        /**
         * The data mover run as account Id.
         */
        dataMoverRunAsAccountId: string;
        /**
         * The delta sync progress percentage.
         */
        deltaSyncProgressPercentage: number;
        /**
         * The delta sync retry count.
         */
        deltaSyncRetryCount: number;
        /**
         * The firmware type.
         */
        firmwareType: string;
        /**
         * A value indicating the gateway operation details.
         */
        gatewayOperationDetails: GatewayOperationDetailsResponse;
        /**
         * The initial seeding progress percentage.
         */
        initialSeedingProgressPercentage: number;
        /**
         * The initial seeding retry count.
         */
        initialSeedingRetryCount: number;
        /**
         * Gets the instance type.
         * Expected value is 'VMwareCbt'.
         */
        instanceType: "VMwareCbt";
        /**
         * A value indicating whether checksum resync cycle is in progress.
         */
        isCheckSumResyncCycle: string;
        /**
         * The last recovery point Id.
         */
        lastRecoveryPointId: string;
        /**
         * The last recovery point received time.
         */
        lastRecoveryPointReceived: string;
        /**
         * License Type of the VM to be used.
         */
        licenseType?: string;
        /**
         * The migration progress percentage.
         */
        migrationProgressPercentage: number;
        /**
         * The recovery point Id to which the VM was migrated.
         */
        migrationRecoveryPointId: string;
        /**
         * A value indicating the SRS operation name.
         */
        operationName: string;
        /**
         * The name of the OS on the VM.
         */
        osName: string;
        /**
         * The type of the OS on the VM.
         */
        osType: string;
        /**
         * A value indicating whether auto resync is to be done.
         */
        performAutoResync?: string;
        /**
         * The list of protected disks.
         */
        protectedDisks?: VMwareCbtProtectedDiskDetailsResponse[];
        /**
         * The resume progress percentage.
         */
        resumeProgressPercentage: number;
        /**
         * The resume retry count.
         */
        resumeRetryCount: number;
        /**
         * The resync progress percentage.
         */
        resyncProgressPercentage: number;
        /**
         * A value indicating whether resync is required.
         */
        resyncRequired: string;
        /**
         * The resync retry count.
         */
        resyncRetryCount: number;
        /**
         * The resync state.
         */
        resyncState: string;
        /**
         * The tags for the seed disks.
         */
        seedDiskTags?: {[key: string]: string};
        /**
         * The snapshot run as account Id.
         */
        snapshotRunAsAccountId: string;
        /**
         * The SQL Server license type.
         */
        sqlServerLicenseType?: string;
        /**
         * The replication storage account ARM Id. This is applicable only for the blob based replication test hook.
         */
        storageAccountId: string;
        /**
         * A value indicating the inplace OS Upgrade version.
         */
        supportedOSVersions?: string[];
        /**
         * The target availability set Id.
         */
        targetAvailabilitySetId?: string;
        /**
         * The target availability zone.
         */
        targetAvailabilityZone?: string;
        /**
         * The target boot diagnostics storage account ARM Id.
         */
        targetBootDiagnosticsStorageAccountId?: string;
        /**
         * The tags for the target disks.
         */
        targetDiskTags?: {[key: string]: string};
        /**
         * The target generation.
         */
        targetGeneration: string;
        /**
         * The target location.
         */
        targetLocation: string;
        /**
         * The target network Id.
         */
        targetNetworkId?: string;
        /**
         * The tags for the target NICs.
         */
        targetNicTags?: {[key: string]: string};
        /**
         * The target proximity placement group Id.
         */
        targetProximityPlacementGroupId?: string;
        /**
         * The target resource group Id.
         */
        targetResourceGroupId?: string;
        /**
         * Target VM name.
         */
        targetVmName?: string;
        /**
         * The target VM security profile.
         */
        targetVmSecurityProfile?: VMwareCbtSecurityProfilePropertiesResponse;
        /**
         * The target VM size.
         */
        targetVmSize?: string;
        /**
         * The target VM tags.
         */
        targetVmTags?: {[key: string]: string};
        /**
         * The test network Id.
         */
        testNetworkId?: string;
        /**
         * The network details.
         */
        vmNics?: VMwareCbtNicDetailsResponse[];
        /**
         * The ARM Id of the VM discovered in VMware.
         */
        vmwareMachineId: string;
    }

    /**
     * VMwareCbt NIC details.
     */
    export interface VMwareCbtNicDetailsResponse {
        /**
         * A value indicating whether this is the primary NIC.
         */
        isPrimaryNic?: string;
        /**
         * A value indicating whether this NIC is selected for migration.
         */
        isSelectedForMigration?: string;
        /**
         * The NIC Id.
         */
        nicId: string;
        /**
         * The source IP address.
         */
        sourceIPAddress: string;
        /**
         * The source IP address type.
         */
        sourceIPAddressType: string;
        /**
         * Source network Id.
         */
        sourceNetworkId: string;
        /**
         * The target IP address.
         */
        targetIPAddress?: string;
        /**
         * The target IP address type.
         */
        targetIPAddressType?: string;
        /**
         * Target NIC name.
         */
        targetNicName?: string;
        /**
         * Target subnet name.
         */
        targetSubnetName?: string;
        /**
         * The test IP address.
         */
        testIPAddress?: string;
        /**
         * The test IP address type.
         */
        testIPAddressType?: string;
        /**
         * Source network Id.
         */
        testNetworkId?: string;
        /**
         * Test subnet name.
         */
        testSubnetName?: string;
    }

    /**
     * VMwareCbt protected disk details.
     */
    export interface VMwareCbtProtectedDiskDetailsResponse {
        /**
         * The disk capacity in bytes.
         */
        capacityInBytes: number;
        /**
         * The DiskEncryptionSet ARM Id.
         */
        diskEncryptionSetId: string;
        /**
         * The disk id.
         */
        diskId: string;
        /**
         * The disk name.
         */
        diskName: string;
        /**
         * The disk path.
         */
        diskPath: string;
        /**
         * The disk type.
         */
        diskType?: string;
        /**
         * A value indicating the gateway operation details.
         */
        gatewayOperationDetails: GatewayOperationDetailsResponse;
        /**
         * A value indicating whether the disk is the OS disk.
         */
        isOSDisk: string;
        /**
         * The log storage account ARM Id.
         */
        logStorageAccountId: string;
        /**
         * The key vault secret name of the log storage account.
         */
        logStorageAccountSasSecretName: string;
        /**
         * The uri of the seed blob.
         */
        seedBlobUri: string;
        /**
         * The ARM Id of the seed managed disk.
         */
        seedManagedDiskId: string;
        /**
         * The uri of the target blob.
         */
        targetBlobUri: string;
        /**
         * The name for the target managed disk.
         */
        targetDiskName?: string;
        /**
         * The ARM Id of the target managed disk.
         */
        targetManagedDiskId: string;
    }

    /**
     * VMwareCbt provider specific container mapping details.
     */
    export interface VMwareCbtProtectionContainerMappingDetailsResponse {
        /**
         * The SKUs to be excluded.
         */
        excludedSkus?: string[];
        /**
         * Gets the class type. Overridden in derived classes.
         * Expected value is 'VMwareCbt'.
         */
        instanceType: "VMwareCbt";
        /**
         * The target key vault ARM Id.
         */
        keyVaultId: string;
        /**
         * The target key vault URI.
         */
        keyVaultUri: string;
        /**
         * The role size to NIC count map.
         */
        roleSizeToNicCountMap: {[key: string]: number};
        /**
         * The secret name of the service bus connection string.
         */
        serviceBusConnectionStringSecretName: string;
        /**
         * The storage account ARM Id.
         */
        storageAccountId: string;
        /**
         * The secret name of the storage account.
         */
        storageAccountSasSecretName: string;
        /**
         * The target location.
         */
        targetLocation: string;
    }

    /**
     * VMwareCbt security profile input.
     */
    export interface VMwareCbtSecurityProfilePropertiesResponse {
        /**
         * A value indicating whether confidential compute encryption to be enabled.
         */
        isTargetVmConfidentialEncryptionEnabled?: string;
        /**
         * A value indicating whether integrity monitoring to be enabled.
         */
        isTargetVmIntegrityMonitoringEnabled?: string;
        /**
         * A value indicating whether secure boot to be enabled.
         */
        isTargetVmSecureBootEnabled?: string;
        /**
         * A value indicating whether trusted platform module to be enabled.
         */
        isTargetVmTpmEnabled?: string;
        /**
         * The target VM security type.
         */
        targetVmSecurityType?: string;
    }

    /**
     * Store the fabric details specific to the VMware fabric.
     */
    export interface VMwareDetailsResponse {
        /**
         * The number of source and target servers configured to talk to this CS.
         */
        agentCount?: string;
        /**
         * Agent expiry date.
         */
        agentExpiryDate?: string;
        /**
         * The agent Version.
         */
        agentVersion?: string;
        /**
         * The agent version details.
         */
        agentVersionDetails?: VersionDetailsResponse;
        /**
         * The available memory.
         */
        availableMemoryInBytes?: number;
        /**
         * The available space.
         */
        availableSpaceInBytes?: number;
        /**
         * The percentage of the CPU load.
         */
        cpuLoad?: string;
        /**
         * The CPU load status.
         */
        cpuLoadStatus?: string;
        /**
         * The CS service status.
         */
        csServiceStatus?: string;
        /**
         * The database server load.
         */
        databaseServerLoad?: string;
        /**
         * The database server load status.
         */
        databaseServerLoadStatus?: string;
        /**
         * The host name.
         */
        hostName?: string;
        /**
         * Gets the class type. Overridden in derived classes.
         * Expected value is 'VMware'.
         */
        instanceType: "VMware";
        /**
         * The IP address.
         */
        ipAddress?: string;
        /**
         * The last heartbeat received from CS server.
         */
        lastHeartbeat?: string;
        /**
         * The list of Master Target servers associated with the fabric.
         */
        masterTargetServers?: MasterTargetServerResponse[];
        /**
         * The memory usage status.
         */
        memoryUsageStatus?: string;
        /**
         * The number of process servers.
         */
        processServerCount?: string;
        /**
         * The list of Process Servers associated with the fabric.
         */
        processServers?: ProcessServerResponse[];
        /**
         * The number of protected servers.
         */
        protectedServers?: string;
        /**
         * PS template version.
         */
        psTemplateVersion?: string;
        /**
         * The number of replication pairs configured in this CS.
         */
        replicationPairCount?: string;
        /**
         * The list of run as accounts created on the server.
         */
        runAsAccounts?: RunAsAccountResponse[];
        /**
         * The space usage status.
         */
        spaceUsageStatus?: string;
        /**
         * CS SSL cert expiry date.
         */
        sslCertExpiryDate?: string;
        /**
         * CS SSL cert expiry date.
         */
        sslCertExpiryRemainingDays?: number;
        /**
         * The switch provider blocking error information.
         */
        switchProviderBlockingErrorDetails?: InMageFabricSwitchProviderBlockingErrorDetailsResponse[];
        /**
         * The percentage of the system load.
         */
        systemLoad?: string;
        /**
         * The system load status.
         */
        systemLoadStatus?: string;
        /**
         * The total memory.
         */
        totalMemoryInBytes?: number;
        /**
         * The total space.
         */
        totalSpaceInBytes?: number;
        /**
         * Version status.
         */
        versionStatus?: string;
        /**
         * The web load.
         */
        webLoad?: string;
        /**
         * The web load status.
         */
        webLoadStatus?: string;
    }

    /**
     * VMwareV2 fabric specific details.
     */
    export interface VMwareV2FabricSpecificDetailsResponse {
        /**
         * Gets the class type. Overridden in derived classes.
         * Expected value is 'VMwareV2'.
         */
        instanceType: "VMwareV2";
        /**
         * The Migration solution ARM Id.
         */
        migrationSolutionId: string;
        /**
         * The ARM Id of the physical site.
         */
        physicalSiteId: string;
        /**
         * The list of process servers.
         */
        processServers: ProcessServerDetailsResponse[];
        /**
         * The service container Id.
         */
        serviceContainerId: string;
        /**
         * The service endpoint.
         */
        serviceEndpoint: string;
        /**
         * The service resource Id.
         */
        serviceResourceId: string;
        /**
         * The ARM Id of the VMware site.
         */
        vmwareSiteId: string;
    }

    /**
     * Version related details.
     */
    export interface VersionDetailsResponse {
        /**
         * Version expiry date.
         */
        expiryDate?: string;
        /**
         * A value indicating whether security update required.
         */
        status?: string;
        /**
         * The agent version.
         */
        version?: string;
    }

    /**
     * VMM fabric specific details.
     */
    export interface VmmDetailsResponse {
        /**
         * Gets the class type. Overridden in derived classes.
         * Expected value is 'VMM'.
         */
        instanceType: "VMM";
    }

    /**
     * E2A Network Mapping fabric specific settings.
     */
    export interface VmmToAzureNetworkMappingSettingsResponse {
        /**
         * Gets the Instance type.
         * Expected value is 'VmmToAzure'.
         */
        instanceType: "VmmToAzure";
    }

    /**
     * E2E Network Mapping fabric specific settings.
     */
    export interface VmmToVmmNetworkMappingSettingsResponse {
        /**
         * Gets the Instance type.
         * Expected value is 'VmmToVmm'.
         */
        instanceType: "VmmToVmm";
    }

    /**
     * VMware Cbt specific policy details.
     */
    export interface VmwareCbtPolicyDetailsResponse {
        /**
         * The app consistent snapshot frequency in minutes.
         */
        appConsistentFrequencyInMinutes?: number;
        /**
         * The crash consistent snapshot frequency in minutes.
         */
        crashConsistentFrequencyInMinutes?: number;
        /**
         * Gets the class type. Overridden in derived classes.
         * Expected value is 'VMwareCbt'.
         */
        instanceType: "VMwareCbt";
        /**
         * The duration in minutes until which the recovery points need to be stored.
         */
        recoveryPointHistoryInMinutes?: number;
    }