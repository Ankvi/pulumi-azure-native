import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get information about the Runtime Environment
 *
 * Uses Azure REST API version 2023-05-15-preview.
 *
 * Other available API versions: 2024-10-23. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native automation [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getRuntimeEnvironment(args: GetRuntimeEnvironmentArgs, opts?: pulumi.InvokeOptions): Promise<GetRuntimeEnvironmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:automation:getRuntimeEnvironment", {
        "automationAccountName": args.automationAccountName,
        "resourceGroupName": args.resourceGroupName,
        "runtimeEnvironmentName": args.runtimeEnvironmentName,
    }, opts);
}

export interface GetRuntimeEnvironmentArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: string;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the Runtime Environment.
     */
    runtimeEnvironmentName: string;
}

/**
 * Definition of the Runtime Environment type.
 */
export interface GetRuntimeEnvironmentResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * List of Default packages for Environment
     */
    readonly defaultPackages?: {[key: string]: string};
    /**
     * Gets or sets the description.
     */
    readonly description?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Language of Runtime Environment
     */
    readonly language?: string;
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
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Version of Language
     */
    readonly version?: string;
}
/**
 * Get information about the Runtime Environment
 *
 * Uses Azure REST API version 2023-05-15-preview.
 *
 * Other available API versions: 2024-10-23. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native automation [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getRuntimeEnvironmentOutput(args: GetRuntimeEnvironmentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetRuntimeEnvironmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:automation:getRuntimeEnvironment", {
        "automationAccountName": args.automationAccountName,
        "resourceGroupName": args.resourceGroupName,
        "runtimeEnvironmentName": args.runtimeEnvironmentName,
    }, opts);
}

export interface GetRuntimeEnvironmentOutputArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: pulumi.Input<string>;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Runtime Environment.
     */
    runtimeEnvironmentName: pulumi.Input<string>;
}