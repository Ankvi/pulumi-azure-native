import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * User information that made some action
     */
    export interface WatchlistUserInfoArgs {
        /**
         * The object id of the user.
         */
        objectId?: pulumi.Input<string>;
    }
