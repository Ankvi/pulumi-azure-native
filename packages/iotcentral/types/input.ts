import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Information about the SKU of the IoT Central application.
 */
export interface AppSkuInfoArgs {
    /**
     * The name of the SKU.
     */
    name: pulumi.Input<string | enums.AppSku>;
}

/**
 * An object for an IP range that will be allowed access.
 */
export interface NetworkRuleSetIpRuleArgs {
    /**
     * The readable name of the IP rule.
     */
    filterName?: pulumi.Input<string>;
    /**
     * The CIDR block defining the IP range.
     */
    ipMask?: pulumi.Input<string>;
}

/**
 * Network Rule Set Properties of this IoT Central application.
 */
export interface NetworkRuleSetsArgs {
    /**
     * Whether these rules apply for device connectivity to IoT Hub and Device Provisioning service associated with this application.
     */
    applyToDevices?: pulumi.Input<boolean>;
    /**
     * Whether these rules apply for connectivity via IoT Central web portal and APIs.
     */
    applyToIoTCentral?: pulumi.Input<boolean>;
    /**
     * The default network action to apply.
     */
    defaultAction?: pulumi.Input<string | enums.NetworkAction>;
    /**
     * List of IP rules.
     */
    ipRules?: pulumi.Input<pulumi.Input<NetworkRuleSetIpRuleArgs>[]>;
}
/**
 * networkRuleSetsArgsProvideDefaults sets the appropriate defaults for NetworkRuleSetsArgs
 */
export function networkRuleSetsArgsProvideDefaults(val: NetworkRuleSetsArgs): NetworkRuleSetsArgs {
    return {
        ...val,
        applyToDevices: (val.applyToDevices) ?? false,
        applyToIoTCentral: (val.applyToIoTCentral) ?? false,
    };
}

/**
 * A collection of information about the state of the connection between service consumer and provider.
 */
export interface PrivateLinkServiceConnectionStateArgs {
    /**
     * A message indicating if changes on the service provider require any updates on the consumer.
     */
    actionsRequired?: pulumi.Input<string>;
    /**
     * The reason for approval/rejection of the connection.
     */
    description?: pulumi.Input<string>;
    /**
     * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
     */
    status?: pulumi.Input<string | enums.PrivateEndpointServiceConnectionStatus>;
}

/**
 * Managed service identity (either system assigned, or none)
 */
export interface SystemAssignedServiceIdentityArgs {
    /**
     * Type of managed service identity (either system assigned, or none).
     */
    type: pulumi.Input<string | enums.SystemAssignedServiceIdentityType>;
}
