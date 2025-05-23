import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * SAP monitor info on Azure (ARM properties and SAP monitor properties)
 *
 * Uses Azure REST API version 2024-02-01-preview. In version 2.x of the Azure Native provider, it used API version 2023-12-01-preview.
 *
 * Other available API versions: 2023-04-01, 2023-10-01-preview, 2023-12-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native workloads [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Monitor extends pulumi.CustomResource {
    /**
     * Get an existing Monitor resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Monitor {
        return new Monitor(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:workloads:Monitor';

    /**
     * Returns true if the given object is an instance of Monitor.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Monitor {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Monitor.__pulumiType;
    }

    /**
     * The SAP monitor resources will be deployed in the SAP monitoring region. The subnet region should be same as the SAP monitoring region.
     */
    public readonly appLocation!: pulumi.Output<string | undefined>;
    /**
     * App service plan configuration
     */
    public readonly appServicePlanConfiguration!: pulumi.Output<types.outputs.AppServicePlanConfigurationResponse | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Defines the SAP monitor errors.
     */
    public /*out*/ readonly errors!: pulumi.Output<types.outputs.ErrorDetailResponse>;
    /**
     * The managed service identities assigned to this resource.
     */
    public readonly identity!: pulumi.Output<types.outputs.ManagedServiceIdentityResponse | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The ARM ID of the Log Analytics Workspace that is used for SAP monitoring.
     */
    public readonly logAnalyticsWorkspaceArmId!: pulumi.Output<string | undefined>;
    /**
     * Managed resource group configuration
     */
    public readonly managedResourceGroupConfiguration!: pulumi.Output<types.outputs.ManagedResourceGroupConfigurationResponse | undefined>;
    /**
     * The subnet which the SAP monitor will be deployed in
     */
    public readonly monitorSubnet!: pulumi.Output<string | undefined>;
    /**
     * The ARM ID of the MSI used for SAP monitoring.
     */
    public /*out*/ readonly msiArmId!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * State of provisioning of the SAP monitor.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Sets the routing preference of the SAP monitor. By default only RFC1918 traffic is routed to the customer VNET.
     */
    public readonly routingPreference!: pulumi.Output<string | undefined>;
    /**
     * The ARM ID of the Storage account used for SAP monitoring.
     */
    public /*out*/ readonly storageAccountArmId!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Sets the preference for zone redundancy on resources created for the SAP monitor. By default resources will be created which do not support zone redundancy.
     */
    public readonly zoneRedundancyPreference!: pulumi.Output<string | undefined>;

    /**
     * Create a Monitor resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MonitorArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["appLocation"] = args ? args.appLocation : undefined;
            resourceInputs["appServicePlanConfiguration"] = args ? args.appServicePlanConfiguration : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["logAnalyticsWorkspaceArmId"] = args ? args.logAnalyticsWorkspaceArmId : undefined;
            resourceInputs["managedResourceGroupConfiguration"] = args ? args.managedResourceGroupConfiguration : undefined;
            resourceInputs["monitorName"] = args ? args.monitorName : undefined;
            resourceInputs["monitorSubnet"] = args ? args.monitorSubnet : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["routingPreference"] = args ? args.routingPreference : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["zoneRedundancyPreference"] = args ? args.zoneRedundancyPreference : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["errors"] = undefined /*out*/;
            resourceInputs["msiArmId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["storageAccountArmId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["appLocation"] = undefined /*out*/;
            resourceInputs["appServicePlanConfiguration"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["errors"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["logAnalyticsWorkspaceArmId"] = undefined /*out*/;
            resourceInputs["managedResourceGroupConfiguration"] = undefined /*out*/;
            resourceInputs["monitorSubnet"] = undefined /*out*/;
            resourceInputs["msiArmId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["routingPreference"] = undefined /*out*/;
            resourceInputs["storageAccountArmId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["zoneRedundancyPreference"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:workloads/v20211201preview:Monitor" }, { type: "azure-native:workloads/v20221101preview:Monitor" }, { type: "azure-native:workloads/v20230401:Monitor" }, { type: "azure-native:workloads/v20231001preview:Monitor" }, { type: "azure-native:workloads/v20231201preview:Monitor" }, { type: "azure-native:workloads/v20240201preview:Monitor" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Monitor.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Monitor resource.
 */
export interface MonitorArgs {
    /**
     * The SAP monitor resources will be deployed in the SAP monitoring region. The subnet region should be same as the SAP monitoring region.
     */
    appLocation?: pulumi.Input<string>;
    /**
     * App service plan configuration
     */
    appServicePlanConfiguration?: pulumi.Input<types.inputs.AppServicePlanConfigurationArgs>;
    /**
     * The managed service identities assigned to this resource.
     */
    identity?: pulumi.Input<types.inputs.ManagedServiceIdentityArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The ARM ID of the Log Analytics Workspace that is used for SAP monitoring.
     */
    logAnalyticsWorkspaceArmId?: pulumi.Input<string>;
    /**
     * Managed resource group configuration
     */
    managedResourceGroupConfiguration?: pulumi.Input<types.inputs.ManagedResourceGroupConfigurationArgs>;
    /**
     * Name of the SAP monitor resource.
     */
    monitorName?: pulumi.Input<string>;
    /**
     * The subnet which the SAP monitor will be deployed in
     */
    monitorSubnet?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Sets the routing preference of the SAP monitor. By default only RFC1918 traffic is routed to the customer VNET.
     */
    routingPreference?: pulumi.Input<string | types.enums.RoutingPreference>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Sets the preference for zone redundancy on resources created for the SAP monitor. By default resources will be created which do not support zone redundancy.
     */
    zoneRedundancyPreference?: pulumi.Input<string>;
}