import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Represents a configuration parameter.
 */
export interface ConfigurationParameterArgs {
    /**
     * Name of the configuration parameter.
     */
    name?: pulumi.Input<string>;
    /**
     * Value of the configuration parameter.
     */
    value?: pulumi.Input<string>;
}

/**
 * Guest configuration assignment properties.
 */
export interface GuestConfigurationAssignmentPropertiesArgs {
    /**
     * The source which initiated the guest configuration assignment. Ex: Azure Policy
     */
    context?: pulumi.Input<string>;
    /**
     * The guest configuration to assign.
     */
    guestConfiguration?: pulumi.Input<GuestConfigurationNavigationArgs>;
}

/**
 * Guest configuration is an artifact that encapsulates DSC configuration and its dependencies. The artifact is a zip file containing DSC configuration (as MOF) and dependent resources and other dependencies like modules.
 */
export interface GuestConfigurationNavigationArgs {
    /**
     * Specifies the assignment type and execution of the configuration. Possible values are Audit, DeployAndAutoCorrect, ApplyAndAutoCorrect and ApplyAndMonitor.
     */
    assignmentType?: pulumi.Input<string | enums.AssignmentType>;
    /**
     * The configuration parameters for the guest configuration.
     */
    configurationParameter?: pulumi.Input<pulumi.Input<ConfigurationParameterArgs>[]>;
    /**
     * The protected configuration parameters for the guest configuration.
     */
    configurationProtectedParameter?: pulumi.Input<pulumi.Input<ConfigurationParameterArgs>[]>;
    /**
     * Combined hash of the guest configuration package and configuration parameters.
     */
    contentHash?: pulumi.Input<string>;
    /**
     * Managed identity with storage access of the guest configuration package and configuration parameters.
     */
    contentManagedIdentity?: pulumi.Input<string>;
    /**
     * Uri of the storage where guest configuration package is uploaded.
     */
    contentUri?: pulumi.Input<string>;
    /**
     * Kind of the guest configuration. For example:DSC
     */
    kind?: pulumi.Input<string | enums.Kind>;
    /**
     * Name of the guest configuration.
     */
    name?: pulumi.Input<string>;
    /**
     * Version of the guest configuration.
     */
    version?: pulumi.Input<string>;
}
