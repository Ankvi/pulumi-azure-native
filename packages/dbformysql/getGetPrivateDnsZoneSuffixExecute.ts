import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get private DNS zone suffix in the cloud.
 * Azure REST API version: 2022-01-01.
 *
 * Other available API versions: 2021-05-01, 2021-05-01-preview, 2021-12-01-preview, 2022-09-30-preview, 2023-06-01-preview, 2023-06-30, 2023-12-01-preview.
 */
export function getGetPrivateDnsZoneSuffixExecute(args?: GetGetPrivateDnsZoneSuffixExecuteArgs, opts?: pulumi.InvokeOptions): Promise<GetGetPrivateDnsZoneSuffixExecuteResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dbformysql:getGetPrivateDnsZoneSuffixExecute", {
    }, opts);
}

export interface GetGetPrivateDnsZoneSuffixExecuteArgs {
}

/**
 * The response of get private dns zone suffix.
 */
export interface GetGetPrivateDnsZoneSuffixExecuteResult {
    /**
     * Represents the private DNS zone suffix.
     */
    readonly privateDnsZoneSuffix?: string;
}
/**
 * Get private DNS zone suffix in the cloud.
 * Azure REST API version: 2022-01-01.
 *
 * Other available API versions: 2021-05-01, 2021-05-01-preview, 2021-12-01-preview, 2022-09-30-preview, 2023-06-01-preview, 2023-06-30, 2023-12-01-preview.
 */
export function getGetPrivateDnsZoneSuffixExecuteOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetGetPrivateDnsZoneSuffixExecuteResult> {
    return pulumi.output(getGetPrivateDnsZoneSuffixExecute(opts))
}