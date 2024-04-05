import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a Test Base Account.
 */
export function getTestBaseAccount(args: GetTestBaseAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetTestBaseAccountResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:testbase/v20231101preview:getTestBaseAccount", {
        "resourceGroupName": args.resourceGroupName,
        "testBaseAccountName": args.testBaseAccountName,
    }, opts);
}

export interface GetTestBaseAccountArgs {
    /**
     * The name of the resource group. The name is case insensitive.
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
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The identity of the testBaseAccount.
     */
    readonly identity?: types.outputs.SystemAssignedServiceIdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
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
 * Gets a Test Base Account.
 */
export function getTestBaseAccountOutput(args: GetTestBaseAccountOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTestBaseAccountResult> {
    return pulumi.output(args).apply((a: any) => getTestBaseAccount(a, opts))
}

export interface GetTestBaseAccountOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The resource name of the Test Base Account.
     */
    testBaseAccountName: pulumi.Input<string>;
}