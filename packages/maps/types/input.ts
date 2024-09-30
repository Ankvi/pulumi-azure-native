import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Creator resource properties
 */
export interface CreatorPropertiesArgs {
    /**
     * The storage units to be allocated. Integer values from 1 to 100, inclusive.
     */
    storageUnits: pulumi.Input<number>;
}

/**
 * Additional Map account properties
 */
export interface MapsAccountPropertiesArgs {
    /**
     * Allows toggle functionality on Azure Policy to disable Azure Maps local authentication support. This will disable Shared Keys authentication from any usage.
     */
    disableLocalAuth?: pulumi.Input<boolean>;
}
/**
 * mapsAccountPropertiesArgsProvideDefaults sets the appropriate defaults for MapsAccountPropertiesArgs
 */
export function mapsAccountPropertiesArgsProvideDefaults(val: MapsAccountPropertiesArgs): MapsAccountPropertiesArgs {
    return {
        ...val,
        disableLocalAuth: (val.disableLocalAuth) ?? false,
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
 * The SKU of the Maps Account.
 */
export interface SkuArgs {
    /**
     * The name of the SKU, in standard format (such as S0).
     */
    name: pulumi.Input<string | enums.Name>;
}








