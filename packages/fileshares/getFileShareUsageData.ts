import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get file shares usage data.
 *
 * Uses Azure REST API version 2025-06-01-preview.
 *
 * Other available API versions: 2025-09-01-preview, 2026-06-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native fileshares [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getFileShareUsageData(args: GetFileShareUsageDataArgs, opts?: pulumi.InvokeOptions): Promise<GetFileShareUsageDataResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:fileshares:getFileShareUsageData", {
        "location": args.location,
    }, opts);
}

export interface GetFileShareUsageDataArgs {
    /**
     * The name of the Azure region.
     */
    location: string;
}

/**
 * Response structure for file shares usage in the specified subscription/location.
 */
export interface GetFileShareUsageDataResult {
    /**
     * The properties of the file share usage data.
     */
    readonly properties: types.outputs.FileShareUsageDataOutputResponse;
}
/**
 * Get file shares usage data.
 *
 * Uses Azure REST API version 2025-06-01-preview.
 *
 * Other available API versions: 2025-09-01-preview, 2026-06-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native fileshares [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getFileShareUsageDataOutput(args: GetFileShareUsageDataOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetFileShareUsageDataResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:fileshares:getFileShareUsageData", {
        "location": args.location,
    }, opts);
}

export interface GetFileShareUsageDataOutputArgs {
    /**
     * The name of the Azure region.
     */
    location: pulumi.Input<string>;
}