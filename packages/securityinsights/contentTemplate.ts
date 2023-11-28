import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Template resource definition.
 * Azure REST API version: 2023-06-01-preview.
 *
 * Other available API versions: 2023-07-01-preview, 2023-08-01-preview, 2023-09-01-preview, 2023-10-01-preview.
 */
export class ContentTemplate extends pulumi.CustomResource {
    /**
     * Get an existing ContentTemplate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ContentTemplate {
        return new ContentTemplate(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:securityinsights:ContentTemplate';

    /**
     * Returns true if the given object is an instance of ContentTemplate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ContentTemplate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ContentTemplate.__pulumiType;
    }

    /**
     * The creator of the content item.
     */
    public readonly author!: pulumi.Output<types.outputs.MetadataAuthorResponse | undefined>;
    /**
     * Categories for the item
     */
    public readonly categories!: pulumi.Output<types.outputs.MetadataCategoriesResponse | undefined>;
    /**
     * Static ID for the content.  Used to identify dependencies and content from solutions or community.  Hard-coded/static for out of the box content and solutions. Dynamic for user-created.  This is the resource name
     */
    public readonly contentId!: pulumi.Output<string>;
    /**
     * The kind of content the template is for.
     */
    public readonly contentKind!: pulumi.Output<string>;
    /**
     * Schema version of the content. Can be used to distinguish between different flow based on the schema version
     */
    public readonly contentSchemaVersion!: pulumi.Output<string | undefined>;
    /**
     * The custom version of the content. A optional free text
     */
    public readonly customVersion!: pulumi.Output<string | undefined>;
    /**
     * Dependencies for the content item, what other content items it requires to work.  Can describe more complex dependencies using a recursive/nested structure. For a single dependency an id/kind/version can be supplied or operator/criteria for complex formats.
     */
    public readonly dependencies!: pulumi.Output<types.outputs.MetadataDependenciesResponse | undefined>;
    /**
     * The display name of the template
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * Etag of the azure resource
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * first publish date content item
     */
    public readonly firstPublishDate!: pulumi.Output<string | undefined>;
    /**
     * the icon identifier. this id can later be fetched from the content metadata
     */
    public readonly icon!: pulumi.Output<string | undefined>;
    /**
     * last publish date for the content item
     */
    public readonly lastPublishDate!: pulumi.Output<string | undefined>;
    /**
     * The JSON of the ARM template to deploy active content
     */
    public readonly mainTemplate!: pulumi.Output<any | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * the package Id contains this template
     */
    public readonly packageId!: pulumi.Output<string>;
    /**
     * the packageKind of the package contains this template
     */
    public readonly packageKind!: pulumi.Output<string | undefined>;
    /**
     * the name of the package contains this template
     */
    public readonly packageName!: pulumi.Output<string | undefined>;
    /**
     * preview image file names. These will be taken from the solution artifacts
     */
    public readonly previewImages!: pulumi.Output<string[] | undefined>;
    /**
     * preview image file names. These will be taken from the solution artifacts. used for dark theme support
     */
    public readonly previewImagesDark!: pulumi.Output<string[] | undefined>;
    /**
     * Providers for the content item
     */
    public readonly providers!: pulumi.Output<string[] | undefined>;
    /**
     * Source of the content.  This is where/how it was created.
     */
    public readonly source!: pulumi.Output<types.outputs.MetadataSourceResponse>;
    /**
     * Support information for the template - type, name, contact information
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
     * Version of the content.  Default and recommended format is numeric (e.g. 1, 1.0, 1.0.0, 1.0.0.0), following ARM metadata best practices.  Can also be any string, but then we cannot guarantee any version checks
     */
    public readonly version!: pulumi.Output<string>;

    /**
     * Create a ContentTemplate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ContentTemplateArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.contentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'contentId'");
            }
            if ((!args || args.contentKind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'contentKind'");
            }
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.packageId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'packageId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.source === undefined) && !opts.urn) {
                throw new Error("Missing required property 'source'");
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
            resourceInputs["contentSchemaVersion"] = args ? args.contentSchemaVersion : undefined;
            resourceInputs["customVersion"] = args ? args.customVersion : undefined;
            resourceInputs["dependencies"] = args ? args.dependencies : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["firstPublishDate"] = args ? args.firstPublishDate : undefined;
            resourceInputs["icon"] = args ? args.icon : undefined;
            resourceInputs["lastPublishDate"] = args ? args.lastPublishDate : undefined;
            resourceInputs["mainTemplate"] = args ? args.mainTemplate : undefined;
            resourceInputs["packageId"] = args ? args.packageId : undefined;
            resourceInputs["packageKind"] = args ? args.packageKind : undefined;
            resourceInputs["packageName"] = args ? args.packageName : undefined;
            resourceInputs["previewImages"] = args ? args.previewImages : undefined;
            resourceInputs["previewImagesDark"] = args ? args.previewImagesDark : undefined;
            resourceInputs["providers"] = args ? args.providers : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["source"] = args ? args.source : undefined;
            resourceInputs["support"] = args ? args.support : undefined;
            resourceInputs["templateId"] = args ? args.templateId : undefined;
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
            resourceInputs["contentSchemaVersion"] = undefined /*out*/;
            resourceInputs["customVersion"] = undefined /*out*/;
            resourceInputs["dependencies"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["firstPublishDate"] = undefined /*out*/;
            resourceInputs["icon"] = undefined /*out*/;
            resourceInputs["lastPublishDate"] = undefined /*out*/;
            resourceInputs["mainTemplate"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["packageId"] = undefined /*out*/;
            resourceInputs["packageKind"] = undefined /*out*/;
            resourceInputs["packageName"] = undefined /*out*/;
            resourceInputs["previewImages"] = undefined /*out*/;
            resourceInputs["previewImagesDark"] = undefined /*out*/;
            resourceInputs["providers"] = undefined /*out*/;
            resourceInputs["source"] = undefined /*out*/;
            resourceInputs["support"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["threatAnalysisTactics"] = undefined /*out*/;
            resourceInputs["threatAnalysisTechniques"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:securityinsights/v20230401preview:ContentTemplate" }, { type: "azure-native:securityinsights/v20230501preview:ContentTemplate" }, { type: "azure-native:securityinsights/v20230601preview:ContentTemplate" }, { type: "azure-native:securityinsights/v20230701preview:ContentTemplate" }, { type: "azure-native:securityinsights/v20230801preview:ContentTemplate" }, { type: "azure-native:securityinsights/v20230901preview:ContentTemplate" }, { type: "azure-native:securityinsights/v20231001preview:ContentTemplate" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ContentTemplate.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ContentTemplate resource.
 */
export interface ContentTemplateArgs {
    /**
     * The creator of the content item.
     */
    author?: pulumi.Input<types.inputs.MetadataAuthorArgs>;
    /**
     * Categories for the item
     */
    categories?: pulumi.Input<types.inputs.MetadataCategoriesArgs>;
    /**
     * Static ID for the content.  Used to identify dependencies and content from solutions or community.  Hard-coded/static for out of the box content and solutions. Dynamic for user-created.  This is the resource name
     */
    contentId: pulumi.Input<string>;
    /**
     * The kind of content the template is for.
     */
    contentKind: pulumi.Input<string | types.enums.Kind>;
    /**
     * Schema version of the content. Can be used to distinguish between different flow based on the schema version
     */
    contentSchemaVersion?: pulumi.Input<string>;
    /**
     * The custom version of the content. A optional free text
     */
    customVersion?: pulumi.Input<string>;
    /**
     * Dependencies for the content item, what other content items it requires to work.  Can describe more complex dependencies using a recursive/nested structure. For a single dependency an id/kind/version can be supplied or operator/criteria for complex formats.
     */
    dependencies?: pulumi.Input<types.inputs.MetadataDependenciesArgs>;
    /**
     * The display name of the template
     */
    displayName: pulumi.Input<string>;
    /**
     * first publish date content item
     */
    firstPublishDate?: pulumi.Input<string>;
    /**
     * the icon identifier. this id can later be fetched from the content metadata
     */
    icon?: pulumi.Input<string>;
    /**
     * last publish date for the content item
     */
    lastPublishDate?: pulumi.Input<string>;
    /**
     * The JSON of the ARM template to deploy active content
     */
    mainTemplate?: any;
    /**
     * the package Id contains this template
     */
    packageId: pulumi.Input<string>;
    /**
     * the packageKind of the package contains this template
     */
    packageKind?: pulumi.Input<string | types.enums.PackageKind>;
    /**
     * the name of the package contains this template
     */
    packageName?: pulumi.Input<string>;
    /**
     * preview image file names. These will be taken from the solution artifacts
     */
    previewImages?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * preview image file names. These will be taken from the solution artifacts. used for dark theme support
     */
    previewImagesDark?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Providers for the content item
     */
    providers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Source of the content.  This is where/how it was created.
     */
    source: pulumi.Input<types.inputs.MetadataSourceArgs>;
    /**
     * Support information for the template - type, name, contact information
     */
    support?: pulumi.Input<types.inputs.MetadataSupportArgs>;
    /**
     * template Id
     */
    templateId?: pulumi.Input<string>;
    /**
     * the tactics the resource covers
     */
    threatAnalysisTactics?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * the techniques the resource covers, these have to be aligned with the tactics being used
     */
    threatAnalysisTechniques?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Version of the content.  Default and recommended format is numeric (e.g. 1, 1.0, 1.0.0, 1.0.0.0), following ARM metadata best practices.  Can also be any string, but then we cannot guarantee any version checks
     */
    version: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}
