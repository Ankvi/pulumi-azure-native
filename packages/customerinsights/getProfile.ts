import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about the specified profile.
 *
 * Uses Azure REST API version 2017-04-26.
 */
export function getProfile(args: GetProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetProfileResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:customerinsights:getProfile", {
        "hubName": args.hubName,
        "localeCode": args.localeCode,
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetProfileArgs {
    /**
     * The name of the hub.
     */
    hubName: string;
    /**
     * Locale of profile to retrieve, default is en-us.
     */
    localeCode?: string;
    /**
     * The name of the profile.
     */
    profileName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * The profile resource format.
 */
export interface GetProfileResult {
    /**
     * The api entity set name. This becomes the odata entity set name for the entity Type being referred in this object.
     */
    readonly apiEntitySetName?: string;
    /**
     * The attributes for the Type.
     */
    readonly attributes?: {[key: string]: string[]};
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Localized descriptions for the property.
     */
    readonly description?: {[key: string]: string};
    /**
     * Localized display names for the property.
     */
    readonly displayName?: {[key: string]: string};
    /**
     * Type of entity.
     */
    readonly entityType?: string;
    /**
     * The properties of the Profile.
     */
    readonly fields?: types.outputs.PropertyDefinitionResponse[];
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * The instance count.
     */
    readonly instancesCount?: number;
    /**
     * Large Image associated with the Property or EntityType.
     */
    readonly largeImage?: string;
    /**
     * The last changed time for the type definition.
     */
    readonly lastChangedUtc: string;
    /**
     * Any custom localized attributes for the Type.
     */
    readonly localizedAttributes?: {[key: string]: {[key: string]: string}};
    /**
     * Medium Image associated with the Property or EntityType.
     */
    readonly mediumImage?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Provisioning state.
     */
    readonly provisioningState: string;
    /**
     * The schema org link. This helps ACI identify and suggest semantic models.
     */
    readonly schemaItemTypeLink?: string;
    /**
     * Small Image associated with the Property or EntityType.
     */
    readonly smallImage?: string;
    /**
     * The strong IDs.
     */
    readonly strongIds?: types.outputs.StrongIdResponse[];
    /**
     * The hub name.
     */
    readonly tenantId: string;
    /**
     * The timestamp property name. Represents the time when the interaction or profile update happened.
     */
    readonly timestampFieldName?: string;
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * The name of the entity.
     */
    readonly typeName?: string;
}
/**
 * Gets information about the specified profile.
 *
 * Uses Azure REST API version 2017-04-26.
 */
export function getProfileOutput(args: GetProfileOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetProfileResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:customerinsights:getProfile", {
        "hubName": args.hubName,
        "localeCode": args.localeCode,
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetProfileOutputArgs {
    /**
     * The name of the hub.
     */
    hubName: pulumi.Input<string>;
    /**
     * Locale of profile to retrieve, default is en-us.
     */
    localeCode?: pulumi.Input<string>;
    /**
     * The name of the profile.
     */
    profileName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}