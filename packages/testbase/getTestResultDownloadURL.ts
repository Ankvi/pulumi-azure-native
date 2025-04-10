import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the download URL of the test result.
 *
 * Uses Azure REST API version 2022-04-01-preview.
 *
 * Other available API versions: 2023-11-01-preview.
 */
export function getTestResultDownloadURL(args: GetTestResultDownloadURLArgs, opts?: pulumi.InvokeOptions): Promise<GetTestResultDownloadURLResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:testbase:getTestResultDownloadURL", {
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
     * The name of the resource group that contains the resource.
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
 *
 * Uses Azure REST API version 2022-04-01-preview.
 *
 * Other available API versions: 2023-11-01-preview.
 */
export function getTestResultDownloadURLOutput(args: GetTestResultDownloadURLOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetTestResultDownloadURLResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:testbase:getTestResultDownloadURL", {
        "packageName": args.packageName,
        "resourceGroupName": args.resourceGroupName,
        "testBaseAccountName": args.testBaseAccountName,
        "testResultName": args.testResultName,
    }, opts);
}

export interface GetTestResultDownloadURLOutputArgs {
    /**
     * The resource name of the Test Base Package.
     */
    packageName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource.
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