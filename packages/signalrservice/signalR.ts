import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A class represent a resource.
 *
 * Uses Azure REST API version 2023-02-01. In version 1.x of the Azure Native provider, it used API version 2020-05-01.
 *
 * Other available API versions: 2023-03-01-preview, 2023-06-01-preview, 2023-08-01-preview, 2024-01-01-preview, 2024-03-01, 2024-04-01-preview, 2024-08-01-preview, 2024-10-01-preview.
 */
export class SignalR extends pulumi.CustomResource {
    /**
     * Get an existing SignalR resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SignalR {
        return new SignalR(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:signalrservice:SignalR';

    /**
     * Returns true if the given object is an instance of SignalR.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SignalR {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SignalR.__pulumiType;
    }

    /**
     * Cross-Origin Resource Sharing (CORS) settings.
     */
    public readonly cors!: pulumi.Output<types.outputs.SignalRCorsSettingsResponse | undefined>;
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
     * List of the featureFlags.
     * 
     * FeatureFlags that are not included in the parameters for the update operation will not be modified.
     * And the response will only include featureFlags that are explicitly set. 
     * When a featureFlag is not explicitly set, its globally default value will be used
     * But keep in mind, the default value doesn't mean "false". It varies in terms of different FeatureFlags.
     */
    public readonly features!: pulumi.Output<types.outputs.SignalRFeatureResponse[] | undefined>;
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
     * The kind of the service, it can be SignalR or RawWebSockets
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Live trace configuration of a Microsoft.SignalRService resource.
     */
    public readonly liveTraceConfiguration!: pulumi.Output<types.outputs.LiveTraceConfigurationResponse | undefined>;
    /**
     * The GEO location of the resource. e.g. West US | East US | North Central US | South Central US.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Network ACLs for the resource
     */
    public readonly networkACLs!: pulumi.Output<types.outputs.SignalRNetworkACLsResponse | undefined>;
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
     * Resource log configuration of a Microsoft.SignalRService resource.
     */
    public readonly resourceLogConfiguration!: pulumi.Output<types.outputs.ResourceLogConfigurationResponse | undefined>;
    /**
     * The publicly accessible port of the resource which is designed for customer server side usage.
     */
    public /*out*/ readonly serverPort!: pulumi.Output<number>;
    /**
     * Serverless settings.
     */
    public readonly serverless!: pulumi.Output<types.outputs.ServerlessSettingsResponse | undefined>;
    /**
     * The list of shared private link resources.
     */
    public /*out*/ readonly sharedPrivateLinkResources!: pulumi.Output<types.outputs.SharedPrivateLinkResourceResponse[]>;
    /**
     * The billing information of the resource.
     */
    public readonly sku!: pulumi.Output<types.outputs.ResourceSkuResponse | undefined>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Tags of the service which is a list of key value pairs that describe the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * TLS settings for the resource
     */
    public readonly tls!: pulumi.Output<types.outputs.SignalRTlsSettingsResponse | undefined>;
    /**
     * The type of the resource - e.g. "Microsoft.SignalRService/SignalR"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The settings for the Upstream when the service is in server-less mode.
     */
    public readonly upstream!: pulumi.Output<types.outputs.ServerlessUpstreamSettingsResponse | undefined>;
    /**
     * Version of the resource. Probably you need the same or higher version of client SDKs.
     */
    public /*out*/ readonly version!: pulumi.Output<string>;

    /**
     * Create a SignalR resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SignalRArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["cors"] = args ? args.cors : undefined;
            resourceInputs["disableAadAuth"] = (args ? args.disableAadAuth : undefined) ?? false;
            resourceInputs["disableLocalAuth"] = (args ? args.disableLocalAuth : undefined) ?? false;
            resourceInputs["features"] = args ? args.features : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["liveTraceConfiguration"] = args ? (args.liveTraceConfiguration ? pulumi.output(args.liveTraceConfiguration).apply(types.inputs.liveTraceConfigurationArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["networkACLs"] = args ? args.networkACLs : undefined;
            resourceInputs["publicNetworkAccess"] = (args ? args.publicNetworkAccess : undefined) ?? "Enabled";
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceLogConfiguration"] = args ? args.resourceLogConfiguration : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["serverless"] = args ? (args.serverless ? pulumi.output(args.serverless).apply(types.inputs.serverlessSettingsArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tls"] = args ? (args.tls ? pulumi.output(args.tls).apply(types.inputs.signalRTlsSettingsArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["upstream"] = args ? args.upstream : undefined;
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
            resourceInputs["cors"] = undefined /*out*/;
            resourceInputs["disableAadAuth"] = undefined /*out*/;
            resourceInputs["disableLocalAuth"] = undefined /*out*/;
            resourceInputs["externalIP"] = undefined /*out*/;
            resourceInputs["features"] = undefined /*out*/;
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
            resourceInputs["resourceLogConfiguration"] = undefined /*out*/;
            resourceInputs["serverPort"] = undefined /*out*/;
            resourceInputs["serverless"] = undefined /*out*/;
            resourceInputs["sharedPrivateLinkResources"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["tls"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["upstream"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:signalrservice/v20180301preview:SignalR" }, { type: "azure-native:signalrservice/v20181001:SignalR" }, { type: "azure-native:signalrservice/v20200501:SignalR" }, { type: "azure-native:signalrservice/v20200701preview:SignalR" }, { type: "azure-native:signalrservice/v20210401preview:SignalR" }, { type: "azure-native:signalrservice/v20210601preview:SignalR" }, { type: "azure-native:signalrservice/v20210901preview:SignalR" }, { type: "azure-native:signalrservice/v20211001:SignalR" }, { type: "azure-native:signalrservice/v20220201:SignalR" }, { type: "azure-native:signalrservice/v20220801preview:SignalR" }, { type: "azure-native:signalrservice/v20230201:SignalR" }, { type: "azure-native:signalrservice/v20230301preview:SignalR" }, { type: "azure-native:signalrservice/v20230601preview:SignalR" }, { type: "azure-native:signalrservice/v20230801preview:SignalR" }, { type: "azure-native:signalrservice/v20240101preview:SignalR" }, { type: "azure-native:signalrservice/v20240301:SignalR" }, { type: "azure-native:signalrservice/v20240401preview:SignalR" }, { type: "azure-native:signalrservice/v20240801preview:SignalR" }, { type: "azure-native:signalrservice/v20241001preview:SignalR" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SignalR.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SignalR resource.
 */
export interface SignalRArgs {
    /**
     * Cross-Origin Resource Sharing (CORS) settings.
     */
    cors?: pulumi.Input<types.inputs.SignalRCorsSettingsArgs>;
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
     * List of the featureFlags.
     * 
     * FeatureFlags that are not included in the parameters for the update operation will not be modified.
     * And the response will only include featureFlags that are explicitly set. 
     * When a featureFlag is not explicitly set, its globally default value will be used
     * But keep in mind, the default value doesn't mean "false". It varies in terms of different FeatureFlags.
     */
    features?: pulumi.Input<pulumi.Input<types.inputs.SignalRFeatureArgs>[]>;
    /**
     * A class represent managed identities used for request and response
     */
    identity?: pulumi.Input<types.inputs.ManagedIdentityArgs>;
    /**
     * The kind of the service, it can be SignalR or RawWebSockets
     */
    kind?: pulumi.Input<string | types.enums.ServiceKind>;
    /**
     * Live trace configuration of a Microsoft.SignalRService resource.
     */
    liveTraceConfiguration?: pulumi.Input<types.inputs.LiveTraceConfigurationArgs>;
    /**
     * The GEO location of the resource. e.g. West US | East US | North Central US | South Central US.
     */
    location?: pulumi.Input<string>;
    /**
     * Network ACLs for the resource
     */
    networkACLs?: pulumi.Input<types.inputs.SignalRNetworkACLsArgs>;
    /**
     * Enable or disable public network access. Default to "Enabled".
     * When it's Enabled, network ACLs still apply.
     * When it's Disabled, public network access is always disabled no matter what you set in network ACLs.
     */
    publicNetworkAccess?: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
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
     * Serverless settings.
     */
    serverless?: pulumi.Input<types.inputs.ServerlessSettingsArgs>;
    /**
     * The billing information of the resource.
     */
    sku?: pulumi.Input<types.inputs.ResourceSkuArgs>;
    /**
     * Tags of the service which is a list of key value pairs that describe the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * TLS settings for the resource
     */
    tls?: pulumi.Input<types.inputs.SignalRTlsSettingsArgs>;
    /**
     * The settings for the Upstream when the service is in server-less mode.
     */
    upstream?: pulumi.Input<types.inputs.ServerlessUpstreamSettingsArgs>;
}