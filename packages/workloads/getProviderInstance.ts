import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets properties of a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 *
 * Uses Azure REST API version 2023-04-01.
 *
 * Other available API versions: 2023-10-01-preview, 2023-12-01-preview, 2024-02-01-preview.
 */
export function getProviderInstance(args: GetProviderInstanceArgs, opts?: pulumi.InvokeOptions): Promise<GetProviderInstanceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:workloads:getProviderInstance", {
        "monitorName": args.monitorName,
        "providerInstanceName": args.providerInstanceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetProviderInstanceArgs {
    /**
     * Name of the SAP monitor resource.
     */
    monitorName: string;
    /**
     * Name of the provider instance.
     */
    providerInstanceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A provider instance associated with SAP monitor.
 */
export interface GetProviderInstanceResult {
    /**
     * Defines the provider instance errors.
     */
    readonly errors: types.outputs.ProviderInstancePropertiesResponseErrors;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * [currently not in use] Managed service identity(user assigned identities)
     */
    readonly identity?: types.outputs.UserAssignedServiceIdentityResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Defines the provider specific properties.
     */
    readonly providerSettings?: types.outputs.DB2ProviderInstancePropertiesResponse | types.outputs.HanaDbProviderInstancePropertiesResponse | types.outputs.MsSqlServerProviderInstancePropertiesResponse | types.outputs.PrometheusHaClusterProviderInstancePropertiesResponse | types.outputs.PrometheusOSProviderInstancePropertiesResponse | types.outputs.SapNetWeaverProviderInstancePropertiesResponse;
    /**
     * State of provisioning of the provider instance
     */
    readonly provisioningState: string;
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
 * Gets properties of a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 *
 * Uses Azure REST API version 2023-04-01.
 *
 * Other available API versions: 2023-10-01-preview, 2023-12-01-preview, 2024-02-01-preview.
 */
export function getProviderInstanceOutput(args: GetProviderInstanceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetProviderInstanceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:workloads:getProviderInstance", {
        "monitorName": args.monitorName,
        "providerInstanceName": args.providerInstanceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetProviderInstanceOutputArgs {
    /**
     * Name of the SAP monitor resource.
     */
    monitorName: pulumi.Input<string>;
    /**
     * Name of the provider instance.
     */
    providerInstanceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}