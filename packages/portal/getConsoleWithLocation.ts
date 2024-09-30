import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the console for the user.
 * Azure REST API version: 2018-10-01.
 */
export function getConsoleWithLocation(args: GetConsoleWithLocationArgs, opts?: pulumi.InvokeOptions): Promise<GetConsoleWithLocationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:portal:getConsoleWithLocation", {
        "consoleName": args.consoleName,
        "location": args.location,
    }, opts);
}

export interface GetConsoleWithLocationArgs {
    /**
     * The name of the console
     */
    consoleName: string;
    /**
     * The provider location
     */
    location: string;
}

/**
 * Cloud shell console
 */
export interface GetConsoleWithLocationResult {
    /**
     * Cloud shell console properties.
     */
    readonly properties: types.outputs.ConsolePropertiesResponse;
}
/**
 * Gets the console for the user.
 * Azure REST API version: 2018-10-01.
 */
export function getConsoleWithLocationOutput(args: GetConsoleWithLocationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetConsoleWithLocationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:portal:getConsoleWithLocation", {
        "consoleName": args.consoleName,
        "location": args.location,
    }, opts);
}

export interface GetConsoleWithLocationOutputArgs {
    /**
     * The name of the console
     */
    consoleName: pulumi.Input<string>;
    /**
     * The provider location
     */
    location: pulumi.Input<string>;
}