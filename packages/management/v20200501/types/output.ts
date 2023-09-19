import * as pulumi from "@pulumi/pulumi";
    /**
     * The entity.
     */
    export interface EntityInfoResponse {
        /**
         * The friendly name of the management group.
         */
        displayName?: string;
        /**
         * The fully qualified ID for the entity.  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000
         */
        id: string;
        /**
         * The users specific permissions to this item.
         */
        inheritedPermissions?: string;
        /**
         * The name of the entity. For example, 00000000-0000-0000-0000-000000000000
         */
        name: string;
        /**
         * Number of children is the number of Groups that are exactly one level underneath the current Group.
         */
        numberOfChildGroups?: number;
        /**
         * Number of children is the number of Groups and Subscriptions that are exactly one level underneath the current Group.
         */
        numberOfChildren?: number;
        numberOfDescendants?: number;
        /**
         * (Optional) The ID of the parent management group.
         */
        parent?: EntityParentGroupInfoResponse;
        /**
         * The parent display name chain from the root group to the immediate parent
         */
        parentDisplayNameChain?: string[];
        /**
         * The parent name chain from the root group to the immediate parent
         */
        parentNameChain?: string[];
        /**
         * The users specific permissions to this item.
         */
        permissions?: string;
        /**
         * The AAD Tenant ID associated with the entity. For example, 00000000-0000-0000-0000-000000000000
         */
        tenantId?: string;
        /**
         * The type of the resource. For example, Microsoft.Management/managementGroups
         */
        type: string;
    }

    /**
     * (Optional) The ID of the parent management group.
     */
    export interface EntityParentGroupInfoResponse {
        /**
         * The fully qualified ID for the parent management group.  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000
         */
        id?: string;
    }
