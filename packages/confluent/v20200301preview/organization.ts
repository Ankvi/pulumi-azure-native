import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Organization resource.
 */
export class Organization extends pulumi.CustomResource {
    /**
     * Get an existing Organization resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Organization {
        return new Organization(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:confluent/v20200301preview:Organization';

    /**
     * Returns true if the given object is an instance of Organization.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Organization {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Organization.__pulumiType;
    }

    /**
     * The creation time of the resource.
     */
    public /*out*/ readonly createdTime!: pulumi.Output<string>;
    /**
     * Location of Organization resource
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Confluent offer detail
     */
    public readonly offerDetail!: pulumi.Output<types.outputs.OrganizationResourcePropertiesResponseOfferDetail | undefined>;
    /**
     * Id of the Confluent organization.
     */
    public /*out*/ readonly organizationId!: pulumi.Output<string>;
    /**
     * Provision states for confluent RP
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * SSO url for the Confluent organization.
     */
    public /*out*/ readonly ssoUrl!: pulumi.Output<string>;
    /**
     * Organization resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Subscriber detail
     */
    public readonly userDetail!: pulumi.Output<types.outputs.OrganizationResourcePropertiesResponseUserDetail | undefined>;

    /**
     * Create a Organization resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OrganizationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["offerDetail"] = args ? args.offerDetail : undefined;
            resourceInputs["organizationName"] = args ? args.organizationName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["userDetail"] = args ? args.userDetail : undefined;
            resourceInputs["createdTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["organizationId"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["ssoUrl"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["createdTime"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["offerDetail"] = undefined /*out*/;
            resourceInputs["organizationId"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["ssoUrl"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["userDetail"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:confluent:Organization" }, { type: "azure-native:confluent/v20200301:Organization" }, { type: "azure-native:confluent/v20210301preview:Organization" }, { type: "azure-native:confluent/v20210901preview:Organization" }, { type: "azure-native:confluent/v20211201:Organization" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Organization.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Organization resource.
 */
export interface OrganizationArgs {
    /**
     * Location of Organization resource
     */
    location?: pulumi.Input<string>;
    /**
     * Confluent offer detail
     */
    offerDetail?: pulumi.Input<types.inputs.OrganizationResourcePropertiesOfferDetailArgs>;
    /**
     * Organization resource name
     */
    organizationName?: pulumi.Input<string>;
    /**
     * Resource group name
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Organization resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Subscriber detail
     */
    userDetail?: pulumi.Input<types.inputs.OrganizationResourcePropertiesUserDetailArgs>;
}
