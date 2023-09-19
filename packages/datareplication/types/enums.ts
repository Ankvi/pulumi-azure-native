export const ReplicationVaultType = {
    DisasterRecovery: "DisasterRecovery",
    Migrate: "Migrate",
} as const;

export type ReplicationVaultType = (typeof ReplicationVaultType)[keyof typeof ReplicationVaultType];

export const VMNicSelection = {
    NotSelected: "NotSelected",
    SelectedByUser: "SelectedByUser",
    SelectedByDefault: "SelectedByDefault",
    SelectedByUserOverride: "SelectedByUserOverride",
} as const;

export type VMNicSelection = (typeof VMNicSelection)[keyof typeof VMNicSelection];
