import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a Test Base Account.
 *
 * Uses Azure REST API version 2022-04-01-preview.
 *
 * Other available API versions: 2023-11-01-preview.
 */
export function getTestBaseAccount(args: GetTestBaseAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetTestBaseAccountResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:testbase:getTestBaseAccount", {
        "resourceGroupName": args.resourceGroupName,
        "testBaseAccountName": args.testBaseAccountName,
    }, opts);
}

export interface GetTestBaseAccountArgs {
    /**
     * The name of the resource group that contains the resource.
     */
    resourceGroupName: string;
    /**
     * The resource name of the Test Base Account.
     */
    testBaseAccountName: string;
}

/**
 * The Test Base Account resource.
 */
export interface GetTestBaseAccountResult {
    /**
     * The access level of the Test Base Account.
     */
    readonly accessLevel: string;
    /**
     * Resource Etag.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * The SKU of the Test Base Account.
     */
    readonly sku: types.outputs.TestBaseAccountSKUResponse;
    /**
     * The system metadata relating to this resource
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The tags of the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets a Test Base Account.
 *
 * Uses Azure REST API version 2022-04-01-preview.
 *
 * Other available API versions: 2023-11-01-preview.
 */
export function getTestBaseAccountOutput(args: GetTestBaseAccountOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetTestBaseAccountResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:testbase:getTestBaseAccount", {
        "resourceGroupName": args.resourceGroupName,
        "testBaseAccountName": args.testBaseAccountName,
    }, opts);
}

export interface GetTestBaseAccountOutputArgs {
    /**
     * The name of the resource group that contains the resource.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The resource name of the Test Base Account.
     */
    testBaseAccountName: pulumi.Input<string>;
}