import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the file upload URL of a Test Base Account.
 *
 * Uses Azure REST API version 2022-04-01-preview.
 *
 * Other available API versions: 2023-11-01-preview.
 */
export function getTestBaseAccountFileUploadUrl(args: GetTestBaseAccountFileUploadUrlArgs, opts?: pulumi.InvokeOptions): Promise<GetTestBaseAccountFileUploadUrlResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:testbase:getTestBaseAccountFileUploadUrl", {
        "blobName": args.blobName,
        "resourceGroupName": args.resourceGroupName,
        "testBaseAccountName": args.testBaseAccountName,
    }, opts);
}

export interface GetTestBaseAccountFileUploadUrlArgs {
    /**
     * The custom file name of the uploaded blob.
     */
    blobName?: string;
    /**
     * The name of the resource group that contains the resource.
     */
    resourceGroupName: string;
    /**
     * The resource name of the Test Base Account.
     */
    testBaseAccountName: string;
}

/**
 * The URL response
 */
export interface GetTestBaseAccountFileUploadUrlResult {
    /**
     * The blob path of the uploaded package. It will be used as the 'blobPath' property of PackageResource.
     */
    readonly blobPath: string;
    /**
     * The URL used for uploading the package.
     */
    readonly uploadUrl: string;
}
/**
 * Gets the file upload URL of a Test Base Account.
 *
 * Uses Azure REST API version 2022-04-01-preview.
 *
 * Other available API versions: 2023-11-01-preview.
 */
export function getTestBaseAccountFileUploadUrlOutput(args: GetTestBaseAccountFileUploadUrlOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetTestBaseAccountFileUploadUrlResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:testbase:getTestBaseAccountFileUploadUrl", {
        "blobName": args.blobName,
        "resourceGroupName": args.resourceGroupName,
        "testBaseAccountName": args.testBaseAccountName,
    }, opts);
}

export interface GetTestBaseAccountFileUploadUrlOutputArgs {
    /**
     * The custom file name of the uploaded blob.
     */
    blobName?: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The resource name of the Test Base Account.
     */
    testBaseAccountName: pulumi.Input<string>;
}