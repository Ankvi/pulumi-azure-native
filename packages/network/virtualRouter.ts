import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * VirtualRouter Resource.
 *
 * Uses Azure REST API version 2024-05-01. In version 2.x of the Azure Native provider, it used API version 2023-02-01.
 *
 * Other available API versions: 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class VirtualRouter extends pulumi.CustomResource {
    /**
     * Get an existing VirtualRouter resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualRouter {
        return new VirtualRouter(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:VirtualRouter';

    /**
     * Returns true if the given object is an instance of VirtualRouter.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualRouter {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualRouter.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The Gateway on which VirtualRouter is hosted.
     */
    public readonly hostedGateway!: pulumi.Output<types.outputs.SubResourceResponse | undefined>;
    /**
     * The Subnet on which VirtualRouter is hosted.
     */
    public readonly hostedSubnet!: pulumi.Output<types.outputs.SubResourceResponse | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * List of references to VirtualRouterPeerings.
     */
    public /*out*/ readonly peerings!: pulumi.Output<types.outputs.SubResourceResponse[]>;
    /**
     * The provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * VirtualRouter ASN.
     */
    public readonly virtualRouterAsn!: pulumi.Output<number | undefined>;
    /**
     * VirtualRouter IPs.
     */
    public readonly virtualRouterIps!: pulumi.Output<string[] | undefined>;

    /**
     * Create a VirtualRouter resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualRouterArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["hostedGateway"] = args ? args.hostedGateway : undefined;
            resourceInputs["hostedSubnet"] = args ? args.hostedSubnet : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["virtualRouterAsn"] = args ? args.virtualRouterAsn : undefined;
            resourceInputs["virtualRouterIps"] = args ? args.virtualRouterIps : undefined;
            resourceInputs["virtualRouterName"] = args ? args.virtualRouterName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["peerings"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["hostedGateway"] = undefined /*out*/;
            resourceInputs["hostedSubnet"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["peerings"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualRouterAsn"] = undefined /*out*/;
            resourceInputs["virtualRouterIps"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20190701:VirtualRouter" }, { type: "azure-native:network/v20190801:VirtualRouter" }, { type: "azure-native:network/v20190901:VirtualRouter" }, { type: "azure-native:network/v20191101:VirtualRouter" }, { type: "azure-native:network/v20191201:VirtualRouter" }, { type: "azure-native:network/v20200301:VirtualRouter" }, { type: "azure-native:network/v20200401:VirtualRouter" }, { type: "azure-native:network/v20200501:VirtualRouter" }, { type: "azure-native:network/v20200601:VirtualRouter" }, { type: "azure-native:network/v20200701:VirtualRouter" }, { type: "azure-native:network/v20200801:VirtualRouter" }, { type: "azure-native:network/v20201101:VirtualRouter" }, { type: "azure-native:network/v20210201:VirtualRouter" }, { type: "azure-native:network/v20210301:VirtualRouter" }, { type: "azure-native:network/v20210501:VirtualRouter" }, { type: "azure-native:network/v20210801:VirtualRouter" }, { type: "azure-native:network/v20220101:VirtualRouter" }, { type: "azure-native:network/v20220501:VirtualRouter" }, { type: "azure-native:network/v20220701:VirtualRouter" }, { type: "azure-native:network/v20220901:VirtualRouter" }, { type: "azure-native:network/v20221101:VirtualRouter" }, { type: "azure-native:network/v20230201:VirtualRouter" }, { type: "azure-native:network/v20230401:VirtualRouter" }, { type: "azure-native:network/v20230501:VirtualRouter" }, { type: "azure-native:network/v20230601:VirtualRouter" }, { type: "azure-native:network/v20230901:VirtualRouter" }, { type: "azure-native:network/v20231101:VirtualRouter" }, { type: "azure-native:network/v20240101:VirtualRouter" }, { type: "azure-native:network/v20240301:VirtualRouter" }, { type: "azure-native:network/v20240501:VirtualRouter" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VirtualRouter.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VirtualRouter resource.
 */
export interface VirtualRouterArgs {
    /**
     * The Gateway on which VirtualRouter is hosted.
     */
    hostedGateway?: pulumi.Input<types.inputs.SubResourceArgs>;
    /**
     * The Subnet on which VirtualRouter is hosted.
     */
    hostedSubnet?: pulumi.Input<types.inputs.SubResourceArgs>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * VirtualRouter ASN.
     */
    virtualRouterAsn?: pulumi.Input<number>;
    /**
     * VirtualRouter IPs.
     */
    virtualRouterIps?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the Virtual Router.
     */
    virtualRouterName?: pulumi.Input<string>;
}