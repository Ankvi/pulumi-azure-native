import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The properties of the billing role assignment.
 *
 * Uses Azure REST API version 2024-04-01. In version 2.x of the Azure Native provider, it used API version 2019-10-01-preview.
 *
 * Other available API versions: 2019-10-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native billing [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The properties of the billing role assignment.
     */
    public readonly properties!: pulumi.Output<types.outputs.BillingRoleAssignmentPropertiesResponse>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

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
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
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
     * The name of the enrollment account.
     */
    enrollmentAccountName: pulumi.Input<string>;
    /**
     * The properties of the billing role assignment.
     */
    properties?: pulumi.Input<types.inputs.BillingRoleAssignmentPropertiesArgs>;
    /**
     * Dictionary of metadata associated with the resource. It may not be populated for all resource types. Maximum key/value length supported of 256 characters. Keys/value should not empty value nor null. Keys can not contain < > % & \ ? /
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}