import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a data connector.
 */
export function getCodelessApiPollingDataConnector(args: GetCodelessApiPollingDataConnectorArgs, opts?: pulumi.InvokeOptions): Promise<GetCodelessApiPollingDataConnectorResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights/v20230601preview:getCodelessApiPollingDataConnector", {
        "dataConnectorId": args.dataConnectorId,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetCodelessApiPollingDataConnectorArgs {
    /**
     * Connector ID
     */
    dataConnectorId: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * Represents Codeless API Polling data connector.
 */
export interface GetCodelessApiPollingDataConnectorResult {
    /**
     * Config to describe the instructions blade
     */
    readonly connectorUiConfig?: types.outputs.CodelessUiConnectorConfigPropertiesResponse;
    /**
     * Etag of the azure resource
     */
    readonly etag?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The kind of the data connector
     * Expected value is 'APIPolling'.
     */
    readonly kind: "APIPolling";
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Config to describe the polling instructions
     */
    readonly pollingConfig?: types.outputs.CodelessConnectorPollingConfigPropertiesResponse;
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
 * Gets a data connector.
 */
export function getCodelessApiPollingDataConnectorOutput(args: GetCodelessApiPollingDataConnectorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCodelessApiPollingDataConnectorResult> {
    return pulumi.output(args).apply((a: any) => getCodelessApiPollingDataConnector(a, opts))
}

export interface GetCodelessApiPollingDataConnectorOutputArgs {
    /**
     * Connector ID
     */
    dataConnectorId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}
