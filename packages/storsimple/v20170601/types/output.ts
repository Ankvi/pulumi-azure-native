import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Represent the secrets intended for encryption with asymmetric key pair.
     */
    export interface AsymmetricEncryptedSecretResponse {
        /**
         * The algorithm used to encrypt "Value".
         */
        encryptionAlgorithm: string;
        /**
         * Thumbprint certificate that was used to encrypt "Value". If the value in unencrypted, it will be null.
         */
        encryptionCertThumbprint?: string;
        /**
         * The value of the secret.
         */
        value: string;
    }

    /**
     * The schedule for bandwidth setting.
     */
    export interface BandwidthScheduleResponse {
        /**
         * The days of the week when this schedule is applicable.
         */
        days: string[];
        /**
         * The rate in Mbps.
         */
        rateInMbps: number;
        /**
         * The start time of the schedule.
         */
        start: TimeResponse;
        /**
         * The stop time of the schedule.
         */
        stop: TimeResponse;
    }

    /**
     * The eligibility result of failover set, for failover.
     */
    export interface FailoverSetEligibilityResultResponse {
        /**
         * The error message, if the failover set is not eligible for failover.
         */
        errorMessage?: string;
        /**
         * Represents if this failover set is eligible for failover or not.
         */
        isEligibleForFailover?: boolean;
    }

    /**
     * The failover set on a device.
     */
    export interface FailoverSetResponse {
        /**
         * The eligibility result of the failover set, for failover.
         */
        eligibilityResult?: FailoverSetEligibilityResultResponse;
        /**
         * The list of meta data of volume containers, which are part of the failover set.
         */
        volumeContainers?: VolumeContainerFailoverMetadataResponse[];
    }

    /**
     * Represents the eligibility of a device as a failover target device.
     */
    export interface FailoverTargetResponse {
        /**
         * The amount of free local storage available on the device in bytes.
         */
        availableLocalStorageInBytes?: number;
        /**
         * The amount of free tiered storage available for the device in bytes.
         */
        availableTieredStorageInBytes?: number;
        /**
         * The count of data containers on the device.
         */
        dataContainersCount?: number;
        /**
         * The path ID of the device.
         */
        deviceId?: string;
        /**
         * The geo location (applicable only for cloud appliances) of the device.
         */
        deviceLocation?: string;
        /**
         * The software version of the device.
         */
        deviceSoftwareVersion?: string;
        /**
         * The status of the device.
         */
        deviceStatus?: string;
        /**
         * The eligibility result of the device, as a failover target device.
         */
        eligibilityResult?: TargetEligibilityResultResponse;
        /**
         * The friendly name for the current version of software on the device.
         */
        friendlyDeviceSoftwareVersion?: string;
        /**
         * The model number of the device.
         */
        modelDescription?: string;
        /**
         * The count of volumes on the device.
         */
        volumesCount?: number;
    }

    /**
     * Intrinsic settings which refers to the type of the StorSimple Manager.
     */
    export interface ManagerIntrinsicSettingsResponse {
        /**
         * The type of StorSimple Manager.
         */
        type: string;
    }

    /**
     * The Sku.
     */
    export interface ManagerSkuResponse {
        /**
         * Refers to the sku name which should be "Standard"
         */
        name: string;
    }

    /**
     * The schedule recurrence.
     */
    export interface ScheduleRecurrenceResponse {
        /**
         * The recurrence type.
         */
        recurrenceType: string;
        /**
         * The recurrence value.
         */
        recurrenceValue: number;
        /**
         * The week days list. Applicable only for schedules of recurrence type 'weekly'.
         */
        weeklyDaysList?: string[];
    }

    /**
     * The error/warning message due to which the device is ineligible as a failover target device.
     */
    export interface TargetEligibilityErrorMessageResponse {
        /**
         * The localized error message stating the reason why the device is not eligible as a target device.
         */
        message?: string;
        /**
         * The localized resolution message for the error.
         */
        resolution?: string;
        /**
         * The result code for the error, due to which the device does not qualify as a failover target device.
         */
        resultCode?: string;
    }

    /**
     * The eligibility result of device, as a failover target device.
     */
    export interface TargetEligibilityResultResponse {
        /**
         * The eligibility status of device, as a failover target device.
         */
        eligibilityStatus?: string;
        /**
         * The list of error messages, if a device does not qualify as a failover target device.
         */
        messages?: TargetEligibilityErrorMessageResponse[];
    }

    /**
     * The time.
     */
    export interface TimeResponse {
        /**
         * The hour.
         */
        hours: number;
        /**
         * The minute.
         */
        minutes: number;
        /**
         * The second.
         */
        seconds: number;
    }

    /**
     * The metadata of the volume container, that is being considered as part of a failover set.
     */
    export interface VolumeContainerFailoverMetadataResponse {
        /**
         * The path ID of the volume container.
         */
        volumeContainerId?: string;
        /**
         * The list of metadata of volumes inside the volume container, which contains valid cloud snapshots.
         */
        volumes?: VolumeFailoverMetadataResponse[];
    }

    /**
     * The metadata of a volume that has valid cloud snapshot.
     */
    export interface VolumeFailoverMetadataResponse {
        /**
         * The date at which the snapshot was taken.
         */
        backupCreatedDate?: string;
        /**
         * The path ID of the backup-element for this volume, inside the backup set.
         */
        backupElementId?: string;
        /**
         * The path ID of the backup set.
         */
        backupId?: string;
        /**
         * The path ID of the backup policy using which the snapshot was taken.
         */
        backupPolicyId?: string;
        /**
         * The size of the volume in bytes at the time the snapshot was taken.
         */
        sizeInBytes?: number;
        /**
         * The path ID of the volume.
         */
        volumeId?: string;
        /**
         * The type of the volume.
         */
        volumeType?: string;
    }
