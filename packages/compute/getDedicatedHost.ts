import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves information about a dedicated host.
 * Azure REST API version: 2023-03-01.
 *
 * Other available API versions: 2023-07-01, 2023-09-01, 2024-03-01, 2024-07-01.
 */
export function getDedicatedHost(args: GetDedicatedHostArgs, opts?: pulumi.InvokeOptions): Promise<GetDedicatedHostResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:compute:getDedicatedHost", {
        "expand": args.expand,
        "hostGroupName": args.hostGroupName,
        "hostName": args.hostName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDedicatedHostArgs {
    /**
     * The expand expression to apply on the operation. 'InstanceView' will retrieve the list of instance views of the dedicated host. 'UserData' is not supported for dedicated host.
     */
    expand?: string;
    /**
     * The name of the dedicated host group.
     */
    hostGroupName: string;
    /**
     * The name of the dedicated host.
     */
    hostName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Specifies information about the Dedicated host.
 */
export interface GetDedicatedHostResult {
    /**
     * Specifies whether the dedicated host should be replaced automatically in case of a failure. The value is defaulted to 'true' when not provided.
     */
    readonly autoReplaceOnFailure?: boolean;
    /**
     * A unique id generated and assigned to the dedicated host by the platform. Does not change throughout the lifetime of the host.
     */
    readonly hostId: string;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * The dedicated host instance view.
     */
    readonly instanceView: types.outputs.DedicatedHostInstanceViewResponse;
    /**
     * Specifies the software license type that will be applied to the VMs deployed on the dedicated host. Possible values are: **None,** **Windows_Server_Hybrid,** **Windows_Server_Perpetual.** The default value is: **None.**
     */
    readonly licenseType?: string;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Fault domain of the dedicated host within a dedicated host group.
     */
    readonly platformFaultDomain?: number;
    /**
     * The provisioning state, which only appears in the response.
     */
    readonly provisioningState: string;
    /**
     * The date when the host was first provisioned.
     */
    readonly provisioningTime: string;
    /**
     * SKU of the dedicated host for Hardware Generation and VM family. Only name is required to be set. List Microsoft.Compute SKUs for a list of possible values.
     */
    readonly sku: types.outputs.SkuResponse;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Specifies the time at which the Dedicated Host resource was created. Minimum api-version: 2021-11-01.
     */
    readonly timeCreated: string;
    /**
     * Resource type
     */
    readonly type: string;
    /**
     * A list of references to all virtual machines in the Dedicated Host.
     */
    readonly virtualMachines: types.outputs.SubResourceReadOnlyResponse[];
}
/**
 * Retrieves information about a dedicated host.
 * Azure REST API version: 2023-03-01.
 *
 * Other available API versions: 2023-07-01, 2023-09-01, 2024-03-01, 2024-07-01.
 */
export function getDedicatedHostOutput(args: GetDedicatedHostOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDedicatedHostResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:compute:getDedicatedHost", {
        "expand": args.expand,
        "hostGroupName": args.hostGroupName,
        "hostName": args.hostName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDedicatedHostOutputArgs {
    /**
     * The expand expression to apply on the operation. 'InstanceView' will retrieve the list of instance views of the dedicated host. 'UserData' is not supported for dedicated host.
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the dedicated host group.
     */
    hostGroupName: pulumi.Input<string>;
    /**
     * The name of the dedicated host.
     */
    hostName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}