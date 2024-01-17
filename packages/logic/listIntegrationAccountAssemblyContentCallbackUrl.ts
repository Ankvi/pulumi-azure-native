import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the content callback url for an integration account assembly.
 * Azure REST API version: 2019-05-01.
 */
export function listIntegrationAccountAssemblyContentCallbackUrl(args: ListIntegrationAccountAssemblyContentCallbackUrlArgs, opts?: pulumi.InvokeOptions): Promise<ListIntegrationAccountAssemblyContentCallbackUrlResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:logic:listIntegrationAccountAssemblyContentCallbackUrl", {
        "assemblyArtifactName": args.assemblyArtifactName,
        "integrationAccountName": args.integrationAccountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListIntegrationAccountAssemblyContentCallbackUrlArgs {
    /**
     * The assembly artifact name.
     */
    assemblyArtifactName: string;
    /**
     * The integration account name.
     */
    integrationAccountName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
}

/**
 * The workflow trigger callback URL.
 */
export interface ListIntegrationAccountAssemblyContentCallbackUrlResult {
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
 * Get the content callback url for an integration account assembly.
 * Azure REST API version: 2019-05-01.
 */
export function listIntegrationAccountAssemblyContentCallbackUrlOutput(args: ListIntegrationAccountAssemblyContentCallbackUrlOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListIntegrationAccountAssemblyContentCallbackUrlResult> {
    return pulumi.output(args).apply((a: any) => listIntegrationAccountAssemblyContentCallbackUrl(a, opts))
}

export interface ListIntegrationAccountAssemblyContentCallbackUrlOutputArgs {
    /**
     * The assembly artifact name.
     */
    assemblyArtifactName: pulumi.Input<string>;
    /**
     * The integration account name.
     */
    integrationAccountName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}