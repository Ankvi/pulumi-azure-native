import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * MQ broker/authorization resource
 *
 * Uses Azure REST API version 2023-10-04-preview. In version 2.x of the Azure Native provider, it used API version 2023-10-04-preview.
 */
export class BrokerAuthorization extends pulumi.CustomResource {
    /**
     * Get an existing BrokerAuthorization resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): BrokerAuthorization {
        return new BrokerAuthorization(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:iotoperationsmq:BrokerAuthorization';

    /**
     * Returns true if the given object is an instance of BrokerAuthorization.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BrokerAuthorization {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BrokerAuthorization.__pulumiType;
    }

    /**
     * The list of authorization policies supported by the Authorization Resource.
     */
    public readonly authorizationPolicies!: pulumi.Output<types.outputs.AuthorizationConfigResponse>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Extended Location
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationPropertyResponse>;
    /**
     * The array of listener Resources it supports.
     */
    public readonly listenerRef!: pulumi.Output<string[]>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The status of the last operation.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a BrokerAuthorization resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BrokerAuthorizationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.authorizationPolicies === undefined) && !opts.urn) {
                throw new Error("Missing required property 'authorizationPolicies'");
            }
            if ((!args || args.brokerName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'brokerName'");
            }
            if ((!args || args.extendedLocation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'extendedLocation'");
            }
            if ((!args || args.listenerRef === undefined) && !opts.urn) {
                throw new Error("Missing required property 'listenerRef'");
            }
            if ((!args || args.mqName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mqName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["authorizationName"] = args ? args.authorizationName : undefined;
            resourceInputs["authorizationPolicies"] = args ? (args.authorizationPolicies ? pulumi.output(args.authorizationPolicies).apply(types.inputs.authorizationConfigArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["brokerName"] = args ? args.brokerName : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["listenerRef"] = args ? args.listenerRef : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["mqName"] = args ? args.mqName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["authorizationPolicies"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["listenerRef"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:iotoperationsmq/v20231004preview:BrokerAuthorization" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(BrokerAuthorization.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a BrokerAuthorization resource.
 */
export interface BrokerAuthorizationArgs {
    /**
     * Name of MQ broker/authorization resource
     */
    authorizationName?: pulumi.Input<string>;
    /**
     * The list of authorization policies supported by the Authorization Resource.
     */
    authorizationPolicies: pulumi.Input<types.inputs.AuthorizationConfigArgs>;
    /**
     * Name of MQ broker resource
     */
    brokerName: pulumi.Input<string>;
    /**
     * Extended Location
     */
    extendedLocation: pulumi.Input<types.inputs.ExtendedLocationPropertyArgs>;
    /**
     * The array of listener Resources it supports.
     */
    listenerRef: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Name of MQ resource
     */
    mqName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}