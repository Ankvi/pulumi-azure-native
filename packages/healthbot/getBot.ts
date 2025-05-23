import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a HealthBot.
 *
 * Uses Azure REST API version 2024-02-01.
 *
 * Other available API versions: 2023-05-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native healthbot [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getBot(args: GetBotArgs, opts?: pulumi.InvokeOptions): Promise<GetBotResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:healthbot:getBot", {
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
 * Azure Health Bot resource definition
 */
export interface GetBotResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource Id for the resource.
     */
    readonly id: string;
    /**
     * The identity of the Azure Health Bot.
     */
    readonly identity?: types.outputs.IdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The set of properties specific to Azure Health Bot resource.
     */
    readonly properties: types.outputs.HealthBotPropertiesResponse;
    /**
     * SKU of the Azure Health Bot.
     */
    readonly sku: types.outputs.SkuResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource
     */
    readonly systemData: types.outputs.SystemDataResponse;
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
 * Get a HealthBot.
 *
 * Uses Azure REST API version 2024-02-01.
 *
 * Other available API versions: 2023-05-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native healthbot [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getBotOutput(args: GetBotOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetBotResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:healthbot:getBot", {
        "botName": args.botName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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