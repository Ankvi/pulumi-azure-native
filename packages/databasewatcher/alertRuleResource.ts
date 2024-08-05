import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Concrete proxy resource types can be created by aliasing this type using a specific property type.
 * Azure REST API version: 2024-07-19-preview.
 */
export class AlertRuleResource extends pulumi.CustomResource {
    /**
     * Get an existing AlertRuleResource resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AlertRuleResource {
        return new AlertRuleResource(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:databasewatcher:AlertRuleResource';

    /**
     * Returns true if the given object is an instance of AlertRuleResource.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AlertRuleResource {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AlertRuleResource.__pulumiType;
    }

    /**
     * The resource ID of the alert rule resource.
     */
    public readonly alertRuleResourceId!: pulumi.Output<string>;
    /**
     * The template ID associated with alert rule resource.
     */
    public readonly alertRuleTemplateId!: pulumi.Output<string>;
    /**
     * The alert rule template version.
     */
    public readonly alertRuleTemplateVersion!: pulumi.Output<string>;
    /**
     * The properties with which the alert rule resource was created.
     */
    public readonly createdWithProperties!: pulumi.Output<string>;
    /**
     * The creation time of the alert rule resource.
     */
    public readonly creationTime!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the alert rule resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a AlertRuleResource resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AlertRuleResourceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.alertRuleResourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'alertRuleResourceId'");
            }
            if ((!args || args.alertRuleTemplateId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'alertRuleTemplateId'");
            }
            if ((!args || args.alertRuleTemplateVersion === undefined) && !opts.urn) {
                throw new Error("Missing required property 'alertRuleTemplateVersion'");
            }
            if ((!args || args.createdWithProperties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'createdWithProperties'");
            }
            if ((!args || args.creationTime === undefined) && !opts.urn) {
                throw new Error("Missing required property 'creationTime'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.watcherName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'watcherName'");
            }
            resourceInputs["alertRuleResourceId"] = args ? args.alertRuleResourceId : undefined;
            resourceInputs["alertRuleResourceName"] = args ? args.alertRuleResourceName : undefined;
            resourceInputs["alertRuleTemplateId"] = args ? args.alertRuleTemplateId : undefined;
            resourceInputs["alertRuleTemplateVersion"] = args ? args.alertRuleTemplateVersion : undefined;
            resourceInputs["createdWithProperties"] = args ? args.createdWithProperties : undefined;
            resourceInputs["creationTime"] = args ? args.creationTime : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["watcherName"] = args ? args.watcherName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["alertRuleResourceId"] = undefined /*out*/;
            resourceInputs["alertRuleTemplateId"] = undefined /*out*/;
            resourceInputs["alertRuleTemplateVersion"] = undefined /*out*/;
            resourceInputs["createdWithProperties"] = undefined /*out*/;
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:databasewatcher/v20240719preview:AlertRuleResource" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AlertRuleResource.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AlertRuleResource resource.
 */
export interface AlertRuleResourceArgs {
    /**
     * The resource ID of the alert rule resource.
     */
    alertRuleResourceId: pulumi.Input<string>;
    /**
     * The alert rule proxy resource name.
     */
    alertRuleResourceName?: pulumi.Input<string>;
    /**
     * The template ID associated with alert rule resource.
     */
    alertRuleTemplateId: pulumi.Input<string>;
    /**
     * The alert rule template version.
     */
    alertRuleTemplateVersion: pulumi.Input<string>;
    /**
     * The properties with which the alert rule resource was created.
     */
    createdWithProperties: pulumi.Input<string | types.enums.AlertRuleCreationProperties>;
    /**
     * The creation time of the alert rule resource.
     */
    creationTime: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The database watcher name.
     */
    watcherName: pulumi.Input<string>;
}