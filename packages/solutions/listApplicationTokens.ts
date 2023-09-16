import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List tokens for application.
 * Azure REST API version: 2021-07-01.
 */
export function listApplicationTokens(args: ListApplicationTokensArgs, opts?: pulumi.InvokeOptions): Promise<ListApplicationTokensResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:solutions:listApplicationTokens", {
        "applicationName": args.applicationName,
        "authorizationAudience": args.authorizationAudience,
        "resourceGroupName": args.resourceGroupName,
        "userAssignedIdentities": args.userAssignedIdentities,
    }, opts);
}

export interface ListApplicationTokensArgs {
    /**
     * The name of the managed application.
     */
    applicationName: string;
    /**
     * The authorization audience.
     */
    authorizationAudience?: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The user assigned identities.
     */
    userAssignedIdentities?: string[];
}

/**
 * The array of managed identity tokens.
 */
export interface ListApplicationTokensResult {
    /**
     * The array of managed identity tokens.
     */
    readonly value?: types.outputs.solutions.ManagedIdentityTokenResponse[];
}
/**
 * List tokens for application.
 * Azure REST API version: 2021-07-01.
 */
export function listApplicationTokensOutput(args: ListApplicationTokensOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListApplicationTokensResult> {
    return pulumi.output(args).apply((a: any) => listApplicationTokens(a, opts))
}

export interface ListApplicationTokensOutputArgs {
    /**
     * The name of the managed application.
     */
    applicationName: pulumi.Input<string>;
    /**
     * The authorization audience.
     */
    authorizationAudience?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The user assigned identities.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}
