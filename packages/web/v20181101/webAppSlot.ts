import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * A web app, a mobile app backend, or an API app.
 */
export class WebAppSlot extends pulumi.CustomResource {
    /**
     * Get an existing WebAppSlot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebAppSlot {
        return new WebAppSlot(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:web/v20181101:WebAppSlot';

    /**
     * Returns true if the given object is an instance of WebAppSlot.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebAppSlot {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebAppSlot.__pulumiType;
    }

    /**
     * Management information availability state for the app.
     */
    public /*out*/ readonly availabilityState!: pulumi.Output<string>;
    /**
     * <code>true</code> to enable client affinity; <code>false</code> to stop sending session affinity cookies, which route client requests in the same session to the same instance. Default is <code>true</code>.
     */
    public readonly clientAffinityEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * <code>true</code> to enable client certificate authentication (TLS mutual authentication); otherwise, <code>false</code>. Default is <code>false</code>.
     */
    public readonly clientCertEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * client certificate authentication comma-separated exclusion paths
     */
    public readonly clientCertExclusionPaths!: pulumi.Output<string | undefined>;
    /**
     * Size of the function container.
     */
    public readonly containerSize!: pulumi.Output<number | undefined>;
    /**
     * Maximum allowed daily memory-time quota (applicable on dynamic apps only).
     */
    public readonly dailyMemoryTimeQuota!: pulumi.Output<number | undefined>;
    /**
     * Default hostname of the app. Read-only.
     */
    public /*out*/ readonly defaultHostName!: pulumi.Output<string>;
    /**
     * <code>true</code> if the app is enabled; otherwise, <code>false</code>. Setting this value to false disables the app (takes the app offline).
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * Enabled hostnames for the app.Hostnames need to be assigned (see HostNames) AND enabled. Otherwise,
     * the app is not served on those hostnames.
     */
    public /*out*/ readonly enabledHostNames!: pulumi.Output<string[]>;
    /**
     * GeoDistributions for this site
     */
    public readonly geoDistributions!: pulumi.Output<types.outputs.web.v20181101.GeoDistributionResponse[] | undefined>;
    /**
     * Hostname SSL states are used to manage the SSL bindings for app's hostnames.
     */
    public readonly hostNameSslStates!: pulumi.Output<types.outputs.web.v20181101.HostNameSslStateResponse[] | undefined>;
    /**
     * Hostnames associated with the app.
     */
    public /*out*/ readonly hostNames!: pulumi.Output<string[]>;
    /**
     * <code>true</code> to disable the public hostnames of the app; otherwise, <code>false</code>.
     *  If <code>true</code>, the app is only accessible via API management process.
     */
    public readonly hostNamesDisabled!: pulumi.Output<boolean | undefined>;
    /**
     * App Service Environment to use for the app.
     */
    public readonly hostingEnvironmentProfile!: pulumi.Output<types.outputs.web.v20181101.HostingEnvironmentProfileResponse | undefined>;
    /**
     * HttpsOnly: configures a web site to accept only https requests. Issues redirect for
     * http requests
     */
    public readonly httpsOnly!: pulumi.Output<boolean | undefined>;
    /**
     * Hyper-V sandbox.
     */
    public readonly hyperV!: pulumi.Output<boolean | undefined>;
    /**
     * Managed service identity.
     */
    public readonly identity!: pulumi.Output<types.outputs.web.v20181101.ManagedServiceIdentityResponse | undefined>;
    /**
     * Specifies an operation id if this site has a pending operation.
     */
    public /*out*/ readonly inProgressOperationId!: pulumi.Output<string>;
    /**
     * <code>true</code> if the app is a default container; otherwise, <code>false</code>.
     */
    public /*out*/ readonly isDefaultContainer!: pulumi.Output<boolean>;
    /**
     * Obsolete: Hyper-V sandbox.
     */
    public readonly isXenon!: pulumi.Output<boolean | undefined>;
    /**
     * Kind of resource.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Last time the app was modified, in UTC. Read-only.
     */
    public /*out*/ readonly lastModifiedTimeUtc!: pulumi.Output<string>;
    /**
     * Resource Location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Maximum number of workers.
     * This only applies to Functions container.
     */
    public /*out*/ readonly maxNumberOfWorkers!: pulumi.Output<number>;
    /**
     * Resource Name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * List of IP addresses that the app uses for outbound connections (e.g. database access). Includes VIPs from tenants that site can be hosted with current settings. Read-only.
     */
    public /*out*/ readonly outboundIpAddresses!: pulumi.Output<string>;
    /**
     * List of IP addresses that the app uses for outbound connections (e.g. database access). Includes VIPs from all tenants. Read-only.
     */
    public /*out*/ readonly possibleOutboundIpAddresses!: pulumi.Output<string>;
    /**
     * Site redundancy mode
     */
    public readonly redundancyMode!: pulumi.Output<string | undefined>;
    /**
     * Name of the repository site.
     */
    public /*out*/ readonly repositorySiteName!: pulumi.Output<string>;
    /**
     * <code>true</code> if reserved; otherwise, <code>false</code>.
     */
    public readonly reserved!: pulumi.Output<boolean | undefined>;
    /**
     * Name of the resource group the app belongs to. Read-only.
     */
    public /*out*/ readonly resourceGroup!: pulumi.Output<string>;
    /**
     * <code>true</code> to stop SCM (KUDU) site when the app is stopped; otherwise, <code>false</code>. The default is <code>false</code>.
     */
    public readonly scmSiteAlsoStopped!: pulumi.Output<boolean | undefined>;
    /**
     * Resource ID of the associated App Service plan, formatted as: "/subscriptions/{subscriptionID}/resourceGroups/{groupName}/providers/Microsoft.Web/serverfarms/{appServicePlanName}".
     */
    public readonly serverFarmId!: pulumi.Output<string | undefined>;
    /**
     * Configuration of the app.
     */
    public readonly siteConfig!: pulumi.Output<types.outputs.web.v20181101.SiteConfigResponse | undefined>;
    /**
     * Status of the last deployment slot swap operation.
     */
    public /*out*/ readonly slotSwapStatus!: pulumi.Output<types.outputs.web.v20181101.SlotSwapStatusResponse>;
    /**
     * Current state of the app.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * App suspended till in case memory-time quota is exceeded.
     */
    public /*out*/ readonly suspendedTill!: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Specifies which deployment slot this app will swap into. Read-only.
     */
    public /*out*/ readonly targetSwapSlot!: pulumi.Output<string>;
    /**
     * Azure Traffic Manager hostnames associated with the app. Read-only.
     */
    public /*out*/ readonly trafficManagerHostNames!: pulumi.Output<string[]>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * State indicating whether the app has exceeded its quota usage. Read-only.
     */
    public /*out*/ readonly usageState!: pulumi.Output<string>;

    /**
     * Create a WebAppSlot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppSlotArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["clientAffinityEnabled"] = args ? args.clientAffinityEnabled : undefined;
            resourceInputs["clientCertEnabled"] = args ? args.clientCertEnabled : undefined;
            resourceInputs["clientCertExclusionPaths"] = args ? args.clientCertExclusionPaths : undefined;
            resourceInputs["cloningInfo"] = args ? args.cloningInfo : undefined;
            resourceInputs["containerSize"] = args ? args.containerSize : undefined;
            resourceInputs["dailyMemoryTimeQuota"] = args ? args.dailyMemoryTimeQuota : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["geoDistributions"] = args ? args.geoDistributions : undefined;
            resourceInputs["hostNameSslStates"] = args ? args.hostNameSslStates : undefined;
            resourceInputs["hostNamesDisabled"] = args ? args.hostNamesDisabled : undefined;
            resourceInputs["hostingEnvironmentProfile"] = args ? args.hostingEnvironmentProfile : undefined;
            resourceInputs["httpsOnly"] = args ? args.httpsOnly : undefined;
            resourceInputs["hyperV"] = (args ? args.hyperV : undefined) ?? false;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["isXenon"] = (args ? args.isXenon : undefined) ?? false;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["redundancyMode"] = args ? args.redundancyMode : undefined;
            resourceInputs["reserved"] = (args ? args.reserved : undefined) ?? false;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["scmSiteAlsoStopped"] = (args ? args.scmSiteAlsoStopped : undefined) ?? false;
            resourceInputs["serverFarmId"] = args ? args.serverFarmId : undefined;
            resourceInputs["siteConfig"] = args ? (args.siteConfig ? pulumi.output(args.siteConfig).apply(types.inputs.web.v20181101.siteConfigArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["slot"] = args ? args.slot : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["availabilityState"] = undefined /*out*/;
            resourceInputs["defaultHostName"] = undefined /*out*/;
            resourceInputs["enabledHostNames"] = undefined /*out*/;
            resourceInputs["hostNames"] = undefined /*out*/;
            resourceInputs["inProgressOperationId"] = undefined /*out*/;
            resourceInputs["isDefaultContainer"] = undefined /*out*/;
            resourceInputs["lastModifiedTimeUtc"] = undefined /*out*/;
            resourceInputs["maxNumberOfWorkers"] = undefined /*out*/;
            resourceInputs["outboundIpAddresses"] = undefined /*out*/;
            resourceInputs["possibleOutboundIpAddresses"] = undefined /*out*/;
            resourceInputs["repositorySiteName"] = undefined /*out*/;
            resourceInputs["resourceGroup"] = undefined /*out*/;
            resourceInputs["slotSwapStatus"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["suspendedTill"] = undefined /*out*/;
            resourceInputs["targetSwapSlot"] = undefined /*out*/;
            resourceInputs["trafficManagerHostNames"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["usageState"] = undefined /*out*/;
        } else {
            resourceInputs["availabilityState"] = undefined /*out*/;
            resourceInputs["clientAffinityEnabled"] = undefined /*out*/;
            resourceInputs["clientCertEnabled"] = undefined /*out*/;
            resourceInputs["clientCertExclusionPaths"] = undefined /*out*/;
            resourceInputs["containerSize"] = undefined /*out*/;
            resourceInputs["dailyMemoryTimeQuota"] = undefined /*out*/;
            resourceInputs["defaultHostName"] = undefined /*out*/;
            resourceInputs["enabled"] = undefined /*out*/;
            resourceInputs["enabledHostNames"] = undefined /*out*/;
            resourceInputs["geoDistributions"] = undefined /*out*/;
            resourceInputs["hostNameSslStates"] = undefined /*out*/;
            resourceInputs["hostNames"] = undefined /*out*/;
            resourceInputs["hostNamesDisabled"] = undefined /*out*/;
            resourceInputs["hostingEnvironmentProfile"] = undefined /*out*/;
            resourceInputs["httpsOnly"] = undefined /*out*/;
            resourceInputs["hyperV"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["inProgressOperationId"] = undefined /*out*/;
            resourceInputs["isDefaultContainer"] = undefined /*out*/;
            resourceInputs["isXenon"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["lastModifiedTimeUtc"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["maxNumberOfWorkers"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["outboundIpAddresses"] = undefined /*out*/;
            resourceInputs["possibleOutboundIpAddresses"] = undefined /*out*/;
            resourceInputs["redundancyMode"] = undefined /*out*/;
            resourceInputs["repositorySiteName"] = undefined /*out*/;
            resourceInputs["reserved"] = undefined /*out*/;
            resourceInputs["resourceGroup"] = undefined /*out*/;
            resourceInputs["scmSiteAlsoStopped"] = undefined /*out*/;
            resourceInputs["serverFarmId"] = undefined /*out*/;
            resourceInputs["siteConfig"] = undefined /*out*/;
            resourceInputs["slotSwapStatus"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["suspendedTill"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["targetSwapSlot"] = undefined /*out*/;
            resourceInputs["trafficManagerHostNames"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["usageState"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:web:WebAppSlot" }, { type: "azure-native:web/v20150801:WebAppSlot" }, { type: "azure-native:web/v20160801:WebAppSlot" }, { type: "azure-native:web/v20180201:WebAppSlot" }, { type: "azure-native:web/v20190801:WebAppSlot" }, { type: "azure-native:web/v20200601:WebAppSlot" }, { type: "azure-native:web/v20200901:WebAppSlot" }, { type: "azure-native:web/v20201001:WebAppSlot" }, { type: "azure-native:web/v20201201:WebAppSlot" }, { type: "azure-native:web/v20210101:WebAppSlot" }, { type: "azure-native:web/v20210115:WebAppSlot" }, { type: "azure-native:web/v20210201:WebAppSlot" }, { type: "azure-native:web/v20210301:WebAppSlot" }, { type: "azure-native:web/v20220301:WebAppSlot" }, { type: "azure-native:web/v20220901:WebAppSlot" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WebAppSlot.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WebAppSlot resource.
 */
export interface WebAppSlotArgs {
    /**
     * <code>true</code> to enable client affinity; <code>false</code> to stop sending session affinity cookies, which route client requests in the same session to the same instance. Default is <code>true</code>.
     */
    clientAffinityEnabled?: pulumi.Input<boolean>;
    /**
     * <code>true</code> to enable client certificate authentication (TLS mutual authentication); otherwise, <code>false</code>. Default is <code>false</code>.
     */
    clientCertEnabled?: pulumi.Input<boolean>;
    /**
     * client certificate authentication comma-separated exclusion paths
     */
    clientCertExclusionPaths?: pulumi.Input<string>;
    /**
     * If specified during app creation, the app is cloned from a source app.
     */
    cloningInfo?: pulumi.Input<types.inputs.web.v20181101.CloningInfoArgs>;
    /**
     * Size of the function container.
     */
    containerSize?: pulumi.Input<number>;
    /**
     * Maximum allowed daily memory-time quota (applicable on dynamic apps only).
     */
    dailyMemoryTimeQuota?: pulumi.Input<number>;
    /**
     * <code>true</code> if the app is enabled; otherwise, <code>false</code>. Setting this value to false disables the app (takes the app offline).
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * GeoDistributions for this site
     */
    geoDistributions?: pulumi.Input<pulumi.Input<types.inputs.web.v20181101.GeoDistributionArgs>[]>;
    /**
     * Hostname SSL states are used to manage the SSL bindings for app's hostnames.
     */
    hostNameSslStates?: pulumi.Input<pulumi.Input<types.inputs.web.v20181101.HostNameSslStateArgs>[]>;
    /**
     * <code>true</code> to disable the public hostnames of the app; otherwise, <code>false</code>.
     *  If <code>true</code>, the app is only accessible via API management process.
     */
    hostNamesDisabled?: pulumi.Input<boolean>;
    /**
     * App Service Environment to use for the app.
     */
    hostingEnvironmentProfile?: pulumi.Input<types.inputs.web.v20181101.HostingEnvironmentProfileArgs>;
    /**
     * HttpsOnly: configures a web site to accept only https requests. Issues redirect for
     * http requests
     */
    httpsOnly?: pulumi.Input<boolean>;
    /**
     * Hyper-V sandbox.
     */
    hyperV?: pulumi.Input<boolean>;
    /**
     * Managed service identity.
     */
    identity?: pulumi.Input<types.inputs.web.v20181101.ManagedServiceIdentityArgs>;
    /**
     * Obsolete: Hyper-V sandbox.
     */
    isXenon?: pulumi.Input<boolean>;
    /**
     * Kind of resource.
     */
    kind?: pulumi.Input<string>;
    /**
     * Resource Location.
     */
    location?: pulumi.Input<string>;
    /**
     * Unique name of the app to create or update. To create or update a deployment slot, use the {slot} parameter.
     */
    name: pulumi.Input<string>;
    /**
     * Site redundancy mode
     */
    redundancyMode?: pulumi.Input<types.enums.v20181101.RedundancyMode>;
    /**
     * <code>true</code> if reserved; otherwise, <code>false</code>.
     */
    reserved?: pulumi.Input<boolean>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * <code>true</code> to stop SCM (KUDU) site when the app is stopped; otherwise, <code>false</code>. The default is <code>false</code>.
     */
    scmSiteAlsoStopped?: pulumi.Input<boolean>;
    /**
     * Resource ID of the associated App Service plan, formatted as: "/subscriptions/{subscriptionID}/resourceGroups/{groupName}/providers/Microsoft.Web/serverfarms/{appServicePlanName}".
     */
    serverFarmId?: pulumi.Input<string>;
    /**
     * Configuration of the app.
     */
    siteConfig?: pulumi.Input<types.inputs.web.v20181101.SiteConfigArgs>;
    /**
     * Name of the deployment slot to create or update. The name 'production' is reserved.
     */
    slot?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
