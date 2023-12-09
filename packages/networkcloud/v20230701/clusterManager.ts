import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
export class ClusterManager extends pulumi.CustomResource {
    /**
     * Get an existing ClusterManager resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ClusterManager {
        return new ClusterManager(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:networkcloud/v20230701:ClusterManager';

    /**
     * Returns true if the given object is an instance of ClusterManager.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ClusterManager {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ClusterManager.__pulumiType;
    }

    /**
     * The resource ID of the Log Analytics workspace that is used for the logs collection.
     */
    public readonly analyticsWorkspaceId!: pulumi.Output<string | undefined>;
    /**
     * Field deprecated, this value will no longer influence the cluster manager allocation process and will be removed in a future version. The Azure availability zones within the region that will be used to support the cluster manager resource.
     */
    public readonly availabilityZones!: pulumi.Output<string[] | undefined>;
    /**
     * The list of the cluster versions the manager supports. It is used as input in clusterVersion property of a cluster resource.
     */
    public /*out*/ readonly clusterVersions!: pulumi.Output<types.outputs.ClusterAvailableVersionResponse[]>;
    /**
     * The detailed status that provides additional information about the cluster manager.
     */
    public /*out*/ readonly detailedStatus!: pulumi.Output<string>;
    /**
     * The descriptive message about the current detailed status.
     */
    public /*out*/ readonly detailedStatusMessage!: pulumi.Output<string>;
    /**
     * The resource ID of the fabric controller that has one to one mapping with the cluster manager.
     */
    public readonly fabricControllerId!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The configuration of the managed resource group associated with the resource.
     */
    public readonly managedResourceGroupConfiguration!: pulumi.Output<types.outputs.ManagedResourceGroupConfigurationResponse | undefined>;
    /**
     * The extended location (custom location) that represents the cluster manager's control plane location. This extended location is used when creating cluster and rack manifest resources.
     */
    public /*out*/ readonly managerExtendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the cluster manager.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
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
     * Field deprecated, this value will no longer influence the cluster manager allocation process and will be removed in a future version. The size of the Azure virtual machines to use for hosting the cluster manager resource.
     */
    public readonly vmSize!: pulumi.Output<string | undefined>;

    /**
     * Create a ClusterManager resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ClusterManagerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.fabricControllerId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'fabricControllerId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["analyticsWorkspaceId"] = args ? args.analyticsWorkspaceId : undefined;
            resourceInputs["availabilityZones"] = args ? args.availabilityZones : undefined;
            resourceInputs["clusterManagerName"] = args ? args.clusterManagerName : undefined;
            resourceInputs["fabricControllerId"] = args ? args.fabricControllerId : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["managedResourceGroupConfiguration"] = args ? args.managedResourceGroupConfiguration : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vmSize"] = args ? args.vmSize : undefined;
            resourceInputs["clusterVersions"] = undefined /*out*/;
            resourceInputs["detailedStatus"] = undefined /*out*/;
            resourceInputs["detailedStatusMessage"] = undefined /*out*/;
            resourceInputs["managerExtendedLocation"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["analyticsWorkspaceId"] = undefined /*out*/;
            resourceInputs["availabilityZones"] = undefined /*out*/;
            resourceInputs["clusterVersions"] = undefined /*out*/;
            resourceInputs["detailedStatus"] = undefined /*out*/;
            resourceInputs["detailedStatusMessage"] = undefined /*out*/;
            resourceInputs["fabricControllerId"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["managedResourceGroupConfiguration"] = undefined /*out*/;
            resourceInputs["managerExtendedLocation"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vmSize"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:networkcloud:ClusterManager" }, { type: "azure-native:networkcloud/v20230501preview:ClusterManager" }, { type: "azure-native:networkcloud/v20231001preview:ClusterManager" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ClusterManager.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ClusterManager resource.
 */
export interface ClusterManagerArgs {
    /**
     * The resource ID of the Log Analytics workspace that is used for the logs collection.
     */
    analyticsWorkspaceId?: pulumi.Input<string>;
    /**
     * Field deprecated, this value will no longer influence the cluster manager allocation process and will be removed in a future version. The Azure availability zones within the region that will be used to support the cluster manager resource.
     */
    availabilityZones?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the cluster manager.
     */
    clusterManagerName?: pulumi.Input<string>;
    /**
     * The resource ID of the fabric controller that has one to one mapping with the cluster manager.
     */
    fabricControllerId: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The configuration of the managed resource group associated with the resource.
     */
    managedResourceGroupConfiguration?: pulumi.Input<types.inputs.ManagedResourceGroupConfigurationArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Field deprecated, this value will no longer influence the cluster manager allocation process and will be removed in a future version. The size of the Azure virtual machines to use for hosting the cluster manager resource.
     */
    vmSize?: pulumi.Input<string>;
}
