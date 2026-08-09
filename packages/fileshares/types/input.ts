import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * File share properties
 */
export interface FileSharePropertiesArgs {
    /**
     * The storage media tier of the file share.
     */
    mediaTier?: pulumi.Input<string | enums.MediaTier | undefined>;
    /**
     * The name of the file share as seen by the end user when mounting the share, such as in a URI or UNC format in their operating system.
     */
    mountName?: pulumi.Input<string | undefined>;
    /**
     * Protocol settings specific NFS.
     */
    nfsProtocolProperties?: pulumi.Input<NfsProtocolPropertiesArgs | undefined>;
    /**
     * The file sharing protocol for this file share.
     */
    protocol?: pulumi.Input<string | enums.Protocol | undefined>;
    /**
     * The provisioned IO / sec of the share.
     */
    provisionedIOPerSec?: pulumi.Input<number | undefined>;
    /**
     * The provisioned storage size of the share in GiB (1 GiB is 1024^3 bytes or 1073741824 bytes). A component of the file share's bill is the provisioned storage, regardless of the amount of used storage.
     */
    provisionedStorageGiB?: pulumi.Input<number | undefined>;
    /**
     * The provisioned throughput / sec of the share.
     */
    provisionedThroughputMiBPerSec?: pulumi.Input<number | undefined>;
    /**
     * The set of properties for control public access.
     */
    publicAccessProperties?: pulumi.Input<PublicAccessPropertiesArgs | undefined>;
    /**
     * Gets or sets allow or disallow public network access to azure managed file share
     */
    publicNetworkAccess?: pulumi.Input<string | enums.PublicNetworkAccess | undefined>;
    /**
     * The chosen redundancy level of the file share.
     */
    redundancy?: pulumi.Input<string | enums.Redundancy | undefined>;
}

/**
 * File share provisioning parameters recommendation API input structure.
 */
export interface FileShareProvisioningRecommendationInput {
    /**
     * The desired provisioned storage size of the share in GiB. Will be use to calculate the values of remaining provisioning parameters.
     */
    provisionedStorageGiB: number;
}

/**
 * File share provisioning parameters recommendation API input structure.
 */
export interface FileShareProvisioningRecommendationInputArgs {
    /**
     * The desired provisioned storage size of the share in GiB. Will be use to calculate the values of remaining provisioning parameters.
     */
    provisionedStorageGiB: pulumi.Input<number>;
}

/**
 * FileShareSnapshot properties
 */
export interface FileShareSnapshotPropertiesArgs {
    /**
     * The initiator of the FileShareSnapshot. This is a user-defined value.
     */
    initiatorId?: pulumi.Input<string | undefined>;
    /**
     * The metadata
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
}

/**
 * Properties specific to the NFS protocol.
 */
export interface NfsProtocolPropertiesArgs {
    /**
     * Root squash defines how root users on clients are mapped to the NFS share.
     */
    rootSquash?: pulumi.Input<string | enums.ShareRootSquash | undefined>;
}

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
 * The set of properties for control public access.
 */
export interface PublicAccessPropertiesArgs {
    /**
     * The allowed set of subnets when access is restricted.
     */
    allowedSubnets?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}
