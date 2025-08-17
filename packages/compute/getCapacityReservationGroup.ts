import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The operation that retrieves information about a capacity reservation group.
 *
 * Uses Azure REST API version 2024-11-01.
 *
 * Other available API versions: 2022-08-01, 2022-11-01, 2023-03-01, 2023-07-01, 2023-09-01, 2024-03-01, 2024-07-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native compute [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getCapacityReservationGroup(args: GetCapacityReservationGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetCapacityReservationGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:compute:getCapacityReservationGroup", {
        "capacityReservationGroupName": args.capacityReservationGroupName,
        "expand": args.expand,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCapacityReservationGroupArgs {
    /**
     * The name of the capacity reservation group.
     */
    capacityReservationGroupName: string;
    /**
     * The expand expression to apply on the operation. 'InstanceView' will retrieve the list of instance views of the capacity reservations under the capacity reservation group which is a snapshot of the runtime properties of a capacity reservation that is managed by the platform and can change outside of control plane operations.
     */
    expand?: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Specifies information about the capacity reservation group that the capacity reservations should be assigned to. Currently, a capacity reservation can only be added to a capacity reservation group at creation time. An existing capacity reservation cannot be added or moved to another capacity reservation group.
 */
export interface GetCapacityReservationGroupResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * A list of all capacity reservation resource ids that belong to capacity reservation group.
     */
    readonly capacityReservations: types.outputs.SubResourceReadOnlyResponse[];
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The capacity reservation group instance view which has the list of instance views for all the capacity reservations that belong to the capacity reservation group.
     */
    readonly instanceView: types.outputs.CapacityReservationGroupInstanceViewResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Specifies the settings to enable sharing across subscriptions for the capacity reservation group resource. Pls. keep in mind the capacity reservation group resource generally can be shared across subscriptions belonging to a single azure AAD tenant or cross AAD tenant if there is a trust relationship established between the AAD tenants. **Note:** Minimum api-version: 2023-09-01. Please refer to https://aka.ms/computereservationsharing for more details.
     */
    readonly sharingProfile?: types.outputs.ResourceSharingProfileResponse;
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
     * A list of references to all virtual machines associated to the capacity reservation group.
     */
    readonly virtualMachinesAssociated: types.outputs.SubResourceReadOnlyResponse[];
    /**
     * The availability zones.
     */
    readonly zones?: string[];
}
/**
 * The operation that retrieves information about a capacity reservation group.
 *
 * Uses Azure REST API version 2024-11-01.
 *
 * Other available API versions: 2022-08-01, 2022-11-01, 2023-03-01, 2023-07-01, 2023-09-01, 2024-03-01, 2024-07-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native compute [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getCapacityReservationGroupOutput(args: GetCapacityReservationGroupOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetCapacityReservationGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:compute:getCapacityReservationGroup", {
        "capacityReservationGroupName": args.capacityReservationGroupName,
        "expand": args.expand,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCapacityReservationGroupOutputArgs {
    /**
     * The name of the capacity reservation group.
     */
    capacityReservationGroupName: pulumi.Input<string>;
    /**
     * The expand expression to apply on the operation. 'InstanceView' will retrieve the list of instance views of the capacity reservations under the capacity reservation group which is a snapshot of the runtime properties of a capacity reservation that is managed by the platform and can change outside of control plane operations.
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}