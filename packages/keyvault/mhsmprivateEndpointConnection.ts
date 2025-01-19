import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Private endpoint connection resource.
 * Azure REST API version: 2023-02-01. Prior API version in Azure Native 1.x: 2021-06-01-preview.
 *
 * Other available API versions: 2023-07-01, 2024-04-01-preview, 2024-11-01, 2024-12-01-preview.
 */
export class MHSMPrivateEndpointConnection extends pulumi.CustomResource {
    /**
     * Get an existing MHSMPrivateEndpointConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): MHSMPrivateEndpointConnection {
        return new MHSMPrivateEndpointConnection(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:keyvault:MHSMPrivateEndpointConnection';

    /**
     * Returns true if the given object is an instance of MHSMPrivateEndpointConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MHSMPrivateEndpointConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MHSMPrivateEndpointConnection.__pulumiType;
    }

    /**
     * Modified whenever there is a change in the state of private endpoint connection.
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * The supported Azure location where the managed HSM Pool should be created.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the managed HSM Pool.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Properties of the private endpoint object.
     */
    public /*out*/ readonly privateEndpoint!: pulumi.Output<types.outputs.MHSMPrivateEndpointResponse | undefined>;
    /**
     * Approval state of the private link connection.
     */
    public readonly privateLinkServiceConnectionState!: pulumi.Output<types.outputs.MHSMPrivateLinkServiceConnectionStateResponse | undefined>;
    /**
     * Provisioning state of the private endpoint connection.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * SKU details
     */
    public readonly sku!: pulumi.Output<types.outputs.ManagedHsmSkuResponse | undefined>;
    /**
     * Metadata pertaining to creation and last modification of the key vault resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The resource type of the managed HSM Pool.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a MHSMPrivateEndpointConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MHSMPrivateEndpointConnectionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["privateEndpointConnectionName"] = args ? args.privateEndpointConnectionName : undefined;
            resourceInputs["privateLinkServiceConnectionState"] = args ? args.privateLinkServiceConnectionState : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["privateEndpoint"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpoint"] = undefined /*out*/;
            resourceInputs["privateLinkServiceConnectionState"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:keyvault/v20210401preview:MHSMPrivateEndpointConnection" }, { type: "azure-native:keyvault/v20210601preview:MHSMPrivateEndpointConnection" }, { type: "azure-native:keyvault/v20211001:MHSMPrivateEndpointConnection" }, { type: "azure-native:keyvault/v20211101preview:MHSMPrivateEndpointConnection" }, { type: "azure-native:keyvault/v20220201preview:MHSMPrivateEndpointConnection" }, { type: "azure-native:keyvault/v20220701:MHSMPrivateEndpointConnection" }, { type: "azure-native:keyvault/v20221101:MHSMPrivateEndpointConnection" }, { type: "azure-native:keyvault/v20230201:MHSMPrivateEndpointConnection" }, { type: "azure-native:keyvault/v20230701:MHSMPrivateEndpointConnection" }, { type: "azure-native:keyvault/v20240401preview:MHSMPrivateEndpointConnection" }, { type: "azure-native:keyvault/v20241101:MHSMPrivateEndpointConnection" }, { type: "azure-native:keyvault/v20241201preview:MHSMPrivateEndpointConnection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(MHSMPrivateEndpointConnection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a MHSMPrivateEndpointConnection resource.
 */
export interface MHSMPrivateEndpointConnectionArgs {
    /**
     * The supported Azure location where the managed HSM Pool should be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Name of the managed HSM Pool
     */
    name: pulumi.Input<string>;
    /**
     * Name of the private endpoint connection associated with the managed hsm pool.
     */
    privateEndpointConnectionName?: pulumi.Input<string>;
    /**
     * Approval state of the private link connection.
     */
    privateLinkServiceConnectionState?: pulumi.Input<types.inputs.MHSMPrivateLinkServiceConnectionStateArgs>;
    /**
     * Name of the resource group that contains the managed HSM pool.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * SKU details
     */
    sku?: pulumi.Input<types.inputs.ManagedHsmSkuArgs>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}