import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * App Service plan.
 * Azure REST API version: 2022-09-01. Prior API version in Azure Native 1.x: 2020-12-01.
 *
 * Other available API versions: 2016-09-01, 2020-10-01, 2023-01-01, 2023-12-01, 2024-04-01.
 */
export class AppServicePlan extends pulumi.CustomResource {
    /**
     * Get an existing AppServicePlan resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AppServicePlan {
        return new AppServicePlan(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:web:AppServicePlan';

    /**
     * Returns true if the given object is an instance of AppServicePlan.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AppServicePlan {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AppServicePlan.__pulumiType;
    }

    /**
     * ServerFarm supports ElasticScale. Apps in this plan will scale as if the ServerFarm was ElasticPremium sku
     */
    public readonly elasticScaleEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * Extended Location.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse | undefined>;
    /**
     * The time when the server farm free offer expires.
     */
    public readonly freeOfferExpirationTime!: pulumi.Output<string | undefined>;
    /**
     * Geographical location for the App Service plan.
     */
    public /*out*/ readonly geoRegion!: pulumi.Output<string>;
    /**
     * Specification for the App Service Environment to use for the App Service plan.
     */
    public readonly hostingEnvironmentProfile!: pulumi.Output<types.outputs.HostingEnvironmentProfileResponse | undefined>;
    /**
     * If Hyper-V container app service plan <code>true</code>, <code>false</code> otherwise.
     */
    public readonly hyperV!: pulumi.Output<boolean | undefined>;
    /**
     * If <code>true</code>, this App Service Plan owns spot instances.
     */
    public readonly isSpot!: pulumi.Output<boolean | undefined>;
    /**
     * Obsolete: If Hyper-V container app service plan <code>true</code>, <code>false</code> otherwise.
     */
    public readonly isXenon!: pulumi.Output<boolean | undefined>;
    /**
     * Kind of resource.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Specification for the Kubernetes Environment to use for the App Service plan.
     */
    public readonly kubeEnvironmentProfile!: pulumi.Output<types.outputs.KubeEnvironmentProfileResponse | undefined>;
    /**
     * Resource Location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Maximum number of total workers allowed for this ElasticScaleEnabled App Service Plan
     */
    public readonly maximumElasticWorkerCount!: pulumi.Output<number | undefined>;
    /**
     * Maximum number of instances that can be assigned to this App Service plan.
     */
    public /*out*/ readonly maximumNumberOfWorkers!: pulumi.Output<number>;
    /**
     * Resource Name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Number of apps assigned to this App Service plan.
     */
    public /*out*/ readonly numberOfSites!: pulumi.Output<number>;
    /**
     * The number of instances that are assigned to this App Service plan.
     */
    public /*out*/ readonly numberOfWorkers!: pulumi.Output<number>;
    /**
     * If <code>true</code>, apps assigned to this App Service plan can be scaled independently.
     * If <code>false</code>, apps assigned to this App Service plan will scale to all instances of the plan.
     */
    public readonly perSiteScaling!: pulumi.Output<boolean | undefined>;
    /**
     * Provisioning state of the App Service Plan.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * If Linux app service plan <code>true</code>, <code>false</code> otherwise.
     */
    public readonly reserved!: pulumi.Output<boolean | undefined>;
    /**
     * Resource group of the App Service plan.
     */
    public /*out*/ readonly resourceGroup!: pulumi.Output<string>;
    /**
     * Description of a SKU for a scalable resource.
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuDescriptionResponse | undefined>;
    /**
     * The time when the server farm expires. Valid only if it is a spot server farm.
     */
    public readonly spotExpirationTime!: pulumi.Output<string | undefined>;
    /**
     * App Service plan status.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * App Service plan subscription.
     */
    public /*out*/ readonly subscription!: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Scaling worker count.
     */
    public readonly targetWorkerCount!: pulumi.Output<number | undefined>;
    /**
     * Scaling worker size ID.
     */
    public readonly targetWorkerSizeId!: pulumi.Output<number | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Target worker tier assigned to the App Service plan.
     */
    public readonly workerTierName!: pulumi.Output<string | undefined>;
    /**
     * If <code>true</code>, this App Service Plan will perform availability zone balancing.
     * If <code>false</code>, this App Service Plan will not perform availability zone balancing.
     */
    public readonly zoneRedundant!: pulumi.Output<boolean | undefined>;

    /**
     * Create a AppServicePlan resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AppServicePlanArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["elasticScaleEnabled"] = args ? args.elasticScaleEnabled : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["freeOfferExpirationTime"] = args ? args.freeOfferExpirationTime : undefined;
            resourceInputs["hostingEnvironmentProfile"] = args ? args.hostingEnvironmentProfile : undefined;
            resourceInputs["hyperV"] = (args ? args.hyperV : undefined) ?? false;
            resourceInputs["isSpot"] = args ? args.isSpot : undefined;
            resourceInputs["isXenon"] = (args ? args.isXenon : undefined) ?? false;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["kubeEnvironmentProfile"] = args ? args.kubeEnvironmentProfile : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["maximumElasticWorkerCount"] = args ? args.maximumElasticWorkerCount : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["perSiteScaling"] = (args ? args.perSiteScaling : undefined) ?? false;
            resourceInputs["reserved"] = (args ? args.reserved : undefined) ?? false;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["spotExpirationTime"] = args ? args.spotExpirationTime : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["targetWorkerCount"] = args ? args.targetWorkerCount : undefined;
            resourceInputs["targetWorkerSizeId"] = args ? args.targetWorkerSizeId : undefined;
            resourceInputs["workerTierName"] = args ? args.workerTierName : undefined;
            resourceInputs["zoneRedundant"] = (args ? args.zoneRedundant : undefined) ?? false;
            resourceInputs["geoRegion"] = undefined /*out*/;
            resourceInputs["maximumNumberOfWorkers"] = undefined /*out*/;
            resourceInputs["numberOfSites"] = undefined /*out*/;
            resourceInputs["numberOfWorkers"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceGroup"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["subscription"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["elasticScaleEnabled"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["freeOfferExpirationTime"] = undefined /*out*/;
            resourceInputs["geoRegion"] = undefined /*out*/;
            resourceInputs["hostingEnvironmentProfile"] = undefined /*out*/;
            resourceInputs["hyperV"] = undefined /*out*/;
            resourceInputs["isSpot"] = undefined /*out*/;
            resourceInputs["isXenon"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["kubeEnvironmentProfile"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["maximumElasticWorkerCount"] = undefined /*out*/;
            resourceInputs["maximumNumberOfWorkers"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["numberOfSites"] = undefined /*out*/;
            resourceInputs["numberOfWorkers"] = undefined /*out*/;
            resourceInputs["perSiteScaling"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["reserved"] = undefined /*out*/;
            resourceInputs["resourceGroup"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["spotExpirationTime"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["subscription"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["targetWorkerCount"] = undefined /*out*/;
            resourceInputs["targetWorkerSizeId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["workerTierName"] = undefined /*out*/;
            resourceInputs["zoneRedundant"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:web/v20150801:AppServicePlan" }, { type: "azure-native:web/v20160901:AppServicePlan" }, { type: "azure-native:web/v20180201:AppServicePlan" }, { type: "azure-native:web/v20190801:AppServicePlan" }, { type: "azure-native:web/v20200601:AppServicePlan" }, { type: "azure-native:web/v20200901:AppServicePlan" }, { type: "azure-native:web/v20201001:AppServicePlan" }, { type: "azure-native:web/v20201201:AppServicePlan" }, { type: "azure-native:web/v20210101:AppServicePlan" }, { type: "azure-native:web/v20210115:AppServicePlan" }, { type: "azure-native:web/v20210201:AppServicePlan" }, { type: "azure-native:web/v20210301:AppServicePlan" }, { type: "azure-native:web/v20220301:AppServicePlan" }, { type: "azure-native:web/v20220901:AppServicePlan" }, { type: "azure-native:web/v20230101:AppServicePlan" }, { type: "azure-native:web/v20231201:AppServicePlan" }, { type: "azure-native:web/v20240401:AppServicePlan" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AppServicePlan.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AppServicePlan resource.
 */
export interface AppServicePlanArgs {
    /**
     * ServerFarm supports ElasticScale. Apps in this plan will scale as if the ServerFarm was ElasticPremium sku
     */
    elasticScaleEnabled?: pulumi.Input<boolean>;
    /**
     * Extended Location.
     */
    extendedLocation?: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * The time when the server farm free offer expires.
     */
    freeOfferExpirationTime?: pulumi.Input<string>;
    /**
     * Specification for the App Service Environment to use for the App Service plan.
     */
    hostingEnvironmentProfile?: pulumi.Input<types.inputs.HostingEnvironmentProfileArgs>;
    /**
     * If Hyper-V container app service plan <code>true</code>, <code>false</code> otherwise.
     */
    hyperV?: pulumi.Input<boolean>;
    /**
     * If <code>true</code>, this App Service Plan owns spot instances.
     */
    isSpot?: pulumi.Input<boolean>;
    /**
     * Obsolete: If Hyper-V container app service plan <code>true</code>, <code>false</code> otherwise.
     */
    isXenon?: pulumi.Input<boolean>;
    /**
     * Kind of resource.
     */
    kind?: pulumi.Input<string>;
    /**
     * Specification for the Kubernetes Environment to use for the App Service plan.
     */
    kubeEnvironmentProfile?: pulumi.Input<types.inputs.KubeEnvironmentProfileArgs>;
    /**
     * Resource Location.
     */
    location?: pulumi.Input<string>;
    /**
     * Maximum number of total workers allowed for this ElasticScaleEnabled App Service Plan
     */
    maximumElasticWorkerCount?: pulumi.Input<number>;
    /**
     * Name of the App Service plan.
     */
    name?: pulumi.Input<string>;
    /**
     * If <code>true</code>, apps assigned to this App Service plan can be scaled independently.
     * If <code>false</code>, apps assigned to this App Service plan will scale to all instances of the plan.
     */
    perSiteScaling?: pulumi.Input<boolean>;
    /**
     * If Linux app service plan <code>true</code>, <code>false</code> otherwise.
     */
    reserved?: pulumi.Input<boolean>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Description of a SKU for a scalable resource.
     */
    sku?: pulumi.Input<types.inputs.SkuDescriptionArgs>;
    /**
     * The time when the server farm expires. Valid only if it is a spot server farm.
     */
    spotExpirationTime?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Scaling worker count.
     */
    targetWorkerCount?: pulumi.Input<number>;
    /**
     * Scaling worker size ID.
     */
    targetWorkerSizeId?: pulumi.Input<number>;
    /**
     * Target worker tier assigned to the App Service plan.
     */
    workerTierName?: pulumi.Input<string>;
    /**
     * If <code>true</code>, this App Service Plan will perform availability zone balancing.
     * If <code>false</code>, this App Service Plan will not perform availability zone balancing.
     */
    zoneRedundant?: pulumi.Input<boolean>;
}