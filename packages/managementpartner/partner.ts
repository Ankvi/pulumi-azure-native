import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * this is the management partner operations response
 *
 * Uses Azure REST API version 2018-02-01. In version 2.x of the Azure Native provider, it used API version 2018-02-01.
 */
export class Partner extends pulumi.CustomResource {
    /**
     * Get an existing Partner resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Partner {
        return new Partner(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:managementpartner:Partner';

    /**
     * Returns true if the given object is an instance of Partner.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Partner {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Partner.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * This is the DateTime when the partner was created.
     */
    public /*out*/ readonly createdTime!: pulumi.Output<string | undefined>;
    /**
     * Type of the partner
     */
    public /*out*/ readonly etag!: pulumi.Output<number | undefined>;
    /**
     * Name of the partner
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * This is the object id.
     */
    public /*out*/ readonly objectId!: pulumi.Output<string | undefined>;
    /**
     * This is the partner id
     */
    public readonly partnerId!: pulumi.Output<string | undefined>;
    /**
     * This is the partner name
     */
    public /*out*/ readonly partnerName!: pulumi.Output<string | undefined>;
    /**
     * This is the tenant id.
     */
    public /*out*/ readonly tenantId!: pulumi.Output<string | undefined>;
    /**
     * Type of resource. "Microsoft.ManagementPartner/partners"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * This is the DateTime when the partner was updated.
     */
    public /*out*/ readonly updatedTime!: pulumi.Output<string | undefined>;
    /**
     * This is the version.
     */
    public /*out*/ readonly version!: pulumi.Output<number | undefined>;

    /**
     * Create a Partner resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: PartnerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            resourceInputs["partnerId"] = args ? args.partnerId : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["createdTime"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["objectId"] = undefined /*out*/;
            resourceInputs["partnerName"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatedTime"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["createdTime"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["objectId"] = undefined /*out*/;
            resourceInputs["partnerId"] = undefined /*out*/;
            resourceInputs["partnerName"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatedTime"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:managementpartner/v20180201:Partner" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Partner.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Partner resource.
 */
export interface PartnerArgs {
    /**
     * Id of the Partner
     */
    partnerId?: pulumi.Input<string>;
}