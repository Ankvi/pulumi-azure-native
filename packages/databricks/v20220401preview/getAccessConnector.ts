import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets an azure databricks accessConnector.
 */
export function getAccessConnector(args: GetAccessConnectorArgs, opts?: pulumi.InvokeOptions): Promise<GetAccessConnectorResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:databricks/v20220401preview:getAccessConnector", {
        "connectorName": args.connectorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAccessConnectorArgs {
    /**
     * The name of the azure databricks accessConnector.
     */
    connectorName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Information about azure databricks accessConnector.
 */
export interface GetAccessConnectorResult {
    /**
     * Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Identity for the resource.
     */
    readonly identity?: types.outputs.databricks.v20220401preview.IdentityDataResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Azure Databricks accessConnector properties
     */
    readonly properties: types.outputs.databricks.v20220401preview.AccessConnectorPropertiesResponse;
    /**
     * The system metadata relating to this resource
     */
    readonly systemData: types.outputs.databricks.v20220401preview.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
}
/**
 * Gets an azure databricks accessConnector.
 */
export function getAccessConnectorOutput(args: GetAccessConnectorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAccessConnectorResult> {
    return pulumi.output(args).apply((a: any) => getAccessConnector(a, opts))
}

export interface GetAccessConnectorOutputArgs {
    /**
     * The name of the azure databricks accessConnector.
     */
    connectorName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
