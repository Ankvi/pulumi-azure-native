import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Returns a file test result for the matching test
 * Azure REST API version: 2020-02-10-preview.
 */
export function getTestResultFile(args: GetTestResultFileArgs, opts?: pulumi.InvokeOptions): Promise<GetTestResultFileResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:insights:getTestResultFile", {
        "continuationToken": args.continuationToken,
        "downloadAs": args.downloadAs,
        "geoLocationId": args.geoLocationId,
        "resourceGroupName": args.resourceGroupName,
        "testSuccessfulCriteria": args.testSuccessfulCriteria,
        "timeStamp": args.timeStamp,
        "webTestName": args.webTestName,
    }, opts);
}

export interface GetTestResultFileArgs {
    /**
     * The continuation token.
     */
    continuationToken?: string;
    /**
     * The format to use when returning the webtest result.
     */
    downloadAs: string;
    /**
     * The location ID where the webtest was physically run.
     */
    geoLocationId: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The success state criteria for the webtest result.
     */
    testSuccessfulCriteria?: boolean;
    /**
     * The posix (epoch) time stamp for the webtest result.
     */
    timeStamp: number;
    /**
     * The name of the Application Insights webtest resource.
     */
    webTestName: string;
}

/**
 * Test result.
 */
export interface GetTestResultFileResult {
    /**
     * File contents.
     */
    readonly data?: string;
    /**
     * The URI that can be used to request the next section of the result file in the event the file is too large for a single request.
     */
    readonly nextLink?: string;
}
/**
 * Returns a file test result for the matching test
 * Azure REST API version: 2020-02-10-preview.
 */
export function getTestResultFileOutput(args: GetTestResultFileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTestResultFileResult> {
    return pulumi.output(args).apply((a: any) => getTestResultFile(a, opts))
}

export interface GetTestResultFileOutputArgs {
    /**
     * The continuation token.
     */
    continuationToken?: pulumi.Input<string>;
    /**
     * The format to use when returning the webtest result.
     */
    downloadAs: pulumi.Input<string>;
    /**
     * The location ID where the webtest was physically run.
     */
    geoLocationId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The success state criteria for the webtest result.
     */
    testSuccessfulCriteria?: pulumi.Input<boolean>;
    /**
     * The posix (epoch) time stamp for the webtest result.
     */
    timeStamp: pulumi.Input<number>;
    /**
     * The name of the Application Insights webtest resource.
     */
    webTestName: pulumi.Input<string>;
}
