import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the details about the service to the resource.
 *
 * Uses Azure REST API version 2023-03-15.
 *
 * Other available API versions: 2024-12-01.
 */
export function getServiceConfiguration(args: GetServiceConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetServiceConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridconnectivity:getServiceConfiguration", {
        "endpointName": args.endpointName,
        "resourceUri": args.resourceUri,
        "serviceConfigurationName": args.serviceConfigurationName,
    }, opts);
}

export interface GetServiceConfigurationArgs {
    /**
     * The endpoint name.
     */
    endpointName: string;
    /**
     * The fully qualified Azure Resource manager identifier of the resource to be connected.
     */
    resourceUri: string;
    /**
     * The service name.
     */
    serviceConfigurationName: string;
}

/**
 * The service configuration details associated with the target resource.
 */
export interface GetServiceConfigurationResult {
    /**
     * The timestamp of resource creation (UTC).
     */
    readonly createdAt?: string;
    /**
     * The identity that created the resource.
     */
    readonly createdBy?: string;
    /**
     * The type of identity that created the resource.
     */
    readonly createdByType?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The timestamp of resource last modification (UTC)
     */
    readonly lastModifiedAt?: string;
    /**
     * The identity that last modified the resource.
     */
    readonly lastModifiedBy?: string;
    /**
     * The type of identity that last modified the resource.
     */
    readonly lastModifiedByType?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The port on which service is enabled.
     */
    readonly port?: number;
    /**
     * The resource provisioning state.
     */
    readonly provisioningState: string;
    /**
     * The resource Id of the connectivity endpoint (optional).
     */
    readonly resourceId?: string;
    /**
     * Name of the service.
     */
    readonly serviceName: string;
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
 * Gets the details about the service to the resource.
 *
 * Uses Azure REST API version 2023-03-15.
 *
 * Other available API versions: 2024-12-01.
 */
export function getServiceConfigurationOutput(args: GetServiceConfigurationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetServiceConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:hybridconnectivity:getServiceConfiguration", {
        "endpointName": args.endpointName,
        "resourceUri": args.resourceUri,
        "serviceConfigurationName": args.serviceConfigurationName,
    }, opts);
}

export interface GetServiceConfigurationOutputArgs {
    /**
     * The endpoint name.
     */
    endpointName: pulumi.Input<string>;
    /**
     * The fully qualified Azure Resource manager identifier of the resource to be connected.
     */
    resourceUri: pulumi.Input<string>;
    /**
     * The service name.
     */
    serviceConfigurationName: pulumi.Input<string>;
}