import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure REST API version: 2023-08-01-preview.
 *
 * Other available API versions: 2024-01-01-preview.
 */
export function getCapacityReservationGroup(args: GetCapacityReservationGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetCapacityReservationGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices:getCapacityReservationGroup", {
        "groupId": args.groupId,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCapacityReservationGroupArgs {
    groupId: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

export interface GetCapacityReservationGroupResult {
    /**
     * [Required] Additional attributes of the entity.
     */
    readonly capacityReservationGroupProperties: types.outputs.CapacityReservationGroupResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Managed service identity (system assigned and/or user assigned identities)
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type.
     */
    readonly kind?: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Sku details required for ARM contract for Autoscaling.
     */
    readonly sku?: types.outputs.SkuResponse;
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
}
/**
 * Azure REST API version: 2023-08-01-preview.
 *
 * Other available API versions: 2024-01-01-preview.
 */
export function getCapacityReservationGroupOutput(args: GetCapacityReservationGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCapacityReservationGroupResult> {
    return pulumi.output(args).apply((a: any) => getCapacityReservationGroup(a, opts))
}

export interface GetCapacityReservationGroupOutputArgs {
    groupId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}