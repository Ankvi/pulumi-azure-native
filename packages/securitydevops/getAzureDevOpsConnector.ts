import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure REST API version: 2022-09-01-preview.
 */
export function getAzureDevOpsConnector(args: GetAzureDevOpsConnectorArgs, opts?: pulumi.InvokeOptions): Promise<GetAzureDevOpsConnectorResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securitydevops:getAzureDevOpsConnector", {
        "azureDevOpsConnectorName": args.azureDevOpsConnectorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAzureDevOpsConnectorArgs {
    /**
     * Name of the AzureDevOps Connector.
     */
    azureDevOpsConnectorName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

export interface GetAzureDevOpsConnectorResult {
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
    readonly properties: types.outputs.AzureDevOpsConnectorPropertiesResponse;
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
 * Azure REST API version: 2022-09-01-preview.
 */
export function getAzureDevOpsConnectorOutput(args: GetAzureDevOpsConnectorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAzureDevOpsConnectorResult> {
    return pulumi.output(args).apply((a: any) => getAzureDevOpsConnector(a, opts))
}

export interface GetAzureDevOpsConnectorOutputArgs {
    /**
     * Name of the AzureDevOps Connector.
     */
    azureDevOpsConnectorName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}