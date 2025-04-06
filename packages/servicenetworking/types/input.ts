import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Association Subnet.
 */
export interface AssociationSubnetArgs {
    /**
     * Association ID.
     */
    id: pulumi.Input<string>;
}

/**
 * SecurityPolicyConfigurations Subresource of Traffic Controller.
 */
export interface SecurityPolicyConfigurationsArgs {
    /**
     * Contains reference to a WAF-type security policy.
     */
    wafSecurityPolicy?: pulumi.Input<WafSecurityPolicyArgs>;
}

/**
 * Web Application Firewall Policy
 */
export interface WafPolicyArgs {
    /**
     * Resource ID of the WAF
     */
    id: pulumi.Input<string>;
}

/**
 * Web Application Firewall Security Policy
 */
export interface WafSecurityPolicyArgs {
    /**
     * Resource ID of the Waf Security Policy
     */
    id: pulumi.Input<string>;
}
