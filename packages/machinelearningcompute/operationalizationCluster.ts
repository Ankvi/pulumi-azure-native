import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Instance of an Azure ML Operationalization Cluster resource.
 * Azure REST API version: 2017-08-01-preview. Prior API version in Azure Native 1.x: 2017-08-01-preview.
 *
 * Other available API versions: 2017-06-01-preview.
 */
export class OperationalizationCluster extends pulumi.CustomResource {
    /**
     * Get an existing OperationalizationCluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): OperationalizationCluster {
        return new OperationalizationCluster(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:machinelearningcompute:OperationalizationCluster';

    /**
     * Returns true if the given object is an instance of OperationalizationCluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OperationalizationCluster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OperationalizationCluster.__pulumiType;
    }

    /**
     * AppInsights configuration.
     */
    public readonly appInsights!: pulumi.Output<types.outputs.AppInsightsPropertiesResponse | undefined>;
    /**
     * The cluster type.
     */
    public readonly clusterType!: pulumi.Output<string>;
    /**
     * Container Registry properties.
     */
    public readonly containerRegistry!: pulumi.Output<types.outputs.ContainerRegistryPropertiesResponse | undefined>;
    /**
     * Parameters for the Azure Container Service cluster.
     */
    public readonly containerService!: pulumi.Output<types.outputs.AcsClusterPropertiesResponse | undefined>;
    /**
     * The date and time when the cluster was created.
     */
    public /*out*/ readonly createdOn!: pulumi.Output<string>;
    /**
     * The description of the cluster.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Contains global configuration for the web services in the cluster.
     */
    public readonly globalServiceConfiguration!: pulumi.Output<types.outputs.GlobalServiceConfigurationResponse | undefined>;
    /**
     * Specifies the location of the resource.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The date and time when the cluster was last modified.
     */
    public /*out*/ readonly modifiedOn!: pulumi.Output<string>;
    /**
     * Specifies the name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * List of provisioning errors reported by the resource provider.
     */
    public /*out*/ readonly provisioningErrors!: pulumi.Output<types.outputs.ErrorResponseWrapperResponse[]>;
    /**
     * The provision state of the cluster. Valid values are Unknown, Updating, Provisioning, Succeeded, and Failed.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Storage Account properties.
     */
    public readonly storageAccount!: pulumi.Output<types.outputs.StorageAccountPropertiesResponse | undefined>;
    /**
     * Contains resource tags defined as key/value pairs.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Specifies the type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a OperationalizationCluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OperationalizationClusterArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.clusterType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterType'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["appInsights"] = args ? args.appInsights : undefined;
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["clusterType"] = args ? args.clusterType : undefined;
            resourceInputs["containerRegistry"] = args ? args.containerRegistry : undefined;
            resourceInputs["containerService"] = args ? (args.containerService ? pulumi.output(args.containerService).apply(types.inputs.acsClusterPropertiesArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["globalServiceConfiguration"] = args ? (args.globalServiceConfiguration ? pulumi.output(args.globalServiceConfiguration).apply(types.inputs.globalServiceConfigurationArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["storageAccount"] = args ? args.storageAccount : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["createdOn"] = undefined /*out*/;
            resourceInputs["modifiedOn"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningErrors"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["appInsights"] = undefined /*out*/;
            resourceInputs["clusterType"] = undefined /*out*/;
            resourceInputs["containerRegistry"] = undefined /*out*/;
            resourceInputs["containerService"] = undefined /*out*/;
            resourceInputs["createdOn"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["globalServiceConfiguration"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["modifiedOn"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningErrors"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["storageAccount"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:machinelearningcompute/v20170601preview:OperationalizationCluster" }, { type: "azure-native:machinelearningcompute/v20170801preview:OperationalizationCluster" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(OperationalizationCluster.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a OperationalizationCluster resource.
 */
export interface OperationalizationClusterArgs {
    /**
     * AppInsights configuration.
     */
    appInsights?: pulumi.Input<types.inputs.AppInsightsPropertiesArgs>;
    /**
     * The name of the cluster.
     */
    clusterName?: pulumi.Input<string>;
    /**
     * The cluster type.
     */
    clusterType: pulumi.Input<string | types.enums.ClusterType>;
    /**
     * Container Registry properties.
     */
    containerRegistry?: pulumi.Input<types.inputs.ContainerRegistryPropertiesArgs>;
    /**
     * Parameters for the Azure Container Service cluster.
     */
    containerService?: pulumi.Input<types.inputs.AcsClusterPropertiesArgs>;
    /**
     * The description of the cluster.
     */
    description?: pulumi.Input<string>;
    /**
     * Contains global configuration for the web services in the cluster.
     */
    globalServiceConfiguration?: pulumi.Input<types.inputs.GlobalServiceConfigurationArgs>;
    /**
     * Specifies the location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * Name of the resource group in which the cluster is located.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Storage Account properties.
     */
    storageAccount?: pulumi.Input<types.inputs.StorageAccountPropertiesArgs>;
    /**
     * Contains resource tags defined as key/value pairs.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}