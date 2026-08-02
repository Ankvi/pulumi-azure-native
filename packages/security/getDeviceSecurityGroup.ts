import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Use this method to get the device security group for the specified IoT Hub resource.
 *
 * Uses Azure REST API version 2019-08-01.
 *
 * Other available API versions: 2017-08-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native security [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getDeviceSecurityGroup(args: GetDeviceSecurityGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetDeviceSecurityGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security:getDeviceSecurityGroup", {
        "deviceSecurityGroupName": args.deviceSecurityGroupName,
        "resourceId": args.resourceId,
    }, opts);
}

export interface GetDeviceSecurityGroupArgs {
    /**
     * The name of the device security group. Note that the name of the device security group is case insensitive.
     */
    deviceSecurityGroupName: string;
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceId: string;
}

/**
 * The device security group resource
 */
export interface GetDeviceSecurityGroupResult {
    /**
     * The allow-list custom alert rules.
     */
    readonly allowlistRules?: types.outputs.AllowlistCustomAlertRuleResponse[];
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The deny-list custom alert rules.
     */
    readonly denylistRules?: types.outputs.DenylistCustomAlertRuleResponse[];
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The list of custom alert threshold rules.
     */
    readonly thresholdRules?: types.outputs.ThresholdCustomAlertRuleResponse[];
    /**
     * The list of custom alert time-window rules.
     */
    readonly timeWindowRules?: types.outputs.TimeWindowCustomAlertRuleResponse[];
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Use this method to get the device security group for the specified IoT Hub resource.
 *
 * Uses Azure REST API version 2019-08-01.
 *
 * Other available API versions: 2017-08-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native security [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getDeviceSecurityGroupOutput(args: GetDeviceSecurityGroupOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDeviceSecurityGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:security:getDeviceSecurityGroup", {
        "deviceSecurityGroupName": args.deviceSecurityGroupName,
        "resourceId": args.resourceId,
    }, opts);
}

export interface GetDeviceSecurityGroupOutputArgs {
    /**
     * The name of the device security group. Note that the name of the device security group is case insensitive.
     */
    deviceSecurityGroupName: pulumi.Input<string>;
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceId: pulumi.Input<string>;
}