import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get private DNS zone suffix in the cloud
 *
 * Uses Azure REST API version 2024-08-01.
 *
 * Other available API versions: 2022-12-01, 2023-03-01-preview, 2023-06-01-preview, 2023-12-01-preview, 2024-03-01-preview, 2024-11-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native dbforpostgresql [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getGetPrivateDnsZoneSuffixExecute(args?: GetGetPrivateDnsZoneSuffixExecuteArgs, opts?: pulumi.InvokeOptions): Promise<GetGetPrivateDnsZoneSuffixExecuteResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dbforpostgresql:getGetPrivateDnsZoneSuffixExecute", {
    }, opts);
}

export interface GetGetPrivateDnsZoneSuffixExecuteArgs {
}

/**
 * Represents a resource name availability.
 */
export interface GetGetPrivateDnsZoneSuffixExecuteResult {
    readonly value?: string;
}
/**
 * Get private DNS zone suffix in the cloud
 *
 * Uses Azure REST API version 2024-08-01.
 *
 * Other available API versions: 2022-12-01, 2023-03-01-preview, 2023-06-01-preview, 2023-12-01-preview, 2024-03-01-preview, 2024-11-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native dbforpostgresql [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getGetPrivateDnsZoneSuffixExecuteOutput(opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetGetPrivateDnsZoneSuffixExecuteResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:dbforpostgresql:getGetPrivateDnsZoneSuffixExecute", {
    }, opts);
}