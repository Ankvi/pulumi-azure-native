import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Description for Get a deployment by its ID for an app, or a deployment slot.
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2016-08-01, 2018-02-01, 2018-11-01, 2019-08-01, 2020-06-01, 2020-09-01, 2020-10-01, 2020-12-01, 2021-01-01, 2021-01-15, 2021-02-01, 2021-03-01, 2022-03-01, 2022-09-01, 2023-01-01, 2023-12-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native web [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getWebAppDeploymentSlot(args: GetWebAppDeploymentSlotArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppDeploymentSlotResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:getWebAppDeploymentSlot", {
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2016-08-01, 2018-02-01, 2018-11-01, 2019-08-01, 2020-06-01, 2020-09-01, 2020-10-01, 2020-12-01, 2021-01-01, 2021-01-15, 2021-02-01, 2021-03-01, 2022-03-01, 2022-09-01, 2023-01-01, 2023-12-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native web [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getWebAppDeploymentSlotOutput(args: GetWebAppDeploymentSlotOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetWebAppDeploymentSlotResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:web:getWebAppDeploymentSlot", {
        "id": args.id,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "slot": args.slot,
    }, opts);
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