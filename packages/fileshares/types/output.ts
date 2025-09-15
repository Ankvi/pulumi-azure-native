import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * File share limits API result.
 */
export interface FileShareLimitsOutputResponse {
    /**
     * The limits for the file share.
     */
    limits: FileShareLimitsResponse;
    /**
     * The provisioning constants for the file share.
     */
    provisioningConstants: FileShareProvisioningConstantsResponse;
}

/**
 * File share-related limits in the specified subscription/location.
 */
export interface FileShareLimitsResponse {
    /**
     * The maximum number of private endpoint connections allowed for a file share.
     */
    maxFileSharePrivateEndpointConnections: number;
    /**
     * The maximum number of snapshots allowed per file share.
     */
    maxFileShareSnapshots: number;
    /**
     * The maximum number of subnets that can be associated with a file share.
     */
    maxFileShareSubnets: number;
    /**
     * The maximum number of file shares that can be created.
     */
    maxFileShares: number;
    /**
     * The maximum provisioned IOPS (Input/Output Operations Per Second) for a file share.
     */
    maxProvisionedIOPerSec: number;
    /**
     * The maximum provisioned storage in GiB for a file share.
     */
    maxProvisionedStorageGiB: number;
    /**
     * The maximum provisioned throughput in MiB/s for a file share.
     */
    maxProvisionedThroughputMiBPerSec: number;
    /**
     * The minimum provisioned IOPS (Input/Output Operations Per Second) for a file share.
     */
    minProvisionedIOPerSec: number;
    /**
     * The minimum provisioned storage in GiB for a file share.
     */
    minProvisionedStorageGiB: number;
    /**
     * The minimum provisioned throughput in MiB/s for a file share.
     */
    minProvisionedThroughputMiBPerSec: number;
}

/**
 * File share properties
 */
export interface FileSharePropertiesResponse {
    /**
     * The host name of the file share.
     */
    hostName: string;
    /**
     * Burst IOPS are extra buffer IOPS enabling you to consume more than your provisioned IOPS for a short period of time, depending on the burst credits available for your share.
     */
    includedBurstIOPerSec: number;
    /**
     * Max burst IOPS credits shows the maximum number of burst credits the share can have at the current IOPS provisioning level.
     */
    maxBurstIOPerSecCredits: number;
    /**
     * The storage media tier of the file share.
     */
    mediaTier?: string;
    /**
     * The name of the file share as seen by the end user when mounting the share, such as in a URI or UNC format in their operating system.
     */
    mountName?: string;
    /**
     * Protocol settings specific NFS.
     */
    nfsProtocolProperties?: NfsProtocolPropertiesResponse;
    /**
     * The list of associated private endpoint connections.
     */
    privateEndpointConnections: PrivateEndpointConnectionResponse[];
    /**
     * The file sharing protocol for this file share.
     */
    protocol?: string;
    /**
     * The provisioned IO / sec of the share.
     */
    provisionedIOPerSec?: number;
    /**
     * A date/time value that specifies when the provisioned IOPS for the file share is permitted to be reduced.
     */
    provisionedIOPerSecNextAllowedDowngrade: string;
    /**
     * The provisioned storage size of the share in GiB (1 GiB is 1024^3 bytes or 1073741824 bytes). A component of the file share's bill is the provisioned storage, regardless of the amount of used storage.
     */
    provisionedStorageGiB?: number;
    /**
     * A date/time value that specifies when the provisioned storage for the file share is permitted to be reduced.
     */
    provisionedStorageNextAllowedDowngrade: string;
    /**
     * The provisioned throughput / sec of the share.
     */
    provisionedThroughputMiBPerSec?: number;
    /**
     * A date/time value that specifies when the provisioned throughput for the file share is permitted to be reduced.
     */
    provisionedThroughputNextAllowedDowngrade: string;
    /**
     * The status of the last operation.
     */
    provisioningState: string;
    /**
     * The set of properties for control public access.
     */
    publicAccessProperties?: PublicAccessPropertiesResponse;
    /**
     * Gets or sets allow or disallow public network access to azure managed file share
     */
    publicNetworkAccess?: string;
    /**
     * The chosen redundancy level of the file share.
     */
    redundancy?: string;
}

/**
 * Constants used for calculating recommended values of file share provisioning properties.
 */
export interface FileShareProvisioningConstantsResponse {
    /**
     * Base IO per second.
     */
    baseIOPerSec: number;
    /**
     * Base throughput in MiB per second.
     */
    baseThroughputMiBPerSec: number;
    /**
     * Scalar IO per second.
     */
    scalarIOPerSec: number;
    /**
     * Scalar throughput in MiB per second.
     */
    scalarThroughputMiBPerSec: number;
}

/**
 * File share provisioning parameters recommendation API result.
 */
export interface FileShareProvisioningRecommendationOutputResponse {
    /**
     * Redundancy options for the share.
     */
    availableRedundancyOptions: string[];
    /**
     * The recommended value of provisioned IO / sec of the share.
     */
    provisionedIOPerSec: number;
    /**
     * The recommended value of provisioned throughput / sec of the share.
     */
    provisionedThroughputMiBPerSec: number;
}

/**
 * File shares usage result.
 */
export interface FileShareUsageDataOutputResponse {
    /**
     * File share usage data for active file shares.
     */
    liveShares: LiveSharesUsageDataResponse;
}

/**
 * Usage data for live shares.
 */
export interface LiveSharesUsageDataResponse {
    /**
     * The number of active file shares.
     */
    fileShareCount: number;
}

/**
 * Properties specific to the NFS protocol.
 */
export interface NfsProtocolPropertiesResponse {
    /**
     * Root squash defines how root users on clients are mapped to the NFS share.
     */
    rootSquash?: string;
}

/**
 * The private endpoint connection resource.
 */
export interface PrivateEndpointConnectionResponse {
    /**
     * The group ids for the private endpoint resource.
     */
    groupIds: string[];
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    id: string;
    /**
     * The name of the resource
     */
    name: string;
    /**
     * The private endpoint resource.
     */
    privateEndpoint?: PrivateEndpointResponse;
    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    privateLinkServiceConnectionState: PrivateLinkServiceConnectionStateResponse;
    /**
     * The provisioning state of the private endpoint connection resource.
     */
    provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    systemData: SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    type: string;
}

/**
 * The private endpoint resource.
 */
export interface PrivateEndpointResponse {
    /**
     * The ARM identifier for private endpoint.
     */
    id: string;
}

/**
 * A collection of information about the state of the connection between service consumer and provider.
 */
export interface PrivateLinkServiceConnectionStateResponse {
    /**
     * A message indicating if changes on the service provider require any updates on the consumer.
     */
    actionsRequired?: string;
    /**
     * The reason for approval/rejection of the connection.
     */
    description?: string;
    /**
     * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
     */
    status?: string;
}

/**
 * The set of properties for control public access.
 */
export interface PublicAccessPropertiesResponse {
    /**
     * The allowed set of subnets when access is restricted.
     */
    allowedSubnets?: string[];
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
