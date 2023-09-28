export const DenySettingsMode = {
    /**
     * Authorized users are able to read and modify the resources, but cannot delete.
     */
    DenyDelete: "denyDelete",
    /**
     * Authorized users can only read from a resource, but cannot modify or delete it.
     */
    DenyWriteAndDelete: "denyWriteAndDelete",
    /**
     * No denyAssignments have been applied.
     */
    None: "none",
} as const;

/**
 * denySettings Mode.
 */
export type DenySettingsMode = (typeof DenySettingsMode)[keyof typeof DenySettingsMode];

export const DeploymentStacksDeleteDetachEnum = {
    Delete: "delete",
    Detach: "detach",
} as const;

/**
 * Specifies the action that should be taken on the resource when the deployment stack is deleted. Delete will attempt to delete the resource from Azure. Detach will leave the resource in it's current state.
 */
export type DeploymentStacksDeleteDetachEnum = (typeof DeploymentStacksDeleteDetachEnum)[keyof typeof DeploymentStacksDeleteDetachEnum];
