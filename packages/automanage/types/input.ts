import * as pulumi from "@pulumi/pulumi";
/**
 * Automanage configuration profile assignment properties.
 */
export interface ConfigurationProfileAssignmentPropertiesArgs {
    /**
     * The Automanage configurationProfile ARM Resource URI.
     */
    configurationProfile?: pulumi.Input<string>;
}

/**
 * Automanage configuration profile properties.
 */
export interface ConfigurationProfilePropertiesArgs {
    /**
     * configuration dictionary of the configuration profile.
     */
    configuration?: any;
}
