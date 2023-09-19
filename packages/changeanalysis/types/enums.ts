export const ChangeDetailsMode = {
    None: "None",
    Include: "Include",
    Exclude: "Exclude",
} as const;

export type ChangeDetailsMode = (typeof ChangeDetailsMode)[keyof typeof ChangeDetailsMode];

export const ManagedIdentityTypes = {
    None: "None",
    SystemAssigned: "SystemAssigned",
} as const;

export type ManagedIdentityTypes = (typeof ManagedIdentityTypes)[keyof typeof ManagedIdentityTypes];

export const NotificationsState = {
    None: "None",
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type NotificationsState = (typeof NotificationsState)[keyof typeof NotificationsState];
