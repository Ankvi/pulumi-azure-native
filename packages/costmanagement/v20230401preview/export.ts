import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An export resource.
 */
export class Export extends pulumi.CustomResource {
    /**
     * Get an existing Export resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Export {
        return new Export(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:costmanagement/v20230401preview:Export';

    /**
     * Returns true if the given object is an instance of Export.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Export {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Export.__pulumiType;
    }

    /**
     * Has the definition for the export.
     */
    public readonly definition!: pulumi.Output<types.outputs.ExportDefinitionResponse>;
    /**
     * Has delivery information for the export.
     */
    public readonly deliveryInfo!: pulumi.Output<types.outputs.ExportDeliveryInfoResponse>;
    /**
     * eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
     */
    public readonly eTag!: pulumi.Output<string | undefined>;
    /**
     * The format of the export being delivered. Currently only 'Csv' is supported.
     */
    public readonly format!: pulumi.Output<string | undefined>;
    /**
     * The managed identity associated with Export
     */
    public readonly identity!: pulumi.Output<types.outputs.SystemAssignedServiceIdentityResponse | undefined>;
    /**
     * The location of the Export's managed identity. Only required when utilizing managed identity.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * If the export has an active schedule, provides an estimate of the next run time.
     */
    public /*out*/ readonly nextRunTimeEstimate!: pulumi.Output<string>;
    /**
     * If set to true, exported data will be partitioned by size and placed in a blob directory together with a manifest file. Note: this option is currently available only for Microsoft Customer Agreement commerce scopes.
     */
    public readonly partitionData!: pulumi.Output<boolean | undefined>;
    /**
     * If requested, has the most recent run history for the export.
     */
    public /*out*/ readonly runHistory!: pulumi.Output<types.outputs.ExportExecutionListResultResponse | undefined>;
    /**
     * Has schedule information for the export.
     */
    public readonly schedule!: pulumi.Output<types.outputs.ExportScheduleResponse | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Export resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ExportArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.definition === undefined) && !opts.urn) {
                throw new Error("Missing required property 'definition'");
            }
            if ((!args || args.deliveryInfo === undefined) && !opts.urn) {
                throw new Error("Missing required property 'deliveryInfo'");
            }
            if ((!args || args.scope === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scope'");
            }
            resourceInputs["definition"] = args ? args.definition : undefined;
            resourceInputs["deliveryInfo"] = args ? args.deliveryInfo : undefined;
            resourceInputs["eTag"] = args ? args.eTag : undefined;
            resourceInputs["exportName"] = args ? args.exportName : undefined;
            resourceInputs["format"] = args ? args.format : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["partitionData"] = args ? args.partitionData : undefined;
            resourceInputs["schedule"] = args ? args.schedule : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nextRunTimeEstimate"] = undefined /*out*/;
            resourceInputs["runHistory"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["definition"] = undefined /*out*/;
            resourceInputs["deliveryInfo"] = undefined /*out*/;
            resourceInputs["eTag"] = undefined /*out*/;
            resourceInputs["format"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nextRunTimeEstimate"] = undefined /*out*/;
            resourceInputs["partitionData"] = undefined /*out*/;
            resourceInputs["runHistory"] = undefined /*out*/;
            resourceInputs["schedule"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:costmanagement:Export" }, { type: "azure-native:costmanagement/v20190101:Export" }, { type: "azure-native:costmanagement/v20190901:Export" }, { type: "azure-native:costmanagement/v20191001:Export" }, { type: "azure-native:costmanagement/v20191101:Export" }, { type: "azure-native:costmanagement/v20200601:Export" }, { type: "azure-native:costmanagement/v20201201preview:Export" }, { type: "azure-native:costmanagement/v20210101:Export" }, { type: "azure-native:costmanagement/v20211001:Export" }, { type: "azure-native:costmanagement/v20221001:Export" }, { type: "azure-native:costmanagement/v20230301:Export" }, { type: "azure-native:costmanagement/v20230801:Export" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Export.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Export resource.
 */
export interface ExportArgs {
    /**
     * Has the definition for the export.
     */
    definition: pulumi.Input<types.inputs.ExportDefinitionArgs>;
    /**
     * Has delivery information for the export.
     */
    deliveryInfo: pulumi.Input<types.inputs.ExportDeliveryInfoArgs>;
    /**
     * eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
     */
    eTag?: pulumi.Input<string>;
    /**
     * Export Name.
     */
    exportName?: pulumi.Input<string>;
    /**
     * The format of the export being delivered. Currently only 'Csv' is supported.
     */
    format?: pulumi.Input<string | types.enums.FormatType>;
    /**
     * The managed identity associated with Export
     */
    identity?: pulumi.Input<types.inputs.SystemAssignedServiceIdentityArgs>;
    /**
     * The location of the Export's managed identity. Only required when utilizing managed identity.
     */
    location?: pulumi.Input<string>;
    /**
     * If set to true, exported data will be partitioned by size and placed in a blob directory together with a manifest file. Note: this option is currently available only for Microsoft Customer Agreement commerce scopes.
     */
    partitionData?: pulumi.Input<boolean>;
    /**
     * Has schedule information for the export.
     */
    schedule?: pulumi.Input<types.inputs.ExportScheduleArgs>;
    /**
     * The scope associated with export operations. This includes '/subscriptions/{subscriptionId}/' for subscription scope, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope and '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, '/providers/Microsoft.Management/managementGroups/{managementGroupId} for Management Group scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for billingProfile scope, '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}/invoiceSections/{invoiceSectionId}' for invoiceSection scope, and '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/customers/{customerId}' specific for partners.
     */
    scope: pulumi.Input<string>;
}
