import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * MQ broker/listener resource
 *
 * Uses Azure REST API version 2023-10-04-preview. In version 2.x of the Azure Native provider, it used API version 2023-10-04-preview.
 */
export class BrokerListener extends pulumi.CustomResource {
    /**
     * Get an existing BrokerListener resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): BrokerListener {
        return new BrokerListener(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:iotoperationsmq:BrokerListener';

    /**
     * Returns true if the given object is an instance of BrokerListener.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BrokerListener {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BrokerListener.__pulumiType;
    }

    /**
     * The flag for enabling Authentication rules on Listener Port.
     */
    public readonly authenticationEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * The flag for enabling Authorization policies on Listener Port. false - AllowAll, true - Use Authorization resource rules if present.
     */
    public readonly authorizationEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The k8s cr/resource reference of mq/broker.
     */
    public readonly brokerRef!: pulumi.Output<string>;
    /**
     * Extended Location
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationPropertyResponse>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The node port to use on the Host node.
     */
    public readonly nodePort!: pulumi.Output<number | undefined>;
    /**
     * The port to start Listening for connections on.
     */
    public readonly port!: pulumi.Output<number>;
    /**
     * The status of the last operation.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The service name to expose Listener port on.
     */
    public readonly serviceName!: pulumi.Output<string | undefined>;
    /**
     * The Kubernetes Service type to deploy for Listener.
     */
    public readonly serviceType!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Defines configuration of a TLS server certificate. NOTE Enum - Only one TLS Cert method is supported
     */
    public readonly tls!: pulumi.Output<types.outputs.TlsCertMethodResponse | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a BrokerListener resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BrokerListenerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.brokerName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'brokerName'");
            }
            if ((!args || args.brokerRef === undefined) && !opts.urn) {
                throw new Error("Missing required property 'brokerRef'");
            }
            if ((!args || args.extendedLocation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'extendedLocation'");
            }
            if ((!args || args.mqName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mqName'");
            }
            if ((!args || args.port === undefined) && !opts.urn) {
                throw new Error("Missing required property 'port'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["authenticationEnabled"] = (args ? args.authenticationEnabled : undefined) ?? false;
            resourceInputs["authorizationEnabled"] = (args ? args.authorizationEnabled : undefined) ?? false;
            resourceInputs["brokerName"] = args ? args.brokerName : undefined;
            resourceInputs["brokerRef"] = args ? args.brokerRef : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["listenerName"] = args ? args.listenerName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["mqName"] = args ? args.mqName : undefined;
            resourceInputs["nodePort"] = args ? args.nodePort : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = (args ? args.serviceName : undefined) ?? "aio-mq-dmqtt-frontend";
            resourceInputs["serviceType"] = (args ? args.serviceType : undefined) ?? "clusterIp";
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tls"] = args ? (args.tls ? pulumi.output(args.tls).apply(types.inputs.tlsCertMethodArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["authenticationEnabled"] = undefined /*out*/;
            resourceInputs["authorizationEnabled"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["brokerRef"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nodePort"] = undefined /*out*/;
            resourceInputs["port"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["serviceName"] = undefined /*out*/;
            resourceInputs["serviceType"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["tls"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:iotoperationsmq/v20231004preview:BrokerListener" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(BrokerListener.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a BrokerListener resource.
 */
export interface BrokerListenerArgs {
    /**
     * The flag for enabling Authentication rules on Listener Port.
     */
    authenticationEnabled?: pulumi.Input<boolean>;
    /**
     * The flag for enabling Authorization policies on Listener Port. false - AllowAll, true - Use Authorization resource rules if present.
     */
    authorizationEnabled?: pulumi.Input<boolean>;
    /**
     * Name of MQ broker resource
     */
    brokerName: pulumi.Input<string>;
    /**
     * The k8s cr/resource reference of mq/broker.
     */
    brokerRef: pulumi.Input<string>;
    /**
     * Extended Location
     */
    extendedLocation: pulumi.Input<types.inputs.ExtendedLocationPropertyArgs>;
    /**
     * Name of MQ broker/listener resource
     */
    listenerName?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Name of MQ resource
     */
    mqName: pulumi.Input<string>;
    /**
     * The node port to use on the Host node.
     */
    nodePort?: pulumi.Input<number>;
    /**
     * The port to start Listening for connections on.
     */
    port: pulumi.Input<number>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The service name to expose Listener port on.
     */
    serviceName?: pulumi.Input<string>;
    /**
     * The Kubernetes Service type to deploy for Listener.
     */
    serviceType?: pulumi.Input<string | types.enums.ServiceType>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Defines configuration of a TLS server certificate. NOTE Enum - Only one TLS Cert method is supported
     */
    tls?: pulumi.Input<types.inputs.TlsCertMethodArgs>;
}