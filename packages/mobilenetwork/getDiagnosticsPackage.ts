import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about the specified diagnostics package.
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2023-06-01, 2023-09-01, 2024-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native mobilenetwork [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getDiagnosticsPackage(args: GetDiagnosticsPackageArgs, opts?: pulumi.InvokeOptions): Promise<GetDiagnosticsPackageResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:mobilenetwork:getDiagnosticsPackage", {
        "diagnosticsPackageName": args.diagnosticsPackageName,
        "packetCoreControlPlaneName": args.packetCoreControlPlaneName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDiagnosticsPackageArgs {
    /**
     * The name of the diagnostics package.
     */
    diagnosticsPackageName: string;
    /**
     * The name of the packet core control plane.
     */
    packetCoreControlPlaneName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Diagnostics package resource.
 */
export interface GetDiagnosticsPackageResult {
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
     * The provisioning state of the diagnostics package resource.
     */
    readonly provisioningState: string;
    /**
     * The reason for the current state of the diagnostics package collection.
     */
    readonly reason: string;
    /**
     * The status of the diagnostics package collection.
     */
    readonly status: string;
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
 * Gets information about the specified diagnostics package.
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2023-06-01, 2023-09-01, 2024-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native mobilenetwork [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getDiagnosticsPackageOutput(args: GetDiagnosticsPackageOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDiagnosticsPackageResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:mobilenetwork:getDiagnosticsPackage", {
        "diagnosticsPackageName": args.diagnosticsPackageName,
        "packetCoreControlPlaneName": args.packetCoreControlPlaneName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDiagnosticsPackageOutputArgs {
    /**
     * The name of the diagnostics package.
     */
    diagnosticsPackageName: pulumi.Input<string>;
    /**
     * The name of the packet core control plane.
     */
    packetCoreControlPlaneName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}