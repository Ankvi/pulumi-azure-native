import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Database Identity properties.
 */
export interface DatabaseIdentityArgs {
    /**
     * Client Id of the database identity.
     */
    clientId?: pulumi.Input<string | undefined>;
    /**
     * Principal Id of the database identity.
     */
    principalId?: pulumi.Input<string | undefined>;
    /**
     * Resource Id of the database identity.
     */
    resourceId?: pulumi.Input<string | undefined>;
}

/**
 * A Firewall rule properties.
 */
export interface FirewallRulePropertiesArgs {
    /**
     * End IP address.
     */
    endIpAddress?: pulumi.Input<string | undefined>;
    /**
     * Start IP address.
     */
    startIpAddress?: pulumi.Input<string | undefined>;
}

/**
 * Fleet database properties.
 */
export interface FleetDatabasePropertiesArgs {
    /**
     * Database collation.
     */
    collation?: pulumi.Input<string | undefined>;
    /**
     * Create mode. Available options: Default - Create a database. Copy - Copy the source database (source database name must be specified) PointInTimeRestore - Create a database by restoring source database from a point in time (source database name and restore from time must be specified)
     */
    createMode?: pulumi.Input<string | enums.DatabaseCreateMode | undefined>;
    /**
     * Identity property.
     */
    identity?: pulumi.Input<IdentityArgs | undefined>;
    /**
     * Additional database properties to be applied as the underlying database resource tags.
     */
    resourceTags?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * Restore from time when CreateMode is PointInTimeRestore.
     */
    restoreFromTime?: pulumi.Input<string | undefined>;
    /**
     * Source database name used when CreateMode is Copy or PointInTimeRestore.
     */
    sourceDatabaseName?: pulumi.Input<string | undefined>;
    /**
     * Name of the tier this database belongs to.
     */
    tierName?: pulumi.Input<string | undefined>;
    /**
     * Transparent Data Encryption properties
     */
    transparentDataEncryption?: pulumi.Input<TransparentDataEncryptionArgs | undefined>;
}

/**
 * The Database Fleet properties.
 */
export interface FleetPropertiesArgs {
    /**
     * Fleet description.
     */
    description?: pulumi.Input<string | undefined>;
}

/**
 * A Fleet tier properties.
 */
export interface FleetTierPropertiesArgs {
    /**
     * Capacity of provisioned resources in the tier, in units matching the specified service tier, for example vCore for GeneralPurpose.
     */
    capacity?: pulumi.Input<number | undefined>;
    /**
     * Maximum allocated capacity per database, in units matching the specified service tier.
     */
    databaseCapacityMax?: pulumi.Input<number | undefined>;
    /**
     * Minimum allocated capacity per database, in units matching the specified service tier.
     */
    databaseCapacityMin?: pulumi.Input<number | undefined>;
    /**
     * Maximum database size in Gb.
     */
    databaseSizeGbMax?: pulumi.Input<number | undefined>;
    /**
     * Family of provisioned resources, for example Gen5.
     */
    family?: pulumi.Input<string | undefined>;
    /**
     * Number of high availability replicas for databases in this tier.
     */
    highAvailabilityReplicaCount?: pulumi.Input<number | undefined>;
    /**
     * Maximum number of databases per pool.
     */
    poolNumOfDatabasesMax?: pulumi.Input<number | undefined>;
    /**
     * If true, databases are pooled.
     */
    pooled?: pulumi.Input<boolean | undefined>;
    /**
     * If true, serverless resources are provisioned in the tier.
     */
    serverless?: pulumi.Input<boolean | undefined>;
    /**
     * Service tier of provisioned resources. Supported values: GeneralPurpose, Hyperscale.
     */
    serviceTier?: pulumi.Input<string | undefined>;
    /**
     * Enable zone redundancy for all databases in this tier.
     */
    zoneRedundancy?: pulumi.Input<string | enums.ZoneRedundancy | undefined>;
}

/**
 * A Fleetspace properties.
 */
export interface FleetspacePropertiesArgs {
    /**
     * Maximum number of vCores database fleet manager is allowed to provision in the fleetspace.
     */
    capacityMax?: pulumi.Input<number | undefined>;
    /**
     * Main Microsoft Entra ID principal that has admin access to all databases in the fleetspace.
     */
    mainPrincipal?: pulumi.Input<MainPrincipalArgs | undefined>;
}

/**
 * Database Identity.
 */
export interface IdentityArgs {
    /**
     * The federated client id for the SQL Database. It is used for cross tenant CMK scenario.
     */
    federatedClientId?: pulumi.Input<string | undefined>;
    /**
     * Identity type of the main principal.
     */
    identityType?: pulumi.Input<string | enums.IdentityType | undefined>;
    /**
     * User identity ids
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<DatabaseIdentityArgs>[] | undefined>;
}

/**
 * A main principal.
 */
export interface MainPrincipalArgs {
    /**
     * Application Id of the main principal.
     */
    applicationId?: pulumi.Input<string | undefined>;
    /**
     * Login name of the main principal.
     */
    login?: pulumi.Input<string | undefined>;
    /**
     * Object Id of the main principal.
     */
    objectId?: pulumi.Input<string | undefined>;
    /**
     * Principal type of the main principal.
     */
    principalType?: pulumi.Input<string | enums.PrincipalType | undefined>;
    /**
     * Tenant Id of the main principal.
     */
    tenantId?: pulumi.Input<string | undefined>;
}

/**
 * Transparent Data Encryption properties.
 */
export interface TransparentDataEncryptionArgs {
    /**
     * Enable key auto rotation
     */
    enableAutoRotation?: pulumi.Input<boolean | undefined>;
    /**
     * Customer Managed Key (CMK) Uri.
     */
    keyUri?: pulumi.Input<string | undefined>;
    /**
     * Additional Keys
     */
    keys?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}
