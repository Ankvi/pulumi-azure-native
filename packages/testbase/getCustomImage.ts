import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a test base custom image.
 * Azure REST API version: 2023-11-01-preview.
 */
export function getCustomImage(args: GetCustomImageArgs, opts?: pulumi.InvokeOptions): Promise<GetCustomImageResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:testbase:getCustomImage", {
        "customImageName": args.customImageName,
        "resourceGroupName": args.resourceGroupName,
        "testBaseAccountName": args.testBaseAccountName,
    }, opts);
}

export interface GetCustomImageArgs {
    /**
     * The resource name of the test base custom image.
     */
    customImageName: string;
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
 * The test base custom image resource.
 */
export interface GetCustomImageResult {
    /**
     * The UTC timestamp when the custom image was published.
     */
    readonly creationTime: string;
    /**
     * Image definition name.
     */
    readonly definitionName: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * This property indicates the size of the VHD to be created.
     */
    readonly osDiskImageSizeInGB: number;
    /**
     * Product of the custom image.
     */
    readonly product: string;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Release of the custom image OS.
     */
    readonly release: string;
    /**
     * The release version date of the release of the custom image OS.
     */
    readonly releaseVersionDate: string;
    /**
     * Custom image source type.
     */
    readonly source: string;
    /**
     * Status of the custom image.
     */
    readonly status: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * The validation result of the custom image.
     */
    readonly validationResults: types.outputs.ImageValidationResultsResponse;
    /**
     * Image version name.
     */
    readonly versionName: string;
    /**
     * The file name of the associated VHD resource.
     */
    readonly vhdFileName: string;
    /**
     * The Id of the associated VHD resource.
     */
    readonly vhdId?: string;
}
/**
 * Gets a test base custom image.
 * Azure REST API version: 2023-11-01-preview.
 */
export function getCustomImageOutput(args: GetCustomImageOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCustomImageResult> {
    return pulumi.output(args).apply((a: any) => getCustomImage(a, opts))
}

export interface GetCustomImageOutputArgs {
    /**
     * The resource name of the test base custom image.
     */
    customImageName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The resource name of the Test Base Account.
     */
    testBaseAccountName: pulumi.Input<string>;
}