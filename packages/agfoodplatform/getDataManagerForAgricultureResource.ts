import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get DataManagerForAgriculture resource.
 *
 * Uses Azure REST API version 2023-06-01-preview.
 */
export function getDataManagerForAgricultureResource(args: GetDataManagerForAgricultureResourceArgs, opts?: pulumi.InvokeOptions): Promise<GetDataManagerForAgricultureResourceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:agfoodplatform:getDataManagerForAgricultureResource", {
        "dataManagerForAgricultureResourceName": args.dataManagerForAgricultureResourceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDataManagerForAgricultureResourceArgs {
    /**
     * DataManagerForAgriculture resource name.
     */
    dataManagerForAgricultureResourceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Data Manager For Agriculture ARM Resource.
 */
export interface GetDataManagerForAgricultureResourceResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Identity for the resource.
     */
    readonly identity?: types.outputs.IdentityResponse;
    /**
     * Uri of the Data Manager For Agriculture instance.
     */
    readonly instanceUri: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Private endpoints.
     */
    readonly privateEndpointConnections: types.outputs.PrivateEndpointConnectionResponse[];
    /**
     * Data Manager For Agriculture instance provisioning state.
     */
    readonly provisioningState: string;
    /**
     * Property to allow or block public traffic for an Azure Data Manager For Agriculture resource.
     */
    readonly publicNetworkAccess?: string;
    /**
     * Sensor integration request model.
     */
    readonly sensorIntegration?: types.outputs.SensorIntegrationResponse;
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
 * Get DataManagerForAgriculture resource.
 *
 * Uses Azure REST API version 2023-06-01-preview.
 */
export function getDataManagerForAgricultureResourceOutput(args: GetDataManagerForAgricultureResourceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDataManagerForAgricultureResourceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:agfoodplatform:getDataManagerForAgricultureResource", {
        "dataManagerForAgricultureResourceName": args.dataManagerForAgricultureResourceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDataManagerForAgricultureResourceOutputArgs {
    /**
     * DataManagerForAgriculture resource name.
     */
    dataManagerForAgricultureResourceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}