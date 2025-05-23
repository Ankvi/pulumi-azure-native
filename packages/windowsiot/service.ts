import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * The description of the Windows IoT Device Service.
 *
 * Uses Azure REST API version 2019-06-01. In version 2.x of the Azure Native provider, it used API version 2019-06-01.
 */
export class Service extends pulumi.CustomResource {
    /**
     * Get an existing Service resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Service {
        return new Service(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:windowsiot:Service';

    /**
     * Returns true if the given object is an instance of Service.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Service {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Service.__pulumiType;
    }

    /**
     * Windows IoT Device Service OEM AAD domain
     */
    public readonly adminDomainName!: pulumi.Output<string | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Windows IoT Device Service ODM AAD domain
     */
    public readonly billingDomainName!: pulumi.Output<string | undefined>;
    /**
     * The Etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal ETag convention.
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * The Azure Region where the resource lives
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Windows IoT Device Service notes.
     */
    public readonly notes!: pulumi.Output<string | undefined>;
    /**
     * Windows IoT Device Service device allocation,
     */
    public readonly quantity!: pulumi.Output<number | undefined>;
    /**
     * Windows IoT Device Service start date,
     */
    public /*out*/ readonly startDate!: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Service resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["adminDomainName"] = args ? args.adminDomainName : undefined;
            resourceInputs["billingDomainName"] = args ? args.billingDomainName : undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["notes"] = args ? args.notes : undefined;
            resourceInputs["quantity"] = args ? args.quantity : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["startDate"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["adminDomainName"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["billingDomainName"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["notes"] = undefined /*out*/;
            resourceInputs["quantity"] = undefined /*out*/;
            resourceInputs["startDate"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:windowsiot/v20180216preview:Service" }, { type: "azure-native:windowsiot/v20190601:Service" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Service.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Service resource.
 */
export interface ServiceArgs {
    /**
     * Windows IoT Device Service OEM AAD domain
     */
    adminDomainName?: pulumi.Input<string>;
    /**
     * Windows IoT Device Service ODM AAD domain
     */
    billingDomainName?: pulumi.Input<string>;
    /**
     * The name of the Windows IoT Device Service.
     */
    deviceName?: pulumi.Input<string>;
    /**
     * The Azure Region where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Windows IoT Device Service notes.
     */
    notes?: pulumi.Input<string>;
    /**
     * Windows IoT Device Service device allocation,
     */
    quantity?: pulumi.Input<number>;
    /**
     * The name of the resource group that contains the Windows IoT Device Service.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}