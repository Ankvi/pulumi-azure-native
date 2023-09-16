import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Issue Comment Contract details.
 */
export class ApiIssueComment extends pulumi.CustomResource {
    /**
     * Get an existing ApiIssueComment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ApiIssueComment {
        return new ApiIssueComment(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement/v20220801:ApiIssueComment';

    /**
     * Returns true if the given object is an instance of ApiIssueComment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApiIssueComment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApiIssueComment.__pulumiType;
    }

    /**
     * Date and time when the comment was created.
     */
    public readonly createdDate!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Comment text.
     */
    public readonly text!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * A resource identifier for the user who left the comment.
     */
    public readonly userId!: pulumi.Output<string>;

    /**
     * Create a ApiIssueComment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiIssueCommentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.apiId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apiId'");
            }
            if ((!args || args.issueId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'issueId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            if ((!args || args.text === undefined) && !opts.urn) {
                throw new Error("Missing required property 'text'");
            }
            if ((!args || args.userId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'userId'");
            }
            resourceInputs["apiId"] = args ? args.apiId : undefined;
            resourceInputs["commentId"] = args ? args.commentId : undefined;
            resourceInputs["createdDate"] = args ? args.createdDate : undefined;
            resourceInputs["issueId"] = args ? args.issueId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["text"] = args ? args.text : undefined;
            resourceInputs["userId"] = args ? args.userId : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["createdDate"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["text"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["userId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement:ApiIssueComment" }, { type: "azure-native:apimanagement/v20170301:ApiIssueComment" }, { type: "azure-native:apimanagement/v20180101:ApiIssueComment" }, { type: "azure-native:apimanagement/v20180601preview:ApiIssueComment" }, { type: "azure-native:apimanagement/v20190101:ApiIssueComment" }, { type: "azure-native:apimanagement/v20191201:ApiIssueComment" }, { type: "azure-native:apimanagement/v20191201preview:ApiIssueComment" }, { type: "azure-native:apimanagement/v20200601preview:ApiIssueComment" }, { type: "azure-native:apimanagement/v20201201:ApiIssueComment" }, { type: "azure-native:apimanagement/v20210101preview:ApiIssueComment" }, { type: "azure-native:apimanagement/v20210401preview:ApiIssueComment" }, { type: "azure-native:apimanagement/v20210801:ApiIssueComment" }, { type: "azure-native:apimanagement/v20211201preview:ApiIssueComment" }, { type: "azure-native:apimanagement/v20220401preview:ApiIssueComment" }, { type: "azure-native:apimanagement/v20220901preview:ApiIssueComment" }, { type: "azure-native:apimanagement/v20230301preview:ApiIssueComment" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ApiIssueComment.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ApiIssueComment resource.
 */
export interface ApiIssueCommentArgs {
    /**
     * API identifier. Must be unique in the current API Management service instance.
     */
    apiId: pulumi.Input<string>;
    /**
     * Comment identifier within an Issue. Must be unique in the current Issue.
     */
    commentId?: pulumi.Input<string>;
    /**
     * Date and time when the comment was created.
     */
    createdDate?: pulumi.Input<string>;
    /**
     * Issue identifier. Must be unique in the current API Management service instance.
     */
    issueId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * Comment text.
     */
    text: pulumi.Input<string>;
    /**
     * A resource identifier for the user who left the comment.
     */
    userId: pulumi.Input<string>;
}
