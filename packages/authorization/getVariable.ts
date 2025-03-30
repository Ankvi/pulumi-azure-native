import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * This operation retrieves a single variable, given its name and the subscription it was created at.
 *
 * Uses Azure REST API version 2022-08-01-preview.
 *
 * Other available API versions: 2024-12-01-preview.
 */
export function getVariable(args: GetVariableArgs, opts?: pulumi.InvokeOptions): Promise<GetVariableResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:authorization:getVariable", {
        "variableName": args.variableName,
    }, opts);
}

export interface GetVariableArgs {
    /**
     * The name of the variable to operate on.
     */
    variableName: string;
}

/**
 * The variable.
 */
export interface GetVariableResult {
    /**
     * Variable column definitions.
     */
    readonly columns: types.outputs.PolicyVariableColumnResponse[];
    /**
     * The ID of the variable.
     */
    readonly id: string;
    /**
     * The name of the variable.
     */
    readonly name: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource (Microsoft.Authorization/variables).
     */
    readonly type: string;
}
/**
 * This operation retrieves a single variable, given its name and the subscription it was created at.
 *
 * Uses Azure REST API version 2022-08-01-preview.
 *
 * Other available API versions: 2024-12-01-preview.
 */
export function getVariableOutput(args: GetVariableOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetVariableResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:authorization:getVariable", {
        "variableName": args.variableName,
    }, opts);
}

export interface GetVariableOutputArgs {
    /**
     * The name of the variable to operate on.
     */
    variableName: pulumi.Input<string>;
}