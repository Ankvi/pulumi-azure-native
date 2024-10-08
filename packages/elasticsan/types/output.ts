import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Iscsi target information
 */
export interface IscsiTargetInfoResponse {
    /**
     * State of the operation on the resource.
     */
    provisioningState: string;
    /**
     * Operational status of the iSCSI Target.
     */
    status?: string;
    /**
     * iSCSI Target IQN (iSCSI Qualified Name); example: "iqn.2005-03.org.iscsi:server".
     */
    targetIqn: string;
    /**
     * iSCSI Target Portal Host Name
     */
    targetPortalHostname: string;
    /**
     * iSCSI Target Portal Port
     */
    targetPortalPort: number;
}

/**
 * A set of rules governing the network accessibility.
 */
export interface NetworkRuleSetResponse {
    /**
     * The list of virtual network rules.
     */
    virtualNetworkRules?: VirtualNetworkRuleResponse[];
}

/**
 * Response for PrivateEndpoint
 */
export interface PrivateEndpointResponse {
    /**
     * The ARM identifier for Private Endpoint
     */
    id: string;
}

/**
 * Response for Private Link Service Connection state
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
 * The SKU name. Required for account creation; optional for update.
 */
export interface SkuResponse {
    /**
     * The sku name.
     */
    name: string;
    /**
     * The sku tier.
     */
    tier?: string;
}

/**
 * Data used when creating a volume snapshot.
 */
export interface SnapshotCreationDataResponse {
    /**
     * Fully qualified resource ID of the volume. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}/volumes/{volumeName}"
     */
    sourceId: string;
}

/**
 * Data source used when creating the volume.
 */
export interface SourceCreationDataResponse {
    /**
     * This enumerates the possible sources of a volume creation.
     */
    createSource?: string;
    /**
     * If createOption is Copy, this is the ARM id of the source snapshot or disk. If createOption is Restore, this is the ARM-like id of the source disk restore point.
     */
    sourceUri?: string;
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
 * Virtual Network rule.
 */
export interface VirtualNetworkRuleResponse {
    /**
     * The action of virtual network rule.
     */
    action?: string;
    /**
     * Gets the state of virtual network rule.
     */
    state: string;
    /**
     * Resource ID of a subnet, for example: /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.Network/virtualNetworks/{vnetName}/subnets/{subnetName}.
     */
    virtualNetworkResourceId: string;
}
/**
 * virtualNetworkRuleResponseProvideDefaults sets the appropriate defaults for VirtualNetworkRuleResponse
 */
export function virtualNetworkRuleResponseProvideDefaults(val: VirtualNetworkRuleResponse): VirtualNetworkRuleResponse {
    return {
        ...val,
        action: (val.action) ?? "Allow",
    };
}




