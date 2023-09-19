import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a TestLine
 */
export function getTestLine(args: GetTestLineArgs, opts?: pulumi.InvokeOptions): Promise<GetTestLineResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:voiceservices/v20230403:getTestLine", {
        "communicationsGatewayName": args.communicationsGatewayName,
        "resourceGroupName": args.resourceGroupName,
        "testLineName": args.testLineName,
    }, opts);
}

export interface GetTestLineArgs {
    /**
     * Unique identifier for this deployment
     */
    communicationsGatewayName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Unique identifier for this test line
     */
    testLineName: string;
}

/**
 * A TestLine resource
 */
export interface GetTestLineResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The phone number
     */
    readonly phoneNumber: string;
    /**
     * Resource provisioning state.
     */
    readonly provisioningState: string;
    /**
     * Purpose of this test line, e.g. automated or manual testing
     */
    readonly purpose: string;
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
 * Get a TestLine
 */
export function getTestLineOutput(args: GetTestLineOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTestLineResult> {
    return pulumi.output(args).apply((a: any) => getTestLine(a, opts))
}

export interface GetTestLineOutputArgs {
    /**
     * Unique identifier for this deployment
     */
    communicationsGatewayName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Unique identifier for this test line
     */
    testLineName: pulumi.Input<string>;
}
