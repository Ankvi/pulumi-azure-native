import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Private Endpoint connection on an application gateway.
 */
export class ApplicationGatewayPrivateEndpointConnection extends pulumi.CustomResource {
    /**
     * Get an existing ApplicationGatewayPrivateEndpointConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ApplicationGatewayPrivateEndpointConnection {
        return new ApplicationGatewayPrivateEndpointConnection(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network/v20230501:ApplicationGatewayPrivateEndpointConnection';

    /**
     * Returns true if the given object is an instance of ApplicationGatewayPrivateEndpointConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApplicationGatewayPrivateEndpointConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApplicationGatewayPrivateEndpointConnection.__pulumiType;
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
     * Name of the private endpoint connection on an application gateway.
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * The resource of private end point.
     */
    public /*out*/ readonly privateEndpoint!: pulumi.Output<types.outputs.PrivateEndpointResponse>;
    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    public readonly privateLinkServiceConnectionState!: pulumi.Output<types.outputs.PrivateLinkServiceConnectionStateResponse | undefined>;
    /**
     * The provisioning state of the application gateway private endpoint connection resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ApplicationGatewayPrivateEndpointConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApplicationGatewayPrivateEndpointConnectionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.applicationGatewayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'applicationGatewayName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["applicationGatewayName"] = args ? args.applicationGatewayName : undefined;
            resourceInputs["connectionName"] = args ? args.connectionName : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["privateLinkServiceConnectionState"] = args ? args.privateLinkServiceConnectionState : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["linkIdentifier"] = undefined /*out*/;
            resourceInputs["privateEndpoint"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["linkIdentifier"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpoint"] = undefined /*out*/;
            resourceInputs["privateLinkServiceConnectionState"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network:ApplicationGatewayPrivateEndpointConnection" }, { type: "azure-native:network/v20200501:ApplicationGatewayPrivateEndpointConnection" }, { type: "azure-native:network/v20200601:ApplicationGatewayPrivateEndpointConnection" }, { type: "azure-native:network/v20200701:ApplicationGatewayPrivateEndpointConnection" }, { type: "azure-native:network/v20200801:ApplicationGatewayPrivateEndpointConnection" }, { type: "azure-native:network/v20201101:ApplicationGatewayPrivateEndpointConnection" }, { type: "azure-native:network/v20210201:ApplicationGatewayPrivateEndpointConnection" }, { type: "azure-native:network/v20210301:ApplicationGatewayPrivateEndpointConnection" }, { type: "azure-native:network/v20210501:ApplicationGatewayPrivateEndpointConnection" }, { type: "azure-native:network/v20210801:ApplicationGatewayPrivateEndpointConnection" }, { type: "azure-native:network/v20220101:ApplicationGatewayPrivateEndpointConnection" }, { type: "azure-native:network/v20220501:ApplicationGatewayPrivateEndpointConnection" }, { type: "azure-native:network/v20220701:ApplicationGatewayPrivateEndpointConnection" }, { type: "azure-native:network/v20220901:ApplicationGatewayPrivateEndpointConnection" }, { type: "azure-native:network/v20221101:ApplicationGatewayPrivateEndpointConnection" }, { type: "azure-native:network/v20230201:ApplicationGatewayPrivateEndpointConnection" }, { type: "azure-native:network/v20230401:ApplicationGatewayPrivateEndpointConnection" }, { type: "azure-native:network/v20230601:ApplicationGatewayPrivateEndpointConnection" }, { type: "azure-native:network/v20230901:ApplicationGatewayPrivateEndpointConnection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ApplicationGatewayPrivateEndpointConnection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ApplicationGatewayPrivateEndpointConnection resource.
 */
export interface ApplicationGatewayPrivateEndpointConnectionArgs {
    /**
     * The name of the application gateway.
     */
    applicationGatewayName: pulumi.Input<string>;
    /**
     * The name of the application gateway private endpoint connection.
     */
    connectionName?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Name of the private endpoint connection on an application gateway.
     */
    name?: pulumi.Input<string>;
    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    privateLinkServiceConnectionState?: pulumi.Input<types.inputs.PrivateLinkServiceConnectionStateArgs>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}