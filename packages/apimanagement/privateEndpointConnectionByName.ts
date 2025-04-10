import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The Private Endpoint Connection resource.
 *
 * Uses Azure REST API version 2022-08-01. In version 1.x of the Azure Native provider, it used API version 2021-04-01-preview.
 *
 * Other available API versions: 2022-09-01-preview, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview.
 */
export class PrivateEndpointConnectionByName extends pulumi.CustomResource {
    /**
     * Get an existing PrivateEndpointConnectionByName resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PrivateEndpointConnectionByName {
        return new PrivateEndpointConnectionByName(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement:PrivateEndpointConnectionByName';

    /**
     * Returns true if the given object is an instance of PrivateEndpointConnectionByName.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PrivateEndpointConnectionByName {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PrivateEndpointConnectionByName.__pulumiType;
    }

    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The resource of private end point.
     */
    public /*out*/ readonly privateEndpoint!: pulumi.Output<types.outputs.PrivateEndpointResponse | undefined>;
    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    public /*out*/ readonly privateLinkServiceConnectionState!: pulumi.Output<types.outputs.PrivateLinkServiceConnectionStateResponse>;
    /**
     * The provisioning state of the private endpoint connection resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a PrivateEndpointConnectionByName resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PrivateEndpointConnectionByNameArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["privateEndpointConnectionName"] = args ? args.privateEndpointConnectionName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpoint"] = undefined /*out*/;
            resourceInputs["privateLinkServiceConnectionState"] = undefined /*out*/;
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
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement/v20210401preview:PrivateEndpointConnectionByName" }, { type: "azure-native:apimanagement/v20210801:PrivateEndpointConnectionByName" }, { type: "azure-native:apimanagement/v20211201preview:PrivateEndpointConnectionByName" }, { type: "azure-native:apimanagement/v20220401preview:PrivateEndpointConnectionByName" }, { type: "azure-native:apimanagement/v20220801:PrivateEndpointConnectionByName" }, { type: "azure-native:apimanagement/v20220901preview:PrivateEndpointConnectionByName" }, { type: "azure-native:apimanagement/v20230301preview:PrivateEndpointConnectionByName" }, { type: "azure-native:apimanagement/v20230501preview:PrivateEndpointConnectionByName" }, { type: "azure-native:apimanagement/v20230901preview:PrivateEndpointConnectionByName" }, { type: "azure-native:apimanagement/v20240501:PrivateEndpointConnectionByName" }, { type: "azure-native:apimanagement/v20240601preview:PrivateEndpointConnectionByName" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PrivateEndpointConnectionByName.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PrivateEndpointConnectionByName resource.
 */
export interface PrivateEndpointConnectionByNameArgs {
    /**
     * Private Endpoint Connection Resource Id.
     */
    id?: pulumi.Input<string>;
    /**
     * Name of the private endpoint connection.
     */
    privateEndpointConnectionName?: pulumi.Input<string>;
    /**
     * The connection state of the private endpoint connection.
     */
    properties?: pulumi.Input<types.inputs.PrivateEndpointConnectionRequestPropertiesArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}