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
     * Classification category of patches to be patched. Allowed values are 'Critical', 'Security', and 'Other'.
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
     * Classification category of patches to be patched. Allowed values are 'Critical', 'Security', 'UpdateRollup', 'FeaturePack', 'ServicePack', 'Definition', 'Tools', and 'Updates'.
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
