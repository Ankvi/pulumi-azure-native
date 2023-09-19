import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the Service Registry and its properties.
 */
export function getServiceRegistry(args: GetServiceRegistryArgs, opts?: pulumi.InvokeOptions): Promise<GetServiceRegistryResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appplatform/v20230901preview:getServiceRegistry", {
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
