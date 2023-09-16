import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Returns the token that is used for correlating ingested telemetry with the resources in the subscription.
 * Azure REST API version: 2021-01-15-preview.
 */
export function listIngestionSettingTokens(args: ListIngestionSettingTokensArgs, opts?: pulumi.InvokeOptions): Promise<ListIngestionSettingTokensResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security:listIngestionSettingTokens", {
        "ingestionSettingName": args.ingestionSettingName,
    }, opts);
}

export interface ListIngestionSettingTokensArgs {
    /**
     * Name of the ingestion setting
     */
    ingestionSettingName: string;
}

/**
 * Configures how to correlate scan data and logs with resources associated with the subscription.
 */
export interface ListIngestionSettingTokensResult {
    /**
     * The token is used for correlating security data and logs with the resources in the subscription.
     */
    readonly token: string;
}
/**
 * Returns the token that is used for correlating ingested telemetry with the resources in the subscription.
 * Azure REST API version: 2021-01-15-preview.
 */
export function listIngestionSettingTokensOutput(args: ListIngestionSettingTokensOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListIngestionSettingTokensResult> {
    return pulumi.output(args).apply((a: any) => listIngestionSettingTokens(a, opts))
}

export interface ListIngestionSettingTokensOutputArgs {
    /**
     * Name of the ingestion setting
     */
    ingestionSettingName: pulumi.Input<string>;
}
