import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the file upload URL of a Test Base Account.
 */
export function getTestBaseAccountFileUploadUrl(args: GetTestBaseAccountFileUploadUrlArgs, opts?: pulumi.InvokeOptions): Promise<GetTestBaseAccountFileUploadUrlResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:testbase/v20231101preview:getTestBaseAccountFileUploadUrl", {
        "blobName": args.blobName,
        "resourceGroupName": args.resourceGroupName,
        "resourceType": args.resourceType,
        "testBaseAccountName": args.testBaseAccountName,
    }, opts);
}

export interface GetTestBaseAccountFileUploadUrlArgs {
    /**
     * The custom file name of the uploaded blob.
     */
    blobName?: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Resource type for file uploading.
     */
    resourceType?: string | types.enums.FileUploadResourceType;
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
 */
export function getTestBaseAccountFileUploadUrlOutput(args: GetTestBaseAccountFileUploadUrlOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTestBaseAccountFileUploadUrlResult> {
    return pulumi.output(args).apply((a: any) => getTestBaseAccountFileUploadUrl(a, opts))
}

export interface GetTestBaseAccountFileUploadUrlOutputArgs {
    /**
     * The custom file name of the uploaded blob.
     */
    blobName?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource type for file uploading.
     */
    resourceType?: pulumi.Input<string | types.enums.FileUploadResourceType>;
    /**
     * The resource name of the Test Base Account.
     */
    testBaseAccountName: pulumi.Input<string>;
}
