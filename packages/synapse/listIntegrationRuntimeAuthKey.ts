import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * List authentication keys in an integration runtime
 * Azure REST API version: 2021-06-01.
 *
 * Other available API versions: 2021-06-01-preview.
 */
export function listIntegrationRuntimeAuthKey(args: ListIntegrationRuntimeAuthKeyArgs, opts?: pulumi.InvokeOptions): Promise<ListIntegrationRuntimeAuthKeyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:synapse:listIntegrationRuntimeAuthKey", {
        "integrationRuntimeName": args.integrationRuntimeName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface ListIntegrationRuntimeAuthKeyArgs {
    /**
     * Integration runtime name
     */
    integrationRuntimeName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * The integration runtime authentication keys.
 */
export interface ListIntegrationRuntimeAuthKeyResult {
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
 * List authentication keys in an integration runtime
 * Azure REST API version: 2021-06-01.
 *
 * Other available API versions: 2021-06-01-preview.
 */
export function listIntegrationRuntimeAuthKeyOutput(args: ListIntegrationRuntimeAuthKeyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListIntegrationRuntimeAuthKeyResult> {
    return pulumi.output(args).apply((a: any) => listIntegrationRuntimeAuthKey(a, opts))
}

export interface ListIntegrationRuntimeAuthKeyOutputArgs {
    /**
     * Integration runtime name
     */
    integrationRuntimeName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}