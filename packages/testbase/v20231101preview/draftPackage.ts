import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The Test Base Draft Package resource.
 */
export class DraftPackage extends pulumi.CustomResource {
    /**
     * Get an existing DraftPackage resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DraftPackage {
        return new DraftPackage(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:testbase/v20231101preview:DraftPackage';

    /**
     * Returns true if the given object is an instance of DraftPackage.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DraftPackage {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DraftPackage.__pulumiType;
    }

    /**
     * The name of the app file.
     */
    public readonly appFileName!: pulumi.Output<string | undefined>;
    /**
     * Application name
     */
    public readonly applicationName!: pulumi.Output<string | undefined>;
    /**
     * Comments added by user.
     */
    public readonly comments!: pulumi.Output<string | undefined>;
    /**
     * The relative path of the folder hosting package files.
     */
    public /*out*/ readonly draftPackagePath!: pulumi.Output<string>;
    /**
     * Specifies whether this draft package is used to edit a package.
     */
    public readonly editPackage!: pulumi.Output<boolean | undefined>;
    /**
     * The executable launch command for script auto-fill. Will be used to run the application.
     */
    public readonly executableLaunchCommand!: pulumi.Output<string | undefined>;
    /**
     * The list of first party applications to test along with user application.
     */
    public readonly firstPartyApps!: pulumi.Output<types.outputs.FirstPartyAppDefinitionResponse[] | undefined>;
    /**
     * The flighting ring for feature update.
     */
    public readonly flightingRing!: pulumi.Output<string | undefined>;
    /**
     * The list of gallery apps to test along with user application.
     */
    public readonly galleryApps!: pulumi.Output<types.outputs.GalleryAppDefinitionResponse[] | undefined>;
    /**
     * The highlight files in the package.
     */
    public readonly highlightedFiles!: pulumi.Output<types.outputs.HighlightedFileResponse[] | undefined>;
    /**
     * Specifies the baseline os and target os for inplace upgrade.
     */
    public readonly inplaceUpgradeOSPair!: pulumi.Output<types.outputs.InplaceUpgradeOSInfoResponse | undefined>;
    /**
     * The metadata of Intune enrollment.
     */
    public readonly intuneEnrollmentMetadata!: pulumi.Output<types.outputs.IntuneEnrollmentMetadataResponse | undefined>;
    /**
     * Metadata used to generate draft package folder and scripts.
     */
    public readonly intuneMetadata!: pulumi.Output<types.outputs.DraftPackageIntuneAppMetadataResponse | undefined>;
    /**
     * The UTC timestamp when the package was last modified.
     */
    public /*out*/ readonly lastModifiedTime!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Specifies the package id from which the draft package copied.
     */
    public readonly packageId!: pulumi.Output<string | undefined>;
    /**
     * Tags of the package to be created.
     */
    public readonly packageTags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The process name for script auto-fill. Will be used to identify the application process.
     */
    public readonly processName!: pulumi.Output<string | undefined>;
    /**
     * The provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The source type.
     */
    public readonly sourceType!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Tab state.
     */
    public readonly tabState!: pulumi.Output<types.outputs.TabStateResponse | undefined>;
    /**
     * Specifies the target OSs of specific OS Update types.
     */
    public readonly targetOSList!: pulumi.Output<types.outputs.TargetOSInfoResponse[] | undefined>;
    /**
     * OOB, functional or flow driven. Mapped to the data in 'tests' property.
     */
    public readonly testTypes!: pulumi.Output<string[] | undefined>;
    /**
     * The detailed test information.
     */
    public readonly tests!: pulumi.Output<types.outputs.TestResponse[] | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Indicates whether user choose to enable script auto-fill.
     */
    public readonly useAutofill!: pulumi.Output<boolean | undefined>;
    /**
     * Specifies whether a sample package should be used instead of the one uploaded by the user.
     */
    public readonly useSample!: pulumi.Output<boolean | undefined>;
    /**
     * Application version
     */
    public readonly version!: pulumi.Output<string | undefined>;
    /**
     * The relative path for a temporarily folder for package creation work.
     */
    public /*out*/ readonly workingPath!: pulumi.Output<string>;

    /**
     * Create a DraftPackage resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DraftPackageArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.testBaseAccountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'testBaseAccountName'");
            }
            resourceInputs["appFileName"] = args ? args.appFileName : undefined;
            resourceInputs["applicationName"] = args ? args.applicationName : undefined;
            resourceInputs["comments"] = args ? args.comments : undefined;
            resourceInputs["draftPackageName"] = args ? args.draftPackageName : undefined;
            resourceInputs["editPackage"] = (args ? args.editPackage : undefined) ?? false;
            resourceInputs["executableLaunchCommand"] = args ? args.executableLaunchCommand : undefined;
            resourceInputs["firstPartyApps"] = args ? args.firstPartyApps : undefined;
            resourceInputs["flightingRing"] = args ? args.flightingRing : undefined;
            resourceInputs["galleryApps"] = args ? args.galleryApps : undefined;
            resourceInputs["highlightedFiles"] = args ? args.highlightedFiles : undefined;
            resourceInputs["inplaceUpgradeOSPair"] = args ? args.inplaceUpgradeOSPair : undefined;
            resourceInputs["intuneEnrollmentMetadata"] = args ? args.intuneEnrollmentMetadata : undefined;
            resourceInputs["intuneMetadata"] = args ? args.intuneMetadata : undefined;
            resourceInputs["packageId"] = args ? args.packageId : undefined;
            resourceInputs["packageTags"] = args ? args.packageTags : undefined;
            resourceInputs["processName"] = args ? args.processName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sourceType"] = (args ? args.sourceType : undefined) ?? "Native";
            resourceInputs["tabState"] = args ? args.tabState : undefined;
            resourceInputs["targetOSList"] = args ? args.targetOSList : undefined;
            resourceInputs["testBaseAccountName"] = args ? args.testBaseAccountName : undefined;
            resourceInputs["testTypes"] = args ? args.testTypes : undefined;
            resourceInputs["tests"] = args ? args.tests : undefined;
            resourceInputs["useAutofill"] = args ? args.useAutofill : undefined;
            resourceInputs["useSample"] = args ? args.useSample : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["draftPackagePath"] = undefined /*out*/;
            resourceInputs["lastModifiedTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["workingPath"] = undefined /*out*/;
        } else {
            resourceInputs["appFileName"] = undefined /*out*/;
            resourceInputs["applicationName"] = undefined /*out*/;
            resourceInputs["comments"] = undefined /*out*/;
            resourceInputs["draftPackagePath"] = undefined /*out*/;
            resourceInputs["editPackage"] = undefined /*out*/;
            resourceInputs["executableLaunchCommand"] = undefined /*out*/;
            resourceInputs["firstPartyApps"] = undefined /*out*/;
            resourceInputs["flightingRing"] = undefined /*out*/;
            resourceInputs["galleryApps"] = undefined /*out*/;
            resourceInputs["highlightedFiles"] = undefined /*out*/;
            resourceInputs["inplaceUpgradeOSPair"] = undefined /*out*/;
            resourceInputs["intuneEnrollmentMetadata"] = undefined /*out*/;
            resourceInputs["intuneMetadata"] = undefined /*out*/;
            resourceInputs["lastModifiedTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["packageId"] = undefined /*out*/;
            resourceInputs["packageTags"] = undefined /*out*/;
            resourceInputs["processName"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sourceType"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tabState"] = undefined /*out*/;
            resourceInputs["targetOSList"] = undefined /*out*/;
            resourceInputs["testTypes"] = undefined /*out*/;
            resourceInputs["tests"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["useAutofill"] = undefined /*out*/;
            resourceInputs["useSample"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
            resourceInputs["workingPath"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:testbase:DraftPackage" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DraftPackage.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DraftPackage resource.
 */
export interface DraftPackageArgs {
    /**
     * The name of the app file.
     */
    appFileName?: pulumi.Input<string>;
    /**
     * Application name
     */
    applicationName?: pulumi.Input<string>;
    /**
     * Comments added by user.
     */
    comments?: pulumi.Input<string>;
    /**
     * The resource name of the Test Base Draft Package.
     */
    draftPackageName?: pulumi.Input<string>;
    /**
     * Specifies whether this draft package is used to edit a package.
     */
    editPackage?: pulumi.Input<boolean>;
    /**
     * The executable launch command for script auto-fill. Will be used to run the application.
     */
    executableLaunchCommand?: pulumi.Input<string>;
    /**
     * The list of first party applications to test along with user application.
     */
    firstPartyApps?: pulumi.Input<pulumi.Input<types.inputs.FirstPartyAppDefinitionArgs>[]>;
    /**
     * The flighting ring for feature update.
     */
    flightingRing?: pulumi.Input<string>;
    /**
     * The list of gallery apps to test along with user application.
     */
    galleryApps?: pulumi.Input<pulumi.Input<types.inputs.GalleryAppDefinitionArgs>[]>;
    /**
     * The highlight files in the package.
     */
    highlightedFiles?: pulumi.Input<pulumi.Input<types.inputs.HighlightedFileArgs>[]>;
    /**
     * Specifies the baseline os and target os for inplace upgrade.
     */
    inplaceUpgradeOSPair?: pulumi.Input<types.inputs.InplaceUpgradeOSInfoArgs>;
    /**
     * The metadata of Intune enrollment.
     */
    intuneEnrollmentMetadata?: pulumi.Input<types.inputs.IntuneEnrollmentMetadataArgs>;
    /**
     * Metadata used to generate draft package folder and scripts.
     */
    intuneMetadata?: pulumi.Input<types.inputs.DraftPackageIntuneAppMetadataArgs>;
    /**
     * Specifies the package id from which the draft package copied.
     */
    packageId?: pulumi.Input<string>;
    /**
     * Tags of the package to be created.
     */
    packageTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The process name for script auto-fill. Will be used to identify the application process.
     */
    processName?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The source type.
     */
    sourceType?: pulumi.Input<string | types.enums.DraftPackageSourceType>;
    /**
     * Tab state.
     */
    tabState?: pulumi.Input<types.inputs.TabStateArgs>;
    /**
     * Specifies the target OSs of specific OS Update types.
     */
    targetOSList?: pulumi.Input<pulumi.Input<types.inputs.TargetOSInfoArgs>[]>;
    /**
     * The resource name of the Test Base Account.
     */
    testBaseAccountName: pulumi.Input<string>;
    /**
     * OOB, functional or flow driven. Mapped to the data in 'tests' property.
     */
    testTypes?: pulumi.Input<pulumi.Input<string | types.enums.TestType>[]>;
    /**
     * The detailed test information.
     */
    tests?: pulumi.Input<pulumi.Input<types.inputs.TestArgs>[]>;
    /**
     * Indicates whether user choose to enable script auto-fill.
     */
    useAutofill?: pulumi.Input<boolean>;
    /**
     * Specifies whether a sample package should be used instead of the one uploaded by the user.
     */
    useSample?: pulumi.Input<boolean>;
    /**
     * Application version
     */
    version?: pulumi.Input<string>;
}
