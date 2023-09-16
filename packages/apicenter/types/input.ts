import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace apicenter {
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

    export namespace v20230701preview {
        /**
         * Managed service identity (system assigned and/or user assigned identities)
         */
        export interface ManagedServiceIdentityArgs {
            /**
             * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
             */
            type: pulumi.Input<string | enums.v20230701preview.ManagedServiceIdentityType>;
            /**
             * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
             */
            userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
        }

    }
}
