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
     * Properties of site details provided during the time of site creation.
     */
    export interface FabricCreationInputPropertiesArgs {
        /**
         * Fabric provider specific creation input.
         */
        customDetails?: pulumi.Input<AzureFabricCreationInputArgs | InMageRcmFabricCreationInputArgs | VMwareV2FabricCreationInputArgs>;
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
         * The DiskType.
         */
        diskType?: pulumi.Input<string | enums.DiskAccountType>;
        /**
         * The LogStorageAccountId.
         */
        logStorageAccountId?: pulumi.Input<string>;
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
         * The DiskType.
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
         * The DiskType.
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
         * The DiskType.
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
         * The selected target network ARM Id.
         */
        targetNetworkId?: pulumi.Input<string>;
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
         * The target VM size.
         */
        targetVmSize?: pulumi.Input<string>;
        /**
         * The selected test network ARM Id.
         */
        testNetworkId?: pulumi.Input<string>;
        /**
         * The selected test subnet name.
         */
        testSubnetName?: pulumi.Input<string>;
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
     * Storage mapping input properties.
     */
    export interface StorageMappingInputPropertiesArgs {
        /**
         * The ID of the storage object.
         */
        targetStorageClassificationId?: pulumi.Input<string>;
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