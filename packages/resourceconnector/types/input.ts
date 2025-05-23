import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Contains infrastructure information about the Appliance
 */
export interface AppliancePropertiesInfrastructureConfigArgs {
    /**
     * Information about the connected appliance.
     */
    provider?: pulumi.Input<string | enums.Provider>;
}

/**
 * Identity for the resource.
 */
export interface IdentityArgs {
    /**
     * The identity type.
     */
    type?: pulumi.Input<string | enums.ResourceIdentityType>;
}
