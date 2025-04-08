import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * ExpressRoutePort resource definition.
 *
 * Uses Azure REST API version 2024-05-01. In version 2.x of the Azure Native provider, it used API version 2023-02-01.
 *
 * Other available API versions: 2018-08-01, 2018-10-01, 2018-11-01, 2018-12-01, 2019-02-01, 2019-04-01, 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class ExpressRoutePort extends pulumi.CustomResource {
    /**
     * Get an existing ExpressRoutePort resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ExpressRoutePort {
        return new ExpressRoutePort(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:ExpressRoutePort';

    /**
     * Returns true if the given object is an instance of ExpressRoutePort.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ExpressRoutePort {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ExpressRoutePort.__pulumiType;
    }

    /**
     * Date of the physical port allocation to be used in Letter of Authorization.
     */
    public /*out*/ readonly allocationDate!: pulumi.Output<string>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Bandwidth of procured ports in Gbps.
     */
    public readonly bandwidthInGbps!: pulumi.Output<number | undefined>;
    /**
     * The billing type of the ExpressRoutePort resource.
     */
    public readonly billingType!: pulumi.Output<string | undefined>;
    /**
     * Reference the ExpressRoute circuit(s) that are provisioned on this ExpressRoutePort resource.
     */
    public /*out*/ readonly circuits!: pulumi.Output<types.outputs.SubResourceResponse[]>;
    /**
     * Encapsulation method on physical ports.
     */
    public readonly encapsulation!: pulumi.Output<string | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Ether type of the physical port.
     */
    public /*out*/ readonly etherType!: pulumi.Output<string>;
    /**
     * The identity of ExpressRoutePort, if configured.
     */
    public readonly identity!: pulumi.Output<types.outputs.ManagedServiceIdentityResponse | undefined>;
    /**
     * The set of physical links of the ExpressRoutePort resource.
     */
    public readonly links!: pulumi.Output<types.outputs.ExpressRouteLinkResponse[] | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Maximum transmission unit of the physical port pair(s).
     */
    public /*out*/ readonly mtu!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The name of the peering location that the ExpressRoutePort is mapped to physically.
     */
    public readonly peeringLocation!: pulumi.Output<string | undefined>;
    /**
     * Aggregate Gbps of associated circuit bandwidths.
     */
    public /*out*/ readonly provisionedBandwidthInGbps!: pulumi.Output<number>;
    /**
     * The provisioning state of the express route port resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The resource GUID property of the express route port resource.
     */
    public /*out*/ readonly resourceGuid!: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ExpressRoutePort resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ExpressRoutePortArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["bandwidthInGbps"] = args ? args.bandwidthInGbps : undefined;
            resourceInputs["billingType"] = args ? args.billingType : undefined;
            resourceInputs["encapsulation"] = args ? args.encapsulation : undefined;
            resourceInputs["expressRoutePortName"] = args ? args.expressRoutePortName : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["links"] = args ? args.links : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["peeringLocation"] = args ? args.peeringLocation : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["allocationDate"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["circuits"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["etherType"] = undefined /*out*/;
            resourceInputs["mtu"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisionedBandwidthInGbps"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["allocationDate"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["bandwidthInGbps"] = undefined /*out*/;
            resourceInputs["billingType"] = undefined /*out*/;
            resourceInputs["circuits"] = undefined /*out*/;
            resourceInputs["encapsulation"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["etherType"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["links"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["mtu"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["peeringLocation"] = undefined /*out*/;
            resourceInputs["provisionedBandwidthInGbps"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20180801:ExpressRoutePort" }, { type: "azure-native:network/v20181001:ExpressRoutePort" }, { type: "azure-native:network/v20181101:ExpressRoutePort" }, { type: "azure-native:network/v20181201:ExpressRoutePort" }, { type: "azure-native:network/v20190201:ExpressRoutePort" }, { type: "azure-native:network/v20190401:ExpressRoutePort" }, { type: "azure-native:network/v20190601:ExpressRoutePort" }, { type: "azure-native:network/v20190701:ExpressRoutePort" }, { type: "azure-native:network/v20190801:ExpressRoutePort" }, { type: "azure-native:network/v20190901:ExpressRoutePort" }, { type: "azure-native:network/v20191101:ExpressRoutePort" }, { type: "azure-native:network/v20191201:ExpressRoutePort" }, { type: "azure-native:network/v20200301:ExpressRoutePort" }, { type: "azure-native:network/v20200401:ExpressRoutePort" }, { type: "azure-native:network/v20200501:ExpressRoutePort" }, { type: "azure-native:network/v20200601:ExpressRoutePort" }, { type: "azure-native:network/v20200701:ExpressRoutePort" }, { type: "azure-native:network/v20200801:ExpressRoutePort" }, { type: "azure-native:network/v20201101:ExpressRoutePort" }, { type: "azure-native:network/v20210201:ExpressRoutePort" }, { type: "azure-native:network/v20210301:ExpressRoutePort" }, { type: "azure-native:network/v20210501:ExpressRoutePort" }, { type: "azure-native:network/v20210801:ExpressRoutePort" }, { type: "azure-native:network/v20220101:ExpressRoutePort" }, { type: "azure-native:network/v20220501:ExpressRoutePort" }, { type: "azure-native:network/v20220701:ExpressRoutePort" }, { type: "azure-native:network/v20220901:ExpressRoutePort" }, { type: "azure-native:network/v20221101:ExpressRoutePort" }, { type: "azure-native:network/v20230201:ExpressRoutePort" }, { type: "azure-native:network/v20230401:ExpressRoutePort" }, { type: "azure-native:network/v20230501:ExpressRoutePort" }, { type: "azure-native:network/v20230601:ExpressRoutePort" }, { type: "azure-native:network/v20230901:ExpressRoutePort" }, { type: "azure-native:network/v20231101:ExpressRoutePort" }, { type: "azure-native:network/v20240101:ExpressRoutePort" }, { type: "azure-native:network/v20240301:ExpressRoutePort" }, { type: "azure-native:network/v20240501:ExpressRoutePort" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ExpressRoutePort.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ExpressRoutePort resource.
 */
export interface ExpressRoutePortArgs {
    /**
     * Bandwidth of procured ports in Gbps.
     */
    bandwidthInGbps?: pulumi.Input<number>;
    /**
     * The billing type of the ExpressRoutePort resource.
     */
    billingType?: pulumi.Input<string | types.enums.ExpressRoutePortsBillingType>;
    /**
     * Encapsulation method on physical ports.
     */
    encapsulation?: pulumi.Input<string | types.enums.ExpressRoutePortsEncapsulation>;
    /**
     * The name of the ExpressRoutePort resource.
     */
    expressRoutePortName?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The identity of ExpressRoutePort, if configured.
     */
    identity?: pulumi.Input<types.inputs.ManagedServiceIdentityArgs>;
    /**
     * The set of physical links of the ExpressRoutePort resource.
     */
    links?: pulumi.Input<pulumi.Input<types.inputs.ExpressRouteLinkArgs>[]>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the peering location that the ExpressRoutePort is mapped to physically.
     */
    peeringLocation?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}