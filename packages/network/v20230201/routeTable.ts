import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Route table resource.
 */
export class RouteTable extends pulumi.CustomResource {
    /**
     * Get an existing RouteTable resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): RouteTable {
        return new RouteTable(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network/v20230201:RouteTable';

    /**
     * Returns true if the given object is an instance of RouteTable.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RouteTable {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RouteTable.__pulumiType;
    }

    /**
     * Whether to disable the routes learned by BGP on that route table. True means disable.
     */
    public readonly disableBgpRoutePropagation!: pulumi.Output<boolean | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the route table resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The resource GUID property of the route table.
     */
    public /*out*/ readonly resourceGuid!: pulumi.Output<string>;
    /**
     * Collection of routes contained within a route table.
     */
    public readonly routes!: pulumi.Output<types.outputs.RouteResponse[] | undefined>;
    /**
     * A collection of references to subnets.
     */
    public /*out*/ readonly subnets!: pulumi.Output<types.outputs.SubnetResponse[]>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a RouteTable resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RouteTableArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["disableBgpRoutePropagation"] = args ? args.disableBgpRoutePropagation : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["routeTableName"] = args ? args.routeTableName : undefined;
            resourceInputs["routes"] = args ? args.routes : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["subnets"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["disableBgpRoutePropagation"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["routes"] = undefined /*out*/;
            resourceInputs["subnets"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network:RouteTable" }, { type: "azure-native:network/v20150501preview:RouteTable" }, { type: "azure-native:network/v20150615:RouteTable" }, { type: "azure-native:network/v20160330:RouteTable" }, { type: "azure-native:network/v20160601:RouteTable" }, { type: "azure-native:network/v20160901:RouteTable" }, { type: "azure-native:network/v20161201:RouteTable" }, { type: "azure-native:network/v20170301:RouteTable" }, { type: "azure-native:network/v20170601:RouteTable" }, { type: "azure-native:network/v20170801:RouteTable" }, { type: "azure-native:network/v20170901:RouteTable" }, { type: "azure-native:network/v20171001:RouteTable" }, { type: "azure-native:network/v20171101:RouteTable" }, { type: "azure-native:network/v20180101:RouteTable" }, { type: "azure-native:network/v20180201:RouteTable" }, { type: "azure-native:network/v20180401:RouteTable" }, { type: "azure-native:network/v20180601:RouteTable" }, { type: "azure-native:network/v20180701:RouteTable" }, { type: "azure-native:network/v20180801:RouteTable" }, { type: "azure-native:network/v20181001:RouteTable" }, { type: "azure-native:network/v20181101:RouteTable" }, { type: "azure-native:network/v20181201:RouteTable" }, { type: "azure-native:network/v20190201:RouteTable" }, { type: "azure-native:network/v20190401:RouteTable" }, { type: "azure-native:network/v20190601:RouteTable" }, { type: "azure-native:network/v20190701:RouteTable" }, { type: "azure-native:network/v20190801:RouteTable" }, { type: "azure-native:network/v20190901:RouteTable" }, { type: "azure-native:network/v20191101:RouteTable" }, { type: "azure-native:network/v20191201:RouteTable" }, { type: "azure-native:network/v20200301:RouteTable" }, { type: "azure-native:network/v20200401:RouteTable" }, { type: "azure-native:network/v20200501:RouteTable" }, { type: "azure-native:network/v20200601:RouteTable" }, { type: "azure-native:network/v20200701:RouteTable" }, { type: "azure-native:network/v20200801:RouteTable" }, { type: "azure-native:network/v20201101:RouteTable" }, { type: "azure-native:network/v20210201:RouteTable" }, { type: "azure-native:network/v20210301:RouteTable" }, { type: "azure-native:network/v20210501:RouteTable" }, { type: "azure-native:network/v20210801:RouteTable" }, { type: "azure-native:network/v20220101:RouteTable" }, { type: "azure-native:network/v20220501:RouteTable" }, { type: "azure-native:network/v20220701:RouteTable" }, { type: "azure-native:network/v20220901:RouteTable" }, { type: "azure-native:network/v20221101:RouteTable" }, { type: "azure-native:network/v20230401:RouteTable" }, { type: "azure-native:network/v20230501:RouteTable" }, { type: "azure-native:network/v20230601:RouteTable" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(RouteTable.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a RouteTable resource.
 */
export interface RouteTableArgs {
    /**
     * Whether to disable the routes learned by BGP on that route table. True means disable.
     */
    disableBgpRoutePropagation?: pulumi.Input<boolean>;
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
     * The name of the route table.
     */
    routeTableName?: pulumi.Input<string>;
    /**
     * Collection of routes contained within a route table.
     * These are also available as standalone resources. Do not mix inline and standalone resource as they will conflict with each other, leading to resources deletion.
     */
    routes?: pulumi.Input<pulumi.Input<types.inputs.RouteArgs>[]>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
