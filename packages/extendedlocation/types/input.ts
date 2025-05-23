import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * This is optional input that contains the authentication that should be used to generate the namespace.
 */
export interface CustomLocationPropertiesAuthenticationArgs {
    /**
     * The type of the Custom Locations authentication
     */
    type?: pulumi.Input<string>;
    /**
     * The kubeconfig value.
     */
    value?: pulumi.Input<string>;
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

/**
 * A label selector is composed of two parts, matchLabels and matchExpressions. The first part, matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The second part, matchExpressions is a list of resource selector requirements. Valid operators include In, NotIn, Exists, and DoesNotExist. The values set must be non-empty in the case of In and NotIn. The values set must be empty in the case of Exists and DoesNotExist. All of the requirements, from both matchLabels and matchExpressions must all be satisfied in order to match.
 */
export interface ResourceSyncRulePropertiesSelectorArgs {
    /**
     * MatchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'.
     */
    matchLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
