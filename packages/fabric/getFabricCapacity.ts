import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a FabricCapacity
 *
 * Uses Azure REST API version 2023-11-01.
 *
 * Other available API versions: 2025-01-15-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native fabric [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getFabricCapacity(args: GetFabricCapacityArgs, opts?: pulumi.InvokeOptions): Promise<GetFabricCapacityResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:fabric:getFabricCapacity", {
        "capacityName": args.capacityName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFabricCapacityArgs {
    /**
     * The name of the Microsoft Fabric capacity. It must be a minimum of 3 characters, and a maximum of 63.
     */
    capacityName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Fabric Capacity resource
 */
export interface GetFabricCapacityResult {
    /**
     * The capacity administration
     */
    readonly administration: types.outputs.CapacityAdministrationResponse;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The current deployment state of Microsoft Fabric resource. The provisioningState is to indicate states for resource provisioning.
     */
    readonly provisioningState: string;
    /**
     * The SKU details
     */
    readonly sku: types.outputs.RpSkuResponse;
    /**
     * The current state of Microsoft Fabric resource. The state is to indicate more states outside of resource provisioning.
     */
    readonly state: string;
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
 * Get a FabricCapacity
 *
 * Uses Azure REST API version 2023-11-01.
 *
 * Other available API versions: 2025-01-15-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native fabric [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getFabricCapacityOutput(args: GetFabricCapacityOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetFabricCapacityResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:fabric:getFabricCapacity", {
        "capacityName": args.capacityName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFabricCapacityOutputArgs {
    /**
     * The name of the Microsoft Fabric capacity. It must be a minimum of 3 characters, and a maximum of 63.
     */
    capacityName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}