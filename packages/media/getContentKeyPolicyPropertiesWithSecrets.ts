import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Content Key Policy including secret values
 * Azure REST API version: 2023-01-01.
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
 * Azure REST API version: 2023-01-01.
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