import * as pulumi from "@pulumi/pulumi";
    /**
     * The list of Energy services resource's Data Partition Names.
     */
    export interface DataPartitionNamesResponse {
        name?: string;
    }

    /**
     * Defines the properties of an individual data partition.
     */
    export interface DataPartitionPropertiesResponse {
        /**
         * Name of the data partition
         */
        name?: string;
        /**
         * Name of the data partition
         */
        provisioningState?: string;
    }

    export interface EnergyServicePropertiesResponse {
        authAppId?: string;
        dataPartitionNames?: DataPartitionNamesResponse[];
        dnsName: string;
        provisioningState: string;
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
