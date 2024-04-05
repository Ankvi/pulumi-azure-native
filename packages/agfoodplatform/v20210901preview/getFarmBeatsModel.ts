import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get FarmBeats resource.
 */
export function getFarmBeatsModel(args: GetFarmBeatsModelArgs, opts?: pulumi.InvokeOptions): Promise<GetFarmBeatsModelResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:agfoodplatform/v20210901preview:getFarmBeatsModel", {
        "farmBeatsResourceName": args.farmBeatsResourceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFarmBeatsModelArgs {
    /**
     * FarmBeats resource name.
     */
    farmBeatsResourceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * FarmBeats ARM Resource.
 */
export interface GetFarmBeatsModelResult {
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Identity for the resource.
     */
    readonly identity?: types.outputs.IdentityResponse;
    /**
     * Uri of the FarmBeats instance.
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
     * The private endpoint connection resource.
     */
    readonly privateEndpointConnections: types.outputs.PrivateEndpointConnectionResponse;
    /**
     * FarmBeats instance provisioning state.
     */
    readonly provisioningState: string;
    /**
     * Property to allow or block public traffic for an Azure FarmBeats resource.
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
 * Get FarmBeats resource.
 */
export function getFarmBeatsModelOutput(args: GetFarmBeatsModelOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFarmBeatsModelResult> {
    return pulumi.output(args).apply((a: any) => getFarmBeatsModel(a, opts))
}

export interface GetFarmBeatsModelOutputArgs {
    /**
     * FarmBeats resource name.
     */
    farmBeatsResourceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}