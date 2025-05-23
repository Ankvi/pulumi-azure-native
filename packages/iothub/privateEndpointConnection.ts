import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The private endpoint connection of an IotHub
 *
 * Uses Azure REST API version 2023-06-30.
 *
 * Other available API versions: 2020-03-01, 2020-04-01, 2020-06-15, 2020-07-10-preview, 2020-08-01, 2020-08-31, 2020-08-31-preview, 2021-02-01-preview, 2021-03-03-preview, 2021-03-31, 2021-07-01, 2021-07-01-preview, 2021-07-02, 2021-07-02-preview, 2022-04-30-preview, 2022-11-15-preview, 2023-06-30-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native iothub [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class PrivateEndpointConnection extends pulumi.CustomResource {
    /**
     * Get an existing PrivateEndpointConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PrivateEndpointConnection {
        return new PrivateEndpointConnection(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:iothub:PrivateEndpointConnection';

    /**
     * Returns true if the given object is an instance of PrivateEndpointConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PrivateEndpointConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PrivateEndpointConnection.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The properties of a private endpoint connection
     */
    public readonly properties!: pulumi.Output<types.outputs.PrivateEndpointConnectionPropertiesResponse>;
    /**
     * The resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a PrivateEndpointConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PrivateEndpointConnectionArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["privateEndpointConnectionName"] = args ? args.privateEndpointConnectionName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:devices/v20220430preview:PrivateEndpointConnection" }, { type: "azure-native:devices/v20221115preview:PrivateEndpointConnection" }, { type: "azure-native:devices/v20230630:PrivateEndpointConnection" }, { type: "azure-native:devices/v20230630preview:PrivateEndpointConnection" }, { type: "azure-native:devices:PrivateEndpointConnection" }, { type: "azure-native:iothub/v20200301:PrivateEndpointConnection" }, { type: "azure-native:iothub/v20200401:PrivateEndpointConnection" }, { type: "azure-native:iothub/v20200615:PrivateEndpointConnection" }, { type: "azure-native:iothub/v20200710preview:PrivateEndpointConnection" }, { type: "azure-native:iothub/v20200801:PrivateEndpointConnection" }, { type: "azure-native:iothub/v20200831:PrivateEndpointConnection" }, { type: "azure-native:iothub/v20200831preview:PrivateEndpointConnection" }, { type: "azure-native:iothub/v20210201preview:PrivateEndpointConnection" }, { type: "azure-native:iothub/v20210303preview:PrivateEndpointConnection" }, { type: "azure-native:iothub/v20210331:PrivateEndpointConnection" }, { type: "azure-native:iothub/v20210701:PrivateEndpointConnection" }, { type: "azure-native:iothub/v20210701preview:PrivateEndpointConnection" }, { type: "azure-native:iothub/v20210702:PrivateEndpointConnection" }, { type: "azure-native:iothub/v20210702preview:PrivateEndpointConnection" }, { type: "azure-native:iothub/v20220430preview:PrivateEndpointConnection" }, { type: "azure-native:iothub/v20221115preview:PrivateEndpointConnection" }, { type: "azure-native:iothub/v20230630:PrivateEndpointConnection" }, { type: "azure-native:iothub/v20230630preview:PrivateEndpointConnection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PrivateEndpointConnection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PrivateEndpointConnection resource.
 */
export interface PrivateEndpointConnectionArgs {
    /**
     * The name of the private endpoint connection
     */
    privateEndpointConnectionName?: pulumi.Input<string>;
    /**
     * The properties of a private endpoint connection
     */
    properties: pulumi.Input<types.inputs.PrivateEndpointConnectionPropertiesArgs>;
    /**
     * The name of the resource group that contains the IoT hub.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the IoT hub.
     */
    resourceName: pulumi.Input<string>;
}