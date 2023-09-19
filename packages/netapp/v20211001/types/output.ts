import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Volume Export Policy Rule
     */
    export interface ExportPolicyRuleResponse {
        /**
         * Client ingress specification as comma separated string with IPv4 CIDRs, IPv4 host addresses and host names
         */
        allowedClients?: string;
        /**
         * This parameter specifies who is authorized to change the ownership of a file. restricted - Only root user can change the ownership of the file. unrestricted - Non-root users can change ownership of files that they own.
         */
        chownMode?: string;
        /**
         * Allows CIFS protocol
         */
        cifs?: boolean;
        /**
         * Has root access to volume
         */
        hasRootAccess?: boolean;
        /**
         * Kerberos5 Read only access. To be use with swagger version 2020-05-01 or later
         */
        kerberos5ReadOnly?: boolean;
        /**
         * Kerberos5 Read and write access. To be use with swagger version 2020-05-01 or later
         */
        kerberos5ReadWrite?: boolean;
        /**
         * Kerberos5i Read only access. To be use with swagger version 2020-05-01 or later
         */
        kerberos5iReadOnly?: boolean;
        /**
         * Kerberos5i Read and write access. To be use with swagger version 2020-05-01 or later
         */
        kerberos5iReadWrite?: boolean;
        /**
         * Kerberos5p Read only access. To be use with swagger version 2020-05-01 or later
         */
        kerberos5pReadOnly?: boolean;
        /**
         * Kerberos5p Read and write access. To be use with swagger version 2020-05-01 or later
         */
        kerberos5pReadWrite?: boolean;
        /**
         * Allows NFSv3 protocol. Enable only for NFSv3 type volumes
         */
        nfsv3?: boolean;
        /**
         * Allows NFSv4.1 protocol. Enable only for NFSv4.1 type volumes
         */
        nfsv41?: boolean;
        /**
         * Order index
         */
        ruleIndex?: number;
        /**
         * Read only access
         */
        unixReadOnly?: boolean;
        /**
         * Read and write access
         */
        unixReadWrite?: boolean;
    }
    /**
     * exportPolicyRuleResponseProvideDefaults sets the appropriate defaults for ExportPolicyRuleResponse
     */
    export function exportPolicyRuleResponseProvideDefaults(val: ExportPolicyRuleResponse): ExportPolicyRuleResponse {
        return {
            ...val,
            chownMode: (val.chownMode) ?? "Restricted",
            hasRootAccess: (val.hasRootAccess) ?? true,
            kerberos5ReadOnly: (val.kerberos5ReadOnly) ?? false,
            kerberos5ReadWrite: (val.kerberos5ReadWrite) ?? false,
            kerberos5iReadOnly: (val.kerberos5iReadOnly) ?? false,
            kerberos5iReadWrite: (val.kerberos5iReadWrite) ?? false,
            kerberos5pReadOnly: (val.kerberos5pReadOnly) ?? false,
            kerberos5pReadWrite: (val.kerberos5pReadWrite) ?? false,
        };
    }

    /**
     * Mount target properties
     */
    export interface MountTargetPropertiesResponse {
        /**
         * UUID v4 used to identify the MountTarget
         */
        fileSystemId: string;
        /**
         * The mount target's IPv4 address
         */
        ipAddress: string;
        /**
         * UUID v4 used to identify the MountTarget
         */
        mountTargetId: string;
        /**
         * The SMB server's Fully Qualified Domain Name, FQDN
         */
        smbServerFqdn?: string;
    }

    /**
     * Application specific parameters for the placement of volumes in the volume group
     */
    export interface PlacementKeyValuePairsResponse {
        /**
         * Key for an application specific parameter for the placement of volumes in the volume group
         */
        key: string;
        /**
         * Value for an application specific parameter for the placement of volumes in the volume group
         */
        value: string;
    }

    /**
     * Replication properties
     */
    export interface ReplicationObjectResponse {
        /**
         * Indicates whether the local volume is the source or destination for the Volume Replication
         */
        endpointType?: string;
        /**
         * The remote region for the other end of the Volume Replication.
         */
        remoteVolumeRegion?: string;
        /**
         * The resource ID of the remote volume.
         */
        remoteVolumeResourceId: string;
        /**
         * Id
         */
        replicationId?: string;
        /**
         * Schedule
         */
        replicationSchedule?: string;
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
     * Volume Backup Properties
     */
    export interface VolumeBackupPropertiesResponse {
        /**
         * Backup Enabled
         */
        backupEnabled?: boolean;
        /**
         * Backup Policy Resource ID
         */
        backupPolicyId?: string;
        /**
         * Policy Enforced
         */
        policyEnforced?: boolean;
        /**
         * Vault Resource ID
         */
        vaultId?: string;
    }

    /**
     * Volume group properties
     */
    export interface VolumeGroupMetaDataResponse {
        /**
         * Application specific identifier
         */
        applicationIdentifier?: string;
        /**
         * Application Type
         */
        applicationType?: string;
        /**
         * Application specific identifier of deployment rules for the volume group
         */
        deploymentSpecId?: string;
        /**
         * Application specific placement rules for the volume group
         */
        globalPlacementRules?: PlacementKeyValuePairsResponse[];
        /**
         * Group Description
         */
        groupDescription?: string;
        /**
         * Number of volumes in volume group
         */
        volumesCount: number;
    }

    /**
     * Volume resource
     */
    export interface VolumeGroupVolumePropertiesResponse {
        /**
         * Specifies whether the volume is enabled for Azure VMware Solution (AVS) datastore purpose
         */
        avsDataStore?: string;
        /**
         * UUID v4 or resource identifier used to identify the Backup.
         */
        backupId?: string;
        /**
         * Unique Baremetal Tenant Identifier.
         */
        baremetalTenantId: string;
        /**
         * Pool Resource Id used in case of creating a volume through volume group
         */
        capacityPoolResourceId?: string;
        /**
         * When a volume is being restored from another volume's snapshot, will show the percentage completion of this cloning process. When this value is empty/null there is no cloning process currently happening on this volume. This value will update every 5 minutes during cloning.
         */
        cloneProgress: number;
        /**
         * Specifies whether Cool Access(tiering) is enabled for the volume.
         */
        coolAccess?: boolean;
        /**
         * Specifies the number of days after which data that is not accessed by clients will be tiered.
         */
        coolnessPeriod?: number;
        /**
         * A unique file path for the volume. Used when creating mount targets
         */
        creationToken: string;
        /**
         * DataProtection type volumes include an object containing details of the replication
         */
        dataProtection?: VolumePropertiesResponseDataProtection;
        /**
         * Default group quota for volume in KiBs. If isDefaultQuotaEnabled is set, the minimum value of 4 KiBs applies.
         */
        defaultGroupQuotaInKiBs?: number;
        /**
         * Default user quota for volume in KiBs. If isDefaultQuotaEnabled is set, the minimum value of 4 KiBs applies .
         */
        defaultUserQuotaInKiBs?: number;
        /**
         * Flag indicating whether subvolume operations are enabled on the volume
         */
        enableSubvolumes?: string;
        /**
         * Encryption Key Source. Possible values are: 'Microsoft.NetApp'
         */
        encryptionKeySource?: string;
        /**
         * Set of export policy rules
         */
        exportPolicy?: VolumePropertiesResponseExportPolicy;
        /**
         * Unique FileSystem Identifier.
         */
        fileSystemId: string;
        /**
         * Resource Id
         */
        id: string;
        /**
         * Specifies if default quota is enabled for the volume.
         */
        isDefaultQuotaEnabled?: boolean;
        /**
         * Restoring
         */
        isRestoring?: boolean;
        /**
         * Describe if a volume is KerberosEnabled. To be use with swagger version 2020-05-01 or later
         */
        kerberosEnabled?: boolean;
        /**
         * Specifies whether LDAP is enabled or not for a given NFS volume.
         */
        ldapEnabled?: boolean;
        /**
         * Maximum number of files allowed. Needs a service request in order to be changed. Only allowed to be changed if volume quota is more than 4TiB.
         */
        maximumNumberOfFiles: number;
        /**
         * List of mount targets
         */
        mountTargets: MountTargetPropertiesResponse[];
        /**
         * Resource name
         */
        name?: string;
        /**
         * Basic network, or Standard features available to the volume.
         */
        networkFeatures?: string;
        /**
         * Network Sibling Set ID for the the group of volumes sharing networking resources.
         */
        networkSiblingSetId: string;
        /**
         * Application specific placement rules for the particular volume
         */
        placementRules?: PlacementKeyValuePairsResponse[];
        /**
         * Set of protocol types, default NFSv3, CIFS for SMB protocol
         */
        protocolTypes?: string[];
        /**
         * Azure lifecycle management
         */
        provisioningState: string;
        /**
         * Proximity placement group associated with the volume
         */
        proximityPlacementGroup?: string;
        /**
         * The security style of volume, default unix, defaults to ntfs for dual protocol or CIFS protocol
         */
        securityStyle?: string;
        /**
         * The service level of the file system
         */
        serviceLevel?: string;
        /**
         * Enables continuously available share property for smb volume. Only applicable for SMB volume
         */
        smbContinuouslyAvailable?: boolean;
        /**
         * Enables encryption for in-flight smb3 data. Only applicable for SMB/DualProtocol volume. To be used with swagger version 2020-08-01 or later
         */
        smbEncryption?: boolean;
        /**
         * If enabled (true) the volume will contain a read-only snapshot directory which provides access to each of the volume's snapshots (default to true).
         */
        snapshotDirectoryVisible?: boolean;
        /**
         * UUID v4 or resource identifier used to identify the Snapshot.
         */
        snapshotId?: string;
        /**
         * Provides storage to network proximity information for the volume.
         */
        storageToNetworkProximity: string;
        /**
         * The Azure Resource URI for a delegated subnet. Must have the delegation Microsoft.NetApp/volumes
         */
        subnetId: string;
        /**
         * T2 network information
         */
        t2Network: string;
        /**
         * Resource tags
         */
        tags?: {[key: string]: string};
        throughputMibps?: number;
        /**
         * Resource type
         */
        type: string;
        /**
         * UNIX permissions for NFS volume accepted in octal 4 digit format. First digit selects the set user ID(4), set group ID (2) and sticky (1) attributes. Second digit selects permission for the owner of the file: read (4), write (2) and execute (1). Third selects permissions for other users in the same group. the fourth for other users not in the group. 0755 - gives read/write/execute permissions to owner and read/execute to group and other users.
         */
        unixPermissions?: string;
        /**
         * Maximum storage quota allowed for a file system in bytes. This is a soft quota used for alerting only. Minimum size is 100 GiB. Upper limit is 100TiB. Specified in bytes.
         */
        usageThreshold: number;
        /**
         * Volume Group Name
         */
        volumeGroupName: string;
        /**
         * Volume spec name is the application specific designation or identifier for the particular volume in a volume group for e.g. data, log
         */
        volumeSpecName?: string;
        /**
         * What type of volume is this. For destination volumes in Cross Region Replication, set type to DataProtection
         */
        volumeType?: string;
    }
    /**
     * volumeGroupVolumePropertiesResponseProvideDefaults sets the appropriate defaults for VolumeGroupVolumePropertiesResponse
     */
    export function volumeGroupVolumePropertiesResponseProvideDefaults(val: VolumeGroupVolumePropertiesResponse): VolumeGroupVolumePropertiesResponse {
        return {
            ...val,
            avsDataStore: (val.avsDataStore) ?? "Disabled",
            coolAccess: (val.coolAccess) ?? false,
            defaultGroupQuotaInKiBs: (val.defaultGroupQuotaInKiBs) ?? 0,
            defaultUserQuotaInKiBs: (val.defaultUserQuotaInKiBs) ?? 0,
            enableSubvolumes: (val.enableSubvolumes) ?? "Disabled",
            isDefaultQuotaEnabled: (val.isDefaultQuotaEnabled) ?? false,
            kerberosEnabled: (val.kerberosEnabled) ?? false,
            ldapEnabled: (val.ldapEnabled) ?? false,
            networkFeatures: (val.networkFeatures) ?? "Basic",
            securityStyle: (val.securityStyle) ?? "unix",
            smbContinuouslyAvailable: (val.smbContinuouslyAvailable) ?? false,
            smbEncryption: (val.smbEncryption) ?? false,
            snapshotDirectoryVisible: (val.snapshotDirectoryVisible) ?? true,
            unixPermissions: (val.unixPermissions) ?? "0770",
            usageThreshold: (val.usageThreshold) ?? 107374182400,
        };
    }

    /**
     * DataProtection type volumes include an object containing details of the replication
     */
    export interface VolumePropertiesResponseDataProtection {
        /**
         * Backup Properties
         */
        backup?: VolumeBackupPropertiesResponse;
        /**
         * Replication properties
         */
        replication?: ReplicationObjectResponse;
        /**
         * Snapshot properties.
         */
        snapshot?: VolumeSnapshotPropertiesResponse;
    }

    /**
     * Set of export policy rules
     */
    export interface VolumePropertiesResponseExportPolicy {
        /**
         * Export policy rule
         */
        rules?: ExportPolicyRuleResponse[];
    }

    /**
     * Volume Snapshot Properties
     */
    export interface VolumeSnapshotPropertiesResponse {
        /**
         * Snapshot Policy ResourceId
         */
        snapshotPolicyId?: string;
    }
