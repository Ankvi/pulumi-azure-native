import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Description for Get host secrets for a function app.
 */
export function listWebAppHostKeys(args: ListWebAppHostKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppHostKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web/v20220901:listWebAppHostKeys", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListWebAppHostKeysArgs {
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
 * Functions host level keys.
 */
export interface ListWebAppHostKeysResult {
    /**
     * Host level function keys.
     */
    readonly functionKeys?: {[key: string]: string};
    /**
     * Secret key.
     */
    readonly masterKey?: string;
    /**
     * System keys.
     */
    readonly systemKeys?: {[key: string]: string};
}
/**
 * Description for Get host secrets for a function app.
 */
export function listWebAppHostKeysOutput(args: ListWebAppHostKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListWebAppHostKeysResult> {
    return pulumi.output(args).apply((a: any) => listWebAppHostKeys(a, opts))
}

export interface ListWebAppHostKeysOutputArgs {
    /**
     * Site name.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}
