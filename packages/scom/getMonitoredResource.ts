import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieve the details of the monitored resource.
 *
 * Uses Azure REST API version 2023-07-07-preview.
 */
export function getMonitoredResource(args: GetMonitoredResourceArgs, opts?: pulumi.InvokeOptions): Promise<GetMonitoredResourceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:scom:getMonitoredResource", {
        "instanceName": args.instanceName,
        "monitoredResourceName": args.monitoredResourceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMonitoredResourceArgs {
    /**
     * Name of the SCOM managed instance.
     */
    instanceName: string;
    /**
     * The monitored resource name.
     */
    monitoredResourceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A monitored resource.
 */
export interface GetMonitoredResourceResult {
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
     * The properties of a monitored resource.
     */
    readonly properties: types.outputs.MonitoredResourcePropertiesResponse;
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
 * Retrieve the details of the monitored resource.
 *
 * Uses Azure REST API version 2023-07-07-preview.
 */
export function getMonitoredResourceOutput(args: GetMonitoredResourceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetMonitoredResourceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:scom:getMonitoredResource", {
        "instanceName": args.instanceName,
        "monitoredResourceName": args.monitoredResourceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMonitoredResourceOutputArgs {
    /**
     * Name of the SCOM managed instance.
     */
    instanceName: pulumi.Input<string>;
    /**
     * The monitored resource name.
     */
    monitoredResourceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}