import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get the verification id of a subscription used for verifying custom domains
 *
 * Uses Azure REST API version 2024-03-01.
 *
 * Other available API versions: 2023-05-02-preview, 2023-08-01-preview, 2023-11-02-preview, 2024-02-02-preview, 2024-08-02-preview, 2024-10-02-preview, 2025-01-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native app [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getCustomDomainVerificationId(args?: GetCustomDomainVerificationIdArgs, opts?: pulumi.InvokeOptions): Promise<GetCustomDomainVerificationIdResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:app:getCustomDomainVerificationId", {
    }, opts);
}

export interface GetCustomDomainVerificationIdArgs {
}

/**
 * Custom domain verification Id of a subscription
 */
export interface GetCustomDomainVerificationIdResult {
    readonly value?: string;
}
/**
 * Get the verification id of a subscription used for verifying custom domains
 *
 * Uses Azure REST API version 2024-03-01.
 *
 * Other available API versions: 2023-05-02-preview, 2023-08-01-preview, 2023-11-02-preview, 2024-02-02-preview, 2024-08-02-preview, 2024-10-02-preview, 2025-01-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native app [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getCustomDomainVerificationIdOutput(opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetCustomDomainVerificationIdResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:app:getCustomDomainVerificationId", {
    }, opts);
}