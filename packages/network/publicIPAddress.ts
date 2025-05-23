import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Public IP address resource.
 *
 * Uses Azure REST API version 2024-05-01. In version 2.x of the Azure Native provider, it used API version 2023-02-01.
 *
 * Other available API versions: 2018-06-01, 2018-07-01, 2018-08-01, 2018-10-01, 2018-11-01, 2018-12-01, 2019-02-01, 2019-04-01, 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class PublicIPAddress extends pulumi.CustomResource {
    /**
     * Get an existing PublicIPAddress resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PublicIPAddress {
        return new PublicIPAddress(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:PublicIPAddress';

    /**
     * Returns true if the given object is an instance of PublicIPAddress.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PublicIPAddress {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PublicIPAddress.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The DDoS protection custom policy associated with the public IP address.
     */
    public readonly ddosSettings!: pulumi.Output<types.outputs.DdosSettingsResponse | undefined>;
    /**
     * Specify what happens to the public IP address when the VM using it is deleted
     */
    public readonly deleteOption!: pulumi.Output<string | undefined>;
    /**
     * The FQDN of the DNS record associated with the public IP address.
     */
    public readonly dnsSettings!: pulumi.Output<types.outputs.PublicIPAddressDnsSettingsResponse | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The extended location of the public ip address.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse | undefined>;
    /**
     * The idle timeout of the public IP address.
     */
    public readonly idleTimeoutInMinutes!: pulumi.Output<number | undefined>;
    /**
     * The IP address associated with the public IP address resource.
     */
    public readonly ipAddress!: pulumi.Output<string | undefined>;
    /**
     * The IP configuration associated with the public IP address.
     */
    public /*out*/ readonly ipConfiguration!: pulumi.Output<types.outputs.IPConfigurationResponse>;
    /**
     * The list of tags associated with the public IP address.
     */
    public readonly ipTags!: pulumi.Output<types.outputs.IpTagResponse[] | undefined>;
    /**
     * The linked public IP address of the public IP address resource.
     */
    public readonly linkedPublicIPAddress!: pulumi.Output<types.outputs.PublicIPAddressResponse | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Migration phase of Public IP Address.
     */
    public readonly migrationPhase!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The NatGateway for the Public IP address.
     */
    public readonly natGateway!: pulumi.Output<types.outputs.NatGatewayResponse | undefined>;
    /**
     * The provisioning state of the public IP address resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The public IP address version.
     */
    public readonly publicIPAddressVersion!: pulumi.Output<string | undefined>;
    /**
     * The public IP address allocation method.
     */
    public readonly publicIPAllocationMethod!: pulumi.Output<string | undefined>;
    /**
     * The Public IP Prefix this Public IP Address should be allocated from.
     */
    public readonly publicIPPrefix!: pulumi.Output<types.outputs.SubResourceResponse | undefined>;
    /**
     * The resource GUID property of the public IP address resource.
     */
    public /*out*/ readonly resourceGuid!: pulumi.Output<string>;
    /**
     * The service public IP address of the public IP address resource.
     */
    public readonly servicePublicIPAddress!: pulumi.Output<types.outputs.PublicIPAddressResponse | undefined>;
    /**
     * The public IP address SKU.
     */
    public readonly sku!: pulumi.Output<types.outputs.PublicIPAddressSkuResponse | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * A list of availability zones denoting the IP allocated for the resource needs to come from.
     */
    public readonly zones!: pulumi.Output<string[] | undefined>;

    /**
     * Create a PublicIPAddress resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PublicIPAddressArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["ddosSettings"] = args ? args.ddosSettings : undefined;
            resourceInputs["deleteOption"] = args ? args.deleteOption : undefined;
            resourceInputs["dnsSettings"] = args ? args.dnsSettings : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["idleTimeoutInMinutes"] = args ? args.idleTimeoutInMinutes : undefined;
            resourceInputs["ipAddress"] = args ? args.ipAddress : undefined;
            resourceInputs["ipTags"] = args ? args.ipTags : undefined;
            resourceInputs["linkedPublicIPAddress"] = args ? args.linkedPublicIPAddress : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["migrationPhase"] = args ? args.migrationPhase : undefined;
            resourceInputs["natGateway"] = args ? args.natGateway : undefined;
            resourceInputs["publicIPAddressVersion"] = args ? args.publicIPAddressVersion : undefined;
            resourceInputs["publicIPAllocationMethod"] = args ? args.publicIPAllocationMethod : undefined;
            resourceInputs["publicIPPrefix"] = args ? args.publicIPPrefix : undefined;
            resourceInputs["publicIpAddressName"] = args ? args.publicIpAddressName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["servicePublicIPAddress"] = args ? args.servicePublicIPAddress : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["zones"] = args ? args.zones : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["ipConfiguration"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["ddosSettings"] = undefined /*out*/;
            resourceInputs["deleteOption"] = undefined /*out*/;
            resourceInputs["dnsSettings"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["idleTimeoutInMinutes"] = undefined /*out*/;
            resourceInputs["ipAddress"] = undefined /*out*/;
            resourceInputs["ipConfiguration"] = undefined /*out*/;
            resourceInputs["ipTags"] = undefined /*out*/;
            resourceInputs["linkedPublicIPAddress"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["migrationPhase"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["natGateway"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicIPAddressVersion"] = undefined /*out*/;
            resourceInputs["publicIPAllocationMethod"] = undefined /*out*/;
            resourceInputs["publicIPPrefix"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["servicePublicIPAddress"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["zones"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20150501preview:PublicIPAddress" }, { type: "azure-native:network/v20150615:PublicIPAddress" }, { type: "azure-native:network/v20160330:PublicIPAddress" }, { type: "azure-native:network/v20160601:PublicIPAddress" }, { type: "azure-native:network/v20160901:PublicIPAddress" }, { type: "azure-native:network/v20161201:PublicIPAddress" }, { type: "azure-native:network/v20170301:PublicIPAddress" }, { type: "azure-native:network/v20170601:PublicIPAddress" }, { type: "azure-native:network/v20170801:PublicIPAddress" }, { type: "azure-native:network/v20170901:PublicIPAddress" }, { type: "azure-native:network/v20171001:PublicIPAddress" }, { type: "azure-native:network/v20171101:PublicIPAddress" }, { type: "azure-native:network/v20180101:PublicIPAddress" }, { type: "azure-native:network/v20180201:PublicIPAddress" }, { type: "azure-native:network/v20180401:PublicIPAddress" }, { type: "azure-native:network/v20180601:PublicIPAddress" }, { type: "azure-native:network/v20180701:PublicIPAddress" }, { type: "azure-native:network/v20180801:PublicIPAddress" }, { type: "azure-native:network/v20181001:PublicIPAddress" }, { type: "azure-native:network/v20181101:PublicIPAddress" }, { type: "azure-native:network/v20181201:PublicIPAddress" }, { type: "azure-native:network/v20190201:PublicIPAddress" }, { type: "azure-native:network/v20190401:PublicIPAddress" }, { type: "azure-native:network/v20190601:PublicIPAddress" }, { type: "azure-native:network/v20190701:PublicIPAddress" }, { type: "azure-native:network/v20190801:PublicIPAddress" }, { type: "azure-native:network/v20190901:PublicIPAddress" }, { type: "azure-native:network/v20191101:PublicIPAddress" }, { type: "azure-native:network/v20191201:PublicIPAddress" }, { type: "azure-native:network/v20200301:PublicIPAddress" }, { type: "azure-native:network/v20200401:PublicIPAddress" }, { type: "azure-native:network/v20200501:PublicIPAddress" }, { type: "azure-native:network/v20200601:PublicIPAddress" }, { type: "azure-native:network/v20200701:PublicIPAddress" }, { type: "azure-native:network/v20200801:PublicIPAddress" }, { type: "azure-native:network/v20201101:PublicIPAddress" }, { type: "azure-native:network/v20210201:PublicIPAddress" }, { type: "azure-native:network/v20210301:PublicIPAddress" }, { type: "azure-native:network/v20210501:PublicIPAddress" }, { type: "azure-native:network/v20210801:PublicIPAddress" }, { type: "azure-native:network/v20220101:PublicIPAddress" }, { type: "azure-native:network/v20220501:PublicIPAddress" }, { type: "azure-native:network/v20220701:PublicIPAddress" }, { type: "azure-native:network/v20220901:PublicIPAddress" }, { type: "azure-native:network/v20221101:PublicIPAddress" }, { type: "azure-native:network/v20230201:PublicIPAddress" }, { type: "azure-native:network/v20230401:PublicIPAddress" }, { type: "azure-native:network/v20230501:PublicIPAddress" }, { type: "azure-native:network/v20230601:PublicIPAddress" }, { type: "azure-native:network/v20230901:PublicIPAddress" }, { type: "azure-native:network/v20231101:PublicIPAddress" }, { type: "azure-native:network/v20240101:PublicIPAddress" }, { type: "azure-native:network/v20240301:PublicIPAddress" }, { type: "azure-native:network/v20240501:PublicIPAddress" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PublicIPAddress.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PublicIPAddress resource.
 */
export interface PublicIPAddressArgs {
    /**
     * The DDoS protection custom policy associated with the public IP address.
     */
    ddosSettings?: pulumi.Input<types.inputs.DdosSettingsArgs>;
    /**
     * Specify what happens to the public IP address when the VM using it is deleted
     */
    deleteOption?: pulumi.Input<string | types.enums.DeleteOptions>;
    /**
     * The FQDN of the DNS record associated with the public IP address.
     */
    dnsSettings?: pulumi.Input<types.inputs.PublicIPAddressDnsSettingsArgs>;
    /**
     * The extended location of the public ip address.
     */
    extendedLocation?: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The idle timeout of the public IP address.
     */
    idleTimeoutInMinutes?: pulumi.Input<number>;
    /**
     * The IP address associated with the public IP address resource.
     */
    ipAddress?: pulumi.Input<string>;
    /**
     * The list of tags associated with the public IP address.
     */
    ipTags?: pulumi.Input<pulumi.Input<types.inputs.IpTagArgs>[]>;
    /**
     * The linked public IP address of the public IP address resource.
     */
    linkedPublicIPAddress?: pulumi.Input<types.inputs.PublicIPAddressArgs>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * Migration phase of Public IP Address.
     */
    migrationPhase?: pulumi.Input<string | types.enums.PublicIPAddressMigrationPhase>;
    /**
     * The NatGateway for the Public IP address.
     */
    natGateway?: pulumi.Input<types.inputs.NatGatewayArgs>;
    /**
     * The public IP address version.
     */
    publicIPAddressVersion?: pulumi.Input<string | types.enums.IPVersion>;
    /**
     * The public IP address allocation method.
     */
    publicIPAllocationMethod?: pulumi.Input<string | types.enums.IPAllocationMethod>;
    /**
     * The Public IP Prefix this Public IP Address should be allocated from.
     */
    publicIPPrefix?: pulumi.Input<types.inputs.SubResourceArgs>;
    /**
     * The name of the public IP address.
     */
    publicIpAddressName?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The service public IP address of the public IP address resource.
     */
    servicePublicIPAddress?: pulumi.Input<types.inputs.PublicIPAddressArgs>;
    /**
     * The public IP address SKU.
     */
    sku?: pulumi.Input<types.inputs.PublicIPAddressSkuArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A list of availability zones denoting the IP allocated for the resource needs to come from.
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}