import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the content callback url.
 */
export function listIntegrationAccountMapContentCallbackUrl(args: ListIntegrationAccountMapContentCallbackUrlArgs, opts?: pulumi.InvokeOptions): Promise<ListIntegrationAccountMapContentCallbackUrlResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:logic/v20190501:listIntegrationAccountMapContentCallbackUrl", {
        "integrationAccountName": args.integrationAccountName,
        "keyType": args.keyType,
        "mapName": args.mapName,
        "notAfter": args.notAfter,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListIntegrationAccountMapContentCallbackUrlArgs {
    /**
     * The integration account name.
     */
    integrationAccountName: string;
    /**
     * The key type.
     */
    keyType?: string | types.enums.KeyType;
    /**
     * The integration account map name.
     */
    mapName: string;
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
export interface ListIntegrationAccountMapContentCallbackUrlResult {
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
 */
export function listIntegrationAccountMapContentCallbackUrlOutput(args: ListIntegrationAccountMapContentCallbackUrlOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListIntegrationAccountMapContentCallbackUrlResult> {
    return pulumi.output(args).apply((a: any) => listIntegrationAccountMapContentCallbackUrl(a, opts))
}

export interface ListIntegrationAccountMapContentCallbackUrlOutputArgs {
    /**
     * The integration account name.
     */
    integrationAccountName: pulumi.Input<string>;
    /**
     * The key type.
     */
    keyType?: pulumi.Input<string | types.enums.KeyType>;
    /**
     * The integration account map name.
     */
    mapName: pulumi.Input<string>;
    /**
     * The expiry time.
     */
    notAfter?: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}
