import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get details of a certificate profile.
 *
 * Uses Azure REST API version 2024-09-30-preview.
 *
 * Other available API versions: 2024-02-05-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native codesigning [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getCertificateProfile(args: GetCertificateProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetCertificateProfileResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:codesigning:getCertificateProfile", {
        "accountName": args.accountName,
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCertificateProfileArgs {
    /**
     * Trusted Signing account name.
     */
    accountName: string;
    /**
     * Certificate profile name.
     */
    profileName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Certificate profile resource.
 */
export interface GetCertificateProfileResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Identity validation id used for the certificate subject name.
     */
    readonly identityValidationId: string;
    /**
     * Whether to include L in the certificate subject name. Applicable only for private trust, private trust ci profile types
     */
    readonly includeCity?: boolean;
    /**
     * Whether to include C in the certificate subject name. Applicable only for private trust, private trust ci profile types
     */
    readonly includeCountry?: boolean;
    /**
     * Whether to include PC in the certificate subject name.
     */
    readonly includePostalCode?: boolean;
    /**
     * Whether to include S in the certificate subject name. Applicable only for private trust, private trust ci profile types
     */
    readonly includeState?: boolean;
    /**
     * Whether to include STREET in the certificate subject name.
     */
    readonly includeStreetAddress?: boolean;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Profile type of the certificate.
     */
    readonly profileType: string;
    /**
     * Status of the current operation on certificate profile.
     */
    readonly provisioningState: string;
    /**
     * Status of the certificate profile.
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
 * Get details of a certificate profile.
 *
 * Uses Azure REST API version 2024-09-30-preview.
 *
 * Other available API versions: 2024-02-05-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native codesigning [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getCertificateProfileOutput(args: GetCertificateProfileOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetCertificateProfileResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:codesigning:getCertificateProfile", {
        "accountName": args.accountName,
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCertificateProfileOutputArgs {
    /**
     * Trusted Signing account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * Certificate profile name.
     */
    profileName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}