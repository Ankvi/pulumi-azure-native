import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about the specified DDoS protection plan.
 */
export function getDdosProtectionPlan(args: GetDdosProtectionPlanArgs, opts?: pulumi.InvokeOptions): Promise<GetDdosProtectionPlanResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20220501:getDdosProtectionPlan", {
        "ddosProtectionPlanName": args.ddosProtectionPlanName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDdosProtectionPlanArgs {
    /**
     * The name of the DDoS protection plan.
     */
    ddosProtectionPlanName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * A DDoS protection plan in a resource group.
 */
export interface GetDdosProtectionPlanResult {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The provisioning state of the DDoS protection plan resource.
     */
    readonly provisioningState: string;
    /**
     * The list of public IPs associated with the DDoS protection plan resource. This list is read-only.
     */
    readonly publicIpAddresses: types.outputs.SubResourceResponse[];
    /**
     * The resource GUID property of the DDoS protection plan resource. It uniquely identifies the resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.
     */
    readonly resourceGuid: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * The list of virtual networks associated with the DDoS protection plan resource. This list is read-only.
     */
    readonly virtualNetworks: types.outputs.SubResourceResponse[];
}
/**
 * Gets information about the specified DDoS protection plan.
 */
export function getDdosProtectionPlanOutput(args: GetDdosProtectionPlanOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDdosProtectionPlanResult> {
    return pulumi.output(args).apply((a: any) => getDdosProtectionPlan(a, opts))
}

export interface GetDdosProtectionPlanOutputArgs {
    /**
     * The name of the DDoS protection plan.
     */
    ddosProtectionPlanName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
