import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The Private Endpoint Connection resource.
 *
 * Uses Azure REST API version 2024-03-02. In version 2.x of the Azure Native provider, it used API version 2022-07-02.
 *
 * Other available API versions: 2022-07-02, 2023-01-02, 2023-04-02, 2023-10-02. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native compute [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class DiskAccessAPrivateEndpointConnection extends pulumi.CustomResource {
    /**
     * Get an existing DiskAccessAPrivateEndpointConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DiskAccessAPrivateEndpointConnection {
        return new DiskAccessAPrivateEndpointConnection(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:compute:DiskAccessAPrivateEndpointConnection';

    /**
     * Returns true if the given object is an instance of DiskAccessAPrivateEndpointConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DiskAccessAPrivateEndpointConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DiskAccessAPrivateEndpointConnection.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * private endpoint connection name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The resource of private end point.
     */
    public /*out*/ readonly privateEndpoint!: pulumi.Output<types.outputs.PrivateEndpointResponse>;
    /**
     * A collection of information about the state of the connection between DiskAccess and Virtual Network.
     */
    public readonly privateLinkServiceConnectionState!: pulumi.Output<types.outputs.PrivateLinkServiceConnectionStateResponse>;
    /**
     * The provisioning state of the private endpoint connection resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * private endpoint connection type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DiskAccessAPrivateEndpointConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DiskAccessAPrivateEndpointConnectionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.diskAccessName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'diskAccessName'");
            }
            if ((!args || args.privateLinkServiceConnectionState === undefined) && !opts.urn) {
                throw new Error("Missing required property 'privateLinkServiceConnectionState'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["diskAccessName"] = args ? args.diskAccessName : undefined;
            resourceInputs["privateEndpointConnectionName"] = args ? args.privateEndpointConnectionName : undefined;
            resourceInputs["privateLinkServiceConnectionState"] = args ? args.privateLinkServiceConnectionState : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpoint"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpoint"] = undefined /*out*/;
            resourceInputs["privateLinkServiceConnectionState"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:compute/v20200930:DiskAccessAPrivateEndpointConnection" }, { type: "azure-native:compute/v20201201:DiskAccessAPrivateEndpointConnection" }, { type: "azure-native:compute/v20210401:DiskAccessAPrivateEndpointConnection" }, { type: "azure-native:compute/v20210801:DiskAccessAPrivateEndpointConnection" }, { type: "azure-native:compute/v20211201:DiskAccessAPrivateEndpointConnection" }, { type: "azure-native:compute/v20220302:DiskAccessAPrivateEndpointConnection" }, { type: "azure-native:compute/v20220702:DiskAccessAPrivateEndpointConnection" }, { type: "azure-native:compute/v20230102:DiskAccessAPrivateEndpointConnection" }, { type: "azure-native:compute/v20230402:DiskAccessAPrivateEndpointConnection" }, { type: "azure-native:compute/v20231002:DiskAccessAPrivateEndpointConnection" }, { type: "azure-native:compute/v20240302:DiskAccessAPrivateEndpointConnection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DiskAccessAPrivateEndpointConnection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DiskAccessAPrivateEndpointConnection resource.
 */
export interface DiskAccessAPrivateEndpointConnectionArgs {
    /**
     * The name of the disk access resource that is being created. The name can't be changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
     */
    diskAccessName: pulumi.Input<string>;
    /**
     * The name of the private endpoint connection.
     */
    privateEndpointConnectionName?: pulumi.Input<string>;
    /**
     * A collection of information about the state of the connection between DiskAccess and Virtual Network.
     */
    privateLinkServiceConnectionState: pulumi.Input<types.inputs.PrivateLinkServiceConnectionStateArgs>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}