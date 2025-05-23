import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Student details.
 *
 * Uses Azure REST API version 2021-12-01-preview. In version 2.x of the Azure Native provider, it used API version 2021-12-01-preview.
 */
export class Student extends pulumi.CustomResource {
    /**
     * Get an existing Student resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Student {
        return new Student(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:education:Student';

    /**
     * Returns true if the given object is an instance of Student.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Student {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Student.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Student Budget
     */
    public readonly budget!: pulumi.Output<types.outputs.AmountResponse>;
    /**
     * Date student was added to the lab
     */
    public /*out*/ readonly effectiveDate!: pulumi.Output<string>;
    /**
     * Student Email
     */
    public readonly email!: pulumi.Output<string>;
    /**
     * Date this student is set to expire from the lab.
     */
    public readonly expirationDate!: pulumi.Output<string>;
    /**
     * First Name
     */
    public readonly firstName!: pulumi.Output<string>;
    /**
     * Last Name
     */
    public readonly lastName!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Student Role
     */
    public readonly role!: pulumi.Output<string>;
    /**
     * Student Lab Status
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * Subscription alias
     */
    public readonly subscriptionAlias!: pulumi.Output<string | undefined>;
    /**
     * Subscription Id
     */
    public /*out*/ readonly subscriptionId!: pulumi.Output<string>;
    /**
     * subscription invite last sent date
     */
    public readonly subscriptionInviteLastSentDate!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Student resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StudentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.billingAccountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'billingAccountName'");
            }
            if ((!args || args.billingProfileName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'billingProfileName'");
            }
            if ((!args || args.budget === undefined) && !opts.urn) {
                throw new Error("Missing required property 'budget'");
            }
            if ((!args || args.email === undefined) && !opts.urn) {
                throw new Error("Missing required property 'email'");
            }
            if ((!args || args.expirationDate === undefined) && !opts.urn) {
                throw new Error("Missing required property 'expirationDate'");
            }
            if ((!args || args.firstName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'firstName'");
            }
            if ((!args || args.invoiceSectionName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'invoiceSectionName'");
            }
            if ((!args || args.lastName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'lastName'");
            }
            if ((!args || args.role === undefined) && !opts.urn) {
                throw new Error("Missing required property 'role'");
            }
            resourceInputs["billingAccountName"] = args ? args.billingAccountName : undefined;
            resourceInputs["billingProfileName"] = args ? args.billingProfileName : undefined;
            resourceInputs["budget"] = args ? args.budget : undefined;
            resourceInputs["email"] = args ? args.email : undefined;
            resourceInputs["expirationDate"] = args ? args.expirationDate : undefined;
            resourceInputs["firstName"] = args ? args.firstName : undefined;
            resourceInputs["invoiceSectionName"] = args ? args.invoiceSectionName : undefined;
            resourceInputs["lastName"] = args ? args.lastName : undefined;
            resourceInputs["role"] = args ? args.role : undefined;
            resourceInputs["studentAlias"] = args ? args.studentAlias : undefined;
            resourceInputs["subscriptionAlias"] = args ? args.subscriptionAlias : undefined;
            resourceInputs["subscriptionInviteLastSentDate"] = args ? args.subscriptionInviteLastSentDate : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["effectiveDate"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["subscriptionId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["budget"] = undefined /*out*/;
            resourceInputs["effectiveDate"] = undefined /*out*/;
            resourceInputs["email"] = undefined /*out*/;
            resourceInputs["expirationDate"] = undefined /*out*/;
            resourceInputs["firstName"] = undefined /*out*/;
            resourceInputs["lastName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["role"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["subscriptionAlias"] = undefined /*out*/;
            resourceInputs["subscriptionId"] = undefined /*out*/;
            resourceInputs["subscriptionInviteLastSentDate"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:education/v20211201preview:Student" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Student.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Student resource.
 */
export interface StudentArgs {
    /**
     * The ID that uniquely identifies a billing account.
     */
    billingAccountName: pulumi.Input<string>;
    /**
     * The ID that uniquely identifies a billing profile.
     */
    billingProfileName: pulumi.Input<string>;
    /**
     * Student Budget
     */
    budget: pulumi.Input<types.inputs.AmountArgs>;
    /**
     * Student Email
     */
    email: pulumi.Input<string>;
    /**
     * Date this student is set to expire from the lab.
     */
    expirationDate: pulumi.Input<string>;
    /**
     * First Name
     */
    firstName: pulumi.Input<string>;
    /**
     * The ID that uniquely identifies an invoice section.
     */
    invoiceSectionName: pulumi.Input<string>;
    /**
     * Last Name
     */
    lastName: pulumi.Input<string>;
    /**
     * Student Role
     */
    role: pulumi.Input<string | types.enums.StudentRole>;
    /**
     * Student alias.
     */
    studentAlias?: pulumi.Input<string>;
    /**
     * Subscription alias
     */
    subscriptionAlias?: pulumi.Input<string>;
    /**
     * subscription invite last sent date
     */
    subscriptionInviteLastSentDate?: pulumi.Input<string>;
}