import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * PrivateEndpointConnection resource.
 * Azure REST API version: 2023-02-01. Prior API version in Azure Native 1.x: 2020-11-01.
 *
 * Other available API versions: 2023-04-01, 2023-05-01, 2023-06-01.
 */
export class PrivateLinkServicePrivateEndpointConnection extends pulumi.CustomResource {
    /**
     * Get an existing PrivateLinkServicePrivateEndpointConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PrivateLinkServicePrivateEndpointConnection {
        return new PrivateLinkServicePrivateEndpointConnection(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:PrivateLinkServicePrivateEndpointConnection';

    /**
     * Returns true if the given object is an instance of PrivateLinkServicePrivateEndpointConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PrivateLinkServicePrivateEndpointConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PrivateLinkServicePrivateEndpointConnection.__pulumiType;
    }

    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The consumer link id.
     */
    public /*out*/ readonly linkIdentifier!: pulumi.Output<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * The resource of private end point.
     */
    public /*out*/ readonly privateEndpoint!: pulumi.Output<types.outputs.PrivateEndpointResponse>;
    /**
     * The location of the private endpoint.
     */
    public /*out*/ readonly privateEndpointLocation!: pulumi.Output<string>;
    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    public readonly privateLinkServiceConnectionState!: pulumi.Output<types.outputs.PrivateLinkServiceConnectionStateResponse | undefined>;
    /**
     * The provisioning state of the private endpoint connection resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a PrivateLinkServicePrivateEndpointConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PrivateLinkServicePrivateEndpointConnectionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["peConnectionName"] = args ? args.peConnectionName : undefined;
            resourceInputs["privateLinkServiceConnectionState"] = args ? args.privateLinkServiceConnectionState : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["linkIdentifier"] = undefined /*out*/;
            resourceInputs["privateEndpoint"] = undefined /*out*/;
            resourceInputs["privateEndpointLocation"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["linkIdentifier"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpoint"] = undefined /*out*/;
            resourceInputs["privateEndpointLocation"] = undefined /*out*/;
            resourceInputs["privateLinkServiceConnectionState"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20190901:PrivateLinkServicePrivateEndpointConnection" }, { type: "azure-native:network/v20191101:PrivateLinkServicePrivateEndpointConnection" }, { type: "azure-native:network/v20191201:PrivateLinkServicePrivateEndpointConnection" }, { type: "azure-native:network/v20200301:PrivateLinkServicePrivateEndpointConnection" }, { type: "azure-native:network/v20200401:PrivateLinkServicePrivateEndpointConnection" }, { type: "azure-native:network/v20200501:PrivateLinkServicePrivateEndpointConnection" }, { type: "azure-native:network/v20200601:PrivateLinkServicePrivateEndpointConnection" }, { type: "azure-native:network/v20200701:PrivateLinkServicePrivateEndpointConnection" }, { type: "azure-native:network/v20200801:PrivateLinkServicePrivateEndpointConnection" }, { type: "azure-native:network/v20201101:PrivateLinkServicePrivateEndpointConnection" }, { type: "azure-native:network/v20210201:PrivateLinkServicePrivateEndpointConnection" }, { type: "azure-native:network/v20210301:PrivateLinkServicePrivateEndpointConnection" }, { type: "azure-native:network/v20210501:PrivateLinkServicePrivateEndpointConnection" }, { type: "azure-native:network/v20210801:PrivateLinkServicePrivateEndpointConnection" }, { type: "azure-native:network/v20220101:PrivateLinkServicePrivateEndpointConnection" }, { type: "azure-native:network/v20220501:PrivateLinkServicePrivateEndpointConnection" }, { type: "azure-native:network/v20220701:PrivateLinkServicePrivateEndpointConnection" }, { type: "azure-native:network/v20220901:PrivateLinkServicePrivateEndpointConnection" }, { type: "azure-native:network/v20221101:PrivateLinkServicePrivateEndpointConnection" }, { type: "azure-native:network/v20230201:PrivateLinkServicePrivateEndpointConnection" }, { type: "azure-native:network/v20230401:PrivateLinkServicePrivateEndpointConnection" }, { type: "azure-native:network/v20230501:PrivateLinkServicePrivateEndpointConnection" }, { type: "azure-native:network/v20230601:PrivateLinkServicePrivateEndpointConnection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PrivateLinkServicePrivateEndpointConnection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PrivateLinkServicePrivateEndpointConnection resource.
 */
export interface PrivateLinkServicePrivateEndpointConnectionArgs {
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the private end point connection.
     */
    peConnectionName?: pulumi.Input<string>;
    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    privateLinkServiceConnectionState?: pulumi.Input<types.inputs.PrivateLinkServiceConnectionStateArgs>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the private link service.
     */
    serviceName: pulumi.Input<string>;
}
