import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Connection information for HorizonDB parameter group.
 */
export interface HorizonDbClusterParameterGroupConnectionPropertiesArgs {
    /**
     * Indicates whether the parameters should be applied immediately.
     */
    applyImmediately?: pulumi.Input<boolean>;
    /**
     * The resource ID of the connected parameter group.
     */
    id?: pulumi.Input<string>;
}

/**
 * Properties of a HorizonDB cluster.
 */
export interface HorizonDbClusterPropertiesArgs {
    /**
     * The administrator login name.
     */
    administratorLogin: pulumi.Input<string>;
    /**
     * The administrator login password.
     */
    administratorLoginPassword?: pulumi.Input<string>;
    /**
     * The mode to create a new HorizonDB cluster.
     */
    createMode?: pulumi.Input<string | enums.CreateModeCluster>;
    /**
     * Defines connection to a parameter group.
     */
    parameterGroup?: pulumi.Input<HorizonDbClusterParameterGroupConnectionPropertiesArgs>;
    /**
     * Restore point creation time specifying the time to restore from.
     */
    pointInTimeUTC?: pulumi.Input<string>;
    /**
     * The pool name for restore or replica operations.
     */
    poolName?: pulumi.Input<string>;
    /**
     * The processor type for the HorizonDB cluster.
     */
    processorType?: pulumi.Input<string>;
    /**
     * Number of replicas.
     */
    replicaCount?: pulumi.Input<number>;
    /**
     * The source cluster resource ID for restore or replica creation.
     */
    sourceClusterResourceId?: pulumi.Input<string>;
    /**
     * Number of vCores.
     */
    vCores?: pulumi.Input<number>;
    /**
     * The version of the HorizonDB cluster.
     */
    version?: pulumi.Input<string>;
    /**
     * Defines how replicas are placed across availability zones.
     */
    zonePlacementPolicy?: pulumi.Input<string | enums.ZonePlacementPolicy>;
}

/**
 * Properties of a HorizonDB firewall rule.
 */
export interface HorizonDbFirewallRulePropertiesArgs {
    /**
     * The description of the HorizonDB firewall rule.
     */
    description?: pulumi.Input<string>;
    /**
     * The end IP address of the firewall rule (IPv4).
     */
    endIpAddress: pulumi.Input<string>;
    /**
     * The start IP address of the firewall rule (IPv4).
     */
    startIpAddress: pulumi.Input<string>;
}

/**
 * Properties of a HorizonDB parameter group.
 */
export interface HorizonDbParameterGroupPropertiesArgs {
    /**
     * Indicates whether the parameters should be applied immediately.
     */
    applyImmediately?: pulumi.Input<boolean>;
    /**
     * Description of the parameter group.
     */
    description?: pulumi.Input<string>;
    /**
     * Parameters in the parameter group.
     */
    parameters?: pulumi.Input<pulumi.Input<ParameterPropertiesArgs>[]>;
    /**
     * PostgreSQL version for the parameter group.
     */
    pgVersion?: pulumi.Input<number>;
}

/**
 * Properties of a HorizonDB replica.
 */
export interface HorizonDbReplicaPropertiesArgs {
    /**
     * The availability zone of the replica.
     */
    availabilityZone?: pulumi.Input<string>;
    /**
     * Role of the replica.
     */
    role?: pulumi.Input<string | enums.ReplicaRole>;
}

/**
 * Properties of a HorizonDB parameters.
 */
export interface ParameterPropertiesArgs {
    /**
     * The name of the parameter.
     */
    name?: pulumi.Input<string>;
    /**
     * The value of the configuration.
     */
    value?: pulumi.Input<string>;
}
