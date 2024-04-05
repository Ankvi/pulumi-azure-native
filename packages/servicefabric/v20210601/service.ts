import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The service resource.
 */
export class Service extends pulumi.CustomResource {
    /**
     * Get an existing Service resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Service {
        return new Service(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:servicefabric/v20210601:Service';

    /**
     * Returns true if the given object is an instance of Service.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Service {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Service.__pulumiType;
    }

    /**
     * A list that describes the correlation of the service with other services.
     */
    public readonly correlationScheme!: pulumi.Output<types.outputs.ServiceCorrelationDescriptionResponse[] | undefined>;
    /**
     * Specifies the move cost for the service.
     */
    public readonly defaultMoveCost!: pulumi.Output<string | undefined>;
    /**
     * Azure resource etag.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * It will be deprecated in New API, resource location depends on the parent resource.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Azure resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Describes how the service is partitioned.
     */
    public readonly partitionDescription!: pulumi.Output<types.outputs.NamedPartitionSchemeDescriptionResponse | types.outputs.SingletonPartitionSchemeDescriptionResponse | types.outputs.UniformInt64RangePartitionSchemeDescriptionResponse | undefined>;
    /**
     * The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)".
     */
    public readonly placementConstraints!: pulumi.Output<string | undefined>;
    /**
     * The current deployment or provisioning state, which only appears in the response
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Dns name used for the service. If this is specified, then the service can be accessed via its DNS name instead of service name.
     */
    public readonly serviceDnsName!: pulumi.Output<string | undefined>;
    /**
     * The kind of service (Stateless or Stateful).
     */
    public readonly serviceKind!: pulumi.Output<string>;
    /**
     * The service load metrics is given as an array of ServiceLoadMetricDescription objects.
     */
    public readonly serviceLoadMetrics!: pulumi.Output<types.outputs.ServiceLoadMetricDescriptionResponse[] | undefined>;
    /**
     * The activation Mode of the service package
     */
    public readonly servicePackageActivationMode!: pulumi.Output<string | undefined>;
    /**
     * A list that describes the correlation of the service with other services.
     */
    public readonly servicePlacementPolicies!: pulumi.Output<types.outputs.ServicePlacementPolicyDescriptionResponse[] | undefined>;
    /**
     * The name of the service type
     */
    public readonly serviceTypeName!: pulumi.Output<string | undefined>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Azure resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Azure resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Service resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.applicationName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'applicationName'");
            }
            if ((!args || args.clusterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceKind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceKind'");
            }
            resourceInputs["applicationName"] = args ? args.applicationName : undefined;
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["correlationScheme"] = args ? args.correlationScheme : undefined;
            resourceInputs["defaultMoveCost"] = args ? args.defaultMoveCost : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["partitionDescription"] = args ? args.partitionDescription : undefined;
            resourceInputs["placementConstraints"] = args ? args.placementConstraints : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceDnsName"] = args ? args.serviceDnsName : undefined;
            resourceInputs["serviceKind"] = args ? args.serviceKind : undefined;
            resourceInputs["serviceLoadMetrics"] = args ? args.serviceLoadMetrics : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["servicePackageActivationMode"] = args ? args.servicePackageActivationMode : undefined;
            resourceInputs["servicePlacementPolicies"] = args ? args.servicePlacementPolicies : undefined;
            resourceInputs["serviceTypeName"] = args ? args.serviceTypeName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["correlationScheme"] = undefined /*out*/;
            resourceInputs["defaultMoveCost"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["partitionDescription"] = undefined /*out*/;
            resourceInputs["placementConstraints"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["serviceDnsName"] = undefined /*out*/;
            resourceInputs["serviceKind"] = undefined /*out*/;
            resourceInputs["serviceLoadMetrics"] = undefined /*out*/;
            resourceInputs["servicePackageActivationMode"] = undefined /*out*/;
            resourceInputs["servicePlacementPolicies"] = undefined /*out*/;
            resourceInputs["serviceTypeName"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:servicefabric/v20170701preview:Service" }, { type: "azure-native:servicefabric/v20190301:Service" }, { type: "azure-native:servicefabric/v20190301preview:Service" }, { type: "azure-native:servicefabric/v20190601preview:Service" }, { type: "azure-native:servicefabric/v20191101preview:Service" }, { type: "azure-native:servicefabric/v20200301:Service" }, { type: "azure-native:servicefabric/v20201201preview:Service" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Service.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Service resource.
 */
export interface ServiceArgs {
    /**
     * The name of the application resource.
     */
    applicationName: pulumi.Input<string>;
    /**
     * The name of the cluster resource.
     */
    clusterName: pulumi.Input<string>;
    /**
     * A list that describes the correlation of the service with other services.
     */
    correlationScheme?: pulumi.Input<pulumi.Input<types.inputs.ServiceCorrelationDescriptionArgs>[]>;
    /**
     * Specifies the move cost for the service.
     */
    defaultMoveCost?: pulumi.Input<string | types.enums.MoveCost>;
    /**
     * It will be deprecated in New API, resource location depends on the parent resource.
     */
    location?: pulumi.Input<string>;
    /**
     * Describes how the service is partitioned.
     */
    partitionDescription?: pulumi.Input<types.inputs.NamedPartitionSchemeDescriptionArgs | types.inputs.SingletonPartitionSchemeDescriptionArgs | types.inputs.UniformInt64RangePartitionSchemeDescriptionArgs>;
    /**
     * The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)".
     */
    placementConstraints?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Dns name used for the service. If this is specified, then the service can be accessed via its DNS name instead of service name.
     */
    serviceDnsName?: pulumi.Input<string>;
    /**
     * The kind of service (Stateless or Stateful).
     */
    serviceKind: pulumi.Input<string | types.enums.ServiceKind>;
    /**
     * The service load metrics is given as an array of ServiceLoadMetricDescription objects.
     */
    serviceLoadMetrics?: pulumi.Input<pulumi.Input<types.inputs.ServiceLoadMetricDescriptionArgs>[]>;
    /**
     * The name of the service resource in the format of {applicationName}~{serviceName}.
     */
    serviceName?: pulumi.Input<string>;
    /**
     * The activation Mode of the service package
     */
    servicePackageActivationMode?: pulumi.Input<string | types.enums.ArmServicePackageActivationMode>;
    /**
     * A list that describes the correlation of the service with other services.
     */
    servicePlacementPolicies?: pulumi.Input<pulumi.Input<types.inputs.ServicePlacementPolicyDescriptionArgs>[]>;
    /**
     * The name of the service type
     */
    serviceTypeName?: pulumi.Input<string>;
    /**
     * Azure resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}