import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The description of the IoT hub.
 *
 * Uses Azure REST API version 2022-04-30-preview. In version 1.x of the Azure Native provider, it used API version 2020-08-31.
 *
 * Other available API versions: 2022-11-15-preview, 2023-06-30, 2023-06-30-preview.
 */
export class IotHubResource extends pulumi.CustomResource {
    /**
     * Get an existing IotHubResource resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): IotHubResource {
        return new IotHubResource(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:devices:IotHubResource';

    /**
     * Returns true if the given object is an instance of IotHubResource.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IotHubResource {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IotHubResource.__pulumiType;
    }

    /**
     * The Etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal ETag convention.
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * The managed identities for the IotHub.
     */
    public readonly identity!: pulumi.Output<types.outputs.ArmIdentityResponse | undefined>;
    /**
     * The resource location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * IotHub properties
     */
    public readonly properties!: pulumi.Output<types.outputs.IotHubPropertiesResponse>;
    /**
     * IotHub SKU info
     */
    public readonly sku!: pulumi.Output<types.outputs.IotHubSkuInfoResponse>;
    /**
     * The system meta data relating to this resource.
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
     * Create a IotHubResource resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IotHubResourceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sku === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sku'");
            }
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["properties"] = args ? (args.properties ? pulumi.output(args.properties).apply(types.inputs.iotHubPropertiesArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:devices/v20160203:IotHubResource" }, { type: "azure-native:devices/v20170119:IotHubResource" }, { type: "azure-native:devices/v20170701:IotHubResource" }, { type: "azure-native:devices/v20180122:IotHubResource" }, { type: "azure-native:devices/v20180401:IotHubResource" }, { type: "azure-native:devices/v20181201preview:IotHubResource" }, { type: "azure-native:devices/v20190322:IotHubResource" }, { type: "azure-native:devices/v20190322preview:IotHubResource" }, { type: "azure-native:devices/v20190701preview:IotHubResource" }, { type: "azure-native:devices/v20191104:IotHubResource" }, { type: "azure-native:devices/v20200301:IotHubResource" }, { type: "azure-native:devices/v20200401:IotHubResource" }, { type: "azure-native:devices/v20200615:IotHubResource" }, { type: "azure-native:devices/v20200710preview:IotHubResource" }, { type: "azure-native:devices/v20200801:IotHubResource" }, { type: "azure-native:devices/v20200831:IotHubResource" }, { type: "azure-native:devices/v20200831preview:IotHubResource" }, { type: "azure-native:devices/v20210201preview:IotHubResource" }, { type: "azure-native:devices/v20210303preview:IotHubResource" }, { type: "azure-native:devices/v20210331:IotHubResource" }, { type: "azure-native:devices/v20210701:IotHubResource" }, { type: "azure-native:devices/v20210701preview:IotHubResource" }, { type: "azure-native:devices/v20210702:IotHubResource" }, { type: "azure-native:devices/v20210702preview:IotHubResource" }, { type: "azure-native:devices/v20220430preview:IotHubResource" }, { type: "azure-native:devices/v20221115preview:IotHubResource" }, { type: "azure-native:devices/v20230630:IotHubResource" }, { type: "azure-native:devices/v20230630preview:IotHubResource" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(IotHubResource.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a IotHubResource resource.
 */
export interface IotHubResourceArgs {
    /**
     * The managed identities for the IotHub.
     */
    identity?: pulumi.Input<types.inputs.ArmIdentityArgs>;
    /**
     * The resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * IotHub properties
     */
    properties?: pulumi.Input<types.inputs.IotHubPropertiesArgs>;
    /**
     * The name of the resource group that contains the IoT hub.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the IoT hub.
     */
    resourceName?: pulumi.Input<string>;
    /**
     * IotHub SKU info
     */
    sku: pulumi.Input<types.inputs.IotHubSkuInfoArgs>;
    /**
     * The resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}