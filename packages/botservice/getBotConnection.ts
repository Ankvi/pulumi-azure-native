import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Connection Setting registration for a Bot Service
 *
 * Uses Azure REST API version 2022-09-15.
 *
 * Other available API versions: 2023-09-15-preview.
 */
export function getBotConnection(args: GetBotConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetBotConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:botservice:getBotConnection", {
        "connectionName": args.connectionName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetBotConnectionArgs {
    /**
     * The name of the Bot Service Connection Setting resource.
     */
    connectionName: string;
    /**
     * The name of the Bot resource group in the user subscription.
     */
    resourceGroupName: string;
    /**
     * The name of the Bot resource.
     */
    resourceName: string;
}

/**
 * Bot channel resource definition
 */
export interface GetBotConnectionResult {
    /**
     * Entity Tag.
     */
    readonly etag?: string;
    /**
     * Specifies the resource ID.
     */
    readonly id: string;
    /**
     * Required. Gets or sets the Kind of the resource.
     */
    readonly kind?: string;
    /**
     * Specifies the location of the resource.
     */
    readonly location?: string;
    /**
     * Specifies the name of the resource.
     */
    readonly name: string;
    /**
     * The set of properties specific to bot channel resource
     */
    readonly properties: types.outputs.ConnectionSettingPropertiesResponse;
    /**
     * Gets or sets the SKU of the resource.
     */
    readonly sku?: types.outputs.SkuResponse;
    /**
     * Contains resource tags defined as key/value pairs.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Specifies the type of the resource.
     */
    readonly type: string;
    /**
     * Entity zones
     */
    readonly zones: string[];
}
/**
 * Get a Connection Setting registration for a Bot Service
 *
 * Uses Azure REST API version 2022-09-15.
 *
 * Other available API versions: 2023-09-15-preview.
 */
export function getBotConnectionOutput(args: GetBotConnectionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetBotConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:botservice:getBotConnection", {
        "connectionName": args.connectionName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetBotConnectionOutputArgs {
    /**
     * The name of the Bot Service Connection Setting resource.
     */
    connectionName: pulumi.Input<string>;
    /**
     * The name of the Bot resource group in the user subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Bot resource.
     */
    resourceName: pulumi.Input<string>;
}