import * as pulumi from "@pulumi/pulumi";
    /**
     * The variable column.
     */
    export interface PolicyVariableColumnArgs {
        /**
         * The name of this policy variable column.
         */
        columnName: pulumi.Input<string>;
    }

    /**
     * The name value tuple for this variable value column.
     */
    export interface PolicyVariableValueColumnValueArgs {
        /**
         * Column name for the variable value
         */
        columnName: pulumi.Input<string>;
        /**
         * Column value for the variable value; this can be an integer, double, boolean, null or a string.
         */
        columnValue: any;
    }
