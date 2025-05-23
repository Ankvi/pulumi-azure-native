import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Resource which represents the managed network connection between Azure Gateways and remote cloud gateways.
 *
 * Uses Azure REST API version 2023-01-01-preview. In version 2.x of the Azure Native provider, it used API version 2023-01-01-preview.
 */
export class CloudConnection extends pulumi.CustomResource {
    /**
     * Get an existing CloudConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CloudConnection {
        return new CloudConnection(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:hybridcloud:CloudConnection';

    /**
     * Returns true if the given object is an instance of CloudConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CloudConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CloudConnection.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The cloud connector which discovered the remote resource.
     */
    public readonly cloudConnector!: pulumi.Output<types.outputs.ResourceReferenceResponse | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the cloud collection resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Identifier for the remote cloud resource
     */
    public readonly remoteResourceId!: pulumi.Output<string | undefined>;
    /**
     * Shared key of the cloud connection.
     */
    public readonly sharedKey!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The virtualHub to which the cloud connection belongs.
     */
    public readonly virtualHub!: pulumi.Output<types.outputs.ResourceReferenceResponse | undefined>;

    /**
     * Create a CloudConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CloudConnectionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["cloudConnectionName"] = args ? args.cloudConnectionName : undefined;
            resourceInputs["cloudConnector"] = args ? args.cloudConnector : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["remoteResourceId"] = args ? args.remoteResourceId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sharedKey"] = args ? args.sharedKey : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["virtualHub"] = args ? args.virtualHub : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["cloudConnector"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["remoteResourceId"] = undefined /*out*/;
            resourceInputs["sharedKey"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualHub"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:hybridcloud/v20230101preview:CloudConnection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(CloudConnection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a CloudConnection resource.
 */
export interface CloudConnectionArgs {
    /**
     * The name of the cloud connection resource
     */
    cloudConnectionName?: pulumi.Input<string>;
    /**
     * The cloud connector which discovered the remote resource.
     */
    cloudConnector?: pulumi.Input<types.inputs.ResourceReferenceArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Identifier for the remote cloud resource
     */
    remoteResourceId?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Shared key of the cloud connection.
     */
    sharedKey?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The virtualHub to which the cloud connection belongs.
     */
    virtualHub?: pulumi.Input<types.inputs.ResourceReferenceArgs>;
}