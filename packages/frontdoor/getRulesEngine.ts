import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a Rules Engine Configuration with the specified name within the specified Front Door.
 *
 * Uses Azure REST API version 2021-06-01.
 *
 * Other available API versions: 2020-01-01, 2020-04-01, 2020-05-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native frontdoor [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getRulesEngine(args: GetRulesEngineArgs, opts?: pulumi.InvokeOptions): Promise<GetRulesEngineResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:frontdoor:getRulesEngine", {
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
    readonly rules?: types.outputs.RulesEngineRuleResponse[];
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets a Rules Engine Configuration with the specified name within the specified Front Door.
 *
 * Uses Azure REST API version 2021-06-01.
 *
 * Other available API versions: 2020-01-01, 2020-04-01, 2020-05-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native frontdoor [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getRulesEngineOutput(args: GetRulesEngineOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetRulesEngineResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:frontdoor:getRulesEngine", {
        "frontDoorName": args.frontDoorName,
        "resourceGroupName": args.resourceGroupName,
        "rulesEngineName": args.rulesEngineName,
    }, opts);
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