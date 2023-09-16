import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets a Rules Engine Configuration with the specified name within the specified Front Door.
 */
export function getRulesEngine(args: GetRulesEngineArgs, opts?: pulumi.InvokeOptions): Promise<GetRulesEngineResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20210601:getRulesEngine", {
        "frontDoorName": args.frontDoorName,
        "resourceGroupName": args.resourceGroupName,
        "rulesEngineName": args.rulesEngineName,
    }, opts);
}

export interface GetRulesEngineArgs {
    /**
     * Name of the Front Door which is globally unique.
     */
    frontDoorName: string;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: string;
    /**
     * Name of the Rules Engine which is unique within the Front Door.
     */
    rulesEngineName: string;
}

/**
 * A rules engine configuration containing a list of rules that will run to modify the runtime behavior of the request and response.
 */
export interface GetRulesEngineResult {
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Resource status.
     */
    readonly resourceState: string;
    /**
     * A list of rules that define a particular Rules Engine Configuration.
     */
    readonly rules?: types.outputs.network.v20210601.RulesEngineRuleResponse[];
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets a Rules Engine Configuration with the specified name within the specified Front Door.
 */
export function getRulesEngineOutput(args: GetRulesEngineOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRulesEngineResult> {
    return pulumi.output(args).apply((a: any) => getRulesEngine(a, opts))
}

export interface GetRulesEngineOutputArgs {
    /**
     * Name of the Front Door which is globally unique.
     */
    frontDoorName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the Rules Engine which is unique within the Front Door.
     */
    rulesEngineName: pulumi.Input<string>;
}
