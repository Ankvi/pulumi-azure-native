import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
     * Classification category of patches to be patched. Allowed values are 'Critical', 'Security', and 'Other'.
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
     * Classification category of patches to be patched. Allowed values are 'Critical', 'Security', 'UpdateRollup', 'FeaturePack', 'ServicePack', 'Definition', 'Tools', and 'Updates'.
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
    filterOperator?: pulumi.Input<enums.TagOperators>;
    /**
     * Dictionary of tags with its list of values.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<pulumi.Input<string>[]>}>;
}
