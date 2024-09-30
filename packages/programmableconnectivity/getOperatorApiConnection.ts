import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get an Operator API Connection.
 * Azure REST API version: 2024-01-15-preview.
 */
export function getOperatorApiConnection(args: GetOperatorApiConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetOperatorApiConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:programmableconnectivity:getOperatorApiConnection", {
        "operatorApiConnectionName": args.operatorApiConnectionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetOperatorApiConnectionArgs {
    /**
     * Azure Programmable Connectivity (APC) Operator API Connection Name.
     */
    operatorApiConnectionName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A Programmable Connectivity Operator API Connection resource
 */
export interface GetOperatorApiConnectionResult {
    /**
     * Type of the account the user has with the Operator's Network API infrastructure. AzureManaged | UserManaged.
     */
    readonly accountType: string;
    /**
     * Application ID of the App Developer that is registered with the Operator in a specific country/region.
     */
    readonly appId?: string;
    /**
     * The Network API for the current operator in the country/region provided in the linked Operator API Plan.
     */
    readonly camaraApiName: string;
    /**
     * Details about the Application that would use the Operator's Network APIs.
     */
    readonly configuredApplication?: types.outputs.ApplicationPropertiesResponse;
    /**
     * Reference to the APC Gateway resource ID.
     */
    readonly gatewayId: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
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
     * Reference to the Operator API Plan Resource ID.
     */
    readonly operatorApiPlanId: string;
    /**
     * Name of the Operator in the linked Operator API Plan belongs to.
     */
    readonly operatorName: string;
    /**
     * The status of the last operation.
     */
    readonly provisioningState: string;
    /**
     * Details about the SaaS offer purchased from the marketplace.
     */
    readonly saasProperties?: types.outputs.SaasPropertiesResponse;
    /**
     * The status of the OperatorApiConnection resource.
     */
    readonly status: types.outputs.StatusResponse;
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
 * Get an Operator API Connection.
 * Azure REST API version: 2024-01-15-preview.
 */
export function getOperatorApiConnectionOutput(args: GetOperatorApiConnectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOperatorApiConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:programmableconnectivity:getOperatorApiConnection", {
        "operatorApiConnectionName": args.operatorApiConnectionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetOperatorApiConnectionOutputArgs {
    /**
     * Azure Programmable Connectivity (APC) Operator API Connection Name.
     */
    operatorApiConnectionName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}