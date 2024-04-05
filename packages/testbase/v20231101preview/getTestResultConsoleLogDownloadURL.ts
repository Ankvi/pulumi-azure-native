import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the download URL of the test execution console log file.
 */
export function getTestResultConsoleLogDownloadURL(args: GetTestResultConsoleLogDownloadURLArgs, opts?: pulumi.InvokeOptions): Promise<GetTestResultConsoleLogDownloadURLResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:testbase/v20231101preview:getTestResultConsoleLogDownloadURL", {
        "logFileName": args.logFileName,
        "packageName": args.packageName,
        "resourceGroupName": args.resourceGroupName,
        "testBaseAccountName": args.testBaseAccountName,
        "testResultName": args.testResultName,
    }, opts);
}

export interface GetTestResultConsoleLogDownloadURLArgs {
    /**
     * The log file name corresponding to the download URL.
     */
    logFileName: string;
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
export interface GetTestResultConsoleLogDownloadURLResult {
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
 * Gets the download URL of the test execution console log file.
 */
export function getTestResultConsoleLogDownloadURLOutput(args: GetTestResultConsoleLogDownloadURLOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTestResultConsoleLogDownloadURLResult> {
    return pulumi.output(args).apply((a: any) => getTestResultConsoleLogDownloadURL(a, opts))
}

export interface GetTestResultConsoleLogDownloadURLOutputArgs {
    /**
     * The log file name corresponding to the download URL.
     */
    logFileName: pulumi.Input<string>;
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