import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A private endpoint connection
 * Azure REST API version: 2021-11-01. Prior API version in Azure Native 1.x: 2020-11-01-preview
 */
export class ManagedInstancePrivateEndpointConnection extends pulumi.CustomResource {
    /**
     * Get an existing ManagedInstancePrivateEndpointConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ManagedInstancePrivateEndpointConnection {
        return new ManagedInstancePrivateEndpointConnection(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:sql:ManagedInstancePrivateEndpointConnection';

    /**
     * Returns true if the given object is an instance of ManagedInstancePrivateEndpointConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ManagedInstancePrivateEndpointConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ManagedInstancePrivateEndpointConnection.__pulumiType;
    }

    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Private endpoint which the connection belongs to.
     */
    public readonly privateEndpoint!: pulumi.Output<types.outputs.sql.ManagedInstancePrivateEndpointPropertyResponse | undefined>;
    /**
     * Connection State of the Private Endpoint Connection.
     */
    public readonly privateLinkServiceConnectionState!: pulumi.Output<types.outputs.sql.ManagedInstancePrivateLinkServiceConnectionStatePropertyResponse | undefined>;
    /**
     * State of the Private Endpoint Connection.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ManagedInstancePrivateEndpointConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ManagedInstancePrivateEndpointConnectionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.managedInstanceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'managedInstanceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["managedInstanceName"] = args ? args.managedInstanceName : undefined;
            resourceInputs["privateEndpoint"] = args ? args.privateEndpoint : undefined;
            resourceInputs["privateEndpointConnectionName"] = args ? args.privateEndpointConnectionName : undefined;
            resourceInputs["privateLinkServiceConnectionState"] = args ? args.privateLinkServiceConnectionState : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpoint"] = undefined /*out*/;
            resourceInputs["privateLinkServiceConnectionState"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sql/v20200202preview:ManagedInstancePrivateEndpointConnection" }, { type: "azure-native:sql/v20200801preview:ManagedInstancePrivateEndpointConnection" }, { type: "azure-native:sql/v20201101preview:ManagedInstancePrivateEndpointConnection" }, { type: "azure-native:sql/v20210201preview:ManagedInstancePrivateEndpointConnection" }, { type: "azure-native:sql/v20210501preview:ManagedInstancePrivateEndpointConnection" }, { type: "azure-native:sql/v20210801preview:ManagedInstancePrivateEndpointConnection" }, { type: "azure-native:sql/v20211101:ManagedInstancePrivateEndpointConnection" }, { type: "azure-native:sql/v20211101preview:ManagedInstancePrivateEndpointConnection" }, { type: "azure-native:sql/v20220201preview:ManagedInstancePrivateEndpointConnection" }, { type: "azure-native:sql/v20220501preview:ManagedInstancePrivateEndpointConnection" }, { type: "azure-native:sql/v20220801preview:ManagedInstancePrivateEndpointConnection" }, { type: "azure-native:sql/v20221101preview:ManagedInstancePrivateEndpointConnection" }, { type: "azure-native:sql/v20230201preview:ManagedInstancePrivateEndpointConnection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ManagedInstancePrivateEndpointConnection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ManagedInstancePrivateEndpointConnection resource.
 */
export interface ManagedInstancePrivateEndpointConnectionArgs {
    /**
     * The name of the managed instance.
     */
    managedInstanceName: pulumi.Input<string>;
    /**
     * Private endpoint which the connection belongs to.
     */
    privateEndpoint?: pulumi.Input<types.inputs.sql.ManagedInstancePrivateEndpointPropertyArgs>;
    privateEndpointConnectionName?: pulumi.Input<string>;
    /**
     * Connection State of the Private Endpoint Connection.
     */
    privateLinkServiceConnectionState?: pulumi.Input<types.inputs.sql.ManagedInstancePrivateLinkServiceConnectionStatePropertyArgs>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
}
