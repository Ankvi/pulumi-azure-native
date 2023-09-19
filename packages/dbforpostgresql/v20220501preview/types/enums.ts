export const MigrationMode = {
    Offline: "Offline",
    Online: "Online",
} as const;

export type MigrationMode = (typeof MigrationMode)[keyof typeof MigrationMode];
