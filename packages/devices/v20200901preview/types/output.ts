import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The set of ARM identities associated with the IoT DPS resource.
     */
    export interface ArmIdentityResponse {
        /**
         * Identity type. Only allowed values are SystemAssigned and UserAssigned. Comma separated if both for ex: SystemAssigned,UserAssigned.
         */
        identityType?: string;
        /**
         * Principal Id
         */
        principalId: string;
        /**
         * Tenant Id
         */
        tenantId: string;
        /**
         * The set of UserAssigned identities associated with the IoT DPS resource.
         */
        userAssignedIdentities?: {[key: string]: ArmUserIdentityResponse};
    }

    /**
     * The ARM UserAssigned identity information
     */
    export interface ArmUserIdentityResponse {
        /**
         * Client Id
         */
        clientId: string;
        /**
         * Principal Id
         */
        principalId: string;
    }

    /**
     * The properties of the identity used to access the key encryption key in KeyVault.
     */
    export interface EncryptionKeyIdentityResponse {
        /**
         * The user assigned identity.
         */
        userAssignedIdentity?: string;
    }

    /**
     * The customer-managed encryption key (CMK) properties for the IoT DPS instance.
     */
    export interface EncryptionPropertiesDescriptionResponse {
        /**
         * The identity used to access the encryption key in KeyVault.
         */
        identity?: EncryptionKeyIdentityResponse;
        /**
         * The source of the encryption key. Typically, Microsoft.KeyVault
         */
        keySource?: string;
        /**
         * The properties of the encryption key configured in KeyVault.
         */
        keyVaultProperties?: KeyVaultKeyPropertiesResponse[];
    }

    /**
     * the service specific properties of a provisioning service, including keys, linked iot hubs, current state, and system generated properties such as hostname and idScope
     */
    export interface IotDpsPropertiesDescriptionResponse {
        /**
         * Allocation policy to be used by this provisioning service.
         */
        allocationPolicy?: string;
        /**
         * List of authorization keys for a provisioning service.
         */
        authorizationPolicies?: SharedAccessSignatureAuthorizationRuleAccessRightsDescriptionResponse[];
        /**
         * Device endpoint for this provisioning service.
         */
        deviceProvisioningHostName: string;
        /**
         * The encryption properties for the IoT DPS instance.
         */
        encryption?: EncryptionPropertiesDescriptionResponse;
        /**
         * Unique identifier of this provisioning service.
         */
        idScope: string;
        /**
         * List of IoT hubs associated with this provisioning service.
         */
        iotHubs?: IotHubDefinitionDescriptionResponse[];
        /**
         * The IP filter rules.
         */
        ipFilterRules?: TargetIpFilterRuleResponse[];
        /**
         * Private endpoint connections created on this IotHub
         */
        privateEndpointConnections?: PrivateEndpointConnectionResponse[];
        /**
         * The ARM provisioning state of the provisioning service.
         */
        provisioningState?: string;
        /**
         * Whether requests from Public Network are allowed
         */
        publicNetworkAccess?: string;
        /**
         * Service endpoint for provisioning service.
         */
        serviceOperationsHostName: string;
        /**
         * Current state of the provisioning service.
         */
        state?: string;
    }

    /**
     * List of possible provisioning service SKUs.
     */
    export interface IotDpsSkuInfoResponse {
        /**
         * The number of units to provision
         */
        capacity?: number;
        /**
         * Sku name.
         */
        name?: string;
        /**
         * Pricing tier name of the provisioning service.
         */
        tier: string;
    }

    /**
     * Description of the IoT hub.
     */
    export interface IotHubDefinitionDescriptionResponse {
        /**
         * weight to apply for a given iot h.
         */
        allocationWeight?: number;
        /**
         * flag for applying allocationPolicy or not for a given iot hub.
         */
        applyAllocationPolicy?: boolean;
        /**
         * Connection string of the IoT hub.
         */
        connectionString: string;
        /**
         * ARM region of the IoT hub.
         */
        location: string;
        /**
         * Host name of the IoT hub.
         */
        name: string;
    }

    /**
     * The properties of the KeyVault key.
     */
    export interface KeyVaultKeyPropertiesResponse {
        /**
         * The identifier of the key.
         */
        keyIdentifier?: string;
    }

    /**
     * The properties of a private endpoint connection
     */
    export interface PrivateEndpointConnectionPropertiesResponse {
        /**
         * The private endpoint property of a private endpoint connection
         */
        privateEndpoint?: PrivateEndpointResponse;
        /**
         * The current state of a private endpoint connection
         */
        privateLinkServiceConnectionState: PrivateLinkServiceConnectionStateResponse;
    }

    /**
     * The private endpoint connection of a provisioning service
     */
    export interface PrivateEndpointConnectionResponse {
        /**
         * The resource identifier.
         */
        id: string;
        /**
         * The resource name.
         */
        name: string;
        /**
         * The properties of a private endpoint connection
         */
        properties: PrivateEndpointConnectionPropertiesResponse;
        /**
         * The resource type.
         */
        type: string;
    }

    /**
     * The private endpoint property of a private endpoint connection
     */
    export interface PrivateEndpointResponse {
        /**
         * The resource identifier.
         */
        id: string;
    }

    /**
     * The current state of a private endpoint connection
     */
    export interface PrivateLinkServiceConnectionStateResponse {
        /**
         * Actions required for a private endpoint connection
         */
        actionsRequired?: string;
        /**
         * The description for the current state of a private endpoint connection
         */
        description: string;
        /**
         * The status of a private endpoint connection
         */
        status: string;
    }

    /**
     * Description of the shared access key.
     */
    export interface SharedAccessSignatureAuthorizationRuleAccessRightsDescriptionResponse {
        /**
         * Name of the key.
         */
        keyName: string;
        /**
         * Primary SAS key value.
         */
        primaryKey?: string;
        /**
         * Rights that this key has.
         */
        rights: string;
        /**
         * Secondary SAS key value.
         */
        secondaryKey?: string;
    }

    /**
     * The IP filter rules for a provisioning Service.
     */
    export interface TargetIpFilterRuleResponse {
        /**
         * The desired action for requests captured by this rule.
         */
        action: string;
        /**
         * The name of the IP filter rule.
         */
        filterName: string;
        /**
         * A string that contains the IP address range in CIDR notation for the rule.
         */
        ipMask: string;
        /**
         * Target for requests captured by this rule.
         */
        target?: string;
    }
