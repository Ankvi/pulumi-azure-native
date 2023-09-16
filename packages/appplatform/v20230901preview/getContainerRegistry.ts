import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get the container registries resource.
 */
export function getContainerRegistry(args: GetContainerRegistryArgs, opts?: pulumi.InvokeOptions): Promise<GetContainerRegistryResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:appplatform/v20230901preview:getContainerRegistry", {
        "containerRegistryName": args.containerRegistryName,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetContainerRegistryArgs {
    /**
     * The name of the container registry.
     */
    containerRegistryName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * The name of the Service resource.
     */
    serviceName: string;
}

/**
 * Container registry resource payload.
 */
export interface GetContainerRegistryResult {
    /**
     * Fully qualified resource Id for the resource.
     */
    readonly id: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * Properties of the container registry resource payload.
     */
    readonly properties: types.outputs.appplatform.v20230901preview.ContainerRegistryPropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.appplatform.v20230901preview.SystemDataResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Get the container registries resource.
 */
export function getContainerRegistryOutput(args: GetContainerRegistryOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetContainerRegistryResult> {
    return pulumi.output(args).apply((a: any) => getContainerRegistry(a, opts))
}

export interface GetContainerRegistryOutputArgs {
    /**
     * The name of the container registry.
     */
    containerRegistryName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Service resource.
     */
    serviceName: pulumi.Input<string>;
}
