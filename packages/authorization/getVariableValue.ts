import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * This operation retrieves a single variable value; given its name, subscription it was created at and the variable it's created for.
 * Azure REST API version: 2022-08-01-preview.
 */
export function getVariableValue(args: GetVariableValueArgs, opts?: pulumi.InvokeOptions): Promise<GetVariableValueResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:authorization:getVariableValue", {
        "variableName": args.variableName,
        "variableValueName": args.variableValueName,
    }, opts);
}

export interface GetVariableValueArgs {
    /**
     * The name of the variable to operate on.
     */
    variableName: string;
    /**
     * The name of the variable value to operate on.
     */
    variableValueName: string;
}

/**
 * The variable value.
 */
export interface GetVariableValueResult {
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
    readonly systemData: types.outputs.authorization.SystemDataResponse;
    /**
     * The type of the resource (Microsoft.Authorization/variables/values).
     */
    readonly type: string;
    /**
     * Variable value column value array.
     */
    readonly values: types.outputs.authorization.PolicyVariableValueColumnValueResponse[];
}
/**
 * This operation retrieves a single variable value; given its name, subscription it was created at and the variable it's created for.
 * Azure REST API version: 2022-08-01-preview.
 */
export function getVariableValueOutput(args: GetVariableValueOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVariableValueResult> {
    return pulumi.output(args).apply((a: any) => getVariableValue(a, opts))
}

export interface GetVariableValueOutputArgs {
    /**
     * The name of the variable to operate on.
     */
    variableName: pulumi.Input<string>;
    /**
     * The name of the variable value to operate on.
     */
    variableValueName: pulumi.Input<string>;
}
