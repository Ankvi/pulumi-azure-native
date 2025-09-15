import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a SmtpUsernameResource.
 *
 * Uses Azure REST API version 2024-09-01-preview.
 *
 * Other available API versions: 2025-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native communication [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSmtpUsername(args: GetSmtpUsernameArgs, opts?: pulumi.InvokeOptions): Promise<GetSmtpUsernameResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:communication:getSmtpUsername", {
        "communicationServiceName": args.communicationServiceName,
        "resourceGroupName": args.resourceGroupName,
        "smtpUsername": args.smtpUsername,
    }, opts);
}

export interface GetSmtpUsernameArgs {
    /**
     * The name of the CommunicationService resource.
     */
    communicationServiceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the SmtpUsernameResource.
     */
    smtpUsername: string;
}

/**
 * The object describing the smtp username resource.
 */
export interface GetSmtpUsernameResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The application Id for the linked Entra Application.
     */
    readonly entraApplicationId: string;
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
     * The tenant of the linked Entra Application.
     */
    readonly tenantId: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * The SMTP username. Could be free form or in the email address format.
     */
    readonly username: string;
}
/**
 * Get a SmtpUsernameResource.
 *
 * Uses Azure REST API version 2024-09-01-preview.
 *
 * Other available API versions: 2025-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native communication [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSmtpUsernameOutput(args: GetSmtpUsernameOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSmtpUsernameResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:communication:getSmtpUsername", {
        "communicationServiceName": args.communicationServiceName,
        "resourceGroupName": args.resourceGroupName,
        "smtpUsername": args.smtpUsername,
    }, opts);
}

export interface GetSmtpUsernameOutputArgs {
    /**
     * The name of the CommunicationService resource.
     */
    communicationServiceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the SmtpUsernameResource.
     */
    smtpUsername: pulumi.Input<string>;
}