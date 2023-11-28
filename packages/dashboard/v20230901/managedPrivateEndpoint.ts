import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The managed private endpoint resource type.
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
    public static readonly __pulumiType = 'azure-native:dashboard/v20230901:ManagedPrivateEndpoint';

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
     * The state of managed private endpoint connection.
     */
    public /*out*/ readonly connectionState!: pulumi.Output<types.outputs.ManagedPrivateEndpointConnectionStateResponse>;
    /**
     * The group Ids of the managed private endpoint.
     */
    public readonly groupIds!: pulumi.Output<string[] | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The ARM resource ID of the resource for which the managed private endpoint is pointing to.
     */
    public readonly privateLinkResourceId!: pulumi.Output<string | undefined>;
    /**
     * The region of the resource to which the managed private endpoint is pointing to.
     */
    public readonly privateLinkResourceRegion!: pulumi.Output<string | undefined>;
    /**
     * The private IP of private endpoint after approval. This property is empty before connection is approved.
     */
    public /*out*/ readonly privateLinkServicePrivateIP!: pulumi.Output<string>;
    /**
     * The URL of the data store behind the private link service. It would be the URL in the Grafana data source configuration page without the protocol and port.
     */
    public readonly privateLinkServiceUrl!: pulumi.Output<string | undefined>;
    /**
     * Provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * User input request message of the managed private endpoint.
     */
    public readonly requestMessage!: pulumi.Output<string | undefined>;
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
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["groupIds"] = args ? args.groupIds : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["managedPrivateEndpointName"] = args ? args.managedPrivateEndpointName : undefined;
            resourceInputs["privateLinkResourceId"] = args ? args.privateLinkResourceId : undefined;
            resourceInputs["privateLinkResourceRegion"] = args ? args.privateLinkResourceRegion : undefined;
            resourceInputs["privateLinkServiceUrl"] = args ? args.privateLinkServiceUrl : undefined;
            resourceInputs["requestMessage"] = args ? args.requestMessage : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["connectionState"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateLinkServicePrivateIP"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["connectionState"] = undefined /*out*/;
            resourceInputs["groupIds"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateLinkResourceId"] = undefined /*out*/;
            resourceInputs["privateLinkResourceRegion"] = undefined /*out*/;
            resourceInputs["privateLinkServicePrivateIP"] = undefined /*out*/;
            resourceInputs["privateLinkServiceUrl"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["requestMessage"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:dashboard:ManagedPrivateEndpoint" }, { type: "azure-native:dashboard/v20221001preview:ManagedPrivateEndpoint" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ManagedPrivateEndpoint.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ManagedPrivateEndpoint resource.
 */
export interface ManagedPrivateEndpointArgs {
    /**
     * The group Ids of the managed private endpoint.
     */
    groupIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The managed private endpoint name of Azure Managed Grafana.
     */
    managedPrivateEndpointName?: pulumi.Input<string>;
    /**
     * The ARM resource ID of the resource for which the managed private endpoint is pointing to.
     */
    privateLinkResourceId?: pulumi.Input<string>;
    /**
     * The region of the resource to which the managed private endpoint is pointing to.
     */
    privateLinkResourceRegion?: pulumi.Input<string>;
    /**
     * The URL of the data store behind the private link service. It would be the URL in the Grafana data source configuration page without the protocol and port.
     */
    privateLinkServiceUrl?: pulumi.Input<string>;
    /**
     * User input request message of the managed private endpoint.
     */
    requestMessage?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The workspace name of Azure Managed Grafana.
     */
    workspaceName: pulumi.Input<string>;
}
