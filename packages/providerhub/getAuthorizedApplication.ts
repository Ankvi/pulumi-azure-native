import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the authorized application details.
 *
 * Uses Azure REST API version 2024-09-01.
 */
export function getAuthorizedApplication(args: GetAuthorizedApplicationArgs, opts?: pulumi.InvokeOptions): Promise<GetAuthorizedApplicationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:providerhub:getAuthorizedApplication", {
        "applicationId": args.applicationId,
        "providerNamespace": args.providerNamespace,
    }, opts);
}

export interface GetAuthorizedApplicationArgs {
    /**
     * The application ID.
     */
    applicationId: string;
    /**
     * The name of the resource provider hosted within ProviderHub.
     */
    providerNamespace: string;
}

export interface GetAuthorizedApplicationResult {
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
    readonly properties: types.outputs.AuthorizedApplicationPropertiesResponse;
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
 * Gets the authorized application details.
 *
 * Uses Azure REST API version 2024-09-01.
 */
export function getAuthorizedApplicationOutput(args: GetAuthorizedApplicationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAuthorizedApplicationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:providerhub:getAuthorizedApplication", {
        "applicationId": args.applicationId,
        "providerNamespace": args.providerNamespace,
    }, opts);
}

export interface GetAuthorizedApplicationOutputArgs {
    /**
     * The application ID.
     */
    applicationId: pulumi.Input<string>;
    /**
     * The name of the resource provider hosted within ProviderHub.
     */
    providerNamespace: pulumi.Input<string>;
}