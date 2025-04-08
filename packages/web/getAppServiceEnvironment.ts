import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Description for Get the properties of an App Service Environment.
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2016-09-01, 2018-02-01, 2019-08-01, 2020-06-01, 2020-09-01, 2020-10-01, 2020-12-01, 2021-01-01, 2021-01-15, 2021-02-01, 2021-03-01, 2022-03-01, 2022-09-01, 2023-01-01, 2023-12-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native web [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getAppServiceEnvironment(args: GetAppServiceEnvironmentArgs, opts?: pulumi.InvokeOptions): Promise<GetAppServiceEnvironmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:getAppServiceEnvironment", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAppServiceEnvironmentArgs {
    /**
     * Name of the App Service Environment.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
}

/**
 * App Service Environment ARM resource.
 */
export interface GetAppServiceEnvironmentResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Custom settings for changing the behavior of the App Service Environment.
     */
    readonly clusterSettings?: types.outputs.NameValuePairResponse[];
    /**
     * Full view of the custom domain suffix configuration for ASEv3.
     */
    readonly customDnsSuffixConfiguration?: types.outputs.CustomDnsSuffixConfigurationResponse;
    /**
     * Dedicated Host Count
     */
    readonly dedicatedHostCount?: number;
    /**
     * DNS suffix of the App Service Environment.
     */
    readonly dnsSuffix?: string;
    /**
     * Scale factor for front-ends.
     */
    readonly frontEndScaleFactor?: number;
    /**
     * Flag that displays whether an ASE has linux workers or not
     */
    readonly hasLinuxWorkers: boolean;
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * Specifies which endpoints to serve internally in the Virtual Network for the App Service Environment.
     */
    readonly internalLoadBalancingMode?: string;
    /**
     * Number of IP SSL addresses reserved for the App Service Environment.
     */
    readonly ipsslAddressCount?: number;
    /**
     * Kind of resource. If the resource is an app, you can refer to https://github.com/Azure/app-service-linux-docs/blob/master/Things_You_Should_Know/kind_property.md#app-service-resource-kind-reference for details supported values for kind.
     */
    readonly kind?: string;
    /**
     * Resource Location.
     */
    readonly location: string;
    /**
     * Maximum number of VMs in the App Service Environment.
     */
    readonly maximumNumberOfMachines: number;
    /**
     * Number of front-end instances.
     */
    readonly multiRoleCount: number;
    /**
     * Front-end VM size, e.g. "Medium", "Large".
     */
    readonly multiSize?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * Full view of networking configuration for an ASE.
     */
    readonly networkingConfiguration?: types.outputs.AseV3NetworkingConfigurationResponse;
    /**
     * Provisioning state of the App Service Environment.
     */
    readonly provisioningState: string;
    /**
     * Current status of the App Service Environment.
     */
    readonly status: string;
    /**
     * <code>true</code> if the App Service Environment is suspended; otherwise, <code>false</code>. The environment can be suspended, e.g. when the management endpoint is no longer available
     *  (most likely because NSG blocked the incoming traffic).
     */
    readonly suspended: boolean;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * Whether an upgrade is available for this App Service Environment.
     */
    readonly upgradeAvailability: string;
    /**
     * Upgrade Preference
     */
    readonly upgradePreference?: string;
    /**
     * User added ip ranges to whitelist on ASE db
     */
    readonly userWhitelistedIpRanges?: string[];
    /**
     * Description of the Virtual Network.
     */
    readonly virtualNetwork: types.outputs.VirtualNetworkProfileResponse;
    /**
     * Whether or not this App Service Environment is zone-redundant.
     */
    readonly zoneRedundant?: boolean;
}
/**
 * Description for Get the properties of an App Service Environment.
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2016-09-01, 2018-02-01, 2019-08-01, 2020-06-01, 2020-09-01, 2020-10-01, 2020-12-01, 2021-01-01, 2021-01-15, 2021-02-01, 2021-03-01, 2022-03-01, 2022-09-01, 2023-01-01, 2023-12-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native web [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getAppServiceEnvironmentOutput(args: GetAppServiceEnvironmentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAppServiceEnvironmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:web:getAppServiceEnvironment", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAppServiceEnvironmentOutputArgs {
    /**
     * Name of the App Service Environment.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}