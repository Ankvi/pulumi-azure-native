import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the details of the serviceGroup
 *
 * Uses Azure REST API version 2024-02-01-preview.
 */
export function getServiceGroup(args: GetServiceGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetServiceGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:management:getServiceGroup", {
        "serviceGroupName": args.serviceGroupName,
    }, opts);
}

export interface GetServiceGroupArgs {
    /**
     * ServiceGroup Name.
     */
    serviceGroupName: string;
}

/**
 * The serviceGroup details.
 */
export interface GetServiceGroupResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The kind of the serviceGroup.
     */
    readonly kind?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * ServiceGroup creation request body parameters.
     */
    readonly properties: types.outputs.ServiceGroupPropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The serviceGroup tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get the details of the serviceGroup
 *
 * Uses Azure REST API version 2024-02-01-preview.
 */
export function getServiceGroupOutput(args: GetServiceGroupOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetServiceGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:management:getServiceGroup", {
        "serviceGroupName": args.serviceGroupName,
    }, opts);
}

export interface GetServiceGroupOutputArgs {
    /**
     * ServiceGroup Name.
     */
    serviceGroupName: pulumi.Input<string>;
}