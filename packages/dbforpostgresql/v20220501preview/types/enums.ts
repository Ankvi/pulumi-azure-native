export const MigrationMode = {
    Offline: "Offline",
    Online: "Online",
} as const;

/**
 * There are two types of migration modes Online and Offline
 */
export type MigrationMode = (typeof MigrationMode)[keyof typeof MigrationMode];
