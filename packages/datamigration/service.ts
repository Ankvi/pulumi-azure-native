import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A Database Migration Service resource
 *
 * Uses Azure REST API version 2021-06-30. In version 1.x of the Azure Native provider, it used API version 2018-04-19.
 *
 * Other available API versions: 2022-03-30-preview, 2023-07-15-preview.
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
    public static readonly __pulumiType = 'azure-native:datamigration:Service';

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
     * HTTP strong entity tag value. Ignored if submitted
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * The resource kind. Only 'vm' (the default) is supported.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The resource's provisioning state
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The public key of the service, used to encrypt secrets sent to the service
     */
    public readonly publicKey!: pulumi.Output<string | undefined>;
    /**
     * Service SKU
     */
    public readonly sku!: pulumi.Output<types.outputs.ServiceSkuResponse | undefined>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The ID of the Microsoft.Network/networkInterfaces resource which the service have
     */
    public readonly virtualNicId!: pulumi.Output<string | undefined>;
    /**
     * The ID of the Microsoft.Network/virtualNetworks/subnets resource to which the service should be joined
     */
    public readonly virtualSubnetId!: pulumi.Output<string>;

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
            if ((!args || args.groupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'groupName'");
            }
            if ((!args || args.virtualSubnetId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'virtualSubnetId'");
            }
            resourceInputs["groupName"] = args ? args.groupName : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["publicKey"] = args ? args.publicKey : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["virtualNicId"] = args ? args.virtualNicId : undefined;
            resourceInputs["virtualSubnetId"] = args ? args.virtualSubnetId : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicKey"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualNicId"] = undefined /*out*/;
            resourceInputs["virtualSubnetId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:datamigration/v20171115preview:Service" }, { type: "azure-native:datamigration/v20180315preview:Service" }, { type: "azure-native:datamigration/v20180331preview:Service" }, { type: "azure-native:datamigration/v20180419:Service" }, { type: "azure-native:datamigration/v20180715preview:Service" }, { type: "azure-native:datamigration/v20210630:Service" }, { type: "azure-native:datamigration/v20211030preview:Service" }, { type: "azure-native:datamigration/v20220130preview:Service" }, { type: "azure-native:datamigration/v20220330preview:Service" }, { type: "azure-native:datamigration/v20230715preview:Service" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Service.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Service resource.
 */
export interface ServiceArgs {
    /**
     * Name of the resource group
     */
    groupName: pulumi.Input<string>;
    /**
     * The resource kind. Only 'vm' (the default) is supported.
     */
    kind?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The public key of the service, used to encrypt secrets sent to the service
     */
    publicKey?: pulumi.Input<string>;
    /**
     * Name of the service
     */
    serviceName?: pulumi.Input<string>;
    /**
     * Service SKU
     */
    sku?: pulumi.Input<types.inputs.ServiceSkuArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The ID of the Microsoft.Network/networkInterfaces resource which the service have
     */
    virtualNicId?: pulumi.Input<string>;
    /**
     * The ID of the Microsoft.Network/virtualNetworks/subnets resource to which the service should be joined
     */
    virtualSubnetId: pulumi.Input<string>;
}