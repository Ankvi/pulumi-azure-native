import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A private endpoint connection
 * Azure REST API version: 2023-04-15. Prior API version in Azure Native 1.x: 2021-03-15.
 *
 * Other available API versions: 2023-09-15, 2023-09-15-preview, 2023-11-15.
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
    public static readonly __pulumiType = 'azure-native:documentdb:PrivateEndpointConnection';

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
     * Group id of the private endpoint.
     */
    public readonly groupId!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Private endpoint which the connection belongs to.
     */
    public readonly privateEndpoint!: pulumi.Output<types.outputs.PrivateEndpointPropertyResponse | undefined>;
    /**
     * Connection State of the Private Endpoint Connection.
     */
    public readonly privateLinkServiceConnectionState!: pulumi.Output<types.outputs.PrivateLinkServiceConnectionStatePropertyResponse | undefined>;
    /**
     * Provisioning state of the private endpoint.
     */
    public readonly provisioningState!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
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
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["groupId"] = args ? args.groupId : undefined;
            resourceInputs["privateEndpoint"] = args ? args.privateEndpoint : undefined;
            resourceInputs["privateEndpointConnectionName"] = args ? args.privateEndpointConnectionName : undefined;
            resourceInputs["privateLinkServiceConnectionState"] = args ? args.privateLinkServiceConnectionState : undefined;
            resourceInputs["provisioningState"] = args ? args.provisioningState : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["groupId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpoint"] = undefined /*out*/;
            resourceInputs["privateLinkServiceConnectionState"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:documentdb/v20190801preview:PrivateEndpointConnection" }, { type: "azure-native:documentdb/v20210115:PrivateEndpointConnection" }, { type: "azure-native:documentdb/v20210301preview:PrivateEndpointConnection" }, { type: "azure-native:documentdb/v20210315:PrivateEndpointConnection" }, { type: "azure-native:documentdb/v20210401preview:PrivateEndpointConnection" }, { type: "azure-native:documentdb/v20210415:PrivateEndpointConnection" }, { type: "azure-native:documentdb/v20210515:PrivateEndpointConnection" }, { type: "azure-native:documentdb/v20210615:PrivateEndpointConnection" }, { type: "azure-native:documentdb/v20210701preview:PrivateEndpointConnection" }, { type: "azure-native:documentdb/v20211015:PrivateEndpointConnection" }, { type: "azure-native:documentdb/v20211015preview:PrivateEndpointConnection" }, { type: "azure-native:documentdb/v20211115preview:PrivateEndpointConnection" }, { type: "azure-native:documentdb/v20220215preview:PrivateEndpointConnection" }, { type: "azure-native:documentdb/v20220515:PrivateEndpointConnection" }, { type: "azure-native:documentdb/v20220515preview:PrivateEndpointConnection" }, { type: "azure-native:documentdb/v20220815:PrivateEndpointConnection" }, { type: "azure-native:documentdb/v20220815preview:PrivateEndpointConnection" }, { type: "azure-native:documentdb/v20221115:PrivateEndpointConnection" }, { type: "azure-native:documentdb/v20221115preview:PrivateEndpointConnection" }, { type: "azure-native:documentdb/v20230301preview:PrivateEndpointConnection" }, { type: "azure-native:documentdb/v20230315:PrivateEndpointConnection" }, { type: "azure-native:documentdb/v20230315preview:PrivateEndpointConnection" }, { type: "azure-native:documentdb/v20230415:PrivateEndpointConnection" }, { type: "azure-native:documentdb/v20230915:PrivateEndpointConnection" }, { type: "azure-native:documentdb/v20230915preview:PrivateEndpointConnection" }, { type: "azure-native:documentdb/v20231115:PrivateEndpointConnection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PrivateEndpointConnection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PrivateEndpointConnection resource.
 */
export interface PrivateEndpointConnectionArgs {
    /**
     * Cosmos DB database account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * Group id of the private endpoint.
     */
    groupId?: pulumi.Input<string>;
    /**
     * Private endpoint which the connection belongs to.
     */
    privateEndpoint?: pulumi.Input<types.inputs.PrivateEndpointPropertyArgs>;
    /**
     * The name of the private endpoint connection.
     */
    privateEndpointConnectionName?: pulumi.Input<string>;
    /**
     * Connection State of the Private Endpoint Connection.
     */
    privateLinkServiceConnectionState?: pulumi.Input<types.inputs.PrivateLinkServiceConnectionStatePropertyArgs>;
    /**
     * Provisioning state of the private endpoint.
     */
    provisioningState?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
