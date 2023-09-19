import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Managed service identity (system assigned and/or user assigned identities)
     */
    export interface ManagedServiceIdentityArgs {
        /**
         * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
         */
        type: pulumi.Input<string | enums.ManagedServiceIdentityType>;
        /**
         * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
         */
        userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * The configuration used in this region as primary, and other regions as backup.
     */
    export interface PrimaryRegionPropertiesArgs {
        /**
         * The allowed source IP address or CIDR ranges for media
         */
        allowedMediaSourceAddressPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The allowed source IP address or CIDR ranges for signaling
         */
        allowedSignalingSourceAddressPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * IP address to use to contact the ESRP from this region
         */
        esrpAddresses?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * IP address to use to contact the operator network from this region
         */
        operatorAddresses: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * The service region configuration needed for Teams Callings.
     */
    export interface ServiceRegionPropertiesArgs {
        /**
         * The name of the region in which the resources needed for Teams Calling will be deployed.
         */
        name: pulumi.Input<string>;
        /**
         * The configuration used in this region as primary, and other regions as backup.
         */
        primaryRegionProperties: pulumi.Input<PrimaryRegionPropertiesArgs>;
    }
