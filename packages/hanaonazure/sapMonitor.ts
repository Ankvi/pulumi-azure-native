import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * SAP monitor info on Azure (ARM properties and SAP monitor properties)
 * Azure REST API version: 2020-02-07-preview. Prior API version in Azure Native 1.x: 2020-02-07-preview.
 */
export class SapMonitor extends pulumi.CustomResource {
    /**
     * Get an existing SapMonitor resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SapMonitor {
        return new SapMonitor(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:hanaonazure:SapMonitor';

    /**
     * Returns true if the given object is an instance of SapMonitor.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SapMonitor {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SapMonitor.__pulumiType;
    }

    /**
     * The value indicating whether to send analytics to Microsoft
     */
    public readonly enableCustomerAnalytics!: pulumi.Output<boolean | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The ARM ID of the Log Analytics Workspace that is used for monitoring
     */
    public readonly logAnalyticsWorkspaceArmId!: pulumi.Output<string | undefined>;
    /**
     * The workspace ID of the log analytics workspace to be used for monitoring
     */
    public readonly logAnalyticsWorkspaceId!: pulumi.Output<string | undefined>;
    /**
     * The shared key of the log analytics workspace that is used for monitoring
     */
    public readonly logAnalyticsWorkspaceSharedKey!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource group the SAP Monitor resources get deployed into.
     */
    public /*out*/ readonly managedResourceGroupName!: pulumi.Output<string>;
    /**
     * The subnet which the SAP monitor will be deployed in
     */
    public readonly monitorSubnet!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * State of provisioning of the HanaInstance
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The version of the payload running in the Collector VM
     */
    public /*out*/ readonly sapMonitorCollectorVersion!: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SapMonitor resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SapMonitorArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["enableCustomerAnalytics"] = args ? args.enableCustomerAnalytics : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["logAnalyticsWorkspaceArmId"] = args ? args.logAnalyticsWorkspaceArmId : undefined;
            resourceInputs["logAnalyticsWorkspaceId"] = args ? args.logAnalyticsWorkspaceId : undefined;
            resourceInputs["logAnalyticsWorkspaceSharedKey"] = args ? args.logAnalyticsWorkspaceSharedKey : undefined;
            resourceInputs["monitorSubnet"] = args ? args.monitorSubnet : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sapMonitorName"] = args ? args.sapMonitorName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["managedResourceGroupName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sapMonitorCollectorVersion"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["enableCustomerAnalytics"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["logAnalyticsWorkspaceArmId"] = undefined /*out*/;
            resourceInputs["logAnalyticsWorkspaceId"] = undefined /*out*/;
            resourceInputs["logAnalyticsWorkspaceSharedKey"] = undefined /*out*/;
            resourceInputs["managedResourceGroupName"] = undefined /*out*/;
            resourceInputs["monitorSubnet"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sapMonitorCollectorVersion"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:hanaonazure/v20200207preview:SapMonitor" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SapMonitor.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SapMonitor resource.
 */
export interface SapMonitorArgs {
    /**
     * The value indicating whether to send analytics to Microsoft
     */
    enableCustomerAnalytics?: pulumi.Input<boolean>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The ARM ID of the Log Analytics Workspace that is used for monitoring
     */
    logAnalyticsWorkspaceArmId?: pulumi.Input<string>;
    /**
     * The workspace ID of the log analytics workspace to be used for monitoring
     */
    logAnalyticsWorkspaceId?: pulumi.Input<string>;
    /**
     * The shared key of the log analytics workspace that is used for monitoring
     */
    logAnalyticsWorkspaceSharedKey?: pulumi.Input<string>;
    /**
     * The subnet which the SAP monitor will be deployed in
     */
    monitorSubnet?: pulumi.Input<string>;
    /**
     * Name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the SAP monitor resource.
     */
    sapMonitorName?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}