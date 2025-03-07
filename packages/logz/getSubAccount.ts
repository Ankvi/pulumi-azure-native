import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure REST API version: 2022-01-01-preview.
 */
export function getSubAccount(args: GetSubAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetSubAccountResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:logz:getSubAccount", {
        "monitorName": args.monitorName,
        "resourceGroupName": args.resourceGroupName,
        "subAccountName": args.subAccountName,
    }, opts);
}

export interface GetSubAccountArgs {
    /**
     * Monitor resource name
     */
    monitorName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Sub Account resource name
     */
    subAccountName: string;
}

export interface GetSubAccountResult {
    /**
     * ARM id of the monitor resource.
     */
    readonly id: string;
    readonly identity?: types.outputs.IdentityPropertiesResponse;
    readonly location: string;
    /**
     * Name of the monitor resource.
     */
    readonly name: string;
    /**
     * Properties specific to the monitor resource.
     */
    readonly properties: types.outputs.MonitorPropertiesResponse;
    /**
     * The system metadata relating to this resource
     */
    readonly systemData: types.outputs.SystemDataResponse;
    readonly tags?: {[key: string]: string};
    /**
     * The type of the monitor resource.
     */
    readonly type: string;
}
/**
 * Azure REST API version: 2022-01-01-preview.
 */
export function getSubAccountOutput(args: GetSubAccountOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSubAccountResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:logz:getSubAccount", {
        "monitorName": args.monitorName,
        "resourceGroupName": args.resourceGroupName,
        "subAccountName": args.subAccountName,
    }, opts);
}

export interface GetSubAccountOutputArgs {
    /**
     * Monitor resource name
     */
    monitorName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Sub Account resource name
     */
    subAccountName: pulumi.Input<string>;
}