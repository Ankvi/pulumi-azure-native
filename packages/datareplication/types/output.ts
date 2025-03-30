import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * AzStackHCI cluster properties.
 */
export interface AzStackHCIClusterPropertiesResponse {
    /**
     * Gets or sets the AzStackHCICluster FQDN name.
     */
    clusterName: string;
    /**
     * Gets or sets the AzStackHCICluster resource name.
     */
    resourceName: string;
    /**
     * Gets or sets the Storage account name.
     */
    storageAccountName: string;
    /**
     * Gets or sets the list of AzStackHCICluster Storage Container.
     */
    storageContainers: StorageContainerPropertiesResponse[];
}

/**
 * AzStackHCI fabric model custom properties.
 */
export interface AzStackHCIFabricModelCustomPropertiesResponse {
    /**
     * Gets or sets the Appliance name.
     */
    applianceName: string[];
    /**
     * Gets or sets the ARM Id of the AzStackHCI site.
     */
    azStackHciSiteId: string;
    /**
     * AzStackHCI cluster properties.
     */
    cluster: AzStackHCIClusterPropertiesResponse;
    /**
     * Gets or sets the fabric container Id.
     */
    fabricContainerId: string;
    /**
     * Gets or sets the fabric resource Id.
     */
    fabricResourceId: string;
    /**
     * Gets or sets the instance type.
     * Expected value is 'AzStackHCI'.
     */
    instanceType: "AzStackHCI";
    /**
     * Gets or sets the migration hub Uri.
     */
    migrationHubUri: string;
    /**
     * Gets or sets the Migration solution ARM Id.
     */
    migrationSolutionId: string;
}

/**
 * Dra model properties.
 */
export interface DraModelPropertiesResponse {
    /**
     * Identity model.
     */
    authenticationIdentity: IdentityModelResponse;
    /**
     * Gets or sets the Dra correlation Id.
     */
    correlationId: string;
    /**
     * Dra model custom properties.
     */
    customProperties: VMwareDraModelCustomPropertiesResponse;
    /**
     * Gets or sets the list of health errors.
     */
    healthErrors: HealthErrorModelResponse[];
    /**
     * Gets or sets a value indicating whether Dra is responsive.
     */
    isResponsive: boolean;
    /**
     * Gets or sets the time when last heartbeat was sent by the Dra.
     */
    lastHeartbeat: string;
    /**
     * Gets or sets the machine Id where Dra is running.
     */
    machineId: string;
    /**
     * Gets or sets the machine name where Dra is running.
     */
    machineName: string;
    /**
     * Gets or sets the provisioning state of the Dra.
     */
    provisioningState: string;
    /**
     * Identity model.
     */
    resourceAccessIdentity: IdentityModelResponse;
    /**
     * Gets or sets the Dra version.
     */
    versionNumber: string;
}

export interface DraModelResponseSystemData {
    /**
     * Gets or sets the timestamp of resource creation (UTC).
     */
    createdAt?: string;
    /**
     * Gets or sets identity that created the resource.
     */
    createdBy?: string;
    /**
     * Gets or sets the type of identity that created the resource: user, application,
     * managedIdentity.
     */
    createdByType?: string;
    /**
     * Gets or sets the timestamp of resource last modification (UTC).
     */
    lastModifiedAt?: string;
    /**
     * Gets or sets the identity that last modified the resource.
     */
    lastModifiedBy?: string;
    /**
     * Gets or sets the type of identity that last modified the resource: user, application,
     * managedIdentity.
     */
    lastModifiedByType?: string;
}

/**
 * Fabric model properties.
 */
export interface FabricModelPropertiesResponse {
    /**
     * Fabric model custom properties.
     */
    customProperties: AzStackHCIFabricModelCustomPropertiesResponse | HyperVMigrateFabricModelCustomPropertiesResponse | VMwareMigrateFabricModelCustomPropertiesResponse;
    /**
     * Gets or sets the fabric health.
     */
    health: string;
    /**
     * Gets or sets the list of health errors.
     */
    healthErrors: HealthErrorModelResponse[];
    /**
     * Gets or sets the provisioning state of the fabric.
     */
    provisioningState: string;
    /**
     * Gets or sets the service endpoint.
     */
    serviceEndpoint: string;
    /**
     * Gets or sets the service resource Id.
     */
    serviceResourceId: string;
}

export interface FabricModelResponseSystemData {
    /**
     * Gets or sets the timestamp of resource creation (UTC).
     */
    createdAt?: string;
    /**
     * Gets or sets identity that created the resource.
     */
    createdBy?: string;
    /**
     * Gets or sets the type of identity that created the resource: user, application,
     * managedIdentity.
     */
    createdByType?: string;
    /**
     * Gets or sets the timestamp of resource last modification (UTC).
     */
    lastModifiedAt?: string;
    /**
     * Gets or sets the identity that last modified the resource.
     */
    lastModifiedBy?: string;
    /**
     * Gets or sets the type of identity that last modified the resource: user, application,
     * managedIdentity.
     */
    lastModifiedByType?: string;
}

/**
 * Health error model.
 */
export interface HealthErrorModelResponse {
    /**
     * Gets or sets the list of affected resource correlation Ids. This can be used to
     * uniquely identify the count of items affected by a specific category and severity
     * as well as count of item affected by an specific issue.
     */
    affectedResourceCorrelationIds?: string[];
    /**
     * Gets or sets the type of affected resource type.
     */
    affectedResourceType?: string;
    /**
     * Gets or sets the error category.
     */
    category: string;
    /**
     * Gets or sets possible causes of the error.
     */
    causes: string;
    /**
     * Gets or sets a list of child health errors associated with this error.
     */
    childErrors?: InnerHealthErrorModelResponse[];
    /**
     * Gets or sets the error code.
     */
    code: string;
    /**
     * Gets or sets the error creation time.
     */
    creationTime: string;
    /**
     * Gets or sets the health category.
     */
    healthCategory: string;
    /**
     * Gets or sets a value indicating whether the error is customer resolvable.
     */
    isCustomerResolvable: boolean;
    /**
     * Gets or sets the error message.
     */
    message: string;
    /**
     * Gets or sets recommended action to resolve the error.
     */
    recommendation: string;
    /**
     * Gets or sets the error severity.
     */
    severity: string;
    /**
     * Gets or sets the error source.
     */
    source: string;
    /**
     * Gets or sets the error summary.
     */
    summary: string;
}

/**
 * HyperV migrate fabric model custom properties.
 */
export interface HyperVMigrateFabricModelCustomPropertiesResponse {
    /**
     * Gets or sets the fabric container Id.
     */
    fabricContainerId: string;
    /**
     * Gets or sets the fabric resource Id.
     */
    fabricResourceId: string;
    /**
     * Gets or sets the ARM Id of the HyperV site.
     */
    hyperVSiteId: string;
    /**
     * Gets or sets the instance type.
     * Expected value is 'HyperVMigrate'.
     */
    instanceType: "HyperVMigrate";
    /**
     * Gets or sets the migration hub Uri.
     */
    migrationHubUri: string;
    /**
     * Gets or sets the migration solution ARM Id.
     */
    migrationSolutionId: string;
}

/**
 * HyperVToAzStack disk input.
 */
export interface HyperVToAzStackHCIDiskInputResponse {
    /**
     * Gets or sets the type of the virtual hard disk, vhd or vhdx.
     */
    diskFileFormat: string;
    /**
     * Gets or sets the disk Id.
     */
    diskId: string;
    /**
     * Gets or sets the disk size in GB.
     */
    diskSizeGB: number;
    /**
     * Gets or sets a value indicating whether dynamic sizing is enabled on the virtual hard
     * disk.
     */
    isDynamic?: boolean;
    /**
     * Gets or sets a value indicating whether disk is os disk.
     */
    isOsDisk: boolean;
    /**
     * Gets or sets the target storage account ARM Id.
     */
    storageContainerId?: string;
}

/**
 * HyperVToAzStackHCI NIC properties.
 */
export interface HyperVToAzStackHCINicInputResponse {
    /**
     * Gets or sets the network name.
     */
    networkName: string;
    /**
     * Gets or sets the NIC Id.
     */
    nicId: string;
    /**
     * Gets or sets the selection type of the NIC.
     */
    selectionTypeForFailover: string;
    /**
     * Gets or sets the target network Id within AzStackHCI Cluster.
     */
    targetNetworkId: string;
    /**
     * Gets or sets the target test network Id within AzStackHCI Cluster.
     */
    testNetworkId: string;
}

/**
 * HyperV To AzStackHCI Policy model custom properties.
 */
export interface HyperVToAzStackHCIPolicyModelCustomPropertiesResponse {
    /**
     * Gets or sets the app consistent snapshot frequency (in minutes).
     */
    appConsistentFrequencyInMinutes: number;
    /**
     * Gets or sets the crash consistent snapshot frequency (in minutes).
     */
    crashConsistentFrequencyInMinutes: number;
    /**
     * Gets or sets the instance type.
     * Expected value is 'HyperVToAzStackHCI'.
     */
    instanceType: "HyperVToAzStackHCI";
    /**
     * Gets or sets the duration in minutes until which the recovery points need to be
     * stored.
     */
    recoveryPointHistoryInMinutes: number;
}

/**
 * HyperVToAzStackHCI protected disk properties.
 */
export interface HyperVToAzStackHCIProtectedDiskPropertiesResponse {
    /**
     * Gets or sets the disk capacity in bytes.
     */
    capacityInBytes: number;
    /**
     * Gets or sets the disk type.
     */
    diskType: string;
    /**
     * Gets or sets a value indicating whether dynamic sizing is enabled on the virtual hard
     * disk.
     */
    isDynamic: boolean;
    /**
     * Gets or sets a value indicating whether the disk is the OS disk.
     */
    isOsDisk: boolean;
    /**
     * Gets or sets the failover clone disk.
     */
    migrateDiskName: string;
    /**
     * Gets or sets the seed disk name.
     */
    seedDiskName: string;
    /**
     * Gets or sets the source disk Id.
     */
    sourceDiskId: string;
    /**
     * Gets or sets the source disk Name.
     */
    sourceDiskName: string;
    /**
     * Gets or sets the ARM Id of the storage container.
     */
    storageContainerId: string;
    /**
     * Gets or sets the local path of the storage container.
     */
    storageContainerLocalPath: string;
    /**
     * Gets or sets the test failover clone disk.
     */
    testMigrateDiskName: string;
}

/**
 * HyperV to AzStackHCI Protected item model custom properties.
 */
export interface HyperVToAzStackHCIProtectedItemModelCustomPropertiesResponse {
    /**
     * Gets or sets the location of the protected item.
     */
    activeLocation: string;
    /**
     * Gets or sets the location of Azure Arc HCI custom location resource.
     */
    customLocationRegion: string;
    /**
     * Gets or sets the list of disks to replicate.
     */
    disksToInclude: HyperVToAzStackHCIDiskInputResponse[];
    /**
     * Protected item dynamic memory config.
     */
    dynamicMemoryConfig?: ProtectedItemDynamicMemoryConfigResponse;
    /**
     * Gets or sets the ARM Id of the discovered machine.
     */
    fabricDiscoveryMachineId: string;
    /**
     * Gets or sets the recovery point Id to which the VM was failed over.
     */
    failoverRecoveryPointId: string;
    /**
     * Gets or sets the firmware type.
     */
    firmwareType: string;
    /**
     * Gets or sets the hypervisor generation of the virtual machine.
     */
    hyperVGeneration: string;
    /**
     * Gets or sets the initial replication progress percentage. This is calculated based on
     * total bytes processed for all disks in the source VM.
     */
    initialReplicationProgressPercentage: number;
    /**
     * Gets or sets the instance type.
     * Expected value is 'HyperVToAzStackHCI'.
     */
    instanceType: "HyperVToAzStackHCI";
    /**
     * Gets or sets a value indicating whether memory is dynamical.
     */
    isDynamicRam?: boolean;
    /**
     * Gets or sets the last recovery point Id.
     */
    lastRecoveryPointId: string;
    /**
     * Gets or sets the last recovery point received time.
     */
    lastRecoveryPointReceived: string;
    /**
     * Gets or sets the latest timestamp that replication status is updated.
     */
    lastReplicationUpdateTime: string;
    /**
     * Gets or sets the list of VM NIC to replicate.
     */
    nicsToInclude: HyperVToAzStackHCINicInputResponse[];
    /**
     * Gets or sets the name of the OS.
     */
    osName: string;
    /**
     * Gets or sets the type of the OS.
     */
    osType: string;
    /**
     * Gets or sets the list of protected disks.
     */
    protectedDisks: HyperVToAzStackHCIProtectedDiskPropertiesResponse[];
    /**
     * Gets or sets the VM NIC details.
     */
    protectedNics: HyperVToAzStackHCIProtectedNicPropertiesResponse[];
    /**
     * Gets or sets the resync progress percentage. This is calculated based on total bytes
     * processed for all disks in the source VM.
     */
    resyncProgressPercentage: number;
    /**
     * Gets or sets the Run As account Id.
     */
    runAsAccountId: string;
    /**
     * Gets or sets the source appliance name.
     */
    sourceApplianceName: string;
    /**
     * Gets or sets the source VM CPU cores.
     */
    sourceCpuCores: number;
    /**
     * Gets or sets the source DRA name.
     */
    sourceDraName: string;
    /**
     * Gets or sets the source VM ram memory size in megabytes.
     */
    sourceMemoryInMegaBytes: number;
    /**
     * Gets or sets the source VM display name.
     */
    sourceVmName: string;
    /**
     * Gets or sets the target storage container ARM Id.
     */
    storageContainerId: string;
    /**
     * Gets or sets the target appliance name.
     */
    targetApplianceName: string;
    /**
     * Gets or sets the Target Arc Cluster Custom Location ARM Id.
     */
    targetArcClusterCustomLocationId: string;
    /**
     * Gets or sets the Target AzStackHCI cluster name.
     */
    targetAzStackHciClusterName: string;
    /**
     * Gets or sets the target CPU cores.
     */
    targetCpuCores?: number;
    /**
     * Gets or sets the target DRA name.
     */
    targetDraName: string;
    /**
     * Gets or sets the Target HCI Cluster ARM Id.
     */
    targetHciClusterId: string;
    /**
     * Gets or sets the target location.
     */
    targetLocation: string;
    /**
     * Gets or sets the target memory in mega-bytes.
     */
    targetMemoryInMegaBytes?: number;
    /**
     * Gets or sets the target network Id within AzStackHCI Cluster.
     */
    targetNetworkId?: string;
    /**
     * Gets or sets the target resource group ARM Id.
     */
    targetResourceGroupId: string;
    /**
     * Gets or sets the BIOS Id of the target AzStackHCI VM.
     */
    targetVmBiosId: string;
    /**
     * Gets or sets the target VM display name.
     */
    targetVmName?: string;
    /**
     * Gets or sets the target test network Id within AzStackHCI Cluster.
     */
    testNetworkId?: string;
}

/**
 * HyperVToAzStackHCI NIC properties.
 */
export interface HyperVToAzStackHCIProtectedNicPropertiesResponse {
    /**
     * Gets or sets the NIC mac address.
     */
    macAddress: string;
    /**
     * Gets or sets the network name.
     */
    networkName: string;
    /**
     * Gets or sets the NIC Id.
     */
    nicId: string;
    /**
     * Gets or sets the selection type of the NIC.
     */
    selectionTypeForFailover: string;
    /**
     * Gets or sets the target network Id within AzStackHCI Cluster.
     */
    targetNetworkId: string;
    /**
     * Gets or sets the target test network Id within AzStackHCI Cluster.
     */
    testNetworkId: string;
}

/**
 * HyperV to AzStackHCI Replication extension model custom properties.
 */
export interface HyperVToAzStackHCIReplicationExtensionModelCustomPropertiesResponse {
    /**
     * Gets or sets the Uri of ASR.
     */
    asrServiceUri: string;
    /**
     * Gets or sets the ARM Id of the target AzStackHCI fabric.
     */
    azStackHciFabricArmId: string;
    /**
     * Gets or sets the ARM Id of the AzStackHCI site.
     */
    azStackHciSiteId: string;
    /**
     * Gets or sets the Uri of Gateway.
     */
    gatewayServiceUri: string;
    /**
     * Gets or sets the ARM Id of the source HyperV fabric.
     */
    hyperVFabricArmId: string;
    /**
     * Gets or sets the ARM Id of the HyperV site.
     */
    hyperVSiteId: string;
    /**
     * Gets or sets the instance type.
     * Expected value is 'HyperVToAzStackHCI'.
     */
    instanceType: "HyperVToAzStackHCI";
    /**
     * Gets or sets the Uri of Rcm.
     */
    rcmServiceUri: string;
    /**
     * Gets or sets the resource group.
     */
    resourceGroup: string;
    /**
     * Gets or sets the resource location.
     */
    resourceLocation: string;
    /**
     * Gets or sets the gateway service Id of source.
     */
    sourceGatewayServiceId: string;
    /**
     * Gets or sets the source storage container name.
     */
    sourceStorageContainerName: string;
    /**
     * Gets or sets the storage account Id.
     */
    storageAccountId?: string;
    /**
     * Gets or sets the Sas Secret of storage account.
     */
    storageAccountSasSecretName?: string;
    /**
     * Gets or sets the subscription.
     */
    subscriptionId: string;
    /**
     * Gets or sets the gateway service Id of target.
     */
    targetGatewayServiceId: string;
    /**
     * Gets or sets the target storage container name.
     */
    targetStorageContainerName: string;
}

/**
 * Identity model.
 */
export interface IdentityModelResponse {
    /**
     * Gets or sets the authority of the SPN with which Dra communicates to service.
     */
    aadAuthority: string;
    /**
     * Gets or sets the client/application Id of the SPN with which Dra communicates to
     * service.
     */
    applicationId: string;
    /**
     * Gets or sets the audience of the SPN with which Dra communicates to service.
     */
    audience: string;
    /**
     * Gets or sets the object Id of the SPN with which Dra communicates to service.
     */
    objectId: string;
    /**
     * Gets or sets the tenant Id of the SPN with which Dra communicates to service.
     */
    tenantId: string;
}

/**
 * Inner health error model.
 */
export interface InnerHealthErrorModelResponse {
    /**
     * Gets or sets the error category.
     */
    category: string;
    /**
     * Gets or sets possible causes of the error.
     */
    causes: string;
    /**
     * Gets or sets the error code.
     */
    code: string;
    /**
     * Gets or sets the error creation time.
     */
    creationTime: string;
    /**
     * Gets or sets the health category.
     */
    healthCategory: string;
    /**
     * Gets or sets a value indicating whether the error is customer resolvable.
     */
    isCustomerResolvable: boolean;
    /**
     * Gets or sets the error message.
     */
    message: string;
    /**
     * Gets or sets recommended action to resolve the error.
     */
    recommendation: string;
    /**
     * Gets or sets the error severity.
     */
    severity: string;
    /**
     * Gets or sets the error source.
     */
    source: string;
    /**
     * Gets or sets the error summary.
     */
    summary: string;
}

/**
 * Policy model properties.
 */
export interface PolicyModelPropertiesResponse {
    /**
     * Policy model custom properties.
     */
    customProperties: HyperVToAzStackHCIPolicyModelCustomPropertiesResponse | VMwareToAzStackHCIPolicyModelCustomPropertiesResponse;
    /**
     * Gets or sets the provisioning state of the policy.
     */
    provisioningState: string;
}

export interface PolicyModelResponseSystemData {
    /**
     * Gets or sets the timestamp of resource creation (UTC).
     */
    createdAt?: string;
    /**
     * Gets or sets identity that created the resource.
     */
    createdBy?: string;
    /**
     * Gets or sets the type of identity that created the resource: user, application,
     * managedIdentity.
     */
    createdByType?: string;
    /**
     * Gets or sets the timestamp of resource last modification (UTC).
     */
    lastModifiedAt?: string;
    /**
     * Gets or sets the identity that last modified the resource.
     */
    lastModifiedBy?: string;
    /**
     * Gets or sets the type of identity that last modified the resource: user, application,
     * managedIdentity.
     */
    lastModifiedByType?: string;
}

/**
 * Protected item dynamic memory config.
 */
export interface ProtectedItemDynamicMemoryConfigResponse {
    /**
     * Gets or sets maximum memory in MB.
     */
    maximumMemoryInMegaBytes: number;
    /**
     * Gets or sets minimum memory in MB.
     */
    minimumMemoryInMegaBytes: number;
    /**
     * Gets or sets target memory buffer in %.
     */
    targetMemoryBufferPercentage: number;
}

/**
 * Protected item model properties.
 */
export interface ProtectedItemModelPropertiesResponse {
    /**
     * Gets or sets the allowed scenarios on the protected item.
     */
    allowedJobs: string[];
    /**
     * Gets or sets the protected item correlation Id.
     */
    correlationId: string;
    currentJob: ProtectedItemModelPropertiesResponseCurrentJob;
    /**
     * Protected item model custom properties.
     */
    customProperties: HyperVToAzStackHCIProtectedItemModelCustomPropertiesResponse | VMwareToAzStackHCIProtectedItemModelCustomPropertiesResponse;
    /**
     * Gets or sets the DRA Id.
     */
    draId: string;
    /**
     * Gets or sets the fabric Id.
     */
    fabricId: string;
    /**
     * Gets or sets the fabric object Id.
     */
    fabricObjectId: string;
    /**
     * Gets or sets the fabric object name.
     */
    fabricObjectName: string;
    /**
     * Gets or sets the list of health errors.
     */
    healthErrors: HealthErrorModelResponse[];
    lastFailedEnableProtectionJob: ProtectedItemModelPropertiesResponseLastFailedEnableProtectionJob;
    lastFailedPlannedFailoverJob: ProtectedItemModelPropertiesResponseLastFailedPlannedFailoverJob;
    /**
     * Gets or sets the Last successful planned failover time.
     */
    lastSuccessfulPlannedFailoverTime: string;
    /**
     * Gets or sets the Last successful test failover time.
     */
    lastSuccessfulTestFailoverTime: string;
    /**
     * Gets or sets the Last successful unplanned failover time.
     */
    lastSuccessfulUnplannedFailoverTime: string;
    lastTestFailoverJob: ProtectedItemModelPropertiesResponseLastTestFailoverJob;
    /**
     * Gets or sets the policy name.
     */
    policyName: string;
    /**
     * Gets or sets the protection state.
     */
    protectionState: string;
    /**
     * Gets or sets the protection state description.
     */
    protectionStateDescription: string;
    /**
     * Gets or sets the provisioning state of the Dra.
     */
    provisioningState: string;
    /**
     * Gets or sets the replication extension name.
     */
    replicationExtensionName: string;
    /**
     * Gets or sets protected item replication health.
     */
    replicationHealth: string;
    /**
     * Gets or sets a value indicating whether resynchronization is required or not.
     */
    resyncRequired: boolean;
    /**
     * Gets or sets the resynchronization state.
     */
    resynchronizationState: string;
    /**
     * Gets or sets the source fabric provider Id.
     */
    sourceFabricProviderId: string;
    /**
     * Gets or sets the target DRA Id.
     */
    targetDraId: string;
    /**
     * Gets or sets the target fabric Id.
     */
    targetFabricId: string;
    /**
     * Gets or sets the target fabric provider Id.
     */
    targetFabricProviderId: string;
    /**
     * Gets or sets the test failover state.
     */
    testFailoverState: string;
    /**
     * Gets or sets the Test failover state description.
     */
    testFailoverStateDescription: string;
}

export interface ProtectedItemModelPropertiesResponseCurrentJob {
    /**
     * Gets or sets the workflow friendly display name.
     */
    displayName: string;
    /**
     * Gets or sets end time of the workflow.
     */
    endTime: string;
    /**
     * Gets or sets workflow Id.
     */
    id: string;
    /**
     * Gets or sets workflow name.
     */
    name: string;
    /**
     * Gets or sets protection scenario name.
     */
    scenarioName: string;
    /**
     * Gets or sets start time of the workflow.
     */
    startTime: string;
    /**
     * Gets or sets workflow state.
     */
    state: string;
}

export interface ProtectedItemModelPropertiesResponseLastFailedEnableProtectionJob {
    /**
     * Gets or sets the workflow friendly display name.
     */
    displayName: string;
    /**
     * Gets or sets end time of the workflow.
     */
    endTime: string;
    /**
     * Gets or sets workflow Id.
     */
    id: string;
    /**
     * Gets or sets workflow name.
     */
    name: string;
    /**
     * Gets or sets protection scenario name.
     */
    scenarioName: string;
    /**
     * Gets or sets start time of the workflow.
     */
    startTime: string;
    /**
     * Gets or sets workflow state.
     */
    state: string;
}

export interface ProtectedItemModelPropertiesResponseLastFailedPlannedFailoverJob {
    /**
     * Gets or sets the workflow friendly display name.
     */
    displayName: string;
    /**
     * Gets or sets end time of the workflow.
     */
    endTime: string;
    /**
     * Gets or sets workflow Id.
     */
    id: string;
    /**
     * Gets or sets workflow name.
     */
    name: string;
    /**
     * Gets or sets protection scenario name.
     */
    scenarioName: string;
    /**
     * Gets or sets start time of the workflow.
     */
    startTime: string;
    /**
     * Gets or sets workflow state.
     */
    state: string;
}

export interface ProtectedItemModelPropertiesResponseLastTestFailoverJob {
    /**
     * Gets or sets the workflow friendly display name.
     */
    displayName: string;
    /**
     * Gets or sets end time of the workflow.
     */
    endTime: string;
    /**
     * Gets or sets workflow Id.
     */
    id: string;
    /**
     * Gets or sets workflow name.
     */
    name: string;
    /**
     * Gets or sets protection scenario name.
     */
    scenarioName: string;
    /**
     * Gets or sets start time of the workflow.
     */
    startTime: string;
    /**
     * Gets or sets workflow state.
     */
    state: string;
}

export interface ProtectedItemModelResponseSystemData {
    /**
     * Gets or sets the timestamp of resource creation (UTC).
     */
    createdAt?: string;
    /**
     * Gets or sets identity that created the resource.
     */
    createdBy?: string;
    /**
     * Gets or sets the type of identity that created the resource: user, application,
     * managedIdentity.
     */
    createdByType?: string;
    /**
     * Gets or sets the timestamp of resource last modification (UTC).
     */
    lastModifiedAt?: string;
    /**
     * Gets or sets the identity that last modified the resource.
     */
    lastModifiedBy?: string;
    /**
     * Gets or sets the type of identity that last modified the resource: user, application,
     * managedIdentity.
     */
    lastModifiedByType?: string;
}

/**
 * Replication extension model properties.
 */
export interface ReplicationExtensionModelPropertiesResponse {
    /**
     * Replication extension model custom properties.
     */
    customProperties: HyperVToAzStackHCIReplicationExtensionModelCustomPropertiesResponse | VMwareToAzStackHCIReplicationExtensionModelCustomPropertiesResponse;
    /**
     * Gets or sets the provisioning state of the replication extension.
     */
    provisioningState: string;
}

export interface ReplicationExtensionModelResponseSystemData {
    /**
     * Gets or sets the timestamp of resource creation (UTC).
     */
    createdAt?: string;
    /**
     * Gets or sets identity that created the resource.
     */
    createdBy?: string;
    /**
     * Gets or sets the type of identity that created the resource: user, application,
     * managedIdentity.
     */
    createdByType?: string;
    /**
     * Gets or sets the timestamp of resource last modification (UTC).
     */
    lastModifiedAt?: string;
    /**
     * Gets or sets the identity that last modified the resource.
     */
    lastModifiedBy?: string;
    /**
     * Gets or sets the type of identity that last modified the resource: user, application,
     * managedIdentity.
     */
    lastModifiedByType?: string;
}

/**
 * Storage container properties.
 */
export interface StorageContainerPropertiesResponse {
    /**
     * Gets or sets the ClusterSharedVolumePath.
     */
    clusterSharedVolumePath: string;
    /**
     * Gets or sets the Name.
     */
    name: string;
}

/**
 * VMware DRA model custom properties.
 */
export interface VMwareDraModelCustomPropertiesResponse {
    /**
     * Gets or sets the BIOS Id of the DRA machine.
     */
    biosId: string;
    /**
     * Gets or sets the instance type.
     * Expected value is 'VMware'.
     */
    instanceType: "VMware";
    /**
     * Identity model.
     */
    marsAuthenticationIdentity: IdentityModelResponse;
}

/**
 * VMware migrate fabric model custom properties.
 */
export interface VMwareMigrateFabricModelCustomPropertiesResponse {
    /**
     * Gets or sets the instance type.
     * Expected value is 'VMwareMigrate'.
     */
    instanceType: "VMwareMigrate";
    /**
     * Gets or sets the ARM Id of the migration solution.
     */
    migrationSolutionId: string;
    /**
     * Gets or sets the ARM Id of the VMware site.
     */
    vmwareSiteId: string;
}

/**
 * VMwareToAzStack disk input.
 */
export interface VMwareToAzStackHCIDiskInputResponse {
    /**
     * Gets or sets the type of the virtual hard disk, vhd or vhdx.
     */
    diskFileFormat: string;
    /**
     * Gets or sets the disk Id.
     */
    diskId: string;
    /**
     * Gets or sets the disk size in GB.
     */
    diskSizeGB: number;
    /**
     * Gets or sets a value indicating whether dynamic sizing is enabled on the virtual hard
     * disk.
     */
    isDynamic?: boolean;
    /**
     * Gets or sets a value indicating whether disk is os disk.
     */
    isOsDisk: boolean;
    /**
     * Gets or sets the target storage account ARM Id.
     */
    storageContainerId?: string;
}

/**
 * VMwareToAzStackHCI NIC properties.
 */
export interface VMwareToAzStackHCINicInputResponse {
    /**
     * Gets or sets the NIC label.
     */
    label: string;
    /**
     * Gets or sets the network name.
     */
    networkName: string;
    /**
     * Gets or sets the NIC Id.
     */
    nicId: string;
    /**
     * Gets or sets the selection type of the NIC.
     */
    selectionTypeForFailover: string;
    /**
     * Gets or sets the target network Id within AzStackHCI Cluster.
     */
    targetNetworkId: string;
    /**
     * Gets or sets the target test network Id within AzStackHCI Cluster.
     */
    testNetworkId: string;
}

/**
 * VMware To AzStackHCI Policy model custom properties.
 */
export interface VMwareToAzStackHCIPolicyModelCustomPropertiesResponse {
    /**
     * Gets or sets the app consistent snapshot frequency (in minutes).
     */
    appConsistentFrequencyInMinutes: number;
    /**
     * Gets or sets the crash consistent snapshot frequency (in minutes).
     */
    crashConsistentFrequencyInMinutes: number;
    /**
     * Gets or sets the instance type.
     * Expected value is 'VMwareToAzStackHCI'.
     */
    instanceType: "VMwareToAzStackHCI";
    /**
     * Gets or sets the duration in minutes until which the recovery points need to be
     * stored.
     */
    recoveryPointHistoryInMinutes: number;
}

/**
 * VMwareToAzStackHCI protected disk properties.
 */
export interface VMwareToAzStackHCIProtectedDiskPropertiesResponse {
    /**
     * Gets or sets the disk capacity in bytes.
     */
    capacityInBytes: number;
    /**
     * Gets or sets the disk type.
     */
    diskType: string;
    /**
     * Gets or sets a value indicating whether dynamic sizing is enabled on the virtual hard
     * disk.
     */
    isDynamic: boolean;
    /**
     * Gets or sets a value indicating whether the disk is the OS disk.
     */
    isOsDisk: boolean;
    /**
     * Gets or sets the failover clone disk.
     */
    migrateDiskName: string;
    /**
     * Gets or sets the seed disk name.
     */
    seedDiskName: string;
    /**
     * Gets or sets the source disk Id.
     */
    sourceDiskId: string;
    /**
     * Gets or sets the source disk Name.
     */
    sourceDiskName: string;
    /**
     * Gets or sets the ARM Id of the storage container.
     */
    storageContainerId: string;
    /**
     * Gets or sets the local path of the storage container.
     */
    storageContainerLocalPath: string;
    /**
     * Gets or sets the test failover clone disk.
     */
    testMigrateDiskName: string;
}

/**
 * VMware to AzStackHCI Protected item model custom properties.
 */
export interface VMwareToAzStackHCIProtectedItemModelCustomPropertiesResponse {
    /**
     * Gets or sets the location of the protected item.
     */
    activeLocation: string;
    /**
     * Gets or sets the location of Azure Arc HCI custom location resource.
     */
    customLocationRegion: string;
    /**
     * Gets or sets the list of disks to replicate.
     */
    disksToInclude: VMwareToAzStackHCIDiskInputResponse[];
    /**
     * Protected item dynamic memory config.
     */
    dynamicMemoryConfig?: ProtectedItemDynamicMemoryConfigResponse;
    /**
     * Gets or sets the ARM Id of the discovered machine.
     */
    fabricDiscoveryMachineId: string;
    /**
     * Gets or sets the recovery point Id to which the VM was failed over.
     */
    failoverRecoveryPointId: string;
    /**
     * Gets or sets the firmware type.
     */
    firmwareType: string;
    /**
     * Gets or sets the hypervisor generation of the virtual machine possible values are 1,2.
     */
    hyperVGeneration: string;
    /**
     * Gets or sets the initial replication progress percentage. This is calculated based on
     * total bytes processed for all disks in the source VM.
     */
    initialReplicationProgressPercentage: number;
    /**
     * Gets or sets the instance type.
     * Expected value is 'VMwareToAzStackHCI'.
     */
    instanceType: "VMwareToAzStackHCI";
    /**
     * Gets or sets a value indicating whether memory is dynamical.
     */
    isDynamicRam?: boolean;
    /**
     * Gets or sets the last recovery point Id.
     */
    lastRecoveryPointId: string;
    /**
     * Gets or sets the last recovery point received time.
     */
    lastRecoveryPointReceived: string;
    /**
     * Gets or sets the latest timestamp that replication status is updated.
     */
    lastReplicationUpdateTime: string;
    /**
     * Gets or sets the migration progress percentage.
     */
    migrationProgressPercentage: number;
    /**
     * Gets or sets the list of VM NIC to replicate.
     */
    nicsToInclude: VMwareToAzStackHCINicInputResponse[];
    /**
     * Gets or sets the name of the OS.
     */
    osName: string;
    /**
     * Gets or sets the type of the OS.
     */
    osType: string;
    /**
     * Gets or sets a value indicating whether auto resync is to be done.
     */
    performAutoResync?: boolean;
    /**
     * Gets or sets the list of protected disks.
     */
    protectedDisks: VMwareToAzStackHCIProtectedDiskPropertiesResponse[];
    /**
     * Gets or sets the VM NIC details.
     */
    protectedNics: VMwareToAzStackHCIProtectedNicPropertiesResponse[];
    /**
     * Gets or sets the resume progress percentage.
     */
    resumeProgressPercentage: number;
    /**
     * Gets or sets the resume retry count.
     */
    resumeRetryCount: number;
    /**
     * Gets or sets the resync progress percentage. This is calculated based on total bytes
     * processed for all disks in the source VM.
     */
    resyncProgressPercentage: number;
    /**
     * Gets or sets a value indicating whether resync is required.
     */
    resyncRequired: boolean;
    /**
     * Gets or sets the resync retry count.
     */
    resyncRetryCount: number;
    /**
     * Gets or sets the resync state.
     */
    resyncState: string;
    /**
     * Gets or sets the run as account Id.
     */
    runAsAccountId: string;
    /**
     * Gets or sets the source appliance name.
     */
    sourceApplianceName: string;
    /**
     * Gets or sets the source VM CPU cores.
     */
    sourceCpuCores: number;
    /**
     * Gets or sets the source DRA name.
     */
    sourceDraName: string;
    /**
     * Gets or sets the source VM ram memory size in megabytes.
     */
    sourceMemoryInMegaBytes: number;
    /**
     * Gets or sets the source VM display name.
     */
    sourceVmName: string;
    /**
     * Gets or sets the target storage container ARM Id.
     */
    storageContainerId: string;
    /**
     * Gets or sets the target appliance name.
     */
    targetApplianceName: string;
    /**
     * Gets or sets the Target Arc Cluster Custom Location ARM Id.
     */
    targetArcClusterCustomLocationId: string;
    /**
     * Gets or sets the Target AzStackHCI cluster name.
     */
    targetAzStackHciClusterName: string;
    /**
     * Gets or sets the target CPU cores.
     */
    targetCpuCores?: number;
    /**
     * Gets or sets the target DRA name.
     */
    targetDraName: string;
    /**
     * Gets or sets the Target HCI Cluster ARM Id.
     */
    targetHciClusterId: string;
    /**
     * Gets or sets the target location.
     */
    targetLocation: string;
    /**
     * Gets or sets the target memory in mega-bytes.
     */
    targetMemoryInMegaBytes?: number;
    /**
     * Gets or sets the target network Id within AzStackHCI Cluster.
     */
    targetNetworkId?: string;
    /**
     * Gets or sets the target resource group ARM Id.
     */
    targetResourceGroupId: string;
    /**
     * Gets or sets the BIOS Id of the target AzStackHCI VM.
     */
    targetVmBiosId: string;
    /**
     * Gets or sets the target VM display name.
     */
    targetVmName?: string;
    /**
     * Gets or sets the target test network Id within AzStackHCI Cluster.
     */
    testNetworkId?: string;
}

/**
 * VMwareToAzStackHCI NIC properties.
 */
export interface VMwareToAzStackHCIProtectedNicPropertiesResponse {
    /**
     * Gets or sets a value indicating whether this is the primary NIC.
     */
    isPrimaryNic?: boolean;
    /**
     * Gets or sets the NIC label.
     */
    label: string;
    /**
     * Gets or sets the NIC mac address.
     */
    macAddress: string;
    /**
     * Gets or sets the network name.
     */
    networkName: string;
    /**
     * Gets or sets the NIC Id.
     */
    nicId: string;
    /**
     * Gets or sets the selection type of the NIC.
     */
    selectionTypeForFailover: string;
    /**
     * Gets or sets the target network Id within AzStackHCI Cluster.
     */
    targetNetworkId: string;
    /**
     * Gets or sets the target test network Id within AzStackHCI Cluster.
     */
    testNetworkId: string;
}

/**
 * VMware to AzStackHCI Replication extension model custom properties.
 */
export interface VMwareToAzStackHCIReplicationExtensionModelCustomPropertiesResponse {
    /**
     * Gets or sets the Uri of ASR.
     */
    asrServiceUri: string;
    /**
     * Gets or sets the ARM Id of the target AzStackHCI fabric.
     */
    azStackHciFabricArmId: string;
    /**
     * Gets or sets the ARM Id of the AzStackHCI site.
     */
    azStackHciSiteId: string;
    /**
     * Gets or sets the Uri of Gateway.
     */
    gatewayServiceUri: string;
    /**
     * Gets or sets the instance type.
     * Expected value is 'VMwareToAzStackHCI'.
     */
    instanceType: "VMwareToAzStackHCI";
    /**
     * Gets or sets the Uri of Rcm.
     */
    rcmServiceUri: string;
    /**
     * Gets or sets the resource group.
     */
    resourceGroup: string;
    /**
     * Gets or sets the resource location.
     */
    resourceLocation: string;
    /**
     * Gets or sets the gateway service Id of source.
     */
    sourceGatewayServiceId: string;
    /**
     * Gets or sets the source storage container name.
     */
    sourceStorageContainerName: string;
    /**
     * Gets or sets the storage account Id.
     */
    storageAccountId?: string;
    /**
     * Gets or sets the Sas Secret of storage account.
     */
    storageAccountSasSecretName?: string;
    /**
     * Gets or sets the subscription.
     */
    subscriptionId: string;
    /**
     * Gets or sets the gateway service Id of target.
     */
    targetGatewayServiceId: string;
    /**
     * Gets or sets the target storage container name.
     */
    targetStorageContainerName: string;
    /**
     * Gets or sets the ARM Id of the source VMware fabric.
     */
    vmwareFabricArmId: string;
    /**
     * Gets or sets the ARM Id of the VMware site.
     */
    vmwareSiteId: string;
}

/**
 * Vault properties.
 */
export interface VaultModelPropertiesResponse {
    /**
     * Gets or sets the provisioning state of the vault.
     */
    provisioningState: string;
    /**
     * Gets or sets the service resource Id.
     */
    serviceResourceId: string;
    /**
     * Gets or sets the type of vault.
     */
    vaultType?: string;
}

export interface VaultModelResponseSystemData {
    /**
     * Gets or sets the timestamp of resource creation (UTC).
     */
    createdAt?: string;
    /**
     * Gets or sets identity that created the resource.
     */
    createdBy?: string;
    /**
     * Gets or sets the type of identity that created the resource: user, application,
     * managedIdentity.
     */
    createdByType?: string;
    /**
     * Gets or sets the timestamp of resource last modification (UTC).
     */
    lastModifiedAt?: string;
    /**
     * Gets or sets the identity that last modified the resource.
     */
    lastModifiedBy?: string;
    /**
     * Gets or sets the type of identity that last modified the resource: user, application,
     * managedIdentity.
     */
    lastModifiedByType?: string;
}

