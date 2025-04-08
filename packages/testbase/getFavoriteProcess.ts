import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a favorite process for a Test Base Package.
 *
 * Uses Azure REST API version 2023-11-01-preview.
 *
 * Other available API versions: 2022-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native testbase [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getFavoriteProcess(args: GetFavoriteProcessArgs, opts?: pulumi.InvokeOptions): Promise<GetFavoriteProcessResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:testbase:getFavoriteProcess", {
        "favoriteProcessResourceName": args.favoriteProcessResourceName,
        "packageName": args.packageName,
        "resourceGroupName": args.resourceGroupName,
        "testBaseAccountName": args.testBaseAccountName,
    }, opts);
}

export interface GetFavoriteProcessArgs {
    /**
     * The resource name of a favorite process in a package. If the process name contains characters that are not allowed in Azure Resource Name, we use 'actualProcessName' in request body to submit the name.
     */
    favoriteProcessResourceName: string;
    /**
     * The resource name of the Test Base Package.
     */
    packageName: string;
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
 * A favorite process identifier.
 */
export interface GetFavoriteProcessResult {
    /**
     * The actual name of the favorite process. It will be equal to resource name except for the scenario that the process name contains characters that are not allowed in the resource name.
     */
    readonly actualProcessName: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets a favorite process for a Test Base Package.
 *
 * Uses Azure REST API version 2023-11-01-preview.
 *
 * Other available API versions: 2022-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native testbase [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getFavoriteProcessOutput(args: GetFavoriteProcessOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetFavoriteProcessResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:testbase:getFavoriteProcess", {
        "favoriteProcessResourceName": args.favoriteProcessResourceName,
        "packageName": args.packageName,
        "resourceGroupName": args.resourceGroupName,
        "testBaseAccountName": args.testBaseAccountName,
    }, opts);
}

export interface GetFavoriteProcessOutputArgs {
    /**
     * The resource name of a favorite process in a package. If the process name contains characters that are not allowed in Azure Resource Name, we use 'actualProcessName' in request body to submit the name.
     */
    favoriteProcessResourceName: pulumi.Input<string>;
    /**
     * The resource name of the Test Base Package.
     */
    packageName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The resource name of the Test Base Account.
     */
    testBaseAccountName: pulumi.Input<string>;
}