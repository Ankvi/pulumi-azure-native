import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List all secrets of a HealthBot.
 *
 * Uses Azure REST API version 2024-02-01.
 *
 * Other available API versions: 2023-05-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native healthbot [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listBotSecrets(args: ListBotSecretsArgs, opts?: pulumi.InvokeOptions): Promise<ListBotSecretsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:healthbot:listBotSecrets", {
        "botName": args.botName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListBotSecretsArgs {
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
 * Health Bot Keys Response.
 */
export interface ListBotSecretsResult {
    /**
     * Array of Azure Health Bot Secrets.
     */
    readonly secrets?: types.outputs.HealthBotKeyResponse[];
}
/**
 * List all secrets of a HealthBot.
 *
 * Uses Azure REST API version 2024-02-01.
 *
 * Other available API versions: 2023-05-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native healthbot [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listBotSecretsOutput(args: ListBotSecretsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListBotSecretsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:healthbot:listBotSecrets", {
        "botName": args.botName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListBotSecretsOutputArgs {
    /**
     * The name of the Bot resource.
     */
    botName: pulumi.Input<string>;
    /**
     * The name of the Bot resource group in the user subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}