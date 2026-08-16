import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Connection information for HorizonDB parameter group.
 */
export interface HorizonDbClusterParameterGroupConnectionPropertiesArgs {
    /**
     * Indicates whether the parameters should be applied immediately.
     */
    applyImmediately?: pulumi.Input<boolean | undefined>;
    /**
     * The resource ID of the connected parameter group.
     */
    id?: pulumi.Input<string | undefined>;
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
    administratorLoginPassword?: pulumi.Input<string | undefined>;
    /**
     * The mode to create a new HorizonDB cluster.
     */
    createMode?: pulumi.Input<string | enums.CreateModeCluster | undefined>;
    /**
     * Defines connection to a parameter group.
     */
    parameterGroup?: pulumi.Input<HorizonDbClusterParameterGroupConnectionPropertiesArgs | undefined>;
    /**
     * Restore point creation time specifying the time to restore from.
     */
    pointInTimeUTC?: pulumi.Input<string | undefined>;
    /**
     * The pool name for restore or replica operations.
     */
    poolName?: pulumi.Input<string | undefined>;
    /**
     * The processor type for the HorizonDB cluster.
     */
    processorType?: pulumi.Input<string | undefined>;
    /**
     * Number of replicas.
     */
    replicaCount?: pulumi.Input<number | undefined>;
    /**
     * The source cluster resource ID for restore or replica creation.
     */
    sourceClusterResourceId?: pulumi.Input<string | undefined>;
    /**
     * Number of vCores.
     */
    vCores?: pulumi.Input<number | undefined>;
    /**
     * The version of the HorizonDB cluster.
     */
    version?: pulumi.Input<string | undefined>;
    /**
     * Defines how replicas are placed across availability zones.
     */
    zonePlacementPolicy?: pulumi.Input<string | enums.ZonePlacementPolicy | undefined>;
}

/**
 * Properties of a HorizonDB firewall rule.
 */
export interface HorizonDbFirewallRulePropertiesArgs {
    /**
     * The description of the HorizonDB firewall rule.
     */
    description?: pulumi.Input<string | undefined>;
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
    applyImmediately?: pulumi.Input<boolean | undefined>;
    /**
     * Description of the parameter group.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Parameters in the parameter group.
     */
    parameters?: pulumi.Input<pulumi.Input<ParameterPropertiesArgs>[] | undefined>;
    /**
     * PostgreSQL version for the parameter group.
     */
    pgVersion?: pulumi.Input<number | undefined>;
}

/**
 * Properties of a HorizonDB replica.
 */
export interface HorizonDbReplicaPropertiesArgs {
    /**
     * The availability zone of the replica.
     */
    availabilityZone?: pulumi.Input<string | undefined>;
    /**
     * Role of the replica.
     */
    role?: pulumi.Input<string | enums.ReplicaRole | undefined>;
}

/**
 * Properties of a HorizonDB parameters.
 */
export interface ParameterPropertiesArgs {
    /**
     * The name of the parameter.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * The value of the configuration.
     */
    value?: pulumi.Input<string | undefined>;
}
