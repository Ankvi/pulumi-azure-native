import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Azure query for the update configuration.
 */
export interface ConfigurationAssignmentFilterPropertiesResponse {
    /**
     * List of locations to scope the query to.
     */
    locations?: string[];
    /**
     * List of allowed operating systems.
     */
    osTypes?: string[];
    /**
     * List of allowed resource groups.
     */
    resourceGroups?: string[];
    /**
     * List of allowed resources.
     */
    resourceTypes?: string[];
    /**
     * Tag settings for the VM.
     */
    tagSettings?: TagSettingsPropertiesResponse;
}

/**
 * Input properties for patching a Linux machine.
 */
export interface InputLinuxParametersResponse {
    /**
     * Classification category of patches to be patched
     */
    classificationsToInclude?: string[];
    /**
     * Package names to be excluded for patching.
     */
    packageNameMasksToExclude?: string[];
    /**
     * Package names to be included for patching.
     */
    packageNameMasksToInclude?: string[];
}

/**
 * Input configuration for a patch run
 */
export interface InputPatchConfigurationResponse {
    /**
     * Input parameters specific to patching Linux machine. For Windows machines, do not pass this property.
     */
    linuxParameters?: InputLinuxParametersResponse;
    /**
     * List of post tasks. e.g. [{'source' :'runbook', 'taskScope': 'Resource', 'parameters': { 'arg1': 'value1'}}]
     */
    postTasks?: TaskPropertiesResponse[];
    /**
     * List of pre tasks. e.g. [{'source' :'runbook', 'taskScope': 'Global', 'parameters': { 'arg1': 'value1'}}]
     */
    preTasks?: TaskPropertiesResponse[];
    /**
     * Possible reboot preference as defined by the user based on which it would be decided to reboot the machine or not after the patch operation is completed.
     */
    rebootSetting?: string;
    /**
     * Input parameters specific to patching a Windows machine. For Linux machines, do not pass this property.
     */
    windowsParameters?: InputWindowsParametersResponse;
}
/**
 * inputPatchConfigurationResponseProvideDefaults sets the appropriate defaults for InputPatchConfigurationResponse
 */
export function inputPatchConfigurationResponseProvideDefaults(val: InputPatchConfigurationResponse): InputPatchConfigurationResponse {
    return {
        ...val,
        rebootSetting: (val.rebootSetting) ?? "IfRequired",
    };
}

/**
 * Input properties for patching a Windows machine.
 */
export interface InputWindowsParametersResponse {
    /**
     * Classification category of patches to be patched
     */
    classificationsToInclude?: string[];
    /**
     * Exclude patches which need reboot
     */
    excludeKbsRequiringReboot?: boolean;
    /**
     * Windows KBID to be excluded for patching.
     */
    kbNumbersToExclude?: string[];
    /**
     * Windows KBID to be included for patching.
     */
    kbNumbersToInclude?: string[];
}

/**
 * Definition of a MaintenanceOverrideProperties
 */
export interface MaintenanceOverridePropertiesResponse {
    /**
     * Effective end date of the maintenance override window in YYYY-MM-DD hh:mm format. The window will be created in the time zone provided and adjusted to daylight savings according to that time zone. Expiration date must be set to a future date. If not provided, it will be set to the maximum datetime 9999-12-31 23:59:59.
     */
    endDateTime?: string;
    /**
     * Gets or sets overrideProperties of the maintenanceConfiguration
     */
    overrideProperties?: {[key: string]: string};
    /**
     * Effective start date of the maintenance override window in YYYY-MM-DD hh:mm format. The start date can be set to either the current date or future date. The window will be created in the time zone provided and adjusted to daylight savings according to that time zone.
     */
    startDateTime?: string;
    /**
     * Name of the timezone. List of timezones can be obtained by executing [System.TimeZoneInfo]::GetSystemTimeZones() in PowerShell. Example: Pacific Standard Time, UTC, W. Europe Standard Time, Korea Standard Time, Cen. Australia Standard Time.
     */
    timeZone?: string;
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
    /**
     * Global Task execute once when schedule trigger. Resource task execute for each VM.
     */
    taskScope?: string;
}
/**
 * taskPropertiesResponseProvideDefaults sets the appropriate defaults for TaskPropertiesResponse
 */
export function taskPropertiesResponseProvideDefaults(val: TaskPropertiesResponse): TaskPropertiesResponse {
    return {
        ...val,
        taskScope: (val.taskScope) ?? "Global",
    };
}


