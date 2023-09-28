import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a Package in Azure Security Insights.
 */
export class ContentPackage extends pulumi.CustomResource {
    /**
     * Get an existing ContentPackage resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ContentPackage {
        return new ContentPackage(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:securityinsights/v20230801preview:ContentPackage';

    /**
     * Returns true if the given object is an instance of ContentPackage.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ContentPackage {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ContentPackage.__pulumiType;
    }

    /**
     * The author of the package
     */
    public readonly author!: pulumi.Output<types.outputs.MetadataAuthorResponse | undefined>;
    /**
     * The categories of the package
     */
    public readonly categories!: pulumi.Output<types.outputs.MetadataCategoriesResponse | undefined>;
    /**
     * The content id of the package
     */
    public readonly contentId!: pulumi.Output<string>;
    /**
     * The package kind
     */
    public readonly contentKind!: pulumi.Output<string>;
    /**
     * Unique ID for the content. It should be generated based on the contentId, contentKind and the contentVersion of the package
     */
    public readonly contentProductId!: pulumi.Output<string>;
    /**
     * The version of the content schema.
     */
    public readonly contentSchemaVersion!: pulumi.Output<string | undefined>;
    /**
     * The support tier of the package
     */
    public readonly dependencies!: pulumi.Output<types.outputs.MetadataDependenciesResponse | undefined>;
    /**
     * The description of the package
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The display name of the package
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * Etag of the azure resource
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * first publish date package item
     */
    public readonly firstPublishDate!: pulumi.Output<string | undefined>;
    /**
     * the icon identifier. this id can later be fetched from the content metadata
     */
    public readonly icon!: pulumi.Output<string | undefined>;
    /**
     * Flag indicates if this package is among the featured list.
     */
    public readonly isFeatured!: pulumi.Output<string | undefined>;
    /**
     * Flag indicates if this is a newly published package.
     */
    public readonly isNew!: pulumi.Output<string | undefined>;
    /**
     * Flag indicates if this package is in preview.
     */
    public readonly isPreview!: pulumi.Output<string | undefined>;
    /**
     * last publish date for the package item
     */
    public readonly lastPublishDate!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Providers for the package item
     */
    public readonly providers!: pulumi.Output<string[] | undefined>;
    /**
     * The publisher display name of the package
     */
    public readonly publisherDisplayName!: pulumi.Output<string | undefined>;
    /**
     * The source of the package
     */
    public readonly source!: pulumi.Output<types.outputs.MetadataSourceResponse | undefined>;
    /**
     * The support tier of the package
     */
    public readonly support!: pulumi.Output<types.outputs.MetadataSupportResponse | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * the tactics the resource covers
     */
    public readonly threatAnalysisTactics!: pulumi.Output<string[] | undefined>;
    /**
     * the techniques the resource covers, these have to be aligned with the tactics being used
     */
    public readonly threatAnalysisTechniques!: pulumi.Output<string[] | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * the latest version number of the package
     */
    public readonly version!: pulumi.Output<string>;

    /**
     * Create a ContentPackage resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ContentPackageArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.contentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'contentId'");
            }
            if ((!args || args.contentKind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'contentKind'");
            }
            if ((!args || args.contentProductId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'contentProductId'");
            }
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.version === undefined) && !opts.urn) {
                throw new Error("Missing required property 'version'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["author"] = args ? args.author : undefined;
            resourceInputs["categories"] = args ? args.categories : undefined;
            resourceInputs["contentId"] = args ? args.contentId : undefined;
            resourceInputs["contentKind"] = args ? args.contentKind : undefined;
            resourceInputs["contentProductId"] = args ? args.contentProductId : undefined;
            resourceInputs["contentSchemaVersion"] = args ? args.contentSchemaVersion : undefined;
            resourceInputs["dependencies"] = args ? args.dependencies : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["firstPublishDate"] = args ? args.firstPublishDate : undefined;
            resourceInputs["icon"] = args ? args.icon : undefined;
            resourceInputs["isFeatured"] = args ? args.isFeatured : undefined;
            resourceInputs["isNew"] = args ? args.isNew : undefined;
            resourceInputs["isPreview"] = args ? args.isPreview : undefined;
            resourceInputs["lastPublishDate"] = args ? args.lastPublishDate : undefined;
            resourceInputs["packageId"] = args ? args.packageId : undefined;
            resourceInputs["providers"] = args ? args.providers : undefined;
            resourceInputs["publisherDisplayName"] = args ? args.publisherDisplayName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["source"] = args ? args.source : undefined;
            resourceInputs["support"] = args ? args.support : undefined;
            resourceInputs["threatAnalysisTactics"] = args ? args.threatAnalysisTactics : undefined;
            resourceInputs["threatAnalysisTechniques"] = args ? args.threatAnalysisTechniques : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["author"] = undefined /*out*/;
            resourceInputs["categories"] = undefined /*out*/;
            resourceInputs["contentId"] = undefined /*out*/;
            resourceInputs["contentKind"] = undefined /*out*/;
            resourceInputs["contentProductId"] = undefined /*out*/;
            resourceInputs["contentSchemaVersion"] = undefined /*out*/;
            resourceInputs["dependencies"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["firstPublishDate"] = undefined /*out*/;
            resourceInputs["icon"] = undefined /*out*/;
            resourceInputs["isFeatured"] = undefined /*out*/;
            resourceInputs["isNew"] = undefined /*out*/;
            resourceInputs["isPreview"] = undefined /*out*/;
            resourceInputs["lastPublishDate"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["providers"] = undefined /*out*/;
            resourceInputs["publisherDisplayName"] = undefined /*out*/;
            resourceInputs["source"] = undefined /*out*/;
            resourceInputs["support"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["threatAnalysisTactics"] = undefined /*out*/;
            resourceInputs["threatAnalysisTechniques"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:securityinsights:ContentPackage" }, { type: "azure-native:securityinsights/v20230401preview:ContentPackage" }, { type: "azure-native:securityinsights/v20230501preview:ContentPackage" }, { type: "azure-native:securityinsights/v20230601preview:ContentPackage" }, { type: "azure-native:securityinsights/v20230701preview:ContentPackage" }, { type: "azure-native:securityinsights/v20230901preview:ContentPackage" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ContentPackage.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ContentPackage resource.
 */
export interface ContentPackageArgs {
    /**
     * The author of the package
     */
    author?: pulumi.Input<types.inputs.MetadataAuthorArgs>;
    /**
     * The categories of the package
     */
    categories?: pulumi.Input<types.inputs.MetadataCategoriesArgs>;
    /**
     * The content id of the package
     */
    contentId: pulumi.Input<string>;
    /**
     * The package kind
     */
    contentKind: pulumi.Input<string | types.enums.PackageKind>;
    /**
     * Unique ID for the content. It should be generated based on the contentId, contentKind and the contentVersion of the package
     */
    contentProductId: pulumi.Input<string>;
    /**
     * The version of the content schema.
     */
    contentSchemaVersion?: pulumi.Input<string>;
    /**
     * The support tier of the package
     */
    dependencies?: pulumi.Input<types.inputs.MetadataDependenciesArgs>;
    /**
     * The description of the package
     */
    description?: pulumi.Input<string>;
    /**
     * The display name of the package
     */
    displayName: pulumi.Input<string>;
    /**
     * first publish date package item
     */
    firstPublishDate?: pulumi.Input<string>;
    /**
     * the icon identifier. this id can later be fetched from the content metadata
     */
    icon?: pulumi.Input<string>;
    /**
     * Flag indicates if this package is among the featured list.
     */
    isFeatured?: pulumi.Input<string | types.enums.Flag>;
    /**
     * Flag indicates if this is a newly published package.
     */
    isNew?: pulumi.Input<string | types.enums.Flag>;
    /**
     * Flag indicates if this package is in preview.
     */
    isPreview?: pulumi.Input<string | types.enums.Flag>;
    /**
     * last publish date for the package item
     */
    lastPublishDate?: pulumi.Input<string>;
    /**
     * package Id
     */
    packageId?: pulumi.Input<string>;
    /**
     * Providers for the package item
     */
    providers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The publisher display name of the package
     */
    publisherDisplayName?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The source of the package
     */
    source?: pulumi.Input<types.inputs.MetadataSourceArgs>;
    /**
     * The support tier of the package
     */
    support?: pulumi.Input<types.inputs.MetadataSupportArgs>;
    /**
     * the tactics the resource covers
     */
    threatAnalysisTactics?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * the techniques the resource covers, these have to be aligned with the tactics being used
     */
    threatAnalysisTechniques?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * the latest version number of the package
     */
    version: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}
