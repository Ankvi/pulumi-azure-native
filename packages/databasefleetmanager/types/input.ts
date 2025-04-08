import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Database Identity properties.
 */
export interface DatabaseIdentityArgs {
    /**
     * Client Id of the database identity.
     */
    clientId?: pulumi.Input<string>;
    /**
     * Principal Id of the database identity.
     */
    principalId?: pulumi.Input<string>;
    /**
     * Resource Id of the database identity.
     */
    resourceId?: pulumi.Input<string>;
}

/**
 * A Firewall rule properties.
 */
export interface FirewallRulePropertiesArgs {
    /**
     * End IP address.
     */
    endIpAddress?: pulumi.Input<string>;
    /**
     * Start IP address.
     */
    startIpAddress?: pulumi.Input<string>;
}

/**
 * Fleet database properties.
 */
export interface FleetDatabasePropertiesArgs {
    /**
     * Database collation.
     */
    collation?: pulumi.Input<string>;
    /**
     * Create mode. Available options: Default - Create a database. Copy - Copy the source database (source database name must be specified) PointInTimeRestore - Create a database by restoring source database from a point in time (source database name and restore from time must be specified)
     */
    createMode?: pulumi.Input<string | enums.DatabaseCreateMode>;
    /**
     * Identity property.
     */
    identity?: pulumi.Input<IdentityArgs>;
    /**
     * Additional database properties to be applied as the underlying database resource tags.
     */
    resourceTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Restore from time when CreateMode is PointInTimeRestore.
     */
    restoreFromTime?: pulumi.Input<string>;
    /**
     * Source database name used when CreateMode is Copy or PointInTimeRestore.
     */
    sourceDatabaseName?: pulumi.Input<string>;
    /**
     * Name of the tier this database belongs to.
     */
    tierName?: pulumi.Input<string>;
    /**
     * Transparent Data Encryption properties
     */
    transparentDataEncryption?: pulumi.Input<TransparentDataEncryptionArgs>;
}

/**
 * The Database Fleet properties.
 */
export interface FleetPropertiesArgs {
    /**
     * Fleet description.
     */
    description?: pulumi.Input<string>;
}

/**
 * A Fleet tier properties.
 */
export interface FleetTierPropertiesArgs {
    /**
     * Capacity of provisioned resources in the tier, in units matching the specified service tier, for example vCore for GeneralPurpose.
     */
    capacity?: pulumi.Input<number>;
    /**
     * Maximum allocated capacity per database, in units matching the specified service tier.
     */
    databaseCapacityMax?: pulumi.Input<number>;
    /**
     * Minimum allocated capacity per database, in units matching the specified service tier.
     */
    databaseCapacityMin?: pulumi.Input<number>;
    /**
     * Maximum database size in Gb.
     */
    databaseSizeGbMax?: pulumi.Input<number>;
    /**
     * Family of provisioned resources, for example Gen5.
     */
    family?: pulumi.Input<string>;
    /**
     * Number of high availability replicas for databases in this tier.
     */
    highAvailabilityReplicaCount?: pulumi.Input<number>;
    /**
     * Maximum number of databases per pool.
     */
    poolNumOfDatabasesMax?: pulumi.Input<number>;
    /**
     * If true, databases are pooled.
     */
    pooled?: pulumi.Input<boolean>;
    /**
     * If true, serverless resources are provisioned in the tier.
     */
    serverless?: pulumi.Input<boolean>;
    /**
     * Service tier of provisioned resources. Supported values: GeneralPurpose, Hyperscale.
     */
    serviceTier?: pulumi.Input<string>;
    /**
     * Enable zone redundancy for all databases in this tier.
     */
    zoneRedundancy?: pulumi.Input<string | enums.ZoneRedundancy>;
}

/**
 * A Fleetspace properties.
 */
export interface FleetspacePropertiesArgs {
    /**
     * Maximum number of vCores database fleet manager is allowed to provision in the fleetspace.
     */
    capacityMax?: pulumi.Input<number>;
    /**
     * Main Microsoft Entra ID principal that has admin access to all databases in the fleetspace.
     */
    mainPrincipal?: pulumi.Input<MainPrincipalArgs>;
}

/**
 * Database Identity.
 */
export interface IdentityArgs {
    /**
     * The federated client id for the SQL Database. It is used for cross tenant CMK scenario.
     */
    federatedClientId?: pulumi.Input<string>;
    /**
     * Identity type of the main principal.
     */
    identityType?: pulumi.Input<string | enums.IdentityType>;
    /**
     * User identity ids
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<DatabaseIdentityArgs>[]>;
}

/**
 * A main principal.
 */
export interface MainPrincipalArgs {
    /**
     * Application Id of the main principal.
     */
    applicationId?: pulumi.Input<string>;
    /**
     * Login name of the main principal.
     */
    login?: pulumi.Input<string>;
    /**
     * Object Id of the main principal.
     */
    objectId?: pulumi.Input<string>;
    /**
     * Principal type of the main principal.
     */
    principalType?: pulumi.Input<string | enums.PrincipalType>;
    /**
     * Tenant Id of the main principal.
     */
    tenantId?: pulumi.Input<string>;
}

/**
 * Transparent Data Encryption properties.
 */
export interface TransparentDataEncryptionArgs {
    /**
     * Enable key auto rotation
     */
    enableAutoRotation?: pulumi.Input<boolean>;
    /**
     * Customer Managed Key (CMK) Uri.
     */
    keyUri?: pulumi.Input<string>;
    /**
     * Additional Keys
     */
    keys?: pulumi.Input<pulumi.Input<string>[]>;
}
