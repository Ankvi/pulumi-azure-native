import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Response containing ADO OAuth information
 *
 * Uses Azure REST API version 2025-03-01-preview.
 *
 * Other available API versions: 2024-08-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native devhub [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getADOOAuthInfo(args: GetADOOAuthInfoArgs, opts?: pulumi.InvokeOptions): Promise<GetADOOAuthInfoResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devhub:getADOOAuthInfo", {
        "location": args.location,
        "redirectUrl": args.redirectUrl,
    }, opts);
}

export interface GetADOOAuthInfoArgs {
    /**
     * The name of the Azure region.
     */
    location: string;
    /**
     * The URL the client will redirect to on successful authentication. If empty, no redirect will occur.
     */
    redirectUrl?: string;
}

/**
 * Response containing ADO OAuth information
 */
export interface GetADOOAuthInfoResult {
    /**
     * URL used to authorize ADO app using Entra ID
     */
    readonly authURL?: string;
    /**
     * OAuth token used to make calls to ADO APIs
     */
    readonly token?: string;
}
/**
 * Response containing ADO OAuth information
 *
 * Uses Azure REST API version 2025-03-01-preview.
 *
 * Other available API versions: 2024-08-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native devhub [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getADOOAuthInfoOutput(args: GetADOOAuthInfoOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetADOOAuthInfoResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:devhub:getADOOAuthInfo", {
        "location": args.location,
        "redirectUrl": args.redirectUrl,
    }, opts);
}

export interface GetADOOAuthInfoOutputArgs {
    /**
     * The name of the Azure region.
     */
    location: pulumi.Input<string>;
    /**
     * The URL the client will redirect to on successful authentication. If empty, no redirect will occur.
     */
    redirectUrl?: pulumi.Input<string>;
}