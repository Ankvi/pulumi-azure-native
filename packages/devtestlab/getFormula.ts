import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get formula.
 * Azure REST API version: 2018-09-15.
 *
 * Other available API versions: 2016-05-15.
 */
export function getFormula(args: GetFormulaArgs, opts?: pulumi.InvokeOptions): Promise<GetFormulaResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devtestlab:getFormula", {
        "expand": args.expand,
        "labName": args.labName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFormulaArgs {
    /**
     * Specify the $expand query. Example: 'properties($select=description)'
     */
    expand?: string;
    /**
     * The name of the lab.
     */
    labName: string;
    /**
     * The name of the formula.
     */
    name: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * A formula for creating a VM, specifying an image base and other parameters
 */
export interface GetFormulaResult {
    /**
     * The author of the formula.
     */
    readonly author: string;
    /**
     * The creation date of the formula.
     */
    readonly creationDate: string;
    /**
     * The description of the formula.
     */
    readonly description?: string;
    /**
     * The content of the formula.
     */
    readonly formulaContent?: types.outputs.LabVirtualMachineCreationParameterResponse;
    /**
     * The identifier of the resource.
     */
    readonly id: string;
    /**
     * The location of the resource.
     */
    readonly location?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The OS type of the formula.
     */
    readonly osType?: string;
    /**
     * The provisioning status of the resource.
     */
    readonly provisioningState: string;
    /**
     * The tags of the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource.
     */
    readonly type: string;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    readonly uniqueIdentifier: string;
    /**
     * Information about a VM from which a formula is to be created.
     */
    readonly vm?: types.outputs.FormulaPropertiesFromVmResponse;
}
/**
 * Get formula.
 * Azure REST API version: 2018-09-15.
 *
 * Other available API versions: 2016-05-15.
 */
export function getFormulaOutput(args: GetFormulaOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFormulaResult> {
    return pulumi.output(args).apply((a: any) => getFormula(a, opts))
}

export interface GetFormulaOutputArgs {
    /**
     * Specify the $expand query. Example: 'properties($select=description)'
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the lab.
     */
    labName: pulumi.Input<string>;
    /**
     * The name of the formula.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
