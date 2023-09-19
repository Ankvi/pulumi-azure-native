import * as pulumi from "@pulumi/pulumi";
    /**
     * Identity details
     */
    export interface DppIdentityDetailsArgs {
        /**
         * The identityType which can be either SystemAssigned or None
         */
        type?: pulumi.Input<string>;
    }

    export interface ResourceGuardArgs {
        /**
         * List of critical operations which are not protected by this resourceGuard
         */
        vaultCriticalOperationExclusionList?: pulumi.Input<pulumi.Input<string>[]>;
    }
