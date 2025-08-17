import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a AkriConnectorResource
 *
 * Uses Azure REST API version 2025-07-01-preview.
 */
export function getAkriConnector(args: GetAkriConnectorArgs, opts?: pulumi.InvokeOptions): Promise<GetAkriConnectorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:iotoperations:getAkriConnector", {
        "akriConnectorTemplateName": args.akriConnectorTemplateName,
        "connectorName": args.connectorName,
        "instanceName": args.instanceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAkriConnectorArgs {
    /**
     * Name of AkriConnectorTemplate resource.
     */
    akriConnectorTemplateName: string;
    /**
     * Name of AkriConnector resource.
     */
    connectorName: string;
    /**
     * Name of instance.
     */
    instanceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * AkriConnector resource.
 */
export interface GetAkriConnectorResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Edge location of the resource.
     */
    readonly extendedLocation?: types.outputs.ExtendedLocationResponse;
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
    readonly properties: types.outputs.AkriConnectorPropertiesResponse;
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
 * Get a AkriConnectorResource
 *
 * Uses Azure REST API version 2025-07-01-preview.
 */
export function getAkriConnectorOutput(args: GetAkriConnectorOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAkriConnectorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:iotoperations:getAkriConnector", {
        "akriConnectorTemplateName": args.akriConnectorTemplateName,
        "connectorName": args.connectorName,
        "instanceName": args.instanceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAkriConnectorOutputArgs {
    /**
     * Name of AkriConnectorTemplate resource.
     */
    akriConnectorTemplateName: pulumi.Input<string>;
    /**
     * Name of AkriConnector resource.
     */
    connectorName: pulumi.Input<string>;
    /**
     * Name of instance.
     */
    instanceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}