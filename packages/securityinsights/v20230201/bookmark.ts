import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a bookmark in Azure Security Insights.
 */
export class Bookmark extends pulumi.CustomResource {
    /**
     * Get an existing Bookmark resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Bookmark {
        return new Bookmark(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:securityinsights/v20230201:Bookmark';

    /**
     * Returns true if the given object is an instance of Bookmark.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Bookmark {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Bookmark.__pulumiType;
    }

    /**
     * The time the bookmark was created
     */
    public readonly created!: pulumi.Output<string | undefined>;
    /**
     * Describes a user that created the bookmark
     */
    public readonly createdBy!: pulumi.Output<types.outputs.UserInfoResponse | undefined>;
    /**
     * The display name of the bookmark
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * Etag of the azure resource
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * The bookmark event time
     */
    public readonly eventTime!: pulumi.Output<string | undefined>;
    /**
     * Describes an incident that relates to bookmark
     */
    public readonly incidentInfo!: pulumi.Output<types.outputs.IncidentInfoResponse | undefined>;
    /**
     * List of labels relevant to this bookmark
     */
    public readonly labels!: pulumi.Output<string[] | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The notes of the bookmark
     */
    public readonly notes!: pulumi.Output<string | undefined>;
    /**
     * The query of the bookmark.
     */
    public readonly query!: pulumi.Output<string>;
    /**
     * The end time for the query
     */
    public readonly queryEndTime!: pulumi.Output<string | undefined>;
    /**
     * The query result of the bookmark.
     */
    public readonly queryResult!: pulumi.Output<string | undefined>;
    /**
     * The start time for the query
     */
    public readonly queryStartTime!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The last time the bookmark was updated
     */
    public readonly updated!: pulumi.Output<string | undefined>;
    /**
     * Describes a user that updated the bookmark
     */
    public readonly updatedBy!: pulumi.Output<types.outputs.UserInfoResponse | undefined>;

    /**
     * Create a Bookmark resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BookmarkArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
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
            resourceInputs["bookmarkId"] = args ? args.bookmarkId : undefined;
            resourceInputs["created"] = args ? args.created : undefined;
            resourceInputs["createdBy"] = args ? args.createdBy : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["eventTime"] = args ? args.eventTime : undefined;
            resourceInputs["incidentInfo"] = args ? args.incidentInfo : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["notes"] = args ? args.notes : undefined;
            resourceInputs["query"] = args ? args.query : undefined;
            resourceInputs["queryEndTime"] = args ? args.queryEndTime : undefined;
            resourceInputs["queryResult"] = args ? args.queryResult : undefined;
            resourceInputs["queryStartTime"] = args ? args.queryStartTime : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["updated"] = args ? args.updated : undefined;
            resourceInputs["updatedBy"] = args ? args.updatedBy : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["created"] = undefined /*out*/;
            resourceInputs["createdBy"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["eventTime"] = undefined /*out*/;
            resourceInputs["incidentInfo"] = undefined /*out*/;
            resourceInputs["labels"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["notes"] = undefined /*out*/;
            resourceInputs["query"] = undefined /*out*/;
            resourceInputs["queryEndTime"] = undefined /*out*/;
            resourceInputs["queryResult"] = undefined /*out*/;
            resourceInputs["queryStartTime"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updated"] = undefined /*out*/;
            resourceInputs["updatedBy"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:securityinsights:Bookmark" }, { type: "azure-native:securityinsights/v20190101preview:Bookmark" }, { type: "azure-native:securityinsights/v20200101:Bookmark" }, { type: "azure-native:securityinsights/v20210901preview:Bookmark" }, { type: "azure-native:securityinsights/v20211001:Bookmark" }, { type: "azure-native:securityinsights/v20211001preview:Bookmark" }, { type: "azure-native:securityinsights/v20220101preview:Bookmark" }, { type: "azure-native:securityinsights/v20220401preview:Bookmark" }, { type: "azure-native:securityinsights/v20220501preview:Bookmark" }, { type: "azure-native:securityinsights/v20220601preview:Bookmark" }, { type: "azure-native:securityinsights/v20220701preview:Bookmark" }, { type: "azure-native:securityinsights/v20220801:Bookmark" }, { type: "azure-native:securityinsights/v20220801preview:Bookmark" }, { type: "azure-native:securityinsights/v20220901preview:Bookmark" }, { type: "azure-native:securityinsights/v20221001preview:Bookmark" }, { type: "azure-native:securityinsights/v20221101:Bookmark" }, { type: "azure-native:securityinsights/v20221101preview:Bookmark" }, { type: "azure-native:securityinsights/v20221201preview:Bookmark" }, { type: "azure-native:securityinsights/v20230201preview:Bookmark" }, { type: "azure-native:securityinsights/v20230301preview:Bookmark" }, { type: "azure-native:securityinsights/v20230401preview:Bookmark" }, { type: "azure-native:securityinsights/v20230501preview:Bookmark" }, { type: "azure-native:securityinsights/v20230601preview:Bookmark" }, { type: "azure-native:securityinsights/v20230701preview:Bookmark" }, { type: "azure-native:securityinsights/v20230801preview:Bookmark" }, { type: "azure-native:securityinsights/v20230901preview:Bookmark" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Bookmark.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Bookmark resource.
 */
export interface BookmarkArgs {
    /**
     * Bookmark ID
     */
    bookmarkId?: pulumi.Input<string>;
    /**
     * The time the bookmark was created
     */
    created?: pulumi.Input<string>;
    /**
     * Describes a user that created the bookmark
     */
    createdBy?: pulumi.Input<types.inputs.UserInfoArgs>;
    /**
     * The display name of the bookmark
     */
    displayName: pulumi.Input<string>;
    /**
     * The bookmark event time
     */
    eventTime?: pulumi.Input<string>;
    /**
     * Describes an incident that relates to bookmark
     */
    incidentInfo?: pulumi.Input<types.inputs.IncidentInfoArgs>;
    /**
     * List of labels relevant to this bookmark
     */
    labels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The notes of the bookmark
     */
    notes?: pulumi.Input<string>;
    /**
     * The query of the bookmark.
     */
    query: pulumi.Input<string>;
    /**
     * The end time for the query
     */
    queryEndTime?: pulumi.Input<string>;
    /**
     * The query result of the bookmark.
     */
    queryResult?: pulumi.Input<string>;
    /**
     * The start time for the query
     */
    queryStartTime?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The last time the bookmark was updated
     */
    updated?: pulumi.Input<string>;
    /**
     * Describes a user that updated the bookmark
     */
    updatedBy?: pulumi.Input<types.inputs.UserInfoArgs>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}
