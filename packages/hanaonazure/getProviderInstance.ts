import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets properties of a provider instance for the specified subscription, resource group, SapMonitor name, and resource name.
 * Azure REST API version: 2020-02-07-preview.
 */
export function getProviderInstance(args: GetProviderInstanceArgs, opts?: pulumi.InvokeOptions): Promise<GetProviderInstanceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hanaonazure:getProviderInstance", {
        "providerInstanceName": args.providerInstanceName,
        "resourceGroupName": args.resourceGroupName,
        "sapMonitorName": args.sapMonitorName,
    }, opts);
}

export interface GetProviderInstanceArgs {
    /**
     * Name of the provider instance.
     */
    providerInstanceName: string;
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
 * A provider instance associated with a SAP monitor.
 */
export interface GetProviderInstanceResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * A JSON string containing metadata of the provider instance.
     */
    readonly metadata?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * A JSON string containing the properties of the provider instance.
     */
    readonly properties: string;
    /**
     * State of provisioning of the provider instance
     */
    readonly provisioningState: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets properties of a provider instance for the specified subscription, resource group, SapMonitor name, and resource name.
 * Azure REST API version: 2020-02-07-preview.
 */
export function getProviderInstanceOutput(args: GetProviderInstanceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetProviderInstanceResult> {
    return pulumi.output(args).apply((a: any) => getProviderInstance(a, opts))
}

export interface GetProviderInstanceOutputArgs {
    /**
     * Name of the provider instance.
     */
    providerInstanceName: pulumi.Input<string>;
    /**
     * Name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the SAP monitor resource.
     */
    sapMonitorName: pulumi.Input<string>;
}