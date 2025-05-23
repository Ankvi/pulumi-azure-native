import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lab details.
 *
 * Uses Azure REST API version 2021-12-01-preview. In version 2.x of the Azure Native provider, it used API version 2021-12-01-preview.
 */
export class Lab extends pulumi.CustomResource {
    /**
     * Get an existing Lab resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Lab {
        return new Lab(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:education:Lab';

    /**
     * Returns true if the given object is an instance of Lab.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Lab {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Lab.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Default monetary cap for each student in this lab
     */
    public readonly budgetPerStudent!: pulumi.Output<types.outputs.AmountResponse>;
    /**
     * The type of currency being used for the value.
     */
    public readonly currency!: pulumi.Output<string | undefined>;
    /**
     * Detail description of this lab
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * Lab Display Name
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * Lab creation date
     */
    public /*out*/ readonly effectiveDate!: pulumi.Output<string>;
    /**
     * Default expiration date for each student in this lab
     */
    public readonly expirationDate!: pulumi.Output<string>;
    /**
     * invitation code for redeemable lab
     */
    public /*out*/ readonly invitationCode!: pulumi.Output<string>;
    /**
     * the total number of students that can be accepted to the lab.
     */
    public /*out*/ readonly maxStudentCount!: pulumi.Output<number>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The status of this lab
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Total budget
     */
    public /*out*/ readonly totalBudget!: pulumi.Output<types.outputs.AmountResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Amount value.
     */
    public readonly value!: pulumi.Output<number | undefined>;

    /**
     * Create a Lab resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LabArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.billingAccountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'billingAccountName'");
            }
            if ((!args || args.billingProfileName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'billingProfileName'");
            }
            if ((!args || args.budgetPerStudent === undefined) && !opts.urn) {
                throw new Error("Missing required property 'budgetPerStudent'");
            }
            if ((!args || args.description === undefined) && !opts.urn) {
                throw new Error("Missing required property 'description'");
            }
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.expirationDate === undefined) && !opts.urn) {
                throw new Error("Missing required property 'expirationDate'");
            }
            if ((!args || args.invoiceSectionName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'invoiceSectionName'");
            }
            resourceInputs["billingAccountName"] = args ? args.billingAccountName : undefined;
            resourceInputs["billingProfileName"] = args ? args.billingProfileName : undefined;
            resourceInputs["budgetPerStudent"] = args ? args.budgetPerStudent : undefined;
            resourceInputs["currency"] = args ? args.currency : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["expirationDate"] = args ? args.expirationDate : undefined;
            resourceInputs["invoiceSectionName"] = args ? args.invoiceSectionName : undefined;
            resourceInputs["value"] = args ? args.value : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["effectiveDate"] = undefined /*out*/;
            resourceInputs["invitationCode"] = undefined /*out*/;
            resourceInputs["maxStudentCount"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["totalBudget"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["budgetPerStudent"] = undefined /*out*/;
            resourceInputs["currency"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["effectiveDate"] = undefined /*out*/;
            resourceInputs["expirationDate"] = undefined /*out*/;
            resourceInputs["invitationCode"] = undefined /*out*/;
            resourceInputs["maxStudentCount"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["totalBudget"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["value"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:education/v20211201preview:Lab" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Lab.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Lab resource.
 */
export interface LabArgs {
    /**
     * The ID that uniquely identifies a billing account.
     */
    billingAccountName: pulumi.Input<string>;
    /**
     * The ID that uniquely identifies a billing profile.
     */
    billingProfileName: pulumi.Input<string>;
    /**
     * Default monetary cap for each student in this lab
     */
    budgetPerStudent: pulumi.Input<types.inputs.AmountArgs>;
    /**
     * The type of currency being used for the value.
     */
    currency?: pulumi.Input<string>;
    /**
     * Detail description of this lab
     */
    description: pulumi.Input<string>;
    /**
     * Lab Display Name
     */
    displayName: pulumi.Input<string>;
    /**
     * Default expiration date for each student in this lab
     */
    expirationDate: pulumi.Input<string>;
    /**
     * The ID that uniquely identifies an invoice section.
     */
    invoiceSectionName: pulumi.Input<string>;
    /**
     * Amount value.
     */
    value?: pulumi.Input<number>;
}