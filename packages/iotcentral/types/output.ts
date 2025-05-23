import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Information about the SKU of the IoT Central application.
 */
export interface AppSkuInfoResponse {
    /**
     * The name of the SKU.
     */
    name: string;
}

/**
 * An object for an IP range that will be allowed access.
 */
export interface NetworkRuleSetIpRuleResponse {
    /**
     * The network action for the IP mask.
     */
    action: string;
    /**
     * The readable name of the IP rule.
     */
    filterName?: string;
    /**
     * The CIDR block defining the IP range.
     */
    ipMask?: string;
}

/**
 * Network Rule Set Properties of this IoT Central application.
 */
export interface NetworkRuleSetsResponse {
    /**
     * Whether these rules apply for device connectivity to IoT Hub and Device Provisioning service associated with this application.
     */
    applyToDevices?: boolean;
    /**
     * Whether these rules apply for connectivity via IoT Central web portal and APIs.
     */
    applyToIoTCentral?: boolean;
    /**
     * The default network action to apply.
     */
    defaultAction?: string;
    /**
     * List of IP rules.
     */
    ipRules?: NetworkRuleSetIpRuleResponse[];
}
/**
 * networkRuleSetsResponseProvideDefaults sets the appropriate defaults for NetworkRuleSetsResponse
 */
export function networkRuleSetsResponseProvideDefaults(val: NetworkRuleSetsResponse): NetworkRuleSetsResponse {
    return {
        ...val,
        applyToDevices: (val.applyToDevices) ?? false,
        applyToIoTCentral: (val.applyToIoTCentral) ?? false,
    };
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
 * Managed service identity (either system assigned, or none)
 */
export interface SystemAssignedServiceIdentityResponse {
    /**
     * The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
     */
    principalId: string;
    /**
     * The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
     */
    tenantId: string;
    /**
     * Type of managed service identity (either system assigned, or none).
     */
    type: string;
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
