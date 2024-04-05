import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Hybrid Connection contract. This is used to configure a Hybrid Connection.
 */
export class WebAppHybridConnection extends pulumi.CustomResource {
    /**
     * Get an existing WebAppHybridConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebAppHybridConnection {
        return new WebAppHybridConnection(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:web/v20220901:WebAppHybridConnection';

    /**
     * Returns true if the given object is an instance of WebAppHybridConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebAppHybridConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebAppHybridConnection.__pulumiType;
    }

    /**
     * The hostname of the endpoint.
     */
    public readonly hostname!: pulumi.Output<string | undefined>;
    /**
     * Kind of resource.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Resource Name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The port of the endpoint.
     */
    public readonly port!: pulumi.Output<number | undefined>;
    /**
     * The ARM URI to the Service Bus relay.
     */
    public readonly relayArmUri!: pulumi.Output<string | undefined>;
    /**
     * The name of the Service Bus relay.
     */
    public readonly relayName!: pulumi.Output<string | undefined>;
    /**
     * The name of the Service Bus key which has Send permissions. This is used to authenticate to Service Bus.
     */
    public readonly sendKeyName!: pulumi.Output<string | undefined>;
    /**
     * The value of the Service Bus key. This is used to authenticate to Service Bus. In ARM this key will not be returned
     * normally, use the POST /listKeys API instead.
     */
    public readonly sendKeyValue!: pulumi.Output<string | undefined>;
    /**
     * The name of the Service Bus namespace.
     */
    public readonly serviceBusNamespace!: pulumi.Output<string | undefined>;
    /**
     * The suffix for the service bus endpoint. By default this is .servicebus.windows.net
     */
    public readonly serviceBusSuffix!: pulumi.Output<string | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a WebAppHybridConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppHybridConnectionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.namespaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'namespaceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["hostname"] = args ? args.hostname : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["namespaceName"] = args ? args.namespaceName : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["relayArmUri"] = args ? args.relayArmUri : undefined;
            resourceInputs["relayName"] = args ? args.relayName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sendKeyName"] = args ? args.sendKeyName : undefined;
            resourceInputs["sendKeyValue"] = args ? args.sendKeyValue : undefined;
            resourceInputs["serviceBusNamespace"] = args ? args.serviceBusNamespace : undefined;
            resourceInputs["serviceBusSuffix"] = args ? args.serviceBusSuffix : undefined;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["hostname"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["port"] = undefined /*out*/;
            resourceInputs["relayArmUri"] = undefined /*out*/;
            resourceInputs["relayName"] = undefined /*out*/;
            resourceInputs["sendKeyName"] = undefined /*out*/;
            resourceInputs["sendKeyValue"] = undefined /*out*/;
            resourceInputs["serviceBusNamespace"] = undefined /*out*/;
            resourceInputs["serviceBusSuffix"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:web:WebAppHybridConnection" }, { type: "azure-native:web/v20160801:WebAppHybridConnection" }, { type: "azure-native:web/v20180201:WebAppHybridConnection" }, { type: "azure-native:web/v20181101:WebAppHybridConnection" }, { type: "azure-native:web/v20190801:WebAppHybridConnection" }, { type: "azure-native:web/v20200601:WebAppHybridConnection" }, { type: "azure-native:web/v20200901:WebAppHybridConnection" }, { type: "azure-native:web/v20201001:WebAppHybridConnection" }, { type: "azure-native:web/v20201201:WebAppHybridConnection" }, { type: "azure-native:web/v20210101:WebAppHybridConnection" }, { type: "azure-native:web/v20210115:WebAppHybridConnection" }, { type: "azure-native:web/v20210201:WebAppHybridConnection" }, { type: "azure-native:web/v20210301:WebAppHybridConnection" }, { type: "azure-native:web/v20220301:WebAppHybridConnection" }, { type: "azure-native:web/v20230101:WebAppHybridConnection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WebAppHybridConnection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WebAppHybridConnection resource.
 */
export interface WebAppHybridConnectionArgs {
    /**
     * The hostname of the endpoint.
     */
    hostname?: pulumi.Input<string>;
    /**
     * Kind of resource.
     */
    kind?: pulumi.Input<string>;
    /**
     * The name of the web app.
     */
    name: pulumi.Input<string>;
    /**
     * The namespace for this hybrid connection.
     */
    namespaceName: pulumi.Input<string>;
    /**
     * The port of the endpoint.
     */
    port?: pulumi.Input<number>;
    /**
     * The ARM URI to the Service Bus relay.
     */
    relayArmUri?: pulumi.Input<string>;
    /**
     * The name of the Service Bus relay.
     */
    relayName?: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Service Bus key which has Send permissions. This is used to authenticate to Service Bus.
     */
    sendKeyName?: pulumi.Input<string>;
    /**
     * The value of the Service Bus key. This is used to authenticate to Service Bus. In ARM this key will not be returned
     * normally, use the POST /listKeys API instead.
     */
    sendKeyValue?: pulumi.Input<string>;
    /**
     * The name of the Service Bus namespace.
     */
    serviceBusNamespace?: pulumi.Input<string>;
    /**
     * The suffix for the service bus endpoint. By default this is .servicebus.windows.net
     */
    serviceBusSuffix?: pulumi.Input<string>;
}