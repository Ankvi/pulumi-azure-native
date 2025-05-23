import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A class represent a resource.
 *
 * Uses Azure REST API version 2024-03-01. In version 2.x of the Azure Native provider, it used API version 2023-02-01.
 *
 * Other available API versions: 2023-02-01, 2023-03-01-preview, 2023-06-01-preview, 2023-08-01-preview, 2024-01-01-preview, 2024-04-01-preview, 2024-08-01-preview, 2024-10-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native webpubsub [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class WebPubSub extends pulumi.CustomResource {
    /**
     * Get an existing WebPubSub resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebPubSub {
        return new WebPubSub(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:webpubsub:WebPubSub';

    /**
     * Returns true if the given object is an instance of WebPubSub.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebPubSub {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebPubSub.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * DisableLocalAuth
     * Enable or disable aad auth
     * When set as true, connection with AuthType=aad won't work.
     */
    public readonly disableAadAuth!: pulumi.Output<boolean | undefined>;
    /**
     * DisableLocalAuth
     * Enable or disable local auth with AccessKey
     * When set as true, connection with AccessKey=xxx won't work.
     */
    public readonly disableLocalAuth!: pulumi.Output<boolean | undefined>;
    /**
     * The publicly accessible IP of the resource.
     */
    public /*out*/ readonly externalIP!: pulumi.Output<string>;
    /**
     * FQDN of the service instance.
     */
    public /*out*/ readonly hostName!: pulumi.Output<string>;
    /**
     * Deprecated.
     */
    public /*out*/ readonly hostNamePrefix!: pulumi.Output<string>;
    /**
     * A class represent managed identities used for request and response
     */
    public readonly identity!: pulumi.Output<types.outputs.ManagedIdentityResponse | undefined>;
    /**
     * The kind of the service
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Live trace configuration of a Microsoft.SignalRService resource.
     */
    public readonly liveTraceConfiguration!: pulumi.Output<types.outputs.LiveTraceConfigurationResponse | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Network ACLs for the resource
     */
    public readonly networkACLs!: pulumi.Output<types.outputs.WebPubSubNetworkACLsResponse | undefined>;
    /**
     * Private endpoint connections to the resource.
     */
    public /*out*/ readonly privateEndpointConnections!: pulumi.Output<types.outputs.PrivateEndpointConnectionResponse[]>;
    /**
     * Provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Enable or disable public network access. Default to "Enabled".
     * When it's Enabled, network ACLs still apply.
     * When it's Disabled, public network access is always disabled no matter what you set in network ACLs.
     */
    public readonly publicNetworkAccess!: pulumi.Output<string | undefined>;
    /**
     * The publicly accessible port of the resource which is designed for browser/client side usage.
     */
    public /*out*/ readonly publicPort!: pulumi.Output<number>;
    /**
     * Enable or disable the regional endpoint. Default to "Enabled".
     * When it's Disabled, new connections will not be routed to this endpoint, however existing connections will not be affected.
     * This property is replica specific. Disable the regional endpoint without replica is not allowed.
     */
    public readonly regionEndpointEnabled!: pulumi.Output<string | undefined>;
    /**
     * Resource log configuration of a Microsoft.SignalRService resource.
     */
    public readonly resourceLogConfiguration!: pulumi.Output<types.outputs.ResourceLogConfigurationResponse | undefined>;
    /**
     * Stop or start the resource.  Default to "False".
     * When it's true, the data plane of the resource is shutdown.
     * When it's false, the data plane of the resource is started.
     */
    public readonly resourceStopped!: pulumi.Output<string | undefined>;
    /**
     * The publicly accessible port of the resource which is designed for customer server side usage.
     */
    public /*out*/ readonly serverPort!: pulumi.Output<number>;
    /**
     * The list of shared private link resources.
     */
    public /*out*/ readonly sharedPrivateLinkResources!: pulumi.Output<types.outputs.SharedPrivateLinkResourceResponse[]>;
    /**
     * The billing information of the resource.
     */
    public readonly sku!: pulumi.Output<types.outputs.ResourceSkuResponse | undefined>;
    /**
     * SocketIO settings for the resource
     */
    public readonly socketIO!: pulumi.Output<types.outputs.WebPubSubSocketIOSettingsResponse | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * TLS settings for the resource
     */
    public readonly tls!: pulumi.Output<types.outputs.WebPubSubTlsSettingsResponse | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Version of the resource. Probably you need the same or higher version of client SDKs.
     */
    public /*out*/ readonly version!: pulumi.Output<string>;

    /**
     * Create a WebPubSub resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebPubSubArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["disableAadAuth"] = (args ? args.disableAadAuth : undefined) ?? false;
            resourceInputs["disableLocalAuth"] = (args ? args.disableLocalAuth : undefined) ?? false;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["liveTraceConfiguration"] = args ? (args.liveTraceConfiguration ? pulumi.output(args.liveTraceConfiguration).apply(types.inputs.liveTraceConfigurationArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["networkACLs"] = args ? args.networkACLs : undefined;
            resourceInputs["publicNetworkAccess"] = (args ? args.publicNetworkAccess : undefined) ?? "Enabled";
            resourceInputs["regionEndpointEnabled"] = (args ? args.regionEndpointEnabled : undefined) ?? "Enabled";
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceLogConfiguration"] = args ? args.resourceLogConfiguration : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["resourceStopped"] = (args ? args.resourceStopped : undefined) ?? "false";
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["socketIO"] = args ? args.socketIO : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tls"] = args ? (args.tls ? pulumi.output(args.tls).apply(types.inputs.webPubSubTlsSettingsArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["externalIP"] = undefined /*out*/;
            resourceInputs["hostName"] = undefined /*out*/;
            resourceInputs["hostNamePrefix"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicPort"] = undefined /*out*/;
            resourceInputs["serverPort"] = undefined /*out*/;
            resourceInputs["sharedPrivateLinkResources"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["disableAadAuth"] = undefined /*out*/;
            resourceInputs["disableLocalAuth"] = undefined /*out*/;
            resourceInputs["externalIP"] = undefined /*out*/;
            resourceInputs["hostName"] = undefined /*out*/;
            resourceInputs["hostNamePrefix"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["liveTraceConfiguration"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkACLs"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicNetworkAccess"] = undefined /*out*/;
            resourceInputs["publicPort"] = undefined /*out*/;
            resourceInputs["regionEndpointEnabled"] = undefined /*out*/;
            resourceInputs["resourceLogConfiguration"] = undefined /*out*/;
            resourceInputs["resourceStopped"] = undefined /*out*/;
            resourceInputs["serverPort"] = undefined /*out*/;
            resourceInputs["sharedPrivateLinkResources"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["socketIO"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["tls"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:webpubsub/v20210401preview:WebPubSub" }, { type: "azure-native:webpubsub/v20210601preview:WebPubSub" }, { type: "azure-native:webpubsub/v20210901preview:WebPubSub" }, { type: "azure-native:webpubsub/v20211001:WebPubSub" }, { type: "azure-native:webpubsub/v20220801preview:WebPubSub" }, { type: "azure-native:webpubsub/v20230201:WebPubSub" }, { type: "azure-native:webpubsub/v20230301preview:WebPubSub" }, { type: "azure-native:webpubsub/v20230601preview:WebPubSub" }, { type: "azure-native:webpubsub/v20230801preview:WebPubSub" }, { type: "azure-native:webpubsub/v20240101preview:WebPubSub" }, { type: "azure-native:webpubsub/v20240301:WebPubSub" }, { type: "azure-native:webpubsub/v20240401preview:WebPubSub" }, { type: "azure-native:webpubsub/v20240801preview:WebPubSub" }, { type: "azure-native:webpubsub/v20241001preview:WebPubSub" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WebPubSub.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WebPubSub resource.
 */
export interface WebPubSubArgs {
    /**
     * DisableLocalAuth
     * Enable or disable aad auth
     * When set as true, connection with AuthType=aad won't work.
     */
    disableAadAuth?: pulumi.Input<boolean>;
    /**
     * DisableLocalAuth
     * Enable or disable local auth with AccessKey
     * When set as true, connection with AccessKey=xxx won't work.
     */
    disableLocalAuth?: pulumi.Input<boolean>;
    /**
     * A class represent managed identities used for request and response
     */
    identity?: pulumi.Input<types.inputs.ManagedIdentityArgs>;
    /**
     * The kind of the service
     */
    kind?: pulumi.Input<string | types.enums.ServiceKind>;
    /**
     * Live trace configuration of a Microsoft.SignalRService resource.
     */
    liveTraceConfiguration?: pulumi.Input<types.inputs.LiveTraceConfigurationArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Network ACLs for the resource
     */
    networkACLs?: pulumi.Input<types.inputs.WebPubSubNetworkACLsArgs>;
    /**
     * Enable or disable public network access. Default to "Enabled".
     * When it's Enabled, network ACLs still apply.
     * When it's Disabled, public network access is always disabled no matter what you set in network ACLs.
     */
    publicNetworkAccess?: pulumi.Input<string>;
    /**
     * Enable or disable the regional endpoint. Default to "Enabled".
     * When it's Disabled, new connections will not be routed to this endpoint, however existing connections will not be affected.
     * This property is replica specific. Disable the regional endpoint without replica is not allowed.
     */
    regionEndpointEnabled?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource log configuration of a Microsoft.SignalRService resource.
     */
    resourceLogConfiguration?: pulumi.Input<types.inputs.ResourceLogConfigurationArgs>;
    /**
     * The name of the resource.
     */
    resourceName?: pulumi.Input<string>;
    /**
     * Stop or start the resource.  Default to "False".
     * When it's true, the data plane of the resource is shutdown.
     * When it's false, the data plane of the resource is started.
     */
    resourceStopped?: pulumi.Input<string>;
    /**
     * The billing information of the resource.
     */
    sku?: pulumi.Input<types.inputs.ResourceSkuArgs>;
    /**
     * SocketIO settings for the resource
     */
    socketIO?: pulumi.Input<types.inputs.WebPubSubSocketIOSettingsArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * TLS settings for the resource
     */
    tls?: pulumi.Input<types.inputs.WebPubSubTlsSettingsArgs>;
}