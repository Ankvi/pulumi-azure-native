import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Description for Get a deployment by its ID for an app, or a deployment slot.
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2020-10-01, 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function getWebAppDeployment(args: GetWebAppDeploymentArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppDeploymentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:getWebAppDeployment", {
        "id": args.id,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetWebAppDeploymentArgs {
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
}

/**
 * User credentials used for publishing activity.
 */
export interface GetWebAppDeploymentResult {
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
     * Resource type.
     */
    readonly type: string;
}
/**
 * Description for Get a deployment by its ID for an app, or a deployment slot.
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2020-10-01, 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function getWebAppDeploymentOutput(args: GetWebAppDeploymentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetWebAppDeploymentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:web:getWebAppDeployment", {
        "id": args.id,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetWebAppDeploymentOutputArgs {
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
}