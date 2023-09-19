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

export type DenySettingsMode = (typeof DenySettingsMode)[keyof typeof DenySettingsMode];

export const DeploymentStacksDeleteDetachEnum = {
    Delete: "delete",
    Detach: "detach",
} as const;

export type DeploymentStacksDeleteDetachEnum = (typeof DeploymentStacksDeleteDetachEnum)[keyof typeof DeploymentStacksDeleteDetachEnum];
