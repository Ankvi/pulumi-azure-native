import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about the specified DDoS protection plan.
 *
 * Uses Azure REST API version 2023-02-01.
 *
 * Other available API versions: 2022-05-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-05-01.
 */
export function getDdosProtectionPlan(args: GetDdosProtectionPlanArgs, opts?: pulumi.InvokeOptions): Promise<GetDdosProtectionPlanResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getDdosProtectionPlan", {
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
    readonly publicIPAddresses: types.outputs.SubResourceResponse[];
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
 *
 * Uses Azure REST API version 2023-02-01.
 *
 * Other available API versions: 2022-05-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-05-01.
 */
export function getDdosProtectionPlanOutput(args: GetDdosProtectionPlanOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDdosProtectionPlanResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getDdosProtectionPlan", {
        "ddosProtectionPlanName": args.ddosProtectionPlanName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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