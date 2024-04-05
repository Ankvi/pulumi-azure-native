import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get particular Arc Extension of HCI Cluster.
 */
export function getExtension(args: GetExtensionArgs, opts?: pulumi.InvokeOptions): Promise<GetExtensionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestackhci/v20230801:getExtension", {
        "arcSettingName": args.arcSettingName,
        "clusterName": args.clusterName,
        "extensionName": args.extensionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetExtensionArgs {
    /**
     * The name of the proxy resource holding details of HCI ArcSetting information.
     */
    arcSettingName: string;
    /**
     * The name of the cluster.
     */
    clusterName: string;
    /**
     * The name of the machine extension.
     */
    extensionName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Details of a particular extension in HCI Cluster.
 */
export interface GetExtensionResult {
    /**
     * Aggregate state of Arc Extensions across the nodes in this HCI cluster.
     */
    readonly aggregateState: string;
    /**
     * Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
     */
    readonly autoUpgradeMinorVersion?: boolean;
    /**
     * Indicates whether the extension should be automatically upgraded by the platform if there is a newer version available.
     */
    readonly enableAutomaticUpgrade?: boolean;
    /**
     * How the extension handler should be forced to update even if the extension configuration has not changed.
     */
    readonly forceUpdateTag?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Indicates if the extension is managed by azure or the user.
     */
    readonly managedBy: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * State of Arc Extension in each of the nodes.
     */
    readonly perNodeExtensionDetails: types.outputs.PerNodeExtensionStateResponse[];
    /**
     * Protected settings (may contain secrets).
     */
    readonly protectedSettings?: any;
    /**
     * Provisioning state of the Extension proxy resource.
     */
    readonly provisioningState: string;
    /**
     * The name of the extension handler publisher.
     */
    readonly publisher?: string;
    /**
     * Json formatted public settings for the extension.
     */
    readonly settings?: any;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Specifies the version of the script handler. Latest version would be used if not specified.
     */
    readonly typeHandlerVersion?: string;
}
/**
 * Get particular Arc Extension of HCI Cluster.
 */
export function getExtensionOutput(args: GetExtensionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetExtensionResult> {
    return pulumi.output(args).apply((a: any) => getExtension(a, opts))
}

export interface GetExtensionOutputArgs {
    /**
     * The name of the proxy resource holding details of HCI ArcSetting information.
     */
    arcSettingName: pulumi.Input<string>;
    /**
     * The name of the cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the machine extension.
     */
    extensionName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}