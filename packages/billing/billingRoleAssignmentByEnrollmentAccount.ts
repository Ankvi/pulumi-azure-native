import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * The role assignment
 *
 * Uses Azure REST API version 2019-10-01-preview. In version 1.x of the Azure Native provider, it used API version 2019-10-01-preview.
 *
 * Other available API versions: 2024-04-01.
 */
export class BillingRoleAssignmentByEnrollmentAccount extends pulumi.CustomResource {
    /**
     * Get an existing BillingRoleAssignmentByEnrollmentAccount resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): BillingRoleAssignmentByEnrollmentAccount {
        return new BillingRoleAssignmentByEnrollmentAccount(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:billing:BillingRoleAssignmentByEnrollmentAccount';

    /**
     * Returns true if the given object is an instance of BillingRoleAssignmentByEnrollmentAccount.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BillingRoleAssignmentByEnrollmentAccount {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BillingRoleAssignmentByEnrollmentAccount.__pulumiType;
    }

    /**
     * The principal Id of the user who created the role assignment.
     */
    public /*out*/ readonly createdByPrincipalId!: pulumi.Output<string>;
    /**
     * The tenant Id of the user who created the role assignment.
     */
    public /*out*/ readonly createdByPrincipalTenantId!: pulumi.Output<string>;
    /**
     * The email address of the user who created the role assignment. This is supported only for billing accounts with agreement type Enterprise Agreement.
     */
    public /*out*/ readonly createdByUserEmailAddress!: pulumi.Output<string>;
    /**
     * The date the role assignment was created.
     */
    public /*out*/ readonly createdOn!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The principal id of the user to whom the role was assigned.
     */
    public readonly principalId!: pulumi.Output<string | undefined>;
    /**
     * The principal tenant id of the user to whom the role was assigned.
     */
    public readonly principalTenantId!: pulumi.Output<string | undefined>;
    /**
     * The ID of the role definition.
     */
    public readonly roleDefinitionId!: pulumi.Output<string | undefined>;
    /**
     * The scope at which the role was assigned.
     */
    public /*out*/ readonly scope!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The authentication type of the user, whether Organization or MSA, of the user to whom the role was assigned. This is supported only for billing accounts with agreement type Enterprise Agreement.
     */
    public readonly userAuthenticationType!: pulumi.Output<string | undefined>;
    /**
     * The email address of the user to whom the role was assigned. This is supported only for billing accounts with agreement type Enterprise Agreement.
     */
    public readonly userEmailAddress!: pulumi.Output<string | undefined>;

    /**
     * Create a BillingRoleAssignmentByEnrollmentAccount resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BillingRoleAssignmentByEnrollmentAccountArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.billingAccountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'billingAccountName'");
            }
            if ((!args || args.enrollmentAccountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'enrollmentAccountName'");
            }
            resourceInputs["billingAccountName"] = args ? args.billingAccountName : undefined;
            resourceInputs["billingRoleAssignmentName"] = args ? args.billingRoleAssignmentName : undefined;
            resourceInputs["enrollmentAccountName"] = args ? args.enrollmentAccountName : undefined;
            resourceInputs["principalId"] = args ? args.principalId : undefined;
            resourceInputs["principalTenantId"] = args ? args.principalTenantId : undefined;
            resourceInputs["roleDefinitionId"] = args ? args.roleDefinitionId : undefined;
            resourceInputs["userAuthenticationType"] = args ? args.userAuthenticationType : undefined;
            resourceInputs["userEmailAddress"] = args ? args.userEmailAddress : undefined;
            resourceInputs["createdByPrincipalId"] = undefined /*out*/;
            resourceInputs["createdByPrincipalTenantId"] = undefined /*out*/;
            resourceInputs["createdByUserEmailAddress"] = undefined /*out*/;
            resourceInputs["createdOn"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["scope"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["createdByPrincipalId"] = undefined /*out*/;
            resourceInputs["createdByPrincipalTenantId"] = undefined /*out*/;
            resourceInputs["createdByUserEmailAddress"] = undefined /*out*/;
            resourceInputs["createdOn"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["principalId"] = undefined /*out*/;
            resourceInputs["principalTenantId"] = undefined /*out*/;
            resourceInputs["roleDefinitionId"] = undefined /*out*/;
            resourceInputs["scope"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["userAuthenticationType"] = undefined /*out*/;
            resourceInputs["userEmailAddress"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:billing/v20191001preview:BillingRoleAssignmentByEnrollmentAccount" }, { type: "azure-native:billing/v20240401:BillingRoleAssignmentByEnrollmentAccount" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(BillingRoleAssignmentByEnrollmentAccount.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a BillingRoleAssignmentByEnrollmentAccount resource.
 */
export interface BillingRoleAssignmentByEnrollmentAccountArgs {
    /**
     * The ID that uniquely identifies a billing account.
     */
    billingAccountName: pulumi.Input<string>;
    /**
     * The ID that uniquely identifies a role assignment.
     */
    billingRoleAssignmentName?: pulumi.Input<string>;
    /**
     * The ID that uniquely identifies an enrollment account.
     */
    enrollmentAccountName: pulumi.Input<string>;
    /**
     * The principal id of the user to whom the role was assigned.
     */
    principalId?: pulumi.Input<string>;
    /**
     * The principal tenant id of the user to whom the role was assigned.
     */
    principalTenantId?: pulumi.Input<string>;
    /**
     * The ID of the role definition.
     */
    roleDefinitionId?: pulumi.Input<string>;
    /**
     * The authentication type of the user, whether Organization or MSA, of the user to whom the role was assigned. This is supported only for billing accounts with agreement type Enterprise Agreement.
     */
    userAuthenticationType?: pulumi.Input<string>;
    /**
     * The email address of the user to whom the role was assigned. This is supported only for billing accounts with agreement type Enterprise Agreement.
     */
    userEmailAddress?: pulumi.Input<string>;
}