import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a relation between two resources
 */
export class BookmarkRelation extends pulumi.CustomResource {
    /**
     * Get an existing BookmarkRelation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): BookmarkRelation {
        return new BookmarkRelation(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:securityinsights/v20230901preview:BookmarkRelation';

    /**
     * Returns true if the given object is an instance of BookmarkRelation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BookmarkRelation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BookmarkRelation.__pulumiType;
    }

    /**
     * Etag of the azure resource
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The resource ID of the related resource
     */
    public readonly relatedResourceId!: pulumi.Output<string>;
    /**
     * The resource kind of the related resource
     */
    public /*out*/ readonly relatedResourceKind!: pulumi.Output<string>;
    /**
     * The name of the related resource
     */
    public /*out*/ readonly relatedResourceName!: pulumi.Output<string>;
    /**
     * The resource type of the related resource
     */
    public /*out*/ readonly relatedResourceType!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a BookmarkRelation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BookmarkRelationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.bookmarkId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'bookmarkId'");
            }
            if ((!args || args.relatedResourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'relatedResourceId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["bookmarkId"] = args ? args.bookmarkId : undefined;
            resourceInputs["relatedResourceId"] = args ? args.relatedResourceId : undefined;
            resourceInputs["relationName"] = args ? args.relationName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["relatedResourceKind"] = undefined /*out*/;
            resourceInputs["relatedResourceName"] = undefined /*out*/;
            resourceInputs["relatedResourceType"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["relatedResourceId"] = undefined /*out*/;
            resourceInputs["relatedResourceKind"] = undefined /*out*/;
            resourceInputs["relatedResourceName"] = undefined /*out*/;
            resourceInputs["relatedResourceType"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:securityinsights:BookmarkRelation" }, { type: "azure-native:securityinsights/v20190101preview:BookmarkRelation" }, { type: "azure-native:securityinsights/v20210901preview:BookmarkRelation" }, { type: "azure-native:securityinsights/v20211001preview:BookmarkRelation" }, { type: "azure-native:securityinsights/v20220101preview:BookmarkRelation" }, { type: "azure-native:securityinsights/v20220401preview:BookmarkRelation" }, { type: "azure-native:securityinsights/v20220501preview:BookmarkRelation" }, { type: "azure-native:securityinsights/v20220601preview:BookmarkRelation" }, { type: "azure-native:securityinsights/v20220701preview:BookmarkRelation" }, { type: "azure-native:securityinsights/v20220801preview:BookmarkRelation" }, { type: "azure-native:securityinsights/v20220901preview:BookmarkRelation" }, { type: "azure-native:securityinsights/v20221001preview:BookmarkRelation" }, { type: "azure-native:securityinsights/v20221101preview:BookmarkRelation" }, { type: "azure-native:securityinsights/v20221201preview:BookmarkRelation" }, { type: "azure-native:securityinsights/v20230201preview:BookmarkRelation" }, { type: "azure-native:securityinsights/v20230301preview:BookmarkRelation" }, { type: "azure-native:securityinsights/v20230401preview:BookmarkRelation" }, { type: "azure-native:securityinsights/v20230501preview:BookmarkRelation" }, { type: "azure-native:securityinsights/v20230601preview:BookmarkRelation" }, { type: "azure-native:securityinsights/v20230701preview:BookmarkRelation" }, { type: "azure-native:securityinsights/v20230801preview:BookmarkRelation" }, { type: "azure-native:securityinsights/v20231001preview:BookmarkRelation" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(BookmarkRelation.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a BookmarkRelation resource.
 */
export interface BookmarkRelationArgs {
    /**
     * Bookmark ID
     */
    bookmarkId: pulumi.Input<string>;
    /**
     * The resource ID of the related resource
     */
    relatedResourceId: pulumi.Input<string>;
    /**
     * Relation Name
     */
    relationName?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}
