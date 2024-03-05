import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Details of the ContainerGroupProfile.
 */
export interface ContainerGroupProfileArgs {
    /**
     * Specifies container group profile id of standby container groups.
     */
    id: pulumi.Input<string>;
    /**
     * Specifies revision of container group profile.
     */
    revision?: pulumi.Input<number>;
}

/**
 * Details of the ContainerGroupProperties.
 */
export interface ContainerGroupPropertiesArgs {
    /**
     * Specifies container group profile of standby container groups.
     */
    containerGroupProfile: pulumi.Input<ContainerGroupProfileArgs>;
    /**
     * Specifies subnet Ids for container group.
     */
    subnetIds?: pulumi.Input<pulumi.Input<SubnetArgs>[]>;
}

/**
 * Specifies the elasticity profile of the standby container group pools.
 */
export interface StandbyContainerGroupPoolElasticityProfileArgs {
    /**
     * Specifies maximum number of standby container groups in the standby pool.
     */
    maxReadyCapacity: pulumi.Input<number>;
    /**
     * Specifies refill policy of the pool.
     */
    refillPolicy?: pulumi.Input<string | enums.RefillPolicy>;
}

/**
 * Details of the elasticity profile.
 */
export interface StandbyVirtualMachinePoolElasticityProfileArgs {
    /**
     * Specifies maximum number of virtual machines in the standby virtual machine pool.
     */
    maxReadyCapacity: pulumi.Input<number>;
}

/**
 * Subnet of container group
 */
export interface SubnetArgs {
    /**
     * Specifies ARM resource id of the subnet.
     */
    id: pulumi.Input<string>;
}
