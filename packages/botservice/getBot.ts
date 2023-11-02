import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns a BotService specified by the parameters.
 * Azure REST API version: 2022-09-15.
 *
 * Other available API versions: 2023-09-15-preview.
 */
export function getBot(args: GetBotArgs, opts?: pulumi.InvokeOptions): Promise<GetBotResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:botservice:getBot", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetBotArgs {
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
 * Bot resource definition
 */
export interface GetBotResult {
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
     * The set of properties specific to bot resource
     */
    readonly properties: types.outputs.BotPropertiesResponse;
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
 * Returns a BotService specified by the parameters.
 * Azure REST API version: 2022-09-15.
 *
 * Other available API versions: 2023-09-15-preview.
 */
export function getBotOutput(args: GetBotOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBotResult> {
    return pulumi.output(args).apply((a: any) => getBot(a, opts))
}

export interface GetBotOutputArgs {
    /**
     * The name of the Bot resource group in the user subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Bot resource.
     */
    resourceName: pulumi.Input<string>;
}
