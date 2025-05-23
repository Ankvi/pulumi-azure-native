import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * This type describes a gateway resource.
 *
 * Uses Azure REST API version 2018-09-01-preview. In version 2.x of the Azure Native provider, it used API version 2018-09-01-preview.
 */
export class Gateway extends pulumi.CustomResource {
    /**
     * Get an existing Gateway resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Gateway {
        return new Gateway(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:servicefabricmesh:Gateway';

    /**
     * Returns true if the given object is an instance of Gateway.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Gateway {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Gateway.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * User readable description of the gateway.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Network that the Application is using.
     */
    public readonly destinationNetwork!: pulumi.Output<types.outputs.NetworkRefResponse>;
    /**
     * Configuration for http connectivity for this gateway.
     */
    public readonly http!: pulumi.Output<types.outputs.HttpConfigResponse[] | undefined>;
    /**
     * IP address of the gateway. This is populated in the response and is ignored for incoming requests.
     */
    public /*out*/ readonly ipAddress!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * State of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Network the gateway should listen on for requests.
     */
    public readonly sourceNetwork!: pulumi.Output<types.outputs.NetworkRefResponse>;
    /**
     * Status of the resource.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * Gives additional information about the current status of the gateway.
     */
    public /*out*/ readonly statusDetails!: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Configuration for tcp connectivity for this gateway.
     */
    public readonly tcp!: pulumi.Output<types.outputs.TcpConfigResponse[] | undefined>;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Gateway resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GatewayArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.destinationNetwork === undefined) && !opts.urn) {
                throw new Error("Missing required property 'destinationNetwork'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sourceNetwork === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sourceNetwork'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["destinationNetwork"] = args ? args.destinationNetwork : undefined;
            resourceInputs["gatewayResourceName"] = args ? args.gatewayResourceName : undefined;
            resourceInputs["http"] = args ? args.http : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sourceNetwork"] = args ? args.sourceNetwork : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tcp"] = args ? args.tcp : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["ipAddress"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["statusDetails"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["destinationNetwork"] = undefined /*out*/;
            resourceInputs["http"] = undefined /*out*/;
            resourceInputs["ipAddress"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sourceNetwork"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["statusDetails"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["tcp"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:servicefabricmesh/v20180901preview:Gateway" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Gateway.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Gateway resource.
 */
export interface GatewayArgs {
    /**
     * User readable description of the gateway.
     */
    description?: pulumi.Input<string>;
    /**
     * Network that the Application is using.
     */
    destinationNetwork: pulumi.Input<types.inputs.NetworkRefArgs>;
    /**
     * The identity of the gateway.
     */
    gatewayResourceName?: pulumi.Input<string>;
    /**
     * Configuration for http connectivity for this gateway.
     */
    http?: pulumi.Input<pulumi.Input<types.inputs.HttpConfigArgs>[]>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Azure resource group name
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Network the gateway should listen on for requests.
     */
    sourceNetwork: pulumi.Input<types.inputs.NetworkRefArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Configuration for tcp connectivity for this gateway.
     */
    tcp?: pulumi.Input<pulumi.Input<types.inputs.TcpConfigArgs>[]>;
}