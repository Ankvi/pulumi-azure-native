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
    public static readonly __pulumiType = 'azure-native:containerservice/v20230401:PrivateEndpointConnection';

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
     * The name of the private endpoint connection.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The resource of private endpoint.
     */
    public readonly privateEndpoint!: pulumi.Output<types.outputs.containerservice.v20230401.PrivateEndpointResponse | undefined>;
    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    public readonly privateLinkServiceConnectionState!: pulumi.Output<types.outputs.containerservice.v20230401.PrivateLinkServiceConnectionStateResponse>;
    /**
     * The current provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
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
            if ((!args || args.privateLinkServiceConnectionState === undefined) && !opts.urn) {
                throw new Error("Missing required property 'privateLinkServiceConnectionState'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.resourceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceName'");
            }
            resourceInputs["privateEndpoint"] = args ? args.privateEndpoint : undefined;
            resourceInputs["privateEndpointConnectionName"] = args ? args.privateEndpointConnectionName : undefined;
            resourceInputs["privateLinkServiceConnectionState"] = args ? args.privateLinkServiceConnectionState : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
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
        const aliasOpts = { aliases: [{ type: "azure-native:containerservice:PrivateEndpointConnection" }, { type: "azure-native:containerservice/v20200601:PrivateEndpointConnection" }, { type: "azure-native:containerservice/v20200701:PrivateEndpointConnection" }, { type: "azure-native:containerservice/v20200901:PrivateEndpointConnection" }, { type: "azure-native:containerservice/v20201101:PrivateEndpointConnection" }, { type: "azure-native:containerservice/v20201201:PrivateEndpointConnection" }, { type: "azure-native:containerservice/v20210201:PrivateEndpointConnection" }, { type: "azure-native:containerservice/v20210301:PrivateEndpointConnection" }, { type: "azure-native:containerservice/v20210501:PrivateEndpointConnection" }, { type: "azure-native:containerservice/v20210701:PrivateEndpointConnection" }, { type: "azure-native:containerservice/v20210801:PrivateEndpointConnection" }, { type: "azure-native:containerservice/v20210901:PrivateEndpointConnection" }, { type: "azure-native:containerservice/v20211001:PrivateEndpointConnection" }, { type: "azure-native:containerservice/v20211101preview:PrivateEndpointConnection" }, { type: "azure-native:containerservice/v20220101:PrivateEndpointConnection" }, { type: "azure-native:containerservice/v20220102preview:PrivateEndpointConnection" }, { type: "azure-native:containerservice/v20220201:PrivateEndpointConnection" }, { type: "azure-native:containerservice/v20220202preview:PrivateEndpointConnection" }, { type: "azure-native:containerservice/v20220301:PrivateEndpointConnection" }, { type: "azure-native:containerservice/v20220302preview:PrivateEndpointConnection" }, { type: "azure-native:containerservice/v20220401:PrivateEndpointConnection" }, { type: "azure-native:containerservice/v20220402preview:PrivateEndpointConnection" }, { type: "azure-native:containerservice/v20220502preview:PrivateEndpointConnection" }, { type: "azure-native:containerservice/v20220601:PrivateEndpointConnection" }, { type: "azure-native:containerservice/v20220602preview:PrivateEndpointConnection" }, { type: "azure-native:containerservice/v20220701:PrivateEndpointConnection" }, { type: "azure-native:containerservice/v20220702preview:PrivateEndpointConnection" }, { type: "azure-native:containerservice/v20220802preview:PrivateEndpointConnection" }, { type: "azure-native:containerservice/v20220803preview:PrivateEndpointConnection" }, { type: "azure-native:containerservice/v20220901:PrivateEndpointConnection" }, { type: "azure-native:containerservice/v20220902preview:PrivateEndpointConnection" }, { type: "azure-native:containerservice/v20221002preview:PrivateEndpointConnection" }, { type: "azure-native:containerservice/v20221101:PrivateEndpointConnection" }, { type: "azure-native:containerservice/v20221102preview:PrivateEndpointConnection" }, { type: "azure-native:containerservice/v20230101:PrivateEndpointConnection" }, { type: "azure-native:containerservice/v20230102preview:PrivateEndpointConnection" }, { type: "azure-native:containerservice/v20230201:PrivateEndpointConnection" }, { type: "azure-native:containerservice/v20230202preview:PrivateEndpointConnection" }, { type: "azure-native:containerservice/v20230301:PrivateEndpointConnection" }, { type: "azure-native:containerservice/v20230302preview:PrivateEndpointConnection" }, { type: "azure-native:containerservice/v20230402preview:PrivateEndpointConnection" }, { type: "azure-native:containerservice/v20230501:PrivateEndpointConnection" }, { type: "azure-native:containerservice/v20230502preview:PrivateEndpointConnection" }, { type: "azure-native:containerservice/v20230601:PrivateEndpointConnection" }, { type: "azure-native:containerservice/v20230602preview:PrivateEndpointConnection" }, { type: "azure-native:containerservice/v20230701:PrivateEndpointConnection" }, { type: "azure-native:containerservice/v20230702preview:PrivateEndpointConnection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PrivateEndpointConnection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PrivateEndpointConnection resource.
 */
export interface PrivateEndpointConnectionArgs {
    /**
     * The resource of private endpoint.
     */
    privateEndpoint?: pulumi.Input<types.inputs.containerservice.v20230401.PrivateEndpointArgs>;
    /**
     * The name of the private endpoint connection.
     */
    privateEndpointConnectionName?: pulumi.Input<string>;
    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    privateLinkServiceConnectionState: pulumi.Input<types.inputs.containerservice.v20230401.PrivateLinkServiceConnectionStateArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the managed cluster resource.
     */
    resourceName: pulumi.Input<string>;
}
