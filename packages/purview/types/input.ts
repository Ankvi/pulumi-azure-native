import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace purview {
    /**
     * Credentials to access the event streaming service attached to the purview account.
     */
    export interface CredentialsArgs {
        /**
         * Identity identifier for UserAssign type.
         */
        identityId?: pulumi.Input<string>;
        /**
         * Identity Type.
         */
        type?: pulumi.Input<string | enums.CredentialsType>;
    }

    /**
     * The Managed Identity of the resource
     */
    export interface IdentityArgs {
        /**
         * Identity Type
         */
        type?: pulumi.Input<string | enums.Type>;
        /**
         * User Assigned Identities
         */
        userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * A private endpoint class.
     */
    export interface PrivateEndpointArgs {
        /**
         * The private endpoint identifier.
         */
        id?: pulumi.Input<string>;
    }

    /**
     * The private link service connection state.
     */
    export interface PrivateLinkServiceConnectionStateArgs {
        /**
         * The required actions.
         */
        actionsRequired?: pulumi.Input<string>;
        /**
         * The description.
         */
        description?: pulumi.Input<string>;
        /**
         * The status.
         */
        status?: pulumi.Input<string | enums.Status>;
    }

    export namespace v20201201preview {
        /**
         * The Managed Identity of the resource
         */
        export interface IdentityArgs {
            /**
             * Identity Type
             */
            type?: pulumi.Input<string | enums.v20201201preview.Type>;
        }

    }

    export namespace v20210701 {
        /**
         * The Managed Identity of the resource
         */
        export interface IdentityArgs {
            /**
             * Identity Type
             */
            type?: pulumi.Input<string | enums.v20210701.Type>;
            /**
             * User Assigned Identities
             */
            userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * A private endpoint class.
         */
        export interface PrivateEndpointArgs {
            /**
             * The private endpoint identifier.
             */
            id?: pulumi.Input<string>;
        }

        /**
         * The private link service connection state.
         */
        export interface PrivateLinkServiceConnectionStateArgs {
            /**
             * The required actions.
             */
            actionsRequired?: pulumi.Input<string>;
            /**
             * The description.
             */
            description?: pulumi.Input<string>;
            /**
             * The status.
             */
            status?: pulumi.Input<string | enums.v20210701.Status>;
        }

    }

    export namespace v20211201 {
        /**
         * Credentials to access the event streaming service attached to the purview account.
         */
        export interface CredentialsArgs {
            /**
             * Identity identifier for UserAssign type.
             */
            identityId?: pulumi.Input<string>;
            /**
             * Identity Type.
             */
            type?: pulumi.Input<string | enums.v20211201.CredentialsType>;
        }

        /**
         * The Managed Identity of the resource
         */
        export interface IdentityArgs {
            /**
             * Identity Type
             */
            type?: pulumi.Input<string | enums.v20211201.Type>;
            /**
             * User Assigned Identities
             */
            userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
        }

        /**
         * A private endpoint class.
         */
        export interface PrivateEndpointArgs {
            /**
             * The private endpoint identifier.
             */
            id?: pulumi.Input<string>;
        }

        /**
         * The private link service connection state.
         */
        export interface PrivateLinkServiceConnectionStateArgs {
            /**
             * The required actions.
             */
            actionsRequired?: pulumi.Input<string>;
            /**
             * The description.
             */
            description?: pulumi.Input<string>;
            /**
             * The status.
             */
            status?: pulumi.Input<string | enums.v20211201.Status>;
        }

    }
}
