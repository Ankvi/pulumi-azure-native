import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a data connector.
 */
export function getMicrosoftPurviewInformationProtectionDataConnector(args: GetMicrosoftPurviewInformationProtectionDataConnectorArgs, opts?: pulumi.InvokeOptions): Promise<GetMicrosoftPurviewInformationProtectionDataConnectorResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights/v20230901preview:getMicrosoftPurviewInformationProtectionDataConnector", {
        "dataConnectorId": args.dataConnectorId,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetMicrosoftPurviewInformationProtectionDataConnectorArgs {
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
 * Represents Microsoft Purview Information Protection data connector.
 */
export interface GetMicrosoftPurviewInformationProtectionDataConnectorResult {
    /**
     * The available data types for the connector.
     */
    readonly dataTypes: types.outputs.MicrosoftPurviewInformationProtectionConnectorDataTypesResponse;
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
     * Expected value is 'MicrosoftPurviewInformationProtection'.
     */
    readonly kind: "MicrosoftPurviewInformationProtection";
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The tenant id to connect to, and get the data from.
     */
    readonly tenantId: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets a data connector.
 */
export function getMicrosoftPurviewInformationProtectionDataConnectorOutput(args: GetMicrosoftPurviewInformationProtectionDataConnectorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMicrosoftPurviewInformationProtectionDataConnectorResult> {
    return pulumi.output(args).apply((a: any) => getMicrosoftPurviewInformationProtectionDataConnector(a, opts))
}

export interface GetMicrosoftPurviewInformationProtectionDataConnectorOutputArgs {
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