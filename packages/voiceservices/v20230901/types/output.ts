import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Configuration of the API Bridge.
     */
    export interface ApiBridgePropertiesResponse {
        /**
         * The allowed source IP addresses or CIDR ranges for accessing the API Bridge
         */
        allowedAddressPrefixes?: string[];
        /**
         * The activation state of the API Bridge for this Communications Gateway
         */
        configureApiBridge?: string;
        /**
         * FQDNs for sending requests to the API Bridge endpoint
         */
        endpointFqdns: string[];
    }
    /**
     * apiBridgePropertiesResponseProvideDefaults sets the appropriate defaults for ApiBridgePropertiesResponse
     */
    export function apiBridgePropertiesResponseProvideDefaults(val: ApiBridgePropertiesResponse): ApiBridgePropertiesResponse {
        return {
            ...val,
            configureApiBridge: (val.configureApiBridge) ?? "disabled",
        };
    }

    /**
     * Details of a Custom SIP Header.
     */
    export interface CustomSipHeaderResponse {
        /**
         * The name of the Custom SIP Header
         */
        name?: string;
    }

    /**
     * Properties of Custom SIP Headers.
     */
    export interface CustomSipHeadersPropertiesResponse {
        /**
         * The Custom SIP Headers to apply to the calls which traverse the Communications Gateway
         */
        headers?: CustomSipHeaderResponse[];
    }

    /**
     * Details of a DNS Domain delegated to the Communications Gateway.
     */
    export interface DnsDelegationPropertiesResponse {
        /**
         * Domain name to delegate
         */
        domain?: string;
        /**
         * The Azure-hosted DNS Name Servers for the delegated DNS Zones
         */
        nameServers: string[];
    }

    /**
     * Details of DNS Domains delegated to the Communications Gateway.
     */
    export interface DnsDelegationsPropertiesResponse {
        /**
         * DNS Domains to delegate for the creation of DNS Zones by the Azure Communications Gateway
         */
        delegations?: DnsDelegationPropertiesResponse[];
    }

    /**
     * Managed service identity (system assigned and/or user assigned identities)
     */
    export interface ManagedServiceIdentityResponse {
        /**
         * The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
         */
        principalId: string;
        /**
         * The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
         */
        tenantId: string;
        /**
         * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
         */
        type: string;
        /**
         * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
         */
        userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
    }

    /**
     * The configuration used in this region as primary, and other regions as backup.
     */
    export interface PrimaryRegionPropertiesResponse {
        /**
         * The allowed source IP addresses or CIDR ranges for media
         */
        allowedMediaSourceAddressPrefixes?: string[];
        /**
         * The allowed source IP addresses or CIDR ranges for signaling
         */
        allowedSignalingSourceAddressPrefixes?: string[];
        /**
         * IP address to use to contact the ESRP from this region
         */
        esrpAddresses?: string[];
        /**
         * IP address to use to contact the operator network from this region
         */
        operatorAddresses: string[];
    }

    /**
     * The service region configuration needed for Teams Callings.
     */
    export interface ServiceRegionPropertiesResponse {
        /**
         * The name of the region in which the resources needed for Teams Calling will be deployed.
         */
        name: string;
        /**
         * The configuration used in this region as primary, and other regions as backup.
         */
        primaryRegionProperties: PrimaryRegionPropertiesResponse;
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
