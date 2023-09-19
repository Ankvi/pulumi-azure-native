import * as pulumi from "@pulumi/pulumi";
    /**
     * The set of data plane operations permitted through this Role Definition.
     */
    export interface PrivilegeResponse {
        /**
         * An array of actions that are allowed.
         */
        actions?: string[];
        /**
         * An Azure Cosmos DB Mongo DB Resource.
         */
        resource?: PrivilegeResponseResource;
    }

    /**
     * An Azure Cosmos DB Mongo DB Resource.
     */
    export interface PrivilegeResponseResource {
        /**
         * The collection name the role is applied.
         */
        collection?: string;
        /**
         * The database name the role is applied.
         */
        db?: string;
    }

    /**
     * The set of roles permitted through this Role Definition.
     */
    export interface RoleResponse {
        /**
         * The database name the role is applied.
         */
        db?: string;
        /**
         * The role name.
         */
        role?: string;
    }
