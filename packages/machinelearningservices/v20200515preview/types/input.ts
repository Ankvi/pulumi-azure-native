import * as pulumi from "@pulumi/pulumi";
    /**
     * LinkedWorkspace specific properties.
     */
    export interface LinkedWorkspacePropsArgs {
        /**
         * ResourceId of the link target of the linked workspace.
         */
        linkedWorkspaceResourceId?: pulumi.Input<string>;
        /**
         * ResourceId of the user assigned identity for the linked workspace.
         */
        userAssignedIdentityResourceId?: pulumi.Input<string>;
    }
