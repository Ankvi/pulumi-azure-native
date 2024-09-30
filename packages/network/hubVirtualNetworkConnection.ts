import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * HubVirtualNetworkConnection Resource.
 * Azure REST API version: 2023-02-01. Prior API version in Azure Native 1.x: 2020-11-01.
 *
 * Other available API versions: 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01.
 */
export class HubVirtualNetworkConnection extends pulumi.CustomResource {
    /**
     * Get an existing HubVirtualNetworkConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): HubVirtualNetworkConnection {
        return new HubVirtualNetworkConnection(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:HubVirtualNetworkConnection';

    /**
     * Returns true if the given object is an instance of HubVirtualNetworkConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is HubVirtualNetworkConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === HubVirtualNetworkConnection.__pulumiType;
    }

    /**
     * Deprecated: VirtualHub to RemoteVnet transit to enabled or not.
     */
    public readonly allowHubToRemoteVnetTransit!: pulumi.Output<boolean | undefined>;
    /**
     * Deprecated: Allow RemoteVnet to use Virtual Hub's gateways.
     */
    public readonly allowRemoteVnetToUseHubVnetGateways!: pulumi.Output<boolean | undefined>;
    /**
     * Enable internet security.
     */
    public readonly enableInternetSecurity!: pulumi.Output<boolean | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * The provisioning state of the hub virtual network connection resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Reference to the remote virtual network.
     */
    public readonly remoteVirtualNetwork!: pulumi.Output<types.outputs.SubResourceResponse | undefined>;
    /**
     * The Routing Configuration indicating the associated and propagated route tables on this connection.
     */
    public readonly routingConfiguration!: pulumi.Output<types.outputs.RoutingConfigurationResponse | undefined>;

    /**
     * Create a HubVirtualNetworkConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HubVirtualNetworkConnectionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.virtualHubName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'virtualHubName'");
            }
            resourceInputs["allowHubToRemoteVnetTransit"] = args ? args.allowHubToRemoteVnetTransit : undefined;
            resourceInputs["allowRemoteVnetToUseHubVnetGateways"] = args ? args.allowRemoteVnetToUseHubVnetGateways : undefined;
            resourceInputs["connectionName"] = args ? args.connectionName : undefined;
            resourceInputs["enableInternetSecurity"] = args ? args.enableInternetSecurity : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["remoteVirtualNetwork"] = args ? args.remoteVirtualNetwork : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["routingConfiguration"] = args ? args.routingConfiguration : undefined;
            resourceInputs["virtualHubName"] = args ? args.virtualHubName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
        } else {
            resourceInputs["allowHubToRemoteVnetTransit"] = undefined /*out*/;
            resourceInputs["allowRemoteVnetToUseHubVnetGateways"] = undefined /*out*/;
            resourceInputs["enableInternetSecurity"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["remoteVirtualNetwork"] = undefined /*out*/;
            resourceInputs["routingConfiguration"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20200501:HubVirtualNetworkConnection" }, { type: "azure-native:network/v20200601:HubVirtualNetworkConnection" }, { type: "azure-native:network/v20200701:HubVirtualNetworkConnection" }, { type: "azure-native:network/v20200801:HubVirtualNetworkConnection" }, { type: "azure-native:network/v20201101:HubVirtualNetworkConnection" }, { type: "azure-native:network/v20210201:HubVirtualNetworkConnection" }, { type: "azure-native:network/v20210301:HubVirtualNetworkConnection" }, { type: "azure-native:network/v20210501:HubVirtualNetworkConnection" }, { type: "azure-native:network/v20210801:HubVirtualNetworkConnection" }, { type: "azure-native:network/v20220101:HubVirtualNetworkConnection" }, { type: "azure-native:network/v20220501:HubVirtualNetworkConnection" }, { type: "azure-native:network/v20220701:HubVirtualNetworkConnection" }, { type: "azure-native:network/v20220901:HubVirtualNetworkConnection" }, { type: "azure-native:network/v20221101:HubVirtualNetworkConnection" }, { type: "azure-native:network/v20230201:HubVirtualNetworkConnection" }, { type: "azure-native:network/v20230401:HubVirtualNetworkConnection" }, { type: "azure-native:network/v20230501:HubVirtualNetworkConnection" }, { type: "azure-native:network/v20230601:HubVirtualNetworkConnection" }, { type: "azure-native:network/v20230901:HubVirtualNetworkConnection" }, { type: "azure-native:network/v20231101:HubVirtualNetworkConnection" }, { type: "azure-native:network/v20240101:HubVirtualNetworkConnection" }, { type: "azure-native:network/v20240301:HubVirtualNetworkConnection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(HubVirtualNetworkConnection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a HubVirtualNetworkConnection resource.
 */
export interface HubVirtualNetworkConnectionArgs {
    /**
     * Deprecated: VirtualHub to RemoteVnet transit to enabled or not.
     */
    allowHubToRemoteVnetTransit?: pulumi.Input<boolean>;
    /**
     * Deprecated: Allow RemoteVnet to use Virtual Hub's gateways.
     */
    allowRemoteVnetToUseHubVnetGateways?: pulumi.Input<boolean>;
    /**
     * The name of the HubVirtualNetworkConnection.
     */
    connectionName?: pulumi.Input<string>;
    /**
     * Enable internet security.
     */
    enableInternetSecurity?: pulumi.Input<boolean>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * Reference to the remote virtual network.
     */
    remoteVirtualNetwork?: pulumi.Input<types.inputs.SubResourceArgs>;
    /**
     * The resource group name of the HubVirtualNetworkConnection.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The Routing Configuration indicating the associated and propagated route tables on this connection.
     */
    routingConfiguration?: pulumi.Input<types.inputs.RoutingConfigurationArgs>;
    /**
     * The name of the VirtualHub.
     */
    virtualHubName: pulumi.Input<string>;
}