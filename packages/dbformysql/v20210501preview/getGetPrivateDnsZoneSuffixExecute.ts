import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get private DNS zone suffix in the cloud.
 */
export function getGetPrivateDnsZoneSuffixExecute(args?: GetGetPrivateDnsZoneSuffixExecuteArgs, opts?: pulumi.InvokeOptions): Promise<GetGetPrivateDnsZoneSuffixExecuteResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dbformysql/v20210501preview:getGetPrivateDnsZoneSuffixExecute", {
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
 */
export function getGetPrivateDnsZoneSuffixExecuteOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetGetPrivateDnsZoneSuffixExecuteResult> {
    return pulumi.output(getGetPrivateDnsZoneSuffixExecute(opts))
}