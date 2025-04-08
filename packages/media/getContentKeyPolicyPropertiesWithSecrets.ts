import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Content Key Policy including secret values
 *
 * Uses Azure REST API version 2023-01-01.
 *
 * Other available API versions: 2018-03-30-preview, 2018-06-01-preview, 2018-07-01, 2020-05-01, 2021-06-01, 2021-11-01, 2022-08-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native media [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getContentKeyPolicyPropertiesWithSecrets(args: GetContentKeyPolicyPropertiesWithSecretsArgs, opts?: pulumi.InvokeOptions): Promise<GetContentKeyPolicyPropertiesWithSecretsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:media:getContentKeyPolicyPropertiesWithSecrets", {
        "accountName": args.accountName,
        "contentKeyPolicyName": args.contentKeyPolicyName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetContentKeyPolicyPropertiesWithSecretsArgs {
    /**
     * The Media Services account name.
     */
    accountName: string;
    /**
     * The Content Key Policy name.
     */
    contentKeyPolicyName: string;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: string;
}

/**
 * The properties of the Content Key Policy.
 */
export interface GetContentKeyPolicyPropertiesWithSecretsResult {
    /**
     * The creation date of the Policy
     */
    readonly created: string;
    /**
     * A description for the Policy.
     */
    readonly description?: string;
    /**
     * The last modified date of the Policy
     */
    readonly lastModified: string;
    /**
     * The Key Policy options.
     */
    readonly options: types.outputs.ContentKeyPolicyOptionResponse[];
    /**
     * The legacy Policy ID.
     */
    readonly policyId: string;
}
/**
 * Get a Content Key Policy including secret values
 *
 * Uses Azure REST API version 2023-01-01.
 *
 * Other available API versions: 2018-03-30-preview, 2018-06-01-preview, 2018-07-01, 2020-05-01, 2021-06-01, 2021-11-01, 2022-08-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native media [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getContentKeyPolicyPropertiesWithSecretsOutput(args: GetContentKeyPolicyPropertiesWithSecretsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetContentKeyPolicyPropertiesWithSecretsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:media:getContentKeyPolicyPropertiesWithSecrets", {
        "accountName": args.accountName,
        "contentKeyPolicyName": args.contentKeyPolicyName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetContentKeyPolicyPropertiesWithSecretsOutputArgs {
    /**
     * The Media Services account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The Content Key Policy name.
     */
    contentKeyPolicyName: pulumi.Input<string>;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}