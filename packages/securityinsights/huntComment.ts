import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a Hunt Comment in Azure Security Insights
 * Azure REST API version: 2023-06-01-preview.
 */
export class HuntComment extends pulumi.CustomResource {
    /**
     * Get an existing HuntComment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): HuntComment {
        return new HuntComment(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:securityinsights:HuntComment';

    /**
     * Returns true if the given object is an instance of HuntComment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is HuntComment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === HuntComment.__pulumiType;
    }

    /**
     * Etag of the azure resource
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * The message for the comment
     */
    public readonly message!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a HuntComment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HuntCommentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.huntId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'huntId'");
            }
            if ((!args || args.message === undefined) && !opts.urn) {
                throw new Error("Missing required property 'message'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["huntCommentId"] = args ? args.huntCommentId : undefined;
            resourceInputs["huntId"] = args ? args.huntId : undefined;
            resourceInputs["message"] = args ? args.message : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["message"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:securityinsights/v20230401preview:HuntComment" }, { type: "azure-native:securityinsights/v20230501preview:HuntComment" }, { type: "azure-native:securityinsights/v20230601preview:HuntComment" }, { type: "azure-native:securityinsights/v20230701preview:HuntComment" }, { type: "azure-native:securityinsights/v20230801preview:HuntComment" }, { type: "azure-native:securityinsights/v20230901preview:HuntComment" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(HuntComment.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a HuntComment resource.
 */
export interface HuntCommentArgs {
    /**
     * The hunt comment id (GUID)
     */
    huntCommentId?: pulumi.Input<string>;
    /**
     * The hunt id (GUID)
     */
    huntId: pulumi.Input<string>;
    /**
     * The message for the comment
     */
    message: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}
