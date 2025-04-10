import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Address Resource.
 *
 * Uses Azure REST API version 2022-05-01-preview.
 *
 * Other available API versions: 2024-02-01.
 */
export class Address extends pulumi.CustomResource {
    /**
     * Get an existing Address resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Address {
        return new Address(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:edgeorder:Address';

    /**
     * Returns true if the given object is an instance of Address.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Address {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Address.__pulumiType;
    }

    /**
     * Status of address validation.
     */
    public /*out*/ readonly addressValidationStatus!: pulumi.Output<string>;
    /**
     * Contact details for the address.
     */
    public readonly contactDetails!: pulumi.Output<types.outputs.ContactDetailsResponse>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Shipping details for the address.
     */
    public readonly shippingAddress!: pulumi.Output<types.outputs.ShippingAddressResponse | undefined>;
    /**
     * Represents resource creation and update time.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Address resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AddressArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.contactDetails === undefined) && !opts.urn) {
                throw new Error("Missing required property 'contactDetails'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["addressName"] = args ? args.addressName : undefined;
            resourceInputs["contactDetails"] = args ? args.contactDetails : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["shippingAddress"] = args ? args.shippingAddress : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["addressValidationStatus"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["addressValidationStatus"] = undefined /*out*/;
            resourceInputs["contactDetails"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["shippingAddress"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:edgeorder/v20201201preview:Address" }, { type: "azure-native:edgeorder/v20211201:Address" }, { type: "azure-native:edgeorder/v20220501preview:Address" }, { type: "azure-native:edgeorder/v20240201:Address" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Address.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Address resource.
 */
export interface AddressArgs {
    /**
     * The name of the address Resource within the specified resource group. address names must be between 3 and 24 characters in length and use any alphanumeric and underscore only.
     */
    addressName?: pulumi.Input<string>;
    /**
     * Contact details for the address.
     */
    contactDetails: pulumi.Input<types.inputs.ContactDetailsArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Shipping details for the address.
     */
    shippingAddress?: pulumi.Input<types.inputs.ShippingAddressArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}