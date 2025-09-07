import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a WorkloadResource
 *
 * Uses Azure REST API version 2025-05-01-preview.
 *
 * Other available API versions: 2024-06-01-preview, 2024-12-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native mission [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getWorkload(args: GetWorkloadArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkloadResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:mission:getWorkload", {
        "resourceGroupName": args.resourceGroupName,
        "virtualEnclaveName": args.virtualEnclaveName,
        "workloadName": args.workloadName,
    }, opts);
}

export interface GetWorkloadArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the enclaveResource Resource
     */
    virtualEnclaveName: string;
    /**
     * The name of the workloadResource Resource
     */
    workloadName: string;
}

/**
 * Workload Model Resource
 */
export interface GetWorkloadResult {
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
     * Managed On Behalf Of Configuration.
     */
    readonly managedOnBehalfOfConfiguration: types.outputs.ManagedOnBehalfOfConfigurationResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Provisioning State.
     */
    readonly provisioningState: string;
    /**
     * List of resource group ids.
     */
    readonly resourceGroupCollection?: string[];
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
 * Get a WorkloadResource
 *
 * Uses Azure REST API version 2025-05-01-preview.
 *
 * Other available API versions: 2024-06-01-preview, 2024-12-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native mission [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getWorkloadOutput(args: GetWorkloadOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetWorkloadResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:mission:getWorkload", {
        "resourceGroupName": args.resourceGroupName,
        "virtualEnclaveName": args.virtualEnclaveName,
        "workloadName": args.workloadName,
    }, opts);
}

export interface GetWorkloadOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the enclaveResource Resource
     */
    virtualEnclaveName: pulumi.Input<string>;
    /**
     * The name of the workloadResource Resource
     */
    workloadName: pulumi.Input<string>;
}