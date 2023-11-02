import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Description for Gets the connection strings of an app.
 * Azure REST API version: 2022-09-01.
 *
 * Other available API versions: 2020-10-01.
 */
export function listWebAppConnectionStrings(args: ListWebAppConnectionStringsArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppConnectionStringsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:listWebAppConnectionStrings", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListWebAppConnectionStringsArgs {
    /**
     * Name of the app.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
}

/**
 * String dictionary resource.
 */
export interface ListWebAppConnectionStringsResult {
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * Connection strings.
     */
    readonly properties: {[key: string]: types.outputs.ConnStringValueTypePairResponse};
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Description for Gets the connection strings of an app.
 * Azure REST API version: 2022-09-01.
 *
 * Other available API versions: 2020-10-01.
 */
export function listWebAppConnectionStringsOutput(args: ListWebAppConnectionStringsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListWebAppConnectionStringsResult> {
    return pulumi.output(args).apply((a: any) => listWebAppConnectionStrings(a, opts))
}

export interface ListWebAppConnectionStringsOutputArgs {
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}
