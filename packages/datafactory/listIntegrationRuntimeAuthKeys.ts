import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Retrieves the authentication keys for an integration runtime.
 *
 * Uses Azure REST API version 2018-06-01.
 */
export function listIntegrationRuntimeAuthKeys(args: ListIntegrationRuntimeAuthKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListIntegrationRuntimeAuthKeysResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datafactory:listIntegrationRuntimeAuthKeys", {
        "factoryName": args.factoryName,
        "integrationRuntimeName": args.integrationRuntimeName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListIntegrationRuntimeAuthKeysArgs {
    /**
     * The factory name.
     */
    factoryName: string;
    /**
     * The integration runtime name.
     */
    integrationRuntimeName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
}

/**
 * The integration runtime authentication keys.
 */
export interface ListIntegrationRuntimeAuthKeysResult {
    /**
     * The primary integration runtime authentication key.
     */
    readonly authKey1?: string;
    /**
     * The secondary integration runtime authentication key.
     */
    readonly authKey2?: string;
}
/**
 * Retrieves the authentication keys for an integration runtime.
 *
 * Uses Azure REST API version 2018-06-01.
 */
export function listIntegrationRuntimeAuthKeysOutput(args: ListIntegrationRuntimeAuthKeysOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListIntegrationRuntimeAuthKeysResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:datafactory:listIntegrationRuntimeAuthKeys", {
        "factoryName": args.factoryName,
        "integrationRuntimeName": args.integrationRuntimeName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListIntegrationRuntimeAuthKeysOutputArgs {
    /**
     * The factory name.
     */
    factoryName: pulumi.Input<string>;
    /**
     * The integration runtime name.
     */
    integrationRuntimeName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}