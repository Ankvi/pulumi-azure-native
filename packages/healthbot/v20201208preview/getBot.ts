import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get a Healthcare Bot.
 */
export function getBot(args: GetBotArgs, opts?: pulumi.InvokeOptions): Promise<GetBotResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:healthbot/v20201208preview:getBot", {
        "botName": args.botName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetBotArgs {
    /**
     * The name of the Bot resource.
     */
    botName: string;
    /**
     * The name of the Bot resource group in the user subscription.
     */
    resourceGroupName: string;
}

/**
 * HealthBot resource definition
 */
export interface GetBotResult {
    /**
     * Fully qualified resource Id for the resource.
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The set of properties specific to healthcare bot resource.
     */
    readonly properties: types.outputs.healthbot.v20201208preview.HealthBotPropertiesResponse;
    /**
     * SKU of the HealthBot.
     */
    readonly sku?: types.outputs.healthbot.v20201208preview.SkuResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource
     */
    readonly systemData: types.outputs.healthbot.v20201208preview.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Get a Healthcare Bot.
 */
export function getBotOutput(args: GetBotOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBotResult> {
    return pulumi.output(args).apply((a: any) => getBot(a, opts))
}

export interface GetBotOutputArgs {
    /**
     * The name of the Bot resource.
     */
    botName: pulumi.Input<string>;
    /**
     * The name of the Bot resource group in the user subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}
