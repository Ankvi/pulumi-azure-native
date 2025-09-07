import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a AuthenticationSetting
 *
 * Uses Azure REST API version 2025-05-01-preview.
 */
export function getAuthenticationSetting(args: GetAuthenticationSettingArgs, opts?: pulumi.InvokeOptions): Promise<GetAuthenticationSettingResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudhealth:getAuthenticationSetting", {
        "authenticationSettingName": args.authenticationSettingName,
        "healthModelName": args.healthModelName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAuthenticationSettingArgs {
    /**
     * Name of the authentication setting. Must be unique within a health model.
     */
    authenticationSettingName: string;
    /**
     * Name of health model resource
     */
    healthModelName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * An authentication setting in a health model
 */
export interface GetAuthenticationSettingResult {
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
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.ManagedIdentityAuthenticationSettingPropertiesResponse;
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
 * Get a AuthenticationSetting
 *
 * Uses Azure REST API version 2025-05-01-preview.
 */
export function getAuthenticationSettingOutput(args: GetAuthenticationSettingOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAuthenticationSettingResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cloudhealth:getAuthenticationSetting", {
        "authenticationSettingName": args.authenticationSettingName,
        "healthModelName": args.healthModelName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAuthenticationSettingOutputArgs {
    /**
     * Name of the authentication setting. Must be unique within a health model.
     */
    authenticationSettingName: pulumi.Input<string>;
    /**
     * Name of health model resource
     */
    healthModelName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}