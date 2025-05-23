import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a data connector definition.
 *
 * Uses Azure REST API version 2024-09-01.
 */
export function getCustomizableConnectorDefinition(args: GetCustomizableConnectorDefinitionArgs, opts?: pulumi.InvokeOptions): Promise<GetCustomizableConnectorDefinitionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights:getCustomizableConnectorDefinition", {
        "dataConnectorDefinitionName": args.dataConnectorDefinitionName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetCustomizableConnectorDefinitionArgs {
    /**
     * The data connector definition name.
     */
    dataConnectorDefinitionName: string;
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
 * Connector definition for kind 'Customizable'.
 */
export interface GetCustomizableConnectorDefinitionResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The UiConfig for 'Customizable' connector definition kind.
     */
    readonly connectionsConfig?: types.outputs.CustomizableConnectionsConfigResponse;
    /**
     * The UiConfig for 'Customizable' connector definition kind.
     */
    readonly connectorUiConfig: types.outputs.CustomizableConnectorUiConfigResponse;
    /**
     * Gets or sets the connector definition created date in UTC format.
     */
    readonly createdTimeUtc?: string;
    /**
     * Etag of the azure resource
     */
    readonly etag?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The kind of the data connector definitions
     * Expected value is 'Customizable'.
     */
    readonly kind: "Customizable";
    /**
     * Gets or sets the connector definition last modified date in UTC format.
     */
    readonly lastModifiedUtc?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
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
 * Gets a data connector definition.
 *
 * Uses Azure REST API version 2024-09-01.
 */
export function getCustomizableConnectorDefinitionOutput(args: GetCustomizableConnectorDefinitionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetCustomizableConnectorDefinitionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:securityinsights:getCustomizableConnectorDefinition", {
        "dataConnectorDefinitionName": args.dataConnectorDefinitionName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetCustomizableConnectorDefinitionOutputArgs {
    /**
     * The data connector definition name.
     */
    dataConnectorDefinitionName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}