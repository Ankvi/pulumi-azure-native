import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The supported disk size details for a disk type.
     */
    export interface DiskDetailsResponse {
        /**
         * The disk tier, e.g. P10, E10.
         */
        diskTier?: string;
        /**
         * The disk Iops.
         */
        iopsReadWrite?: number;
        /**
         * The maximum supported disk count.
         */
        maximumSupportedDiskCount?: number;
        /**
         * The disk provisioned throughput in MBps.
         */
        mbpsReadWrite?: number;
        /**
         * The minimum supported disk count.
         */
        minimumSupportedDiskCount?: number;
        /**
         * The disk size in GB.
         */
        sizeGB?: number;
        /**
         * The disk sku.
         */
        sku?: DiskSkuResponse;
    }

    /**
     * The disk sku.
     */
    export interface DiskSkuResponse {
        /**
         * Defines the disk sku name.
         */
        name?: string;
    }

    /**
     * The disk configuration required for the selected volume.
     */
    export interface DiskVolumeConfigurationResponse {
        /**
         * The total number of disks required for the concerned volume.
         */
        count?: number;
        /**
         * The disk size in GB.
         */
        sizeGB?: number;
        /**
         * The disk SKU details.
         */
        sku?: DiskSkuResponse;
    }

    /**
     * The SAP Availability Zone Pair.
     */
    export interface SAPAvailabilityZonePairResponse {
        /**
         * The zone A.
         */
        zoneA?: number;
        /**
         * The zone B.
         */
        zoneB?: number;
    }

    /**
     * The SAP Disk Configuration contains 'recommended disk' details and list of supported disks detail for a volume type.
     */
    export interface SAPDiskConfigurationResponse {
        /**
         * The recommended disk details for a given VM Sku.
         */
        recommendedConfiguration?: DiskVolumeConfigurationResponse;
        /**
         * The list of supported disks for a given VM Sku.
         */
        supportedConfigurations?: DiskDetailsResponse[];
    }

    /**
     * The SAP supported SKU.
     */
    export interface SAPSupportedSkuResponse {
        /**
         * True if the Sku is certified for App server in the SAP system.
         */
        isAppServerCertified?: boolean;
        /**
         * True if the Sku is certified for Database server in the SAP system.
         */
        isDatabaseCertified?: boolean;
        /**
         * The VM Sku.
         */
        vmSku?: string;
    }
