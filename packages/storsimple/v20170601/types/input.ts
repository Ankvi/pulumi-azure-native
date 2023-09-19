import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Represent the secrets intended for encryption with asymmetric key pair.
     */
    export interface AsymmetricEncryptedSecretArgs {
        /**
         * The algorithm used to encrypt "Value".
         */
        encryptionAlgorithm: pulumi.Input<enums.EncryptionAlgorithm>;
        /**
         * Thumbprint certificate that was used to encrypt "Value". If the value in unencrypted, it will be null.
         */
        encryptionCertThumbprint?: pulumi.Input<string>;
        /**
         * The value of the secret.
         */
        value: pulumi.Input<string>;
    }

    /**
     * The schedule for bandwidth setting.
     */
    export interface BandwidthScheduleArgs {
        /**
         * The days of the week when this schedule is applicable.
         */
        days: pulumi.Input<pulumi.Input<enums.DayOfWeek>[]>;
        /**
         * The rate in Mbps.
         */
        rateInMbps: pulumi.Input<number>;
        /**
         * The start time of the schedule.
         */
        start: pulumi.Input<TimeArgs>;
        /**
         * The stop time of the schedule.
         */
        stop: pulumi.Input<TimeArgs>;
    }

    /**
     * Intrinsic settings which refers to the type of the StorSimple Manager.
     */
    export interface ManagerIntrinsicSettingsArgs {
        /**
         * The type of StorSimple Manager.
         */
        type: pulumi.Input<enums.ManagerType>;
    }

    /**
     * The Sku.
     */
    export interface ManagerSkuArgs {
        /**
         * Refers to the sku name which should be "Standard"
         */
        name: pulumi.Input<enums.ManagerSkuType>;
    }

    /**
     * The schedule recurrence.
     */
    export interface ScheduleRecurrenceArgs {
        /**
         * The recurrence type.
         */
        recurrenceType: pulumi.Input<enums.RecurrenceType>;
        /**
         * The recurrence value.
         */
        recurrenceValue: pulumi.Input<number>;
        /**
         * The week days list. Applicable only for schedules of recurrence type 'weekly'.
         */
        weeklyDaysList?: pulumi.Input<pulumi.Input<enums.DayOfWeek>[]>;
    }

    /**
     * The time.
     */
    export interface TimeArgs {
        /**
         * The hour.
         */
        hours: pulumi.Input<number>;
        /**
         * The minute.
         */
        minutes: pulumi.Input<number>;
        /**
         * The second.
         */
        seconds: pulumi.Input<number>;
    }
