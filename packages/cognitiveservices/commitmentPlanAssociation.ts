import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The commitment plan association.
 * Azure REST API version: 2023-05-01.
 */
export class CommitmentPlanAssociation extends pulumi.CustomResource {
    /**
     * Get an existing CommitmentPlanAssociation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CommitmentPlanAssociation {
        return new CommitmentPlanAssociation(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:cognitiveservices:CommitmentPlanAssociation';

    /**
     * Returns true if the given object is an instance of CommitmentPlanAssociation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CommitmentPlanAssociation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CommitmentPlanAssociation.__pulumiType;
    }

    /**
     * The Azure resource id of the account.
     */
    public readonly accountId!: pulumi.Output<string | undefined>;
    /**
     * Resource Etag.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.cognitiveservices.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a CommitmentPlanAssociation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CommitmentPlanAssociationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.commitmentPlanName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'commitmentPlanName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountId"] = args ? args.accountId : undefined;
            resourceInputs["commitmentPlanAssociationName"] = args ? args.commitmentPlanAssociationName : undefined;
            resourceInputs["commitmentPlanName"] = args ? args.commitmentPlanName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["accountId"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:cognitiveservices/v20221201:CommitmentPlanAssociation" }, { type: "azure-native:cognitiveservices/v20230501:CommitmentPlanAssociation" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(CommitmentPlanAssociation.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a CommitmentPlanAssociation resource.
 */
export interface CommitmentPlanAssociationArgs {
    /**
     * The Azure resource id of the account.
     */
    accountId?: pulumi.Input<string>;
    /**
     * The name of the commitment plan association with the Cognitive Services Account
     */
    commitmentPlanAssociationName?: pulumi.Input<string>;
    /**
     * The name of the commitmentPlan associated with the Cognitive Services Account
     */
    commitmentPlanName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
