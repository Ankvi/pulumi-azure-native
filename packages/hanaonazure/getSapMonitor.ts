import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets properties of a SAP monitor for the specified subscription, resource group, and resource name.
 * Azure REST API version: 2020-02-07-preview.
 */
export function getSapMonitor(args: GetSapMonitorArgs, opts?: pulumi.InvokeOptions): Promise<GetSapMonitorResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hanaonazure:getSapMonitor", {
        "resourceGroupName": args.resourceGroupName,
        "sapMonitorName": args.sapMonitorName,
    }, opts);
}

export interface GetSapMonitorArgs {
    /**
     * Name of the resource group.
     */
    resourceGroupName: string;
    /**
     * Name of the SAP monitor resource.
     */
    sapMonitorName: string;
}

/**
 * SAP monitor info on Azure (ARM properties and SAP monitor properties)
 */
export interface GetSapMonitorResult {
    /**
     * The value indicating whether to send analytics to Microsoft
     */
    readonly enableCustomerAnalytics?: boolean;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The ARM ID of the Log Analytics Workspace that is used for monitoring
     */
    readonly logAnalyticsWorkspaceArmId?: string;
    /**
     * The workspace ID of the log analytics workspace to be used for monitoring
     */
    readonly logAnalyticsWorkspaceId?: string;
    /**
     * The shared key of the log analytics workspace that is used for monitoring
     */
    readonly logAnalyticsWorkspaceSharedKey?: string;
    /**
     * The name of the resource group the SAP Monitor resources get deployed into.
     */
    readonly managedResourceGroupName: string;
    /**
     * The subnet which the SAP monitor will be deployed in
     */
    readonly monitorSubnet?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * State of provisioning of the HanaInstance
     */
    readonly provisioningState: string;
    /**
     * The version of the payload running in the Collector VM
     */
    readonly sapMonitorCollectorVersion: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets properties of a SAP monitor for the specified subscription, resource group, and resource name.
 * Azure REST API version: 2020-02-07-preview.
 */
export function getSapMonitorOutput(args: GetSapMonitorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSapMonitorResult> {
    return pulumi.output(args).apply((a: any) => getSapMonitor(a, opts))
}

export interface GetSapMonitorOutputArgs {
    /**
     * Name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the SAP monitor resource.
     */
    sapMonitorName: pulumi.Input<string>;
}