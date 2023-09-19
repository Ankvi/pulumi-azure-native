import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Description for Get an App Service plan.
 * Azure REST API version: 2022-09-01.
 */
export function getAppServicePlan(args: GetAppServicePlanArgs, opts?: pulumi.InvokeOptions): Promise<GetAppServicePlanResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:getAppServicePlan", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAppServicePlanArgs {
    /**
     * Name of the App Service plan.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
}

/**
 * App Service plan.
 */
export interface GetAppServicePlanResult {
    /**
     * ServerFarm supports ElasticScale. Apps in this plan will scale as if the ServerFarm was ElasticPremium sku
     */
    readonly elasticScaleEnabled?: boolean;
    /**
     * Extended Location.
     */
    readonly extendedLocation?: types.outputs.ExtendedLocationResponse;
    /**
     * The time when the server farm free offer expires.
     */
    readonly freeOfferExpirationTime?: string;
    /**
     * Geographical location for the App Service plan.
     */
    readonly geoRegion: string;
    /**
     * Specification for the App Service Environment to use for the App Service plan.
     */
    readonly hostingEnvironmentProfile?: types.outputs.HostingEnvironmentProfileResponse;
    /**
     * If Hyper-V container app service plan <code>true</code>, <code>false</code> otherwise.
     */
    readonly hyperV?: boolean;
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * If <code>true</code>, this App Service Plan owns spot instances.
     */
    readonly isSpot?: boolean;
    /**
     * Obsolete: If Hyper-V container app service plan <code>true</code>, <code>false</code> otherwise.
     */
    readonly isXenon?: boolean;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Specification for the Kubernetes Environment to use for the App Service plan.
     */
    readonly kubeEnvironmentProfile?: types.outputs.KubeEnvironmentProfileResponse;
    /**
     * Resource Location.
     */
    readonly location: string;
    /**
     * Maximum number of total workers allowed for this ElasticScaleEnabled App Service Plan
     */
    readonly maximumElasticWorkerCount?: number;
    /**
     * Maximum number of instances that can be assigned to this App Service plan.
     */
    readonly maximumNumberOfWorkers: number;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * Number of apps assigned to this App Service plan.
     */
    readonly numberOfSites: number;
    /**
     * The number of instances that are assigned to this App Service plan.
     */
    readonly numberOfWorkers: number;
    /**
     * If <code>true</code>, apps assigned to this App Service plan can be scaled independently.
     * If <code>false</code>, apps assigned to this App Service plan will scale to all instances of the plan.
     */
    readonly perSiteScaling?: boolean;
    /**
     * Provisioning state of the App Service Plan.
     */
    readonly provisioningState: string;
    /**
     * If Linux app service plan <code>true</code>, <code>false</code> otherwise.
     */
    readonly reserved?: boolean;
    /**
     * Resource group of the App Service plan.
     */
    readonly resourceGroup: string;
    /**
     * Description of a SKU for a scalable resource.
     */
    readonly sku?: types.outputs.SkuDescriptionResponse;
    /**
     * The time when the server farm expires. Valid only if it is a spot server farm.
     */
    readonly spotExpirationTime?: string;
    /**
     * App Service plan status.
     */
    readonly status: string;
    /**
     * App Service plan subscription.
     */
    readonly subscription: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Scaling worker count.
     */
    readonly targetWorkerCount?: number;
    /**
     * Scaling worker size ID.
     */
    readonly targetWorkerSizeId?: number;
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * Target worker tier assigned to the App Service plan.
     */
    readonly workerTierName?: string;
    /**
     * If <code>true</code>, this App Service Plan will perform availability zone balancing.
     * If <code>false</code>, this App Service Plan will not perform availability zone balancing.
     */
    readonly zoneRedundant?: boolean;
}
/**
 * Description for Get an App Service plan.
 * Azure REST API version: 2022-09-01.
 */
export function getAppServicePlanOutput(args: GetAppServicePlanOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAppServicePlanResult> {
    return pulumi.output(args).apply((a: any) => getAppServicePlan(a, opts))
}

export interface GetAppServicePlanOutputArgs {
    /**
     * Name of the App Service plan.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}
