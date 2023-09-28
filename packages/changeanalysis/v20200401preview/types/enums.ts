export const ChangeDetailsMode = {
    None: "None",
    Include: "Include",
    Exclude: "Exclude",
} as const;

/**
 * The mode of includeChangeDetails feature. The flag configures whether to include or exclude content of the change before and after values.
 */
export type ChangeDetailsMode = (typeof ChangeDetailsMode)[keyof typeof ChangeDetailsMode];

export const ManagedIdentityTypes = {
    None: "None",
    SystemAssigned: "SystemAssigned",
} as const;

/**
 * The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identities.
 */
export type ManagedIdentityTypes = (typeof ManagedIdentityTypes)[keyof typeof ManagedIdentityTypes];

export const NotificationsState = {
    None: "None",
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * The state of notifications feature.
 */
export type NotificationsState = (typeof NotificationsState)[keyof typeof NotificationsState];
