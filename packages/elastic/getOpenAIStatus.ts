import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Status of the OpenAI Integration
 *
 * Uses Azure REST API version 2024-03-01.
 *
 * Other available API versions: 2024-01-01-preview, 2024-05-01-preview, 2024-06-15-preview, 2024-10-01-preview, 2025-01-15-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native elastic [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getOpenAIStatus(args: GetOpenAIStatusArgs, opts?: pulumi.InvokeOptions): Promise<GetOpenAIStatusResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:elastic:getOpenAIStatus", {
        "integrationName": args.integrationName,
        "monitorName": args.monitorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetOpenAIStatusArgs {
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
 * Status of the OpenAI Integration
 */
export interface GetOpenAIStatusResult {
    /**
     * Status of the OpenAI Integration
     */
    readonly properties: types.outputs.OpenAIIntegrationStatusResponsePropertiesResponse;
}
/**
 * Status of the OpenAI Integration
 *
 * Uses Azure REST API version 2024-03-01.
 *
 * Other available API versions: 2024-01-01-preview, 2024-05-01-preview, 2024-06-15-preview, 2024-10-01-preview, 2025-01-15-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native elastic [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getOpenAIStatusOutput(args: GetOpenAIStatusOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetOpenAIStatusResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:elastic:getOpenAIStatus", {
        "integrationName": args.integrationName,
        "monitorName": args.monitorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetOpenAIStatusOutputArgs {
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