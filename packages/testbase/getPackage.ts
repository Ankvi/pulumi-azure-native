import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a Test Base Package.
 *
 * Uses Azure REST API version 2023-11-01-preview.
 *
 * Other available API versions: 2022-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native testbase [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getPackage(args: GetPackageArgs, opts?: pulumi.InvokeOptions): Promise<GetPackageResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:testbase:getPackage", {
        "packageName": args.packageName,
        "resourceGroupName": args.resourceGroupName,
        "testBaseAccountName": args.testBaseAccountName,
    }, opts);
}

export interface GetPackageArgs {
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
 * The Test Base Package resource.
 */
export interface GetPackageResult {
    /**
     * Application name
     */
    readonly applicationName: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The file path of the package.
     */
    readonly blobPath?: string;
    /**
     * The id of draft package. Used to create or update this package from a draft package.
     */
    readonly draftPackageId?: string;
    /**
     * The list of first party applications to test along with user application.
     */
    readonly firstPartyApps?: types.outputs.FirstPartyAppDefinitionResponse[];
    /**
     * The flighting ring for feature update.
     */
    readonly flightingRing?: string;
    /**
     * The list of gallery apps to test along with user application.
     */
    readonly galleryApps: types.outputs.GalleryAppDefinitionResponse[];
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Specifies the baseline os and target os for inplace upgrade.
     */
    readonly inplaceUpgradeOSPair?: types.outputs.InplaceUpgradeOSInfoResponse;
    /**
     * The metadata of Intune enrollment.
     */
    readonly intuneEnrollmentMetadata?: types.outputs.IntuneEnrollmentMetadataResponse;
    /**
     * Flag showing that whether the package is enabled. It doesn't schedule test for package which is not enabled.
     */
    readonly isEnabled: boolean;
    /**
     * The UTC timestamp when the package was last modified.
     */
    readonly lastModifiedTime: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The status of the package.
     */
    readonly packageStatus: string;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Specifies the target OSs of specific OS Update types.
     */
    readonly targetOSList?: types.outputs.TargetOSInfoResponse[];
    /**
     * OOB, functional or flow driven. Mapped to the data in 'tests' property.
     */
    readonly testTypes: string[];
    /**
     * The detailed test information.
     */
    readonly tests?: types.outputs.TestResponse[];
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * The validation results. There's validation on package when it's created or updated.
     */
    readonly validationResults: types.outputs.PackageValidationResultResponse[];
    /**
     * Application version
     */
    readonly version: string;
}
/**
 * Gets a Test Base Package.
 *
 * Uses Azure REST API version 2023-11-01-preview.
 *
 * Other available API versions: 2022-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native testbase [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getPackageOutput(args: GetPackageOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPackageResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:testbase:getPackage", {
        "packageName": args.packageName,
        "resourceGroupName": args.resourceGroupName,
        "testBaseAccountName": args.testBaseAccountName,
    }, opts);
}

export interface GetPackageOutputArgs {
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