import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a RegistryEndpointResource
 *
 * Uses Azure REST API version 2025-07-01-preview.
 */
export function getRegistryEndpoint(args: GetRegistryEndpointArgs, opts?: pulumi.InvokeOptions): Promise<GetRegistryEndpointResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:iotoperations:getRegistryEndpoint", {
        "instanceName": args.instanceName,
        "registryEndpointName": args.registryEndpointName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetRegistryEndpointArgs {
    /**
     * Name of instance.
     */
    instanceName: string;
    /**
     * Name of RegistryEndpoint resource
     */
    registryEndpointName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * RegistryEndpoint resource
 */
export interface GetRegistryEndpointResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Edge location of the resource.
     */
    readonly extendedLocation?: types.outputs.ExtendedLocationResponse;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.RegistryEndpointPropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a RegistryEndpointResource
 *
 * Uses Azure REST API version 2025-07-01-preview.
 */
export function getRegistryEndpointOutput(args: GetRegistryEndpointOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetRegistryEndpointResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:iotoperations:getRegistryEndpoint", {
        "instanceName": args.instanceName,
        "registryEndpointName": args.registryEndpointName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetRegistryEndpointOutputArgs {
    /**
     * Name of instance.
     */
    instanceName: pulumi.Input<string>;
    /**
     * Name of RegistryEndpoint resource
     */
    registryEndpointName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}