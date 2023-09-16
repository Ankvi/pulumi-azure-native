import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Description for Get function secrets for a function in a web site, or a deployment slot.
 */
export function listWebAppFunctionSecretsSlot(args: ListWebAppFunctionSecretsSlotArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppFunctionSecretsSlotResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web/v20220901:listWebAppFunctionSecretsSlot", {
        "functionName": args.functionName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "slot": args.slot,
    }, opts);
}

export interface ListWebAppFunctionSecretsSlotArgs {
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
    /**
     * Name of the deployment slot.
     */
    slot: string;
}

/**
 * Function secrets.
 */
export interface ListWebAppFunctionSecretsSlotResult {
    /**
     * Secret key.
     */
    readonly key?: string;
    /**
     * Trigger URL.
     */
    readonly triggerUrl?: string;
}
/**
 * Description for Get function secrets for a function in a web site, or a deployment slot.
 */
export function listWebAppFunctionSecretsSlotOutput(args: ListWebAppFunctionSecretsSlotOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListWebAppFunctionSecretsSlotResult> {
    return pulumi.output(args).apply((a: any) => listWebAppFunctionSecretsSlot(a, opts))
}

export interface ListWebAppFunctionSecretsSlotOutputArgs {
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
    /**
     * Name of the deployment slot.
     */
    slot: pulumi.Input<string>;
}
