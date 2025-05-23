import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * NetworkVirtualApplianceConnection resource.
 *
 * Uses Azure REST API version 2024-05-01. In version 2.x of the Azure Native provider, it used API version 2023-06-01.
 *
 * Other available API versions: 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class NetworkVirtualApplianceConnection extends pulumi.CustomResource {
    /**
     * Get an existing NetworkVirtualApplianceConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NetworkVirtualApplianceConnection {
        return new NetworkVirtualApplianceConnection(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:NetworkVirtualApplianceConnection';

    /**
     * Returns true if the given object is an instance of NetworkVirtualApplianceConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkVirtualApplianceConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkVirtualApplianceConnection.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The name of the resource.
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * Properties of the express route connection.
     */
    public readonly properties!: pulumi.Output<types.outputs.NetworkVirtualApplianceConnectionPropertiesResponse>;

    /**
     * Create a NetworkVirtualApplianceConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkVirtualApplianceConnectionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.networkVirtualApplianceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkVirtualApplianceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["connectionName"] = args ? args.connectionName : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["networkVirtualApplianceName"] = args ? args.networkVirtualApplianceName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20230601:NetworkVirtualApplianceConnection" }, { type: "azure-native:network/v20230901:NetworkVirtualApplianceConnection" }, { type: "azure-native:network/v20231101:NetworkVirtualApplianceConnection" }, { type: "azure-native:network/v20240101:NetworkVirtualApplianceConnection" }, { type: "azure-native:network/v20240301:NetworkVirtualApplianceConnection" }, { type: "azure-native:network/v20240501:NetworkVirtualApplianceConnection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(NetworkVirtualApplianceConnection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a NetworkVirtualApplianceConnection resource.
 */
export interface NetworkVirtualApplianceConnectionArgs {
    /**
     * The name of the NVA connection.
     */
    connectionName?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Network Virtual Appliance.
     */
    networkVirtualApplianceName: pulumi.Input<string>;
    /**
     * Properties of the express route connection.
     */
    properties?: pulumi.Input<types.inputs.NetworkVirtualApplianceConnectionPropertiesArgs>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}