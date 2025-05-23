import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a CopilotSettingsResource
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2024-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native portalservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getCopilotSetting(args?: GetCopilotSettingArgs, opts?: pulumi.InvokeOptions): Promise<GetCopilotSettingResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:portalservices:getCopilotSetting", {
    }, opts);
}

export interface GetCopilotSettingArgs {
}

/**
 * The copilot settings tenant resource definition.
 */
export interface GetCopilotSettingResult {
    /**
     * Boolean indicating if role-based access control is enabled for copilot in this tenant.
     */
    readonly accessControlEnabled: boolean;
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
     * The status of the last provisioning operation performed on the resource.
     */
    readonly provisioningState: string;
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
 * Get a CopilotSettingsResource
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2024-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native portalservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getCopilotSettingOutput(opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetCopilotSettingResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:portalservices:getCopilotSetting", {
    }, opts);
}