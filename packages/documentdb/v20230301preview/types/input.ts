import * as pulumi from "@pulumi/pulumi";
    /**
     * The set of data plane operations permitted through this Role Definition.
     */
    export interface PrivilegeArgs {
        /**
         * An array of actions that are allowed.
         */
        actions?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * An Azure Cosmos DB Mongo DB Resource.
         */
        resource?: pulumi.Input<PrivilegeResourceArgs>;
    }

    /**
     * An Azure Cosmos DB Mongo DB Resource.
     */
    export interface PrivilegeResourceArgs {
        /**
         * The collection name the role is applied.
         */
        collection?: pulumi.Input<string>;
        /**
         * The database name the role is applied.
         */
        db?: pulumi.Input<string>;
    }

    /**
     * The set of roles permitted through this Role Definition.
     */
    export interface RoleArgs {
        /**
         * The database name the role is applied.
         */
        db?: pulumi.Input<string>;
        /**
         * The role name.
         */
        role?: pulumi.Input<string>;
    }
