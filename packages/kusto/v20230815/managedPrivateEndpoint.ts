import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Class representing a managed private endpoint.
 */
export class ManagedPrivateEndpoint extends pulumi.CustomResource {
    /**
     * Get an existing ManagedPrivateEndpoint resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ManagedPrivateEndpoint {
        return new ManagedPrivateEndpoint(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:kusto/v20230815:ManagedPrivateEndpoint';

    /**
     * Returns true if the given object is an instance of ManagedPrivateEndpoint.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ManagedPrivateEndpoint {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ManagedPrivateEndpoint.__pulumiType;
    }

    /**
     * The groupId in which the managed private endpoint is created.
     */
    public readonly groupId!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The ARM resource ID of the resource for which the managed private endpoint is created.
     */
    public readonly privateLinkResourceId!: pulumi.Output<string>;
    /**
     * The region of the resource to which the managed private endpoint is created.
     */
    public readonly privateLinkResourceRegion!: pulumi.Output<string | undefined>;
    /**
     * The provisioned state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The user request message.
     */
    public readonly requestMessage!: pulumi.Output<string | undefined>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ManagedPrivateEndpoint resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ManagedPrivateEndpointArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.clusterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterName'");
            }
            if ((!args || args.groupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'groupId'");
            }
            if ((!args || args.privateLinkResourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'privateLinkResourceId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["groupId"] = args ? args.groupId : undefined;
            resourceInputs["managedPrivateEndpointName"] = args ? args.managedPrivateEndpointName : undefined;
            resourceInputs["privateLinkResourceId"] = args ? args.privateLinkResourceId : undefined;
            resourceInputs["privateLinkResourceRegion"] = args ? args.privateLinkResourceRegion : undefined;
            resourceInputs["requestMessage"] = args ? args.requestMessage : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["groupId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateLinkResourceId"] = undefined /*out*/;
            resourceInputs["privateLinkResourceRegion"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["requestMessage"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:kusto:ManagedPrivateEndpoint" }, { type: "azure-native:kusto/v20210827:ManagedPrivateEndpoint" }, { type: "azure-native:kusto/v20220201:ManagedPrivateEndpoint" }, { type: "azure-native:kusto/v20220707:ManagedPrivateEndpoint" }, { type: "azure-native:kusto/v20221111:ManagedPrivateEndpoint" }, { type: "azure-native:kusto/v20221229:ManagedPrivateEndpoint" }, { type: "azure-native:kusto/v20230502:ManagedPrivateEndpoint" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ManagedPrivateEndpoint.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ManagedPrivateEndpoint resource.
 */
export interface ManagedPrivateEndpointArgs {
    /**
     * The name of the Kusto cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The groupId in which the managed private endpoint is created.
     */
    groupId: pulumi.Input<string>;
    /**
     * The name of the managed private endpoint.
     */
    managedPrivateEndpointName?: pulumi.Input<string>;
    /**
     * The ARM resource ID of the resource for which the managed private endpoint is created.
     */
    privateLinkResourceId: pulumi.Input<string>;
    /**
     * The region of the resource to which the managed private endpoint is created.
     */
    privateLinkResourceRegion?: pulumi.Input<string>;
    /**
     * The user request message.
     */
    requestMessage?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}