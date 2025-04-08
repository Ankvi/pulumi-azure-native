import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A private endpoint connection to an azure resource
 *
 * Uses Azure REST API version 2023-02-01. In version 1.x of the Azure Native provider, it used API version 2021-04-01-preview.
 *
 * Other available API versions: 2023-03-01-preview, 2023-06-01-preview, 2023-08-01-preview, 2024-01-01-preview, 2024-03-01, 2024-04-01-preview, 2024-08-01-preview, 2024-10-01-preview.
 */
export class WebPubSubPrivateEndpointConnection extends pulumi.CustomResource {
    /**
     * Get an existing WebPubSubPrivateEndpointConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebPubSubPrivateEndpointConnection {
        return new WebPubSubPrivateEndpointConnection(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:webpubsub:WebPubSubPrivateEndpointConnection';

    /**
     * Returns true if the given object is an instance of WebPubSubPrivateEndpointConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebPubSubPrivateEndpointConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebPubSubPrivateEndpointConnection.__pulumiType;
    }

    /**
     * Group IDs
     */
    public /*out*/ readonly groupIds!: pulumi.Output<string[]>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Private endpoint
     */
    public readonly privateEndpoint!: pulumi.Output<types.outputs.PrivateEndpointResponse | undefined>;
    /**
     * Connection state of the private endpoint connection
     */
    public readonly privateLinkServiceConnectionState!: pulumi.Output<types.outputs.PrivateLinkServiceConnectionStateResponse | undefined>;
    /**
     * Provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource - e.g. "Microsoft.SignalRService/SignalR"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a WebPubSubPrivateEndpointConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebPubSubPrivateEndpointConnectionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.resourceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceName'");
            }
            resourceInputs["privateEndpoint"] = args ? args.privateEndpoint : undefined;
            resourceInputs["privateEndpointConnectionName"] = args ? args.privateEndpointConnectionName : undefined;
            resourceInputs["privateLinkServiceConnectionState"] = args ? args.privateLinkServiceConnectionState : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["groupIds"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["groupIds"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpoint"] = undefined /*out*/;
            resourceInputs["privateLinkServiceConnectionState"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:webpubsub/v20210401preview:WebPubSubPrivateEndpointConnection" }, { type: "azure-native:webpubsub/v20210601preview:WebPubSubPrivateEndpointConnection" }, { type: "azure-native:webpubsub/v20210901preview:WebPubSubPrivateEndpointConnection" }, { type: "azure-native:webpubsub/v20211001:WebPubSubPrivateEndpointConnection" }, { type: "azure-native:webpubsub/v20220801preview:WebPubSubPrivateEndpointConnection" }, { type: "azure-native:webpubsub/v20230201:WebPubSubPrivateEndpointConnection" }, { type: "azure-native:webpubsub/v20230301preview:WebPubSubPrivateEndpointConnection" }, { type: "azure-native:webpubsub/v20230601preview:WebPubSubPrivateEndpointConnection" }, { type: "azure-native:webpubsub/v20230801preview:WebPubSubPrivateEndpointConnection" }, { type: "azure-native:webpubsub/v20240101preview:WebPubSubPrivateEndpointConnection" }, { type: "azure-native:webpubsub/v20240301:WebPubSubPrivateEndpointConnection" }, { type: "azure-native:webpubsub/v20240401preview:WebPubSubPrivateEndpointConnection" }, { type: "azure-native:webpubsub/v20240801preview:WebPubSubPrivateEndpointConnection" }, { type: "azure-native:webpubsub/v20241001preview:WebPubSubPrivateEndpointConnection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WebPubSubPrivateEndpointConnection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WebPubSubPrivateEndpointConnection resource.
 */
export interface WebPubSubPrivateEndpointConnectionArgs {
    /**
     * Private endpoint
     */
    privateEndpoint?: pulumi.Input<types.inputs.PrivateEndpointArgs>;
    /**
     * The name of the private endpoint connection
     */
    privateEndpointConnectionName?: pulumi.Input<string>;
    /**
     * Connection state of the private endpoint connection
     */
    privateLinkServiceConnectionState?: pulumi.Input<types.inputs.PrivateLinkServiceConnectionStateArgs>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the resource.
     */
    resourceName: pulumi.Input<string>;
}