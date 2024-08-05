import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The configurations regarding multiple standard load balancers. If not supplied, single load balancer mode will be used. Multiple standard load balancers mode will be used if at lease one configuration is supplied. There has to be a configuration named `kubernetes`.
 * Azure REST API version: 2024-03-02-preview.
 *
 * Other available API versions: 2024-04-02-preview, 2024-05-02-preview.
 */
export class LoadBalancer extends pulumi.CustomResource {
    /**
     * Get an existing LoadBalancer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): LoadBalancer {
        return new LoadBalancer(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:containerservice:LoadBalancer';

    /**
     * Returns true if the given object is an instance of LoadBalancer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LoadBalancer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LoadBalancer.__pulumiType;
    }

    /**
     * Whether to automatically place services on the load balancer. If not supplied, the default value is true. If set to false manually, both of the external and the internal load balancer will not be selected for services unless they explicitly target it.
     */
    public readonly allowServicePlacement!: pulumi.Output<boolean | undefined>;
    /**
     * The name of the resource
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Nodes that match this selector will be possible members of this load balancer.
     */
    public readonly nodeSelector!: pulumi.Output<types.outputs.LabelSelectorResponse | undefined>;
    /**
     * Required field. A string value that must specify the ID of an existing agent pool. All nodes in the given pool will always be added to this load balancer. This agent pool must have at least one node and minCount>=1 for autoscaling operations. An agent pool can only be the primary pool for a single load balancer.
     */
    public readonly primaryAgentPoolName!: pulumi.Output<string>;
    /**
     * The current provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Only services that must match this selector can be placed on this load balancer.
     */
    public readonly serviceLabelSelector!: pulumi.Output<types.outputs.LabelSelectorResponse | undefined>;
    /**
     * Services created in namespaces that match the selector can be placed on this load balancer.
     */
    public readonly serviceNamespaceSelector!: pulumi.Output<types.outputs.LabelSelectorResponse | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a LoadBalancer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LoadBalancerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.primaryAgentPoolName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'primaryAgentPoolName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.resourceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceName'");
            }
            resourceInputs["allowServicePlacement"] = args ? args.allowServicePlacement : undefined;
            resourceInputs["loadBalancerName"] = args ? args.loadBalancerName : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nodeSelector"] = args ? args.nodeSelector : undefined;
            resourceInputs["primaryAgentPoolName"] = args ? args.primaryAgentPoolName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["serviceLabelSelector"] = args ? args.serviceLabelSelector : undefined;
            resourceInputs["serviceNamespaceSelector"] = args ? args.serviceNamespaceSelector : undefined;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["allowServicePlacement"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nodeSelector"] = undefined /*out*/;
            resourceInputs["primaryAgentPoolName"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["serviceLabelSelector"] = undefined /*out*/;
            resourceInputs["serviceNamespaceSelector"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:containerservice/v20240302preview:LoadBalancer" }, { type: "azure-native:containerservice/v20240402preview:LoadBalancer" }, { type: "azure-native:containerservice/v20240502preview:LoadBalancer" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(LoadBalancer.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a LoadBalancer resource.
 */
export interface LoadBalancerArgs {
    /**
     * Whether to automatically place services on the load balancer. If not supplied, the default value is true. If set to false manually, both of the external and the internal load balancer will not be selected for services unless they explicitly target it.
     */
    allowServicePlacement?: pulumi.Input<boolean>;
    /**
     * The name of the load balancer.
     */
    loadBalancerName?: pulumi.Input<string>;
    /**
     * Name of the public load balancer. There will be an internal load balancer created if needed, and the name will be `<name>-internal`. The internal lb shares the same configurations as the external one. The internal lbs are not needed to be included in LoadBalancer list. There must be a name of kubernetes in the list.
     */
    name: pulumi.Input<string>;
    /**
     * Nodes that match this selector will be possible members of this load balancer.
     */
    nodeSelector?: pulumi.Input<types.inputs.LabelSelectorArgs>;
    /**
     * Required field. A string value that must specify the ID of an existing agent pool. All nodes in the given pool will always be added to this load balancer. This agent pool must have at least one node and minCount>=1 for autoscaling operations. An agent pool can only be the primary pool for a single load balancer.
     */
    primaryAgentPoolName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the managed cluster resource.
     */
    resourceName: pulumi.Input<string>;
    /**
     * Only services that must match this selector can be placed on this load balancer.
     */
    serviceLabelSelector?: pulumi.Input<types.inputs.LabelSelectorArgs>;
    /**
     * Services created in namespaces that match the selector can be placed on this load balancer.
     */
    serviceNamespaceSelector?: pulumi.Input<types.inputs.LabelSelectorArgs>;
}