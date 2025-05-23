import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Value object for saved search results.
 *
 * Uses Azure REST API version 2023-09-01. In version 2.x of the Azure Native provider, it used API version 2020-08-01.
 *
 * Other available API versions: 2020-03-01-preview, 2020-08-01, 2025-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native operationalinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class SavedSearch extends pulumi.CustomResource {
    /**
     * Get an existing SavedSearch resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SavedSearch {
        return new SavedSearch(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:operationalinsights:SavedSearch';

    /**
     * Returns true if the given object is an instance of SavedSearch.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SavedSearch {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SavedSearch.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The category of the saved search. This helps the user to find a saved search faster. 
     */
    public readonly category!: pulumi.Output<string>;
    /**
     * Saved search display name.
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * The ETag of the saved search. To override an existing saved search, use "*" or specify the current Etag
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * The function alias if query serves as a function.
     */
    public readonly functionAlias!: pulumi.Output<string | undefined>;
    /**
     * The optional function parameters if query serves as a function. Value should be in the following format: 'param-name1:type1 = default_value1, param-name2:type2 = default_value2'. For more examples and proper syntax please refer to https://docs.microsoft.com/en-us/azure/kusto/query/functions/user-defined-functions.
     */
    public readonly functionParameters!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The query expression for the saved search.
     */
    public readonly query!: pulumi.Output<string>;
    /**
     * The tags attached to the saved search.
     */
    public readonly tags!: pulumi.Output<types.outputs.TagResponse[] | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The version number of the query language. The current version is 2 and is the default.
     */
    public readonly version!: pulumi.Output<number | undefined>;

    /**
     * Create a SavedSearch resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SavedSearchArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.category === undefined) && !opts.urn) {
                throw new Error("Missing required property 'category'");
            }
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.query === undefined) && !opts.urn) {
                throw new Error("Missing required property 'query'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["category"] = args ? args.category : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["functionAlias"] = args ? args.functionAlias : undefined;
            resourceInputs["functionParameters"] = args ? args.functionParameters : undefined;
            resourceInputs["query"] = args ? args.query : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["savedSearchId"] = args ? args.savedSearchId : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["category"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["functionAlias"] = undefined /*out*/;
            resourceInputs["functionParameters"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["query"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:operationalinsights/v20150320:SavedSearch" }, { type: "azure-native:operationalinsights/v20200301preview:SavedSearch" }, { type: "azure-native:operationalinsights/v20200801:SavedSearch" }, { type: "azure-native:operationalinsights/v20230901:SavedSearch" }, { type: "azure-native:operationalinsights/v20250201:SavedSearch" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SavedSearch.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SavedSearch resource.
 */
export interface SavedSearchArgs {
    /**
     * The category of the saved search. This helps the user to find a saved search faster. 
     */
    category: pulumi.Input<string>;
    /**
     * Saved search display name.
     */
    displayName: pulumi.Input<string>;
    /**
     * The function alias if query serves as a function.
     */
    functionAlias?: pulumi.Input<string>;
    /**
     * The optional function parameters if query serves as a function. Value should be in the following format: 'param-name1:type1 = default_value1, param-name2:type2 = default_value2'. For more examples and proper syntax please refer to https://docs.microsoft.com/en-us/azure/kusto/query/functions/user-defined-functions.
     */
    functionParameters?: pulumi.Input<string>;
    /**
     * The query expression for the saved search.
     */
    query: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The id of the saved search.
     */
    savedSearchId?: pulumi.Input<string>;
    /**
     * The tags attached to the saved search.
     */
    tags?: pulumi.Input<pulumi.Input<types.inputs.TagArgs>[]>;
    /**
     * The version number of the query language. The current version is 2 and is the default.
     */
    version?: pulumi.Input<number>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}