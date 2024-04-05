import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure for Operators 5G Core Cluster Service Resource
 */
export class ClusterService extends pulumi.CustomResource {
    /**
     * Get an existing ClusterService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ClusterService {
        return new ClusterService(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:mobilepacketcore/v20231015preview:ClusterService';

    /**
     * Returns true if the given object is an instance of ClusterService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ClusterService {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ClusterService.__pulumiType;
    }

    /**
     * Cluster type specific data.  Contents depend on the cluster type
     */
    public readonly clusterTypeSpecificData!: pulumi.Output<types.outputs.ClusterServiceAksClusterDataResponse | types.outputs.ClusterServiceNexusAksClusterDataResponse>;
    /**
     * Azure for Operators 5G Core Local PaaS component parameters.  One set per component type
     */
    public readonly componentParameters!: pulumi.Output<types.outputs.QualifiedComponentDeploymentParametersResponse[]>;
    /**
     * Cluster type (Lab or Production)
     */
    public readonly deploymentType!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Operational status
     */
    public /*out*/ readonly operationalStatus!: pulumi.Output<types.outputs.OperationalStatusResponse>;
    /**
     * The status of the last operation.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure for Operators 5G Core Release Version.  This is applied to all platform as a service (PaaS) components and running workloads in this cluster
     */
    public readonly releaseVersion!: pulumi.Output<string>;
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
     * Create a ClusterService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ClusterServiceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.clusterTypeSpecificData === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterTypeSpecificData'");
            }
            if ((!args || args.componentParameters === undefined) && !opts.urn) {
                throw new Error("Missing required property 'componentParameters'");
            }
            if ((!args || args.deploymentType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'deploymentType'");
            }
            if ((!args || args.releaseVersion === undefined) && !opts.urn) {
                throw new Error("Missing required property 'releaseVersion'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["clusterServiceName"] = args ? args.clusterServiceName : undefined;
            resourceInputs["clusterTypeSpecificData"] = args ? args.clusterTypeSpecificData : undefined;
            resourceInputs["componentParameters"] = args ? args.componentParameters : undefined;
            resourceInputs["deploymentType"] = args ? args.deploymentType : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["releaseVersion"] = args ? args.releaseVersion : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["operationalStatus"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["clusterTypeSpecificData"] = undefined /*out*/;
            resourceInputs["componentParameters"] = undefined /*out*/;
            resourceInputs["deploymentType"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["operationalStatus"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["releaseVersion"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:mobilepacketcore:ClusterService" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ClusterService.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ClusterService resource.
 */
export interface ClusterServiceArgs {
    /**
     * The name of the Cluster Service
     */
    clusterServiceName?: pulumi.Input<string>;
    /**
     * Cluster type specific data.  Contents depend on the cluster type
     */
    clusterTypeSpecificData: pulumi.Input<types.inputs.ClusterServiceAksClusterDataArgs | types.inputs.ClusterServiceNexusAksClusterDataArgs>;
    /**
     * Azure for Operators 5G Core Local PaaS component parameters.  One set per component type
     */
    componentParameters: pulumi.Input<pulumi.Input<types.inputs.QualifiedComponentDeploymentParametersArgs>[]>;
    /**
     * Cluster type (Lab or Production)
     */
    deploymentType: pulumi.Input<string | types.enums.SkuDeploymentType>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Azure for Operators 5G Core Release Version.  This is applied to all platform as a service (PaaS) components and running workloads in this cluster
     */
    releaseVersion: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}