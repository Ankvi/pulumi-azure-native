import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get ArcSetting resource details of HCI Cluster.
 * Azure REST API version: 2023-03-01.
 */
export function getArcSetting(args: GetArcSettingArgs, opts?: pulumi.InvokeOptions): Promise<GetArcSettingResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestackhci:getArcSetting", {
        "arcSettingName": args.arcSettingName,
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetArcSettingArgs {
    /**
     * The name of the proxy resource holding details of HCI ArcSetting information.
     */
    arcSettingName: string;
    /**
     * The name of the cluster.
     */
    clusterName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * ArcSetting details.
 */
export interface GetArcSettingResult {
    /**
     * Aggregate state of Arc agent across the nodes in this HCI cluster.
     */
    readonly aggregateState: string;
    /**
     * App id of arc AAD identity.
     */
    readonly arcApplicationClientId?: string;
    /**
     * Object id of arc AAD identity.
     */
    readonly arcApplicationObjectId?: string;
    /**
     * Tenant id of arc AAD identity.
     */
    readonly arcApplicationTenantId?: string;
    /**
     * The resource group that hosts the Arc agents, ie. Hybrid Compute Machine resources.
     */
    readonly arcInstanceResourceGroup?: string;
    /**
     * Object id of arc AAD service principal.
     */
    readonly arcServicePrincipalObjectId?: string;
    /**
     * contains connectivity related configuration for ARC resources
     */
    readonly connectivityProperties?: types.outputs.azurestackhci.ArcConnectivityPropertiesResponse[];
    /**
     * Properties for each of the default extensions category
     */
    readonly defaultExtensions: types.outputs.azurestackhci.DefaultExtensionDetailsResponse[];
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * State of Arc agent in each of the nodes.
     */
    readonly perNodeDetails: types.outputs.azurestackhci.PerNodeStateResponse[];
    /**
     * Provisioning state of the ArcSetting proxy resource.
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.azurestackhci.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get ArcSetting resource details of HCI Cluster.
 * Azure REST API version: 2023-03-01.
 */
export function getArcSettingOutput(args: GetArcSettingOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetArcSettingResult> {
    return pulumi.output(args).apply((a: any) => getArcSetting(a, opts))
}

export interface GetArcSettingOutputArgs {
    /**
     * The name of the proxy resource holding details of HCI ArcSetting information.
     */
    arcSettingName: pulumi.Input<string>;
    /**
     * The name of the cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
