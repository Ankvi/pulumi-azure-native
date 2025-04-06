import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Resource representation of a workflow
 *
 * Uses Azure REST API version 2023-08-01.
 *
 * Other available API versions: 2022-10-11-preview, 2024-05-01-preview, 2024-08-01-preview, 2025-03-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native devhub [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getWorkflow(args: GetWorkflowArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkflowResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devhub:getWorkflow", {
        "resourceGroupName": args.resourceGroupName,
        "workflowName": args.workflowName,
    }, opts);
}

export interface GetWorkflowArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the workflow resource.
     */
    workflowName: string;
}

/**
 * Resource representation of a workflow
 */
export interface GetWorkflowResult {
    /**
     * The name of the app.
     */
    readonly appName?: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The version of the language image used for building the code in the generated dockerfile.
     */
    readonly builderVersion?: string;
    /**
     * The mode of generation to be used for generating Dockerfiles.
     */
    readonly dockerfileGenerationMode?: string;
    /**
     * The directory to output the generated Dockerfile to.
     */
    readonly dockerfileOutputDirectory?: string;
    /**
     * The programming language used.
     */
    readonly generationLanguage?: string;
    /**
     * Profile of a github workflow.
     */
    readonly githubWorkflowProfile?: types.outputs.GitHubWorkflowProfileResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the image to be generated.
     */
    readonly imageName?: string;
    /**
     * The tag to apply to the generated image.
     */
    readonly imageTag?: string;
    /**
     * The version of the language image used for execution in the generated dockerfile.
     */
    readonly languageVersion?: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The mode of generation to be used for generating Manifest.
     */
    readonly manifestGenerationMode?: string;
    /**
     * The directory to output the generated manifests to.
     */
    readonly manifestOutputDirectory?: string;
    /**
     * Determines the type of manifests to be generated.
     */
    readonly manifestType?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The namespace to deploy the application to.
     */
    readonly namespace?: string;
    /**
     * The port the application is exposed on.
     */
    readonly port?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Resource representation of a workflow
 *
 * Uses Azure REST API version 2023-08-01.
 *
 * Other available API versions: 2022-10-11-preview, 2024-05-01-preview, 2024-08-01-preview, 2025-03-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native devhub [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getWorkflowOutput(args: GetWorkflowOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetWorkflowResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:devhub:getWorkflow", {
        "resourceGroupName": args.resourceGroupName,
        "workflowName": args.workflowName,
    }, opts);
}

export interface GetWorkflowOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workflow resource.
     */
    workflowName: pulumi.Input<string>;
}