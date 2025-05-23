import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the download URL of a package.
 *
 * Uses Azure REST API version 2023-11-01-preview.
 *
 * Other available API versions: 2022-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native testbase [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getPackageDownloadURL(args: GetPackageDownloadURLArgs, opts?: pulumi.InvokeOptions): Promise<GetPackageDownloadURLResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:testbase:getPackageDownloadURL", {
        "packageName": args.packageName,
        "resourceGroupName": args.resourceGroupName,
        "testBaseAccountName": args.testBaseAccountName,
    }, opts);
}

export interface GetPackageDownloadURLArgs {
    /**
     * The resource name of the Test Base Package.
     */
    packageName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The resource name of the Test Base Account.
     */
    testBaseAccountName: string;
}

/**
 * The response of getting a download URL.
 */
export interface GetPackageDownloadURLResult {
    /**
     * The download URL.
     */
    readonly downloadUrl: string;
    /**
     * Expiry date of the download URL.
     */
    readonly expirationTime: string;
}
/**
 * Gets the download URL of a package.
 *
 * Uses Azure REST API version 2023-11-01-preview.
 *
 * Other available API versions: 2022-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native testbase [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getPackageDownloadURLOutput(args: GetPackageDownloadURLOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPackageDownloadURLResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:testbase:getPackageDownloadURL", {
        "packageName": args.packageName,
        "resourceGroupName": args.resourceGroupName,
        "testBaseAccountName": args.testBaseAccountName,
    }, opts);
}

export interface GetPackageDownloadURLOutputArgs {
    /**
     * The resource name of the Test Base Package.
     */
    packageName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The resource name of the Test Base Account.
     */
    testBaseAccountName: pulumi.Input<string>;
}