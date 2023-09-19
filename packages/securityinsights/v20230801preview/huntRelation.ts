import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a Hunt Relation in Azure Security Insights.
 */
export class HuntRelation extends pulumi.CustomResource {
    /**
     * Get an existing HuntRelation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): HuntRelation {
        return new HuntRelation(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:securityinsights/v20230801preview:HuntRelation';

    /**
     * Returns true if the given object is an instance of HuntRelation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is HuntRelation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === HuntRelation.__pulumiType;
    }

    /**
     * Etag of the azure resource
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * List of labels relevant to this hunt
     */
    public readonly labels!: pulumi.Output<string[] | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The id of the related resource
     */
    public readonly relatedResourceId!: pulumi.Output<string>;
    /**
     * The resource that the relation is related to
     */
    public /*out*/ readonly relatedResourceKind!: pulumi.Output<string>;
    /**
     * The name of the related resource
     */
    public /*out*/ readonly relatedResourceName!: pulumi.Output<string>;
    /**
     * The type of the hunt relation
     */
    public /*out*/ readonly relationType!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a HuntRelation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HuntRelationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.huntId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'huntId'");
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
            resourceInputs["huntId"] = args ? args.huntId : undefined;
            resourceInputs["huntRelationId"] = args ? args.huntRelationId : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["relatedResourceId"] = args ? args.relatedResourceId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["relatedResourceKind"] = undefined /*out*/;
            resourceInputs["relatedResourceName"] = undefined /*out*/;
            resourceInputs["relationType"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["labels"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["relatedResourceId"] = undefined /*out*/;
            resourceInputs["relatedResourceKind"] = undefined /*out*/;
            resourceInputs["relatedResourceName"] = undefined /*out*/;
            resourceInputs["relationType"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:securityinsights:HuntRelation" }, { type: "azure-native:securityinsights/v20230401preview:HuntRelation" }, { type: "azure-native:securityinsights/v20230501preview:HuntRelation" }, { type: "azure-native:securityinsights/v20230601preview:HuntRelation" }, { type: "azure-native:securityinsights/v20230701preview:HuntRelation" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(HuntRelation.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a HuntRelation resource.
 */
export interface HuntRelationArgs {
    /**
     * The hunt id (GUID)
     */
    huntId: pulumi.Input<string>;
    /**
     * The hunt relation id (GUID)
     */
    huntRelationId?: pulumi.Input<string>;
    /**
     * List of labels relevant to this hunt
     */
    labels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The id of the related resource
     */
    relatedResourceId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}
