import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents Activity entity query.
 *
 * Uses Azure REST API version 2025-01-01-preview. In version 2.x of the Azure Native provider, it used API version 2023-06-01-preview.
 */
export class ActivityCustomEntityQuery extends pulumi.CustomResource {
    /**
     * Get an existing ActivityCustomEntityQuery resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ActivityCustomEntityQuery {
        return new ActivityCustomEntityQuery(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:securityinsights:ActivityCustomEntityQuery';

    /**
     * Returns true if the given object is an instance of ActivityCustomEntityQuery.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ActivityCustomEntityQuery {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ActivityCustomEntityQuery.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The entity query content to display in timeline
     */
    public readonly content!: pulumi.Output<string | undefined>;
    /**
     * The time the activity was created
     */
    public /*out*/ readonly createdTimeUtc!: pulumi.Output<string>;
    /**
     * The entity query description
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Determines whether this activity is enabled or disabled.
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * The query applied only to entities matching to all filters
     */
    public readonly entitiesFilter!: pulumi.Output<{[key: string]: string[]} | undefined>;
    /**
     * Etag of the azure resource
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * The type of the query's source entity
     */
    public readonly inputEntityType!: pulumi.Output<string | undefined>;
    /**
     * The kind of the entity query
     * Expected value is 'Activity'.
     */
    public readonly kind!: pulumi.Output<"Activity">;
    /**
     * The last time the activity was updated
     */
    public /*out*/ readonly lastModifiedTimeUtc!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The Activity query definitions
     */
    public readonly queryDefinitions!: pulumi.Output<types.outputs.ActivityEntityQueriesPropertiesResponseQueryDefinitions | undefined>;
    /**
     * List of the fields of the source entity that are required to run the query
     */
    public readonly requiredInputFieldsSets!: pulumi.Output<string[][] | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The template id this activity was created from
     */
    public readonly templateName!: pulumi.Output<string | undefined>;
    /**
     * The entity query title
     */
    public readonly title!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ActivityCustomEntityQuery resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ActivityCustomEntityQueryArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["content"] = args ? args.content : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["entitiesFilter"] = args ? args.entitiesFilter : undefined;
            resourceInputs["entityQueryId"] = args ? args.entityQueryId : undefined;
            resourceInputs["inputEntityType"] = args ? args.inputEntityType : undefined;
            resourceInputs["kind"] = "Activity";
            resourceInputs["queryDefinitions"] = args ? args.queryDefinitions : undefined;
            resourceInputs["requiredInputFieldsSets"] = args ? args.requiredInputFieldsSets : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["templateName"] = args ? args.templateName : undefined;
            resourceInputs["title"] = args ? args.title : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["createdTimeUtc"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["lastModifiedTimeUtc"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["content"] = undefined /*out*/;
            resourceInputs["createdTimeUtc"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["enabled"] = undefined /*out*/;
            resourceInputs["entitiesFilter"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["inputEntityType"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["lastModifiedTimeUtc"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["queryDefinitions"] = undefined /*out*/;
            resourceInputs["requiredInputFieldsSets"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["templateName"] = undefined /*out*/;
            resourceInputs["title"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:securityinsights/v20210301preview:ActivityCustomEntityQuery" }, { type: "azure-native:securityinsights/v20210901preview:ActivityCustomEntityQuery" }, { type: "azure-native:securityinsights/v20211001preview:ActivityCustomEntityQuery" }, { type: "azure-native:securityinsights/v20220101preview:ActivityCustomEntityQuery" }, { type: "azure-native:securityinsights/v20220401preview:ActivityCustomEntityQuery" }, { type: "azure-native:securityinsights/v20220501preview:ActivityCustomEntityQuery" }, { type: "azure-native:securityinsights/v20220601preview:ActivityCustomEntityQuery" }, { type: "azure-native:securityinsights/v20220701preview:ActivityCustomEntityQuery" }, { type: "azure-native:securityinsights/v20220801preview:ActivityCustomEntityQuery" }, { type: "azure-native:securityinsights/v20220901preview:ActivityCustomEntityQuery" }, { type: "azure-native:securityinsights/v20221001preview:ActivityCustomEntityQuery" }, { type: "azure-native:securityinsights/v20221101preview:ActivityCustomEntityQuery" }, { type: "azure-native:securityinsights/v20221201preview:ActivityCustomEntityQuery" }, { type: "azure-native:securityinsights/v20230201preview:ActivityCustomEntityQuery" }, { type: "azure-native:securityinsights/v20230301preview:ActivityCustomEntityQuery" }, { type: "azure-native:securityinsights/v20230401preview:ActivityCustomEntityQuery" }, { type: "azure-native:securityinsights/v20230501preview:ActivityCustomEntityQuery" }, { type: "azure-native:securityinsights/v20230601preview:ActivityCustomEntityQuery" }, { type: "azure-native:securityinsights/v20230701preview:ActivityCustomEntityQuery" }, { type: "azure-native:securityinsights/v20230801preview:ActivityCustomEntityQuery" }, { type: "azure-native:securityinsights/v20230901preview:ActivityCustomEntityQuery" }, { type: "azure-native:securityinsights/v20231001preview:ActivityCustomEntityQuery" }, { type: "azure-native:securityinsights/v20231201preview:ActivityCustomEntityQuery" }, { type: "azure-native:securityinsights/v20240101preview:ActivityCustomEntityQuery" }, { type: "azure-native:securityinsights/v20240401preview:ActivityCustomEntityQuery" }, { type: "azure-native:securityinsights/v20241001preview:ActivityCustomEntityQuery" }, { type: "azure-native:securityinsights/v20250101preview:ActivityCustomEntityQuery" }, { type: "azure-native:securityinsights/v20250401preview:ActivityCustomEntityQuery" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ActivityCustomEntityQuery.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ActivityCustomEntityQuery resource.
 */
export interface ActivityCustomEntityQueryArgs {
    /**
     * The entity query content to display in timeline
     */
    content?: pulumi.Input<string>;
    /**
     * The entity query description
     */
    description?: pulumi.Input<string>;
    /**
     * Determines whether this activity is enabled or disabled.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The query applied only to entities matching to all filters
     */
    entitiesFilter?: pulumi.Input<{[key: string]: pulumi.Input<pulumi.Input<string>[]>}>;
    /**
     * entity query ID
     */
    entityQueryId?: pulumi.Input<string>;
    /**
     * The type of the query's source entity
     */
    inputEntityType?: pulumi.Input<string | types.enums.EntityType>;
    /**
     * The kind of the entity query that supports put request.
     * Expected value is 'Activity'.
     */
    kind: pulumi.Input<"Activity">;
    /**
     * The Activity query definitions
     */
    queryDefinitions?: pulumi.Input<types.inputs.ActivityEntityQueriesPropertiesQueryDefinitionsArgs>;
    /**
     * List of the fields of the source entity that are required to run the query
     */
    requiredInputFieldsSets?: pulumi.Input<pulumi.Input<pulumi.Input<string>[]>[]>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The template id this activity was created from
     */
    templateName?: pulumi.Input<string>;
    /**
     * The entity query title
     */
    title?: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}