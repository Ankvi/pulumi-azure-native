import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a TrafficController
 * Azure REST API version: 2023-05-01-preview.
 *
 * Other available API versions: 2022-10-01-preview, 2023-11-01, 2024-05-01-preview, 2025-01-01.
 */
export function getTrafficControllerInterface(args: GetTrafficControllerInterfaceArgs, opts?: pulumi.InvokeOptions): Promise<GetTrafficControllerInterfaceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicenetworking:getTrafficControllerInterface", {
        "resourceGroupName": args.resourceGroupName,
        "trafficControllerName": args.trafficControllerName,
    }, opts);
}

export interface GetTrafficControllerInterfaceArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * traffic controller name for path
     */
    trafficControllerName: string;
}

/**
 * Concrete tracked resource types can be created by aliasing this type using a specific property type.
 */
export interface GetTrafficControllerInterfaceResult {
    /**
     * Associations References List
     */
    readonly associations: types.outputs.ResourceIdResponse[];
    /**
     * Configuration Endpoints.
     */
    readonly configurationEndpoints: string[];
    /**
     * Frontends References List
     */
    readonly frontends: types.outputs.ResourceIdResponse[];
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
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
     * The status of the last operation.
     */
    readonly provisioningState: string;
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
 * Get a TrafficController
 * Azure REST API version: 2023-05-01-preview.
 *
 * Other available API versions: 2022-10-01-preview, 2023-11-01, 2024-05-01-preview, 2025-01-01.
 */
export function getTrafficControllerInterfaceOutput(args: GetTrafficControllerInterfaceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetTrafficControllerInterfaceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:servicenetworking:getTrafficControllerInterface", {
        "resourceGroupName": args.resourceGroupName,
        "trafficControllerName": args.trafficControllerName,
    }, opts);
}

export interface GetTrafficControllerInterfaceOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * traffic controller name for path
     */
    trafficControllerName: pulumi.Input<string>;
}