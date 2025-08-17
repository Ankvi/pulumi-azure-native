import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the notification registration details.
 *
 * Uses Azure REST API version 2024-09-01.
 *
 * Other available API versions: 2021-09-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native providerhub [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getNotificationRegistration(args: GetNotificationRegistrationArgs, opts?: pulumi.InvokeOptions): Promise<GetNotificationRegistrationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:providerhub:getNotificationRegistration", {
        "notificationRegistrationName": args.notificationRegistrationName,
        "providerNamespace": args.providerNamespace,
    }, opts);
}

export interface GetNotificationRegistrationArgs {
    /**
     * The notification registration.
     */
    notificationRegistrationName: string;
    /**
     * The name of the resource provider hosted within ProviderHub.
     */
    providerNamespace: string;
}

export interface GetNotificationRegistrationResult {
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
    readonly properties: types.outputs.NotificationRegistrationPropertiesResponse;
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
 * Gets the notification registration details.
 *
 * Uses Azure REST API version 2024-09-01.
 *
 * Other available API versions: 2021-09-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native providerhub [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getNotificationRegistrationOutput(args: GetNotificationRegistrationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetNotificationRegistrationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:providerhub:getNotificationRegistration", {
        "notificationRegistrationName": args.notificationRegistrationName,
        "providerNamespace": args.providerNamespace,
    }, opts);
}

export interface GetNotificationRegistrationOutputArgs {
    /**
     * The notification registration.
     */
    notificationRegistrationName: pulumi.Input<string>;
    /**
     * The name of the resource provider hosted within ProviderHub.
     */
    providerNamespace: pulumi.Input<string>;
}