import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Details of the ContainerGroupProfile.
 */
export interface ContainerGroupProfileResponse {
    /**
     * Specifies container group profile id of standby container groups.
     */
    id: string;
    /**
     * Specifies revision of container group profile.
     */
    revision?: number;
}

/**
 * Details of the ContainerGroupProperties.
 */
export interface ContainerGroupPropertiesResponse {
    /**
     * Specifies container group profile of standby container groups.
     */
    containerGroupProfile: ContainerGroupProfileResponse;
    /**
     * Specifies subnet Ids for container group.
     */
    subnetIds?: SubnetResponse[];
}

/**
 * Specifies the elasticity profile of the standby container group pools.
 */
export interface StandbyContainerGroupPoolElasticityProfileResponse {
    /**
     * Specifies maximum number of standby container groups in the standby pool.
     */
    maxReadyCapacity: number;
    /**
     * Specifies refill policy of the pool.
     */
    refillPolicy?: string;
}

/**
 * Details of the elasticity profile.
 */
export interface StandbyVirtualMachinePoolElasticityProfileResponse {
    /**
     * Specifies maximum number of virtual machines in the standby virtual machine pool.
     */
    maxReadyCapacity: number;
}

/**
 * Subnet of container group
 */
export interface SubnetResponse {
    /**
     * Specifies ARM resource id of the subnet.
     */
    id: string;
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
