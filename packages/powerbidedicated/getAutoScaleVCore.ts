import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets details about the specified auto scale v-core.
 *
 * Uses Azure REST API version 2021-01-01.
 */
export function getAutoScaleVCore(args: GetAutoScaleVCoreArgs, opts?: pulumi.InvokeOptions): Promise<GetAutoScaleVCoreResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:powerbidedicated:getAutoScaleVCore", {
        "resourceGroupName": args.resourceGroupName,
        "vcoreName": args.vcoreName,
    }, opts);
}

export interface GetAutoScaleVCoreArgs {
    /**
     * The name of the Azure Resource group of which a given PowerBIDedicated capacity is part. This name must be at least 1 character in length, and no more than 90.
     */
    resourceGroupName: string;
    /**
     * The name of the auto scale v-core. It must be a minimum of 3 characters, and a maximum of 63.
     */
    vcoreName: string;
}

/**
 * Represents an instance of an auto scale v-core resource.
 */
export interface GetAutoScaleVCoreResult {
    /**
     * The maximum capacity of an auto scale v-core resource.
     */
    readonly capacityLimit?: number;
    /**
     * The object ID of the capacity resource associated with the auto scale v-core resource.
     */
    readonly capacityObjectId?: string;
    /**
     * An identifier that represents the PowerBI Dedicated resource.
     */
    readonly id: string;
    /**
     * Location of the PowerBI Dedicated resource.
     */
    readonly location: string;
    /**
     * The name of the PowerBI Dedicated resource.
     */
    readonly name: string;
    /**
     * The current deployment state of an auto scale v-core resource. The provisioningState is to indicate states for resource provisioning.
     */
    readonly provisioningState: string;
    /**
     * The SKU of the auto scale v-core resource.
     */
    readonly sku: types.outputs.AutoScaleVCoreSkuResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData?: types.outputs.SystemDataResponse;
    /**
     * Key-value pairs of additional resource provisioning properties.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the PowerBI Dedicated resource.
     */
    readonly type: string;
}
/**
 * Gets details about the specified auto scale v-core.
 *
 * Uses Azure REST API version 2021-01-01.
 */
export function getAutoScaleVCoreOutput(args: GetAutoScaleVCoreOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAutoScaleVCoreResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:powerbidedicated:getAutoScaleVCore", {
        "resourceGroupName": args.resourceGroupName,
        "vcoreName": args.vcoreName,
    }, opts);
}

export interface GetAutoScaleVCoreOutputArgs {
    /**
     * The name of the Azure Resource group of which a given PowerBIDedicated capacity is part. This name must be at least 1 character in length, and no more than 90.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the auto scale v-core. It must be a minimum of 3 characters, and a maximum of 63.
     */
    vcoreName: pulumi.Input<string>;
}