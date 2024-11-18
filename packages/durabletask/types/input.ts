import * as pulumi from "@pulumi/pulumi";
/**
 * Details of the Scheduler
 */
export interface SchedulerPropertiesArgs {
    /**
     * IP allow list for durable task scheduler. Values can be IPv4, IPv6 or CIDR
     */
    ipAllowlist: pulumi.Input<pulumi.Input<string>[]>;
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
    capacity?: pulumi.Input<number>;
    /**
     * The name of the SKU
     */
    name: pulumi.Input<string>;
}
