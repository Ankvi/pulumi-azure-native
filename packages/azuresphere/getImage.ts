import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Image
 *
 * Uses Azure REST API version 2022-09-01-preview.
 *
 * Other available API versions: 2024-04-01.
 */
export function getImage(args: GetImageArgs, opts?: pulumi.InvokeOptions): Promise<GetImageResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azuresphere:getImage", {
        "catalogName": args.catalogName,
        "imageName": args.imageName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetImageArgs {
    /**
     * Name of catalog
     */
    catalogName: string;
    /**
     * Image name. Use an image GUID for GA versions of the API.
     */
    imageName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * An image resource belonging to a catalog resource.
 */
export interface GetImageResult {
    /**
     * The image component id.
     */
    readonly componentId: string;
    /**
     * The image description.
     */
    readonly description: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Image as a UTF-8 encoded base 64 string on image create. This field contains the image URI on image reads.
     */
    readonly image?: string;
    /**
     * Image ID
     */
    readonly imageId?: string;
    /**
     * Image name
     */
    readonly imageName: string;
    /**
     * The image type.
     */
    readonly imageType: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The status of the last operation.
     */
    readonly provisioningState: string;
    /**
     * Regional data boundary for an image
     */
    readonly regionalDataBoundary?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Location the image
     */
    readonly uri: string;
}
/**
 * Get a Image
 *
 * Uses Azure REST API version 2022-09-01-preview.
 *
 * Other available API versions: 2024-04-01.
 */
export function getImageOutput(args: GetImageOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetImageResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:azuresphere:getImage", {
        "catalogName": args.catalogName,
        "imageName": args.imageName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetImageOutputArgs {
    /**
     * Name of catalog
     */
    catalogName: pulumi.Input<string>;
    /**
     * Image name. Use an image GUID for GA versions of the API.
     */
    imageName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}