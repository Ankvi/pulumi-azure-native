import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Checks if resource name is available.
 *
 * Uses Azure REST API version 2024-03-01.
 *
 * Other available API versions: 2022-10-01, 2022-11-01-preview, 2023-04-01-preview, 2023-05-01, 2023-05-02-preview, 2023-08-01-preview, 2023-11-02-preview, 2024-02-02-preview, 2024-08-02-preview, 2024-10-02-preview, 2025-01-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native app [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getManagedEnvironmentAuthToken(args: GetManagedEnvironmentAuthTokenArgs, opts?: pulumi.InvokeOptions): Promise<GetManagedEnvironmentAuthTokenResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:app:getManagedEnvironmentAuthToken", {
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
 *
 * Uses Azure REST API version 2024-03-01.
 *
 * Other available API versions: 2022-10-01, 2022-11-01-preview, 2023-04-01-preview, 2023-05-01, 2023-05-02-preview, 2023-08-01-preview, 2023-11-02-preview, 2024-02-02-preview, 2024-08-02-preview, 2024-10-02-preview, 2025-01-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native app [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getManagedEnvironmentAuthTokenOutput(args: GetManagedEnvironmentAuthTokenOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetManagedEnvironmentAuthTokenResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:app:getManagedEnvironmentAuthToken", {
        "environmentName": args.environmentName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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