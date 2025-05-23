import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Import collector.
 *
 * Uses Azure REST API version 2019-10-01.
 */
export function getImportCollector(args: GetImportCollectorArgs, opts?: pulumi.InvokeOptions): Promise<GetImportCollectorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:migrate:getImportCollector", {
        "importCollectorName": args.importCollectorName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetImportCollectorArgs {
    /**
     * Unique name of a Import collector within a project.
     */
    importCollectorName: string;
    /**
     * Name of the Azure Migrate project.
     */
    projectName: string;
    /**
     * Name of the Azure Resource Group that project is part of.
     */
    resourceGroupName: string;
}

export interface GetImportCollectorResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    readonly eTag?: string;
    readonly id: string;
    readonly name: string;
    readonly properties: types.outputs.ImportCollectorPropertiesResponse;
    readonly type: string;
}
/**
 * Get a Import collector.
 *
 * Uses Azure REST API version 2019-10-01.
 */
export function getImportCollectorOutput(args: GetImportCollectorOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetImportCollectorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:migrate:getImportCollector", {
        "importCollectorName": args.importCollectorName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetImportCollectorOutputArgs {
    /**
     * Unique name of a Import collector within a project.
     */
    importCollectorName: pulumi.Input<string>;
    /**
     * Name of the Azure Migrate project.
     */
    projectName: pulumi.Input<string>;
    /**
     * Name of the Azure Resource Group that project is part of.
     */
    resourceGroupName: pulumi.Input<string>;
}