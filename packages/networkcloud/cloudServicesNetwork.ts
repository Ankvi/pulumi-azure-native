import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Upon creation, the additional services that are provided by the platform will be allocated and
 * represented in the status of this resource. All resources associated with this cloud services network will be part
 * of the same layer 2 (L2) isolation domain. At least one service network must be created but may be reused across many
 * virtual machines and/or Hybrid AKS clusters.
 * Azure REST API version: 2023-10-01-preview. Prior API version in Azure Native 1.x: 2022-12-12-preview.
 *
 * Other available API versions: 2023-07-01, 2024-06-01-preview, 2024-07-01, 2024-10-01-preview.
 */
export class CloudServicesNetwork extends pulumi.CustomResource {
    /**
     * Get an existing CloudServicesNetwork resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CloudServicesNetwork {
        return new CloudServicesNetwork(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:networkcloud:CloudServicesNetwork';

    /**
     * Returns true if the given object is an instance of CloudServicesNetwork.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CloudServicesNetwork {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CloudServicesNetwork.__pulumiType;
    }

    /**
     * The list of egress endpoints. This allows for connection from a Hybrid AKS cluster to the specified endpoint.
     */
    public readonly additionalEgressEndpoints!: pulumi.Output<types.outputs.EgressEndpointResponse[] | undefined>;
    /**
     * The list of resource IDs for the other Microsoft.NetworkCloud resources that have attached this network.
     */
    public /*out*/ readonly associatedResourceIds!: pulumi.Output<string[]>;
    /**
     * The resource ID of the Network Cloud cluster this cloud services network is associated with.
     */
    public /*out*/ readonly clusterId!: pulumi.Output<string>;
    /**
     * The more detailed status of the cloud services network.
     */
    public /*out*/ readonly detailedStatus!: pulumi.Output<string>;
    /**
     * The descriptive message about the current detailed status.
     */
    public /*out*/ readonly detailedStatusMessage!: pulumi.Output<string>;
    /**
     * The indicator of whether the platform default endpoints are allowed for the egress traffic.
     */
    public readonly enableDefaultEgressEndpoints!: pulumi.Output<string | undefined>;
    /**
     * The full list of additional and default egress endpoints that are currently enabled.
     */
    public /*out*/ readonly enabledEgressEndpoints!: pulumi.Output<types.outputs.EgressEndpointResponse[]>;
    /**
     * The extended location of the cluster associated with the resource.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse>;
    /**
     * Field Deprecated. These fields will be empty/omitted. The list of Hybrid AKS cluster resource IDs that are associated with this cloud services network.
     */
    public /*out*/ readonly hybridAksClustersAssociatedIds!: pulumi.Output<string[]>;
    /**
     * The name of the interface that will be present in the virtual machine to represent this network.
     */
    public /*out*/ readonly interfaceName!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the cloud services network.
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
     * Field Deprecated. These fields will be empty/omitted. The list of virtual machine resource IDs, excluding any Hybrid AKS virtual machines, that are currently using this cloud services network.
     */
    public /*out*/ readonly virtualMachinesAssociatedIds!: pulumi.Output<string[]>;

    /**
     * Create a CloudServicesNetwork resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CloudServicesNetworkArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.extendedLocation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'extendedLocation'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["additionalEgressEndpoints"] = args ? args.additionalEgressEndpoints : undefined;
            resourceInputs["cloudServicesNetworkName"] = args ? args.cloudServicesNetworkName : undefined;
            resourceInputs["enableDefaultEgressEndpoints"] = (args ? args.enableDefaultEgressEndpoints : undefined) ?? "True";
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["associatedResourceIds"] = undefined /*out*/;
            resourceInputs["clusterId"] = undefined /*out*/;
            resourceInputs["detailedStatus"] = undefined /*out*/;
            resourceInputs["detailedStatusMessage"] = undefined /*out*/;
            resourceInputs["enabledEgressEndpoints"] = undefined /*out*/;
            resourceInputs["hybridAksClustersAssociatedIds"] = undefined /*out*/;
            resourceInputs["interfaceName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualMachinesAssociatedIds"] = undefined /*out*/;
        } else {
            resourceInputs["additionalEgressEndpoints"] = undefined /*out*/;
            resourceInputs["associatedResourceIds"] = undefined /*out*/;
            resourceInputs["clusterId"] = undefined /*out*/;
            resourceInputs["detailedStatus"] = undefined /*out*/;
            resourceInputs["detailedStatusMessage"] = undefined /*out*/;
            resourceInputs["enableDefaultEgressEndpoints"] = undefined /*out*/;
            resourceInputs["enabledEgressEndpoints"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["hybridAksClustersAssociatedIds"] = undefined /*out*/;
            resourceInputs["interfaceName"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualMachinesAssociatedIds"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:networkcloud/v20230701:CloudServicesNetwork" }, { type: "azure-native:networkcloud/v20231001preview:CloudServicesNetwork" }, { type: "azure-native:networkcloud/v20240601preview:CloudServicesNetwork" }, { type: "azure-native:networkcloud/v20240701:CloudServicesNetwork" }, { type: "azure-native:networkcloud/v20241001preview:CloudServicesNetwork" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(CloudServicesNetwork.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a CloudServicesNetwork resource.
 */
export interface CloudServicesNetworkArgs {
    /**
     * The list of egress endpoints. This allows for connection from a Hybrid AKS cluster to the specified endpoint.
     */
    additionalEgressEndpoints?: pulumi.Input<pulumi.Input<types.inputs.EgressEndpointArgs>[]>;
    /**
     * The name of the cloud services network.
     */
    cloudServicesNetworkName?: pulumi.Input<string>;
    /**
     * The indicator of whether the platform default endpoints are allowed for the egress traffic.
     */
    enableDefaultEgressEndpoints?: pulumi.Input<string | types.enums.CloudServicesNetworkEnableDefaultEgressEndpoints>;
    /**
     * The extended location of the cluster associated with the resource.
     */
    extendedLocation: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}