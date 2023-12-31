import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Data Lake Analytics compute policy information.
 */
export interface ComputePolicyResponse {
    /**
     * The resource identifier.
     */
    id: string;
    /**
     * The maximum degree of parallelism per job this user can use to submit jobs.
     */
    maxDegreeOfParallelismPerJob: number;
    /**
     * The minimum priority per job this user can use to submit jobs.
     */
    minPriorityPerJob: number;
    /**
     * The resource name.
     */
    name: string;
    /**
     * The AAD object identifier for the entity to create a policy for.
     */
    objectId: string;
    /**
     * The type of AAD object the object identifier refers to.
     */
    objectType: string;
    /**
     * The resource type.
     */
    type: string;
}

/**
 * Data Lake Store account information.
 */
export interface DataLakeStoreAccountInformationResponse {
    /**
     * The resource identifier.
     */
    id: string;
    /**
     * The resource name.
     */
    name: string;
    /**
     * The optional suffix for the Data Lake Store account.
     */
    suffix: string;
    /**
     * The resource type.
     */
    type: string;
}

/**
 * Data Lake Analytics firewall rule information.
 */
export interface FirewallRuleResponse {
    /**
     * The end IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol.
     */
    endIpAddress: string;
    /**
     * The resource identifier.
     */
    id: string;
    /**
     * The resource name.
     */
    name: string;
    /**
     * The start IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol.
     */
    startIpAddress: string;
    /**
     * The resource type.
     */
    type: string;
}

export interface HiveMetastoreResponse {
    /**
     * The databaseName for the Hive MetaStore
     */
    databaseName: string;
    /**
     * The resource identifier.
     */
    id: string;
    /**
     * The resource name.
     */
    name: string;
    /**
     * The current state of the NestedResource
     */
    nestedResourceProvisioningState: string;
    /**
     * The password for the Hive MetaStore
     */
    password: string;
    /**
     * The runtimeVersion for the Hive MetaStore
     */
    runtimeVersion: string;
    /**
     * The serverUri for the Hive MetaStore
     */
    serverUri: string;
    /**
     * The resource type.
     */
    type: string;
    /**
     * The userName for the Hive MetaStore
     */
    userName: string;
}

/**
 * SAS token information.
 */
export interface SasTokenInformationResponse {
    /**
     * The access token for the associated Azure Storage Container.
     */
    accessToken: string;
}

/**
 * Azure Storage account information.
 */
export interface StorageAccountInformationResponse {
    /**
     * The resource identifier.
     */
    id: string;
    /**
     * The resource name.
     */
    name: string;
    /**
     * The optional suffix for the storage account.
     */
    suffix: string;
    /**
     * The resource type.
     */
    type: string;
}

/**
 * Data Lake Analytics  VirtualNetwork Rule information.
 */
export interface VirtualNetworkRuleResponse {
    /**
     * The resource identifier.
     */
    id: string;
    /**
     * The resource name.
     */
    name: string;
    /**
     * The resource identifier for the subnet
     */
    subnetId: string;
    /**
     * The resource type.
     */
    type: string;
    /**
     * The current state of the VirtualNetwork Rule
     */
    virtualNetworkRuleState: string;
}
