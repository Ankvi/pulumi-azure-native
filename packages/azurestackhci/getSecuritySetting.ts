import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a SecuritySetting
 * Azure REST API version: 2023-11-01-preview.
 *
 * Other available API versions: 2024-01-01, 2024-02-15-preview, 2024-04-01, 2024-09-01-preview.
 */
export function getSecuritySetting(args: GetSecuritySettingArgs, opts?: pulumi.InvokeOptions): Promise<GetSecuritySettingResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestackhci:getSecuritySetting", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
        "securitySettingsName": args.securitySettingsName,
    }, opts);
}

export interface GetSecuritySettingArgs {
    /**
     * The name of the cluster.
     */
    clusterName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Name of security setting
     */
    securitySettingsName: string;
}

/**
 * Security settings proxy resource
 */
export interface GetSecuritySettingResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The status of the last operation.
     */
    readonly provisioningState: string;
    /**
     * Secured Core Compliance Assignment
     */
    readonly securedCoreComplianceAssignment?: string;
    /**
     * Security Compliance Status
     */
    readonly securityComplianceStatus: types.outputs.SecurityComplianceStatusResponse;
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
 * Get a SecuritySetting
 * Azure REST API version: 2023-11-01-preview.
 *
 * Other available API versions: 2024-01-01, 2024-02-15-preview, 2024-04-01, 2024-09-01-preview.
 */
export function getSecuritySettingOutput(args: GetSecuritySettingOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSecuritySettingResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:azurestackhci:getSecuritySetting", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
        "securitySettingsName": args.securitySettingsName,
    }, opts);
}

export interface GetSecuritySettingOutputArgs {
    /**
     * The name of the cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of security setting
     */
    securitySettingsName: pulumi.Input<string>;
}