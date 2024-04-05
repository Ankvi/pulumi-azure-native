import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the download URL of the test result.
 */
export function getTestResultDownloadURL(args: GetTestResultDownloadURLArgs, opts?: pulumi.InvokeOptions): Promise<GetTestResultDownloadURLResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:testbase/v20231101preview:getTestResultDownloadURL", {
        "packageName": args.packageName,
        "resourceGroupName": args.resourceGroupName,
        "testBaseAccountName": args.testBaseAccountName,
        "testResultName": args.testResultName,
    }, opts);
}

export interface GetTestResultDownloadURLArgs {
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
    /**
     * The Test Result Name. It equals to TestResult-{TestResultId} string.
     */
    testResultName: string;
}

/**
 * The response of getting a download URL.
 */
export interface GetTestResultDownloadURLResult {
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
 * Gets the download URL of the test result.
 */
export function getTestResultDownloadURLOutput(args: GetTestResultDownloadURLOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTestResultDownloadURLResult> {
    return pulumi.output(args).apply((a: any) => getTestResultDownloadURL(a, opts))
}

export interface GetTestResultDownloadURLOutputArgs {
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
    /**
     * The Test Result Name. It equals to TestResult-{TestResultId} string.
     */
    testResultName: pulumi.Input<string>;
}