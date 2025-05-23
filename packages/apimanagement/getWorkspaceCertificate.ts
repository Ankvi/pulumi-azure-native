import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the details of the certificate specified by its identifier.
 *
 * Uses Azure REST API version 2024-06-01-preview.
 *
 * Other available API versions: 2023-09-01-preview, 2024-05-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apimanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getWorkspaceCertificate(args: GetWorkspaceCertificateArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkspaceCertificateResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement:getWorkspaceCertificate", {
        "certificateId": args.certificateId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
        "workspaceId": args.workspaceId,
    }, opts);
}

export interface GetWorkspaceCertificateArgs {
    /**
     * Identifier of the certificate entity. Must be unique in the current API Management service instance.
     */
    certificateId: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    serviceName: string;
    /**
     * Workspace identifier. Must be unique in the current API Management service instance.
     */
    workspaceId: string;
}

/**
 * Certificate details.
 */
export interface GetWorkspaceCertificateResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Expiration date of the certificate. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     */
    readonly expirationDate: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * KeyVault location details of the certificate.
     */
    readonly keyVault?: types.outputs.KeyVaultContractPropertiesResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Subject attribute of the certificate.
     */
    readonly subject: string;
    /**
     * Thumbprint of the certificate.
     */
    readonly thumbprint: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the details of the certificate specified by its identifier.
 *
 * Uses Azure REST API version 2024-06-01-preview.
 *
 * Other available API versions: 2023-09-01-preview, 2024-05-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apimanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getWorkspaceCertificateOutput(args: GetWorkspaceCertificateOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetWorkspaceCertificateResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:apimanagement:getWorkspaceCertificate", {
        "certificateId": args.certificateId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
        "workspaceId": args.workspaceId,
    }, opts);
}

export interface GetWorkspaceCertificateOutputArgs {
    /**
     * Identifier of the certificate entity. Must be unique in the current API Management service instance.
     */
    certificateId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * Workspace identifier. Must be unique in the current API Management service instance.
     */
    workspaceId: pulumi.Input<string>;
}