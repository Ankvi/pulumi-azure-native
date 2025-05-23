import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The operation that retrieves information about the capacity reservation.
 *
 * Uses Azure REST API version 2024-11-01.
 *
 * Other available API versions: 2022-08-01, 2022-11-01, 2023-03-01, 2023-07-01, 2023-09-01, 2024-03-01, 2024-07-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native compute [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getCapacityReservation(args: GetCapacityReservationArgs, opts?: pulumi.InvokeOptions): Promise<GetCapacityReservationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:compute:getCapacityReservation", {
        "capacityReservationGroupName": args.capacityReservationGroupName,
        "capacityReservationName": args.capacityReservationName,
        "expand": args.expand,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCapacityReservationArgs {
    /**
     * The name of the capacity reservation group.
     */
    capacityReservationGroupName: string;
    /**
     * The name of the capacity reservation.
     */
    capacityReservationName: string;
    /**
     * The expand expression to apply on the operation. 'InstanceView' retrieves a snapshot of the runtime properties of the capacity reservation that is managed by the platform and can change outside of control plane operations.
     */
    expand?: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Specifies information about the capacity reservation.
 */
export interface GetCapacityReservationResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * The Capacity reservation instance view.
     */
    readonly instanceView: types.outputs.CapacityReservationInstanceViewResponse;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Specifies the value of fault domain count that Capacity Reservation supports for requested VM size. **Note:** The fault domain count specified for a resource (like virtual machines scale set) must be less than or equal to this value if it deploys using capacity reservation. Minimum api-version: 2022-08-01.
     */
    readonly platformFaultDomainCount: number;
    /**
     * The provisioning state, which only appears in the response.
     */
    readonly provisioningState: string;
    /**
     * The date time when the capacity reservation was last updated.
     */
    readonly provisioningTime: string;
    /**
     * A unique id generated and assigned to the capacity reservation by the platform which does not change throughout the lifetime of the resource.
     */
    readonly reservationId: string;
    /**
     * SKU of the resource for which capacity needs be reserved. The SKU name and capacity is required to be set. Currently VM Skus with the capability called 'CapacityReservationSupported' set to true are supported. Refer to List Microsoft.Compute SKUs in a region (https://docs.microsoft.com/rest/api/compute/resourceskus/list) for supported values.
     */
    readonly sku: types.outputs.SkuResponse;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Specifies the time at which the Capacity Reservation resource was created. Minimum api-version: 2021-11-01.
     */
    readonly timeCreated: string;
    /**
     * Resource type
     */
    readonly type: string;
    /**
     * A list of all virtual machine resource ids that are associated with the capacity reservation.
     */
    readonly virtualMachinesAssociated: types.outputs.SubResourceReadOnlyResponse[];
    /**
     * Availability Zone to use for this capacity reservation. The zone has to be single value and also should be part for the list of zones specified during the capacity reservation group creation. The zone can be assigned only during creation. If not provided, the reservation supports only non-zonal deployments. If provided, enforces VM/VMSS using this capacity reservation to be in same zone.
     */
    readonly zones?: string[];
}
/**
 * The operation that retrieves information about the capacity reservation.
 *
 * Uses Azure REST API version 2024-11-01.
 *
 * Other available API versions: 2022-08-01, 2022-11-01, 2023-03-01, 2023-07-01, 2023-09-01, 2024-03-01, 2024-07-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native compute [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getCapacityReservationOutput(args: GetCapacityReservationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetCapacityReservationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:compute:getCapacityReservation", {
        "capacityReservationGroupName": args.capacityReservationGroupName,
        "capacityReservationName": args.capacityReservationName,
        "expand": args.expand,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCapacityReservationOutputArgs {
    /**
     * The name of the capacity reservation group.
     */
    capacityReservationGroupName: pulumi.Input<string>;
    /**
     * The name of the capacity reservation.
     */
    capacityReservationName: pulumi.Input<string>;
    /**
     * The expand expression to apply on the operation. 'InstanceView' retrieves a snapshot of the runtime properties of the capacity reservation that is managed by the platform and can change outside of control plane operations.
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}