import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * NSX VM Group
 */
export function getWorkloadNetworkVMGroup(args: GetWorkloadNetworkVMGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkloadNetworkVMGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:avs/v20220501:getWorkloadNetworkVMGroup", {
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
     * NSX VM Group identifier. Generally the same as the VM Group's display name
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
     * Resource ID.
     */
    readonly id: string;
    /**
     * Virtual machine members of this group.
     */
    readonly members?: string[];
    /**
     * Resource name.
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
     * Resource type.
     */
    readonly type: string;
}
/**
 * NSX VM Group
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
     * NSX VM Group identifier. Generally the same as the VM Group's display name
     */
    vmGroupId: pulumi.Input<string>;
}