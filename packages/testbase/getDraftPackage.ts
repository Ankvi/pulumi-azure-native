import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a Test Base Draft Package.
 * Azure REST API version: 2023-11-01-preview.
 */
export function getDraftPackage(args: GetDraftPackageArgs, opts?: pulumi.InvokeOptions): Promise<GetDraftPackageResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:testbase:getDraftPackage", {
        "draftPackageName": args.draftPackageName,
        "resourceGroupName": args.resourceGroupName,
        "testBaseAccountName": args.testBaseAccountName,
    }, opts);
}

export interface GetDraftPackageArgs {
    /**
     * The resource name of the Test Base Draft Package.
     */
    draftPackageName: string;
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
 * The Test Base Draft Package resource.
 */
export interface GetDraftPackageResult {
    /**
     * The name of the app file.
     */
    readonly appFileName?: string;
    /**
     * Application name
     */
    readonly applicationName?: string;
    /**
     * Comments added by user.
     */
    readonly comments?: string;
    /**
     * The relative path of the folder hosting package files.
     */
    readonly draftPackagePath: string;
    /**
     * Specifies whether this draft package is used to edit a package.
     */
    readonly editPackage?: boolean;
    /**
     * The executable launch command for script auto-fill. Will be used to run the application.
     */
    readonly executableLaunchCommand?: string;
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
    readonly galleryApps?: types.outputs.GalleryAppDefinitionResponse[];
    /**
     * The highlight files in the package.
     */
    readonly highlightedFiles?: types.outputs.HighlightedFileResponse[];
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
     * Metadata used to generate draft package folder and scripts.
     */
    readonly intuneMetadata?: types.outputs.DraftPackageIntuneAppMetadataResponse;
    /**
     * The UTC timestamp when the package was last modified.
     */
    readonly lastModifiedTime: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Specifies the package id from which the draft package copied.
     */
    readonly packageId?: string;
    /**
     * Tags of the package to be created.
     */
    readonly packageTags?: {[key: string]: string};
    /**
     * The process name for script auto-fill. Will be used to identify the application process.
     */
    readonly processName?: string;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * The source type.
     */
    readonly sourceType?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Tab state.
     */
    readonly tabState?: types.outputs.TabStateResponse;
    /**
     * Specifies the target OSs of specific OS Update types.
     */
    readonly targetOSList?: types.outputs.TargetOSInfoResponse[];
    /**
     * OOB, functional or flow driven. Mapped to the data in 'tests' property.
     */
    readonly testTypes?: string[];
    /**
     * The detailed test information.
     */
    readonly tests?: types.outputs.TestResponse[];
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Indicates whether user choose to enable script auto-fill.
     */
    readonly useAutofill?: boolean;
    /**
     * Specifies whether a sample package should be used instead of the one uploaded by the user.
     */
    readonly useSample?: boolean;
    /**
     * Application version
     */
    readonly version?: string;
    /**
     * The relative path for a temporarily folder for package creation work.
     */
    readonly workingPath: string;
}
/**
 * Gets a Test Base Draft Package.
 * Azure REST API version: 2023-11-01-preview.
 */
export function getDraftPackageOutput(args: GetDraftPackageOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDraftPackageResult> {
    return pulumi.output(args).apply((a: any) => getDraftPackage(a, opts))
}

export interface GetDraftPackageOutputArgs {
    /**
     * The resource name of the Test Base Draft Package.
     */
    draftPackageName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The resource name of the Test Base Account.
     */
    testBaseAccountName: pulumi.Input<string>;
}
