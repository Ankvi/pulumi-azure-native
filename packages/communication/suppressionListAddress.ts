import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A object that represents a SuppressionList record.
 *
 * Uses Azure REST API version 2023-06-01-preview.
 *
 * Other available API versions: 2024-09-01-preview.
 */
export class SuppressionListAddress extends pulumi.CustomResource {
    /**
     * Get an existing SuppressionListAddress resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SuppressionListAddress {
        return new SuppressionListAddress(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:communication:SuppressionListAddress';

    /**
     * Returns true if the given object is an instance of SuppressionListAddress.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SuppressionListAddress {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SuppressionListAddress.__pulumiType;
    }

    /**
     * The location where the SuppressionListAddress data is stored at rest. This value is inherited from the parent Domains resource.
     */
    public /*out*/ readonly dataLocation!: pulumi.Output<string>;
    /**
     * Email address of the recipient.
     */
    public readonly email!: pulumi.Output<string>;
    /**
     * The first name of the email recipient.
     */
    public readonly firstName!: pulumi.Output<string | undefined>;
    /**
     * The date the address was last updated in a suppression list.
     */
    public /*out*/ readonly lastModified!: pulumi.Output<string>;
    /**
     * The last name of the email recipient.
     */
    public readonly lastName!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * An optional property to provide contextual notes or a description for an address.
     */
    public readonly notes!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SuppressionListAddress resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SuppressionListAddressArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.domainName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'domainName'");
            }
            if ((!args || args.email === undefined) && !opts.urn) {
                throw new Error("Missing required property 'email'");
            }
            if ((!args || args.emailServiceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'emailServiceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.suppressionListName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'suppressionListName'");
            }
            resourceInputs["addressId"] = args ? args.addressId : undefined;
            resourceInputs["domainName"] = args ? args.domainName : undefined;
            resourceInputs["email"] = args ? args.email : undefined;
            resourceInputs["emailServiceName"] = args ? args.emailServiceName : undefined;
            resourceInputs["firstName"] = args ? args.firstName : undefined;
            resourceInputs["lastName"] = args ? args.lastName : undefined;
            resourceInputs["notes"] = args ? args.notes : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["suppressionListName"] = args ? args.suppressionListName : undefined;
            resourceInputs["dataLocation"] = undefined /*out*/;
            resourceInputs["lastModified"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["dataLocation"] = undefined /*out*/;
            resourceInputs["email"] = undefined /*out*/;
            resourceInputs["firstName"] = undefined /*out*/;
            resourceInputs["lastModified"] = undefined /*out*/;
            resourceInputs["lastName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["notes"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:communication/v20230601preview:SuppressionListAddress" }, { type: "azure-native:communication/v20240901preview:SuppressionListAddress" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SuppressionListAddress.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SuppressionListAddress resource.
 */
export interface SuppressionListAddressArgs {
    /**
     * The id of the address in a suppression list.
     */
    addressId?: pulumi.Input<string>;
    /**
     * The name of the Domains resource.
     */
    domainName: pulumi.Input<string>;
    /**
     * Email address of the recipient.
     */
    email: pulumi.Input<string>;
    /**
     * The name of the EmailService resource.
     */
    emailServiceName: pulumi.Input<string>;
    /**
     * The first name of the email recipient.
     */
    firstName?: pulumi.Input<string>;
    /**
     * The last name of the email recipient.
     */
    lastName?: pulumi.Input<string>;
    /**
     * An optional property to provide contextual notes or a description for an address.
     */
    notes?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the suppression list.
     */
    suppressionListName: pulumi.Input<string>;
}