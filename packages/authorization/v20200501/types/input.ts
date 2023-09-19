import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Lock owner properties.
     */
    export interface ManagementLockOwnerArgs {
        /**
         * The application ID of the lock owner.
         */
        applicationId?: pulumi.Input<string>;
    }

    export interface PrivateLinkAssociationPropertiesArgs {
        /**
         * The rmpl Resource ID.
         */
        privateLink?: pulumi.Input<string>;
        publicNetworkAccess?: pulumi.Input<string | enums.PublicNetworkAccessOptions>;
    }
