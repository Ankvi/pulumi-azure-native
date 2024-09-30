import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Route Filter Resource.
 * Azure REST API version: 2023-02-01. Prior API version in Azure Native 1.x: 2020-11-01.
 *
 * Other available API versions: 2019-08-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01.
 */
export class RouteFilter extends pulumi.CustomResource {
    /**
     * Get an existing RouteFilter resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): RouteFilter {
        return new RouteFilter(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:RouteFilter';

    /**
     * Returns true if the given object is an instance of RouteFilter.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RouteFilter {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RouteFilter.__pulumiType;
    }

    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * A collection of references to express route circuit ipv6 peerings.
     */
    public /*out*/ readonly ipv6Peerings!: pulumi.Output<types.outputs.ExpressRouteCircuitPeeringResponse[]>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * A collection of references to express route circuit peerings.
     */
    public /*out*/ readonly peerings!: pulumi.Output<types.outputs.ExpressRouteCircuitPeeringResponse[]>;
    /**
     * The provisioning state of the route filter resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Collection of RouteFilterRules contained within a route filter.
     */
    public readonly rules!: pulumi.Output<types.outputs.RouteFilterRuleResponse[] | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a RouteFilter resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RouteFilterArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["routeFilterName"] = args ? args.routeFilterName : undefined;
            resourceInputs["rules"] = args ? args.rules : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["ipv6Peerings"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["peerings"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["ipv6Peerings"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["peerings"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["rules"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20161201:RouteFilter" }, { type: "azure-native:network/v20170301:RouteFilter" }, { type: "azure-native:network/v20170601:RouteFilter" }, { type: "azure-native:network/v20170801:RouteFilter" }, { type: "azure-native:network/v20170901:RouteFilter" }, { type: "azure-native:network/v20171001:RouteFilter" }, { type: "azure-native:network/v20171101:RouteFilter" }, { type: "azure-native:network/v20180101:RouteFilter" }, { type: "azure-native:network/v20180201:RouteFilter" }, { type: "azure-native:network/v20180401:RouteFilter" }, { type: "azure-native:network/v20180601:RouteFilter" }, { type: "azure-native:network/v20180701:RouteFilter" }, { type: "azure-native:network/v20180801:RouteFilter" }, { type: "azure-native:network/v20181001:RouteFilter" }, { type: "azure-native:network/v20181101:RouteFilter" }, { type: "azure-native:network/v20181201:RouteFilter" }, { type: "azure-native:network/v20190201:RouteFilter" }, { type: "azure-native:network/v20190401:RouteFilter" }, { type: "azure-native:network/v20190601:RouteFilter" }, { type: "azure-native:network/v20190701:RouteFilter" }, { type: "azure-native:network/v20190801:RouteFilter" }, { type: "azure-native:network/v20190901:RouteFilter" }, { type: "azure-native:network/v20191101:RouteFilter" }, { type: "azure-native:network/v20191201:RouteFilter" }, { type: "azure-native:network/v20200301:RouteFilter" }, { type: "azure-native:network/v20200401:RouteFilter" }, { type: "azure-native:network/v20200501:RouteFilter" }, { type: "azure-native:network/v20200601:RouteFilter" }, { type: "azure-native:network/v20200701:RouteFilter" }, { type: "azure-native:network/v20200801:RouteFilter" }, { type: "azure-native:network/v20201101:RouteFilter" }, { type: "azure-native:network/v20210201:RouteFilter" }, { type: "azure-native:network/v20210301:RouteFilter" }, { type: "azure-native:network/v20210501:RouteFilter" }, { type: "azure-native:network/v20210801:RouteFilter" }, { type: "azure-native:network/v20220101:RouteFilter" }, { type: "azure-native:network/v20220501:RouteFilter" }, { type: "azure-native:network/v20220701:RouteFilter" }, { type: "azure-native:network/v20220901:RouteFilter" }, { type: "azure-native:network/v20221101:RouteFilter" }, { type: "azure-native:network/v20230201:RouteFilter" }, { type: "azure-native:network/v20230401:RouteFilter" }, { type: "azure-native:network/v20230501:RouteFilter" }, { type: "azure-native:network/v20230601:RouteFilter" }, { type: "azure-native:network/v20230901:RouteFilter" }, { type: "azure-native:network/v20231101:RouteFilter" }, { type: "azure-native:network/v20240101:RouteFilter" }, { type: "azure-native:network/v20240301:RouteFilter" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(RouteFilter.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a RouteFilter resource.
 */
export interface RouteFilterArgs {
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
     * The name of the route filter.
     */
    routeFilterName?: pulumi.Input<string>;
    /**
     * Collection of RouteFilterRules contained within a route filter.
     * These are also available as standalone resources. Do not mix inline and standalone resource as they will conflict with each other, leading to resources deletion.
     */
    rules?: pulumi.Input<pulumi.Input<types.inputs.RouteFilterRuleArgs>[]>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}