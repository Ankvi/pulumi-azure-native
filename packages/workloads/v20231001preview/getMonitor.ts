import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets properties of a SAP monitor for the specified subscription, resource group, and resource name.
 */
export function getMonitor(args: GetMonitorArgs, opts?: pulumi.InvokeOptions): Promise<GetMonitorResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:workloads/v20231001preview:getMonitor", {
        "monitorName": args.monitorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMonitorArgs {
    /**
     * Name of the SAP monitor resource.
     */
    monitorName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * SAP monitor info on Azure (ARM properties and SAP monitor properties)
 */
export interface GetMonitorResult {
    /**
     * The SAP monitor resources will be deployed in the SAP monitoring region. The subnet region should be same as the SAP monitoring region.
     */
    readonly appLocation?: string;
    /**
     * Defines the SAP monitor errors.
     */
    readonly errors: types.outputs.MonitorPropertiesResponseErrors;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The Managed service identity.
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The ARM ID of the Log Analytics Workspace that is used for SAP monitoring.
     */
    readonly logAnalyticsWorkspaceArmId?: string;
    /**
     * Managed resource group configuration
     */
    readonly managedResourceGroupConfiguration?: types.outputs.ManagedRGConfigurationResponse;
    /**
     * The subnet which the SAP monitor will be deployed in
     */
    readonly monitorSubnet?: string;
    /**
     * The ARM ID of the MSI used for SAP monitoring.
     */
    readonly msiArmId: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * State of provisioning of the SAP monitor.
     */
    readonly provisioningState: string;
    /**
     * Sets the routing preference of the SAP monitor. By default only RFC1918 traffic is routed to the customer VNET.
     */
    readonly routingPreference?: string;
    /**
     * The ARM ID of the Storage account used for SAP monitoring.
     */
    readonly storageAccountArmId: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Sets the preference for zone redundancy on resources created for the SAP monitor. By default resources will be created which do not support zone redundancy.
     */
    readonly zoneRedundancyPreference?: string;
}
/**
 * Gets properties of a SAP monitor for the specified subscription, resource group, and resource name.
 */
export function getMonitorOutput(args: GetMonitorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMonitorResult> {
    return pulumi.output(args).apply((a: any) => getMonitor(a, opts))
}

export interface GetMonitorOutputArgs {
    /**
     * Name of the SAP monitor resource.
     */
    monitorName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}