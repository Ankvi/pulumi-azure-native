import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace automanage {
    /**
     * Identity for the Automanage account.
     */
    export interface AccountIdentityResponse {
        /**
         * The principal id of Automanage account identity.
         */
        principalId: string;
        /**
         * The tenant id associated with the Automanage account.
         */
        tenantId: string;
        /**
         * The type of identity used for the Automanage account. Currently, the only supported type is 'SystemAssigned', which implicitly creates an identity.
         */
        type?: string;
    }

    /**
     * Automanage configuration profile assignment properties.
     */
    export interface ConfigurationProfileAssignmentPropertiesResponse {
        /**
         * The Automanage configurationProfile ARM Resource URI.
         */
        configurationProfile?: string;
        /**
         * The status of onboarding, which only appears in the response.
         */
        status: string;
        /**
         * The target VM resource URI
         */
        targetId: string;
    }

    /**
     * Automanage configuration profile Antimalware preferences.
     */
    export interface ConfigurationProfilePreferenceAntiMalwareResponse {
        /**
         * Enables or disables Real Time Protection
         */
        enableRealTimeProtection?: string;
        /**
         * Extensions, Paths and Processes that must be excluded from scan
         */
        exclusions?: any;
        /**
         * Enables or disables a periodic scan for antimalware
         */
        runScheduledScan?: string;
        /**
         * Schedule scan settings day
         */
        scanDay?: string;
        /**
         * Schedule scan settings time
         */
        scanTimeInMinutes?: string;
        /**
         * Type of scheduled scan
         */
        scanType?: string;
    }

    /**
     * Automanage configuration profile preference properties.
     */
    export interface ConfigurationProfilePreferencePropertiesResponse {
        /**
         * The custom preferences for Azure Antimalware.
         */
        antiMalware?: ConfigurationProfilePreferenceAntiMalwareResponse;
        /**
         * The custom preferences for Azure VM Backup.
         */
        vmBackup?: ConfigurationProfilePreferenceVmBackupResponse;
    }

    /**
     * Automanage configuration profile VM Backup preferences.
     */
    export interface ConfigurationProfilePreferenceVmBackupResponse {
        /**
         * Instant RP retention policy range in days
         */
        instantRpRetentionRangeInDays?: number;
        /**
         * Retention policy with the details on backup copy retention ranges.
         */
        retentionPolicy?: string;
        /**
         * Backup schedule specified as part of backup policy.
         */
        schedulePolicy?: string;
        /**
         * TimeZone optional input as string. For example: Pacific Standard Time
         */
        timeZone?: string;
    }

    /**
     * Automanage configuration profile properties.
     */
    export interface ConfigurationProfilePropertiesResponse {
        /**
         * configuration dictionary of the configuration profile.
         */
        configuration?: any;
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

    export namespace v20200630preview {
        /**
         * Identity for the Automanage account.
         */
        export interface AccountIdentityResponse {
            /**
             * The principal id of Automanage account identity.
             */
            principalId: string;
            /**
             * The tenant id associated with the Automanage account.
             */
            tenantId: string;
            /**
             * The type of identity used for the Automanage account. Currently, the only supported type is 'SystemAssigned', which implicitly creates an identity.
             */
            type?: string;
        }

        /**
         * Automanage configuration profile Antimalware preferences.
         */
        export interface ConfigurationProfilePreferenceAntiMalwareResponse {
            /**
             * Enables or disables Real Time Protection
             */
            enableRealTimeProtection?: string;
            /**
             * Extensions, Paths and Processes that must be excluded from scan
             */
            exclusions?: any;
            /**
             * Enables or disables a periodic scan for antimalware
             */
            runScheduledScan?: string;
            /**
             * Schedule scan settings day
             */
            scanDay?: string;
            /**
             * Schedule scan settings time
             */
            scanTimeInMinutes?: string;
            /**
             * Type of scheduled scan
             */
            scanType?: string;
        }

        /**
         * Automanage configuration profile preference properties.
         */
        export interface ConfigurationProfilePreferencePropertiesResponse {
            /**
             * The custom preferences for Azure Antimalware.
             */
            antiMalware?: v20200630preview.ConfigurationProfilePreferenceAntiMalwareResponse;
            /**
             * The custom preferences for Azure VM Backup.
             */
            vmBackup?: v20200630preview.ConfigurationProfilePreferenceVmBackupResponse;
        }

        /**
         * Automanage configuration profile VM Backup preferences.
         */
        export interface ConfigurationProfilePreferenceVmBackupResponse {
            /**
             * Instant RP retention policy range in days
             */
            instantRpRetentionRangeInDays?: number;
            /**
             * Retention policy with the details on backup copy retention ranges.
             */
            retentionPolicy?: string;
            /**
             * Backup schedule specified as part of backup policy.
             */
            schedulePolicy?: string;
            /**
             * TimeZone optional input as string. For example: Pacific Standard Time
             */
            timeZone?: string;
        }

    }

    export namespace v20220504 {
        /**
         * Automanage configuration profile assignment properties.
         */
        export interface ConfigurationProfileAssignmentPropertiesResponse {
            /**
             * The Automanage configurationProfile ARM Resource URI.
             */
            configurationProfile?: string;
            /**
             * The status of onboarding, which only appears in the response.
             */
            status: string;
            /**
             * The target VM resource URI
             */
            targetId: string;
        }

        /**
         * Automanage configuration profile properties.
         */
        export interface ConfigurationProfilePropertiesResponse {
            /**
             * configuration dictionary of the configuration profile.
             */
            configuration?: any;
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

    }
}
