import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace maintenance {
    /**
     * Azure query for the update configuration.
     */
    export interface ConfigurationAssignmentFilterPropertiesArgs {
        /**
         * List of locations to scope the query to.
         */
        locations?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * List of allowed operating systems.
         */
        osTypes?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * List of allowed resource groups.
         */
        resourceGroups?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * List of allowed resources.
         */
        resourceTypes?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Tag settings for the VM.
         */
        tagSettings?: pulumi.Input<TagSettingsPropertiesArgs>;
    }

    /**
     * Input properties for patching a Linux machine.
     */
    export interface InputLinuxParametersArgs {
        /**
         * Classification category of patches to be patched
         */
        classificationsToInclude?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Package names to be excluded for patching.
         */
        packageNameMasksToExclude?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Package names to be included for patching.
         */
        packageNameMasksToInclude?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Input configuration for a patch run
     */
    export interface InputPatchConfigurationArgs {
        /**
         * Input parameters specific to patching Linux machine. For Windows machines, do not pass this property.
         */
        linuxParameters?: pulumi.Input<InputLinuxParametersArgs>;
        /**
         * List of post tasks. e.g. [{'source' :'runbook', 'taskScope': 'Resource', 'parameters': { 'arg1': 'value1'}}]
         */
        postTasks?: pulumi.Input<pulumi.Input<TaskPropertiesArgs>[]>;
        /**
         * List of pre tasks. e.g. [{'source' :'runbook', 'taskScope': 'Global', 'parameters': { 'arg1': 'value1'}}]
         */
        preTasks?: pulumi.Input<pulumi.Input<TaskPropertiesArgs>[]>;
        /**
         * Possible reboot preference as defined by the user based on which it would be decided to reboot the machine or not after the patch operation is completed.
         */
        rebootSetting?: pulumi.Input<string | enums.RebootOptions>;
        /**
         * Input parameters specific to patching a Windows machine. For Linux machines, do not pass this property.
         */
        windowsParameters?: pulumi.Input<InputWindowsParametersArgs>;
    }
    /**
     * inputPatchConfigurationArgsProvideDefaults sets the appropriate defaults for InputPatchConfigurationArgs
     */
    export function inputPatchConfigurationArgsProvideDefaults(val: InputPatchConfigurationArgs): InputPatchConfigurationArgs {
        return {
            ...val,
            rebootSetting: (val.rebootSetting) ?? "IfRequired",
        };
    }

    /**
     * Input properties for patching a Windows machine.
     */
    export interface InputWindowsParametersArgs {
        /**
         * Classification category of patches to be patched
         */
        classificationsToInclude?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Exclude patches which need reboot
         */
        excludeKbsRequiringReboot?: pulumi.Input<boolean>;
        /**
         * Windows KBID to be excluded for patching.
         */
        kbNumbersToExclude?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Windows KBID to be included for patching.
         */
        kbNumbersToInclude?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Definition of a MaintenanceOverrideProperties
     */
    export interface MaintenanceOverridePropertiesArgs {
        /**
         * Effective end date of the maintenance override window in YYYY-MM-DD hh:mm format. The window will be created in the time zone provided and adjusted to daylight savings according to that time zone. Expiration date must be set to a future date. If not provided, it will be set to the maximum datetime 9999-12-31 23:59:59.
         */
        endDateTime?: pulumi.Input<string>;
        /**
         * Gets or sets overrideProperties of the maintenanceConfiguration
         */
        overrideProperties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Effective start date of the maintenance override window in YYYY-MM-DD hh:mm format. The start date can be set to either the current date or future date. The window will be created in the time zone provided and adjusted to daylight savings according to that time zone.
         */
        startDateTime?: pulumi.Input<string>;
        /**
         * Name of the timezone. List of timezones can be obtained by executing [System.TimeZoneInfo]::GetSystemTimeZones() in PowerShell. Example: Pacific Standard Time, UTC, W. Europe Standard Time, Korea Standard Time, Cen. Australia Standard Time.
         */
        timeZone?: pulumi.Input<string>;
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
        /**
         * Global Task execute once when schedule trigger. Resource task execute for each VM.
         */
        taskScope?: pulumi.Input<string | enums.TaskScope>;
    }
    /**
     * taskPropertiesArgsProvideDefaults sets the appropriate defaults for TaskPropertiesArgs
     */
    export function taskPropertiesArgsProvideDefaults(val: TaskPropertiesArgs): TaskPropertiesArgs {
        return {
            ...val,
            taskScope: (val.taskScope) ?? "Global",
        };
    }

    export namespace v20221101preview {
        /**
         * Input properties for patching a Linux machine.
         */
        export interface InputLinuxParametersArgs {
            /**
             * Classification category of patches to be patched
             */
            classificationsToInclude?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Package names to be excluded for patching.
             */
            packageNameMasksToExclude?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Package names to be included for patching.
             */
            packageNameMasksToInclude?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * Input configuration for a patch run
         */
        export interface InputPatchConfigurationArgs {
            /**
             * Input parameters specific to patching Linux machine. For Windows machines, do not pass this property.
             */
            linuxParameters?: pulumi.Input<v20221101preview.InputLinuxParametersArgs>;
            /**
             * List of post tasks. e.g. [{'source' :'runbook', 'taskScope': 'Resource', 'parameters': { 'arg1': 'value1'}}]
             */
            postTasks?: pulumi.Input<pulumi.Input<v20221101preview.TaskPropertiesArgs>[]>;
            /**
             * List of pre tasks. e.g. [{'source' :'runbook', 'taskScope': 'Global', 'parameters': { 'arg1': 'value1'}}]
             */
            preTasks?: pulumi.Input<pulumi.Input<v20221101preview.TaskPropertiesArgs>[]>;
            /**
             * Possible reboot preference as defined by the user based on which it would be decided to reboot the machine or not after the patch operation is completed.
             */
            rebootSetting?: pulumi.Input<string | enums.v20221101preview.RebootOptions>;
            /**
             * Input parameters specific to patching a Windows machine. For Linux machines, do not pass this property.
             */
            windowsParameters?: pulumi.Input<v20221101preview.InputWindowsParametersArgs>;
        }
        /**
         * inputPatchConfigurationArgsProvideDefaults sets the appropriate defaults for InputPatchConfigurationArgs
         */
        export function inputPatchConfigurationArgsProvideDefaults(val: InputPatchConfigurationArgs): InputPatchConfigurationArgs {
            return {
                ...val,
                rebootSetting: (val.rebootSetting) ?? "IfRequired",
            };
        }

        /**
         * Input properties for patching a Windows machine.
         */
        export interface InputWindowsParametersArgs {
            /**
             * Classification category of patches to be patched
             */
            classificationsToInclude?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Exclude patches which need reboot
             */
            excludeKbsRequiringReboot?: pulumi.Input<boolean>;
            /**
             * Windows KBID to be excluded for patching.
             */
            kbNumbersToExclude?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Windows KBID to be included for patching.
             */
            kbNumbersToInclude?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * Definition of a MaintenanceOverrideProperties
         */
        export interface MaintenanceOverridePropertiesArgs {
            /**
             * Effective end date of the maintenance override window in YYYY-MM-DD hh:mm format. The window will be created in the time zone provided and adjusted to daylight savings according to that time zone. Expiration date must be set to a future date. If not provided, it will be set to the maximum datetime 9999-12-31 23:59:59.
             */
            endDateTime?: pulumi.Input<string>;
            /**
             * Gets or sets overrideProperties of the maintenanceConfiguration
             */
            overrideProperties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
            /**
             * Effective start date of the maintenance override window in YYYY-MM-DD hh:mm format. The start date can be set to either the current date or future date. The window will be created in the time zone provided and adjusted to daylight savings according to that time zone.
             */
            startDateTime?: pulumi.Input<string>;
            /**
             * Name of the timezone. List of timezones can be obtained by executing [System.TimeZoneInfo]::GetSystemTimeZones() in PowerShell. Example: Pacific Standard Time, UTC, W. Europe Standard Time, Korea Standard Time, Cen. Australia Standard Time.
             */
            timeZone?: pulumi.Input<string>;
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
            /**
             * Global Task execute once when schedule trigger. Resource task execute for each VM.
             */
            taskScope?: pulumi.Input<string | enums.v20221101preview.TaskScope>;
        }
        /**
         * taskPropertiesArgsProvideDefaults sets the appropriate defaults for TaskPropertiesArgs
         */
        export function taskPropertiesArgsProvideDefaults(val: TaskPropertiesArgs): TaskPropertiesArgs {
            return {
                ...val,
                taskScope: (val.taskScope) ?? "Global",
            };
        }

    }

    export namespace v20230401 {
        /**
         * Azure query for the update configuration.
         */
        export interface ConfigurationAssignmentFilterPropertiesArgs {
            /**
             * List of locations to scope the query to.
             */
            locations?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * List of allowed operating systems.
             */
            osTypes?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * List of allowed resource groups.
             */
            resourceGroups?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * List of allowed resources.
             */
            resourceTypes?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Tag settings for the VM.
             */
            tagSettings?: pulumi.Input<v20230401.TagSettingsPropertiesArgs>;
        }

        /**
         * Input properties for patching a Linux machine.
         */
        export interface InputLinuxParametersArgs {
            /**
             * Classification category of patches to be patched
             */
            classificationsToInclude?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Package names to be excluded for patching.
             */
            packageNameMasksToExclude?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Package names to be included for patching.
             */
            packageNameMasksToInclude?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * Input configuration for a patch run
         */
        export interface InputPatchConfigurationArgs {
            /**
             * Input parameters specific to patching Linux machine. For Windows machines, do not pass this property.
             */
            linuxParameters?: pulumi.Input<v20230401.InputLinuxParametersArgs>;
            /**
             * Possible reboot preference as defined by the user based on which it would be decided to reboot the machine or not after the patch operation is completed.
             */
            rebootSetting?: pulumi.Input<string | enums.v20230401.RebootOptions>;
            /**
             * Input parameters specific to patching a Windows machine. For Linux machines, do not pass this property.
             */
            windowsParameters?: pulumi.Input<v20230401.InputWindowsParametersArgs>;
        }
        /**
         * inputPatchConfigurationArgsProvideDefaults sets the appropriate defaults for InputPatchConfigurationArgs
         */
        export function inputPatchConfigurationArgsProvideDefaults(val: InputPatchConfigurationArgs): InputPatchConfigurationArgs {
            return {
                ...val,
                rebootSetting: (val.rebootSetting) ?? "IfRequired",
            };
        }

        /**
         * Input properties for patching a Windows machine.
         */
        export interface InputWindowsParametersArgs {
            /**
             * Classification category of patches to be patched
             */
            classificationsToInclude?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Exclude patches which need reboot
             */
            excludeKbsRequiringReboot?: pulumi.Input<boolean>;
            /**
             * Windows KBID to be excluded for patching.
             */
            kbNumbersToExclude?: pulumi.Input<pulumi.Input<string>[]>;
            /**
             * Windows KBID to be included for patching.
             */
            kbNumbersToInclude?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * Tag filter information for the VM.
         */
        export interface TagSettingsPropertiesArgs {
            /**
             * Filter VMs by Any or All specified tags.
             */
            filterOperator?: pulumi.Input<enums.v20230401.TagOperators>;
            /**
             * Dictionary of tags with its list of values.
             */
            tags?: pulumi.Input<{[key: string]: pulumi.Input<pulumi.Input<string>[]>}>;
        }

    }
}
