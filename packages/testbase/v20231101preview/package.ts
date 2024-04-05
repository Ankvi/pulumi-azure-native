import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The Test Base Package resource.
 */
export class Package extends pulumi.CustomResource {
    /**
     * Get an existing Package resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Package {
        return new Package(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:testbase/v20231101preview:Package';

    /**
     * Returns true if the given object is an instance of Package.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Package {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Package.__pulumiType;
    }

    /**
     * Application name
     */
    public readonly applicationName!: pulumi.Output<string>;
    /**
     * The file path of the package.
     */
    public readonly blobPath!: pulumi.Output<string | undefined>;
    /**
     * The id of draft package. Used to create or update this package from a draft package.
     */
    public readonly draftPackageId!: pulumi.Output<string | undefined>;
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
    public /*out*/ readonly galleryApps!: pulumi.Output<types.outputs.GalleryAppDefinitionResponse[]>;
    /**
     * Specifies the baseline os and target os for inplace upgrade.
     */
    public readonly inplaceUpgradeOSPair!: pulumi.Output<types.outputs.InplaceUpgradeOSInfoResponse | undefined>;
    /**
     * The metadata of Intune enrollment.
     */
    public readonly intuneEnrollmentMetadata!: pulumi.Output<types.outputs.IntuneEnrollmentMetadataResponse | undefined>;
    /**
     * Flag showing that whether the package is enabled. It doesn't schedule test for package which is not enabled.
     */
    public /*out*/ readonly isEnabled!: pulumi.Output<boolean>;
    /**
     * The UTC timestamp when the package was last modified.
     */
    public /*out*/ readonly lastModifiedTime!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The status of the package.
     */
    public /*out*/ readonly packageStatus!: pulumi.Output<string>;
    /**
     * The provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Specifies the target OSs of specific OS Update types.
     */
    public readonly targetOSList!: pulumi.Output<types.outputs.TargetOSInfoResponse[] | undefined>;
    /**
     * OOB, functional or flow driven. Mapped to the data in 'tests' property.
     */
    public /*out*/ readonly testTypes!: pulumi.Output<string[]>;
    /**
     * The detailed test information.
     */
    public readonly tests!: pulumi.Output<types.outputs.TestResponse[] | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The validation results. There's validation on package when it's created or updated.
     */
    public /*out*/ readonly validationResults!: pulumi.Output<types.outputs.PackageValidationResultResponse[]>;
    /**
     * Application version
     */
    public readonly version!: pulumi.Output<string>;

    /**
     * Create a Package resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PackageArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.applicationName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'applicationName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.testBaseAccountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'testBaseAccountName'");
            }
            if ((!args || args.version === undefined) && !opts.urn) {
                throw new Error("Missing required property 'version'");
            }
            resourceInputs["applicationName"] = args ? args.applicationName : undefined;
            resourceInputs["blobPath"] = args ? args.blobPath : undefined;
            resourceInputs["draftPackageId"] = args ? args.draftPackageId : undefined;
            resourceInputs["firstPartyApps"] = args ? args.firstPartyApps : undefined;
            resourceInputs["flightingRing"] = args ? args.flightingRing : undefined;
            resourceInputs["inplaceUpgradeOSPair"] = args ? args.inplaceUpgradeOSPair : undefined;
            resourceInputs["intuneEnrollmentMetadata"] = args ? args.intuneEnrollmentMetadata : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["packageName"] = args ? args.packageName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["targetOSList"] = args ? args.targetOSList : undefined;
            resourceInputs["testBaseAccountName"] = args ? args.testBaseAccountName : undefined;
            resourceInputs["tests"] = args ? args.tests : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["galleryApps"] = undefined /*out*/;
            resourceInputs["isEnabled"] = undefined /*out*/;
            resourceInputs["lastModifiedTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["packageStatus"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["testTypes"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["validationResults"] = undefined /*out*/;
        } else {
            resourceInputs["applicationName"] = undefined /*out*/;
            resourceInputs["blobPath"] = undefined /*out*/;
            resourceInputs["draftPackageId"] = undefined /*out*/;
            resourceInputs["firstPartyApps"] = undefined /*out*/;
            resourceInputs["flightingRing"] = undefined /*out*/;
            resourceInputs["galleryApps"] = undefined /*out*/;
            resourceInputs["inplaceUpgradeOSPair"] = undefined /*out*/;
            resourceInputs["intuneEnrollmentMetadata"] = undefined /*out*/;
            resourceInputs["isEnabled"] = undefined /*out*/;
            resourceInputs["lastModifiedTime"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["packageStatus"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["targetOSList"] = undefined /*out*/;
            resourceInputs["testTypes"] = undefined /*out*/;
            resourceInputs["tests"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["validationResults"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:testbase:Package" }, { type: "azure-native:testbase/v20201216preview:Package" }, { type: "azure-native:testbase/v20220401preview:Package" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Package.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Package resource.
 */
export interface PackageArgs {
    /**
     * Application name
     */
    applicationName: pulumi.Input<string>;
    /**
     * The file path of the package.
     */
    blobPath?: pulumi.Input<string>;
    /**
     * The id of draft package. Used to create or update this package from a draft package.
     */
    draftPackageId?: pulumi.Input<string>;
    /**
     * The list of first party applications to test along with user application.
     */
    firstPartyApps?: pulumi.Input<pulumi.Input<types.inputs.FirstPartyAppDefinitionArgs>[]>;
    /**
     * The flighting ring for feature update.
     */
    flightingRing?: pulumi.Input<string>;
    /**
     * Specifies the baseline os and target os for inplace upgrade.
     */
    inplaceUpgradeOSPair?: pulumi.Input<types.inputs.InplaceUpgradeOSInfoArgs>;
    /**
     * The metadata of Intune enrollment.
     */
    intuneEnrollmentMetadata?: pulumi.Input<types.inputs.IntuneEnrollmentMetadataArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The resource name of the Test Base Package.
     */
    packageName?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Specifies the target OSs of specific OS Update types.
     */
    targetOSList?: pulumi.Input<pulumi.Input<types.inputs.TargetOSInfoArgs>[]>;
    /**
     * The resource name of the Test Base Account.
     */
    testBaseAccountName: pulumi.Input<string>;
    /**
     * The detailed test information.
     */
    tests?: pulumi.Input<pulumi.Input<types.inputs.TestArgs>[]>;
    /**
     * Application version
     */
    version: pulumi.Input<string>;
}