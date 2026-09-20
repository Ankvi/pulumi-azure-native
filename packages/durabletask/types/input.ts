import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * A collection of information about the state of the connection between service consumer and provider.
 */
export interface PrivateLinkServiceConnectionStateArgs {
    /**
     * A message indicating if changes on the service provider require any updates on the consumer.
     */
    actionsRequired?: pulumi.Input<string | undefined>;
    /**
     * The reason for approval/rejection of the connection.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
     */
    status?: pulumi.Input<string | enums.PrivateEndpointServiceConnectionStatus | undefined>;
}

/**
 * The properties of a retention policy
 */
export interface RetentionPolicyDetailsArgs {
    /**
     * The orchestration state to which this policy applies. If omitted, the policy applies to all purgeable orchestration states.
     */
    orchestrationState?: pulumi.Input<string | enums.PurgeableOrchestrationState | undefined>;
    /**
     * The retention period in days after which the orchestration will be purged automatically
     */
    retentionPeriodInDays: pulumi.Input<number>;
}

/**
 * The retention policy settings for the resource
 */
export interface RetentionPolicyPropertiesArgs {
    /**
     * The orchestration retention policies
     */
    retentionPolicies?: pulumi.Input<pulumi.Input<RetentionPolicyDetailsArgs>[] | undefined>;
}

/**
 * Details of the Scheduler
 */
export interface SchedulerPropertiesArgs {
    /**
     * IP allow list for durable task scheduler. Values can be IPv4, IPv6 or CIDR
     */
    ipAllowlist: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Allow or disallow public network access to durable task scheduler
     */
    publicNetworkAccess?: pulumi.Input<string | enums.PublicNetworkAccess | undefined>;
    /**
     * SKU of the durable task scheduler
     */
    sku: pulumi.Input<SchedulerSkuArgs>;
}

/**
 * The SKU (Stock Keeping Unit) assigned to this durable task scheduler
 */
export interface SchedulerSkuArgs {
    /**
     * The SKU capacity. This allows scale out/in for the resource and impacts zone redundancy
     */
    capacity?: pulumi.Input<number | undefined>;
    /**
     * The name of the SKU
     */
    name: pulumi.Input<string | enums.SchedulerSkuName>;
}
