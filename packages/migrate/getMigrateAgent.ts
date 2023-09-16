import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the details of the modernizeProject agent.
 * Azure REST API version: 2022-05-01-preview.
 */
export function getMigrateAgent(args: GetMigrateAgentArgs, opts?: pulumi.InvokeOptions): Promise<GetMigrateAgentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:migrate:getMigrateAgent", {
        "agentName": args.agentName,
        "modernizeProjectName": args.modernizeProjectName,
        "resourceGroupName": args.resourceGroupName,
        "subscriptionId": args.subscriptionId,
    }, opts);
}

export interface GetMigrateAgentArgs {
    /**
     * MigrateAgent name.
     */
    agentName: string;
    /**
     * ModernizeProject name.
     */
    modernizeProjectName: string;
    /**
     * Name of the Azure Resource Group that project is part of.
     */
    resourceGroupName: string;
    /**
     * Azure Subscription Id in which project was created.
     */
    subscriptionId?: string;
}

/**
 * MigrateAgent model.
 */
export interface GetMigrateAgentResult {
    /**
     * Gets or sets the Id of the resource.
     */
    readonly id: string;
    /**
     * Gets or sets the name of the resource.
     */
    readonly name: string;
    /**
     * MigrateAgent model properties.
     */
    readonly properties: types.outputs.migrate.MigrateAgentModelPropertiesResponse;
    readonly systemData: types.outputs.migrate.MigrateAgentModelResponseSystemData;
    /**
     * Gets or sets the resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Gets or sets the type of the resource.
     */
    readonly type: string;
}
/**
 * Gets the details of the modernizeProject agent.
 * Azure REST API version: 2022-05-01-preview.
 */
export function getMigrateAgentOutput(args: GetMigrateAgentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMigrateAgentResult> {
    return pulumi.output(args).apply((a: any) => getMigrateAgent(a, opts))
}

export interface GetMigrateAgentOutputArgs {
    /**
     * MigrateAgent name.
     */
    agentName: pulumi.Input<string>;
    /**
     * ModernizeProject name.
     */
    modernizeProjectName: pulumi.Input<string>;
    /**
     * Name of the Azure Resource Group that project is part of.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Azure Subscription Id in which project was created.
     */
    subscriptionId?: pulumi.Input<string>;
}
