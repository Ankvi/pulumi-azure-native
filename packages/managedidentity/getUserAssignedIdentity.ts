import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the identity.
 *
 * Uses Azure REST API version 2023-01-31.
 *
 * Other available API versions: 2022-01-31-preview, 2023-07-31-preview, 2024-11-30, 2025-01-31-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native managedidentity [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getUserAssignedIdentity(args: GetUserAssignedIdentityArgs, opts?: pulumi.InvokeOptions): Promise<GetUserAssignedIdentityResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:managedidentity:getUserAssignedIdentity", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetUserAssignedIdentityArgs {
    /**
     * The name of the Resource Group to which the identity belongs.
     */
    resourceGroupName: string;
    /**
     * The name of the identity resource.
     */
    resourceName: string;
}

/**
 * Describes an identity resource.
 */
export interface GetUserAssignedIdentityResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The id of the app associated with the identity. This is a random generated UUID by MSI.
     */
    readonly clientId: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
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
     * The id of the service principal object associated with the created identity.
     */
    readonly principalId: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The id of the tenant which the identity belongs to.
     */
    readonly tenantId: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the identity.
 *
 * Uses Azure REST API version 2023-01-31.
 *
 * Other available API versions: 2022-01-31-preview, 2023-07-31-preview, 2024-11-30, 2025-01-31-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native managedidentity [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getUserAssignedIdentityOutput(args: GetUserAssignedIdentityOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetUserAssignedIdentityResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:managedidentity:getUserAssignedIdentity", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetUserAssignedIdentityOutputArgs {
    /**
     * The name of the Resource Group to which the identity belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the identity resource.
     */
    resourceName: pulumi.Input<string>;
}