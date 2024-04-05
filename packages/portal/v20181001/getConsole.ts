import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the console for the user.
 */
export function getConsole(args: GetConsoleArgs, opts?: pulumi.InvokeOptions): Promise<GetConsoleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:portal/v20181001:getConsole", {
        "consoleName": args.consoleName,
    }, opts);
}

export interface GetConsoleArgs {
    /**
     * The name of the console
     */
    consoleName: string;
}

/**
 * Cloud shell console
 */
export interface GetConsoleResult {
    /**
     * Cloud shell console properties.
     */
    readonly properties: types.outputs.ConsolePropertiesResponse;
}
/**
 * Gets the console for the user.
 */
export function getConsoleOutput(args: GetConsoleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetConsoleResult> {
    return pulumi.output(args).apply((a: any) => getConsole(a, opts))
}

export interface GetConsoleOutputArgs {
    /**
     * The name of the console
     */
    consoleName: pulumi.Input<string>;
}