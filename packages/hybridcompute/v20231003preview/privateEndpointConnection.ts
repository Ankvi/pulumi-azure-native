import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
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
    public static readonly __pulumiType = 'azure-native:hybridcompute/v20231003preview:PrivateEndpointConnection';

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
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Resource properties.
     */
    public readonly properties!: pulumi.Output<types.outputs.PrivateEndpointConnectionPropertiesResponse>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
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
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.scopeName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scopeName'");
            }
            resourceInputs["privateEndpointConnectionName"] = args ? args.privateEndpointConnectionName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["scopeName"] = args ? args.scopeName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:hybridcompute:PrivateEndpointConnection" }, { type: "azure-native:hybridcompute/v20200815preview:PrivateEndpointConnection" }, { type: "azure-native:hybridcompute/v20210128preview:PrivateEndpointConnection" }, { type: "azure-native:hybridcompute/v20210325preview:PrivateEndpointConnection" }, { type: "azure-native:hybridcompute/v20210422preview:PrivateEndpointConnection" }, { type: "azure-native:hybridcompute/v20210517preview:PrivateEndpointConnection" }, { type: "azure-native:hybridcompute/v20210520:PrivateEndpointConnection" }, { type: "azure-native:hybridcompute/v20210610preview:PrivateEndpointConnection" }, { type: "azure-native:hybridcompute/v20211210preview:PrivateEndpointConnection" }, { type: "azure-native:hybridcompute/v20220310:PrivateEndpointConnection" }, { type: "azure-native:hybridcompute/v20220510preview:PrivateEndpointConnection" }, { type: "azure-native:hybridcompute/v20220811preview:PrivateEndpointConnection" }, { type: "azure-native:hybridcompute/v20221110:PrivateEndpointConnection" }, { type: "azure-native:hybridcompute/v20221227:PrivateEndpointConnection" }, { type: "azure-native:hybridcompute/v20221227preview:PrivateEndpointConnection" }, { type: "azure-native:hybridcompute/v20230315preview:PrivateEndpointConnection" }, { type: "azure-native:hybridcompute/v20230620preview:PrivateEndpointConnection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PrivateEndpointConnection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PrivateEndpointConnection resource.
 */
export interface PrivateEndpointConnectionArgs {
    /**
     * The name of the private endpoint connection.
     */
    privateEndpointConnectionName?: pulumi.Input<string>;
    /**
     * Resource properties.
     */
    properties?: pulumi.Input<types.inputs.PrivateEndpointConnectionPropertiesArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Azure Arc PrivateLinkScope resource.
     */
    scopeName: pulumi.Input<string>;
}
