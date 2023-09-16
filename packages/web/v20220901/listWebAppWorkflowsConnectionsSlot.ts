import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Workflow properties definition.
 */
export function listWebAppWorkflowsConnectionsSlot(args: ListWebAppWorkflowsConnectionsSlotArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppWorkflowsConnectionsSlotResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web/v20220901:listWebAppWorkflowsConnectionsSlot", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "slot": args.slot,
    }, opts);
}

export interface ListWebAppWorkflowsConnectionsSlotArgs {
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
 * Workflow properties definition.
 */
export interface ListWebAppWorkflowsConnectionsSlotResult {
    /**
     * The resource id.
     */
    readonly id: string;
    /**
     * The resource kind.
     */
    readonly kind?: string;
    /**
     * The resource location.
     */
    readonly location?: string;
    /**
     * Gets the resource name.
     */
    readonly name: string;
    /**
     * Additional workflow properties.
     */
    readonly properties: types.outputs.web.v20220901.WorkflowEnvelopeResponseProperties;
    /**
     * Gets the resource type.
     */
    readonly type: string;
}
/**
 * Workflow properties definition.
 */
export function listWebAppWorkflowsConnectionsSlotOutput(args: ListWebAppWorkflowsConnectionsSlotOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListWebAppWorkflowsConnectionsSlotResult> {
    return pulumi.output(args).apply((a: any) => listWebAppWorkflowsConnectionsSlot(a, opts))
}

export interface ListWebAppWorkflowsConnectionsSlotOutputArgs {
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
