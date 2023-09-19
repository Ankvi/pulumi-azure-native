import * as pulumi from "@pulumi/pulumi";
    /**
     * The details of a management group used during creation.
     */
    export interface CreateManagementGroupDetailsArgs {
        /**
         * (Optional) The ID of the parent management group used during creation.
         */
        parent?: pulumi.Input<CreateParentGroupInfoArgs>;
    }

    /**
     * (Optional) The ID of the parent management group used during creation.
     */
    export interface CreateParentGroupInfoArgs {
        /**
         * The fully qualified ID for the parent management group.  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000
         */
        id?: pulumi.Input<string>;
    }
