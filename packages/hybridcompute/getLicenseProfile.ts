import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves information about the view of a license profile.
 *
 * Uses Azure REST API version 2024-07-10.
 *
 * Other available API versions: 2023-06-20-preview, 2023-10-03-preview, 2024-03-31-preview, 2024-05-20-preview, 2024-07-31-preview, 2024-09-10-preview, 2024-11-10-preview, 2025-01-13, 2025-02-19-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native hybridcompute [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getLicenseProfile(args: GetLicenseProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetLicenseProfileResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridcompute:getLicenseProfile", {
        "licenseProfileName": args.licenseProfileName,
        "machineName": args.machineName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLicenseProfileArgs {
    /**
     * The name of the license profile.
     */
    licenseProfileName: string;
    /**
     * The name of the hybrid machine.
     */
    machineName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Describes a license profile in a hybrid machine.
 */
export interface GetLicenseProfileResult {
    /**
     * The resource id of the license.
     */
    readonly assignedLicense?: string;
    /**
     * The guid id of the license.
     */
    readonly assignedLicenseImmutableId: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The timestamp in UTC when the billing ends.
     */
    readonly billingEndDate: string;
    /**
     * The timestamp in UTC when the billing starts.
     */
    readonly billingStartDate: string;
    /**
     * The timestamp in UTC when the user disenrolled the feature.
     */
    readonly disenrollmentDate: string;
    /**
     * The timestamp in UTC when the user enrolls the feature.
     */
    readonly enrollmentDate: string;
    /**
     * The errors that were encountered during the feature enrollment or disenrollment.
     */
    readonly error: types.outputs.ErrorDetailResponse;
    /**
     * Indicates the eligibility state of Esu.
     */
    readonly esuEligibility: string;
    /**
     * Indicates whether there is an ESU Key currently active for the machine.
     */
    readonly esuKeyState: string;
    /**
     * The list of ESU keys.
     */
    readonly esuKeys: types.outputs.EsuKeyResponse[];
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The list of product features.
     */
    readonly productFeatures?: types.outputs.ProductFeatureResponse[];
    /**
     * Indicates the product type of the license.
     */
    readonly productType?: string;
    /**
     * The provisioning state, which only appears in the response.
     */
    readonly provisioningState: string;
    /**
     * The type of the Esu servers.
     */
    readonly serverType: string;
    /**
     * Specifies if this machine is licensed as part of a Software Assurance agreement.
     */
    readonly softwareAssuranceCustomer?: boolean;
    /**
     * Indicates the subscription status of the product.
     */
    readonly subscriptionStatus?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Retrieves information about the view of a license profile.
 *
 * Uses Azure REST API version 2024-07-10.
 *
 * Other available API versions: 2023-06-20-preview, 2023-10-03-preview, 2024-03-31-preview, 2024-05-20-preview, 2024-07-31-preview, 2024-09-10-preview, 2024-11-10-preview, 2025-01-13, 2025-02-19-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native hybridcompute [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getLicenseProfileOutput(args: GetLicenseProfileOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetLicenseProfileResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:hybridcompute:getLicenseProfile", {
        "licenseProfileName": args.licenseProfileName,
        "machineName": args.machineName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLicenseProfileOutputArgs {
    /**
     * The name of the license profile.
     */
    licenseProfileName: pulumi.Input<string>;
    /**
     * The name of the hybrid machine.
     */
    machineName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}