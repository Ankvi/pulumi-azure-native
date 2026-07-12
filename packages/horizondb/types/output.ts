import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Connection information for HorizonDB parameter group.
 */
export interface HorizonDbClusterParameterGroupConnectionPropertiesResponse {
    /**
     * Indicates whether the parameters should be applied immediately.
     */
    applyImmediately?: boolean;
    /**
     * The resource ID of the connected parameter group.
     */
    id?: string;
    /**
     * Indication of if parameter group is applied on HorizonDB resource.
     */
    syncStatus: string;
}

/**
 * Properties of a HorizonDB cluster.
 */
export interface HorizonDbClusterPropertiesResponse {
    /**
     * The administrator login name.
     */
    administratorLogin: string;
    /**
     * The mode to create a new HorizonDB cluster.
     */
    createMode?: string;
    /**
     * The fully qualified domain name of the cluster.
     */
    fullyQualifiedDomainName: string;
    /**
     * The network related info.
     */
    network?: NetworkResponse;
    /**
     * Defines connection to a parameter group.
     */
    parameterGroup?: HorizonDbClusterParameterGroupConnectionPropertiesResponse;
    /**
     * Restore point creation time specifying the time to restore from.
     */
    pointInTimeUTC?: string;
    /**
     * The pool name for restore or replica operations.
     */
    poolName?: string;
    /**
     * The processor type for the HorizonDB cluster.
     */
    processorType?: string;
    /**
     * The provisioning state of the cluster.
     */
    provisioningState: string;
    /**
     * The fully qualified domain name used for readonly endpoint for the cluster.
     */
    readonlyEndpoint: string;
    /**
     * Number of replicas.
     */
    replicaCount?: number;
    /**
     * The source cluster resource ID for restore or replica creation.
     */
    sourceClusterResourceId?: string;
    /**
     * Current state of the cluster.
     */
    state: string;
    /**
     * Number of vCores.
     */
    vCores?: number;
    /**
     * The version of the HorizonDB cluster.
     */
    version?: string;
    /**
     * Defines how replicas are placed across availability zones.
     */
    zonePlacementPolicy?: string;
}

/**
 * Properties of a HorizonDB firewall rule.
 */
export interface HorizonDbFirewallRulePropertiesResponse {
    /**
     * The description of the HorizonDB firewall rule.
     */
    description?: string;
    /**
     * The end IP address of the firewall rule (IPv4).
     */
    endIpAddress: string;
    /**
     * The provisioning state of the firewall rule.
     */
    provisioningState: string;
    /**
     * The start IP address of the firewall rule (IPv4).
     */
    startIpAddress: string;
}

/**
 * Properties of a HorizonDB parameter group.
 */
export interface HorizonDbParameterGroupPropertiesResponse {
    /**
     * Indicates whether the parameters should be applied immediately.
     */
    applyImmediately?: boolean;
    /**
     * Description of the parameter group.
     */
    description?: string;
    /**
     * Parameters in the parameter group.
     */
    parameters?: ParameterPropertiesResponse[];
    /**
     * PostgreSQL version for the parameter group.
     */
    pgVersion?: number;
    /**
     * The provisioning state of the parameter group.
     */
    provisioningState: string;
    /**
     * Current version of the parameter group.
     */
    version: number;
}

/**
 * Properties of a HorizonDB replica.
 */
export interface HorizonDbReplicaPropertiesResponse {
    /**
     * The availability zone of the replica.
     */
    availabilityZone?: string;
    /**
     * The fully qualified domain name of the replica.
     */
    fullyQualifiedDomainName: string;
    /**
     * The provisioning state of the replica.
     */
    provisioningState: string;
    /**
     * Role of the replica.
     */
    role?: string;
    /**
     * Current status of the replica.
     */
    status: string;
}

/**
 * Network properties.
 */
export interface NetworkResponse {
    /**
     * The flag indicating whether public ip is requested.
     */
    publicNetworkAccess: string;
}

/**
 * Properties of a HorizonDB parameters.
 */
export interface ParameterPropertiesResponse {
    /**
     * The allowed values for the parameter.
     */
    allowedValues: string;
    /**
     * The data type of the parameter.
     */
    dataType: string;
    /**
     * The description of the parameter.
     */
    description: string;
    /**
     * Link to parameter documentation.
     */
    documentationLink: string;
    /**
     * Whether the parameter can be changed dynamically.
     */
    isDynamic: boolean;
    /**
     * Whether the parameter is a read-only parameter.
     */
    isReadOnly: boolean;
    /**
     * The name of the parameter.
     */
    name?: string;
    /**
     * The unit of measurement for the parameter.
     */
    unit: string;
    /**
     * The value of the configuration.
     */
    value?: string;
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
