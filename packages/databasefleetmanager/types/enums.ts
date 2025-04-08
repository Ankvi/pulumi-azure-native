export const DatabaseCreateMode = {
    /**
     * Create a database.
     */
    Default: "Default",
    /**
     * Copy the source database (source database name must be specified).
     */
    Copy: "Copy",
    /**
     * Create a database by restoring source database from a point in time (source database name and restore from time must be specified).
     */
    PointInTimeRestore: "PointInTimeRestore",
} as const;

/**
 * Create mode. Available options: Default - Create a database. Copy - Copy the source database (source database name must be specified) PointInTimeRestore - Create a database by restoring source database from a point in time (source database name and restore from time must be specified)
 */
export type DatabaseCreateMode = (typeof DatabaseCreateMode)[keyof typeof DatabaseCreateMode];

export const IdentityType = {
    /**
     * No identity.
     */
    None: "None",
    /**
     * User assigned identity.
     */
    UserAssigned: "UserAssigned",
} as const;

/**
 * Identity type of the main principal.
 */
export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

export const PrincipalType = {
    /**
     * Application principal type.
     */
    Application: "Application",
    /**
     * User principal type.
     */
    User: "User",
} as const;

/**
 * Principal type of the main principal.
 */
export type PrincipalType = (typeof PrincipalType)[keyof typeof PrincipalType];

export const ZoneRedundancy = {
    /**
     * Zone redundancy enabled.
     */
    Enabled: "Enabled",
    /**
     * Zone redundancy disabled.
     */
    Disabled: "Disabled",
} as const;

/**
 * Enable zone redundancy for all databases in this tier.
 */
export type ZoneRedundancy = (typeof ZoneRedundancy)[keyof typeof ZoneRedundancy];
