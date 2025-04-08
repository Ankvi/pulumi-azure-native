import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Complete information about the private endpoint.
 *
 * Uses Azure REST API version 2020-03-01. In version 1.x of the Azure Native provider, it used API version 2020-03-01-preview.
 *
 * Other available API versions: 2020-03-01-preview.
 */
export class PrivateEndpoint extends pulumi.CustomResource {
    /**
     * Get an existing PrivateEndpoint resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PrivateEndpoint {
        return new PrivateEndpoint(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:streamanalytics:PrivateEndpoint';

    /**
     * Returns true if the given object is an instance of PrivateEndpoint.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PrivateEndpoint {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PrivateEndpoint.__pulumiType;
    }

    /**
     * The date when this private endpoint was created.
     */
    public /*out*/ readonly createdDate!: pulumi.Output<string>;
    /**
     * Unique opaque string (generally a GUID) that represents the metadata state of the resource (private endpoint) and changes whenever the resource is updated. Required on PUT (CreateOrUpdate) requests.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * A list of connections to the remote resource. Immutable after it is set.
     */
    public readonly manualPrivateLinkServiceConnections!: pulumi.Output<types.outputs.PrivateLinkServiceConnectionResponse[] | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a PrivateEndpoint resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PrivateEndpointArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.clusterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["manualPrivateLinkServiceConnections"] = args ? args.manualPrivateLinkServiceConnections : undefined;
            resourceInputs["privateEndpointName"] = args ? args.privateEndpointName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["createdDate"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["createdDate"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["manualPrivateLinkServiceConnections"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:streamanalytics/v20200301:PrivateEndpoint" }, { type: "azure-native:streamanalytics/v20200301preview:PrivateEndpoint" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PrivateEndpoint.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PrivateEndpoint resource.
 */
export interface PrivateEndpointArgs {
    /**
     * The name of the cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * A list of connections to the remote resource. Immutable after it is set.
     */
    manualPrivateLinkServiceConnections?: pulumi.Input<pulumi.Input<types.inputs.PrivateLinkServiceConnectionArgs>[]>;
    /**
     * The name of the private endpoint.
     */
    privateEndpointName?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}