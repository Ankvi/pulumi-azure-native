import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the Service Registry and its properties.
 * Azure REST API version: 2023-05-01-preview.
 *
 * Other available API versions: 2023-07-01-preview, 2023-09-01-preview, 2023-11-01-preview, 2023-12-01, 2024-01-01-preview, 2024-05-01-preview.
 */
export function getServiceRegistry(args: GetServiceRegistryArgs, opts?: pulumi.InvokeOptions): Promise<GetServiceRegistryResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appplatform:getServiceRegistry", {
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
        "serviceRegistryName": args.serviceRegistryName,
    }, opts);
}

export interface GetServiceRegistryArgs {
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * The name of the Service resource.
     */
    serviceName: string;
    /**
     * The name of Service Registry.
     */
    serviceRegistryName: string;
}

/**
 * Service Registry resource
 */
export interface GetServiceRegistryResult {
    /**
     * Fully qualified resource Id for the resource.
     */
    readonly id: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * Service Registry properties payload
     */
    readonly properties: types.outputs.ServiceRegistryPropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Get the Service Registry and its properties.
 * Azure REST API version: 2023-05-01-preview.
 *
 * Other available API versions: 2023-07-01-preview, 2023-09-01-preview, 2023-11-01-preview, 2023-12-01, 2024-01-01-preview, 2024-05-01-preview.
 */
export function getServiceRegistryOutput(args: GetServiceRegistryOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServiceRegistryResult> {
    return pulumi.output(args).apply((a: any) => getServiceRegistry(a, opts))
}

export interface GetServiceRegistryOutputArgs {
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Service resource.
     */
    serviceName: pulumi.Input<string>;
    /**
     * The name of Service Registry.
     */
    serviceRegistryName: pulumi.Input<string>;
}