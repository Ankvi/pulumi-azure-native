import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Backup profile
     */
    export interface BackupProfileArgs {
        /**
         * Whether to enable Azure backup for the workload
         */
        backupEnabled: pulumi.Input<string | enums.EnableBackup>;
    }

    /**
     * Cache profile
     */
    export interface CacheProfileArgs {
        /**
         * Cache capacity
         */
        capacity: pulumi.Input<number>;
        /**
         * Cache family
         */
        family: pulumi.Input<string | enums.RedisCacheFamily>;
        /**
         * Cache name
         */
        name?: pulumi.Input<string>;
        /**
         * Cache SKU name
         */
        skuName: pulumi.Input<string>;
    }

    /**
     * Workload database profile
     */
    export interface DatabaseProfileArgs {
        /**
         * Backup retention days for the server
         */
        backupRetentionDays?: pulumi.Input<number>;
        /**
         * Whether to enable HA for the server
         */
        haEnabled?: pulumi.Input<string | enums.HAEnabled>;
        /**
         * Database server name
         */
        serverName?: pulumi.Input<string>;
        /**
         * The name of the server SKU, e.g. Standard_D32s_v4
         */
        sku: pulumi.Input<string>;
        /**
         * Whether to enable SSL enforcement on the database
         */
        sslEnforcementEnabled?: pulumi.Input<string | enums.EnableSslEnforcement>;
        /**
         * Database storage size in GB
         */
        storageInGB?: pulumi.Input<number>;
        /**
         * Storage IOPS for the server
         */
        storageIops?: pulumi.Input<number>;
        /**
         * SKU name for database storage
         */
        storageSku?: pulumi.Input<string>;
        /**
         * Tier of the server SKU
         */
        tier: pulumi.Input<enums.DatabaseTier>;
        /**
         * Database type
         */
        type: pulumi.Input<string | enums.DatabaseType>;
        /**
         * Database version
         */
        version?: pulumi.Input<string>;
    }

    /**
     * Disk resource creation details
     */
    export interface DiskInfoArgs {
        /**
         * Disk size in GB
         */
        sizeInGB?: pulumi.Input<number>;
        /**
         * Storage type
         */
        storageType: pulumi.Input<enums.DiskStorageType>;
    }

    /**
     * File share profile
     */
    export interface FileshareProfileArgs {
        /**
         * File share size in GB
         */
        shareSizeInGB?: pulumi.Input<number>;
        /**
         * Share type
         */
        shareType: pulumi.Input<string | enums.FileShareType>;
        /**
         * File share backing storage type
         */
        storageType: pulumi.Input<string | enums.FileShareStorageType>;
    }

    /**
     * Managed resource group configuration
     */
    export interface ManagedRGConfigurationArgs {
        /**
         * Managed resource group name
         */
        name?: pulumi.Input<string>;
    }

    /**
     * Network profile
     */
    export interface NetworkProfileArgs {
        /**
         * Whether to enable Azure front door
         */
        azureFrontDoorEnabled?: pulumi.Input<string | enums.AzureFrontDoorEnabled>;
        /**
         * Capacity, applicable only for Application Gateway
         */
        capacity?: pulumi.Input<number>;
        /**
         * Load balancer SKU
         */
        loadBalancerSku?: pulumi.Input<string>;
        /**
         * Load balancer tier
         */
        loadBalancerTier?: pulumi.Input<string>;
        /**
         * Load balancer type
         */
        loadBalancerType: pulumi.Input<string | enums.LoadBalancerType>;
    }

    /**
     * VM or VMSS node profile
     */
    export interface NodeProfileArgs {
        /**
         * Data disks details. This property is not in use right now
         */
        dataDisks?: pulumi.Input<pulumi.Input<DiskInfoArgs>[]>;
        /**
         * VM or VMSS name
         */
        name?: pulumi.Input<string>;
        /**
         * VM SKU for node(s)
         */
        nodeSku: pulumi.Input<string>;
        /**
         * OS disk details
         */
        osDisk: pulumi.Input<DiskInfoArgs>;
        /**
         * OS image used for creating the nodes
         */
        osImage: pulumi.Input<OsImageProfileArgs>;
    }

    /**
     * OS image profile
     */
    export interface OsImageProfileArgs {
        /**
         * OS image offer
         */
        offer?: pulumi.Input<string | enums.OSImageOffer>;
        /**
         * OS image publisher
         */
        publisher?: pulumi.Input<string | enums.OSImagePublisher>;
        /**
         * OS image sku
         */
        sku?: pulumi.Input<string | enums.OSImageSku>;
        /**
         * OS image version
         */
        version?: pulumi.Input<string | enums.OSImageVersion>;
    }

    /**
     * PHP profile
     */
    export interface PhpProfileArgs {
        /**
         * PHP version
         */
        version: pulumi.Input<string | enums.PHPVersion>;
    }

    /**
     * Identity for the resource. Currently not supported
     */
    export interface PhpWorkloadResourceIdentityArgs {
        /**
         * Type of manage identity
         */
        type: pulumi.Input<string | enums.ManagedServiceIdentityType>;
        /**
         * User assigned identities dictionary
         */
        userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Search profile
     */
    export interface SearchProfileArgs {
        /**
         * Data disks details. This property is not in use right now
         */
        dataDisks?: pulumi.Input<pulumi.Input<DiskInfoArgs>[]>;
        /**
         * VM or VMSS name
         */
        name?: pulumi.Input<string>;
        /**
         * VM SKU for node(s)
         */
        nodeSku: pulumi.Input<string>;
        /**
         * OS disk details
         */
        osDisk: pulumi.Input<DiskInfoArgs>;
        /**
         * OS image used for creating the nodes
         */
        osImage: pulumi.Input<OsImageProfileArgs>;
        /**
         * Search type
         */
        searchType: pulumi.Input<string | enums.SearchType>;
    }

    /**
     * Workload website profile
     */
    export interface SiteProfileArgs {
        /**
         * Domain name for the application site URL
         */
        domainName?: pulumi.Input<string>;
    }

    /**
     * The resource model definition representing SKU
     */
    export interface SkuArgs {
        /**
         * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
         */
        capacity?: pulumi.Input<number>;
        /**
         * If the service has different generations of hardware, for the same SKU, then that can be captured here.
         */
        family?: pulumi.Input<string>;
        /**
         * The name of the SKU. Ex - P3. It is typically a letter+number code
         */
        name: pulumi.Input<string>;
        /**
         * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. 
         */
        size?: pulumi.Input<string>;
        /**
         * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
         */
        tier?: pulumi.Input<enums.SkuTier>;
    }

    /**
     * User profile to configure on a compute resources such as VM, VMSS
     */
    export interface UserProfileArgs {
        /**
         * SSH public key data
         */
        sshPublicKey: pulumi.Input<string>;
        /**
         * User name
         */
        userName: pulumi.Input<string>;
    }

    /**
     * VMSS profile
     */
    export interface VmssNodesProfileArgs {
        /**
         * Maximum number of nodes for autoscale
         */
        autoScaleMaxCount?: pulumi.Input<number>;
        /**
         * Minimum number of nodes for autoscale
         */
        autoScaleMinCount?: pulumi.Input<number>;
        /**
         * Data disks details. This property is not in use right now
         */
        dataDisks?: pulumi.Input<pulumi.Input<DiskInfoArgs>[]>;
        /**
         * VM or VMSS name
         */
        name?: pulumi.Input<string>;
        /**
         * VM SKU for node(s)
         */
        nodeSku: pulumi.Input<string>;
        /**
         * OS disk details
         */
        osDisk: pulumi.Input<DiskInfoArgs>;
        /**
         * OS image used for creating the nodes
         */
        osImage: pulumi.Input<OsImageProfileArgs>;
    }
