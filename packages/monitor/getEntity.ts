import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Entity
 *
 * Uses Azure REST API version 2025-05-03-preview.
 */
export function getEntity(args: GetEntityArgs, opts?: pulumi.InvokeOptions): Promise<GetEntityResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:monitor:getEntity", {
        "azureMonitorWorkspaceName": args.azureMonitorWorkspaceName,
        "entityName": args.entityName,
        "healthModelName": args.healthModelName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetEntityArgs {
    /**
     * The name of the Azure Monitor Workspace. The name is case insensitive
     */
    azureMonitorWorkspaceName: string;
    /**
     * Name of the entity. Must be unique within a health model.
     */
    entityName: string;
    /**
     * Name of health model resource
     */
    healthModelName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * An entity (aka node) of a health model
 */
export interface GetEntityResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.EntityPropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a Entity
 *
 * Uses Azure REST API version 2025-05-03-preview.
 */
export function getEntityOutput(args: GetEntityOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetEntityResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:monitor:getEntity", {
        "azureMonitorWorkspaceName": args.azureMonitorWorkspaceName,
        "entityName": args.entityName,
        "healthModelName": args.healthModelName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetEntityOutputArgs {
    /**
     * The name of the Azure Monitor Workspace. The name is case insensitive
     */
    azureMonitorWorkspaceName: pulumi.Input<string>;
    /**
     * Name of the entity. Must be unique within a health model.
     */
    entityName: pulumi.Input<string>;
    /**
     * Name of health model resource
     */
    healthModelName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}