export const IscsiTargetAclMode = {
    Dynamic: "Dynamic",
    Static: "Static",
} as const;

/**
 * Mode for Target connectivity.
 */
export type IscsiTargetAclMode = (typeof IscsiTargetAclMode)[keyof typeof IscsiTargetAclMode];
