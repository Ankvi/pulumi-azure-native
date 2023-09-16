import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Settings for ingesting security data and logs to correlate with resources associated with the subscription.
 */
export function getIngestionSetting(args: GetIngestionSettingArgs, opts?: pulumi.InvokeOptions): Promise<GetIngestionSettingResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security/v20210115preview:getIngestionSetting", {
        "ingestionSettingName": args.ingestionSettingName,
    }, opts);
}

export interface GetIngestionSettingArgs {
    /**
     * Name of the ingestion setting
     */
    ingestionSettingName: string;
}

/**
 * Configures how to correlate scan data and logs with resources associated with the subscription.
 */
export interface GetIngestionSettingResult {
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Settings for ingesting security data and logs to correlate with resources associated with the subscription.
 */
export function getIngestionSettingOutput(args: GetIngestionSettingOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIngestionSettingResult> {
    return pulumi.output(args).apply((a: any) => getIngestionSetting(a, opts))
}

export interface GetIngestionSettingOutputArgs {
    /**
     * Name of the ingestion setting
     */
    ingestionSettingName: pulumi.Input<string>;
}
