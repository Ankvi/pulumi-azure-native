import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the content callback url.
 *
 * Uses Azure REST API version 2019-05-01.
 */
export function listIntegrationAccountAgreementContentCallbackUrl(args: ListIntegrationAccountAgreementContentCallbackUrlArgs, opts?: pulumi.InvokeOptions): Promise<ListIntegrationAccountAgreementContentCallbackUrlResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:logic:listIntegrationAccountAgreementContentCallbackUrl", {
        "agreementName": args.agreementName,
        "integrationAccountName": args.integrationAccountName,
        "keyType": args.keyType,
        "notAfter": args.notAfter,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListIntegrationAccountAgreementContentCallbackUrlArgs {
    /**
     * The integration account agreement name.
     */
    agreementName: string;
    /**
     * The integration account name.
     */
    integrationAccountName: string;
    /**
     * The key type.
     */
    keyType?: string | types.enums.KeyType;
    /**
     * The expiry time.
     */
    notAfter?: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
}

/**
 * The workflow trigger callback URL.
 */
export interface ListIntegrationAccountAgreementContentCallbackUrlResult {
    /**
     * Gets the workflow trigger callback URL base path.
     */
    readonly basePath: string;
    /**
     * Gets the workflow trigger callback URL HTTP method.
     */
    readonly method: string;
    /**
     * Gets the workflow trigger callback URL query parameters.
     */
    readonly queries?: types.outputs.WorkflowTriggerListCallbackUrlQueriesResponse;
    /**
     * Gets the workflow trigger callback URL relative path.
     */
    readonly relativePath: string;
    /**
     * Gets the workflow trigger callback URL relative path parameters.
     */
    readonly relativePathParameters?: string[];
    /**
     * Gets the workflow trigger callback URL.
     */
    readonly value: string;
}
/**
 * Get the content callback url.
 *
 * Uses Azure REST API version 2019-05-01.
 */
export function listIntegrationAccountAgreementContentCallbackUrlOutput(args: ListIntegrationAccountAgreementContentCallbackUrlOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListIntegrationAccountAgreementContentCallbackUrlResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:logic:listIntegrationAccountAgreementContentCallbackUrl", {
        "agreementName": args.agreementName,
        "integrationAccountName": args.integrationAccountName,
        "keyType": args.keyType,
        "notAfter": args.notAfter,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListIntegrationAccountAgreementContentCallbackUrlOutputArgs {
    /**
     * The integration account agreement name.
     */
    agreementName: pulumi.Input<string>;
    /**
     * The integration account name.
     */
    integrationAccountName: pulumi.Input<string>;
    /**
     * The key type.
     */
    keyType?: pulumi.Input<string | types.enums.KeyType>;
    /**
     * The expiry time.
     */
    notAfter?: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}