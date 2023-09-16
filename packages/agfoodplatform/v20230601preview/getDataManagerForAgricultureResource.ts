import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get DataManagerForAgriculture resource.
 */
export function getDataManagerForAgricultureResource(args: GetDataManagerForAgricultureResourceArgs, opts?: pulumi.InvokeOptions): Promise<GetDataManagerForAgricultureResourceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:agfoodplatform/v20230601preview:getDataManagerForAgricultureResource", {
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
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Identity for the resource.
     */
    readonly identity?: types.outputs.agfoodplatform.v20230601preview.IdentityResponse;
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
    readonly privateEndpointConnections: types.outputs.agfoodplatform.v20230601preview.PrivateEndpointConnectionResponse[];
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
    readonly sensorIntegration?: types.outputs.agfoodplatform.v20230601preview.SensorIntegrationResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.agfoodplatform.v20230601preview.SystemDataResponse;
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
 */
export function getDataManagerForAgricultureResourceOutput(args: GetDataManagerForAgricultureResourceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDataManagerForAgricultureResourceResult> {
    return pulumi.output(args).apply((a: any) => getDataManagerForAgricultureResource(a, opts))
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
