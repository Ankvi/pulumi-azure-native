import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The description of the provisioning service.
 *
 * Uses Azure REST API version 2023-03-01-preview.
 *
 * Other available API versions: 2017-08-21-preview, 2017-11-15, 2018-01-22, 2020-01-01, 2020-03-01, 2020-09-01-preview, 2021-10-15, 2022-02-05, 2022-12-12, 2025-02-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native deviceprovisioningservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
    public static readonly __pulumiType = 'azure-native:deviceprovisioningservices:IotDpsResource';

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
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The Etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal ETag convention.
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * The managed identities for a provisioning service.
     */
    public readonly identity!: pulumi.Output<types.outputs.ManagedServiceIdentityResponse | undefined>;
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
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["provisioningServiceName"] = args ? args.provisioningServiceName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourcegroup"] = args ? args.resourcegroup : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["subscriptionid"] = args ? args.subscriptionid : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
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
        const aliasOpts = { aliases: [{ type: "azure-native:deviceprovisioningservices/v20170821preview:IotDpsResource" }, { type: "azure-native:deviceprovisioningservices/v20171115:IotDpsResource" }, { type: "azure-native:deviceprovisioningservices/v20180122:IotDpsResource" }, { type: "azure-native:deviceprovisioningservices/v20200101:IotDpsResource" }, { type: "azure-native:deviceprovisioningservices/v20200301:IotDpsResource" }, { type: "azure-native:deviceprovisioningservices/v20200901preview:IotDpsResource" }, { type: "azure-native:deviceprovisioningservices/v20211015:IotDpsResource" }, { type: "azure-native:deviceprovisioningservices/v20220205:IotDpsResource" }, { type: "azure-native:deviceprovisioningservices/v20221212:IotDpsResource" }, { type: "azure-native:deviceprovisioningservices/v20230301preview:IotDpsResource" }, { type: "azure-native:deviceprovisioningservices/v20250201preview:IotDpsResource" }, { type: "azure-native:devices/v20200901preview:IotDpsResource" }, { type: "azure-native:devices/v20221212:IotDpsResource" }, { type: "azure-native:devices/v20230301preview:IotDpsResource" }, { type: "azure-native:devices/v20250201preview:IotDpsResource" }, { type: "azure-native:devices:IotDpsResource" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(IotDpsResource.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a IotDpsResource resource.
 */
export interface IotDpsResourceArgs {
    /**
     * The managed identities for a provisioning service.
     */
    identity?: pulumi.Input<types.inputs.ManagedServiceIdentityArgs>;
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