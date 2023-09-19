import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Connection strings for ingesting security scan logs and data.
 */
export function listIngestionSettingConnectionStrings(args: ListIngestionSettingConnectionStringsArgs, opts?: pulumi.InvokeOptions): Promise<ListIngestionSettingConnectionStringsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security/v20210115preview:listIngestionSettingConnectionStrings", {
        "ingestionSettingName": args.ingestionSettingName,
    }, opts);
}

export interface ListIngestionSettingConnectionStringsArgs {
    /**
     * Name of the ingestion setting
     */
    ingestionSettingName: string;
}

/**
 * Connection string for ingesting security data and logs
 */
export interface ListIngestionSettingConnectionStringsResult {
    /**
     * Connection strings
     */
    readonly value: types.outputs.IngestionConnectionStringResponse[];
}
/**
 * Connection strings for ingesting security scan logs and data.
 */
export function listIngestionSettingConnectionStringsOutput(args: ListIngestionSettingConnectionStringsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListIngestionSettingConnectionStringsResult> {
    return pulumi.output(args).apply((a: any) => listIngestionSettingConnectionStrings(a, opts))
}

export interface ListIngestionSettingConnectionStringsOutputArgs {
    /**
     * Name of the ingestion setting
     */
    ingestionSettingName: pulumi.Input<string>;
}
