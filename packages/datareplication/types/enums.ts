export const PrivateEndpointConnectionStatus = {
    /**
     * Approved Status.
     */
    Approved: "Approved",
    /**
     * Disconnected Status.
     */
    Disconnected: "Disconnected",
    /**
     * Pending Status.
     */
    Pending: "Pending",
    /**
     * Rejected Status.
     */
    Rejected: "Rejected",
} as const;

/**
 * Gets or sets the status.
 */
export type PrivateEndpointConnectionStatus = (typeof PrivateEndpointConnectionStatus)[keyof typeof PrivateEndpointConnectionStatus];

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
