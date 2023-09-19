import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the content callback url.
 * Azure REST API version: 2019-05-01.
 */
export function listIntegrationAccountSchemaContentCallbackUrl(args: ListIntegrationAccountSchemaContentCallbackUrlArgs, opts?: pulumi.InvokeOptions): Promise<ListIntegrationAccountSchemaContentCallbackUrlResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:logic:listIntegrationAccountSchemaContentCallbackUrl", {
        "integrationAccountName": args.integrationAccountName,
        "keyType": args.keyType,
        "notAfter": args.notAfter,
        "resourceGroupName": args.resourceGroupName,
        "schemaName": args.schemaName,
    }, opts);
}

export interface ListIntegrationAccountSchemaContentCallbackUrlArgs {
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
    /**
     * The integration account schema name.
     */
    schemaName: string;
}

/**
 * The workflow trigger callback URL.
 */
export interface ListIntegrationAccountSchemaContentCallbackUrlResult {
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
 * Azure REST API version: 2019-05-01.
 */
export function listIntegrationAccountSchemaContentCallbackUrlOutput(args: ListIntegrationAccountSchemaContentCallbackUrlOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListIntegrationAccountSchemaContentCallbackUrlResult> {
    return pulumi.output(args).apply((a: any) => listIntegrationAccountSchemaContentCallbackUrl(a, opts))
}

export interface ListIntegrationAccountSchemaContentCallbackUrlOutputArgs {
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
    /**
     * The integration account schema name.
     */
    schemaName: pulumi.Input<string>;
}
