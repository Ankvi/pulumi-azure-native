import * as pulumi from "@pulumi/pulumi";
export namespace management {
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

    export namespace v20200501 {
    }

    export namespace v20201001 {
    }

    export namespace v20210401 {
        /**
         * The details of a management group used during creation.
         */
        export interface CreateManagementGroupDetailsArgs {
            /**
             * (Optional) The ID of the parent management group used during creation.
             */
            parent?: pulumi.Input<v20210401.CreateParentGroupInfoArgs>;
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

    }

    export namespace v20230401 {
        /**
         * The details of a management group used during creation.
         */
        export interface CreateManagementGroupDetailsArgs {
            /**
             * (Optional) The ID of the parent management group used during creation.
             */
            parent?: pulumi.Input<v20230401.CreateParentGroupInfoArgs>;
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

    }
}
