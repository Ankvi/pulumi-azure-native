import * as pulumi from "@pulumi/pulumi";
    /**
     * LinkedWorkspace specific properties.
     */
    export interface LinkedWorkspacePropsResponse {
        /**
         * ResourceId of the link target of the linked workspace.
         */
        linkedWorkspaceResourceId?: string;
        /**
         * ResourceId of the user assigned identity for the linked workspace.
         */
        userAssignedIdentityResourceId?: string;
    }
