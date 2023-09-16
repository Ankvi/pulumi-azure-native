import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * A private endpoint connection
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
    public static readonly __pulumiType = 'azure-native:sql/v20211101:PrivateEndpointConnection';

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
     * Group IDs.
     */
    public /*out*/ readonly groupIds!: pulumi.Output<string[]>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Private endpoint which the connection belongs to.
     */
    public readonly privateEndpoint!: pulumi.Output<types.outputs.sql.v20211101.PrivateEndpointPropertyResponse | undefined>;
    /**
     * Connection state of the private endpoint connection.
     */
    public readonly privateLinkServiceConnectionState!: pulumi.Output<types.outputs.sql.v20211101.PrivateLinkServiceConnectionStatePropertyResponse | undefined>;
    /**
     * State of the private endpoint connection.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Resource type.
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
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serverName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverName'");
            }
            resourceInputs["privateEndpoint"] = args ? args.privateEndpoint : undefined;
            resourceInputs["privateEndpointConnectionName"] = args ? args.privateEndpointConnectionName : undefined;
            resourceInputs["privateLinkServiceConnectionState"] = args ? args.privateLinkServiceConnectionState : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["groupIds"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["groupIds"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpoint"] = undefined /*out*/;
            resourceInputs["privateLinkServiceConnectionState"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sql:PrivateEndpointConnection" }, { type: "azure-native:sql/v20180601preview:PrivateEndpointConnection" }, { type: "azure-native:sql/v20200202preview:PrivateEndpointConnection" }, { type: "azure-native:sql/v20200801preview:PrivateEndpointConnection" }, { type: "azure-native:sql/v20201101preview:PrivateEndpointConnection" }, { type: "azure-native:sql/v20210201preview:PrivateEndpointConnection" }, { type: "azure-native:sql/v20210501preview:PrivateEndpointConnection" }, { type: "azure-native:sql/v20210801preview:PrivateEndpointConnection" }, { type: "azure-native:sql/v20211101preview:PrivateEndpointConnection" }, { type: "azure-native:sql/v20220201preview:PrivateEndpointConnection" }, { type: "azure-native:sql/v20220501preview:PrivateEndpointConnection" }, { type: "azure-native:sql/v20220801preview:PrivateEndpointConnection" }, { type: "azure-native:sql/v20221101preview:PrivateEndpointConnection" }, { type: "azure-native:sql/v20230201preview:PrivateEndpointConnection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PrivateEndpointConnection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PrivateEndpointConnection resource.
 */
export interface PrivateEndpointConnectionArgs {
    /**
     * Private endpoint which the connection belongs to.
     */
    privateEndpoint?: pulumi.Input<types.inputs.sql.v20211101.PrivateEndpointPropertyArgs>;
    privateEndpointConnectionName?: pulumi.Input<string>;
    /**
     * Connection state of the private endpoint connection.
     */
    privateLinkServiceConnectionState?: pulumi.Input<types.inputs.sql.v20211101.PrivateLinkServiceConnectionStatePropertyArgs>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
}
