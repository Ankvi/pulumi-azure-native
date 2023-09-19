import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a deployment by its ID for an app, or a deployment slot.
 */
export function getWebAppDeploymentSlot(args: GetWebAppDeploymentSlotArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppDeploymentSlotResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web/v20201001:getWebAppDeploymentSlot", {
        "id": args.id,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "slot": args.slot,
    }, opts);
}

export interface GetWebAppDeploymentSlotArgs {
    /**
     * Deployment ID.
     */
    id: string;
    /**
     * Name of the app.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
    /**
     * Name of the deployment slot. If a slot is not specified, the API gets a deployment for the production slot.
     */
    slot: string;
}

/**
 * User credentials used for publishing activity.
 */
export interface GetWebAppDeploymentSlotResult {
    /**
     * True if deployment is currently active, false if completed and null if not started.
     */
    readonly active?: boolean;
    /**
     * Who authored the deployment.
     */
    readonly author?: string;
    /**
     * Author email.
     */
    readonly authorEmail?: string;
    /**
     * Who performed the deployment.
     */
    readonly deployer?: string;
    /**
     * Details on deployment.
     */
    readonly details?: string;
    /**
     * End time.
     */
    readonly endTime?: string;
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Details about deployment status.
     */
    readonly message?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * Start time.
     */
    readonly startTime?: string;
    /**
     * Deployment status.
     */
    readonly status?: number;
    /**
     * The system metadata relating to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Get a deployment by its ID for an app, or a deployment slot.
 */
export function getWebAppDeploymentSlotOutput(args: GetWebAppDeploymentSlotOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWebAppDeploymentSlotResult> {
    return pulumi.output(args).apply((a: any) => getWebAppDeploymentSlot(a, opts))
}

export interface GetWebAppDeploymentSlotOutputArgs {
    /**
     * Deployment ID.
     */
    id: pulumi.Input<string>;
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the deployment slot. If a slot is not specified, the API gets a deployment for the production slot.
     */
    slot: pulumi.Input<string>;
}
