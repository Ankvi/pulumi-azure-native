import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The description of the provisioning service.
 */
export class IotDpsResource extends pulumi.CustomResource {
    /**
     * Get an existing IotDpsResource resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): IotDpsResource {
        return new IotDpsResource(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:devices/v20221212:IotDpsResource';

    /**
     * Returns true if the given object is an instance of IotDpsResource.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IotDpsResource {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IotDpsResource.__pulumiType;
    }

    /**
     * The Etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal ETag convention.
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * The resource location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Service specific properties for a provisioning service
     */
    public readonly properties!: pulumi.Output<types.outputs.IotDpsPropertiesDescriptionResponse>;
    /**
     * The resource group of the resource.
     */
    public readonly resourcegroup!: pulumi.Output<string | undefined>;
    /**
     * Sku info for a provisioning Service.
     */
    public readonly sku!: pulumi.Output<types.outputs.IotDpsSkuInfoResponse>;
    /**
     * The subscription id of the resource.
     */
    public readonly subscriptionid!: pulumi.Output<string | undefined>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a IotDpsResource resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IotDpsResourceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.properties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'properties'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sku === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sku'");
            }
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["provisioningServiceName"] = args ? args.provisioningServiceName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourcegroup"] = args ? args.resourcegroup : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["subscriptionid"] = args ? args.subscriptionid : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["resourcegroup"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["subscriptionid"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:devices:IotDpsResource" }, { type: "azure-native:devices/v20170821preview:IotDpsResource" }, { type: "azure-native:devices/v20171115:IotDpsResource" }, { type: "azure-native:devices/v20180122:IotDpsResource" }, { type: "azure-native:devices/v20200101:IotDpsResource" }, { type: "azure-native:devices/v20200301:IotDpsResource" }, { type: "azure-native:devices/v20200901preview:IotDpsResource" }, { type: "azure-native:devices/v20211015:IotDpsResource" }, { type: "azure-native:devices/v20220205:IotDpsResource" }, { type: "azure-native:devices/v20230301preview:IotDpsResource" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(IotDpsResource.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a IotDpsResource resource.
 */
export interface IotDpsResourceArgs {
    /**
     * The resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * Service specific properties for a provisioning service
     */
    properties: pulumi.Input<types.inputs.IotDpsPropertiesDescriptionArgs>;
    /**
     * Name of provisioning service to create or update.
     */
    provisioningServiceName?: pulumi.Input<string>;
    /**
     * Resource group identifier.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The resource group of the resource.
     */
    resourcegroup?: pulumi.Input<string>;
    /**
     * Sku info for a provisioning Service.
     */
    sku: pulumi.Input<types.inputs.IotDpsSkuInfoArgs>;
    /**
     * The subscription id of the resource.
     */
    subscriptionid?: pulumi.Input<string>;
    /**
     * The resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
