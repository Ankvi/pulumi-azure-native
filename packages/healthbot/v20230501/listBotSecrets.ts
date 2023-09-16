import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * List all secrets of a HealthBot.
 */
export function listBotSecrets(args: ListBotSecretsArgs, opts?: pulumi.InvokeOptions): Promise<ListBotSecretsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:healthbot/v20230501:listBotSecrets", {
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
    readonly secrets?: types.outputs.healthbot.v20230501.HealthBotKeyResponse[];
}
/**
 * List all secrets of a HealthBot.
 */
export function listBotSecretsOutput(args: ListBotSecretsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListBotSecretsResult> {
    return pulumi.output(args).apply((a: any) => listBotSecrets(a, opts))
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
