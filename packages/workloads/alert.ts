import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A alert associated with SAP monitor.
 *
 * Uses Azure REST API version 2024-02-01-preview. In version 2.x of the Azure Native provider, it used API version 2024-02-01-preview.
 */
export class Alert extends pulumi.CustomResource {
    /**
     * Get an existing Alert resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Alert {
        return new Alert(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:workloads:Alert';

    /**
     * Returns true if the given object is an instance of Alert.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Alert {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Alert.__pulumiType;
    }

    /**
     * Describes the properties of an alert.
     */
    public readonly alertRuleProperties!: pulumi.Output<types.outputs.AlertRulePropertiesResponse | undefined>;
    /**
     * ID of the alert rule resource created.
     */
    public /*out*/ readonly alertRuleResourceId!: pulumi.Output<string>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Defines the alert instance errors.
     */
    public /*out*/ readonly errors!: pulumi.Output<types.outputs.ErrorDetailResponse>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Name of provider instances associated with the alert.
     */
    public readonly providerNames!: pulumi.Output<string[] | undefined>;
    /**
     * The provider type for alert. For example, the value can be SapHana.
     */
    public readonly providerType!: pulumi.Output<string | undefined>;
    /**
     * State of provisioning of the alert instance
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Name of the alert template from which it was created.
     */
    public readonly templateName!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Alert resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AlertArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.monitorName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'monitorName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["alertName"] = args ? args.alertName : undefined;
            resourceInputs["alertRuleProperties"] = args ? args.alertRuleProperties : undefined;
            resourceInputs["monitorName"] = args ? args.monitorName : undefined;
            resourceInputs["providerNames"] = args ? args.providerNames : undefined;
            resourceInputs["providerType"] = args ? args.providerType : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["templateName"] = args ? args.templateName : undefined;
            resourceInputs["alertRuleResourceId"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["errors"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["alertRuleProperties"] = undefined /*out*/;
            resourceInputs["alertRuleResourceId"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["errors"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["providerNames"] = undefined /*out*/;
            resourceInputs["providerType"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["templateName"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:workloads/v20240201preview:Alert" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Alert.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Alert resource.
 */
export interface AlertArgs {
    /**
     * Name of the SAP monitor alert resource.
     */
    alertName?: pulumi.Input<string>;
    /**
     * Describes the properties of an alert.
     */
    alertRuleProperties?: pulumi.Input<types.inputs.AlertRulePropertiesArgs>;
    /**
     * Name of the SAP monitor resource.
     */
    monitorName: pulumi.Input<string>;
    /**
     * Name of provider instances associated with the alert.
     */
    providerNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The provider type for alert. For example, the value can be SapHana.
     */
    providerType?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the alert template from which it was created.
     */
    templateName?: pulumi.Input<string>;
}