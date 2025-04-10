import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Description for Get function keys for a function in a web site, or a deployment slot.
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2020-10-01, 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function listWebAppFunctionKeys(args: ListWebAppFunctionKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppFunctionKeysResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:listWebAppFunctionKeys", {
        "functionName": args.functionName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListWebAppFunctionKeysArgs {
    /**
     * Function name.
     */
    functionName: string;
    /**
     * Site name.
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
export interface ListWebAppFunctionKeysResult {
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
     * Settings.
     */
    readonly properties: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Description for Get function keys for a function in a web site, or a deployment slot.
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2020-10-01, 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function listWebAppFunctionKeysOutput(args: ListWebAppFunctionKeysOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListWebAppFunctionKeysResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:web:listWebAppFunctionKeys", {
        "functionName": args.functionName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListWebAppFunctionKeysOutputArgs {
    /**
     * Function name.
     */
    functionName: pulumi.Input<string>;
    /**
     * Site name.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}