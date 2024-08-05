import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets Customization Task error details
 * Azure REST API version: 2023-08-01-preview.
 *
 * Other available API versions: 2023-10-01-preview, 2024-05-01-preview, 2024-06-01-preview, 2024-07-01-preview.
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
 * Azure REST API version: 2023-08-01-preview.
 *
 * Other available API versions: 2023-10-01-preview, 2024-05-01-preview, 2024-06-01-preview, 2024-07-01-preview.
 */
export function getCustomizationTaskErrorDetailsOutput(args: GetCustomizationTaskErrorDetailsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCustomizationTaskErrorDetailsResult> {
    return pulumi.output(args).apply((a: any) => getCustomizationTaskErrorDetails(a, opts))
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