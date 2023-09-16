import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get a Import collector.
 */
export function getImportCollector(args: GetImportCollectorArgs, opts?: pulumi.InvokeOptions): Promise<GetImportCollectorResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:migrate/v20191001:getImportCollector", {
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
    readonly eTag?: string;
    readonly id: string;
    readonly name: string;
    readonly properties: types.outputs.migrate.v20191001.ImportCollectorPropertiesResponse;
    readonly type: string;
}
/**
 * Get a Import collector.
 */
export function getImportCollectorOutput(args: GetImportCollectorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetImportCollectorResult> {
    return pulumi.output(args).apply((a: any) => getImportCollector(a, opts))
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
