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
 * The SKU of the Maps Account.
 */
export interface SkuArgs {
    /**
     * The name of the SKU, in standard format (such as S0).
     */
    name: pulumi.Input<string | enums.Name>;
}




