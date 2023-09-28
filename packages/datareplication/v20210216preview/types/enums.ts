export const ReplicationVaultType = {
    DisasterRecovery: "DisasterRecovery",
    Migrate: "Migrate",
} as const;

/**
 * Gets or sets the type of vault.
 */
export type ReplicationVaultType = (typeof ReplicationVaultType)[keyof typeof ReplicationVaultType];

export const VMNicSelection = {
    NotSelected: "NotSelected",
    SelectedByUser: "SelectedByUser",
    SelectedByDefault: "SelectedByDefault",
    SelectedByUserOverride: "SelectedByUserOverride",
} as const;

/**
 * Gets or sets the selection type of the NIC.
 */
export type VMNicSelection = (typeof VMNicSelection)[keyof typeof VMNicSelection];
