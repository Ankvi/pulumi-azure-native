import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the maintenance configuration of a ManagedEnvironment .
 *
 * Uses Azure REST API version 2024-10-02-preview.
 */
export function getMaintenanceConfiguration(args: GetMaintenanceConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetMaintenanceConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:app:getMaintenanceConfiguration", {
        "configName": args.configName,
        "environmentName": args.environmentName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMaintenanceConfigurationArgs {
    /**
     * The name of the maintenance configuration.
     */
    configName: string;
    /**
     * The name of the Managed Environment.
     */
    environmentName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Information about the Maintenance Configuration resource.
 */
export interface GetMaintenanceConfigurationResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * List of maintenance schedules for a managed environment.
     */
    readonly scheduledEntries: types.outputs.ScheduledEntryResponse[];
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
 * Gets the maintenance configuration of a ManagedEnvironment .
 *
 * Uses Azure REST API version 2024-10-02-preview.
 */
export function getMaintenanceConfigurationOutput(args: GetMaintenanceConfigurationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetMaintenanceConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:app:getMaintenanceConfiguration", {
        "configName": args.configName,
        "environmentName": args.environmentName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMaintenanceConfigurationOutputArgs {
    /**
     * The name of the maintenance configuration.
     */
    configName: pulumi.Input<string>;
    /**
     * The name of the Managed Environment.
     */
    environmentName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}