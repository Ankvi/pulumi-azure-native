import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The description of an X509 CA Certificate.
     */
    export interface CertificatePropertiesResponse {
        /**
         * base-64 representation of X509 certificate .cer file or just .pem file content.
         */
        certificate?: string;
        /**
         * The certificate's creation date and time.
         */
        created: string;
        /**
         * The certificate's expiration date and time.
         */
        expiry: string;
        /**
         * Determines whether certificate has been verified.
         */
        isVerified?: boolean;
        /**
         * The certificate's subject name.
         */
        subject: string;
        /**
         * The certificate's thumbprint.
         */
        thumbprint: string;
        /**
         * The certificate's last update date and time.
         */
        updated: string;
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
         * Optional.
         * Indicates if the DPS instance has Data Residency enabled, removing the cross geo-pair disaster recovery.
         */
        enableDataResidency?: boolean;
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
         * Portal endpoint to enable CORS for this provisioning service.
         */
        portalOperationsHostName?: string;
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
         * Metadata pertaining to creation and last modification of the resource.
         */
        systemData: SystemDataResponse;
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
