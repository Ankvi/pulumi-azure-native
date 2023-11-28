import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents an incident comment
 */
export class IncidentComment extends pulumi.CustomResource {
    /**
     * Get an existing IncidentComment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): IncidentComment {
        return new IncidentComment(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:securityinsights/v20230601preview:IncidentComment';

    /**
     * Returns true if the given object is an instance of IncidentComment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IncidentComment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IncidentComment.__pulumiType;
    }

    /**
     * Describes the client that created the comment
     */
    public /*out*/ readonly author!: pulumi.Output<types.outputs.ClientInfoResponse>;
    /**
     * The time the comment was created
     */
    public /*out*/ readonly createdTimeUtc!: pulumi.Output<string>;
    /**
     * Etag of the azure resource
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * The time the comment was updated
     */
    public /*out*/ readonly lastModifiedTimeUtc!: pulumi.Output<string>;
    /**
     * The comment message
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
     * Create a IncidentComment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IncidentCommentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.incidentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'incidentId'");
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
            resourceInputs["incidentCommentId"] = args ? args.incidentCommentId : undefined;
            resourceInputs["incidentId"] = args ? args.incidentId : undefined;
            resourceInputs["message"] = args ? args.message : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["author"] = undefined /*out*/;
            resourceInputs["createdTimeUtc"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["lastModifiedTimeUtc"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["author"] = undefined /*out*/;
            resourceInputs["createdTimeUtc"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["lastModifiedTimeUtc"] = undefined /*out*/;
            resourceInputs["message"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:securityinsights:IncidentComment" }, { type: "azure-native:securityinsights/v20190101preview:IncidentComment" }, { type: "azure-native:securityinsights/v20210301preview:IncidentComment" }, { type: "azure-native:securityinsights/v20210401:IncidentComment" }, { type: "azure-native:securityinsights/v20210901preview:IncidentComment" }, { type: "azure-native:securityinsights/v20211001:IncidentComment" }, { type: "azure-native:securityinsights/v20211001preview:IncidentComment" }, { type: "azure-native:securityinsights/v20220101preview:IncidentComment" }, { type: "azure-native:securityinsights/v20220401preview:IncidentComment" }, { type: "azure-native:securityinsights/v20220501preview:IncidentComment" }, { type: "azure-native:securityinsights/v20220601preview:IncidentComment" }, { type: "azure-native:securityinsights/v20220701preview:IncidentComment" }, { type: "azure-native:securityinsights/v20220801:IncidentComment" }, { type: "azure-native:securityinsights/v20220801preview:IncidentComment" }, { type: "azure-native:securityinsights/v20220901preview:IncidentComment" }, { type: "azure-native:securityinsights/v20221001preview:IncidentComment" }, { type: "azure-native:securityinsights/v20221101:IncidentComment" }, { type: "azure-native:securityinsights/v20221101preview:IncidentComment" }, { type: "azure-native:securityinsights/v20221201preview:IncidentComment" }, { type: "azure-native:securityinsights/v20230201:IncidentComment" }, { type: "azure-native:securityinsights/v20230201preview:IncidentComment" }, { type: "azure-native:securityinsights/v20230301preview:IncidentComment" }, { type: "azure-native:securityinsights/v20230401preview:IncidentComment" }, { type: "azure-native:securityinsights/v20230501preview:IncidentComment" }, { type: "azure-native:securityinsights/v20230701preview:IncidentComment" }, { type: "azure-native:securityinsights/v20230801preview:IncidentComment" }, { type: "azure-native:securityinsights/v20230901preview:IncidentComment" }, { type: "azure-native:securityinsights/v20231001preview:IncidentComment" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(IncidentComment.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a IncidentComment resource.
 */
export interface IncidentCommentArgs {
    /**
     * Incident comment ID
     */
    incidentCommentId?: pulumi.Input<string>;
    /**
     * Incident ID
     */
    incidentId: pulumi.Input<string>;
    /**
     * The comment message
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
