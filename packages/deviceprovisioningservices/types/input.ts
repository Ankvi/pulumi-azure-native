import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The description of an X509 CA Certificate.
 */
export interface CertificatePropertiesArgs {
    /**
     * base-64 representation of X509 certificate .cer file or just .pem file content.
     */
    certificate?: pulumi.Input<string>;
    /**
     * Determines whether certificate has been verified.
     */
    isVerified?: pulumi.Input<boolean>;
}

/**
 * the service specific properties of a provisioning service, including keys, linked iot hubs, current state, and system generated properties such as hostname and idScope
 */
export interface IotDpsPropertiesDescriptionArgs {
    /**
     * Allocation policy to be used by this provisioning service.
     */
    allocationPolicy?: pulumi.Input<string | enums.AllocationPolicy>;
    /**
     * List of authorization keys for a provisioning service.
     */
    authorizationPolicies?: pulumi.Input<pulumi.Input<SharedAccessSignatureAuthorizationRuleAccessRightsDescriptionArgs>[]>;
    /**
     * Optional.
     * Indicates if the DPS instance has Data Residency enabled, removing the cross geo-pair disaster recovery.
     */
    enableDataResidency?: pulumi.Input<boolean>;
    /**
     * List of IoT hubs associated with this provisioning service.
     */
    iotHubs?: pulumi.Input<pulumi.Input<IotHubDefinitionDescriptionArgs>[]>;
    /**
     * The IP filter rules.
     */
    ipFilterRules?: pulumi.Input<pulumi.Input<IpFilterRuleArgs>[]>;
    /**
     * Portal endpoint to enable CORS for this provisioning service.
     */
    portalOperationsHostName?: pulumi.Input<string>;
    /**
     * Private endpoint connections created on this IotHub
     */
    privateEndpointConnections?: pulumi.Input<pulumi.Input<PrivateEndpointConnectionArgs>[]>;
    /**
     * The ARM provisioning state of the provisioning service.
     */
    provisioningState?: pulumi.Input<string>;
    /**
     * Whether requests from Public Network are allowed
     */
    publicNetworkAccess?: pulumi.Input<string | enums.PublicNetworkAccess>;
    /**
     * Current state of the provisioning service.
     */
    state?: pulumi.Input<string | enums.State>;
}

/**
 * List of possible provisioning service SKUs.
 */
export interface IotDpsSkuInfoArgs {
    /**
     * The number of units to provision
     */
    capacity?: pulumi.Input<number>;
    /**
     * Sku name.
     */
    name?: pulumi.Input<string | enums.IotDpsSku>;
}

/**
 * Description of the IoT hub.
 */
export interface IotHubDefinitionDescriptionArgs {
    /**
     * weight to apply for a given iot h.
     */
    allocationWeight?: pulumi.Input<number>;
    /**
     * flag for applying allocationPolicy or not for a given iot hub.
     */
    applyAllocationPolicy?: pulumi.Input<boolean>;
    /**
     * Connection string of the IoT hub.
     */
    connectionString: pulumi.Input<string>;
    /**
     * ARM region of the IoT hub.
     */
    location: pulumi.Input<string>;
}

/**
 * The IP filter rules for a provisioning Service.
 */
export interface IpFilterRuleArgs {
    /**
     * The desired action for requests captured by this rule.
     */
    action: pulumi.Input<enums.IpFilterActionType>;
    /**
     * The name of the IP filter rule.
     */
    filterName: pulumi.Input<string>;
    /**
     * A string that contains the IP address range in CIDR notation for the rule.
     */
    ipMask: pulumi.Input<string>;
    /**
     * Target for requests captured by this rule.
     */
    target?: pulumi.Input<enums.IpFilterTargetType>;
}

/**
 * Managed service identity (system assigned and/or user assigned identities)
 */
export interface ManagedServiceIdentityArgs {
    /**
     * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
     */
    type: pulumi.Input<string | enums.ManagedServiceIdentityType>;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The private endpoint connection of a provisioning service
 */
export interface PrivateEndpointConnectionArgs {
    /**
     * The properties of a private endpoint connection
     */
    properties: pulumi.Input<PrivateEndpointConnectionPropertiesArgs>;
}

/**
 * The properties of a private endpoint connection
 */
export interface PrivateEndpointConnectionPropertiesArgs {
    /**
     * The current state of a private endpoint connection
     */
    privateLinkServiceConnectionState: pulumi.Input<PrivateLinkServiceConnectionStateArgs>;
}

/**
 * The current state of a private endpoint connection
 */
export interface PrivateLinkServiceConnectionStateArgs {
    /**
     * Actions required for a private endpoint connection
     */
    actionsRequired?: pulumi.Input<string>;
    /**
     * The description for the current state of a private endpoint connection
     */
    description: pulumi.Input<string>;
    /**
     * The status of a private endpoint connection
     */
    status: pulumi.Input<string | enums.PrivateLinkServiceConnectionStatus>;
}

/**
 * Description of the shared access key.
 */
export interface SharedAccessSignatureAuthorizationRuleAccessRightsDescriptionArgs {
    /**
     * Name of the key.
     */
    keyName: pulumi.Input<string>;
    /**
     * Primary SAS key value.
     */
    primaryKey?: pulumi.Input<string>;
    /**
     * Rights that this key has.
     */
    rights: pulumi.Input<string | enums.AccessRightsDescription>;
    /**
     * Secondary SAS key value.
     */
    secondaryKey?: pulumi.Input<string>;
}
