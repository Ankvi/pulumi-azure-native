import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The set of ARM identities associated with the IoT DPS resource.
     */
    export interface ArmIdentityArgs {
        /**
         * Identity type. Only allowed values are SystemAssigned and UserAssigned. Comma separated if both for ex: SystemAssigned,UserAssigned.
         */
        identityType?: pulumi.Input<string>;
        /**
         * The set of UserAssigned identities associated with the IoT DPS resource.
         */
        userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * The properties of the identity used to access the key encryption key in KeyVault.
     */
    export interface EncryptionKeyIdentityArgs {
        /**
         * The user assigned identity.
         */
        userAssignedIdentity?: pulumi.Input<string>;
    }

    /**
     * The customer-managed encryption key (CMK) properties for the IoT DPS instance.
     */
    export interface EncryptionPropertiesDescriptionArgs {
        /**
         * The identity used to access the encryption key in KeyVault.
         */
        identity?: pulumi.Input<EncryptionKeyIdentityArgs>;
        /**
         * The source of the encryption key. Typically, Microsoft.KeyVault
         */
        keySource?: pulumi.Input<string>;
        /**
         * The properties of the encryption key configured in KeyVault.
         */
        keyVaultProperties?: pulumi.Input<pulumi.Input<KeyVaultKeyPropertiesArgs>[]>;
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
         * The encryption properties for the IoT DPS instance.
         */
        encryption?: pulumi.Input<EncryptionPropertiesDescriptionArgs>;
        /**
         * List of IoT hubs associated with this provisioning service.
         */
        iotHubs?: pulumi.Input<pulumi.Input<IotHubDefinitionDescriptionArgs>[]>;
        /**
         * The IP filter rules.
         */
        ipFilterRules?: pulumi.Input<pulumi.Input<TargetIpFilterRuleArgs>[]>;
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
     * The properties of the KeyVault key.
     */
    export interface KeyVaultKeyPropertiesArgs {
        /**
         * The identifier of the key.
         */
        keyIdentifier?: pulumi.Input<string>;
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

    /**
     * The IP filter rules for a provisioning Service.
     */
    export interface TargetIpFilterRuleArgs {
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
