import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The properties of the create advanced schedule monthly occurrence.
     */
    export interface AdvancedScheduleMonthlyOccurrenceResponse {
        /**
         * Day of the occurrence. Must be one of monday, tuesday, wednesday, thursday, friday, saturday, sunday.
         */
        day?: string;
        /**
         * Occurrence of the week within the month. Must be between 1 and 5
         */
        occurrence?: number;
    }

    /**
     * The properties of the create Advanced Schedule.
     */
    export interface AdvancedScheduleResponse {
        /**
         * Days of the month that the job should execute on. Must be between 1 and 31.
         */
        monthDays?: number[];
        /**
         * Occurrences of days within a month.
         */
        monthlyOccurrences?: AdvancedScheduleMonthlyOccurrenceResponse[];
        /**
         * Days of the week that the job should execute on.
         */
        weekDays?: string[];
    }

    /**
     * Azure query for the update configuration.
     */
    export interface AzureQueryPropertiesResponse {
        /**
         * List of locations to scope the query to.
         */
        locations?: string[];
        /**
         * List of Subscription or Resource Group ARM Ids.
         */
        scope?: string[];
        /**
         * Tag settings for the VM.
         */
        tagSettings?: TagSettingsPropertiesResponse;
    }

    /**
     * Error response of an operation failure
     */
    export interface ErrorResponseResponse {
        /**
         * Error code
         */
        code?: string;
        /**
         * Error message indicating why the operation failed.
         */
        message?: string;
    }

    /**
     * Linux specific update configuration.
     */
    export interface LinuxPropertiesResponse {
        /**
         * packages excluded from the software update configuration.
         */
        excludedPackageNameMasks?: string[];
        /**
         * Update classifications included in the software update configuration.
         */
        includedPackageClassifications?: string;
        /**
         * packages included from the software update configuration.
         */
        includedPackageNameMasks?: string[];
        /**
         * Reboot setting for the software update configuration.
         */
        rebootSetting?: string;
    }

    /**
     * Non Azure query for the update configuration.
     */
    export interface NonAzureQueryPropertiesResponse {
        /**
         * Log Analytics Saved Search name.
         */
        functionAlias?: string;
        /**
         * Workspace Id for Log Analytics in which the saved Search is resided.
         */
        workspaceId?: string;
    }

    /**
     * Definition of schedule parameters.
     */
    export interface SUCSchedulePropertiesResponse {
        /**
         * Gets or sets the advanced schedule.
         */
        advancedSchedule?: AdvancedScheduleResponse;
        /**
         * Gets or sets the creation time.
         */
        creationTime?: string;
        /**
         * Gets or sets the description.
         */
        description?: string;
        /**
         * Gets or sets the end time of the schedule.
         */
        expiryTime?: string;
        /**
         * Gets or sets the expiry time's offset in minutes.
         */
        expiryTimeOffsetMinutes?: number;
        /**
         * Gets or sets the frequency of the schedule.
         */
        frequency?: string;
        /**
         * Gets or sets the interval of the schedule.
         */
        interval?: number;
        /**
         * Gets or sets a value indicating whether this schedule is enabled.
         */
        isEnabled?: boolean;
        /**
         * Gets or sets the last modified time.
         */
        lastModifiedTime?: string;
        /**
         * Gets or sets the next run time of the schedule.
         */
        nextRun?: string;
        /**
         * Gets or sets the next run time's offset in minutes.
         */
        nextRunOffsetMinutes?: number;
        /**
         * Gets or sets the start time of the schedule.
         */
        startTime?: string;
        /**
         * Gets the start time's offset in minutes.
         */
        startTimeOffsetMinutes: number;
        /**
         * Gets or sets the time zone of the schedule.
         */
        timeZone?: string;
    }
    /**
     * sucschedulePropertiesResponseProvideDefaults sets the appropriate defaults for SUCSchedulePropertiesResponse
     */
    export function sucschedulePropertiesResponseProvideDefaults(val: SUCSchedulePropertiesResponse): SUCSchedulePropertiesResponse {
        return {
            ...val,
            isEnabled: (val.isEnabled) ?? false,
        };
    }

    /**
     * Task properties of the software update configuration.
     */
    export interface SoftwareUpdateConfigurationTasksResponse {
        /**
         * Post task properties.
         */
        postTask?: TaskPropertiesResponse;
        /**
         * Pre task properties.
         */
        preTask?: TaskPropertiesResponse;
    }

    /**
     * Tag filter information for the VM.
     */
    export interface TagSettingsPropertiesResponse {
        /**
         * Filter VMs by Any or All specified tags.
         */
        filterOperator?: string;
        /**
         * Dictionary of tags with its list of values.
         */
        tags?: {[key: string]: string[]};
    }

    /**
     * Group specific to the update configuration.
     */
    export interface TargetPropertiesResponse {
        /**
         * List of Azure queries in the software update configuration.
         */
        azureQueries?: AzureQueryPropertiesResponse[];
        /**
         * List of non Azure queries in the software update configuration.
         */
        nonAzureQueries?: NonAzureQueryPropertiesResponse[];
    }

    /**
     * Task properties of the software update configuration.
     */
    export interface TaskPropertiesResponse {
        /**
         * Gets or sets the parameters of the task.
         */
        parameters?: {[key: string]: string};
        /**
         * Gets or sets the name of the runbook.
         */
        source?: string;
    }

    /**
     * Update specific properties of the software update configuration.
     */
    export interface UpdateConfigurationResponse {
        /**
         * List of azure resource Ids for azure virtual machines targeted by the software update configuration.
         */
        azureVirtualMachines?: string[];
        /**
         * Maximum time allowed for the software update configuration run. Duration needs to be specified using the format PT[n]H[n]M[n]S as per ISO8601
         */
        duration?: string;
        /**
         * Linux specific update configuration.
         */
        linux?: LinuxPropertiesResponse;
        /**
         * List of names of non-azure machines targeted by the software update configuration.
         */
        nonAzureComputerNames?: string[];
        /**
         * operating system of target machines
         */
        operatingSystem: string;
        /**
         * Group targets for the software update configuration.
         */
        targets?: TargetPropertiesResponse;
        /**
         * Windows specific update configuration.
         */
        windows?: WindowsPropertiesResponse;
    }

    /**
     * Windows specific update configuration.
     */
    export interface WindowsPropertiesResponse {
        /**
         * KB numbers excluded from the software update configuration.
         */
        excludedKbNumbers?: string[];
        /**
         * KB numbers included from the software update configuration.
         */
        includedKbNumbers?: string[];
        /**
         * Update classification included in the software update configuration. A comma separated string with required values
         */
        includedUpdateClassifications?: string;
        /**
         * Reboot setting for the software update configuration.
         */
        rebootSetting?: string;
    }
