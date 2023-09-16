import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get a Service Fabric service resource created or in the process of being created in the Service Fabric application resource.
 */
export function getService(args: GetServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetServiceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicefabric/v20210601:getService", {
        "applicationName": args.applicationName,
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetServiceArgs {
    /**
     * The name of the application resource.
     */
    applicationName: string;
    /**
     * The name of the cluster resource.
     */
    clusterName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the service resource in the format of {applicationName}~{serviceName}.
     */
    serviceName: string;
}

/**
 * The service resource.
 */
export interface GetServiceResult {
    /**
     * A list that describes the correlation of the service with other services.
     */
    readonly correlationScheme?: types.outputs.servicefabric.v20210601.ServiceCorrelationDescriptionResponse[];
    /**
     * Specifies the move cost for the service.
     */
    readonly defaultMoveCost?: string;
    /**
     * Azure resource etag.
     */
    readonly etag: string;
    /**
     * Azure resource identifier.
     */
    readonly id: string;
    /**
     * It will be deprecated in New API, resource location depends on the parent resource.
     */
    readonly location?: string;
    /**
     * Azure resource name.
     */
    readonly name: string;
    /**
     * Describes how the service is partitioned.
     */
    readonly partitionDescription?: types.outputs.servicefabric.v20210601.NamedPartitionSchemeDescriptionResponse | types.outputs.servicefabric.v20210601.SingletonPartitionSchemeDescriptionResponse | types.outputs.servicefabric.v20210601.UniformInt64RangePartitionSchemeDescriptionResponse;
    /**
     * The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)".
     */
    readonly placementConstraints?: string;
    /**
     * The current deployment or provisioning state, which only appears in the response
     */
    readonly provisioningState: string;
    /**
     * Dns name used for the service. If this is specified, then the service can be accessed via its DNS name instead of service name.
     */
    readonly serviceDnsName?: string;
    /**
     * The kind of service (Stateless or Stateful).
     */
    readonly serviceKind: string;
    /**
     * The service load metrics is given as an array of ServiceLoadMetricDescription objects.
     */
    readonly serviceLoadMetrics?: types.outputs.servicefabric.v20210601.ServiceLoadMetricDescriptionResponse[];
    /**
     * The activation Mode of the service package
     */
    readonly servicePackageActivationMode?: string;
    /**
     * A list that describes the correlation of the service with other services.
     */
    readonly servicePlacementPolicies?: types.outputs.servicefabric.v20210601.ServicePlacementPolicyDescriptionResponse[];
    /**
     * The name of the service type
     */
    readonly serviceTypeName?: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.servicefabric.v20210601.SystemDataResponse;
    /**
     * Azure resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Azure resource type.
     */
    readonly type: string;
}
/**
 * Get a Service Fabric service resource created or in the process of being created in the Service Fabric application resource.
 */
export function getServiceOutput(args: GetServiceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServiceResult> {
    return pulumi.output(args).apply((a: any) => getService(a, opts))
}

export interface GetServiceOutputArgs {
    /**
     * The name of the application resource.
     */
    applicationName: pulumi.Input<string>;
    /**
     * The name of the cluster resource.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the service resource in the format of {applicationName}~{serviceName}.
     */
    serviceName: pulumi.Input<string>;
}
