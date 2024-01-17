import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Service Fabric service resource created or in the process of being created in the Service Fabric managed application resource.
 * Azure REST API version: 2023-03-01-preview.
 *
 * Other available API versions: 2023-07-01-preview, 2023-09-01-preview, 2023-11-01-preview, 2023-12-01-preview.
 */
export function getManagedClusterService(args: GetManagedClusterServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetManagedClusterServiceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicefabric:getManagedClusterService", {
        "applicationName": args.applicationName,
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetManagedClusterServiceArgs {
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
export interface GetManagedClusterServiceResult {
    /**
     * Azure resource identifier.
     */
    readonly id: string;
    /**
     * Resource location depends on the parent resource.
     */
    readonly location?: string;
    /**
     * Azure resource name.
     */
    readonly name: string;
    /**
     * The service resource properties.
     */
    readonly properties: types.outputs.StatefulServicePropertiesResponse | types.outputs.StatelessServicePropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
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
 * Get a Service Fabric service resource created or in the process of being created in the Service Fabric managed application resource.
 * Azure REST API version: 2023-03-01-preview.
 *
 * Other available API versions: 2023-07-01-preview, 2023-09-01-preview, 2023-11-01-preview, 2023-12-01-preview.
 */
export function getManagedClusterServiceOutput(args: GetManagedClusterServiceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagedClusterServiceResult> {
    return pulumi.output(args).apply((a: any) => getManagedClusterService(a, opts))
}

export interface GetManagedClusterServiceOutputArgs {
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
