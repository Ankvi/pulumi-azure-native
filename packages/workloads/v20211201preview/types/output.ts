import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Backup profile
     */
    export interface BackupProfileResponse {
        /**
         * Whether to enable Azure backup for the workload
         */
        backupEnabled: string;
        /**
         * Backup vault resource Id
         */
        vaultResourceId: string;
    }

    /**
     * Cache profile
     */
    export interface CacheProfileResponse {
        /**
         * Cache resource Id
         */
        cacheResourceId: string;
        /**
         * Cache capacity
         */
        capacity: number;
        /**
         * Cache family
         */
        family: string;
        /**
         * Cache name
         */
        name?: string;
        /**
         * Cache SKU name
         */
        skuName: string;
    }

    /**
     * Workload database profile
     */
    export interface DatabaseProfileResponse {
        /**
         * Backup retention days for the server
         */
        backupRetentionDays?: number;
        /**
         * Whether to enable HA for the server
         */
        haEnabled?: string;
        /**
         * Database server name
         */
        serverName?: string;
        /**
         * Azure Database Server resource Id
         */
        serverResourceId: string;
        /**
         * The name of the server SKU, e.g. Standard_D32s_v4
         */
        sku: string;
        /**
         * Whether to enable SSL enforcement on the database
         */
        sslEnforcementEnabled?: string;
        /**
         * Database storage size in GB
         */
        storageInGB?: number;
        /**
         * Storage IOPS for the server
         */
        storageIops?: number;
        /**
         * SKU name for database storage
         */
        storageSku?: string;
        /**
         * Tier of the server SKU
         */
        tier: string;
        /**
         * Database type
         */
        type: string;
        /**
         * Database version
         */
        version?: string;
    }

    /**
     * Disk resource creation details
     */
    export interface DiskInfoResponse {
        /**
         * Disk size in GB
         */
        sizeInGB?: number;
        /**
         * Storage type
         */
        storageType: string;
    }

    /**
     * Error definition.
     */
    export interface ErrorDefinitionResponse {
        /**
         * Service specific error code which serves as the substatus for the HTTP error code.
         */
        code: string;
        /**
         * Internal error details.
         */
        details: ErrorDefinitionResponse[];
        /**
         * Description of the error.
         */
        message: string;
    }

    /**
     * File share profile
     */
    export interface FileshareProfileResponse {
        /**
         * File share name
         */
        shareName: string;
        /**
         * File share size in GB
         */
        shareSizeInGB?: number;
        /**
         * Share type
         */
        shareType: string;
        /**
         * File share storage resource id
         */
        storageResourceId: string;
        /**
         * File share backing storage type
         */
        storageType: string;
    }

    /**
     * Managed resource group configuration
     */
    export interface ManagedRGConfigurationResponse {
        /**
         * Managed resource group name
         */
        name?: string;
    }

    /**
     * Network profile
     */
    export interface NetworkProfileResponse {
        /**
         * Whether to enable Azure front door
         */
        azureFrontDoorEnabled?: string;
        /**
         * Azure front door resource id
         */
        azureFrontDoorResourceId: string;
        /**
         * Capacity, applicable only for Application Gateway
         */
        capacity?: number;
        /**
         * Loadbalancer front-end IP address resource Id
         */
        frontEndPublicIpResourceId: string;
        /**
         * Azure Loadbalancer or ApplicationGateway resource Id
         */
        loadBalancerResourceId: string;
        /**
         * Load balancer SKU
         */
        loadBalancerSku?: string;
        /**
         * Load balancer tier
         */
        loadBalancerTier?: string;
        /**
         * Load balancer type
         */
        loadBalancerType: string;
        /**
         * List of outbound public IP resource IDs
         */
        outboundPublicIpResourceIds: string[];
        /**
         * Virtual network resource Id
         */
        vNetResourceId: string;
    }

    /**
     * VM or VMSS node profile
     */
    export interface NodeProfileResponse {
        /**
         * Data disks details. This property is not in use right now
         */
        dataDisks?: DiskInfoResponse[];
        /**
         * VM or VMSS name
         */
        name?: string;
        /**
         * VM/VMSS resource ARM Ids
         */
        nodeResourceIds: string[];
        /**
         * VM SKU for node(s)
         */
        nodeSku: string;
        /**
         * OS disk details
         */
        osDisk: DiskInfoResponse;
        /**
         * OS image used for creating the nodes
         */
        osImage: OsImageProfileResponse;
    }

    /**
     * OS image profile
     */
    export interface OsImageProfileResponse {
        /**
         * OS image offer
         */
        offer?: string;
        /**
         * OS image publisher
         */
        publisher?: string;
        /**
         * OS image sku
         */
        sku?: string;
        /**
         * OS image version
         */
        version?: string;
    }

    /**
     * PHP profile
     */
    export interface PhpProfileResponse {
        /**
         * PHP version
         */
        version: string;
    }

    /**
     * Identity for the resource. Currently not supported
     */
    export interface PhpWorkloadResourceResponseIdentity {
        /**
         * Type of manage identity
         */
        type: string;
        /**
         * User assigned identities dictionary
         */
        userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
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
     * The SAP Disk Configuration.
     */
    export interface SAPDiskConfigurationResponse {
        /**
         * The disk count.
         */
        diskCount?: number;
        /**
         * The disk Iops.
         */
        diskIopsReadWrite?: number;
        /**
         * The disk provisioned throughput in MBps.
         */
        diskMBpsReadWrite?: number;
        /**
         * The disk size in GB.
         */
        diskSizeGB?: number;
        /**
         * The disk storage type
         */
        diskStorageType?: string;
        /**
         * The disk type.
         */
        diskType?: string;
        /**
         * The volume name.
         */
        volume?: string;
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

    /**
     * An error response from the Virtual Instance for SAP Workload service.
     */
    export interface SAPVirtualInstanceErrorResponse {
        /**
         * The Virtual Instance for SAP error body.
         */
        properties?: ErrorDefinitionResponse;
    }

    /**
     * Search profile
     */
    export interface SearchProfileResponse {
        /**
         * Data disks details. This property is not in use right now
         */
        dataDisks?: DiskInfoResponse[];
        /**
         * VM or VMSS name
         */
        name?: string;
        /**
         * VM/VMSS resource ARM Ids
         */
        nodeResourceIds: string[];
        /**
         * VM SKU for node(s)
         */
        nodeSku: string;
        /**
         * OS disk details
         */
        osDisk: DiskInfoResponse;
        /**
         * OS image used for creating the nodes
         */
        osImage: OsImageProfileResponse;
        /**
         * Search type
         */
        searchType: string;
    }

    /**
     * Workload website profile
     */
    export interface SiteProfileResponse {
        /**
         * Domain name for the application site URL
         */
        domainName?: string;
    }

    /**
     * The resource model definition representing SKU
     */
    export interface SkuResponse {
        /**
         * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
         */
        capacity?: number;
        /**
         * If the service has different generations of hardware, for the same SKU, then that can be captured here.
         */
        family?: string;
        /**
         * The name of the SKU. Ex - P3. It is typically a letter+number code
         */
        name: string;
        /**
         * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. 
         */
        size?: string;
        /**
         * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
         */
        tier?: string;
    }

    /**
     * Storage details of all the Storage accounts attached to the VM. For e.g. NFS on AFS Shared Storage. 
     */
    export interface StorageInformationResponse {
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

    /**
     * User assigned identity properties
     */
    export interface UserAssignedIdentityResponse {
        /**
         * The client ID of the assigned identity.
         */
        clientId: string;
        /**
         * The principal ID of the assigned identity.
         */
        principalId: string;
    }

    /**
     * User profile to configure on a compute resources such as VM, VMSS
     */
    export interface UserProfileResponse {
        /**
         * SSH public key data
         */
        sshPublicKey: string;
        /**
         * User name
         */
        userName: string;
    }

    /**
     * VMSS profile
     */
    export interface VmssNodesProfileResponse {
        /**
         * Maximum number of nodes for autoscale
         */
        autoScaleMaxCount?: number;
        /**
         * Minimum number of nodes for autoscale
         */
        autoScaleMinCount?: number;
        /**
         * Data disks details. This property is not in use right now
         */
        dataDisks?: DiskInfoResponse[];
        /**
         * VM or VMSS name
         */
        name?: string;
        /**
         * VM/VMSS resource ARM Ids
         */
        nodeResourceIds: string[];
        /**
         * VM SKU for node(s)
         */
        nodeSku: string;
        /**
         * OS disk details
         */
        osDisk: DiskInfoResponse;
        /**
         * OS image used for creating the nodes
         */
        osImage: OsImageProfileResponse;
    }
