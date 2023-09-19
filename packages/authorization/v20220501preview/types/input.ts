import * as pulumi from "@pulumi/pulumi";
    /**
     * Role definition permissions.
     */
    export interface PermissionArgs {
        /**
         * Allowed actions.
         */
        actions?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Allowed Data actions.
         */
        dataActions?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Denied actions.
         */
        notActions?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Denied Data actions.
         */
        notDataActions?: pulumi.Input<pulumi.Input<string>[]>;
    }
