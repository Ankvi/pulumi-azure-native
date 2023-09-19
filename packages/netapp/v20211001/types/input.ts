import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Volume Export Policy Rule
     */
    export interface ExportPolicyRuleArgs {
        /**
         * Client ingress specification as comma separated string with IPv4 CIDRs, IPv4 host addresses and host names
         */
        allowedClients?: pulumi.Input<string>;
        /**
         * This parameter specifies who is authorized to change the ownership of a file. restricted - Only root user can change the ownership of the file. unrestricted - Non-root users can change ownership of files that they own.
         */
        chownMode?: pulumi.Input<string | enums.ChownMode>;
        /**
         * Allows CIFS protocol
         */
        cifs?: pulumi.Input<boolean>;
        /**
         * Has root access to volume
         */
        hasRootAccess?: pulumi.Input<boolean>;
        /**
         * Kerberos5 Read only access. To be use with swagger version 2020-05-01 or later
         */
        kerberos5ReadOnly?: pulumi.Input<boolean>;
        /**
         * Kerberos5 Read and write access. To be use with swagger version 2020-05-01 or later
         */
        kerberos5ReadWrite?: pulumi.Input<boolean>;
        /**
         * Kerberos5i Read only access. To be use with swagger version 2020-05-01 or later
         */
        kerberos5iReadOnly?: pulumi.Input<boolean>;
        /**
         * Kerberos5i Read and write access. To be use with swagger version 2020-05-01 or later
         */
        kerberos5iReadWrite?: pulumi.Input<boolean>;
        /**
         * Kerberos5p Read only access. To be use with swagger version 2020-05-01 or later
         */
        kerberos5pReadOnly?: pulumi.Input<boolean>;
        /**
         * Kerberos5p Read and write access. To be use with swagger version 2020-05-01 or later
         */
        kerberos5pReadWrite?: pulumi.Input<boolean>;
        /**
         * Allows NFSv3 protocol. Enable only for NFSv3 type volumes
         */
        nfsv3?: pulumi.Input<boolean>;
        /**
         * Allows NFSv4.1 protocol. Enable only for NFSv4.1 type volumes
         */
        nfsv41?: pulumi.Input<boolean>;
        /**
         * Order index
         */
        ruleIndex?: pulumi.Input<number>;
        /**
         * Read only access
         */
        unixReadOnly?: pulumi.Input<boolean>;
        /**
         * Read and write access
         */
        unixReadWrite?: pulumi.Input<boolean>;
    }
    /**
     * exportPolicyRuleArgsProvideDefaults sets the appropriate defaults for ExportPolicyRuleArgs
     */
    export function exportPolicyRuleArgsProvideDefaults(val: ExportPolicyRuleArgs): ExportPolicyRuleArgs {
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
     * Application specific parameters for the placement of volumes in the volume group
     */
    export interface PlacementKeyValuePairsArgs {
        /**
         * Key for an application specific parameter for the placement of volumes in the volume group
         */
        key: pulumi.Input<string>;
        /**
         * Value for an application specific parameter for the placement of volumes in the volume group
         */
        value: pulumi.Input<string>;
    }

    /**
     * Replication properties
     */
    export interface ReplicationObjectArgs {
        /**
         * Indicates whether the local volume is the source or destination for the Volume Replication
         */
        endpointType?: pulumi.Input<string | enums.EndpointType>;
        /**
         * The remote region for the other end of the Volume Replication.
         */
        remoteVolumeRegion?: pulumi.Input<string>;
        /**
         * The resource ID of the remote volume.
         */
        remoteVolumeResourceId: pulumi.Input<string>;
        /**
         * Id
         */
        replicationId?: pulumi.Input<string>;
        /**
         * Schedule
         */
        replicationSchedule?: pulumi.Input<string | enums.ReplicationSchedule>;
    }

    /**
     * Volume Backup Properties
     */
    export interface VolumeBackupPropertiesArgs {
        /**
         * Backup Enabled
         */
        backupEnabled?: pulumi.Input<boolean>;
        /**
         * Backup Policy Resource ID
         */
        backupPolicyId?: pulumi.Input<string>;
        /**
         * Policy Enforced
         */
        policyEnforced?: pulumi.Input<boolean>;
        /**
         * Vault Resource ID
         */
        vaultId?: pulumi.Input<string>;
    }

    /**
     * Volume group properties
     */
    export interface VolumeGroupMetaDataArgs {
        /**
         * Application specific identifier
         */
        applicationIdentifier?: pulumi.Input<string>;
        /**
         * Application Type
         */
        applicationType?: pulumi.Input<string | enums.ApplicationType>;
        /**
         * Application specific identifier of deployment rules for the volume group
         */
        deploymentSpecId?: pulumi.Input<string>;
        /**
         * Application specific placement rules for the volume group
         */
        globalPlacementRules?: pulumi.Input<pulumi.Input<PlacementKeyValuePairsArgs>[]>;
        /**
         * Group Description
         */
        groupDescription?: pulumi.Input<string>;
    }

    /**
     * Volume resource
     */
    export interface VolumeGroupVolumePropertiesArgs {
        /**
         * Specifies whether the volume is enabled for Azure VMware Solution (AVS) datastore purpose
         */
        avsDataStore?: pulumi.Input<string | enums.AvsDataStore>;
        /**
         * UUID v4 or resource identifier used to identify the Backup.
         */
        backupId?: pulumi.Input<string>;
        /**
         * Pool Resource Id used in case of creating a volume through volume group
         */
        capacityPoolResourceId?: pulumi.Input<string>;
        /**
         * Specifies whether Cool Access(tiering) is enabled for the volume.
         */
        coolAccess?: pulumi.Input<boolean>;
        /**
         * Specifies the number of days after which data that is not accessed by clients will be tiered.
         */
        coolnessPeriod?: pulumi.Input<number>;
        /**
         * A unique file path for the volume. Used when creating mount targets
         */
        creationToken: pulumi.Input<string>;
        /**
         * DataProtection type volumes include an object containing details of the replication
         */
        dataProtection?: pulumi.Input<VolumePropertiesDataProtectionArgs>;
        /**
         * Default group quota for volume in KiBs. If isDefaultQuotaEnabled is set, the minimum value of 4 KiBs applies.
         */
        defaultGroupQuotaInKiBs?: pulumi.Input<number>;
        /**
         * Default user quota for volume in KiBs. If isDefaultQuotaEnabled is set, the minimum value of 4 KiBs applies .
         */
        defaultUserQuotaInKiBs?: pulumi.Input<number>;
        /**
         * Flag indicating whether subvolume operations are enabled on the volume
         */
        enableSubvolumes?: pulumi.Input<string | enums.EnableSubvolumes>;
        /**
         * Encryption Key Source. Possible values are: 'Microsoft.NetApp'
         */
        encryptionKeySource?: pulumi.Input<string>;
        /**
         * Set of export policy rules
         */
        exportPolicy?: pulumi.Input<VolumePropertiesExportPolicyArgs>;
        /**
         * Specifies if default quota is enabled for the volume.
         */
        isDefaultQuotaEnabled?: pulumi.Input<boolean>;
        /**
         * Restoring
         */
        isRestoring?: pulumi.Input<boolean>;
        /**
         * Describe if a volume is KerberosEnabled. To be use with swagger version 2020-05-01 or later
         */
        kerberosEnabled?: pulumi.Input<boolean>;
        /**
         * Specifies whether LDAP is enabled or not for a given NFS volume.
         */
        ldapEnabled?: pulumi.Input<boolean>;
        /**
         * Resource name
         */
        name?: pulumi.Input<string>;
        /**
         * Basic network, or Standard features available to the volume.
         */
        networkFeatures?: pulumi.Input<string | enums.NetworkFeatures>;
        /**
         * Application specific placement rules for the particular volume
         */
        placementRules?: pulumi.Input<pulumi.Input<PlacementKeyValuePairsArgs>[]>;
        /**
         * Set of protocol types, default NFSv3, CIFS for SMB protocol
         */
        protocolTypes?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Proximity placement group associated with the volume
         */
        proximityPlacementGroup?: pulumi.Input<string>;
        /**
         * The security style of volume, default unix, defaults to ntfs for dual protocol or CIFS protocol
         */
        securityStyle?: pulumi.Input<string | enums.SecurityStyle>;
        /**
         * The service level of the file system
         */
        serviceLevel?: pulumi.Input<string | enums.ServiceLevel>;
        /**
         * Enables continuously available share property for smb volume. Only applicable for SMB volume
         */
        smbContinuouslyAvailable?: pulumi.Input<boolean>;
        /**
         * Enables encryption for in-flight smb3 data. Only applicable for SMB/DualProtocol volume. To be used with swagger version 2020-08-01 or later
         */
        smbEncryption?: pulumi.Input<boolean>;
        /**
         * If enabled (true) the volume will contain a read-only snapshot directory which provides access to each of the volume's snapshots (default to true).
         */
        snapshotDirectoryVisible?: pulumi.Input<boolean>;
        /**
         * UUID v4 or resource identifier used to identify the Snapshot.
         */
        snapshotId?: pulumi.Input<string>;
        /**
         * The Azure Resource URI for a delegated subnet. Must have the delegation Microsoft.NetApp/volumes
         */
        subnetId: pulumi.Input<string>;
        /**
         * Resource tags
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        throughputMibps?: pulumi.Input<number>;
        /**
         * UNIX permissions for NFS volume accepted in octal 4 digit format. First digit selects the set user ID(4), set group ID (2) and sticky (1) attributes. Second digit selects permission for the owner of the file: read (4), write (2) and execute (1). Third selects permissions for other users in the same group. the fourth for other users not in the group. 0755 - gives read/write/execute permissions to owner and read/execute to group and other users.
         */
        unixPermissions?: pulumi.Input<string>;
        /**
         * Maximum storage quota allowed for a file system in bytes. This is a soft quota used for alerting only. Minimum size is 100 GiB. Upper limit is 100TiB. Specified in bytes.
         */
        usageThreshold: pulumi.Input<number>;
        /**
         * Volume spec name is the application specific designation or identifier for the particular volume in a volume group for e.g. data, log
         */
        volumeSpecName?: pulumi.Input<string>;
        /**
         * What type of volume is this. For destination volumes in Cross Region Replication, set type to DataProtection
         */
        volumeType?: pulumi.Input<string>;
    }
    /**
     * volumeGroupVolumePropertiesArgsProvideDefaults sets the appropriate defaults for VolumeGroupVolumePropertiesArgs
     */
    export function volumeGroupVolumePropertiesArgsProvideDefaults(val: VolumeGroupVolumePropertiesArgs): VolumeGroupVolumePropertiesArgs {
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
    export interface VolumePropertiesDataProtectionArgs {
        /**
         * Backup Properties
         */
        backup?: pulumi.Input<VolumeBackupPropertiesArgs>;
        /**
         * Replication properties
         */
        replication?: pulumi.Input<ReplicationObjectArgs>;
        /**
         * Snapshot properties.
         */
        snapshot?: pulumi.Input<VolumeSnapshotPropertiesArgs>;
    }

    /**
     * Set of export policy rules
     */
    export interface VolumePropertiesExportPolicyArgs {
        /**
         * Export policy rule
         */
        rules?: pulumi.Input<pulumi.Input<ExportPolicyRuleArgs>[]>;
    }

    /**
     * Volume Snapshot Properties
     */
    export interface VolumeSnapshotPropertiesArgs {
        /**
         * Snapshot Policy ResourceId
         */
        snapshotPolicyId?: pulumi.Input<string>;
    }
