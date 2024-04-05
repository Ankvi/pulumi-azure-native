import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Checks if resource name is available.
 */
export function getManagedEnvironmentAuthToken(args: GetManagedEnvironmentAuthTokenArgs, opts?: pulumi.InvokeOptions): Promise<GetManagedEnvironmentAuthTokenResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:app/v20230401preview:getManagedEnvironmentAuthToken", {
        "environmentName": args.environmentName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetManagedEnvironmentAuthTokenArgs {
    /**
     * Name of the Managed Environment.
     */
    environmentName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Environment Auth Token.
 */
export interface GetManagedEnvironmentAuthTokenResult {
    /**
     * Token expiration date.
     */
    readonly expires: string;
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
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Auth token value.
     */
    readonly token: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Checks if resource name is available.
 */
export function getManagedEnvironmentAuthTokenOutput(args: GetManagedEnvironmentAuthTokenOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagedEnvironmentAuthTokenResult> {
    return pulumi.output(args).apply((a: any) => getManagedEnvironmentAuthToken(a, opts))
}

export interface GetManagedEnvironmentAuthTokenOutputArgs {
    /**
     * Name of the Managed Environment.
     */
    environmentName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}