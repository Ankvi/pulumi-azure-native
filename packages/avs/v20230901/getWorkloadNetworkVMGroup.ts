import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a WorkloadNetworkVMGroup
 */
export function getWorkloadNetworkVMGroup(args: GetWorkloadNetworkVMGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkloadNetworkVMGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:avs/v20230901:getWorkloadNetworkVMGroup", {
        "privateCloudName": args.privateCloudName,
        "resourceGroupName": args.resourceGroupName,
        "vmGroupId": args.vmGroupId,
    }, opts);
}

export interface GetWorkloadNetworkVMGroupArgs {
    /**
     * Name of the private cloud
     */
    privateCloudName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * ID of the VM group.
     */
    vmGroupId: string;
}

/**
 * NSX VM Group
 */
export interface GetWorkloadNetworkVMGroupResult {
    /**
     * Display name of the VM group.
     */
    readonly displayName?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Virtual machine members of this group.
     */
    readonly members?: string[];
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state
     */
    readonly provisioningState: string;
    /**
     * NSX revision number.
     */
    readonly revision?: number;
    /**
     * VM Group status.
     */
    readonly status: string;
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
 * Get a WorkloadNetworkVMGroup
 */
export function getWorkloadNetworkVMGroupOutput(args: GetWorkloadNetworkVMGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWorkloadNetworkVMGroupResult> {
    return pulumi.output(args).apply((a: any) => getWorkloadNetworkVMGroup(a, opts))
}

export interface GetWorkloadNetworkVMGroupOutputArgs {
    /**
     * Name of the private cloud
     */
    privateCloudName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * ID of the VM group.
     */
    vmGroupId: pulumi.Input<string>;
}