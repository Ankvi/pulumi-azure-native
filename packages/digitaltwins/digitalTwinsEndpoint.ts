import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * DigitalTwinsInstance endpoint resource.
 *
 * Uses Azure REST API version 2023-01-31. In version 2.x of the Azure Native provider, it used API version 2023-01-31.
 */
export class DigitalTwinsEndpoint extends pulumi.CustomResource {
    /**
     * Get an existing DigitalTwinsEndpoint resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DigitalTwinsEndpoint {
        return new DigitalTwinsEndpoint(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:digitaltwins:DigitalTwinsEndpoint';

    /**
     * Returns true if the given object is an instance of DigitalTwinsEndpoint.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DigitalTwinsEndpoint {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DigitalTwinsEndpoint.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Extension resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * DigitalTwinsInstance endpoint resource properties.
     */
    public readonly properties!: pulumi.Output<types.outputs.EventGridResponse | types.outputs.EventHubResponse | types.outputs.ServiceBusResponse>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DigitalTwinsEndpoint resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DigitalTwinsEndpointArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.properties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'properties'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.resourceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceName'");
            }
            resourceInputs["endpointName"] = args ? args.endpointName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:digitaltwins/v20200301preview:DigitalTwinsEndpoint" }, { type: "azure-native:digitaltwins/v20201031:DigitalTwinsEndpoint" }, { type: "azure-native:digitaltwins/v20201201:DigitalTwinsEndpoint" }, { type: "azure-native:digitaltwins/v20210630preview:DigitalTwinsEndpoint" }, { type: "azure-native:digitaltwins/v20220531:DigitalTwinsEndpoint" }, { type: "azure-native:digitaltwins/v20221031:DigitalTwinsEndpoint" }, { type: "azure-native:digitaltwins/v20230131:DigitalTwinsEndpoint" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DigitalTwinsEndpoint.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DigitalTwinsEndpoint resource.
 */
export interface DigitalTwinsEndpointArgs {
    /**
     * Name of Endpoint Resource.
     */
    endpointName?: pulumi.Input<string>;
    /**
     * DigitalTwinsInstance endpoint resource properties.
     */
    properties: pulumi.Input<types.inputs.EventGridArgs | types.inputs.EventHubArgs | types.inputs.ServiceBusArgs>;
    /**
     * The name of the resource group that contains the DigitalTwinsInstance.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the DigitalTwinsInstance.
     */
    resourceName: pulumi.Input<string>;
}