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
 * Web Application Firewall Policy
 */
export interface WafPolicyArgs {
    /**
     * Resource ID of the WAF
     */
    id: pulumi.Input<string>;
}





