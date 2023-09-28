import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Metadata resource definition.
 */
export class Metadata extends pulumi.CustomResource {
    /**
     * Get an existing Metadata resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Metadata {
        return new Metadata(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:securityinsights/v20230901preview:Metadata';

    /**
     * Returns true if the given object is an instance of Metadata.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Metadata {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Metadata.__pulumiType;
    }

    /**
     * The creator of the content item.
     */
    public readonly author!: pulumi.Output<types.outputs.MetadataAuthorResponse | undefined>;
    /**
     * Categories for the solution content item
     */
    public readonly categories!: pulumi.Output<types.outputs.MetadataCategoriesResponse | undefined>;
    /**
     * Static ID for the content.  Used to identify dependencies and content from solutions or community.  Hard-coded/static for out of the box content and solutions. Dynamic for user-created.  This is the resource name
     */
    public readonly contentId!: pulumi.Output<string | undefined>;
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
     * Etag of the azure resource
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * first publish date solution content item
     */
    public readonly firstPublishDate!: pulumi.Output<string | undefined>;
    /**
     * the icon identifier. this id can later be fetched from the solution template
     */
    public readonly icon!: pulumi.Output<string | undefined>;
    /**
     * The kind of content the metadata is for.
     */
    public readonly kind!: pulumi.Output<string>;
    /**
     * last publish date for the solution content item
     */
    public readonly lastPublishDate!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Full parent resource ID of the content item the metadata is for.  This is the full resource ID including the scope (subscription and resource group)
     */
    public readonly parentId!: pulumi.Output<string>;
    /**
     * preview image file names. These will be taken from the solution artifacts
     */
    public readonly previewImages!: pulumi.Output<string[] | undefined>;
    /**
     * preview image file names. These will be taken from the solution artifacts. used for dark theme support
     */
    public readonly previewImagesDark!: pulumi.Output<string[] | undefined>;
    /**
     * Providers for the solution content item
     */
    public readonly providers!: pulumi.Output<string[] | undefined>;
    /**
     * Source of the content.  This is where/how it was created.
     */
    public readonly source!: pulumi.Output<types.outputs.MetadataSourceResponse | undefined>;
    /**
     * Support information for the metadata - type, name, contact information
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
     * Version of the content.  Default and recommended format is numeric (e.g. 1, 1.0, 1.0.0, 1.0.0.0), following ARM template best practices.  Can also be any string, but then we cannot guarantee any version checks
     */
    public readonly version!: pulumi.Output<string | undefined>;

    /**
     * Create a Metadata resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MetadataArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.parentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'parentId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["author"] = args ? args.author : undefined;
            resourceInputs["categories"] = args ? args.categories : undefined;
            resourceInputs["contentId"] = args ? args.contentId : undefined;
            resourceInputs["contentSchemaVersion"] = args ? args.contentSchemaVersion : undefined;
            resourceInputs["customVersion"] = args ? args.customVersion : undefined;
            resourceInputs["dependencies"] = args ? args.dependencies : undefined;
            resourceInputs["firstPublishDate"] = args ? args.firstPublishDate : undefined;
            resourceInputs["icon"] = args ? args.icon : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["lastPublishDate"] = args ? args.lastPublishDate : undefined;
            resourceInputs["metadataName"] = args ? args.metadataName : undefined;
            resourceInputs["parentId"] = args ? args.parentId : undefined;
            resourceInputs["previewImages"] = args ? args.previewImages : undefined;
            resourceInputs["previewImagesDark"] = args ? args.previewImagesDark : undefined;
            resourceInputs["providers"] = args ? args.providers : undefined;
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
            resourceInputs["contentSchemaVersion"] = undefined /*out*/;
            resourceInputs["customVersion"] = undefined /*out*/;
            resourceInputs["dependencies"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["firstPublishDate"] = undefined /*out*/;
            resourceInputs["icon"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["lastPublishDate"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["parentId"] = undefined /*out*/;
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
        const aliasOpts = { aliases: [{ type: "azure-native:securityinsights:Metadata" }, { type: "azure-native:securityinsights/v20210301preview:Metadata" }, { type: "azure-native:securityinsights/v20210901preview:Metadata" }, { type: "azure-native:securityinsights/v20211001preview:Metadata" }, { type: "azure-native:securityinsights/v20220101preview:Metadata" }, { type: "azure-native:securityinsights/v20220401preview:Metadata" }, { type: "azure-native:securityinsights/v20220501preview:Metadata" }, { type: "azure-native:securityinsights/v20220601preview:Metadata" }, { type: "azure-native:securityinsights/v20220701preview:Metadata" }, { type: "azure-native:securityinsights/v20220801preview:Metadata" }, { type: "azure-native:securityinsights/v20220901preview:Metadata" }, { type: "azure-native:securityinsights/v20221001preview:Metadata" }, { type: "azure-native:securityinsights/v20221101preview:Metadata" }, { type: "azure-native:securityinsights/v20221201preview:Metadata" }, { type: "azure-native:securityinsights/v20230201:Metadata" }, { type: "azure-native:securityinsights/v20230201preview:Metadata" }, { type: "azure-native:securityinsights/v20230301preview:Metadata" }, { type: "azure-native:securityinsights/v20230401preview:Metadata" }, { type: "azure-native:securityinsights/v20230501preview:Metadata" }, { type: "azure-native:securityinsights/v20230601preview:Metadata" }, { type: "azure-native:securityinsights/v20230701preview:Metadata" }, { type: "azure-native:securityinsights/v20230801preview:Metadata" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Metadata.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Metadata resource.
 */
export interface MetadataArgs {
    /**
     * The creator of the content item.
     */
    author?: pulumi.Input<types.inputs.MetadataAuthorArgs>;
    /**
     * Categories for the solution content item
     */
    categories?: pulumi.Input<types.inputs.MetadataCategoriesArgs>;
    /**
     * Static ID for the content.  Used to identify dependencies and content from solutions or community.  Hard-coded/static for out of the box content and solutions. Dynamic for user-created.  This is the resource name
     */
    contentId?: pulumi.Input<string>;
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
     * first publish date solution content item
     */
    firstPublishDate?: pulumi.Input<string>;
    /**
     * the icon identifier. this id can later be fetched from the solution template
     */
    icon?: pulumi.Input<string>;
    /**
     * The kind of content the metadata is for.
     */
    kind: pulumi.Input<string>;
    /**
     * last publish date for the solution content item
     */
    lastPublishDate?: pulumi.Input<string>;
    /**
     * The Metadata name.
     */
    metadataName?: pulumi.Input<string>;
    /**
     * Full parent resource ID of the content item the metadata is for.  This is the full resource ID including the scope (subscription and resource group)
     */
    parentId: pulumi.Input<string>;
    /**
     * preview image file names. These will be taken from the solution artifacts
     */
    previewImages?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * preview image file names. These will be taken from the solution artifacts. used for dark theme support
     */
    previewImagesDark?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Providers for the solution content item
     */
    providers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Source of the content.  This is where/how it was created.
     */
    source?: pulumi.Input<types.inputs.MetadataSourceArgs>;
    /**
     * Support information for the metadata - type, name, contact information
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
     * Version of the content.  Default and recommended format is numeric (e.g. 1, 1.0, 1.0.0, 1.0.0.0), following ARM template best practices.  Can also be any string, but then we cannot guarantee any version checks
     */
    version?: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}
