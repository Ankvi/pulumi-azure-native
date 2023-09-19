import * as pulumi from "@pulumi/pulumi";
    /**
     * The variable column.
     */
    export interface PolicyVariableColumnResponse {
        /**
         * The name of this policy variable column.
         */
        columnName: string;
    }

    /**
     * The name value tuple for this variable value column.
     */
    export interface PolicyVariableValueColumnValueResponse {
        /**
         * Column name for the variable value
         */
        columnName: string;
        /**
         * Column value for the variable value; this can be an integer, double, boolean, null or a string.
         */
        columnValue: any;
    }

    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    export interface SystemDataResponse {
        /**
         * The timestamp of resource creation (UTC).
         */
        createdAt?: string;
        /**
         * The identity that created the resource.
         */
        createdBy?: string;
        /**
         * The type of identity that created the resource.
         */
        createdByType?: string;
        /**
         * The timestamp of resource last modification (UTC)
         */
        lastModifiedAt?: string;
        /**
         * The identity that last modified the resource.
         */
        lastModifiedBy?: string;
        /**
         * The type of identity that last modified the resource.
         */
        lastModifiedByType?: string;
    }
