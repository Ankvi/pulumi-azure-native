import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Use this method to get the device security group for the specified IoT Hub resource.
 *
 * Uses Azure REST API version 2019-08-01.
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
     * The identifier of the resource.
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
     * The deny-list custom alert rules.
     */
    readonly denylistRules?: types.outputs.DenylistCustomAlertRuleResponse[];
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * The list of custom alert threshold rules.
     */
    readonly thresholdRules?: types.outputs.ThresholdCustomAlertRuleResponse[];
    /**
     * The list of custom alert time-window rules.
     */
    readonly timeWindowRules?: types.outputs.TimeWindowCustomAlertRuleResponse[];
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Use this method to get the device security group for the specified IoT Hub resource.
 *
 * Uses Azure REST API version 2019-08-01.
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
     * The identifier of the resource.
     */
    resourceId: pulumi.Input<string>;
}