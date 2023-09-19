import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Identity for the Automanage account.
     */
    export interface AccountIdentityArgs {
        /**
         * The type of identity used for the Automanage account. Currently, the only supported type is 'SystemAssigned', which implicitly creates an identity.
         */
        type?: pulumi.Input<enums.ResourceIdentityType>;
    }

    /**
     * Automanage configuration profile Antimalware preferences.
     */
    export interface ConfigurationProfilePreferenceAntiMalwareArgs {
        /**
         * Enables or disables Real Time Protection
         */
        enableRealTimeProtection?: pulumi.Input<string | enums.EnableRealTimeProtection>;
        /**
         * Extensions, Paths and Processes that must be excluded from scan
         */
        exclusions?: any;
        /**
         * Enables or disables a periodic scan for antimalware
         */
        runScheduledScan?: pulumi.Input<string | enums.RunScheduledScan>;
        /**
         * Schedule scan settings day
         */
        scanDay?: pulumi.Input<string>;
        /**
         * Schedule scan settings time
         */
        scanTimeInMinutes?: pulumi.Input<string>;
        /**
         * Type of scheduled scan
         */
        scanType?: pulumi.Input<string | enums.ScanType>;
    }

    /**
     * Automanage configuration profile preference properties.
     */
    export interface ConfigurationProfilePreferencePropertiesArgs {
        /**
         * The custom preferences for Azure Antimalware.
         */
        antiMalware?: pulumi.Input<ConfigurationProfilePreferenceAntiMalwareArgs>;
        /**
         * The custom preferences for Azure VM Backup.
         */
        vmBackup?: pulumi.Input<ConfigurationProfilePreferenceVmBackupArgs>;
    }

    /**
     * Automanage configuration profile VM Backup preferences.
     */
    export interface ConfigurationProfilePreferenceVmBackupArgs {
        /**
         * Instant RP retention policy range in days
         */
        instantRpRetentionRangeInDays?: pulumi.Input<number>;
        /**
         * Retention policy with the details on backup copy retention ranges.
         */
        retentionPolicy?: pulumi.Input<string>;
        /**
         * Backup schedule specified as part of backup policy.
         */
        schedulePolicy?: pulumi.Input<string>;
        /**
         * TimeZone optional input as string. For example: Pacific Standard Time
         */
        timeZone?: pulumi.Input<string>;
    }
