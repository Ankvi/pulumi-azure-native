import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * A domain specific resource identifier.
     */
    export interface IdentifierResponse {
        /**
         * Resource Id.
         */
        id: string;
        /**
         * Kind of resource.
         */
        kind?: string;
        /**
         * Resource Name.
         */
        name: string;
        /**
         * Resource type.
         */
        type: string;
        /**
         * String representation of the identity.
         */
        value?: string;
    }

    /**
     * Name value pair.
     */
    export interface NameValuePairResponse {
        /**
         * Pair name.
         */
        name?: string;
        /**
         * Pair value.
         */
        value?: string;
    }

    /**
     * Network access control entry.
     */
    export interface NetworkAccessControlEntryResponse {
        /**
         * Action object.
         */
        action?: string;
        /**
         * Description of network access control entry.
         */
        description?: string;
        /**
         * Order of precedence.
         */
        order?: number;
        /**
         * Remote subnet.
         */
        remoteSubnet?: string;
    }

    /**
     * Stamp capacity information.
     */
    export interface StampCapacityResponse {
        /**
         * Available capacity (# of machines, bytes of storage etc...).
         */
        availableCapacity?: number;
        /**
         * Shared/dedicated workers.
         */
        computeMode?: string;
        /**
         * If <code>true</code>, it includes basic apps.
         * Basic apps are not used for capacity allocation.
         */
        excludeFromCapacityAllocation?: boolean;
        /**
         * <code>true</code> if capacity is applicable for all apps; otherwise, <code>false</code>.
         */
        isApplicableForAllComputeModes?: boolean;
        /**
         * Is this a linux stamp capacity
         */
        isLinux?: boolean;
        /**
         * Name of the stamp.
         */
        name?: string;
        /**
         * Shared or Dedicated.
         */
        siteMode?: string;
        /**
         * Total capacity (# of machines, bytes of storage etc...).
         */
        totalCapacity?: number;
        /**
         * Name of the unit.
         */
        unit?: string;
        /**
         * Size of the machines.
         */
        workerSize?: string;
        /**
         * Size ID of machines: 
         * 0 - Small
         * 1 - Medium
         * 2 - Large
         */
        workerSizeId?: number;
    }

    /**
     * Virtual IP mapping.
     */
    export interface VirtualIPMappingResponse {
        /**
         * Is virtual IP mapping in use.
         */
        inUse?: boolean;
        /**
         * Internal HTTP port.
         */
        internalHttpPort?: number;
        /**
         * Internal HTTPS port.
         */
        internalHttpsPort?: number;
        /**
         * name of the service that virtual IP is assigned to
         */
        serviceName?: string;
        /**
         * Virtual IP address.
         */
        virtualIP?: string;
    }

    /**
     * Specification for using a Virtual Network.
     */
    export interface VirtualNetworkProfileResponse {
        /**
         * Resource id of the Virtual Network.
         */
        id?: string;
        /**
         * Name of the Virtual Network (read-only).
         */
        name: string;
        /**
         * Subnet within the Virtual Network.
         */
        subnet?: string;
        /**
         * Resource type of the Virtual Network (read-only).
         */
        type: string;
    }

    /**
     * Worker pool of an App Service Environment.
     */
    export interface WorkerPoolResponse {
        /**
         * Shared or dedicated app hosting.
         */
        computeMode?: string;
        /**
         * Names of all instances in the worker pool (read only).
         */
        instanceNames: string[];
        /**
         * Number of instances in the worker pool.
         */
        workerCount?: number;
        /**
         * VM size of the worker pool instances.
         */
        workerSize?: string;
        /**
         * Worker size ID for referencing this worker pool.
         */
        workerSizeId?: number;
    }
