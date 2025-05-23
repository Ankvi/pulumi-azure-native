import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets Customization Task error details
 *
 * Uses Azure REST API version 2024-10-01-preview.
 *
 * Other available API versions: 2023-08-01-preview, 2023-10-01-preview, 2024-05-01-preview, 2024-06-01-preview, 2024-07-01-preview, 2024-08-01-preview, 2025-02-01, 2025-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native devcenter [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getCustomizationTaskErrorDetails(args: GetCustomizationTaskErrorDetailsArgs, opts?: pulumi.InvokeOptions): Promise<GetCustomizationTaskErrorDetailsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devcenter:getCustomizationTaskErrorDetails", {
        "catalogName": args.catalogName,
        "devCenterName": args.devCenterName,
        "resourceGroupName": args.resourceGroupName,
        "taskName": args.taskName,
    }, opts);
}

export interface GetCustomizationTaskErrorDetailsArgs {
    /**
     * The name of the Catalog.
     */
    catalogName: string;
    /**
     * The name of the devcenter.
     */
    devCenterName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the Task.
     */
    taskName: string;
}

/**
 * List of validator error details. Populated when changes are made to the resource or its dependent resources that impact the validity of the Catalog resource.
 */
export interface GetCustomizationTaskErrorDetailsResult {
    /**
     * Errors associated with resources synchronized from the catalog.
     */
    readonly errors: types.outputs.CatalogErrorDetailsResponse[];
}
/**
 * Gets Customization Task error details
 *
 * Uses Azure REST API version 2024-10-01-preview.
 *
 * Other available API versions: 2023-08-01-preview, 2023-10-01-preview, 2024-05-01-preview, 2024-06-01-preview, 2024-07-01-preview, 2024-08-01-preview, 2025-02-01, 2025-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native devcenter [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getCustomizationTaskErrorDetailsOutput(args: GetCustomizationTaskErrorDetailsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetCustomizationTaskErrorDetailsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:devcenter:getCustomizationTaskErrorDetails", {
        "catalogName": args.catalogName,
        "devCenterName": args.devCenterName,
        "resourceGroupName": args.resourceGroupName,
        "taskName": args.taskName,
    }, opts);
}

export interface GetCustomizationTaskErrorDetailsOutputArgs {
    /**
     * The name of the Catalog.
     */
    catalogName: pulumi.Input<string>;
    /**
     * The name of the devcenter.
     */
    devCenterName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Task.
     */
    taskName: pulumi.Input<string>;
}