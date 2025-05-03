import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * AzStackHCI cluster properties.
 */
export interface AzStackHCIClusterPropertiesArgs {
    /**
     * Gets or sets the AzStackHCICluster FQDN name.
     */
    clusterName: pulumi.Input<string>;
    /**
     * Gets or sets the AzStackHCICluster resource name.
     */
    resourceName: pulumi.Input<string>;
    /**
     * Gets or sets the Storage account name.
     */
    storageAccountName: pulumi.Input<string>;
    /**
     * Gets or sets the list of AzStackHCICluster Storage Container.
     */
    storageContainers: pulumi.Input<pulumi.Input<StorageContainerPropertiesArgs>[]>;
}

/**
 * AzStackHCI fabric model custom properties.
 */
export interface AzStackHCIFabricModelCustomPropertiesArgs {
    /**
     * Gets or sets the ARM Id of the AzStackHCI site.
     */
    azStackHciSiteId: pulumi.Input<string>;
    /**
     * AzStackHCI cluster properties.
     */
    cluster: pulumi.Input<AzStackHCIClusterPropertiesArgs>;
    /**
     * Gets or sets the instance type.
     * Expected value is 'AzStackHCI'.
     */
    instanceType: pulumi.Input<"AzStackHCI">;
    /**
     * Gets or sets the Migration solution ARM Id.
     */
    migrationSolutionId: pulumi.Input<string>;
}

/**
 * Private endpoint connection details at member level.
 */
export interface ConnectionDetailsArgs {
    /**
     * Gets or sets group id.
     */
    groupId?: pulumi.Input<string>;
    /**
     * Gets or sets id.
     */
    id?: pulumi.Input<string>;
    /**
     * Gets or sets link identifier.
     */
    linkIdentifier?: pulumi.Input<string>;
    /**
     * Gets or sets member name.
     */
    memberName?: pulumi.Input<string>;
    /**
     * Gets or sets private IP address.
     */
    privateIpAddress?: pulumi.Input<string>;
}

/**
 * Dra model properties.
 */
export interface DraModelPropertiesArgs {
    /**
     * Identity model.
     */
    authenticationIdentity: pulumi.Input<IdentityModelArgs>;
    /**
     * Dra model custom properties.
     */
    customProperties: pulumi.Input<VMwareDraModelCustomPropertiesArgs>;
    /**
     * Gets or sets the machine Id where Dra is running.
     */
    machineId: pulumi.Input<string>;
    /**
     * Gets or sets the machine name where Dra is running.
     */
    machineName: pulumi.Input<string>;
    /**
     * Identity model.
     */
    resourceAccessIdentity: pulumi.Input<IdentityModelArgs>;
}

/**
 * Fabric agent model properties.
 */
export interface FabricAgentModelPropertiesArgs {
    /**
     * Identity model.
     */
    authenticationIdentity: pulumi.Input<IdentityModelArgs>;
    /**
     * Fabric agent model custom properties.
     */
    customProperties: pulumi.Input<VMwareFabricAgentModelCustomPropertiesArgs>;
    /**
     * Gets or sets the machine Id where fabric agent is running.
     */
    machineId: pulumi.Input<string>;
    /**
     * Gets or sets the machine name where fabric agent is running.
     */
    machineName: pulumi.Input<string>;
    /**
     * Identity model.
     */
    resourceAccessIdentity: pulumi.Input<IdentityModelArgs>;
}

/**
 * Fabric model properties.
 */
export interface FabricModelPropertiesArgs {
    /**
     * Fabric model custom properties.
     */
    customProperties: pulumi.Input<AzStackHCIFabricModelCustomPropertiesArgs | HyperVMigrateFabricModelCustomPropertiesArgs | VMwareMigrateFabricModelCustomPropertiesArgs>;
}

/**
 * Represents of a connection's group information.
 */
export interface GroupConnectivityInformationArgs {
    /**
     * Gets or sets customer visible FQDNs.
     */
    customerVisibleFqdns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Gets or sets group id.
     */
    groupId?: pulumi.Input<string>;
    /**
     * Gets or sets Internal Fqdn.
     */
    internalFqdn?: pulumi.Input<string>;
    /**
     * Gets or sets member name.
     */
    memberName?: pulumi.Input<string>;
    /**
     * Gets or sets the private link service arm region.
     */
    privateLinkServiceArmRegion?: pulumi.Input<string>;
    /**
     * Gets or sets the redirect map id.
     */
    redirectMapId?: pulumi.Input<string>;
}

/**
 * HyperV migrate fabric model custom properties.
 */
export interface HyperVMigrateFabricModelCustomPropertiesArgs {
    /**
     * Gets or sets the ARM Id of the HyperV site.
     */
    hyperVSiteId: pulumi.Input<string>;
    /**
     * Gets or sets the instance type.
     * Expected value is 'HyperVMigrate'.
     */
    instanceType: pulumi.Input<"HyperVMigrate">;
    /**
     * Gets or sets the migration solution ARM Id.
     */
    migrationSolutionId: pulumi.Input<string>;
}

/**
 * HyperVToAzStack disk input.
 */
export interface HyperVToAzStackHCIDiskInputArgs {
    /**
     * Gets or sets the type of the virtual hard disk, vhd or vhdx.
     */
    diskFileFormat: pulumi.Input<string>;
    /**
     * Gets or sets the disk Id.
     */
    diskId: pulumi.Input<string>;
    /**
     * Gets or sets the disk size in GB.
     */
    diskSizeGB: pulumi.Input<number>;
    /**
     * Gets or sets a value indicating whether dynamic sizing is enabled on the virtual hard
     * disk.
     */
    isDynamic?: pulumi.Input<boolean>;
    /**
     * Gets or sets a value indicating whether disk is os disk.
     */
    isOsDisk: pulumi.Input<boolean>;
    /**
     * Gets or sets the target storage account ARM Id.
     */
    storageContainerId?: pulumi.Input<string>;
}

/**
 * HyperVToAzStackHCI NIC properties.
 */
export interface HyperVToAzStackHCINicInputArgs {
    /**
     * Gets or sets the NIC Id.
     */
    nicId: pulumi.Input<string>;
    /**
     * Gets or sets the selection type of the NIC.
     */
    selectionTypeForFailover: pulumi.Input<string | enums.VMNicSelection>;
    /**
     * Gets or sets the target network Id within AzStackHCI Cluster.
     */
    targetNetworkId: pulumi.Input<string>;
    /**
     * Gets or sets the target test network Id within AzStackHCI Cluster.
     */
    testNetworkId: pulumi.Input<string>;
}

/**
 * HyperV To AzStackHCI Policy model custom properties.
 */
export interface HyperVToAzStackHCIPolicyModelCustomPropertiesArgs {
    /**
     * Gets or sets the app consistent snapshot frequency (in minutes).
     */
    appConsistentFrequencyInMinutes: pulumi.Input<number>;
    /**
     * Gets or sets the crash consistent snapshot frequency (in minutes).
     */
    crashConsistentFrequencyInMinutes: pulumi.Input<number>;
    /**
     * Gets or sets the instance type.
     * Expected value is 'HyperVToAzStackHCI'.
     */
    instanceType: pulumi.Input<"HyperVToAzStackHCI">;
    /**
     * Gets or sets the duration in minutes until which the recovery points need to be
     * stored.
     */
    recoveryPointHistoryInMinutes: pulumi.Input<number>;
}

/**
 * HyperV to AzStackHCI Protected item model custom properties.
 */
export interface HyperVToAzStackHCIProtectedItemModelCustomPropertiesArgs {
    /**
     * Gets or sets the location of Azure Arc HCI custom location resource.
     */
    customLocationRegion: pulumi.Input<string>;
    /**
     * Gets or sets the list of disks to replicate.
     */
    disksToInclude: pulumi.Input<pulumi.Input<HyperVToAzStackHCIDiskInputArgs>[]>;
    /**
     * Protected item dynamic memory config.
     */
    dynamicMemoryConfig?: pulumi.Input<ProtectedItemDynamicMemoryConfigArgs>;
    /**
     * Gets or sets the ARM Id of the discovered machine.
     */
    fabricDiscoveryMachineId: pulumi.Input<string>;
    /**
     * Gets or sets the hypervisor generation of the virtual machine.
     */
    hyperVGeneration: pulumi.Input<string>;
    /**
     * Gets or sets the instance type.
     * Expected value is 'HyperVToAzStackHCI'.
     */
    instanceType: pulumi.Input<"HyperVToAzStackHCI">;
    /**
     * Gets or sets a value indicating whether memory is dynamical.
     */
    isDynamicRam?: pulumi.Input<boolean>;
    /**
     * Gets or sets the list of VM NIC to replicate.
     */
    nicsToInclude: pulumi.Input<pulumi.Input<HyperVToAzStackHCINicInputArgs>[]>;
    /**
     * Gets or sets the Run As account Id.
     */
    runAsAccountId: pulumi.Input<string>;
    /**
     * Gets or sets the source DRA name.
     */
    sourceDraName: pulumi.Input<string>;
    /**
     * Gets or sets the target storage container ARM Id.
     */
    storageContainerId: pulumi.Input<string>;
    /**
     * Gets or sets the Target Arc Cluster Custom Location ARM Id.
     */
    targetArcClusterCustomLocationId: pulumi.Input<string>;
    /**
     * Gets or sets the target CPU cores.
     */
    targetCpuCores?: pulumi.Input<number>;
    /**
     * Gets or sets the target DRA name.
     */
    targetDraName: pulumi.Input<string>;
    /**
     * Gets or sets the Target HCI Cluster ARM Id.
     */
    targetHciClusterId: pulumi.Input<string>;
    /**
     * Gets or sets the target memory in mega-bytes.
     */
    targetMemoryInMegaBytes?: pulumi.Input<number>;
    /**
     * Gets or sets the target network Id within AzStackHCI Cluster.
     */
    targetNetworkId?: pulumi.Input<string>;
    /**
     * Gets or sets the target resource group ARM Id.
     */
    targetResourceGroupId: pulumi.Input<string>;
    /**
     * Gets or sets the target VM display name.
     */
    targetVmName?: pulumi.Input<string>;
    /**
     * Gets or sets the target test network Id within AzStackHCI Cluster.
     */
    testNetworkId?: pulumi.Input<string>;
}

/**
 * HyperV to AzStackHCI Replication extension model custom properties.
 */
export interface HyperVToAzStackHCIReplicationExtensionModelCustomPropertiesArgs {
    /**
     * Gets or sets the ARM Id of the target AzStackHCI fabric.
     */
    azStackHciFabricArmId: pulumi.Input<string>;
    /**
     * Gets or sets the ARM Id of the source HyperV fabric.
     */
    hyperVFabricArmId: pulumi.Input<string>;
    /**
     * Gets or sets the instance type.
     * Expected value is 'HyperVToAzStackHCI'.
     */
    instanceType: pulumi.Input<"HyperVToAzStackHCI">;
    /**
     * Gets or sets the storage account Id.
     */
    storageAccountId?: pulumi.Input<string>;
    /**
     * Gets or sets the Sas Secret of storage account.
     */
    storageAccountSasSecretName?: pulumi.Input<string>;
}

/**
 * Identity model.
 */
export interface IdentityModelArgs {
    /**
     * Gets or sets the authority of the SPN with which fabric agent communicates to service.
     */
    aadAuthority: pulumi.Input<string>;
    /**
     * Gets or sets the client/application Id of the SPN with which fabric agent communicates to service.
     */
    applicationId: pulumi.Input<string>;
    /**
     * Gets or sets the audience of the SPN with which fabric agent communicates to service.
     */
    audience: pulumi.Input<string>;
    /**
     * Gets or sets the object Id of the SPN with which fabric agent communicates to service.
     */
    objectId: pulumi.Input<string>;
    /**
     * Gets or sets the tenant Id of the SPN with which fabric agent communicates to service.
     */
    tenantId: pulumi.Input<string>;
}

/**
 * Policy model properties.
 */
export interface PolicyModelPropertiesArgs {
    /**
     * Policy model custom properties.
     */
    customProperties: pulumi.Input<HyperVToAzStackHCIPolicyModelCustomPropertiesArgs | VMwareToAzStackHCIPolicyModelCustomPropertiesArgs>;
}

/**
 * Represent private Endpoint network resource that is linked to the Private Endpoint connection.
 */
export interface PrivateEndpointArgs {
    /**
     * Gets or sets the id.
     */
    id?: pulumi.Input<string>;
}

/**
 * Represents private endpoint connection proxy request.
 */
export interface PrivateEndpointConnectionProxyPropertiesArgs {
    /**
     * Represent remote private endpoint information for the private endpoint connection proxy.
     */
    remotePrivateEndpoint?: pulumi.Input<RemotePrivateEndpointArgs>;
}

/**
 * Represents Private endpoint connection response properties.
 */
export interface PrivateEndpointConnectionResponsePropertiesArgs {
    /**
     * Represent private Endpoint network resource that is linked to the Private Endpoint connection.
     */
    privateEndpoint?: pulumi.Input<PrivateEndpointArgs>;
    /**
     * Represents Private link service connection state.
     */
    privateLinkServiceConnectionState?: pulumi.Input<PrivateLinkServiceConnectionStateArgs>;
}

/**
 * Represents of an NRP private link service connection.
 */
export interface PrivateLinkServiceConnectionArgs {
    /**
     * Gets or sets group ids.
     */
    groupIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Gets or sets private link service connection name.
     */
    name?: pulumi.Input<string>;
    /**
     * Gets or sets the request message for the private link service connection.
     */
    requestMessage?: pulumi.Input<string>;
}

/**
 * Represents Private link service connection state.
 */
export interface PrivateLinkServiceConnectionStateArgs {
    /**
     * Gets or sets actions required.
     */
    actionsRequired?: pulumi.Input<string>;
    /**
     * Gets or sets description.
     */
    description?: pulumi.Input<string>;
    /**
     * Gets or sets the status.
     */
    status?: pulumi.Input<string | enums.PrivateEndpointConnectionStatus>;
}

/**
 * Represents NRP private link service proxy.
 */
export interface PrivateLinkServiceProxyArgs {
    /**
     * Gets or sets group connectivity information.
     */
    groupConnectivityInformation?: pulumi.Input<pulumi.Input<GroupConnectivityInformationArgs>[]>;
    /**
     * Gets or sets private link service proxy id.
     */
    id?: pulumi.Input<string>;
    /**
     * Represent remote private endpoint connection.
     */
    remotePrivateEndpointConnection?: pulumi.Input<RemotePrivateEndpointConnectionArgs>;
    /**
     * Represents Private link service connection state.
     */
    remotePrivateLinkServiceConnectionState?: pulumi.Input<PrivateLinkServiceConnectionStateArgs>;
}

/**
 * Protected item dynamic memory config.
 */
export interface ProtectedItemDynamicMemoryConfigArgs {
    /**
     * Gets or sets maximum memory in MB.
     */
    maximumMemoryInMegaBytes: pulumi.Input<number>;
    /**
     * Gets or sets minimum memory in MB.
     */
    minimumMemoryInMegaBytes: pulumi.Input<number>;
    /**
     * Gets or sets target memory buffer in %.
     */
    targetMemoryBufferPercentage: pulumi.Input<number>;
}

/**
 * Protected item model properties.
 */
export interface ProtectedItemModelPropertiesArgs {
    /**
     * Protected item model custom properties.
     */
    customProperties: pulumi.Input<HyperVToAzStackHCIProtectedItemModelCustomPropertiesArgs | VMwareToAzStackHCIProtectedItemModelCustomPropertiesArgs>;
    /**
     * Gets or sets the policy name.
     */
    policyName: pulumi.Input<string>;
    /**
     * Gets or sets the replication extension name.
     */
    replicationExtensionName: pulumi.Input<string>;
}

/**
 * Represent remote private endpoint information for the private endpoint connection proxy.
 */
export interface RemotePrivateEndpointArgs {
    /**
     * Gets or sets the list of Connection Details. This is the connection details for private endpoint.
     */
    connectionDetails?: pulumi.Input<pulumi.Input<ConnectionDetailsArgs>[]>;
    /**
     * Gets or sets private link service proxy id.
     */
    id: pulumi.Input<string>;
    /**
     * Gets or sets the list of Manual Private Link Service Connections and gets populated for Manual approval flow.
     */
    manualPrivateLinkServiceConnections?: pulumi.Input<pulumi.Input<PrivateLinkServiceConnectionArgs>[]>;
    /**
     * Gets or sets the list of Private Link Service Connections and gets populated for Auto approval flow.
     */
    privateLinkServiceConnections?: pulumi.Input<pulumi.Input<PrivateLinkServiceConnectionArgs>[]>;
    /**
     * Gets or sets the list of private link service proxies.
     */
    privateLinkServiceProxies?: pulumi.Input<pulumi.Input<PrivateLinkServiceProxyArgs>[]>;
}

/**
 * Represent remote private endpoint connection.
 */
export interface RemotePrivateEndpointConnectionArgs {
    /**
     * Gets or sets the remote private endpoint connection id.
     */
    id?: pulumi.Input<string>;
}

/**
 * Replication extension model properties.
 */
export interface ReplicationExtensionModelPropertiesArgs {
    /**
     * Replication extension model custom properties.
     */
    customProperties: pulumi.Input<HyperVToAzStackHCIReplicationExtensionModelCustomPropertiesArgs | VMwareToAzStackHCIReplicationExtensionModelCustomPropertiesArgs>;
}

/**
 * Storage container properties.
 */
export interface StorageContainerPropertiesArgs {
    /**
     * Gets or sets the ClusterSharedVolumePath.
     */
    clusterSharedVolumePath: pulumi.Input<string>;
    /**
     * Gets or sets the Name.
     */
    name: pulumi.Input<string>;
}

/**
 * VMware DRA model custom properties.
 */
export interface VMwareDraModelCustomPropertiesArgs {
    /**
     * Gets or sets the BIOS Id of the DRA machine.
     */
    biosId: pulumi.Input<string>;
    /**
     * Gets or sets the instance type.
     * Expected value is 'VMware'.
     */
    instanceType: pulumi.Input<"VMware">;
    /**
     * Identity model.
     */
    marsAuthenticationIdentity: pulumi.Input<IdentityModelArgs>;
}

/**
 * VMware fabric agent model custom properties.
 */
export interface VMwareFabricAgentModelCustomPropertiesArgs {
    /**
     * Gets or sets the BIOS Id of the fabric agent machine.
     */
    biosId: pulumi.Input<string>;
    /**
     * Discriminator property for FabricAgentModelCustomProperties.
     * Expected value is 'VMware'.
     */
    instanceType: pulumi.Input<"VMware">;
    /**
     * Identity model.
     */
    marsAuthenticationIdentity: pulumi.Input<IdentityModelArgs>;
}

/**
 * VMware migrate fabric model custom properties.
 */
export interface VMwareMigrateFabricModelCustomPropertiesArgs {
    /**
     * Gets or sets the instance type.
     * Expected value is 'VMwareMigrate'.
     */
    instanceType: pulumi.Input<"VMwareMigrate">;
    /**
     * Gets or sets the ARM Id of the migration solution.
     */
    migrationSolutionId: pulumi.Input<string>;
    /**
     * Gets or sets the ARM Id of the VMware site.
     */
    vmwareSiteId: pulumi.Input<string>;
}

/**
 * VMwareToAzStack disk input.
 */
export interface VMwareToAzStackHCIDiskInputArgs {
    /**
     * Gets or sets the type of the virtual hard disk, vhd or vhdx.
     */
    diskFileFormat: pulumi.Input<string>;
    /**
     * Gets or sets the disk Id.
     */
    diskId: pulumi.Input<string>;
    /**
     * Gets or sets the disk size in GB.
     */
    diskSizeGB: pulumi.Input<number>;
    /**
     * Gets or sets a value indicating whether dynamic sizing is enabled on the virtual hard
     * disk.
     */
    isDynamic?: pulumi.Input<boolean>;
    /**
     * Gets or sets a value indicating whether disk is os disk.
     */
    isOsDisk: pulumi.Input<boolean>;
    /**
     * Gets or sets the target storage account ARM Id.
     */
    storageContainerId?: pulumi.Input<string>;
}

/**
 * VMwareToAzStackHCI NIC properties.
 */
export interface VMwareToAzStackHCINicInputArgs {
    /**
     * Gets or sets the NIC label.
     */
    label: pulumi.Input<string>;
    /**
     * Gets or sets the NIC Id.
     */
    nicId: pulumi.Input<string>;
    /**
     * Gets or sets the selection type of the NIC.
     */
    selectionTypeForFailover: pulumi.Input<string | enums.VMNicSelection>;
    /**
     * Gets or sets the target network Id within AzStackHCI Cluster.
     */
    targetNetworkId: pulumi.Input<string>;
    /**
     * Gets or sets the target test network Id within AzStackHCI Cluster.
     */
    testNetworkId: pulumi.Input<string>;
}

/**
 * VMware To AzStackHCI Policy model custom properties.
 */
export interface VMwareToAzStackHCIPolicyModelCustomPropertiesArgs {
    /**
     * Gets or sets the app consistent snapshot frequency (in minutes).
     */
    appConsistentFrequencyInMinutes: pulumi.Input<number>;
    /**
     * Gets or sets the crash consistent snapshot frequency (in minutes).
     */
    crashConsistentFrequencyInMinutes: pulumi.Input<number>;
    /**
     * Gets or sets the instance type.
     * Expected value is 'VMwareToAzStackHCI'.
     */
    instanceType: pulumi.Input<"VMwareToAzStackHCI">;
    /**
     * Gets or sets the duration in minutes until which the recovery points need to be
     * stored.
     */
    recoveryPointHistoryInMinutes: pulumi.Input<number>;
}

/**
 * VMware to AzStackHCI Protected item model custom properties.
 */
export interface VMwareToAzStackHCIProtectedItemModelCustomPropertiesArgs {
    /**
     * Gets or sets the location of Azure Arc HCI custom location resource.
     */
    customLocationRegion: pulumi.Input<string>;
    /**
     * Gets or sets the list of disks to replicate.
     */
    disksToInclude: pulumi.Input<pulumi.Input<VMwareToAzStackHCIDiskInputArgs>[]>;
    /**
     * Protected item dynamic memory config.
     */
    dynamicMemoryConfig?: pulumi.Input<ProtectedItemDynamicMemoryConfigArgs>;
    /**
     * Gets or sets the ARM Id of the discovered machine.
     */
    fabricDiscoveryMachineId: pulumi.Input<string>;
    /**
     * Gets or sets the hypervisor generation of the virtual machine possible values are 1,2.
     */
    hyperVGeneration: pulumi.Input<string>;
    /**
     * Gets or sets the instance type.
     * Expected value is 'VMwareToAzStackHCI'.
     */
    instanceType: pulumi.Input<"VMwareToAzStackHCI">;
    /**
     * Gets or sets a value indicating whether memory is dynamical.
     */
    isDynamicRam?: pulumi.Input<boolean>;
    /**
     * Gets or sets the list of VM NIC to replicate.
     */
    nicsToInclude: pulumi.Input<pulumi.Input<VMwareToAzStackHCINicInputArgs>[]>;
    /**
     * Gets or sets a value indicating whether auto resync is to be done.
     */
    performAutoResync?: pulumi.Input<boolean>;
    /**
     * Gets or sets the run as account Id.
     */
    runAsAccountId: pulumi.Input<string>;
    /**
     * Gets or sets the source DRA name.
     */
    sourceDraName: pulumi.Input<string>;
    /**
     * Gets or sets the target storage container ARM Id.
     */
    storageContainerId: pulumi.Input<string>;
    /**
     * Gets or sets the Target Arc Cluster Custom Location ARM Id.
     */
    targetArcClusterCustomLocationId: pulumi.Input<string>;
    /**
     * Gets or sets the target CPU cores.
     */
    targetCpuCores?: pulumi.Input<number>;
    /**
     * Gets or sets the target DRA name.
     */
    targetDraName: pulumi.Input<string>;
    /**
     * Gets or sets the Target HCI Cluster ARM Id.
     */
    targetHciClusterId: pulumi.Input<string>;
    /**
     * Gets or sets the target memory in mega-bytes.
     */
    targetMemoryInMegaBytes?: pulumi.Input<number>;
    /**
     * Gets or sets the target network Id within AzStackHCI Cluster.
     */
    targetNetworkId?: pulumi.Input<string>;
    /**
     * Gets or sets the target resource group ARM Id.
     */
    targetResourceGroupId: pulumi.Input<string>;
    /**
     * Gets or sets the target VM display name.
     */
    targetVmName?: pulumi.Input<string>;
    /**
     * Gets or sets the target test network Id within AzStackHCI Cluster.
     */
    testNetworkId?: pulumi.Input<string>;
}

/**
 * VMware to AzStackHCI Replication extension model custom properties.
 */
export interface VMwareToAzStackHCIReplicationExtensionModelCustomPropertiesArgs {
    /**
     * Gets or sets the ARM Id of the target AzStackHCI fabric.
     */
    azStackHciFabricArmId: pulumi.Input<string>;
    /**
     * Gets or sets the instance type.
     * Expected value is 'VMwareToAzStackHCI'.
     */
    instanceType: pulumi.Input<"VMwareToAzStackHCI">;
    /**
     * Gets or sets the storage account Id.
     */
    storageAccountId?: pulumi.Input<string>;
    /**
     * Gets or sets the Sas Secret of storage account.
     */
    storageAccountSasSecretName?: pulumi.Input<string>;
    /**
     * Gets or sets the ARM Id of the source VMware fabric.
     */
    vmwareFabricArmId: pulumi.Input<string>;
}

/**
 * Vault properties.
 */
export interface VaultModelPropertiesArgs {
    /**
     * Gets or sets the type of vault.
     */
    vaultType?: pulumi.Input<string | enums.ReplicationVaultType>;
}
