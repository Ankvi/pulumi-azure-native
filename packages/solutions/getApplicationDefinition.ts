import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the managed application definition.
 * Azure REST API version: 2021-07-01.
 *
 * Other available API versions: 2017-12-01, 2023-12-01-preview.
 */
export function getApplicationDefinition(args: GetApplicationDefinitionArgs, opts?: pulumi.InvokeOptions): Promise<GetApplicationDefinitionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:solutions:getApplicationDefinition", {
        "applicationDefinitionName": args.applicationDefinitionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetApplicationDefinitionArgs {
    /**
     * The name of the managed application definition.
     */
    applicationDefinitionName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Information about managed application definition.
 */
export interface GetApplicationDefinitionResult {
    /**
     * The collection of managed application artifacts. The portal will use the files specified as artifacts to construct the user experience of creating a managed application from a managed application definition.
     */
    readonly artifacts?: types.outputs.ApplicationDefinitionArtifactResponse[];
    /**
     * The managed application provider authorizations.
     */
    readonly authorizations?: types.outputs.ApplicationAuthorizationResponse[];
    /**
     * The createUiDefinition json for the backing template with Microsoft.Solutions/applications resource. It can be a JObject or well-formed JSON string.
     */
    readonly createUiDefinition?: any;
    /**
     * The managed application deployment policy.
     */
    readonly deploymentPolicy?: types.outputs.ApplicationDeploymentPolicyResponse;
    /**
     * The managed application definition description.
     */
    readonly description?: string;
    /**
     * The managed application definition display name.
     */
    readonly displayName?: string;
    /**
     * Resource ID
     */
    readonly id: string;
    /**
     * A value indicating whether the package is enabled or not.
     */
    readonly isEnabled?: boolean;
    /**
     * Resource location
     */
    readonly location?: string;
    /**
     * The managed application lock level.
     */
    readonly lockLevel: string;
    /**
     * The managed application locking policy.
     */
    readonly lockingPolicy?: types.outputs.ApplicationPackageLockingPolicyDefinitionResponse;
    /**
     * The inline main template json which has resources to be provisioned. It can be a JObject or well-formed JSON string.
     */
    readonly mainTemplate?: any;
    /**
     * ID of the resource that manages this resource.
     */
    readonly managedBy?: string;
    /**
     * The managed application management policy that determines publisher's access to the managed resource group.
     */
    readonly managementPolicy?: types.outputs.ApplicationManagementPolicyResponse;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * The managed application notification policy.
     */
    readonly notificationPolicy?: types.outputs.ApplicationNotificationPolicyResponse;
    /**
     * The managed application definition package file Uri. Use this element
     */
    readonly packageFileUri?: string;
    /**
     * The managed application provider policies.
     */
    readonly policies?: types.outputs.ApplicationPolicyResponse[];
    /**
     * The SKU of the resource.
     */
    readonly sku?: types.outputs.SkuResponse;
    /**
     * The storage account id for bring your own storage scenario.
     */
    readonly storageAccountId?: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Gets the managed application definition.
 * Azure REST API version: 2021-07-01.
 *
 * Other available API versions: 2017-12-01, 2023-12-01-preview.
 */
export function getApplicationDefinitionOutput(args: GetApplicationDefinitionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApplicationDefinitionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:solutions:getApplicationDefinition", {
        "applicationDefinitionName": args.applicationDefinitionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetApplicationDefinitionOutputArgs {
    /**
     * The name of the managed application definition.
     */
    applicationDefinitionName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}