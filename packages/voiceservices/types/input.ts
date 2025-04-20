import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Configuration of the API Bridge.
 */
export interface ApiBridgePropertiesArgs {
    /**
     * The allowed source IP addresses or CIDR ranges for accessing the API Bridge
     */
    allowedAddressPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The activation state of the API Bridge for this Communications Gateway
     */
    configureApiBridge?: pulumi.Input<string | enums.ApiBridgeActivationState>;
}
/**
 * apiBridgePropertiesArgsProvideDefaults sets the appropriate defaults for ApiBridgePropertiesArgs
 */
export function apiBridgePropertiesArgsProvideDefaults(val: ApiBridgePropertiesArgs): ApiBridgePropertiesArgs {
    return {
        ...val,
        configureApiBridge: (val.configureApiBridge) ?? "disabled",
    };
}

/**
 * Details of a Custom SIP Header.
 */
export interface CustomSipHeaderArgs {
    /**
     * The name of the Custom SIP Header
     */
    name?: pulumi.Input<string>;
}

/**
 * Properties of Custom SIP Headers.
 */
export interface CustomSipHeadersPropertiesArgs {
    /**
     * The Custom SIP Headers to apply to the calls which traverse the Communications Gateway
     */
    headers?: pulumi.Input<pulumi.Input<CustomSipHeaderArgs>[]>;
}

/**
 * Details of a DNS Domain delegated to the Communications Gateway.
 */
export interface DnsDelegationPropertiesArgs {
    /**
     * Domain name to delegate
     */
    domain?: pulumi.Input<string>;
}

/**
 * Details of DNS Domains delegated to the Communications Gateway.
 */
export interface DnsDelegationsPropertiesArgs {
    /**
     * DNS Domains to delegate for the creation of DNS Zones by the Azure Communications Gateway
     */
    delegations?: pulumi.Input<pulumi.Input<DnsDelegationPropertiesArgs>[]>;
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
 * The configuration used in this region as primary, and other regions as backup.
 */
export interface PrimaryRegionPropertiesArgs {
    /**
     * The allowed source IP addresses or CIDR ranges for media
     */
    allowedMediaSourceAddressPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The allowed source IP addresses or CIDR ranges for signaling
     */
    allowedSignalingSourceAddressPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * IP address to use to contact the ESRP from this region
     */
    esrpAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * IP address to use to contact the operator network from this region
     */
    operatorAddresses: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The service region configuration needed for Teams Callings.
 */
export interface ServiceRegionPropertiesArgs {
    /**
     * The name of the region in which the resources needed for Teams Calling will be deployed.
     */
    name: pulumi.Input<string>;
    /**
     * The configuration used in this region as primary, and other regions as backup.
     */
    primaryRegionProperties: pulumi.Input<PrimaryRegionPropertiesArgs>;
}

/**
 * The resource model definition representing SKU
 */
export interface SkuArgs {
    /**
     * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
     */
    capacity?: pulumi.Input<number>;
    /**
     * If the service has different generations of hardware, for the same SKU, then that can be captured here.
     */
    family?: pulumi.Input<string>;
    /**
     * The name of the SKU. Ex - P3. It is typically a letter+number code
     */
    name: pulumi.Input<string>;
    /**
     * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. 
     */
    size?: pulumi.Input<string>;
    /**
     * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
     */
    tier?: pulumi.Input<enums.SkuTier>;
}
