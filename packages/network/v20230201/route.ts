import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Route resource.
 */
export class Route extends pulumi.CustomResource {
    /**
     * Get an existing Route resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Route {
        return new Route(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network/v20230201:Route';

    /**
     * Returns true if the given object is an instance of Route.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Route {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Route.__pulumiType;
    }

    /**
     * The destination CIDR to which the route applies.
     */
    public readonly addressPrefix!: pulumi.Output<string | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * A value indicating whether this route overrides overlapping BGP routes regardless of LPM.
     */
    public readonly hasBgpOverride!: pulumi.Output<boolean | undefined>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance.
     */
    public readonly nextHopIpAddress!: pulumi.Output<string | undefined>;
    /**
     * The type of Azure hop the packet should be sent to.
     */
    public readonly nextHopType!: pulumi.Output<string>;
    /**
     * The provisioning state of the route resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The type of the resource.
     */
    public readonly type!: pulumi.Output<string | undefined>;

    /**
     * Create a Route resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RouteArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.nextHopType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'nextHopType'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.routeTableName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'routeTableName'");
            }
            resourceInputs["addressPrefix"] = args ? args.addressPrefix : undefined;
            resourceInputs["hasBgpOverride"] = args ? args.hasBgpOverride : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nextHopIpAddress"] = args ? args.nextHopIpAddress : undefined;
            resourceInputs["nextHopType"] = args ? args.nextHopType : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["routeName"] = args ? args.routeName : undefined;
            resourceInputs["routeTableName"] = args ? args.routeTableName : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
        } else {
            resourceInputs["addressPrefix"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["hasBgpOverride"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nextHopIpAddress"] = undefined /*out*/;
            resourceInputs["nextHopType"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network:Route" }, { type: "azure-native:network/v20150501preview:Route" }, { type: "azure-native:network/v20150615:Route" }, { type: "azure-native:network/v20160330:Route" }, { type: "azure-native:network/v20160601:Route" }, { type: "azure-native:network/v20160901:Route" }, { type: "azure-native:network/v20161201:Route" }, { type: "azure-native:network/v20170301:Route" }, { type: "azure-native:network/v20170601:Route" }, { type: "azure-native:network/v20170801:Route" }, { type: "azure-native:network/v20170901:Route" }, { type: "azure-native:network/v20171001:Route" }, { type: "azure-native:network/v20171101:Route" }, { type: "azure-native:network/v20180101:Route" }, { type: "azure-native:network/v20180201:Route" }, { type: "azure-native:network/v20180401:Route" }, { type: "azure-native:network/v20180601:Route" }, { type: "azure-native:network/v20180701:Route" }, { type: "azure-native:network/v20180801:Route" }, { type: "azure-native:network/v20181001:Route" }, { type: "azure-native:network/v20181101:Route" }, { type: "azure-native:network/v20181201:Route" }, { type: "azure-native:network/v20190201:Route" }, { type: "azure-native:network/v20190401:Route" }, { type: "azure-native:network/v20190601:Route" }, { type: "azure-native:network/v20190701:Route" }, { type: "azure-native:network/v20190801:Route" }, { type: "azure-native:network/v20190901:Route" }, { type: "azure-native:network/v20191101:Route" }, { type: "azure-native:network/v20191201:Route" }, { type: "azure-native:network/v20200301:Route" }, { type: "azure-native:network/v20200401:Route" }, { type: "azure-native:network/v20200501:Route" }, { type: "azure-native:network/v20200601:Route" }, { type: "azure-native:network/v20200701:Route" }, { type: "azure-native:network/v20200801:Route" }, { type: "azure-native:network/v20201101:Route" }, { type: "azure-native:network/v20210201:Route" }, { type: "azure-native:network/v20210301:Route" }, { type: "azure-native:network/v20210501:Route" }, { type: "azure-native:network/v20210801:Route" }, { type: "azure-native:network/v20220101:Route" }, { type: "azure-native:network/v20220501:Route" }, { type: "azure-native:network/v20220701:Route" }, { type: "azure-native:network/v20220901:Route" }, { type: "azure-native:network/v20221101:Route" }, { type: "azure-native:network/v20230401:Route" }, { type: "azure-native:network/v20230501:Route" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Route.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Route resource.
 */
export interface RouteArgs {
    /**
     * The destination CIDR to which the route applies.
     */
    addressPrefix?: pulumi.Input<string>;
    /**
     * A value indicating whether this route overrides overlapping BGP routes regardless of LPM.
     */
    hasBgpOverride?: pulumi.Input<boolean>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance.
     */
    nextHopIpAddress?: pulumi.Input<string>;
    /**
     * The type of Azure hop the packet should be sent to.
     */
    nextHopType: pulumi.Input<string | types.enums.RouteNextHopType>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the route.
     */
    routeName?: pulumi.Input<string>;
    /**
     * The name of the route table.
     */
    routeTableName: pulumi.Input<string>;
    /**
     * The type of the resource.
     */
    type?: pulumi.Input<string>;
}
