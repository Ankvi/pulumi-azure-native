import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Database Identity properties.
 */
export interface DatabaseIdentityResponse {
    /**
     * Client Id of the database identity.
     */
    clientId?: string;
    /**
     * Principal Id of the database identity.
     */
    principalId?: string;
    /**
     * Resource Id of the database identity.
     */
    resourceId?: string;
}

/**
 * A Firewall rule properties.
 */
export interface FirewallRulePropertiesResponse {
    /**
     * End IP address.
     */
    endIpAddress?: string;
    /**
     * Provisioning state.
     */
    provisioningState: string;
    /**
     * Start IP address.
     */
    startIpAddress?: string;
}

/**
 * Fleet database properties.
 */
export interface FleetDatabasePropertiesResponse {
    /**
     * Backup retention in days.
     */
    backupRetentionDays: number;
    /**
     * Database collation.
     */
    collation?: string;
    /**
     * Connection string to connect to the database with.
     */
    connectionString: string;
    /**
     * Create mode. Available options: Default - Create a database. Copy - Copy the source database (source database name must be specified) PointInTimeRestore - Create a database by restoring source database from a point in time (source database name and restore from time must be specified)
     */
    createMode?: string;
    /**
     * Maximum database size in Gb.
     */
    databaseSizeGbMax: number;
    /**
     * Earliest restore time.
     */
    earliestRestoreTime: string;
    /**
     * Identity property.
     */
    identity?: IdentityResponse;
    /**
     * Latest restore time.
     */
    latestRestoreTime: string;
    /**
     * Resource identifier for the underlying database resource.
     */
    originalDatabaseId: string;
    /**
     * Database state.
     */
    provisioningState: string;
    /**
     * If true, database is recoverable.
     */
    recoverable: boolean;
    /**
     * Additional database properties to be applied as the underlying database resource tags.
     */
    resourceTags?: {[key: string]: string};
    /**
     * Restore from time when CreateMode is PointInTimeRestore.
     */
    restoreFromTime?: string;
    /**
     * Source database name used when CreateMode is Copy or PointInTimeRestore.
     */
    sourceDatabaseName?: string;
    /**
     * Name of the tier this database belongs to.
     */
    tierName?: string;
    /**
     * Transparent Data Encryption properties
     */
    transparentDataEncryption?: TransparentDataEncryptionResponse;
}

/**
 * The Database Fleet properties.
 */
export interface FleetPropertiesResponse {
    /**
     * Fleet description.
     */
    description?: string;
    /**
     * Provisioning state.
     */
    provisioningState: string;
}

/**
 * A Fleet tier properties.
 */
export interface FleetTierPropertiesResponse {
    /**
     * Capacity of provisioned resources in the tier, in units matching the specified service tier, for example vCore for GeneralPurpose.
     */
    capacity?: number;
    /**
     * Maximum allocated capacity per database, in units matching the specified service tier.
     */
    databaseCapacityMax?: number;
    /**
     * Minimum allocated capacity per database, in units matching the specified service tier.
     */
    databaseCapacityMin?: number;
    /**
     * Maximum database size in Gb.
     */
    databaseSizeGbMax?: number;
    /**
     * If true, tier is disabled.
     */
    disabled: boolean;
    /**
     * Family of provisioned resources, for example Gen5.
     */
    family?: string;
    /**
     * Number of high availability replicas for databases in this tier.
     */
    highAvailabilityReplicaCount?: number;
    /**
     * Maximum number of databases per pool.
     */
    poolNumOfDatabasesMax?: number;
    /**
     * If true, databases are pooled.
     */
    pooled?: boolean;
    /**
     * Provisioning state.
     */
    provisioningState: string;
    /**
     * If true, serverless resources are provisioned in the tier.
     */
    serverless?: boolean;
    /**
     * Service tier of provisioned resources. Supported values: GeneralPurpose, Hyperscale.
     */
    serviceTier?: string;
    /**
     * Enable zone redundancy for all databases in this tier.
     */
    zoneRedundancy?: string;
}

/**
 * A Fleetspace properties.
 */
export interface FleetspacePropertiesResponse {
    /**
     * Maximum number of vCores database fleet manager is allowed to provision in the fleetspace.
     */
    capacityMax?: number;
    /**
     * Main Microsoft Entra ID principal that has admin access to all databases in the fleetspace.
     */
    mainPrincipal?: MainPrincipalResponse;
    /**
     * Fleetspace state.
     */
    provisioningState: string;
}

/**
 * Database Identity.
 */
export interface IdentityResponse {
    /**
     * The federated client id for the SQL Database. It is used for cross tenant CMK scenario.
     */
    federatedClientId?: string;
    /**
     * Identity type of the main principal.
     */
    identityType?: string;
    /**
     * User identity ids
     */
    userAssignedIdentities?: DatabaseIdentityResponse[];
}

/**
 * A main principal.
 */
export interface MainPrincipalResponse {
    /**
     * Application Id of the main principal.
     */
    applicationId?: string;
    /**
     * Login name of the main principal.
     */
    login?: string;
    /**
     * Object Id of the main principal.
     */
    objectId?: string;
    /**
     * Principal type of the main principal.
     */
    principalType?: string;
    /**
     * Tenant Id of the main principal.
     */
    tenantId?: string;
}

/**
 * Metadata pertaining to creation and last modification of the resource.
 */
export interface SystemDataResponse {
    /**
     * The timestamp of resource creation (UTC).
     */
    createdAt?: string;
    /**
     * The identity that created the resource.
     */
    createdBy?: string;
    /**
     * The type of identity that created the resource.
     */
    createdByType?: string;
    /**
     * The timestamp of resource last modification (UTC)
     */
    lastModifiedAt?: string;
    /**
     * The identity that last modified the resource.
     */
    lastModifiedBy?: string;
    /**
     * The type of identity that last modified the resource.
     */
    lastModifiedByType?: string;
}

/**
 * Transparent Data Encryption properties.
 */
export interface TransparentDataEncryptionResponse {
    /**
     * Enable key auto rotation
     */
    enableAutoRotation?: boolean;
    /**
     * Customer Managed Key (CMK) Uri.
     */
    keyUri?: string;
    /**
     * Additional Keys
     */
    keys?: string[];
}
