import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Cluster pool.
 */
export class ClusterPool extends pulumi.CustomResource {
    /**
     * Get an existing ClusterPool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ClusterPool {
        return new ClusterPool(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:hdinsight/v20230601preview:ClusterPool';

    /**
     * Returns true if the given object is an instance of ClusterPool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ClusterPool {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ClusterPool.__pulumiType;
    }

    /**
     * Properties of underlying AKS cluster.
     */
    public /*out*/ readonly aksClusterProfile!: pulumi.Output<types.outputs.hdinsight.v20230601preview.ClusterPoolResourcePropertiesResponseAksClusterProfile>;
    /**
     * A resource group created by AKS, to hold the infrastructure resources created by AKS on-behalf of customers. It is generated by cluster pool name and managed resource group name by pattern: MC_{managedResourceGroupName}_{clusterPoolName}_{region}
     */
    public /*out*/ readonly aksManagedResourceGroupName!: pulumi.Output<string>;
    /**
     * CLuster pool profile.
     */
    public readonly clusterPoolProfile!: pulumi.Output<types.outputs.hdinsight.v20230601preview.ClusterPoolResourcePropertiesResponseClusterPoolProfile | undefined>;
    /**
     * CLuster pool compute profile.
     */
    public readonly computeProfile!: pulumi.Output<types.outputs.hdinsight.v20230601preview.ClusterPoolResourcePropertiesResponseComputeProfile>;
    /**
     * A unique id generated by the RP to identify the resource.
     */
    public /*out*/ readonly deploymentId!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Cluster pool log analytics profile to enable OMS agent for AKS cluster.
     */
    public readonly logAnalyticsProfile!: pulumi.Output<types.outputs.hdinsight.v20230601preview.ClusterPoolResourcePropertiesResponseLogAnalyticsProfile | undefined>;
    /**
     * A resource group created by RP, to hold the resources created by RP on-behalf of customers. It will also be used to generate aksManagedResourceGroupName by pattern: MC_{managedResourceGroupName}_{clusterPoolName}_{region}. Please make sure it meets resource group name restriction.
     */
    public readonly managedResourceGroupName!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Cluster pool network profile.
     */
    public readonly networkProfile!: pulumi.Output<types.outputs.hdinsight.v20230601preview.ClusterPoolResourcePropertiesResponseNetworkProfile | undefined>;
    /**
     * Provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Business status of the resource.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.hdinsight.v20230601preview.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ClusterPool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ClusterPoolArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.computeProfile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'computeProfile'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["clusterPoolName"] = args ? args.clusterPoolName : undefined;
            resourceInputs["clusterPoolProfile"] = args ? args.clusterPoolProfile : undefined;
            resourceInputs["computeProfile"] = args ? args.computeProfile : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["logAnalyticsProfile"] = args ? args.logAnalyticsProfile : undefined;
            resourceInputs["managedResourceGroupName"] = args ? args.managedResourceGroupName : undefined;
            resourceInputs["networkProfile"] = args ? args.networkProfile : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["aksClusterProfile"] = undefined /*out*/;
            resourceInputs["aksManagedResourceGroupName"] = undefined /*out*/;
            resourceInputs["deploymentId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["aksClusterProfile"] = undefined /*out*/;
            resourceInputs["aksManagedResourceGroupName"] = undefined /*out*/;
            resourceInputs["clusterPoolProfile"] = undefined /*out*/;
            resourceInputs["computeProfile"] = undefined /*out*/;
            resourceInputs["deploymentId"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["logAnalyticsProfile"] = undefined /*out*/;
            resourceInputs["managedResourceGroupName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkProfile"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:hdinsight:ClusterPool" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ClusterPool.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ClusterPool resource.
 */
export interface ClusterPoolArgs {
    /**
     * The name of the cluster pool.
     */
    clusterPoolName?: pulumi.Input<string>;
    /**
     * CLuster pool profile.
     */
    clusterPoolProfile?: pulumi.Input<types.inputs.hdinsight.v20230601preview.ClusterPoolResourcePropertiesClusterPoolProfileArgs>;
    /**
     * CLuster pool compute profile.
     */
    computeProfile: pulumi.Input<types.inputs.hdinsight.v20230601preview.ClusterPoolResourcePropertiesComputeProfileArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Cluster pool log analytics profile to enable OMS agent for AKS cluster.
     */
    logAnalyticsProfile?: pulumi.Input<types.inputs.hdinsight.v20230601preview.ClusterPoolResourcePropertiesLogAnalyticsProfileArgs>;
    /**
     * A resource group created by RP, to hold the resources created by RP on-behalf of customers. It will also be used to generate aksManagedResourceGroupName by pattern: MC_{managedResourceGroupName}_{clusterPoolName}_{region}. Please make sure it meets resource group name restriction.
     */
    managedResourceGroupName?: pulumi.Input<string>;
    /**
     * Cluster pool network profile.
     */
    networkProfile?: pulumi.Input<types.inputs.hdinsight.v20230601preview.ClusterPoolResourcePropertiesNetworkProfileArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
