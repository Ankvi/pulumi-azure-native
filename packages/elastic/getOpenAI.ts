import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Capture properties of Open AI resource Integration.
 * Azure REST API version: 2024-03-01.
 *
 * Other available API versions: 2024-01-01-preview.
 */
export function getOpenAI(args: GetOpenAIArgs, opts?: pulumi.InvokeOptions): Promise<GetOpenAIResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:elastic:getOpenAI", {
        "integrationName": args.integrationName,
        "monitorName": args.monitorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetOpenAIArgs {
    /**
     * OpenAI Integration name
     */
    integrationName: string;
    /**
     * Monitor resource name
     */
    monitorName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Capture properties of Open AI resource Integration.
 */
export interface GetOpenAIResult {
    /**
     * The id of the integration.
     */
    readonly id: string;
    /**
     * Name of the integration.
     */
    readonly name: string;
    /**
     * Open AI Integration details.
     */
    readonly properties: types.outputs.OpenAIIntegrationPropertiesResponse;
    /**
     * The type of the integration.
     */
    readonly type: string;
}
/**
 * Capture properties of Open AI resource Integration.
 * Azure REST API version: 2024-03-01.
 *
 * Other available API versions: 2024-01-01-preview.
 */
export function getOpenAIOutput(args: GetOpenAIOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOpenAIResult> {
    return pulumi.output(args).apply((a: any) => getOpenAI(a, opts))
}

export interface GetOpenAIOutputArgs {
    /**
     * OpenAI Integration name
     */
    integrationName: pulumi.Input<string>;
    /**
     * Monitor resource name
     */
    monitorName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}