import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an availability group listener.
 * Azure REST API version: 2022-02-01.
 *
 * Other available API versions: 2023-01-01-preview, 2023-10-01.
 */
export function getAvailabilityGroupListener(args: GetAvailabilityGroupListenerArgs, opts?: pulumi.InvokeOptions): Promise<GetAvailabilityGroupListenerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sqlvirtualmachine:getAvailabilityGroupListener", {
        "availabilityGroupListenerName": args.availabilityGroupListenerName,
        "expand": args.expand,
        "resourceGroupName": args.resourceGroupName,
        "sqlVirtualMachineGroupName": args.sqlVirtualMachineGroupName,
    }, opts);
}

export interface GetAvailabilityGroupListenerArgs {
    /**
     * Name of the availability group listener.
     */
    availabilityGroupListenerName: string;
    /**
     * The child resources to include in the response.
     */
    expand?: string;
    /**
     * Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * Name of the SQL virtual machine group.
     */
    sqlVirtualMachineGroupName: string;
}

/**
 * A SQL Server availability group listener.
 */
export interface GetAvailabilityGroupListenerResult {
    /**
     * Availability Group configuration.
     */
    readonly availabilityGroupConfiguration?: types.outputs.AgConfigurationResponse;
    /**
     * Name of the availability group.
     */
    readonly availabilityGroupName?: string;
    /**
     * Create a default availability group if it does not exist.
     */
    readonly createDefaultAvailabilityGroupIfNotExist?: boolean;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * List of load balancer configurations for an availability group listener.
     */
    readonly loadBalancerConfigurations?: types.outputs.LoadBalancerConfigurationResponse[];
    /**
     * List of multi subnet IP configurations for an AG listener.
     */
    readonly multiSubnetIpConfigurations?: types.outputs.MultiSubnetIpConfigurationResponse[];
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Listener port.
     */
    readonly port?: number;
    /**
     * Provisioning state to track the async operation status.
     */
    readonly provisioningState: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets an availability group listener.
 * Azure REST API version: 2022-02-01.
 *
 * Other available API versions: 2023-01-01-preview, 2023-10-01.
 */
export function getAvailabilityGroupListenerOutput(args: GetAvailabilityGroupListenerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAvailabilityGroupListenerResult> {
    return pulumi.output(args).apply((a: any) => getAvailabilityGroupListener(a, opts))
}

export interface GetAvailabilityGroupListenerOutputArgs {
    /**
     * Name of the availability group listener.
     */
    availabilityGroupListenerName: pulumi.Input<string>;
    /**
     * The child resources to include in the response.
     */
    expand?: pulumi.Input<string>;
    /**
     * Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the SQL virtual machine group.
     */
    sqlVirtualMachineGroupName: pulumi.Input<string>;
}