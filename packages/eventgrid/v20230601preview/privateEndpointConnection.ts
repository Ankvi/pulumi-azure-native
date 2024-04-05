import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
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
    public static readonly __pulumiType = 'azure-native:eventgrid/v20230601preview:PrivateEndpointConnection';

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
     * GroupIds from the private link service resource.
     */
    public readonly groupIds!: pulumi.Output<string[] | undefined>;
    /**
     * Name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The Private Endpoint resource for this Connection.
     */
    public readonly privateEndpoint!: pulumi.Output<types.outputs.PrivateEndpointResponse | undefined>;
    /**
     * Details about the state of the connection.
     */
    public readonly privateLinkServiceConnectionState!: pulumi.Output<types.outputs.ConnectionStateResponse | undefined>;
    /**
     * Provisioning state of the Private Endpoint Connection.
     */
    public readonly provisioningState!: pulumi.Output<string | undefined>;
    /**
     * Type of the resource.
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
            if ((!args || args.parentName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'parentName'");
            }
            if ((!args || args.parentType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'parentType'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["groupIds"] = args ? args.groupIds : undefined;
            resourceInputs["parentName"] = args ? args.parentName : undefined;
            resourceInputs["parentType"] = args ? args.parentType : undefined;
            resourceInputs["privateEndpoint"] = args ? args.privateEndpoint : undefined;
            resourceInputs["privateEndpointConnectionName"] = args ? args.privateEndpointConnectionName : undefined;
            resourceInputs["privateLinkServiceConnectionState"] = args ? args.privateLinkServiceConnectionState : undefined;
            resourceInputs["provisioningState"] = args ? args.provisioningState : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["name"] = undefined /*out*/;
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
        const aliasOpts = { aliases: [{ type: "azure-native:eventgrid:PrivateEndpointConnection" }, { type: "azure-native:eventgrid/v20200401preview:PrivateEndpointConnection" }, { type: "azure-native:eventgrid/v20200601:PrivateEndpointConnection" }, { type: "azure-native:eventgrid/v20201015preview:PrivateEndpointConnection" }, { type: "azure-native:eventgrid/v20210601preview:PrivateEndpointConnection" }, { type: "azure-native:eventgrid/v20211015preview:PrivateEndpointConnection" }, { type: "azure-native:eventgrid/v20211201:PrivateEndpointConnection" }, { type: "azure-native:eventgrid/v20220615:PrivateEndpointConnection" }, { type: "azure-native:eventgrid/v20231215preview:PrivateEndpointConnection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PrivateEndpointConnection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PrivateEndpointConnection resource.
 */
export interface PrivateEndpointConnectionArgs {
    /**
     * GroupIds from the private link service resource.
     */
    groupIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the parent resource (namely, either, the topic name, domain name, or partner namespace name or namespace name).
     */
    parentName: pulumi.Input<string>;
    /**
     * The type of the parent resource. This can be either \'topics\', \'domains\', or \'partnerNamespaces\' or \'namespaces\'.
     */
    parentType: pulumi.Input<string>;
    /**
     * The Private Endpoint resource for this Connection.
     */
    privateEndpoint?: pulumi.Input<types.inputs.PrivateEndpointArgs>;
    /**
     * The name of the private endpoint connection connection.
     */
    privateEndpointConnectionName?: pulumi.Input<string>;
    /**
     * Details about the state of the connection.
     */
    privateLinkServiceConnectionState?: pulumi.Input<types.inputs.ConnectionStateArgs>;
    /**
     * Provisioning state of the Private Endpoint Connection.
     */
    provisioningState?: pulumi.Input<string | types.enums.ResourceProvisioningState>;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}