import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Description for Get function keys for a function in a web site, or a deployment slot.
 */
export function listWebAppFunctionKeys(args: ListWebAppFunctionKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppFunctionKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web/v20220901:listWebAppFunctionKeys", {
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
 */
export function listWebAppFunctionKeysOutput(args: ListWebAppFunctionKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListWebAppFunctionKeysResult> {
    return pulumi.output(args).apply((a: any) => listWebAppFunctionKeys(a, opts))
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