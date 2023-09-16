import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Virtual Network route contract used to pass routing information for a Virtual Network.
 */
export class AppServicePlanRouteForVnet extends pulumi.CustomResource {
    /**
     * Get an existing AppServicePlanRouteForVnet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AppServicePlanRouteForVnet {
        return new AppServicePlanRouteForVnet(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:web/v20160901:AppServicePlanRouteForVnet';

    /**
     * Returns true if the given object is an instance of AppServicePlanRouteForVnet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AppServicePlanRouteForVnet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AppServicePlanRouteForVnet.__pulumiType;
    }

    /**
     * The ending address for this route. If the start address is specified in CIDR notation, this must be omitted.
     */
    public readonly endAddress!: pulumi.Output<string | undefined>;
    /**
     * Kind of resource.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Resource Name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The type of route this is:
     * DEFAULT - By default, every app has routes to the local address ranges specified by RFC1918
     * INHERITED - Routes inherited from the real Virtual Network routes
     * STATIC - Static route set on the app only
     *
     * These values will be used for syncing an app's routes with those from a Virtual Network.
     */
    public readonly routeType!: pulumi.Output<string | undefined>;
    /**
     * The starting address for this route. This may also include a CIDR notation, in which case the end address must not be specified.
     */
    public readonly startAddress!: pulumi.Output<string | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The name of this route. This is only returned by the server and does not need to be set by the client.
     */
    public readonly vnetRouteName!: pulumi.Output<string | undefined>;

    /**
     * Create a AppServicePlanRouteForVnet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AppServicePlanRouteForVnetArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.vnetName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vnetName'");
            }
            resourceInputs["endAddress"] = args ? args.endAddress : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["routeName"] = args ? args.routeName : undefined;
            resourceInputs["routeType"] = args ? args.routeType : undefined;
            resourceInputs["startAddress"] = args ? args.startAddress : undefined;
            resourceInputs["vnetName"] = args ? args.vnetName : undefined;
            resourceInputs["vnetRouteName"] = args ? args.vnetRouteName : undefined;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["endAddress"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["routeType"] = undefined /*out*/;
            resourceInputs["startAddress"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vnetRouteName"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:web:AppServicePlanRouteForVnet" }, { type: "azure-native:web/v20150801:AppServicePlanRouteForVnet" }, { type: "azure-native:web/v20180201:AppServicePlanRouteForVnet" }, { type: "azure-native:web/v20190801:AppServicePlanRouteForVnet" }, { type: "azure-native:web/v20200601:AppServicePlanRouteForVnet" }, { type: "azure-native:web/v20200901:AppServicePlanRouteForVnet" }, { type: "azure-native:web/v20201001:AppServicePlanRouteForVnet" }, { type: "azure-native:web/v20201201:AppServicePlanRouteForVnet" }, { type: "azure-native:web/v20210101:AppServicePlanRouteForVnet" }, { type: "azure-native:web/v20210115:AppServicePlanRouteForVnet" }, { type: "azure-native:web/v20210201:AppServicePlanRouteForVnet" }, { type: "azure-native:web/v20210301:AppServicePlanRouteForVnet" }, { type: "azure-native:web/v20220301:AppServicePlanRouteForVnet" }, { type: "azure-native:web/v20220901:AppServicePlanRouteForVnet" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AppServicePlanRouteForVnet.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AppServicePlanRouteForVnet resource.
 */
export interface AppServicePlanRouteForVnetArgs {
    /**
     * The ending address for this route. If the start address is specified in CIDR notation, this must be omitted.
     */
    endAddress?: pulumi.Input<string>;
    /**
     * Kind of resource.
     */
    kind?: pulumi.Input<string>;
    /**
     * Name of the App Service plan.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the Virtual Network route.
     */
    routeName?: pulumi.Input<string>;
    /**
     * The type of route this is:
     * DEFAULT - By default, every app has routes to the local address ranges specified by RFC1918
     * INHERITED - Routes inherited from the real Virtual Network routes
     * STATIC - Static route set on the app only
     *
     * These values will be used for syncing an app's routes with those from a Virtual Network.
     */
    routeType?: pulumi.Input<string | types.enums.v20160901.RouteType>;
    /**
     * The starting address for this route. This may also include a CIDR notation, in which case the end address must not be specified.
     */
    startAddress?: pulumi.Input<string>;
    /**
     * Name of the Virtual Network.
     */
    vnetName: pulumi.Input<string>;
    /**
     * The name of this route. This is only returned by the server and does not need to be set by the client.
     */
    vnetRouteName?: pulumi.Input<string>;
}
