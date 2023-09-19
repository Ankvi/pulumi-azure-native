export const IscsiTargetAclMode = {
    Dynamic: "Dynamic",
    Static: "Static",
} as const;

export type IscsiTargetAclMode = (typeof IscsiTargetAclMode)[keyof typeof IscsiTargetAclMode];
