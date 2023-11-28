import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * RouteTable resource in a virtual hub.
 */
export class HubRouteTable extends pulumi.CustomResource {
    /**
     * Get an existing HubRouteTable resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): HubRouteTable {
        return new HubRouteTable(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network/v20230401:HubRouteTable';

    /**
     * Returns true if the given object is an instance of HubRouteTable.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is HubRouteTable {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === HubRouteTable.__pulumiType;
    }

    /**
     * List of all connections associated with this route table.
     */
    public /*out*/ readonly associatedConnections!: pulumi.Output<string[]>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * List of labels associated with this route table.
     */
    public readonly labels!: pulumi.Output<string[] | undefined>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * List of all connections that advertise to this route table.
     */
    public /*out*/ readonly propagatingConnections!: pulumi.Output<string[]>;
    /**
     * The provisioning state of the RouteTable resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * List of all routes.
     */
    public readonly routes!: pulumi.Output<types.outputs.HubRouteResponse[] | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a HubRouteTable resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HubRouteTableArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.virtualHubName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'virtualHubName'");
            }
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["routeTableName"] = args ? args.routeTableName : undefined;
            resourceInputs["routes"] = args ? args.routes : undefined;
            resourceInputs["virtualHubName"] = args ? args.virtualHubName : undefined;
            resourceInputs["associatedConnections"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["propagatingConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["associatedConnections"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["labels"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["propagatingConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["routes"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network:HubRouteTable" }, { type: "azure-native:network/v20200401:HubRouteTable" }, { type: "azure-native:network/v20200501:HubRouteTable" }, { type: "azure-native:network/v20200601:HubRouteTable" }, { type: "azure-native:network/v20200701:HubRouteTable" }, { type: "azure-native:network/v20200801:HubRouteTable" }, { type: "azure-native:network/v20201101:HubRouteTable" }, { type: "azure-native:network/v20210201:HubRouteTable" }, { type: "azure-native:network/v20210301:HubRouteTable" }, { type: "azure-native:network/v20210501:HubRouteTable" }, { type: "azure-native:network/v20210801:HubRouteTable" }, { type: "azure-native:network/v20220101:HubRouteTable" }, { type: "azure-native:network/v20220501:HubRouteTable" }, { type: "azure-native:network/v20220701:HubRouteTable" }, { type: "azure-native:network/v20220901:HubRouteTable" }, { type: "azure-native:network/v20221101:HubRouteTable" }, { type: "azure-native:network/v20230201:HubRouteTable" }, { type: "azure-native:network/v20230501:HubRouteTable" }, { type: "azure-native:network/v20230601:HubRouteTable" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(HubRouteTable.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a HubRouteTable resource.
 */
export interface HubRouteTableArgs {
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * List of labels associated with this route table.
     */
    labels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * The resource group name of the VirtualHub.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the RouteTable.
     */
    routeTableName?: pulumi.Input<string>;
    /**
     * List of all routes.
     */
    routes?: pulumi.Input<pulumi.Input<types.inputs.HubRouteArgs>[]>;
    /**
     * The name of the VirtualHub.
     */
    virtualHubName: pulumi.Input<string>;
}
