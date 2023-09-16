import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * A class represent a resource.
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
    public static readonly __pulumiType = 'azure-native:webpubsub/v20210601preview:WebPubSub';

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
     * Diagnostic configuration of a Microsoft.SignalRService resource. Used together with Azure monitor DiagnosticSettings.
     */
    public readonly diagnosticConfiguration!: pulumi.Output<types.outputs.webpubsub.v20210601preview.DiagnosticConfigurationResponse | undefined>;
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
     * The settings for event handler in webpubsub service.
     */
    public readonly eventHandler!: pulumi.Output<types.outputs.webpubsub.v20210601preview.EventHandlerSettingsResponse | undefined>;
    /**
     * The publicly accessible IP of the resource.
     */
    public /*out*/ readonly externalIP!: pulumi.Output<string>;
    /**
     * FQDN of the service instance.
     */
    public /*out*/ readonly hostName!: pulumi.Output<string>;
    /**
     * The managed identity response
     */
    public readonly identity!: pulumi.Output<types.outputs.webpubsub.v20210601preview.ManagedIdentityResponse | undefined>;
    /**
     * The GEO location of the resource. e.g. West US | East US | North Central US | South Central US.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Network ACLs
     */
    public readonly networkACLs!: pulumi.Output<types.outputs.webpubsub.v20210601preview.WebPubSubNetworkACLsResponse | undefined>;
    /**
     * Private endpoint connections to the resource.
     */
    public /*out*/ readonly privateEndpointConnections!: pulumi.Output<types.outputs.webpubsub.v20210601preview.PrivateEndpointConnectionResponse[]>;
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
     * The publicly accessible port of the resource which is designed for customer server side usage.
     */
    public /*out*/ readonly serverPort!: pulumi.Output<number>;
    /**
     * The list of shared private link resources.
     */
    public /*out*/ readonly sharedPrivateLinkResources!: pulumi.Output<types.outputs.webpubsub.v20210601preview.SharedPrivateLinkResourceResponse[]>;
    /**
     * The billing information of the resource.(e.g. Free, Standard)
     */
    public readonly sku!: pulumi.Output<types.outputs.webpubsub.v20210601preview.ResourceSkuResponse | undefined>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.webpubsub.v20210601preview.SystemDataResponse>;
    /**
     * Tags of the service which is a list of key value pairs that describe the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * TLS settings.
     */
    public readonly tls!: pulumi.Output<types.outputs.webpubsub.v20210601preview.WebPubSubTlsSettingsResponse | undefined>;
    /**
     * The type of the resource - e.g. "Microsoft.SignalRService/SignalR"
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
            resourceInputs["diagnosticConfiguration"] = args ? args.diagnosticConfiguration : undefined;
            resourceInputs["disableAadAuth"] = (args ? args.disableAadAuth : undefined) ?? false;
            resourceInputs["disableLocalAuth"] = (args ? args.disableLocalAuth : undefined) ?? false;
            resourceInputs["eventHandler"] = args ? args.eventHandler : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["networkACLs"] = args ? (args.networkACLs ? pulumi.output(args.networkACLs).apply(types.inputs.webpubsub.v20210601preview.webPubSubNetworkACLsArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["publicNetworkAccess"] = (args ? args.publicNetworkAccess : undefined) ?? "Enabled";
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tls"] = args ? (args.tls ? pulumi.output(args.tls).apply(types.inputs.webpubsub.v20210601preview.webPubSubTlsSettingsArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["externalIP"] = undefined /*out*/;
            resourceInputs["hostName"] = undefined /*out*/;
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
            resourceInputs["diagnosticConfiguration"] = undefined /*out*/;
            resourceInputs["disableAadAuth"] = undefined /*out*/;
            resourceInputs["disableLocalAuth"] = undefined /*out*/;
            resourceInputs["eventHandler"] = undefined /*out*/;
            resourceInputs["externalIP"] = undefined /*out*/;
            resourceInputs["hostName"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkACLs"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicNetworkAccess"] = undefined /*out*/;
            resourceInputs["publicPort"] = undefined /*out*/;
            resourceInputs["serverPort"] = undefined /*out*/;
            resourceInputs["sharedPrivateLinkResources"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["tls"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:webpubsub:WebPubSub" }, { type: "azure-native:webpubsub/v20210401preview:WebPubSub" }, { type: "azure-native:webpubsub/v20210901preview:WebPubSub" }, { type: "azure-native:webpubsub/v20211001:WebPubSub" }, { type: "azure-native:webpubsub/v20220801preview:WebPubSub" }, { type: "azure-native:webpubsub/v20230201:WebPubSub" }, { type: "azure-native:webpubsub/v20230301preview:WebPubSub" }, { type: "azure-native:webpubsub/v20230601preview:WebPubSub" }, { type: "azure-native:webpubsub/v20230801preview:WebPubSub" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WebPubSub.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WebPubSub resource.
 */
export interface WebPubSubArgs {
    /**
     * Diagnostic configuration of a Microsoft.SignalRService resource. Used together with Azure monitor DiagnosticSettings.
     */
    diagnosticConfiguration?: pulumi.Input<types.inputs.webpubsub.v20210601preview.DiagnosticConfigurationArgs>;
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
     * The settings for event handler in webpubsub service.
     */
    eventHandler?: pulumi.Input<types.inputs.webpubsub.v20210601preview.EventHandlerSettingsArgs>;
    /**
     * The managed identity response
     */
    identity?: pulumi.Input<types.inputs.webpubsub.v20210601preview.ManagedIdentityArgs>;
    /**
     * The GEO location of the resource. e.g. West US | East US | North Central US | South Central US.
     */
    location?: pulumi.Input<string>;
    /**
     * Network ACLs
     */
    networkACLs?: pulumi.Input<types.inputs.webpubsub.v20210601preview.WebPubSubNetworkACLsArgs>;
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
     * The name of the resource.
     */
    resourceName?: pulumi.Input<string>;
    /**
     * The billing information of the resource.(e.g. Free, Standard)
     */
    sku?: pulumi.Input<types.inputs.webpubsub.v20210601preview.ResourceSkuArgs>;
    /**
     * Tags of the service which is a list of key value pairs that describe the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * TLS settings.
     */
    tls?: pulumi.Input<types.inputs.webpubsub.v20210601preview.WebPubSubTlsSettingsArgs>;
}
