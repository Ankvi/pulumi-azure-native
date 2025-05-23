import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Properties that define a favorite that is associated to an Application Insights component.
 *
 * Uses Azure REST API version 2015-05-01.
 */
export class Favorite extends pulumi.CustomResource {
    /**
     * Get an existing Favorite resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Favorite {
        return new Favorite(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:applicationinsights:Favorite';

    /**
     * Returns true if the given object is an instance of Favorite.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Favorite {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Favorite.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Favorite category, as defined by the user at creation time.
     */
    public readonly category!: pulumi.Output<string | undefined>;
    /**
     * Configuration of this particular favorite, which are driven by the Azure portal UX. Configuration data is a string containing valid JSON
     */
    public readonly config!: pulumi.Output<string | undefined>;
    /**
     * Internally assigned unique id of the favorite definition.
     */
    public readonly favoriteId!: pulumi.Output<string>;
    /**
     * Enum indicating if this favorite definition is owned by a specific user or is shared between all users with access to the Application Insights component.
     */
    public readonly favoriteType!: pulumi.Output<string | undefined>;
    /**
     * Flag denoting wether or not this favorite was generated from a template.
     */
    public readonly isGeneratedFromTemplate!: pulumi.Output<boolean | undefined>;
    /**
     * The user-defined name of the favorite.
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * The source of the favorite definition.
     */
    public readonly sourceType!: pulumi.Output<string | undefined>;
    /**
     * A list of 0 or more tags that are associated with this favorite definition
     */
    public readonly tags!: pulumi.Output<string[] | undefined>;
    /**
     * Date and time in UTC of the last modification that was made to this favorite definition.
     */
    public /*out*/ readonly timeModified!: pulumi.Output<string>;
    /**
     * Unique user id of the specific user that owns this favorite.
     */
    public /*out*/ readonly userId!: pulumi.Output<string>;
    /**
     * This instance's version of the data model. This can change as new features are added that can be marked favorite. Current examples include MetricsExplorer (ME) and Search.
     */
    public readonly version!: pulumi.Output<string | undefined>;

    /**
     * Create a Favorite resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FavoriteArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.resourceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceName'");
            }
            resourceInputs["category"] = args ? args.category : undefined;
            resourceInputs["config"] = args ? args.config : undefined;
            resourceInputs["favoriteId"] = args ? args.favoriteId : undefined;
            resourceInputs["favoriteType"] = args ? args.favoriteType : undefined;
            resourceInputs["isGeneratedFromTemplate"] = args ? args.isGeneratedFromTemplate : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["sourceType"] = args ? args.sourceType : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["timeModified"] = undefined /*out*/;
            resourceInputs["userId"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["category"] = undefined /*out*/;
            resourceInputs["config"] = undefined /*out*/;
            resourceInputs["favoriteId"] = undefined /*out*/;
            resourceInputs["favoriteType"] = undefined /*out*/;
            resourceInputs["isGeneratedFromTemplate"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["sourceType"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["timeModified"] = undefined /*out*/;
            resourceInputs["userId"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:applicationinsights/v20150501:Favorite" }, { type: "azure-native:insights/v20150501:Favorite" }, { type: "azure-native:insights:Favorite" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Favorite.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Favorite resource.
 */
export interface FavoriteArgs {
    /**
     * Favorite category, as defined by the user at creation time.
     */
    category?: pulumi.Input<string>;
    /**
     * Configuration of this particular favorite, which are driven by the Azure portal UX. Configuration data is a string containing valid JSON
     */
    config?: pulumi.Input<string>;
    /**
     * The Id of a specific favorite defined in the Application Insights component
     */
    favoriteId?: pulumi.Input<string>;
    /**
     * Enum indicating if this favorite definition is owned by a specific user or is shared between all users with access to the Application Insights component.
     */
    favoriteType?: pulumi.Input<types.enums.FavoriteType>;
    /**
     * Flag denoting wether or not this favorite was generated from a template.
     */
    isGeneratedFromTemplate?: pulumi.Input<boolean>;
    /**
     * The user-defined name of the favorite.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Application Insights component resource.
     */
    resourceName: pulumi.Input<string>;
    /**
     * The source of the favorite definition.
     */
    sourceType?: pulumi.Input<string>;
    /**
     * A list of 0 or more tags that are associated with this favorite definition
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * This instance's version of the data model. This can change as new features are added that can be marked favorite. Current examples include MetricsExplorer (ME) and Search.
     */
    version?: pulumi.Input<string>;
}