import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The properties of the create Advanced Schedule.
     */
    export interface AdvancedScheduleArgs {
        /**
         * Days of the month that the job should execute on. Must be between 1 and 31.
         */
        monthDays?: pulumi.Input<pulumi.Input<number>[]>;
        /**
         * Occurrences of days within a month.
         */
        monthlyOccurrences?: pulumi.Input<pulumi.Input<AdvancedScheduleMonthlyOccurrenceArgs>[]>;
        /**
         * Days of the week that the job should execute on.
         */
        weekDays?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * The properties of the create advanced schedule monthly occurrence.
     */
    export interface AdvancedScheduleMonthlyOccurrenceArgs {
        /**
         * Day of the occurrence. Must be one of monday, tuesday, wednesday, thursday, friday, saturday, sunday.
         */
        day?: pulumi.Input<string | enums.ScheduleDay>;
        /**
         * Occurrence of the week within the month. Must be between 1 and 5
         */
        occurrence?: pulumi.Input<number>;
    }

    /**
     * Azure query for the update configuration.
     */
    export interface AzureQueryPropertiesArgs {
        /**
         * List of locations to scope the query to.
         */
        locations?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * List of Subscription or Resource Group ARM Ids.
         */
        scope?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Tag settings for the VM.
         */
        tagSettings?: pulumi.Input<TagSettingsPropertiesArgs>;
    }

    /**
     * Error response of an operation failure
     */
    export interface ErrorResponseArgs {
        /**
         * Error code
         */
        code?: pulumi.Input<string>;
        /**
         * Error message indicating why the operation failed.
         */
        message?: pulumi.Input<string>;
    }

    /**
     * Linux specific update configuration.
     */
    export interface LinuxPropertiesArgs {
        /**
         * packages excluded from the software update configuration.
         */
        excludedPackageNameMasks?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Update classifications included in the software update configuration.
         */
        includedPackageClassifications?: pulumi.Input<string | enums.LinuxUpdateClasses>;
        /**
         * packages included from the software update configuration.
         */
        includedPackageNameMasks?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Reboot setting for the software update configuration.
         */
        rebootSetting?: pulumi.Input<string>;
    }

    /**
     * Non Azure query for the update configuration.
     */
    export interface NonAzureQueryPropertiesArgs {
        /**
         * Log Analytics Saved Search name.
         */
        functionAlias?: pulumi.Input<string>;
        /**
         * Workspace Id for Log Analytics in which the saved Search is resided.
         */
        workspaceId?: pulumi.Input<string>;
    }

    /**
     * Definition of schedule parameters.
     */
    export interface SchedulePropertiesArgs {
        /**
         * Gets or sets the advanced schedule.
         */
        advancedSchedule?: pulumi.Input<AdvancedScheduleArgs>;
        /**
         * Gets or sets the creation time.
         */
        creationTime?: pulumi.Input<string>;
        /**
         * Gets or sets the description.
         */
        description?: pulumi.Input<string>;
        /**
         * Gets or sets the end time of the schedule.
         */
        expiryTime?: pulumi.Input<string>;
        /**
         * Gets or sets the expiry time's offset in minutes.
         */
        expiryTimeOffsetMinutes?: pulumi.Input<number>;
        /**
         * Gets or sets the frequency of the schedule.
         */
        frequency?: pulumi.Input<string | enums.ScheduleFrequency>;
        /**
         * Gets or sets the interval of the schedule.
         */
        interval?: pulumi.Input<number>;
        /**
         * Gets or sets a value indicating whether this schedule is enabled.
         */
        isEnabled?: pulumi.Input<boolean>;
        /**
         * Gets or sets the last modified time.
         */
        lastModifiedTime?: pulumi.Input<string>;
        /**
         * Gets or sets the next run time of the schedule.
         */
        nextRun?: pulumi.Input<string>;
        /**
         * Gets or sets the next run time's offset in minutes.
         */
        nextRunOffsetMinutes?: pulumi.Input<number>;
        /**
         * Gets or sets the start time of the schedule.
         */
        startTime?: pulumi.Input<string>;
        /**
         * Gets or sets the time zone of the schedule.
         */
        timeZone?: pulumi.Input<string>;
    }
    /**
     * schedulePropertiesArgsProvideDefaults sets the appropriate defaults for SchedulePropertiesArgs
     */
    export function schedulePropertiesArgsProvideDefaults(val: SchedulePropertiesArgs): SchedulePropertiesArgs {
        return {
            ...val,
            isEnabled: (val.isEnabled) ?? false,
        };
    }

    /**
     * Task properties of the software update configuration.
     */
    export interface SoftwareUpdateConfigurationTasksArgs {
        /**
         * Post task properties.
         */
        postTask?: pulumi.Input<TaskPropertiesArgs>;
        /**
         * Pre task properties.
         */
        preTask?: pulumi.Input<TaskPropertiesArgs>;
    }

    /**
     * Tag filter information for the VM.
     */
    export interface TagSettingsPropertiesArgs {
        /**
         * Filter VMs by Any or All specified tags.
         */
        filterOperator?: pulumi.Input<enums.TagOperators>;
        /**
         * Dictionary of tags with its list of values.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<pulumi.Input<string>[]>}>;
    }

    /**
     * Group specific to the update configuration.
     */
    export interface TargetPropertiesArgs {
        /**
         * List of Azure queries in the software update configuration.
         */
        azureQueries?: pulumi.Input<pulumi.Input<AzureQueryPropertiesArgs>[]>;
        /**
         * List of non Azure queries in the software update configuration.
         */
        nonAzureQueries?: pulumi.Input<pulumi.Input<NonAzureQueryPropertiesArgs>[]>;
    }

    /**
     * Task properties of the software update configuration.
     */
    export interface TaskPropertiesArgs {
        /**
         * Gets or sets the parameters of the task.
         */
        parameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Gets or sets the name of the runbook.
         */
        source?: pulumi.Input<string>;
    }

    /**
     * Update specific properties of the software update configuration.
     */
    export interface UpdateConfigurationArgs {
        /**
         * List of azure resource Ids for azure virtual machines targeted by the software update configuration.
         */
        azureVirtualMachines?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Maximum time allowed for the software update configuration run. Duration needs to be specified using the format PT[n]H[n]M[n]S as per ISO8601
         */
        duration?: pulumi.Input<string>;
        /**
         * Linux specific update configuration.
         */
        linux?: pulumi.Input<LinuxPropertiesArgs>;
        /**
         * List of names of non-azure machines targeted by the software update configuration.
         */
        nonAzureComputerNames?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * operating system of target machines
         */
        operatingSystem: pulumi.Input<enums.OperatingSystemType>;
        /**
         * Group targets for the software update configuration.
         */
        targets?: pulumi.Input<TargetPropertiesArgs>;
        /**
         * Windows specific update configuration.
         */
        windows?: pulumi.Input<WindowsPropertiesArgs>;
    }

    /**
     * Windows specific update configuration.
     */
    export interface WindowsPropertiesArgs {
        /**
         * KB numbers excluded from the software update configuration.
         */
        excludedKbNumbers?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * KB numbers included from the software update configuration.
         */
        includedKbNumbers?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Update classification included in the software update configuration. A comma separated string with required values
         */
        includedUpdateClassifications?: pulumi.Input<string | enums.WindowsUpdateClasses>;
        /**
         * Reboot setting for the software update configuration.
         */
        rebootSetting?: pulumi.Input<string>;
    }
